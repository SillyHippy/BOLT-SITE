/**
 * Remove duplicate Navbar/Footer from pages that now get them from layout.tsx
 */
const fs = require('fs');
const path = require('path');

const files = [
  'app/service-areas/page.tsx',
  'app/service-areas/catoosa/page.tsx',
  'app/service-areas/glenpool/page.tsx',
  'app/service-areas/nowata/page.tsx',
  'app/service-areas/owasso/page.tsx',
  'app/service-areas/sand-springs/page.tsx',
  'app/service-areas/wagoner/page.tsx',
  'app/service-areas/[slug]/page.tsx',
  'app/counties/page.tsx',
  'app/counties/creek-county/page.tsx',
  'app/counties/tulsa-county/page.tsx',
  'app/counties/[slug]/page.tsx',
];

const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';
let changed = 0;

for (const rel of files) {
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) { console.log(`  SKIP: ${rel}`); continue; }
  let code = fs.readFileSync(fp, 'utf8');
  const original = code;

  // Remove import lines for Navbar and Footer
  code = code.replace(/import\s*\{\s*Navbar\s*\}\s*from\s*['"]@\/components\/ui\/navbar['"];\s*\r?\n/g, '');
  code = code.replace(/import\s*\{\s*Footer\s*\}\s*from\s*['"]@\/components\/ui\/footer['"];\s*\r?\n/g, '');

  // Remove JSX usage: <Navbar /> and <Footer />
  code = code.replace(/\s*<Navbar\s*\/>\s*\r?\n?/g, '\n');
  code = code.replace(/\s*<Footer\s*\/>\s*\r?\n?/g, '\n');

  if (code !== original) {
    fs.writeFileSync(fp, code, 'utf8');
    changed++;
    console.log(`  ✓ ${rel}`);
  } else {
    console.log(`  – ${rel} (no changes)`);
  }
}

console.log(`\nUpdated ${changed} files.`);
