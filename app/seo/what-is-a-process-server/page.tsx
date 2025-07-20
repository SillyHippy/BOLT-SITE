import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'What Is a Process Server? | Just Legal Solutions Oklahoma',
  description: 'Learn what a process server does, why they are important, and how professional process serving works in Oklahoma. Expert legal support and document delivery.',
  keywords: ['process server', 'legal document delivery', 'Oklahoma process server', 'court papers', 'service of process', 'legal support'],
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/what-is-a-process-server/'
  },
  openGraph: {
    title: 'What Is a Process Server? | Just Legal Solutions Oklahoma',
    description: 'Learn what a process server does, why they are important, and how professional process serving works in Oklahoma.',
    url: 'https://justlegalsolutions.org/seo/what-is-a-process-server/',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/images/hero.webp',
      width: 1200,
      height: 630,
      alt: 'Process Server Oklahoma - Legal Document Delivery',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Process Server? | Just Legal Solutions Oklahoma',
    description: 'Learn what a process server does, why they are important, and how professional process serving works in Oklahoma.',
    images: ['https://justlegalsolutions.org/images/hero.webp'],
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is a Process Server and What Do They Do?",
  "image": "https://justlegalsolutions.org/images/hero.webp",
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.webp"
    }
  },
  "datePublished": new Date().toISOString().split('T')[0],
  "description": "A complete guide to what a process server is, what they do, and why they are a critical part of the legal system in Oklahoma."
};

export default function WhatIsAProcessServerPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">What Is a Process Server?</h1>
          <Image
            src="/images/hero.webp"
            alt="Process server delivering legal documents in Oklahoma"
            width={1200}
            height={630}
            className="rounded-lg shadow-lg mb-8 w-full h-auto"
            priority
          />
          <p className="text-lg mb-6">
            A process server is a legal professional responsible for delivering court documents, such as summons, subpoenas, complaints, and other legal notifications, to individuals involved in a legal case. The role of a process server is crucial in ensuring that all parties are properly notified and that legal proceedings can move forward in compliance with state and federal laws.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Are Process Servers Important?</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
            <li>They ensure due process by legally notifying parties of legal actions.</li>
            <li>They provide a sworn Affidavit of Service, which is required by courts as proof of delivery.</li>
            <li>They help law firms, businesses, and individuals comply with strict legal requirements.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">What Does a Process Server Do?</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
            <li>Delivers legal documents to defendants, witnesses, and other parties.</li>
            <li>Completes and files affidavits of service as proof of delivery.</li>
            <li>Locates individuals through professional skip tracing if necessary.</li>
            <li>Handles urgent, same-day, and routine <a href="/services" className="text-blue-700 underline">service requests</a>.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Professional Process Serving in Oklahoma</h2>
          <p className="mb-6">
            In Oklahoma, process servers must be licensed and bonded to ensure professional and legal compliance. Just Legal Solutions provides expert process serving throughout Tulsa County and statewide, offering same-day, rush, and standard service options for law firms, businesses, and individuals.
          </p>
          <h3 className="text-xl font-bold mb-2 text-blue-700">Types of Documents Served</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Summons and complaints</li>
            <li>Subpoenas</li>
            <li>Divorce papers</li>
            <li>Eviction notices</li>
            <li>Restraining orders</li>
            <li>Small claims documents</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8 text-center">
            <p className="text-blue-900 font-semibold text-lg">
              Need a process server in Tulsa or anywhere in Oklahoma?
            </p>
            <a href="tel:5393676832" className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg inline-block font-bold hover:bg-blue-700 transition-colors">
              Call Now for a Quote: (539) 367-6832
            </a>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Is a process server required for all legal documents?</h3>
              <p className="text-gray-700">Not all documents require one, but many court papers must be served by a licensed professional to ensure compliance and provide valid proof of service.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">How much does process serving cost in Oklahoma?</h3>
              <p className="text-gray-700">Costs vary based on urgency and location. Standard service in the Tulsa metro typically starts around $60, with rush and same-day options available.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Can process servers help locate individuals?</h3>
              <p className="text-gray-700">Yes, professional process servers often provide skip tracing services to locate hard-to-find individuals for legal delivery.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}