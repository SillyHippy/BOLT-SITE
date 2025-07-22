import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import ServiceSchema from '@/components/ui/service-schema';
import WebsiteSchema from '@/components/ui/website-schema';
import EnhancedBreadcrumbSchema, { VisualBreadcrumbs } from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema from '@/components/ui/enhanced-faq-schema';
import PerformanceSchema from '@/components/ui/performance-schema';

// Optimized metadata with social sharing images, but no images on the page itself.
export const metadata: Metadata = {
  title: 'Sand Springs Process Server | Same-Day Service in Tulsa County, OK',
  description: 'Professional process server in Sand Springs, Oklahoma. We offer fast, reliable, and legally compliant service for all legal documents. 24/7 emergency service available. Call (539) 367-6832.',
  keywords: ['Sand Springs process server', 'legal document delivery Sand Springs', 'process serving Tulsa County', 'emergency process server Sand Springs', 'subpoena service Sand Springs'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/process-server-sand-springs'
  },
  openGraph: {
    title: 'Sand Springs Process Server | Just Legal Solutions',
    description: 'Fast, reliable, and professional process serving for Sand Springs and all of Tulsa County.',
    url: 'https://justlegalsolutions.org/seo/process-server-sand-springs',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/jls-logo.png', // Logo for social sharing
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions Logo'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sand Springs Process Server | Just Legal Solutions',
    description: 'Fast, reliable, and professional process serving for Sand Springs and all of Tulsa County.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'], // Logo for social sharing
  }
};

// --- High-Quality, Unique Local Content for Sand Springs ---
const sandSpringsData = {
    history: `Founded by philanthropist Charles Page in 1908, Sand Springs has a unique history as a planned industrial city and a home for orphaned children. Its development was tied to the Sand Springs Railway and key industries like Sheffield Steel. This deep-rooted community structure requires a process server with genuine local knowledge to navigate effectively.`,
    courthouse: {
        name: 'Sand Springs Municipal Court (City Hall)',
        address: '100 E Broadway St, Sand Springs, OK 74063',
        phone: '(918) 246-2500',
        website: 'https://www.sandspringsok.org/172/Municipal-Court',
        note: 'While we serve documents for the municipal court, most civil cases for Sand Springs residents are filed at the Tulsa County Courthouse.'
    },
    processServingLaw: `Process serving in Sand Springs must adhere strictly to Oklahoma State Statutes (Title 12, §2004). This means service must be performed by a licensed, disinterested party. We ensure every serve is legally compliant, providing a notarized Affidavit of Service that is admissible in the Tulsa County District Court.`,
    serviceAreas: [
        'Downtown Sand Springs',
        'Prattville',
        'Angus Valley',
        'Keystone Lake Area',
        'Berryhill',
        'Rockefeller',
        'Morrow Road',
        'River West Festival Park Area'
    ],
    faqs: [
      {
        question: 'How much does process serving cost in Sand Springs, Oklahoma?',
        answer: 'Our standard service in Sand Springs is competitively priced. For a full breakdown of costs, including rush and same-day options, please see our complete pricing guide. We offer transparent rates with no hidden fees.'
      },
      {
        question: 'Do you offer same-day process serving in Sand Springs?',
        answer: 'Yes, we specialize in same-day and emergency rush service throughout Sand Springs and the surrounding areas. We understand legal matters are time-sensitive and prioritize urgent requests.'
      },
      {
        question: 'Are you licensed to serve court papers in Sand Springs?',
        answer: 'Absolutely. Our process servers are fully licensed and bonded by the state of Oklahoma, ensuring that every service performed in Sand Springs is legally valid and professionally executed.'
      },
      {
        question: 'What legal documents do you serve in Sand Springs?',
        answer: 'We serve all types of legal documents, including summons, subpoenas, eviction notices, divorce papers, small claims filings, and protective orders. We handle each document with the required discretion and diligence.'
      },
      {
        question: 'How do you handle difficult-to-serve individuals in the Sand Springs area?',
        answer: 'Our servers are trained in skip tracing and surveillance techniques. We utilize our local knowledge of Sand Springs to successfully locate and serve individuals who may be avoiding service, ensuring your case can move forward.'
      }
    ]
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Sand Springs Process Server', url: '/seo/process-server-sand-springs' }
];

export default function SandSpringsProcessServer() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <ServiceSchema
        serviceName="Sand Springs Process Serving"
        serviceDescription="Professional legal document delivery in Sand Springs, Oklahoma."
        serviceArea="Sand Springs, Tulsa County, Oklahoma"
        priceRange="$60-$150"
        serviceType="Legal Document Delivery"
      />
      <WebsiteSchema
        url="https://justlegalsolutions.org/seo/process-server-sand-springs"
        name="Sand Springs Process Server - Just Legal Solutions"
        description="Professional process server in Sand Springs, Oklahoma."
        keywords={metadata.keywords as string[]}
      />
      <EnhancedBreadcrumbSchema items={breadcrumbItems} />
      <EnhancedFAQSchema faqs={sandSpringsData.faqs} pageTitle="Sand Springs Process Server" />
      <PerformanceSchema
        pageName="Sand Springs Process Server"
        pageUrl="/seo/process-server-sand-springs"
        loadTime={1.8}
        mobileOptimized={true}
      />

      <Navbar />
      <div className="bg-white">
        <header className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4 text-center">
                <VisualBreadcrumbs items={breadcrumbItems} />
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Process Server in Sand Springs, Oklahoma</h1>
                <p className="text-xl md:text-2xl mb-8">Your Trusted Partner for Legal Document Service in Tulsa County.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/pricing" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">View Pricing & Get Quote</a>
                    <a href="tel:5393676832" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">Call (539) 367-6832</a>
                </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-4xl">
            
            <section className="mb-10 bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Local Expertise in Sand Springs</h2>
                <p className="text-lg text-gray-700">{sandSpringsData.history}</p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white border rounded-lg p-6 shadow">
                    <h3 className="text-2xl font-semibold mb-3">Local Courthouse Information</h3>
                    <p className="font-bold">{sandSpringsData.courthouse.name}</p>
                    <p>{sandSpringsData.courthouse.address}</p>
                    <p>Phone: {sandSpringsData.courthouse.phone}</p>
                    <a href={sandSpringsData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Official Website</a>
                    <p className="text-sm text-gray-600 mt-2"><em>{sandSpringsData.courthouse.note}</em></p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow">
                    <h3 className="text-2xl font-semibold mb-3">Oklahoma Law Compliance</h3>
                    <p>{sandSpringsData.processServingLaw}</p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Sand Springs Service Areas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {sandSpringsData.serviceAreas.map(area => (
                        <div key={area} className="bg-gray-100 border rounded-lg px-4 py-2 text-center">
                            <span className="text-gray-800 font-medium">📍 {area}</span>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {sandSpringsData.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-gray-50 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                            <p className="text-gray-700 mt-2">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

