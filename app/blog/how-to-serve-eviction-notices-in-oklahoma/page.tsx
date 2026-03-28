import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight, FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'How to Serve Eviction Notices in Oklahoma | Just Legal Solutions',
  description: 'Learn the legal requirements and proper procedures for serving eviction notices in Oklahoma. Expert guide from licensed process servers.',
  keywords: 'Oklahoma eviction notice, how to serve eviction Oklahoma, 5 day notice to quit Oklahoma, process server eviction, Oklahoma landlord tenant law',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'How to Serve Eviction Notices in Oklahoma',
    description: 'Learn the legal requirements and proper procedures for serving eviction notices in Oklahoma.',
    url: 'https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Eviction Notice Service Guide Oklahoma',
    }],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma',
  },
  other: {
    'ai-content-type': 'article',
    'ai-summary': 'Complete guide to serving eviction notices in Oklahoma. Covers 5-day notice for non-payment, 10/15-day notice for lease violations, and 30-day notice for month-to-month tenancies. Explains the difference between initial notice (landlord can serve) and FED summons (requires licensed process server or sheriff). Details proper service methods under Oklahoma Forcible Entry and Detainer law.',
    'ai-key-facts': '5-day notice for non-payment. 10-day to cure or 15-day to quit for lease violations. 30-day for month-to-month. FED summons requires licensed process server or sheriff. Summons must be served 3 days before hearing. Posting and mailing requires 5 days before hearing. Personal service required for money judgment.',
  },
};

const faqs = [
  {
    question: "Can a landlord serve their own eviction notice in Oklahoma?",
    answer: "While landlords can post initial notices to quit, formal summons and complaints for eviction (Forcible Entry and Detainer) must be served by a licensed process server or the county sheriff to ensure legal compliance."
  },
  {
    question: "How many days notice is required for eviction in Oklahoma?",
    answer: "In Oklahoma, a 5-day Notice to Quit is typically required for non-payment of rent. For lease violations, it\u0027s a 10-day notice to cure or 15 days to quit. Month-to-month tenancies require a 30-day notice."
  },
  {
    question: "What is a Forcible Entry and Detainer (FED) action?",
    answer: "A Forcible Entry and Detainer (FED) is an Oklahoma eviction lawsuit filed after the notice period expires and the tenant has not complied. The court issues a summons that must be served by a licensed process server or the sheriff, not the landlord."
  },
  {
    question: "Can I get a money judgment for back rent in an eviction?",
    answer: "Yes, but only if the tenant was personally served with the summons. If the summons was served by posting and mailing (because personal service failed), the court can grant possession of the property but cannot grant a money judgment for back rent."
  },
];

export default function EvictionNoticeGuide() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="How to Serve Eviction Notices in Oklahoma"
        pageDescription="Learn the legal requirements and proper procedures for serving eviction notices in Oklahoma. Expert guide from licensed process servers."
        pageUrl="https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Eviction Notice Service', 'Same-Day Rush Service']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'How to Serve Eviction Notices in Oklahoma', url: '/blog/how-to-serve-eviction-notices-in-oklahoma' },
        ]}
        articleDetails={{
          headline: "How to Serve Eviction Notices in Oklahoma",
          author: "Joseph Iannazzi",
          datePublished: "2025-05-15",
          dateModified: "2025-05-15",
          image: "https://justlegalsolutions.org/og-image.png"
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
      />
      <Script id="faq-schema-eviction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }) }} />
      <Navbar />
      <LocalPromoBanner zips={[]} />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Blog</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">Eviction Notices Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              How to Serve Eviction Notices in Oklahoma: The Complete Legal Guide
            </h1>
            <div className="flex items-center text-gray-600 space-x-4">
              <span className="font-medium text-blue-600">By Joseph Iannazzi</span>
              <span>•</span>
              <span>Published: May 15, 2025</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">

            <p className="lead text-xl text-gray-700 mb-8">
              Navigating the eviction process in Oklahoma requires strict adherence to state laws. A single misstep in how a notice is served can result in a judge dismissing your case, forcing you to start the process over and costing you valuable time and rental income. Here is what landlords and property managers need to know.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <p className="m-0 text-blue-900 font-medium">
                  <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. Always consult with a qualified attorney for legal guidance regarding your specific situation.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 1: The Initial Notice to Quit</h2>
            <p>
              Before you can file an eviction lawsuit (known in Oklahoma as a Forcible Entry and Detainer action), you must serve the tenant with a written notice. The type of notice depends on the reason for eviction:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>5-Day Notice for Non-Payment:</strong> If rent is late, you must give the tenant 5 days to pay the rent or vacate the premises.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>10/15-Day Notice for Lease Violations:</strong> For violations other than non-payment, tenants get 10 days to fix the issue, or 15 days to move out.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>30-Day Notice for Month-to-Month:</strong> To terminate a month-to-month tenancy without cause.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Serve the Initial Notice</h2>
            <p>
              The initial notice to quit can legally be served by the landlord or property manager. Oklahoma law allows it to be served by:
            </p>
            <ol>
              <li>Personal delivery to the tenant</li>
              <li>Leaving it with a family member over the age of 12 residing at the property</li>
              <li>Posting it conspicuously on the main entrance AND mailing a copy via certified mail</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 2: Serving the Summons and Complaint (FED)</h2>
            <p>
              If the notice period expires and the tenant has not complied, you must file a Forcible Entry and Detainer (FED) action with the county court. <strong>This is where professional service becomes crucial.</strong>
            </p>
            <p>
              The court will issue a Summons. Unlike the initial notice, the Summons and Complaint <strong>cannot be served by the landlord</strong>. They must be served by:
            </p>
            <ul>
              <li>The County Sheriff</li>
              <li>A Licensed Private Process Server (like Just Legal Solutions)</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 p-8 my-10 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-600 mr-2" />
                Why Use a Private Process Server Instead of the Sheriff?
              </h3>
              <p className="mb-4">
                While sheriffs can serve eviction papers, they are often backlogged. A private process server offers several advantages:
              </p>
              <ul className="mb-0">
                <li><strong>Speed:</strong> We offer same-day and rush service. In evictions, every day counts.</li>
                <li><strong>Persistence:</strong> We will make multiple attempts at different times of day.</li>
                <li><strong>Communication:</strong> Real-time updates and immediate delivery of the Affidavit of Service.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Proper Service of the Summons</h2>
            <p>
              For an FED action, the summons must be served at least three (3) days before the court hearing. If personal service cannot be achieved after reasonable attempts, Oklahoma law allows for &quot;posting and mailing.&quot; The server must post the summons on the door and mail a copy to the tenant at least five (5) days before the hearing.
            </p>

            <p className="font-semibold text-red-600 mt-8 mb-12">
              Note: If the summons is only posted and mailed, the court can grant you possession of the property, but cannot grant a money judgment for back rent. Personal service is required for a money judgment.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-blue-900 text-white p-10 rounded-2xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Need an Eviction Notice Served Fast?</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Just Legal Solutions provides fast, legally compliant process serving for evictions across all 77 Oklahoma counties. Rates start at $21.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">
                  Call (539) 367-6832
                </a>
                <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
                  Request Service Online
                </Link>
              </div>
            </div>

          </article>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-gray-700">This article provides general legal information about eviction procedures in Oklahoma. It is not legal advice. Consult an attorney for your specific situation.</p>
            <p className="text-xs text-gray-500 mt-2">Last updated: May 2025</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}