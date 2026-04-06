const fs = require('fs');
const path = require('path');

function extractJsonLd(html) {
  const scripts = [];
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);
      scripts.push(data);
    } catch(e) {
      scripts.push({ ERROR: 'Invalid JSON: ' + e.message, raw: match[1].substring(0, 200) });
    }
  }
  return scripts;
}

const outDir = path.join(__dirname, '..', 'out');
const pagesToCheck = [
  'guides/attorney-guide.html',
  'guides/rural-oklahoma.html',
  'guides/index.html',
  'mobile-notary-vs-bank.html',
  'what-to-bring.html',
  'counties/adair-county.html',
  'counties/tulsa-county.html',
  'service-areas/oklahoma-city.html',
  'service-areas/norman.html',
  'service-areas/bixby.html',
  'gps-tracked-process-serving.html',
  'serving-legal-papers-on-tribal-land.html',
  'blog/how-to-serve-small-claims-oklahoma.html',
  'hospital-notary.html',
  'real-estate-notary.html',
  'mobile-notary.html',
  'apostille.html',
  'remote-online-notary.html',
  'law-firm-services.html',
  'why-choose-us.html',
  'contact.html',
  'wedding-officiant.html',
  'notary-faqs.html',
  'notary-laws.html',
  'process-serving-for-property-managers.html',
  'process-serving-for-insurance-companies.html',
];

let errors = 0;
let warnings = 0;
let pagesWithSchema = 0;
let pagesWithoutSchema = 0;

pagesToCheck.forEach(file => {
  const fullPath = path.join(outDir, file);
  if (!fs.existsSync(fullPath)) {
    console.log('[SKIP] ' + file + ': FILE NOT FOUND');
    return;
  }
  const html = fs.readFileSync(fullPath, 'utf-8');
  const schemas = extractJsonLd(html);

  if (schemas.length === 0) {
    console.log('[WARN] ' + file + ': NO JSON-LD SCHEMA FOUND');
    pagesWithoutSchema++;
    warnings++;
    return;
  }

  pagesWithSchema++;
  let pageErrors = [];
  let pageWarnings = [];
  let types = [];

  schemas.forEach((s, i) => {
    if (s.ERROR) {
      pageErrors.push('Block ' + i + ': ' + s.ERROR);
      errors++;
      return;
    }

    if (s['@graph']) {
      s['@graph'].forEach(item => {
        const t = Array.isArray(item['@type']) ? item['@type'].join('+') : (item['@type'] || 'unknown');
        types.push(t);

        if (item['@type'] === 'Article') {
          if (!item.headline) { pageErrors.push('Article: missing headline'); errors++; }
          if (!item.datePublished) { pageErrors.push('Article: missing datePublished'); errors++; }
          if (!item.author) { pageErrors.push('Article: missing author'); errors++; }
          if (!item.publisher) { pageWarnings.push('Article: missing publisher'); warnings++; }
        }

        if (item['@type'] === 'FAQPage') {
          const faqCount = (item.mainEntity || []).length;
          if (faqCount === 0) { pageWarnings.push('FAQPage: 0 questions'); warnings++; }
          else { types[types.length-1] += '(' + faqCount + 'q)'; }
        }

        if (item['@type'] === 'BreadcrumbList') {
          const crumbs = item.itemListElement || [];
          types[types.length-1] += '(' + crumbs.length + ')';
          crumbs.forEach(bc => {
            if (!bc.item || bc.item === '') {
              pageWarnings.push('Breadcrumb "' + bc.name + '": empty item URL');
              warnings++;
            }
          });
        }

        if (Array.isArray(item['@type']) && item['@type'].includes('Organization')) {
          if (!item.aggregateRating) { pageWarnings.push('Organization: no aggregateRating'); warnings++; }
          if (!item.telephone) { pageErrors.push('Organization: missing telephone'); errors++; }
          if (!item.address) { pageErrors.push('Organization: missing address'); errors++; }
        }
      });
    } else {
      types.push(s['@type'] || 'no-graph-no-type');
    }
  });

  const status = pageErrors.length > 0 ? '[ERR]' : (pageWarnings.length > 0 ? '[WARN]' : '[OK]');
  console.log(status + ' ' + file + '  =>  ' + types.join(', '));
  pageErrors.forEach(e => console.log('      ERROR: ' + e));
  pageWarnings.forEach(w => console.log('      warn: ' + w));
});

console.log('\n--- Canonical URL Check ---');
let missingCanonicals = [];
pagesToCheck.forEach(file => {
  const fullPath = path.join(outDir, file);
  if (!fs.existsSync(fullPath)) return;
  const html = fs.readFileSync(fullPath, 'utf-8');
  const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
  if (!hasCanonical) {
    missingCanonicals.push(file);
    warnings++;
  }
});
if (missingCanonicals.length > 0) {
  missingCanonicals.forEach(f => console.log('[WARN] ' + f + ': NO CANONICAL URL'));
} else {
  console.log('All pages have canonical URLs');
}

console.log('\n=== SUMMARY ===');
console.log('Pages with schema: ' + pagesWithSchema);
console.log('Pages without schema: ' + pagesWithoutSchema);
console.log('Errors: ' + errors);
console.log('Warnings: ' + warnings);
console.log(errors === 0 ? 'ALL SCHEMAS VALID' : 'FIX ERRORS ABOVE');
