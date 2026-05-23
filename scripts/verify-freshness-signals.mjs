/**
 * Verify content freshness signals on priority commercial pages.
 * Checks JSON-LD, meta tags, and sitemap lastmod (within 6 months).
 * Usage: node scripts/verify-freshness-signals.mjs
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const BASE_URL =
  process.env.BASE_URL?.replace(/\/$/, '') ?? 'https://justlegalsolutions.org';
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');
const OUT_MD = path.join(ROOT, 'docs', 'freshness-signals-verification.md');

const PRIORITY_PATHS = [
  '/',
  '/tulsa-process-server',
  '/pricing',
  '/contact',
  '/process-serving',
  '/same-day-process-server',
  '/urgent-process-server',
  '/skip-tracing',
  '/subpoena-service',
  '/eviction-notice-service',
  '/courier-services',
  '/notary',
  '/mobile-notary',
  '/apostille',
];

const FRESHNESS_WINDOW_MS = 183 * 24 * 60 * 60 * 1000; // ~6 months
const TIMEOUT_MS = Number.parseInt(process.env.VERIFY_TIMEOUT_MS ?? '20000', 10);

function normalizePath(urlPath) {
  if (!urlPath || urlPath === '/') return '/';
  return urlPath.replace(/\/$/, '') || '/';
}

function parseDate(value) {
  if (!value || typeof value !== 'string') return null;
  const d = new Date(value.includes('T') ? value : `${value}T12:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function isFresh(date) {
  if (!date) return false;
  return Date.now() - date.getTime() <= FRESHNESS_WINDOW_MS;
}

function collectJsonLdDates(html) {
  const dates = [];
  const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block[1]);
      const nodes = parsed['@graph'] ?? [parsed];
      for (const node of nodes) {
        if (node?.dateModified) dates.push({ field: 'dateModified', value: node.dateModified, type: node['@type'] });
        if (node?.datePublished) dates.push({ field: 'datePublished', value: node.datePublished, type: node['@type'] });
      }
    } catch {
      // ignore malformed JSON-LD blocks
    }
  }
  return dates;
}

function collectMetaDates(html) {
  const dates = [];
  const patterns = [
    /<meta[^>]+(?:name|property)=["'](?:last-modified|article:modified_time|article:published_time|dateModified|datePublished)["'][^>]+content=["']([^"']+)["'][^>]*>/gi,
    /<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["'](?:last-modified|article:modified_time|article:published_time|dateModified|datePublished)["'][^>]*>/gi,
  ];
  for (const pattern of patterns) {
    for (const match of html.matchAll(pattern)) {
      dates.push(match[1]);
    }
  }
  return dates;
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const tid = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'JLS-freshness-verify/1.0' },
    });
    clearTimeout(tid);
    if (!res.ok) {
      return { ok: false, status: res.status, html: '' };
    }
    const html = await res.text();
    return { ok: true, status: res.status, html };
  } catch (e) {
    clearTimeout(tid);
    return { ok: false, status: e.name === 'AbortError' ? 'TIMEOUT' : String(e.message), html: '' };
  }
}

async function loadSitemapLastmods() {
  const xml = await fs.readFile(SITEMAP, 'utf8');
  const map = new Map();
  for (const match of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
    try {
      const pathname = normalizePath(new URL(match[1]).pathname);
      map.set(pathname, match[2].trim());
    } catch {
      // skip invalid loc
    }
  }
  return map;
}

async function main() {
  const sitemapLastmods = await loadSitemapLastmods();
  const results = [];

  for (const pagePath of PRIORITY_PATHS) {
    const url = pagePath === '/' ? `${BASE_URL}/` : `${BASE_URL}${pagePath}`;
    const fetchResult = await fetchHtml(url);
    const jsonLdDates = fetchResult.html ? collectJsonLdDates(fetchResult.html) : [];
    const metaDates = fetchResult.html ? collectMetaDates(fetchResult.html) : [];
    const sitemapLastmod = sitemapLastmods.get(normalizePath(pagePath));

    const jsonLdFresh = jsonLdDates.some((d) => isFresh(parseDate(d.value)));
    const metaFresh = metaDates.some((d) => isFresh(parseDate(d)));
    const sitemapFresh = isFresh(parseDate(sitemapLastmod));

    const pass = fetchResult.ok && (jsonLdFresh || metaFresh || sitemapFresh);

    results.push({
      path: pagePath,
      url,
      httpStatus: fetchResult.status,
      pass,
      jsonLdFresh,
      metaFresh,
      sitemapFresh,
      jsonLdCount: jsonLdDates.length,
      metaCount: metaDates.length,
      sitemapLastmod: sitemapLastmod ?? 'missing',
    });
  }

  const passed = results.filter((r) => r.pass).length;
  const now = new Date().toISOString();

  let md = `<!-- Generated by scripts/verify-freshness-signals.mjs — DO NOT edit by hand -->\n\n`;
  md += `# Content freshness verification\n\n`;
  md += `- **When:** ${now}\n`;
  md += `- **Base:** ${BASE_URL}\n`;
  md += `- **Pass threshold:** date signal within ~6 months\n`;
  md += `- **Passed:** ${passed}/${results.length}\n\n`;
  md += `| Path | HTTP | JSON-LD | Meta | Sitemap lastmod | Pass |\n`;
  md += `|------|------|---------|------|-----------------|------|\n`;
  for (const r of results) {
    md += `| \`${r.path}\` | ${r.httpStatus} | ${r.jsonLdFresh ? 'yes' : 'no'} (${r.jsonLdCount}) | ${r.metaFresh ? 'yes' : 'no'} (${r.metaCount}) | ${r.sitemapLastmod} | ${r.pass ? 'PASS' : 'FAIL'} |\n`;
  }

  await fs.writeFile(OUT_MD, md, 'utf8');

  console.log(`Freshness signals: ${passed}/${results.length} passed`);
  console.log(`Report: ${OUT_MD}`);

  const failures = results.filter((r) => !r.pass);
  if (failures.length > 0) {
    console.error('\nFailures:');
    for (const f of failures) {
      console.error(`  ${f.path} — HTTP ${f.httpStatus}, JSON-LD ${f.jsonLdFresh}, meta ${f.metaFresh}, sitemap ${f.sitemapFresh}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
