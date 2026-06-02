#!/usr/bin/env node
/**
 * Inject CountyRelatedLinks into county pages that lack internal linking sections.
 * Run: node scripts/inject-county-related-links.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const COUNTIES_DIR = path.join(ROOT, 'app', 'counties');

const IMPORT_LINE =
  "import { CountyRelatedLinks } from '@/components/ui/county-related-links';";

const MARKER = '{/* CountyRelatedLinks */}';

function slugFromFile(file) {
  const base = path.basename(path.dirname(file));
  if (base === '[slug]' || base === 'counties') return null;
  return base;
}

function countyNameFromSlug(slug) {
  const name = slug.replace(/-county$/, '').replace(/-/g, ' ');
  return name.replace(/\b\w/g, (c) => c.toUpperCase()) + ' County';
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (
    content.includes('CountyRelatedLinks') ||
    content.includes('Nearby Counties & Resources') ||
    content.includes('Comprehensive Legal Resources')
  ) {
    return { file, status: 'skipped' };
  }

  const slug = slugFromFile(file);
  if (!slug) return { file, status: 'skipped' };

  if (!content.includes(IMPORT_LINE)) {
    const importMatch = content.match(/^import .+ from .+;\n/m);
    if (importMatch) {
      const idx = content.indexOf(importMatch[0]) + importMatch[0].length;
      content = content.slice(0, idx) + IMPORT_LINE + '\n' + content.slice(idx);
    }
  }

  const insertBlock = `
        ${MARKER}
        <CountyRelatedLinks countySlug="${slug}" countyName="${countyNameFromSlug(slug)}" />
`;

  const browseAnchor = '<div className="text-center py-4">';
  if (content.includes(browseAnchor)) {
    content = content.replace(browseAnchor, insertBlock + '\n        ' + browseAnchor);
  } else {
    return { file, status: 'no-anchor' };
  }

  fs.writeFileSync(file, content);
  return { file, status: 'updated' };
}

const files = fs
  .readdirSync(COUNTIES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name !== '[slug]')
  .map((d) => path.join(COUNTIES_DIR, d.name, 'page.tsx'))
  .filter((f) => fs.existsSync(f));

const results = files.map(processFile);
const updated = results.filter((r) => r.status === 'updated');
console.log(`Updated ${updated.length} county pages`);
console.log(`Skipped ${results.filter((r) => r.status === 'skipped').length}`);
console.log(`No anchor ${results.filter((r) => r.status === 'no-anchor').length}`);
