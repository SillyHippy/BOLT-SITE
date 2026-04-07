const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(d => {
  const stat = fs.statSync(path.join(blogDir, d));
  return stat.isDirectory();
});

let updated = 0;
let skipped = 0;
let errors = [];

for (const dir of dirs) {
  const filePath = path.join(blogDir, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip already-modernized posts (check for gradient hero)
  if (content.includes('bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28')) {
    console.log(`SKIP (already modernized): ${dir}`);
    skipped++;
    continue;
  }

  // Skip if it doesn't have the old pattern
  if (!content.includes('bg-gray-50 min-h-screen py-12')) {
    console.log(`SKIP (no old pattern): ${dir}`);
    skipped++;
    continue;
  }

  try {
    // === EXTRACT DYNAMIC VALUES ===

    // 1. Breadcrumb text
    const breadcrumbMatch = content.match(/<span className="text-gray-900 font-medium">(.*?)<\/span>/);
    const breadcrumbText = breadcrumbMatch ? breadcrumbMatch[1] : dir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    // 2. H1 title
    const h1Match = content.match(/<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\s*([\s\S]*?)\s*<\/h1>/);
    const h1Text = h1Match ? h1Match[1].trim() : breadcrumbText;

    // 3. Date
    const dateMatch = content.match(/<span>(Updated|Published): (.*?)<\/span>/);
    const dateLabel = dateMatch ? dateMatch[1] : 'Published';
    const dateText = dateMatch ? dateMatch[2] : 'March 2026';

    // 4. Estimate reading time from article content word count
    const articleMatch = content.match(/<article[\s\S]*?<\/article>/);
    const articleText = articleMatch ? articleMatch[0].replace(/<[^>]*>/g, ' ') : '';
    const wordCount = articleText.split(/\s+/).filter(w => w.length > 0).length;
    const readingTime = Math.max(5, Math.ceil(wordCount / 200));

    // 5. Extract Related Guides section content (the Link blocks)
    const relatedSectionMatch = content.match(/<section className="mt-12 mb-8 bg-white rounded-xl shadow-sm p-8">([\s\S]*?)<\/section>/);
    let relatedLinksHtml = '';
    if (relatedSectionMatch) {
      // Extract individual Link blocks
      const linkMatches = relatedSectionMatch[1].match(/<Link href="[^"]*"[\s\S]*?<\/Link>/g);
      if (linkMatches) {
        relatedLinksHtml = linkMatches.map(link => {
          // Transform to new style
          return link
            .replace(/className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"/g,
              'className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"')
            .replace(/className="font-semibold text-blue-800"/g,
              'className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors"')
            .replace(/className="text-sm text-blue-700 mt-1"/g,
              'className="text-sm text-gray-600 mt-1"');
        }).join('\n              ');
      }
    }

    // If no related links found, create generic ones
    if (!relatedLinksHtml) {
      relatedLinksHtml = `<Link href="/blog" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">View All Blog Posts</span>
                <p className="text-sm text-gray-600 mt-1">Browse our full collection of Oklahoma legal guides and articles.</p>
              </Link>
              <Link href="/ultimate-guide-process-serving-oklahoma" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Ultimate Guide to Process Serving in Oklahoma</span>
                <p className="text-sm text-gray-600 mt-1">Comprehensive resource covering all aspects of process serving under Oklahoma law.</p>
              </Link>`;
    }

    // === BUILD NEW HEADER ===
    const newHeader = `      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">${breadcrumbText}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            ${h1Text}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">By</span>
              <span className="text-white font-semibold text-sm">Joseph Iannazzi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">${dateLabel}:</span>
              <span className="text-white font-semibold text-sm">${dateText}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Reading Time:</span>
              <span className="text-white font-semibold text-sm">~${readingTime} min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">`;

    // === BUILD NEW BOTTOM ===
    const newBottom = `          <section className="mt-12 mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides & Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${relatedLinksHtml}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden list-none">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-blue-500 transition-transform duration-300 group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Professional Legal Services?</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">Licensed process servers covering all 77 Oklahoma counties. GPS-tracked service with court-ready documentation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="tel:9182126459" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Call (918) 212-6459
                </a>
              </div>
            </div>
          </section>

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>`;

    // === APPLY REPLACEMENTS ===

    // Replace old header pattern
    const oldHeaderPattern = /      <Navbar \/>\s*\n\s*<LocalPromoBanner zips=\{\[\]\} \/>\s*\n\s*<div className="bg-gray-50 min-h-screen py-12">\s*\n\s*<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">\s*\n\s*<nav aria-label="Breadcrumb"[\s\S]*?<\/nav>\s*\n\s*<header[\s\S]*?<\/header>\s*\n\s*<article className="prose prose-lg prose-blue max-w-none bg-white p-8 rounded-xl shadow-sm">/;

    if (!oldHeaderPattern.test(content)) {
      console.log(`ERROR (header pattern not found): ${dir}`);
      errors.push(dir + ' (header)');
      continue;
    }

    content = content.replace(oldHeaderPattern, newHeader);

    // Replace old bottom pattern (Related Guides + FAQ + closing divs)
    const oldBottomPattern = /\s*<section className="mt-12 mb-8 bg-white rounded-xl shadow-sm p-8">[\s\S]*?<\/section>\s*<section className="mt-16">\s*<h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions<\/h2>\s*<div className="space-y-4">\s*\{faqs\.map\(\(faq, index\) => \(\s*<div key=\{index\} className="bg-white rounded-xl shadow-sm p-6">\s*<h3 className="text-lg font-semibold text-gray-900 mb-2">\{faq\.question\}<\/h3>\s*<p className="text-gray-700">\{faq\.answer\}<\/p>\s*<\/div>\s*\)\)\}\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>/;

    if (!oldBottomPattern.test(content)) {
      console.log(`ERROR (bottom pattern not found): ${dir}`);
      errors.push(dir + ' (bottom)');
      continue;
    }

    content = content.replace(oldBottomPattern, '\n' + newBottom);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED: ${dir} (~${readingTime} min read)`);
    updated++;

  } catch (err) {
    console.log(`ERROR: ${dir} - ${err.message}`);
    errors.push(dir + ': ' + err.message);
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors.length}`);
if (errors.length > 0) {
  console.log('Error details:');
  errors.forEach(e => console.log(`  - ${e}`));
}
