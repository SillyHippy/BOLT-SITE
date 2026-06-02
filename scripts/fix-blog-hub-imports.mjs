#!/usr/bin/env node
/** Fix blog hub import injection that split multi-line import blocks. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const BLOG = path.join(ROOT, 'app', 'blog');

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

let fixed = 0;
for (const file of walk(BLOG)) {
  let content = fs.readFileSync(file, 'utf8');
  const re =
    /import \{\r?\nimport (Aeo(?:Notary|ProcessServing)HubLinks from '@\/components\/seo\/aeo-(?:notary|process-serving)-hub-links';)\r?\n([\s\S]*?\} from ["'][^"']+["'];)/;
  if (!re.test(content)) continue;
  content = content.replace(re, 'import {\n$2\nimport $1');
  fs.writeFileSync(file, content);
  fixed++;
}
console.log(`Fixed ${fixed} blog files`);
