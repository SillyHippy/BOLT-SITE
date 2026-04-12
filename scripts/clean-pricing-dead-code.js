const fs = require('fs');
const fp = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE/app/service-areas/[slug]/page.tsx';
let lines = fs.readFileSync(fp, 'utf8').split('\n');

// Remove lines 149-154 (0-indexed: 148-153) — the pricing parser variables
// Keep lines 146-148 (comment + contactSection + contactRows)
const newLines = [];
for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1; // 1-indexed
  // Skip the pricing parser lines (149-154)
  if (lineNum >= 149 && lineNum <= 154) {
    continue;
  }
  // Fix the comment on line 146
  if (lineNum === 146) {
    newLines.push(lines[i].replace('Pricing from contact table', 'Contact table (for region label)'));
    continue;
  }
  // Remove 'pricing' from the destructuring on line 291
  if (lines[i].includes('courthouse, additionalCourts, parking, pricing, distances,')) {
    newLines.push(lines[i].replace(', pricing,', ','));
    continue;
  }
  newLines.push(lines[i]);
}

fs.writeFileSync(fp, newLines.join('\n'), 'utf8');
console.log('Done. Removed pricing parser and destructuring.');
