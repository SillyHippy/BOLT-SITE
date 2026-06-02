#!/usr/bin/env node
/**
 * Add AeoProcessServingHubLinks to blog posts missing it (before Footer).
 * Run: node scripts/inject-blog-hub-links.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'app', 'blog');

const IMPORT =
  "import AeoProcessServingHubLinks from '@/components/seo/aeo-process-serving-hub-links';";
const NOTARY_IMPORT =
  "import AeoNotaryHubLinks from '@/components/seo/aeo-notary-hub-links';";

const NOTARY_SLUGS = [
  'notary',
  'notarize',
  'notarization',
  'ron-',
  'mobile-notary',
  'loan-signing',
];

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

function isNotaryPost(file) {
  const slug = path.basename(path.dirname(file));
  return NOTARY_SLUGS.some((k) => slug.includes(k));
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('AeoProcessServingHubLinks') || content.includes('AeoNotaryHubLinks')) {
    return 'skipped';
  }

  const notary = isNotaryPost(file);
  const importLine = notary ? NOTARY_IMPORT : IMPORT;
  const component = notary ? '<AeoNotaryHubLinks />' : '<AeoProcessServingHubLinks />';

  const blockImportEnd = content.match(/\} from ["'][^"']+["'];/);
  if (blockImportEnd) {
    const insertAt = blockImportEnd.index + blockImportEnd[0].length;
    content = content.slice(0, insertAt) + '\n' + importLine + content.slice(insertAt);
  } else {
    const lastImport = content.lastIndexOf('\nimport ');
    if (lastImport === -1) return 'no-import';
    const endOfLastImport = content.indexOf('\n', lastImport + 1);
    content =
      content.slice(0, endOfLastImport + 1) +
      importLine +
      '\n' +
      content.slice(endOfLastImport + 1);
  }

  const footerIdx = content.lastIndexOf('<Footer');
  if (footerIdx === -1) return 'no-footer';

  const insert = `\n          ${component}\n          `;
  content = content.slice(0, footerIdx) + insert + content.slice(footerIdx);
  fs.writeFileSync(file, content);
  return 'updated';
}

const files = walk(BLOG_DIR);
const counts = { updated: 0, skipped: 0, other: 0 };
for (const f of files) {
  const r = processFile(f);
  if (r === 'updated') counts.updated++;
  else if (r === 'skipped') counts.skipped++;
  else counts.other++;
}
console.log(counts);
