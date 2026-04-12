/**
 * Add the 5 dynamic-only cities to both:
 * 1. HTML sitemap (app/(main)/sitemap/page.tsx)
 * 2. Service-areas index (app/service-areas/page.tsx) majorCities array
 */
const fs = require('fs');
const path = require('path');
const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';

const dynamicCities = [
  { slug: 'checotah', name: 'Checotah', county: 'McIntosh', pop: '3,245' },
  { slug: 'fort-sill', name: 'Fort Sill', county: 'Comanche', pop: '8,000' },
  { slug: 'henryetta', name: 'Henryetta', county: 'Okmulgee', pop: '5,927' },
  { slug: 'idabel', name: 'Idabel', county: 'McCurtain', pop: '6,753' },
  { slug: 'stilwell', name: 'Stilwell', county: 'Adair', pop: '4,081' },
];

// 1. Add to HTML sitemap
const sitemapFile = path.join(ROOT, 'app/(main)/sitemap/page.tsx');
let sitemap = fs.readFileSync(sitemapFile, 'utf8');

const newSitemapLinks = dynamicCities.map(c =>
  `      { url: '/service-areas/${c.slug}', label: '${c.name}' },`
).join('\n');

// Add before the closing of the Cities links array (find last city link and add after)
sitemap = sitemap.replace(
  /(title: 'Service Areas — Cities'[\s\S]*?links: \[[\s\S]*?)(    \],)/m,
  `$1${newSitemapLinks}\n    $2`
);

fs.writeFileSync(sitemapFile, sitemap, 'utf8');
console.log('✓ Added 5 dynamic cities to HTML sitemap');

// 2. Add to service-areas index majorCities array
const indexFile = path.join(ROOT, 'app/service-areas/page.tsx');
let index = fs.readFileSync(indexFile, 'utf8');

const newIndexEntries = dynamicCities.map(c =>
  `  { name: "${c.name}", county: "${c.county}", population: "${c.pop}", link: "/service-areas/${c.slug}" },`
).join('\n');

// Add before the closing ];
index = index.replace(
  /({ name: "Kellyville"[^}]+},)\s*\n\];/m,
  `$1\n${newIndexEntries}\n];`
);

fs.writeFileSync(indexFile, index, 'utf8');
console.log('✓ Added 5 dynamic cities to service-areas index majorCities');
