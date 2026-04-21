/*
 * Follow-up: add missing imports (first script had LF-only matcher that
 * didn't match CRLF files). Also handles any files where getCountyData /
 * generateCountyFAQs are used but not imported.
 */
const fs = require('fs');
const path = require('path');

const APP_COUNTIES = path.join(path.resolve(__dirname, '..'), 'app', 'counties');

const IMPORT_TO_ADD_COUNTY =
  "import { getCountyData } from '@/lib/county-data';";
const IMPORT_TO_ADD_FAQ =
  "import { generateCountyFAQs } from '@/lib/markdown-utils';";

const dirs = fs
  .readdirSync(APP_COUNTIES, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.endsWith('-county'))
  .map((d) => d.name);

let fixed = 0;
let skipped = 0;
for (const slug of dirs) {
  const p = path.join(APP_COUNTIES, slug, 'page.tsx');
  if (!fs.existsSync(p)) continue;
  let src = fs.readFileSync(p, 'utf8');
  const usesGetCounty = src.includes('getCountyData(');
  const usesGenerateFAQs = src.includes('generateCountyFAQs(');
  const hasCountyImport = src.includes("from '@/lib/county-data'");
  const hasFAQImport = src.includes("from '@/lib/markdown-utils'");

  if (!usesGetCounty && !usesGenerateFAQs) {
    skipped++;
    continue;
  }

  // Detect line ending in file.
  const eol = src.includes('\r\n') ? '\r\n' : '\n';

  // Find the GoogleMapsEmbed import line and insert after it, preserving EOL.
  const anchorRegex =
    /(import GoogleMapsEmbed from '@\/components\/ui\/google-maps-embed';)/;
  if (!anchorRegex.test(src)) {
    console.log(`[skip] ${slug}: no anchor import`);
    continue;
  }

  let toInsert = '';
  if (usesGetCounty && !hasCountyImport)
    toInsert += eol + IMPORT_TO_ADD_COUNTY;
  if (usesGenerateFAQs && !hasFAQImport)
    toInsert += eol + IMPORT_TO_ADD_FAQ;

  if (!toInsert) {
    skipped++;
    continue;
  }

  src = src.replace(anchorRegex, `$1${toInsert}`);
  fs.writeFileSync(p, src, 'utf8');
  console.log(`[fix]  ${slug}`);
  fixed++;
}

console.log(`\nFixed: ${fixed}, already-ok: ${skipped}`);
