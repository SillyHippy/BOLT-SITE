#!/usr/bin/env node
/**
 * Regenerates public/ai-sitemap.xml from public/sitemap.xml.
 *
 * Runs AFTER generate-sitemap.js in `postbuild` so the AI sitemap is always in
 * sync with the main sitemap. The AI sitemap is a hint for LLM crawlers
 * (ChatGPT, Perplexity, Gemini, Claude) pointing at high-value answer content
 * and the llms.txt entrypoints.
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUT_DIR = path.join(process.cwd(), 'out');
const DOMAIN = 'https://justlegalsolutions.org';

const mainSitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
if (!fs.existsSync(mainSitemapPath)) {
  console.warn(`⚠️  ${mainSitemapPath} not found; skipping ai-sitemap generation.`);
  process.exit(0);
}

const main = fs.readFileSync(mainSitemapPath, 'utf8');
const today = new Date().toISOString().split('T')[0];

const urlRegex = /<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]+)<\/lastmod>\s*)?(?:<changefreq>([^<]+)<\/changefreq>\s*)?(?:<priority>([^<]+)<\/priority>\s*)?<\/url>/g;

const entries = [];
const seen = new Set();

// llms.txt endpoints first so AI crawlers hit them immediately
for (const llm of ['/llms.txt', '/llms-full.txt']) {
  const loc = DOMAIN + llm;
  entries.push({ loc, lastmod: today, changefreq: 'weekly', priority: '1.0' });
  seen.add(loc);
}

let match;
while ((match = urlRegex.exec(main)) !== null) {
  const [, loc, lastmod, changefreq, priority] = match;
  if (seen.has(loc)) continue;
  seen.add(loc);
  entries.push({
    loc: loc.trim(),
    lastmod: (lastmod || today).trim(),
    changefreq: (changefreq || 'monthly').trim(),
    priority: (priority || '0.7').trim(),
  });
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<!-- AI Sitemap: optimized for LLM answer engines (ChatGPT, Perplexity, Gemini, Claude). -->\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join(PUBLIC_DIR, 'ai-sitemap.xml'), xml);
if (fs.existsSync(OUT_DIR)) {
  fs.writeFileSync(path.join(OUT_DIR, 'ai-sitemap.xml'), xml);
}

console.log(`🤖 AI sitemap generated with ${entries.length} URLs.`);
