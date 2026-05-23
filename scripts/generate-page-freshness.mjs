/**
 * Generate lib/page-freshness.generated.json from page.tsx file mtimes.
 * Same honesty model as generate-sitemap.js lastmod — dates move when files change.
 *
 * Usage: node scripts/generate-page-freshness.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  appPageFileToPathname,
  walkAppPages,
} from './lib/resolve-app-page-path.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const OUT_FILE = path.join(ROOT, 'lib', 'page-freshness.generated.json');
const OVERRIDES_FILE = path.join(ROOT, 'lib', 'page-freshness.overrides.json');

const DEFAULT_DATE_PUBLISHED = '2025-03-01';

/** Hub + priority commercial paths — site review date = newest among these. */
const SITE_REVIEW_PATHS = [
  '/',
  '/pricing',
  '/contact',
  '/process-serving',
  '/tulsa-process-server',
  '/notary',
  '/mobile-notary',
  '/apostille',
  '/about',
];

function loadOverrides() {
  if (!fs.existsSync(OVERRIDES_FILE)) return {};
  const raw = JSON.parse(fs.readFileSync(OVERRIDES_FILE, 'utf8'));
  const overrides = {};
  for (const [key, value] of Object.entries(raw)) {
    if (key.startsWith('_')) continue;
    if (value?.dateModified) overrides[key] = value.dateModified;
  }
  return overrides;
}

function maxIsoDate(...dates) {
  return dates.filter(Boolean).sort().at(-1) ?? DEFAULT_DATE_PUBLISHED;
}

function main() {
  const overrides = loadOverrides();
  const pages = {};
  const pageFiles = walkAppPages(APP_DIR);

  for (const filePath of pageFiles) {
    const pathname = appPageFileToPathname(filePath, APP_DIR);
    if (!pathname) continue;

    const mtime = fs.statSync(filePath).mtime.toISOString().split('T')[0];
    const override = overrides[pathname];
    const dateModified = maxIsoDate(mtime, override);

    pages[pathname] = {
      datePublished: DEFAULT_DATE_PUBLISHED,
      dateModified,
      sourceFile: path.relative(ROOT, filePath).replace(/\\/g, '/'),
      fileMtime: mtime,
      ...(override && override > mtime ? { manualOverride: override } : {}),
    };
  }

  const siteContentReviewDate = maxIsoDate(
    ...SITE_REVIEW_PATHS.map((p) => pages[p]?.dateModified).filter(Boolean)
  );

  const manifest = {
    generatedAt: new Date().toISOString(),
    siteContentReviewDate,
    defaultDatePublished: DEFAULT_DATE_PUBLISHED,
    pages,
  };

  fs.writeFileSync(OUT_FILE, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(
    `Generated ${path.relative(ROOT, OUT_FILE)} — ${Object.keys(pages).length} pages, site review date ${siteContentReviewDate}`
  );
}

main();
