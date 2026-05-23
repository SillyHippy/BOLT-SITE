#!/usr/bin/env node
/**
 * Add UnifiedSchema to app pages missing JSON-LD freshness signals.
 * Usage: node scripts/add-page-freshness-schema.mjs [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { appPageFileToPathname, walkAppPages } from './lib/resolve-app-page-path.mjs';

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'app');
const dryRun = process.argv.includes('--dry-run');
const SITE = 'https://justlegalsolutions.org';

function hasSchema(source) {
  return /UnifiedSchema|JsonLd|application\/ld\+json/i.test(source);
}

function isRedirect(source) {
  return /\bredirect\s*\(/.test(source);
}

function extractMetadataTitle(source) {
  const m =
    source.match(/export const metadata[^]*?\btitle\s*:\s*['"]([^'"]+)['"]/) ||
    source.match(/export const metadata[^]*?\btitle\s*:\s*`([^`]+)`/);
  return m?.[1]?.trim();
}

function extractMetadataDescription(source) {
  const m = source.match(/export const metadata[^]*?\bdescription\s*:\s*['"]([^'"]+)['"]/);
  return m?.[1]?.trim();
}

function extractH1Title(source) {
  return (
    source.match(/<h1[^>]*>\s*([^<{]+)/)?.[1]?.trim() ||
    source.match(/<h1[^>]*>\{'([^']+)'\}/)?.[1]?.trim()
  );
}

function breadcrumbLabel(title, pathname) {
  const segment = pathname.split('/').filter(Boolean).pop() || 'Home';
  if (title && title.length <= 80) return title;
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildSchemaBlock(pathname, title, description) {
  const label = breadcrumbLabel(title, pathname);
  const url = `${SITE}${pathname}`;

  return `      <UnifiedSchema
        pageType="generic"
        pageTitle={${JSON.stringify(title)}}
        pageDescription={${JSON.stringify(description)}}
        pageUrl={${JSON.stringify(url)}}
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: ${JSON.stringify(label)}, url: ${JSON.stringify(pathname)} },
        ]}
      />`;
}

function injectSchema(source, pathname, title, description) {
  if (!title) title = breadcrumbLabel('', pathname);
  if (!description) description = `${title} — Just Legal Solutions, Oklahoma process server and legal support services.`;

  let out = source;

  if (!out.includes("@/components/UnifiedSchema")) {
    const lastImport = out.lastIndexOf('\nimport ');
    if (lastImport === -1) {
      out = `import UnifiedSchema from '@/components/UnifiedSchema';\n${out}`;
    } else {
      const lineEnd = out.indexOf('\n', lastImport + 1);
      out = `${out.slice(0, lineEnd + 1)}import UnifiedSchema from '@/components/UnifiedSchema';\n${out.slice(lineEnd + 1)}`;
    }
  }

  const schemaBlock = buildSchemaBlock(pathname, title, description);

  if (out.includes('return (\n    <>')) {
    return out.replace('return (\n    <>', `return (\n    <>\n${schemaBlock}`);
  }

  const returnMatch = out.match(/export default function[\s\S]*?return\s*\(\s*\n(\s*)/);
  if (!returnMatch) return null;

  const insertAt = returnMatch.index + returnMatch[0].length;
  const indent = returnMatch[1] || '    ';

  out = `${out.slice(0, insertAt)}<>\n${schemaBlock}\n${indent}${out.slice(insertAt)}`;

  const fnStart = out.lastIndexOf('export default function', insertAt);
  const fnBody = out.slice(fnStart);
  const closing = fnBody.lastIndexOf('\n  );');
  if (closing === -1) return null;

  const absoluteClose = fnStart + closing;
  out = `${out.slice(0, absoluteClose)}\n    </>${out.slice(absoluteClose)}`;
  return out;
}

let updated = 0;
let skipped = 0;

for (const file of walkAppPages(APP_DIR)) {
  const pathname = appPageFileToPathname(file, APP_DIR);
  if (!pathname) continue;

  const source = fs.readFileSync(file, 'utf8');
  if (hasSchema(source) || isRedirect(source)) {
    skipped++;
    continue;
  }

  const title = extractMetadataTitle(source) || extractH1Title(source) || breadcrumbLabel('', pathname);
  const description =
    extractMetadataDescription(source) ||
    `${title} — Just Legal Solutions, Oklahoma process server and legal support services.`;

  const next = injectSchema(source, pathname, title, description);
  if (!next || next === source) {
    console.warn(`Could not patch: ${pathname}`);
    continue;
  }

  if (!dryRun) fs.writeFileSync(file, next, 'utf8');
  updated++;
  console.log(`  + UnifiedSchema: ${pathname}`);
}

console.log(`Page schema injection${dryRun ? ' (dry-run)' : ''}: updated=${updated} skipped=${skipped}`);
