#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory to scan for static pages (Next.js export output or public)
const OUT_DIR = path.join(process.cwd(), 'out');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const DOMAIN = 'https://justlegalsolutions.org';

// Recursively get all .html files in a directory
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

// Convert file path to URL
function filePathToUrl(filePath, baseDir) {
  let rel = path.relative(baseDir, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return DOMAIN + '/';
  if (rel.endsWith('/index.html')) rel = rel.replace(/\/index\.html$/, '/');
  else rel = rel.replace(/\.html$/, '');
  return DOMAIN + '/' + rel;
}

// Main sitemap generation
function generateSitemap() {
  const baseDir = fs.existsSync(OUT_DIR) ? OUT_DIR : PUBLIC_DIR;
  const files = getHtmlFiles(baseDir);
  const today = new Date().toISOString().split('T')[0];
  const urls = files.map(f => {
    const url = filePathToUrl(f, baseDir);
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log(`🗺️ Sitemap generated with ${urls.length} URLs.`);
}

generateSitemap();
