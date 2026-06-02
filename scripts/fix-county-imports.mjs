#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const COUNTIES = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'app', 'counties');
const IMPORT = "import { CountyRelatedLinks } from '@/components/ui/county-related-links';";

for (const dir of fs.readdirSync(COUNTIES, { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name === '[slug]') continue;
  const file = path.join(COUNTIES, dir.name, 'page.tsx');
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('CountyRelatedLinks') || content.includes(IMPORT)) continue;
  const firstImportEnd = content.indexOf('\n', content.indexOf('import '));
  content = content.slice(0, firstImportEnd + 1) + IMPORT + '\n' + content.slice(firstImportEnd + 1);
  fs.writeFileSync(file, content);
  console.log('import added:', dir.name);
}
