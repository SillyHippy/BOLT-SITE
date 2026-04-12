const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/service-areas').filter(d => {
  return d !== '[slug]' && d !== 'page.tsx' && d !== 'layout.tsx' &&
    fs.statSync(path.join('app/service-areas', d)).isDirectory();
});

const data = JSON.parse(fs.readFileSync('scripts/kimi-data.json'));
const KIMI = {};
for (const item of data) KIMI[item.name] = item;

const cities = dirs.map(slug => {
  const k = KIMI[slug];
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const county = k ? k.county : '';
  const pop = k && k.population ? Number(k.population).toLocaleString() : '';
  return { slug, name, county, pop };
}).sort((a, b) => a.name.localeCompare(b.name));

console.log('Total cities: ' + cities.length);
cities.forEach(c => {
  console.log(`  { name: "${c.name}", county: "${c.county}", population: "${c.pop}", link: "/service-areas/${c.slug}" },`);
});
