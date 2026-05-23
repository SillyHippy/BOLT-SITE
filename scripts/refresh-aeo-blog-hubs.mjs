/**
 * Inject AeoProcessServingHubLinks into priority process-serving blog posts
 * that do not already include it. Idempotent.
 *
 * Usage: node scripts/refresh-aeo-blog-hubs.mjs
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'app', 'blog');

const SLUGS = [
  'how-much-does-process-server-cost-oklahoma',
  'how-to-hire-a-process-server-oklahoma',
  'diy-vs-professional-service-oklahoma',
  'is-it-legal-to-serve-yourself-instead-of-process-server',
  'how-long-does-process-serving-take-oklahoma',
  'what-if-process-server-cant-find-person-oklahoma',
  'how-to-serve-divorce-papers-oklahoma',
  'certified-mail-vs-personal-service-oklahoma',
  'oklahoma-180-day-rule-service-process',
  'questions-to-ask-before-hiring-process-server',
];

const IMPORT_LINE =
  "import AeoProcessServingHubLinks from '@/components/seo/aeo-process-serving-hub-links';";

const JSX_BLOCK = '        <AeoProcessServingHubLinks />\n';

function insertImport(source) {
  if (source.includes('aeo-process-serving-hub-links')) return source;
  const importMatch = source.match(/^import .+ from .+;\r?\n/m);
  if (!importMatch) return source;
  const idx = source.indexOf(importMatch[0]) + importMatch[0].length;
  return `${source.slice(0, idx)}${IMPORT_LINE}\n${source.slice(idx)}`;
}

function insertComponent(source) {
  if (source.includes('<AeoProcessServingHubLinks')) return source;

  const anchors = ['      <LocalPromoBanner', '      <AuthorBox', '      <Footer'];
  for (const anchor of anchors) {
    const idx = source.indexOf(anchor);
    if (idx !== -1) {
      return `${source.slice(0, idx)}${JSX_BLOCK}${source.slice(idx)}`;
    }
  }
  return source;
}

function fixAiSummary(source) {
  return source.replace(
    /('ai-key-facts':\s*'[^']*')\s*\n\s*\n\s*\n\s*}/g,
    "$1,\n  },"
  );
}

let updated = 0;
for (const slug of SLUGS) {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');
  try {
    let source = await fs.readFile(filePath, 'utf8');
    const before = source;
    source = fixAiSummary(source);
    source = insertImport(source);
    source = insertComponent(source);
    if (source !== before) {
      await fs.writeFile(filePath, source, 'utf8');
      updated++;
      console.log(`Updated ${slug}`);
    } else {
      console.log(`Skipped ${slug} (already has hub links)`);
    }
  } catch (err) {
    console.warn(`Missing ${slug}: ${err.message}`);
  }
}

console.log(`Done — ${updated} blog posts updated.`);
