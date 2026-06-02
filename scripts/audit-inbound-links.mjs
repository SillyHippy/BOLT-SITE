#!/usr/bin/env node
/**
 * Count inbound internal links per route (app pages + content locations).
 * Scans app pages, components, and layouts for href="/..." links.
 * Run: node scripts/audit-inbound-links.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const COMPONENTS = path.join(ROOT, 'components');
const SCAN_DIRS = [APP, COMPONENTS];

function walk(dir, acc = [], filter = () => true) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (full.includes('blog-queue') || full.includes('node_modules')) continue;
      walk(full, acc, filter);
    } else if (filter(full, ent.name)) {
      acc.push(full);
    }
  }
  return acc;
}

function pageToRoute(file) {
  let rel = path.relative(APP, file).replace(/\\/g, '/');
  rel = rel.replace(/\/page\.tsx$/, '');
  rel = rel.replace(/^\([^)]+\)\//, '');
  if (rel.includes('[')) return null;
  return normalizePath(`/${rel}`);
}

function normalizePath(p) {
  return p.replace(/\/$/, '') || '/';
}

function buildRouteSet() {
  const routes = new Set(['/']);
  const pages = walk(APP, [], (_, name) => name === 'page.tsx');
  for (const file of pages) {
    const route = pageToRoute(file);
    if (route) routes.add(route);
  }

  const locationsDir = path.join(ROOT, 'content', 'locations');
  if (fs.existsSync(locationsDir)) {
    for (const f of fs.readdirSync(locationsDir)) {
      if (f.endsWith('.md')) routes.add(`/service-areas/${f.replace(/\.md$/, '')}`);
    }
  }
  const countiesDir = path.join(ROOT, 'content', 'counties');
  if (fs.existsSync(countiesDir)) {
    for (const f of fs.readdirSync(countiesDir)) {
      if (f.endsWith('.md')) routes.add(`/counties/${f.replace(/\.md$/, '')}`);
    }
  }
  return routes;
}

function extractInternalHrefs(content) {
  const hrefs = [];
  const re = /href=["'](\/(?!\/)[^"'#?]*)["']/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    hrefs.push(normalizePath(m[1]));
  }
  return hrefs;
}

function main() {
  const routes = buildRouteSet();
  const inbound = new Map();
  for (const r of routes) inbound.set(r, new Set());

  const sourceFiles = [];
  for (const dir of SCAN_DIRS) {
    walk(dir, sourceFiles, (full, name) =>
      /\.(tsx|ts|jsx|js)$/.test(name) && !name.endsWith('.d.ts')
    );
  }

  const linkSources = new Map();

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relFile = path.relative(ROOT, file);
    const sourceRoute = file.includes(`${path.sep}app${path.sep}`) && file.endsWith('page.tsx')
      ? pageToRoute(file)
      : null;

    for (const href of extractInternalHrefs(content)) {
      if (href.startsWith('/api/')) continue;
      if (!inbound.has(href)) continue;
      inbound.get(href).add(relFile);
      if (!linkSources.has(href)) linkSources.set(href, []);
      linkSources.get(href).push(relFile);
    }
  }

  const stats = [...routes]
    .map((route) => ({
      route,
      count: inbound.get(route)?.size ?? 0,
      sources: [...(inbound.get(route) ?? [])],
    }))
    .sort((a, b) => a.count - b.count || a.route.localeCompare(b.route));

  const orphans = stats.filter((s) => s.count <= 1);
  const hubs = [
    '/process-serving',
    '/tulsa-process-server',
    '/mobile-notary',
    '/courier-services',
    '/skip-tracing',
    '/service-areas',
    '/counties',
    '/resources',
    '/attorney-services',
    '/for-landlords',
    '/oklahoma-process-serving-hub',
  ];

  console.log('=== INBOUND LINK AUDIT ===\n');
  console.log(`Total routes: ${routes.size}`);
  console.log(`Pages with 0-1 inbound links: ${orphans.length}\n`);

  console.log('--- Hub pages ---');
  for (const hub of hubs) {
    const s = stats.find((x) => x.route === hub);
    console.log(`  ${hub}: ${s?.count ?? 'N/A'} inbound`);
  }

  console.log('\n--- Orphans (0-1 inbound) ---');
  for (const o of orphans.slice(0, 80)) {
    console.log(`  ${o.count}  ${o.route}`);
  }
  if (orphans.length > 80) console.log(`  … and ${orphans.length - 80} more`);

  const outPath = path.join(ROOT, 'scripts', 'audit-inbound-links-report.json');
  fs.writeFileSync(
    outPath,
    JSON.stringify({ generated: new Date().toISOString(), stats, orphans }, null, 2)
  );
  console.log(`\nFull report: ${path.relative(ROOT, outPath)}`);
}

main();
