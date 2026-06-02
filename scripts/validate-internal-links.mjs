#!/usr/bin/env node
/**
 * Fail on broken internal href="/..." links unless covered by _redirects or pending-redirects.json.
 * Run: npm run validate:links
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const PUBLIC = path.join(ROOT, 'public');
const REDIRECTS_PATH = path.join(PUBLIC, '_redirects');
const PENDING_PATH = path.join(ROOT, 'content', 'blog-queue', 'pending-redirects.json');

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (full.includes('blog-queue')) continue;
      walk(full, acc);
    } else if (ent.name === 'page.tsx') {
      acc.push(full);
    }
  }
  return acc;
}

function parseRedirects(text) {
  const map = new Map();
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const parts = t.split(/\s+/);
    if (parts.length < 3) continue;
    map.set(parts[0], parts[1]);
  }
  return map;
}

function loadPendingRedirects() {
  if (!fs.existsSync(PENDING_PATH)) return new Set();
  const data = JSON.parse(fs.readFileSync(PENDING_PATH, 'utf8'));
  const slugs = new Set();
  for (const slug of Object.keys(data.redirects || {})) {
    slugs.add(`/blog/${slug}`);
  }
  return slugs;
}

function buildRouteSet() {
  const routes = new Set(['/']);
  const pages = walk(APP);

  for (const file of pages) {
    let rel = path.relative(APP, file).replace(/\\/g, '/');
    rel = rel.replace(/\/page\.tsx$/, '');
    rel = rel.replace(/^\([^)]+\)\//, '');
    if (rel.includes('[')) continue;
    routes.add(`/${rel}`);
  }

  // Dynamic service-area and county routes from markdown content
  const locationsDir = path.join(ROOT, 'content', 'locations');
  if (fs.existsSync(locationsDir)) {
    for (const f of fs.readdirSync(locationsDir)) {
      if (f.endsWith('.md')) {
        routes.add(`/service-areas/${f.replace(/\.md$/, '')}`);
      }
    }
  }
  const countiesDir = path.join(ROOT, 'content', 'counties');
  if (fs.existsSync(countiesDir)) {
    for (const f of fs.readdirSync(countiesDir)) {
      if (f.endsWith('.md')) {
        routes.add(`/counties/${f.replace(/\.md$/, '')}`);
      }
    }
  }

  for (const ent of fs.readdirSync(PUBLIC, { withFileTypes: true, recursive: true })) {
    if (!ent.isFile()) continue;
    const full = path.join(ent.parentPath ?? ent.path, ent.name).replace(/\\/g, '/');
    const rel = full.slice(PUBLIC.length).replace(/\\/g, '/');
    if (rel.startsWith('/_') || rel.includes('node_modules')) continue;
    routes.add(rel.split('#')[0].split('?')[0]);
  }

  return routes;
}

function resolveRedirectTarget(href, redirects, depth = 0) {
  if (depth > 5) return null;
  const dest = redirects.get(href);
  if (!dest) return null;
  if (dest.startsWith('http')) return dest;
  return redirects.has(dest) ? resolveRedirectTarget(dest, redirects, depth + 1) ?? dest : dest;
}

function normalizePath(p) {
  const n = p.replace(/\/$/, '') || '/';
  return n;
}

function routeExists(normalized, routes) {
  if (routes.has(normalized)) return true;
  if (normalized !== '/' && routes.has(`${normalized}/`)) return true;
  const publicFile = path.join(PUBLIC, normalized.replace(/^\//, ''));
  if (fs.existsSync(publicFile) && fs.statSync(publicFile).isFile()) return true;
  return false;
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
  const redirects = parseRedirects(fs.readFileSync(REDIRECTS_PATH, 'utf8'));
  const pendingBlog = loadPendingRedirects();
  const pages = walk(APP);

  /** @type {Array<{ file: string, href: string, reason: string }>} */
  const broken = [];

  for (const file of pages) {
    const content = fs.readFileSync(file, 'utf8');
    const relFile = path.relative(ROOT, file);

    for (const href of extractInternalHrefs(content)) {
      if (href.startsWith('/api/')) continue;

      const normalized = normalizePath(href);

      if (routeExists(normalized, routes)) continue;

      if (redirects.has(normalized)) continue;
      if (pendingBlog.has(normalized)) continue;

      const resolved = resolveRedirectTarget(normalized, redirects);
      if (resolved && routeExists(normalizePath(resolved), routes)) continue;

      broken.push({
        file: relFile,
        href: normalized,
        reason: 'no route, redirect, or pending bridge',
      });
    }
  }

  if (broken.length > 0) {
    console.error(`validate:links FAILED — ${broken.length} broken internal link(s):\n`);
    for (const b of broken.slice(0, 50)) {
      console.error(`  ${b.href} in ${b.file}`);
    }
    if (broken.length > 50) {
      console.error(`  … and ${broken.length - 50} more`);
    }
    process.exit(1);
  }

  console.log(`validate:links OK — scanned ${pages.length} pages, no broken internal links`);
}

main();
