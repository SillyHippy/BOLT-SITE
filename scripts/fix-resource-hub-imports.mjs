#!/usr/bin/env node
/** Fix resource hub import injection that split multi-line import blocks. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

const dirs = [
  path.join(ROOT, 'app', 'resources'),
  path.join(ROOT, 'app', '(main)', 'resources'),
];

const re =
  /import \{\r?\nimport \{ ResourceRelatedLinks \} from '@\/components\/ui\/resource-related-links';\r?\n([\s\S]*?\} from ['"][^'"]+['"];)/;

let fixed = 0;
for (const file of dirs.flatMap((d) => walk(d))) {
  let content = fs.readFileSync(file, 'utf8');
  if (!re.test(content)) continue;
  content = content.replace(
    re,
    "import {\n$1\nimport { ResourceRelatedLinks } from '@/components/ui/resource-related-links';"
  );
  fs.writeFileSync(file, content);
  fixed++;
}
console.log(`Fixed ${fixed} resource files`);
