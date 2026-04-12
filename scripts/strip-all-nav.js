/**
 * Remove ALL Navbar/Footer references from service-areas and counties page files.
 * Handles both named and default imports.
 */
const fs = require('fs');
const path = require('path');
const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      processDir(full);
    } else if (entry.name === 'page.tsx') {
      let code = fs.readFileSync(full, 'utf8');
      const original = code;
      
      // Named imports: import { Navbar } from ...
      code = code.replace(/import\s*\{\s*Navbar\s*\}\s*from\s*['"][^'"]+['"];\s*\r?\n/g, '');
      code = code.replace(/import\s*\{\s*Footer\s*\}\s*from\s*['"][^'"]+['"];\s*\r?\n/g, '');
      
      // Default imports: import Navbar from ...
      code = code.replace(/import\s+Navbar\s+from\s*['"][^'"]+['"];\s*\r?\n/g, '');
      code = code.replace(/import\s+Footer\s+from\s*['"][^'"]+['"];\s*\r?\n/g, '');
      
      // JSX usage
      code = code.replace(/\s*<Navbar\s*\/>\s*\r?\n?/g, '\n');
      code = code.replace(/\s*<Footer\s*\/>\s*\r?\n?/g, '\n');
      
      if (code !== original) {
        fs.writeFileSync(full, code, 'utf8');
        const rel = full.replace(ROOT + '/', '').replace(ROOT + '\\', '');
        console.log('  ✓ ' + rel);
      }
    }
  }
}

console.log('Stripping Navbar/Footer from service-areas pages...');
processDir(path.join(ROOT, 'app/service-areas'));
console.log('\nStripping Navbar/Footer from counties pages...');
processDir(path.join(ROOT, 'app/counties'));
console.log('\nDone.');
