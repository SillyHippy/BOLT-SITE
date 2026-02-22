import React from 'react';
import Link from 'next/link';
import { FileText, FileCheck, Wrench, Printer, Shield, ClipboardList, ExternalLink, ArrowRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Process Server Tools & Forms | Affidavits, Field Sheets, PDF Tools | Just Legal Solutions',
  description: 'Free tools and forms for process servers and legal professionals—Affidavit of Service generator, field sheet creator, 14+ PDF tools, and more. No subscriptions required.',
  keywords: [
    'free process server tools',
    'affidavit of service generator',
    'process server field sheet',
    'free pdf tools legal',
    'process server forms oklahoma',
    'legal document tools free',
    'affidavit generator online',
    'pdf merge compress legal',
    'process server resources',
    'free legal forms oklahoma'
  ],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Legal Tools',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Free Process Server Tools & Forms | Just Legal Solutions',
    description: 'Free tools for process servers—generate affidavits, field sheets, merge/compress/convert PDFs, and more. No subscriptions or sign-ups required.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/tools',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/tools-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Process Server Tools and Legal Forms'
      }
    ]
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/tools'
  }
};

const ToolsPage = () => {
  const formGenerators = [
    {
      title: 'Affidavit of Service Generator',
      url: '/affidavit-of-service',
      icon: FileCheck,
      description: 'Create professional Affidavit of Service or Non-Service forms ready for court filing. Includes case details, manner of service, attempt tracking, and an optional notary section. Fill it out, print it, or save as PDF.',
      tags: ['Free', 'No Sign-Up', 'Print / PDF'],
      color: 'blue'
    },
    {
      title: 'Field Sheet Generator',
      url: '/field-sheet',
      icon: ClipboardList,
      description: 'Generate process server field sheets for documenting service attempts in the field. Enter case info, service locations, and field notes—then print or save as PDF. Perfect for staying organized on the road.',
      tags: ['Free', 'No Sign-Up', 'Print / PDF'],
      color: 'green'
    }
  ];

  const pdfTools = [
    { name: 'Compress PDF', description: 'Reduce file sizes for e-filing and email' },
    { name: 'Merge PDF', description: 'Combine multiple legal documents into one' },
    { name: 'Split PDF', description: 'Separate multi-page docs into sections' },
    { name: 'Convert To PDF', description: 'Turn Word, Excel, or images into PDF' },
    { name: 'Convert PDF To', description: 'Export PDFs to Word, Excel, or images' },
    { name: 'Flatten PDF', description: 'Lock form fields permanently' },
    { name: 'Unlock PDF', description: 'Remove password protection from files' },
    { name: 'Protect PDF', description: 'Password-protect sensitive documents' },
    { name: 'Extract Pages', description: 'Pull specific pages from a PDF' },
    { name: 'Remove Pages', description: 'Delete unwanted pages' },
    { name: 'Rotate Pages', description: 'Fix page orientation issues' },
    { name: 'Rearrange Pages', description: 'Reorder pages in any document' },
    { name: 'Images to PDF', description: 'Convert photos and scans to PDF' },
    { name: 'Extract Images', description: 'Pull embedded images from PDFs' },
    { name: 'PDF OCR', description: 'Text recognition on scanned documents' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            100% Free — No Subscriptions, No Sign-Ups
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Tools &amp; Forms for Process Servers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need in one place—generate affidavits, create field sheets, and work with PDFs. 
            Built by a process server, for process servers. No subscriptions like ServeNow or ABC Legal required.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
            We built these tools so any process server, notary, or legal professional can create their own 
            documents without paying for expensive software or monthly subscriptions.
          </p>

          {/* Quick Jump Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="#form-generators" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition">
              Form Generators
            </a>
            <a href="#pdf-tools" className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition">
              PDF Tools
            </a>
            <a href="#resources" className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition">
              More Resources
            </a>
          </div>
        </div>

        {/* Form Generators Section */}
        <section id="form-generators" className="mb-20">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-800">Form Generators</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8 ml-12">
            Generate court-ready legal forms right in your browser. Fill them out, print them, or save as PDF—no account needed.
          </p>

          <div className="grid md:grid-cols-2 gap-8 ml-0 md:ml-12">
            {formGenerators.map((tool) => (
              <Link
                key={tool.title}
                href={tool.url}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                    tool.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    <tool.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{tool.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Open Tool <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PDF Tools Section */}
        <section id="pdf-tools" className="mb-20">
          <div className="flex items-center mb-4">
            <Printer className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-800">Free PDF Tools</h2>
          </div>
          <p className="text-lg text-gray-600 mb-2 ml-12">
            14 embedded PDF tools plus OCR—powered by <a href="https://www.pdf24.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PDF24.org</a>. 
            Compress, merge, split, convert, protect, and more. All run directly in your browser, no software to install.
          </p>
          <p className="text-gray-500 mb-8 ml-12">
            These tools are especially useful for e-filing, combining case documents, reducing file sizes for email, or converting photos to PDF.
          </p>

          {/* PDF Tools Feature Card */}
          <Link
            href="/pdf-tools"
            className="group block bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100 hover:border-purple-300 mb-8 ml-0 md:ml-12"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    PDF Tools Suite
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-xl">
                    All 15 tools on one page—open the tool you need, drag and drop your files, and download the result. 
                    No watermarks, no file size limits on most tools.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Free</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">No Sign-Up</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Browser-Based</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">15 Tools</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                    Open PDF Tools <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Individual Tools Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ml-0 md:ml-12">
            {pdfTools.map((tool) => (
              <Link
                key={tool.name}
                href="/pdf-tools"
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                  {tool.name}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* More Resources Section */}
        <section id="resources" className="mb-16">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-800">More Resources</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8 ml-12">
            Additional tools, guides, and resources for process servers and legal professionals working in Oklahoma.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-12">
            <Link
              href="/resources"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                Legal Resources &amp; Guides
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Process serving basics, family law guides, county-specific courthouse procedures, key Oklahoma statutes, and external resources.
              </p>
              <span className="text-blue-600 font-semibold text-sm group-hover:underline">Browse Guides &rarr;</span>
            </Link>

            <Link
              href="/oklahoma-process-server-pricing"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                Oklahoma Process Server Pricing
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Transparent pricing guide for process serving across Oklahoma—standard, rush, same-day, and stakeout rates for all 77 counties.
              </p>
              <span className="text-blue-600 font-semibold text-sm group-hover:underline">View Pricing &rarr;</span>
            </Link>

            <Link
              href="/oklahoma-process-server-best-practices-checklist-2026"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                Best Practices Checklist
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Professional checklist for Oklahoma process servers covering documentation, attempt logging, affidavit preparation, and court filing standards.
              </p>
              <span className="text-blue-600 font-semibold text-sm group-hover:underline">View Checklist &rarr;</span>
            </Link>

            <Link
              href="/oklahoma-process-server-technology"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                Process Server Technology 2026
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                GPS tracking, electronic filing, digital affidavits, and other modern tools used by professional Oklahoma process servers.
              </p>
              <span className="text-blue-600 font-semibold text-sm group-hover:underline">Learn More &rarr;</span>
            </Link>

            <Link
              href="/ai-skip-tracing-guide-oklahoma"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                AI Skip Tracing Guide
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                How AI-powered skip tracing helps locate hard-to-find individuals using database searching, public records, and investigative techniques.
              </p>
              <span className="text-blue-600 font-semibold text-sm group-hover:underline">Read Guide &rarr;</span>
            </Link>

            <Link
              href="/oklahoma-process-server-laws"
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                Oklahoma Process Server Laws
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Comprehensive guide to Oklahoma process server licensing (12 O.S. § 158.1), service methods (12 O.S. § 2004), and the 180-day deadline.
              </p>
              <span className="text-blue-600 font-semibold text-sm group-hover:underline">Read More &rarr;</span>
            </Link>
          </div>
        </section>

        {/* Why We Built This */}
        <section className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why We Built These Tools</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most process servers are independent contractors who shouldn&apos;t have to pay for expensive subscriptions 
              just to create basic documents like affidavits and field sheets. Platforms like ServeNow, ABC Legal, and 
              others charge monthly fees for tools that should be accessible to everyone in the industry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We built this page so that <strong>any process server</strong>—whether you&apos;re just starting out or have been 
              in the field for decades—can generate professional, court-ready documents and work with PDFs for free. 
              No account, no credit card, no catch.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Professional Process Serving?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Just Legal Solutions provides licensed, bonded process serving across all 77 Oklahoma counties. 
            Same-day service available. Flat-rate pricing with no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:5393676832" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
              Call (539) 367-6832
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">Tools page last updated: February 2026.</p>
      </div>

      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/tools"
        title="Free Process Server Tools & Forms | Just Legal Solutions"
        description="Free tools and forms for process servers—affidavit generator, field sheet creator, 14+ PDF tools, and more. No subscriptions required."
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156
        }}
      />
    </main>
  );
};

export default ToolsPage;
