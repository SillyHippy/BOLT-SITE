/**
 * Second-pass strip: catches remaining hero badges, metadata descriptions,
 * and skip-tracing hourly rates in protected pages.
 */
const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';
const PROTECTED_CITIES = ['catoosa','owasso','glenpool','sand-springs','edmond','norman','enid','stillwater','lawton','nowata','wagoner'];
const PROTECTED_COUNTIES = ['creek-county','tulsa-county'];

const files = [
  ...PROTECTED_CITIES.map(s => path.join(ROOT, 'app/service-areas', s, 'page.tsx')),
  ...PROTECTED_COUNTIES.map(s => path.join(ROOT, 'app/counties', s, 'page.tsx')),
];

let totalChanges = 0;

for (const file of files) {
  if (!fs.existsSync(file)) { console.log(`  SKIP (missing): ${file}`); continue; }
  let code = fs.readFileSync(file, 'utf8');
  const original = code;

  // Hero badges: "✓ Standard $60" → "✓ Standard Service"  (handles ✓ and ✅ etc)
  code = code.replace(/(✓|✅|📄)\s*Standard\s+\$\d+/g, '$1 Standard Service');
  code = code.replace(/(✓|⚡|🏃)\s*Rush\s+\$\d+/g, '$1 Rush Service');
  code = code.replace(/(✓|🚨|⏰)\s*Same-Day\s+\$\d+/g, '$1 Same-Day Service');

  // Metadata descriptions that still have prices like "Same-day $265, rush $150, standard $60"
  code = code.replace(/Same-day \$\d+,\s*rush \$\d+,\s*standard \$\d+/gi, 'Same-day service available');
  // Or "standard $60, rush $150, same-day $265"
  code = code.replace(/[Ss]tandard \$\d+,\s*rush \$\d+,\s*same-day \$\d+/g, 'Same-day service available');
  // "Standard from $60, rush $100, same-day $150"
  code = code.replace(/Standard from \$\d+,\s*rush \$\d+,\s*same-day \$\d+/gi, 'Same-day service available');
  // "From $60" in title strings
  code = code.replace(/\| From \$\d+'/g, "| Same-Day Available'");
  code = code.replace(/\| From \$\d+/g, '| Same-Day Available');

  // Skip tracing "$85/hr" → "See Pricing"
  code = code.replace(/>\$85\/hr</g, '>See Pricing<');

  // FAQ inline "standard ($60)" patterns missed by first pass
  code = code.replace(/standard\s*\(\$\d+\),?\s*rush\s*\(\$\d+\),?\s*and\s*same-day\s*\(\$\d+\)/gi,
    'standard, rush, and same-day');
  code = code.replace(/(same-day(?:\s+service)?)\s*\(\$\d+\)/gi, '$1');
  code = code.replace(/(rush(?:\s+service)?)\s*\(\$\d+\)/gi, '$1');

  if (code !== original) {
    fs.writeFileSync(file, code, 'utf8');
    totalChanges++;
    console.log(`  ✓ ${path.basename(path.dirname(file))}`);
  } else {
    console.log(`  – ${path.basename(path.dirname(file))} (no changes)`);
  }
}

console.log(`\nUpdated ${totalChanges} files.`);
