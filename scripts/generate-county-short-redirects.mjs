/**
 * Emit Cloudflare Pages _redirects lines: /counties/{short} → /counties/{full}
 * for each content/counties/*.md whose basename ends with `-county` (not `-county-ar`).
 * Skips duplicates if the source path already exists in public/_redirects.
 * Does not redirect bare `/counties/crawford` → crawford-county-ar (ambiguous).
 *
 * Usage: node scripts/generate-county-short-redirects.mjs
 * Pipe or paste into _redirects as needed (postbuild hooks may call this later).
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const COUNTIES_DIR = path.join(ROOT, 'content', 'counties');
const REDIRECTS_FILE = path.join(ROOT, 'public', '_redirects');

const SKIP_FILES = new Set([
  'tulsa-county-enhanced.md', // editorial / not in static slug list per markdown-utils
]);

async function existingSources() {
  const text = await fs.readFile(REDIRECTS_FILE, 'utf8');
  /** @type {Set<string>} */
  const sources = new Set();
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const first = t.split(/\s+/)[0];
    if (first?.startsWith('/')) sources.add(first);
  }
  return sources;
}

async function main() {
  const files = await fs.readdir(COUNTIES_DIR);
  const md = files.filter((f) => f.endsWith('.md') && !SKIP_FILES.has(f));
  const sources = await existingSources();
  /** @type {Array<{ src: string; dest: string }>} */
  const rules = [];

  /** Counties with routes but no `{slug}-county.md` in this folder (e.g. app-only page). */
  const extra = [
    { src: '/counties/tulsa', dest: '/counties/tulsa-county' },
    { src: '/counties/le-flore', dest: '/counties/leflore-county' },
  ];

  for (const f of md.sort()) {
    const slug = f.replace(/\.md$/, '');
    if (!slug.endsWith('-county')) continue;
    const short = slug.slice(0, -'-county'.length);
    if (!short || short.includes('/')) continue;
    if (slug === 'crawford-county-ar') continue; // never map bare crawford ambiguously

    const src = `/counties/${short}`;
    const dest = `/counties/${slug}`;
    if (src === dest) continue;
    rules.push({ src, dest });
  }

  for (const x of extra) {
    rules.push({ src: x.src, dest: x.dest });
  }

  rules.sort((a, b) => a.src.localeCompare(b.src));

  const lines = [`# ── 10b. County short slug → canonical ──────────────────────────`];

  let added = 0;
  for (const r of rules) {
    if (sources.has(r.src)) continue;
    lines.push(`${r.src} ${r.dest} 301`);
    added++;
  }

  console.log(lines.join('\n'));
  console.error(`# stderr: appended ${added} new rules (${rules.length - added} duplicates or pre-existing skipped)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
