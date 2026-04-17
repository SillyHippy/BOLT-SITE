const fs = require('fs');
const path = require('path');

const filesToFix = [
  'owasso',
  'sand-springs',
  'bixby',
  'broken-arrow',
  'collinsville',
  'glenpool'
];

const basePath = path.join(__dirname, '..', 'app', 'service-areas');

const exploreMoreHtml = `
        {/* Explore More Resources */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-slate-200">
          <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <h2 className="text-2xl font-bold mb-2">Explore More Resources</h2>
            <p className="text-slate-300">Learn more about our services and nearby coverage areas</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">📍 Nearby Service Areas</h3>
                <ul className="space-y-2">
                  <li><Link href="/process-serving" className="text-blue-600 hover:text-blue-800 underline">process serving</Link></li>
                  <li><Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa Process Server</Link></li>
                  <li><Link href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa Process Server</Link></li>
                  <li><Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks Process Server</Link></li>
                  <li><Link href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby Process Server</Link></li>
                  <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Process Server</Link></li>
                  <li><Link href="/counties/creek-county" className="text-blue-600 hover:underline">Creek County Process Server</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">📚 Helpful Guides</h3>
                <ul className="space-y-2">
                  <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                  <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                  <li><Link href="/family-law-service-guide-tulsa" className="text-blue-600 hover:underline">Family Law Service Guide</Link></li>
                  <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing Guide</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">🏢 Our Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                  <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:underline">About Just Legal Solutions</Link></li>
                  <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
                  <li><Link href="/seo/what-is-a-process-server" className="text-blue-600 hover:underline">What is a Process Server?</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Browse All Service Areas */}
        <div className="text-center py-8">
          <Link
            href="/service-areas"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
          >
            ← Browse All Oklahoma Service Areas
          </Link>
        </div>
`;

filesToFix.forEach(loc => {
  const newFilePath = path.join(basePath, loc, 'page.tsx.new');
  const targetFilePath = path.join(basePath, loc, 'page.tsx');
  
  if (fs.existsSync(newFilePath)) {
    let content = fs.readFileSync(newFilePath, 'utf8');
    
    // Inject ExploreMoreHtml right before the final UnifiedSchema
    content = content.replace(
      /(\s+)(\<\/div>\s+\<UnifiedSchema)/,
      "$1" + exploreMoreHtml + "$2"
    );
     
    // Make sure we add Local Promo Banner to the top
    if (!content.includes('LocalPromoBanner')) {
      content = content.replace(/(import UnifiedSchema.*)/, "$1\\nimport LocalPromoBanner from '@/components/ui/local-promo-banner';");
    }
    
    // And inject the banner under the hero
    if (!content.includes('<LocalPromoBanner')) {
      content = content.replace(
        /(<div className="min-h-screen[^>]*>\s+)/,
        "$1<LocalPromoBanner zips={['74008', '74033', '74133']} />\\n\\n      "
      );
    }
    
    // Fix link imports to Link from 'next/link' if missing
    if (!content.includes("import Link from 'next/link';")) {
       content = content.replace(/(import UnifiedSchema.*)/, "$1\\nimport Link from 'next/link';");
    }

    fs.writeFileSync(targetFilePath, content, 'utf8');
    console.log("Successfully expanded and restored " + loc);
  } else {
    console.log("Could not find " + newFilePath);
  }
});
