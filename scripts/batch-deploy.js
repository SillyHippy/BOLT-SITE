const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ianna\\Downloads\\Kimi_Agent_300代理内容扩展\\content\\blog-queue\\app\\blog';
const liveDestDir = 'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\app\\blog';
const queueDestDir = 'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\content\\blog-queue\\app\\blog';
const manifestPath = 'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\content\\blog-queue\\BLOG_MANIFEST.json';

const posts = fs.readdirSync(srcDir).filter(f => fs.statSync(path.join(srcDir, f)).isDirectory());

let selectedForLive = 0;
const MAX_LIVE = 10;
const queuedManifestEntries = [];

function extractData(content, slug) {
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
    const descMatch = content.match(/description:\s*['"](.*?)['"]/);
    const dateMatch = content.match(/['"]article:published_time['"]:\s*['"](.*?)['"]/);
    const categoryMatch = content.match(/<span className="inline-block[^>]*>\s*(.*?)\s*<\/span>/);
    const faqsMatch = content.match(/const faqs = (\[[\s\S]*?\]);/);
    
    const articleStart = content.indexOf('<article className="prose prose-lg max-w-none">');
    const faqHeadingMatch = content.match(/<h2[^>]*>.*?(FAQ|Frequently Asked).*?<\/h2>/i);
    const faqHeading = faqHeadingMatch ? faqHeadingMatch.index : -1;
    const conclusionHeadingMatch = content.match(/<h2[^>]*>.*?Conclusion.*?<\/h2>/i);
    const conclusionHeading = conclusionHeadingMatch ? conclusionHeadingMatch.index : -1;
    const articleEnd = content.indexOf('</article>');
    
    let mainContent = '';
    let conclusionContent = '';
    
    if (articleStart !== -1 && faqHeading !== -1) {
        mainContent = content.substring(articleStart + '<article className="prose prose-lg max-w-none">'.length, faqHeading).trim();
    } else {
        console.warn(`Warning: Could not parse main content for ${slug}`);
        // Fallback: If no FAQ heading, just use until conclusion or end
        const endIdx = conclusionHeading !== -1 ? conclusionHeading : articleEnd;
        if (articleStart !== -1 && endIdx !== -1) {
            mainContent = content.substring(articleStart + '<article className="prose prose-lg max-w-none">'.length, endIdx).trim();
        }
    }
    
    if (conclusionHeading !== -1 && articleEnd !== -1) {
        // Strip the <h2>Conclusion</h2> tag as we inject it manually in the template to avoid double heading
        let rawConclusion = content.substring(conclusionHeading, articleEnd).trim();
        conclusionContent = rawConclusion.replace(/<h2[^>]*>.*?Conclusion.*?<\/h2>/i, '').trim();
    }

    const readingTimeMatch = content.match(/<span>(~.*?)<\/span>/);
    
    return {
        title: titleMatch ? titleMatch[1] : 'Untitled',
        description: descMatch ? descMatch[1] : '',
        date: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0],
        category: categoryMatch ? categoryMatch[1] : 'Legal Services',
        readingTime: readingTimeMatch ? readingTimeMatch[1] : '~10 min',
        faqsStr: faqsMatch ? faqsMatch[1] : '[]',
        mainContent,
        conclusionContent,
        slug
    };
}

function escapeString(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function generateNewFile(data) {
    const title = escapeString(data.title);
    const description = escapeString(data.description);
    
    return `import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  keywords: 'process server Oklahoma, legal support, courier, notary, skip tracing',
  authors: [{ name: 'Joseph Iannazzi' }],
  creator: 'Joseph Iannazzi',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: '${title}',
    description: '${description}',
    url: 'https://justlegalsolutions.org/blog/${data.slug}',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: '${title}',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/${data.slug}',
  },
  other: {
    'article:published_time': '${data.date}',
    'article:modified_time': '${data.date}',
    'article:author': 'Joseph Iannazzi',
    'ai-content-type': 'article',
  },
};

const faqs: { question: string; answer: string }[] = ${data.faqsStr};

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="${title.replace(/\\'/g, "'")}"
        pageDescription="${description.replace(/\\'/g, "'")}"
        pageUrl="https://justlegalsolutions.org/blog/${data.slug}"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: '${title}', item: 'https://justlegalsolutions.org/blog/${data.slug}' }
        ]}
        articleDetails={{
          headline: '${title}',
          datePublished: '${data.date}',
          dateModified: '${data.date}',
          authorName: 'Joseph Iannazzi',
          authorUrl: 'https://justlegalsolutions.org/about',
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'process server Oklahoma',
          'legal support services',
          'court filing',
          'skip tracing',
          'notary public',
          'legal courier',
          'Oklahoma courts'
        ]}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            ${data.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            ${data.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('${data.date}').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ${data.readingTime}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            ${data.mainContent}
          </article>
          
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/process-server-safety-guide-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Safety Protocol</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Process Server Safety Guide</h3>
                <p className="text-sm text-gray-600">Essential safety protocols for field service in rural and urban Oklahoma.</p>
              </Link>
              <Link href="/blog/what-to-look-for-choosing-process-server-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Hiring Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Choosing the Right Server</h3>
                <p className="text-sm text-gray-600">Key credentials and experience to look for when hiring a process server.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-200 rounded-lg bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                      <span>{faq.question}</span>
                      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 border border-gray-200 group-open:bg-blue-50 group-open:text-blue-600 group-open:border-blue-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 pt-0 leading-relaxed text-gray-700 bg-white border-t border-gray-100 rounded-b-lg">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Scale className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Need Professional Legal Support?</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving, courier, and notary services across all 77 Oklahoma counties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Submit Assignment
                  </Link>
                  <a href="tel:5393676832" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Call (539) 367-6832
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <article className="prose prose-lg prose-blue max-w-none mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2>Conclusion</h2>
            ${data.conclusionContent}
          </article>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
`;
}

for (const slug of posts) {
    const postFilePath = path.join(srcDir, slug, 'page.tsx');
    if (!fs.existsSync(postFilePath)) continue;
    
    const content = fs.readFileSync(postFilePath, 'utf8');
    const data = extractData(content, slug);
    const newContent = generateNewFile(data);
    
    let isLive = false;
    // Prefer VA Services and Courier for the 10 live ones
    if (selectedForLive < MAX_LIVE && (data.category.includes('VA') || data.category.includes('Courier'))) {
        isLive = true;
        selectedForLive++;
    } else if (selectedForLive < MAX_LIVE && data.category === 'Technology') {
        // Fallback to fill the 10 quota
        isLive = true;
        selectedForLive++;
    }
    
    const targetDir = isLive ? path.join(liveDestDir, slug) : path.join(queueDestDir, slug);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(targetDir, 'page.tsx'), newContent);
    
    if (!isLive) {
        queuedManifestEntries.push({
            slug: data.slug,
            title: data.title,
            category: data.category,
            file_path: `app/blog/${data.slug}/page.tsx`
        });
    }
    
    console.log(`Processed ${slug} -> ${isLive ? 'LIVE' : 'QUEUE'}`);
}

const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

for (const entry of queuedManifestEntries) {
    if (!manifestContent.posts.some(p => p.slug === entry.slug)) {
        manifestContent.posts.push(entry);
    }
}

manifestContent.generated_at = new Date().toISOString();
fs.writeFileSync(manifestPath, JSON.stringify(manifestContent, null, 2));

console.log(`\nDone! Deployed ${selectedForLive} to Live and ${queuedManifestEntries.length} to Queue.`);
