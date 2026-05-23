#!/usr/bin/env node
/**
 * Sync blog post meta dates → UnifiedSchema articleDetails + top-level props.
 * Usage: node scripts/backfill-blog-freshness-dates.mjs [--queue] [--live] [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { applyBlogFreshnessDates, hasJsonLdArticleDates, hasMetaArticleDates } = require('./lib/blog-freshness-dates.js');

const ROOT = process.cwd();
const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const targets = [];

if (args.has('--queue') || args.size === 0) {
  targets.push(path.join(ROOT, 'content', 'blog-queue', 'app', 'blog'));
}
if (args.has('--live') || args.size === 0) {
  targets.push(path.join(ROOT, 'app', 'blog'));
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

let updated = 0;
let skipped = 0;
let alreadyOk = 0;

for (const dir of targets) {
  for (const file of walk(dir)) {
    const slug = path.basename(path.dirname(file));
    const before = fs.readFileSync(file, 'utf8');
    if (!before.includes('UnifiedSchema')) {
      skipped++;
      continue;
    }

    const after = applyBlogFreshnessDates(before, { slug, mode: 'sync' });
    const hadJsonLd = hasJsonLdArticleDates(before);
    const hasJsonLdAfter = hasJsonLdArticleDates(after);
    const hasMeta = hasMetaArticleDates(after);

    if (after === before && hadJsonLd && hasMeta) {
      alreadyOk++;
      continue;
    }

    if (after !== before) {
      if (!dryRun) fs.writeFileSync(file, after, 'utf8');
      updated++;
      if (!hadJsonLd && hasJsonLdAfter) {
        console.log(`  + JSON-LD dates: ${slug}`);
      }
    } else {
      alreadyOk++;
    }
  }
}

console.log(`Blog freshness backfill${dryRun ? ' (dry-run)' : ''}: updated=${updated} alreadyOk=${alreadyOk} skipped(no UnifiedSchema)=${skipped}`);
