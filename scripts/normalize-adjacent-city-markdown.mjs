/**
 * Normalize list lines whose bold/link combo confuses brittle scrapers:
 * - `- **[label](href)** [-–…] remainder` → `- [label](href) — remainder`
 * - `- **[label](href)** (compass)` → `- [label](href) (compass)`
 * - `- **[label](href) - remainder` → `- [label](href) — remainder`
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = path.join(__dirname, '..', 'content');

async function walkMarkdown(dir, acc = []) {
  const ents = await fs.readdir(dir, { withFileTypes: true });
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walkMarkdown(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

/** @param {string} line */
export function normalizeLine(line) {
  const outer = /^(\s*)-\s*\*\*(?<lnk>\[[^\]]+\]\([^)]+\))(?<aft>.*)$/m.exec(
    line
  );
  if (!outer?.groups?.lnk || outer.groups.aft === undefined) return line;
  const indent = outer[1];
  const { lnk, aft } = outer.groups;

  /** Missing `]**`: aft is like ` - 10 minutes` */
  const miss = aft.match(/^ - (.+)/);
  if (!miss?.[1]) {
    /** continue */
  } else if (!aft.includes('**')) {
    return `${indent}- ${lnk} — ${miss[1].trimEnd()}`;
  }

  /** `**` + space + hyphen + remainder */
  let m = aft.match(/^\*\*\s+([\u002D\u2013\u2014\u2015\u2212])\s+(.*)$/);
  if (m) return `${indent}- ${lnk} — ${m[2].trimEnd()}`;

  /** glued en/em dash after `**` */
  m = aft.match(/^\*\*([\u2013\u2014\u2015\u2212])(.*)$/);
  if (m) return `${indent}- ${lnk} — ${m[2].replace(/^\s+/, '').trimEnd()}`;

  /** compass `** (west)` */
  m = aft.match(/^\*\*\s+(\([^)]*\))(.*)$/);
  if (m) return `${indent}- ${lnk} ${m[1]}${m[2].trimEnd()}`;

  return line;
}

/** @param {string} text */
export function normalizeContent(text) {
  return text
    .split('\n')
    .map((l) => normalizeLine(l))
    .join('\n');
}

async function main() {
  const dry = process.argv.includes('--dry-run');
  const paths = await walkMarkdown(CONTENT);
  let edits = 0;
  for (const f of paths) {
    const before = await fs.readFile(f, 'utf8');
    const after = normalizeContent(before);
    if (after === before) continue;
    edits++;
    if (!dry) await fs.writeFile(f, after, 'utf8');
    console.error(
      dry ? `[dry-run] ${path.relative(path.join(CONTENT, '..'), f)}` : `[write] ${f}`
    );
  }
  console.error(dry ? `[dry-run] ${edits} file(s)` : `Edited ${edits} markdown file(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
