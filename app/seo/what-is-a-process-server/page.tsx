import { Metadata } from 'next';
import Image from 'next/image';

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

export default function WhatIsAProcessServerPage() {
  return (
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
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>They ensure due process by notifying parties of legal actions.</li>
          <li>They provide proof of service, which is required by courts.</li>
          <li>They help law firms, businesses, and individuals comply with legal requirements.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">What Does a Process Server Do?</h2>
        <ul className="list-disc ml-6 mb-6 text-gray-700">
          <li>Delivers legal documents to defendants, witnesses, and other parties.</li>
          <li>Completes affidavits of service as proof of delivery.</li>
          <li>Locates individuals through skip tracing if necessary.</li>
          <li>Handles urgent, same-day, and routine service requests.</li>
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
        <h2 className="text-2xl font-bold mb-4 text-blue-800">How to Hire a Process Server</h2>
        <p className="mb-6">
          To hire a process server in Oklahoma, contact a licensed professional like Just Legal Solutions. Provide details about your case, the documents to be served, and any deadlines. Our team will handle the delivery, documentation, and provide updates throughout the process.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg mb-8">
          <p className="text-blue-900 font-semibold">
            Need a process server in Tulsa or anywhere in Oklahoma? <a href="/contact" className="underline text-blue-700">Contact Just Legal Solutions</a> for fast, reliable, and professional legal document delivery.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Is a process server required for all legal documents?</h3>
            <p className="text-gray-700">Not all documents require a process server, but many court papers and legal notifications must be served by a licensed professional to ensure compliance and proof of service.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">How much does process serving cost in Oklahoma?</h3>
            <p className="text-gray-700">Costs vary based on urgency, location, and type of service. Standard service typically starts at $60, with rush and same-day options available.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Can process servers help locate individuals?</h3>
            <p className="text-gray-700">Yes, professional process servers often provide skip tracing services to locate hard-to-find individuals for legal delivery.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
