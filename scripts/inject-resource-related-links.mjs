#!/usr/bin/env node
/**
 * Inject ResourceRelatedLinks into resource guide pages.
 * Run: node scripts/inject-resource-related-links.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const IMPORT = "import { ResourceRelatedLinks } from '@/components/ui/resource-related-links';";
const MARKER = '{/* ResourceRelatedLinks */}';

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx' && full.includes(`${path.sep}resources${path.sep}`)) {
      if (full.endsWith(`${path.sep}resources${path.sep}page.tsx`)) continue;
      acc.push(full);
    }
  }
  return acc;
}

function routeFromFile(file) {
  const rel = path.relative(path.join(ROOT, 'app'), file).replace(/\\/g, '/');
  return '/' + rel.replace(/\/page\.tsx$/, '').replace(/^\([^)]+\)\//, '');
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('ResourceRelatedLinks')) return 'skipped';

  const route = routeFromFile(file);

  if (!content.includes(IMPORT)) {
    const blockImportEnd = content.match(/\} from ['"][^'"]+['"];/);
    if (blockImportEnd) {
      const insertAt = blockImportEnd.index + blockImportEnd[0].length;
      content = content.slice(0, insertAt) + '\n' + IMPORT + content.slice(insertAt);
    } else {
      const lastImport = content.lastIndexOf('\nimport ');
      const end = content.indexOf('\n', lastImport + 1);
      content = content.slice(0, end + 1) + IMPORT + '\n' + content.slice(end + 1);
    }
  }

  const block = `
      ${MARKER}
      <ResourceRelatedLinks currentPath="${route}" />
`;

  if (content.includes('</main>')) {
    content = content.replace(/(\s*)<\/main>/, `${block}\n$1</main>`);
  } else if (content.includes('</HubPageLayout>')) {
    content = content.replace(/(\s*)<\/HubPageLayout>/, `${block}\n$1</HubPageLayout>`);
  } else if (content.match(/\s*<\/>/)) {
    content = content.replace(/(\s*)<\/>/, `${block}\n$1</>`);
  } else {
    return 'no-anchor';
  }

  fs.writeFileSync(file, content);
  return 'updated';
}

const dirs = [
  path.join(ROOT, 'app', 'resources'),
  path.join(ROOT, 'app', '(main)', 'resources'),
];
const files = dirs.flatMap((d) => walk(d));
const counts = {};
for (const f of files) {
  const r = processFile(f);
  counts[r] = (counts[r] || 0) + 1;
}
console.log({ files: files.length, ...counts });
