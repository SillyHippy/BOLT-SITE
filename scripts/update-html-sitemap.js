/**
 * Update app/(main)/sitemap/page.tsx to include all city and county pages
 */
const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';

// Get all city directories
const cityDirs = fs.readdirSync(path.join(ROOT, 'app/service-areas')).filter(d => {
  return d !== '[slug]' && d !== 'page.tsx' && d !== 'layout.tsx' &&
    fs.statSync(path.join(ROOT, 'app/service-areas', d)).isDirectory();
}).sort();

// Get all county directories
const countyDirs = fs.readdirSync(path.join(ROOT, 'app/counties')).filter(d => {
  return d !== '[slug]' && d !== 'page.tsx' && d !== 'layout.tsx' &&
    fs.statSync(path.join(ROOT, 'app/counties', d)).isDirectory();
}).sort();

// Build city links
const cityLinks = cityDirs.map(slug => {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `      { url: '/service-areas/${slug}', label: '${name}' },`;
}).join('\n');

// Build county links
const countyLinks = countyDirs.map(slug => {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `      { url: '/counties/${slug}', label: '${name}' },`;
}).join('\n');

// Read sitemap page
const fp = path.join(ROOT, 'app/(main)/sitemap/page.tsx');
let code = fs.readFileSync(fp, 'utf8');

// Replace the cities section ('Service Areas — Cities')
const citySectionRegex = /(\{\s*title:\s*'Service Areas — Cities'[\s\S]*?links:\s*\[)([\s\S]*?)(\s*\],)/m;
const citiesReplacement = `$1\n      { url: '/service-areas', label: 'All Service Areas' },\n${cityLinks}\n    $3`;
code = code.replace(citySectionRegex, citiesReplacement);

// Replace the counties section ('Service Areas — Counties')
const countySectionRegex = /(\{\s*title:\s*'Service Areas — Counties'[\s\S]*?links:\s*\[)([\s\S]*?)(\s*\],)/m;
const countiesReplacement = `$1\n${countyLinks}\n    $3`;
code = code.replace(countySectionRegex, countiesReplacement);

fs.writeFileSync(fp, code, 'utf8');
console.log(`Updated HTML sitemap: ${cityDirs.length} cities, ${countyDirs.length} counties`);
