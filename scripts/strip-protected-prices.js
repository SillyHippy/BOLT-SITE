/**
 * Strip specific service-pricing dollar amounts from protected (hand-crafted) pages.
 *
 * Rules:
 *  - Remove pricing from FAQ answers  (e.g. "($60), rush ($150), and same-day ($265)")
 *  - Remove pricing from metadata title / description strings
 *  - Remove pricing from hero badge spans ("Standard $60", "Rush $150", "Same-Day $265")
 *  - Replace pricing table cells that show "$60", "$150", "$265" with "View Rates" + link
 *
 * Exceptions (leave alone):
 *  - "$2,000 bond" or "$2,500" (legal requirement references)
 *  - "priceRange" schema values
 *  - "$30" in architecture descriptions (e.g. "$30 million")
 */

const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/ianna/OneDrive/Desktop/GitHub/BOLT-SITE';

const PROTECTED_CITIES = ['catoosa', 'owasso', 'glenpool', 'sand-springs', 'edmond', 'norman', 'enid', 'stillwater', 'lawton'];
const PROTECTED_COUNTIES = ['creek-county', 'tulsa-county'];

const files = [
  ...PROTECTED_CITIES.map(s => path.join(ROOT, 'app/service-areas', s, 'page.tsx')),
  ...PROTECTED_COUNTIES.map(s => path.join(ROOT, 'app/counties', s, 'page.tsx')),
];

let totalChanges = 0;

for (const file of files) {
  if (!fs.existsSync(file)) { console.log(`  SKIP (missing): ${file}`); continue; }
  let code = fs.readFileSync(file, 'utf8');
  const original = code;

  // ── FAQ answers: strip inline price mentions ──
  // Pattern: "standard ($60), rush ($150), and same-day ($265)"
  code = code.replace(/standard\s*\(\$\d+\),?\s*rush\s*\(\$\d+\),?\s*and\s*same-day\s*\(\$\d+\)/gi,
    'standard, rush, and same-day');
  // Pattern: "Same-day service ($265)" or "rush service ($150)"
  code = code.replace(/(same-day(?:\s+service)?)\s*\(\$\d+\)/gi, '$1');
  code = code.replace(/(rush(?:\s+service)?)\s*\(\$\d+\)/gi, '$1');
  code = code.replace(/(standard(?:\s+service)?)\s*\(\$\d+\)/gi, '$1');
  // Pattern: "Same-day ($265)" standalone
  code = code.replace(/Same-day\s*\(\$\d+\)/g, 'Same-day');

  // ── Metadata: strip prices from title strings ──
  // "Same-Day from $60" → "Same-Day Service Available"
  code = code.replace(/Same-Day from \$\d+/g, 'Same-Day Service Available');
  // "From $60" in titles → "Same-Day Available"
  code = code.replace(/\| From \$\d+/g, '| Same-Day Available');
  // "Standard from $60, rush $100, same-day $150" in descriptions
  code = code.replace(/Standard from \$\d+,\s*rush \$\d+,\s*same-day \$\d+\./gi,
    'Same-day service available.');

  // ── Hero badge spans: "Standard $60" → "Standard" etc ──
  code = code.replace(/>(\s*)(?:✅\s*|📄\s*)?Standard\s+\$\d+/g, '>$1Standard Service');
  code = code.replace(/>(\s*)(?:⚡\s*|🏃\s*)?Rush\s+\$\d+/g, '>$1Rush Service');
  code = code.replace(/>(\s*)(?:🚨\s*|⏰\s*)?Same-Day\s+\$\d+/g, '>$1Same-Day Service');
  // Unicode emoji versions
  code = code.replace(/📄 Standard \$\d+/g, '📄 Standard Service');
  code = code.replace(/⚡ Rush \$\d+/g, '⚡ Rush Service');
  code = code.replace(/🚨 Same-Day \$\d+/g, '🚨 Same-Day Service');
  // lucide-style "Standard from $60"
  code = code.replace(/Standard from \$\d+/g, 'Standard Service');

  // ── Pricing table cells: "$60" → "See Pricing" ──
  // Match table cells that just show a price
  code = code.replace(/>(\s*)\$60\s*<\//g, (m, ws) => `>${ws}See Pricing</`);
  code = code.replace(/>(\s*)\$150\s*<\//g, (m, ws) => `>${ws}See Pricing</`);
  code = code.replace(/>(\s*)\$265\s*<\//g, (m, ws) => `>${ws}See Pricing</`);
  code = code.replace(/>(\s*)\$100\s*<\//g, (m, ws) => `>${ws}See Pricing</`);
  // "$40 each" pattern
  code = code.replace(/>(\s*)\$40 each\s*<\//g, (m, ws) => `>${ws}See Pricing</`);

  if (code !== original) {
    fs.writeFileSync(file, code, 'utf8');
    totalChanges++;
    console.log(`  ✓ ${path.basename(path.dirname(file))}`);
  } else {
    console.log(`  – ${path.basename(path.dirname(file))} (no changes needed)`);
  }
}

console.log(`\n✅ Done! Updated ${totalChanges} protected pages.`);
