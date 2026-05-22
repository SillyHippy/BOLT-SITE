/**
 * Layer 3: probe original audit export URLs (raw + normalized) on production.
 * Uses _redirects for second-chance probes when source path 404s.
 * Usage: node scripts/verify-audit-export.mjs
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BASELINE = path.join(ROOT, 'docs', 'audit-urls-baseline.txt');
const REDIRECTS = path.join(ROOT, 'public', '_redirects');
const COUNTIES_DIR = path.join(ROOT, 'content', 'counties');
const OUT = path.join(ROOT, 'docs', 'audit-export-verification.md');

const BASE =
  process.env.BASE_URL?.replace(/\/$/, '') ?? 'https://justlegalsolutions.org';
const TIMEOUT_MS = Number.parseInt(process.env.VERIFY_TIMEOUT_MS ?? '20000', 10);
const CONCURRENCY = Number.parseInt(process.env.VERIFY_CONCURRENCY ?? '8', 10);

const EXCLUDE_PREFIXES = ['/cdn-cgi/'];

async function loadRedirectMap() {
  const text = await fs.readFile(REDIRECTS, 'utf8');
  /** @type {Map<string, string>} */
  const map = new Map();
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const parts = t.split(/\s+/);
    if (parts.length >= 3 && parts[2] === '301') map.set(parts[0], parts[1]);
  }
  return map;
}

async function countyShortSlugs() {
  const files = await fs.readdir(COUNTIES_DIR);
  const slugs = new Set();
  for (const f of files) {
    if (!f.endsWith('.md') || f === 'tulsa-county-enhanced.md') continue;
    const full = f.replace(/\.md$/, '');
    if (!full.endsWith('-county')) continue;
    slugs.add(full.slice(0, -'-county'.length));
  }
  slugs.add('tulsa');
  return slugs;
}

function normalizeAuditUrl(rawUrl, countyShort) {
  let u = rawUrl.trim();
  if (!u || u.startsWith('#')) return null;

  const parsed = new URL(u);
  let pathOnly = parsed.pathname.replace(/\/$/, '') || '/';
  pathOnly = pathOnly.replace(/\)\*+$/, '').replace(/\*+$/, '');

  if (pathOnly.endsWith('.xlsx') || pathOnly.endsWith('.xls')) {
    return {
      raw: rawUrl,
      probePath: pathOnly,
      category: 'excluded',
      reason: 'download-asset',
    };
  }

  if (EXCLUDE_PREFIXES.some((p) => pathOnly.startsWith(p))) {
    return {
      raw: rawUrl,
      probePath: pathOnly,
      category: 'excluded',
      reason: 'cdn-cgi',
    };
  }

  const countyMatch = pathOnly.match(/^\/counties\/([a-z0-9-]+)$/);
  if (countyMatch) {
    const short = countyMatch[1];
    if (!short.endsWith('-county') && countyShort.has(short) && short !== 'crawford') {
      return {
        raw: rawUrl,
        probePath: `/counties/${short}-county`,
        category: 'county-short',
        reason: 'expanded-county-slug',
      };
    }
    if (short === 'le-flore' && countyShort.has('leflore')) {
      return {
        raw: rawUrl,
        probePath: '/counties/leflore-county',
        category: 'county-short',
        reason: 'le-flore-alias',
      };
    }
  }

  if (pathOnly.match(/\/service-areas\/(ada|lawton)$/)) {
    return {
      raw: rawUrl,
      probePath: pathOnly,
      category: 'malformed-stripped',
      reason: 'markdown-junk-stripped',
    };
  }

  return {
    raw: rawUrl,
    probePath: pathOnly,
    category: 'unchanged',
    reason: 'direct',
  };
}

async function probe(url) {
  const controller = new AbortController();
  const tid = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'JLS-audit-verify/1.0' },
    });
    if (res.status === 405) {
      res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'User-Agent': 'JLS-audit-verify/1.0' },
      });
    }
    clearTimeout(tid);
    return { status: res.status, finalUrl: res.url, ok: res.status >= 200 && res.status < 400 };
  } catch (e) {
    clearTimeout(tid);
    return {
      status: e.name === 'AbortError' ? 'TIMEOUT' : String(e.message),
      finalUrl: url,
      ok: false,
    };
  }
}

async function main() {
  const redirectMap = await loadRedirectMap();
  const countyShort = await countyShortSlugs();
  const text = await fs.readFile(BASELINE, 'utf8');
  const rawUrls = text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  const entries = rawUrls.map((raw) => normalizeAuditUrl(raw, countyShort)).filter(Boolean);

  const results = [];
  let i = 0;
  async function worker() {
    while (i < entries.length) {
      const idx = i++;
      const e = entries[idx];
      if (e.category === 'excluded') {
        results[idx] = { ...e, ok: true, status: 'SKIP', via: 'excluded' };
        continue;
      }

      const primary = `${BASE}${e.probePath}`;
      let r = await probe(primary);
      let via = 'direct';

      if (!r.ok && redirectMap.has(e.probePath)) {
        const dest = `${BASE}${redirectMap.get(e.probePath)}`;
        r = await probe(dest);
        via = `redirect-rule→${redirectMap.get(e.probePath)}`;
      }

      if (!r.ok && e.category === 'county-short') {
        const rawPath = new URL(e.raw).pathname.replace(/\/$/, '');
        const rawProbe = `${BASE}${rawPath}`;
        const rr = await probe(rawProbe);
        if (rr.ok) {
          r = rr;
          via = 'county-short-redirect-live';
        }
      }

      results[idx] = { ...e, ok: r.ok, status: r.status, finalUrl: r.finalUrl, via };
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, entries.length) }, () => worker())
  );

  const probed = results.filter((r) => r.category !== 'excluded');
  const failed = probed.filter((r) => !r.ok);
  const countyFix = probed.filter((r) => r.category === 'county-short');
  const countyFail = countyFix.filter((r) => !r.ok);
  const now = new Date().toISOString();

  let md = `<!-- Generated by scripts/verify-audit-export.mjs — DO NOT edit by hand -->\n\n`;
  md += `# Audit export HTTP verification (Layer 3)\n\n`;
  md += `- **When:** ${now}\n`;
  md += `- **Base:** ${BASE}\n`;
  md += `- **Baseline URLs:** ${rawUrls.length}\n`;
  md += `- **Excluded (cdn-cgi):** ${results.filter((r) => r.category === 'excluded').length}\n`;
  md += `- **Probed:** ${probed.length}\n`;
  md += `- **Failures after normalize + redirect map:** ${failed.length}\n`;
  md += `- **County-short failures:** ${countyFail.length}\n\n`;

  const deployNote =
    failed.length === 0
      ? `**Pass:** All probed audit URLs resolve (200–399) after normalization and known redirect rules.\n\n`
      : `**Note:** Some failures may clear after the next Cloudflare deploy (sections 10a/10c in \`_redirects\`).\n\n`;

  md += deployNote;

  if (failed.length) {
    md += `## Failures\n\n| Raw | Probe path | Status | Via |\n|-----|------------|--------|-----|\n`;
    for (const e of failed) {
      md += `| ${e.raw} | ${e.probePath} | ${e.status} | ${e.via} |\n`;
    }
    md += `\n`;
  }

  md += `## County-short rows (${countyFix.length})\n\n`;
  md += countyFail.length === 0
    ? `_All county short slugs OK._\n\n`
    : `${countyFail.length} still failing — see failures table.\n\n`;

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, md, 'utf8');
  console.log(`Wrote ${OUT}`);
  console.log(`Failures: ${failed.length} (county-short: ${countyFail.length})`);

  const blockers = countyFail.length > 0;
  if (blockers) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
