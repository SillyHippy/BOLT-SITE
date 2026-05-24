/**
 * Move county short-slug 301 rules to the top of public/_redirects (after /index.html).
 * Cloudflare Pages only applies ~306 rules from this file in practice when many
 * lower-priority rules precede them; Bing 404s on /counties/payne etc. need these first.
 *
 * Usage: node scripts/prioritize-county-redirects.mjs
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REDIRECTS = path.join(__dirname, '..', 'public', '_redirects');

const COUNTY_LINE = /^(\/counties\/[^\s]+)\s+(\/counties\/[^\s]+)\s+301\s*$/;
const EXTRA_PRIORITY = [
  '/compare/process-server-vs-sheriff /process-server-vs-sheriff 301',
  '/counties/le-flore /counties/leflore-county 301',
];

/** @param {string} text */
function parseLines(text) {
  return text.split(/\r?\n/);
}

async function main() {
  const raw = await fs.readFile(REDIRECTS, 'utf8');
  const lines = parseLines(raw);

  /** @type {string[]} */
  const countyRules = [];
  /** @type {Set<string>} */
  const countySources = new Set();
  /** @type {string[]} */
  const rest = [];

  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('# ── 0b. Priority SEO redirects')) continue;
    const m = t.match(COUNTY_LINE);
    if (m && !m[1].endsWith('-county') && m[2] === `${m[1]}-county`) {
      if (!countySources.has(m[1])) {
        countyRules.push(`${m[1]} ${m[2]} 301`);
        countySources.add(m[1]);
      }
      continue;
    }
    if (t.startsWith('# ── 10b. County short slug')) continue;
    if (t === '/compare/process-server-vs-sheriff /process-server-vs-sheriff 301') continue;
    if (t === '/counties/le-flore /counties/leflore-county 301') continue;
    rest.push(line);
  }

  countyRules.sort((a, b) => a.localeCompare(b));

  /** @type {string[]} */
  const priorityBlock = [...EXTRA_PRIORITY, ...countyRules];

  const header = [
    '# ── 0b. Priority SEO redirects (county short slugs, compare alias) ──',
    '# regen: node scripts/prioritize-county-redirects.mjs',
    ...priorityBlock,
    '',
  ].join('\n');

  const idx = rest.findIndex((l) => l.trim() === '/index.html / 301');
  if (idx === -1) throw new Error('Could not find /index.html redirect anchor');

  const out = [...rest.slice(0, idx + 1), '', ...header.split('\n'), ...rest.slice(idx + 1)];

  // Point legacy compare hops directly at canonical comparison page
  const fixed = out.map((line) => {
    const t = line.trim();
    if (t === '/process-server-vs-constable /compare/process-server-vs-sheriff 301') {
      return '/process-server-vs-constable /process-server-vs-sheriff 301';
    }
    if (t === '/sheriff-vs-process-server /compare/process-server-vs-sheriff 301') {
      return '/sheriff-vs-process-server /process-server-vs-sheriff 301';
    }
    return line;
  });

  await fs.writeFile(REDIRECTS, fixed.join('\n').replace(/\n{3,}/g, '\n\n') + '\n', 'utf8');
  console.log(`Prioritized ${priorityBlock.length} county/compare rules after /index.html`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
