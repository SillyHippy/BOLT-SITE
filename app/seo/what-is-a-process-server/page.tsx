import { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

// Optimized metadata for a high-authority article
export const metadata: Metadata = {
  title: 'What Is a Process Server? | A Guide to Legal Service in Oklahoma',
  description: 'A comprehensive guide explaining what a process server does, why their role is critical for due process in Oklahoma, and how to hire a professional for your legal needs.',
  keywords: ['what is a process server', 'service of process oklahoma', 'due process', 'legal document delivery', 'hire a process server', 'affidavit of service'],
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/what-is-a-process-server'
  },
  openGraph: {
    title: 'What Is a Process Server? A Complete Guide | Just Legal Solutions',
    description: 'Understand the critical role of a process server in the Oklahoma legal system.',
    url: 'https://justlegalsolutions.org/seo/what-is-a-process-server',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'What Is a Process Server? A Complete Guide | Just Legal Solutions',
    description: 'Understand the critical role of a process server in the Oklahoma legal system.',
  }
};

// Detailed Article Schema for Rich Snippets
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is a Process Server and Why Are They Essential for Due Process?",
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.png"
    }
  },
  "datePublished": new Date().toISOString().split('T')[0],
  "description": "A comprehensive guide to what a process server is, their legal responsibilities in Oklahoma, and why they are a critical part of the justice system."
};

export default function WhatIsAProcessServerPage() {
  return (
    <>
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 font-sans pt-16"> {/* Added pt-16 for spacing */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article className="prose max-w-none">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                What Is a Process Server? A Guide to Service of Process in Oklahoma
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                In the legal world, the term &quot;process server&quot; is fundamental. But what exactly do they do, and why is their role so critical? This guide breaks down the responsibilities of a process server and explains their importance in the Oklahoma justice system.
              </p>
            </header>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">The Core Role: Upholding Due Process</h2>
              <p>
                A process server is a trained and licensed professional responsible for delivering legal documents to individuals involved in a court case. This act is known as **&quot;service of process.&quot;** Its primary purpose is to satisfy a cornerstone of the American legal system: **due process**. Due process ensures that all parties in a legal action are properly notified, giving them a fair opportunity to respond and present their case.
              </p>
              <p>Without proper service of process, a court case cannot legally proceed, and any judgments made could be invalidated.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">Key Responsibilities of a Process Server</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Personal Delivery:</strong> The primary method is to personally hand the documents to the intended recipient. This requires persistence, professionalism, and often, investigative skill.
                </li>
                <li>
                  <strong>Substitute Service:</strong> If personal delivery isn&apos;t possible, Oklahoma law allows for substitute service, such as leaving documents with a competent person at the individual&apos;s residence.
                </li>
                <li>
                  <strong>Affidavit of Service:</strong> After delivery, the process server completes a sworn statement called an Affidavit of Service. This legal document is filed with the court as official proof that the documents were served, detailing the time, date, and manner of service.
                </li>
                <li>
                  <strong>Skip Tracing:</strong> When a person is difficult to find, process servers use investigative techniques known as <a href="/services" className="text-blue-700 underline">skip tracing</a> to locate them.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">Types of Documents We Serve in Oklahoma</h2>
              <div className="grid grid-cols-2 gap-x-8">
                <ul className="list-disc ml-6 space-y-2">
                    <li>Summons and Complaints</li>
                    <li>Subpoenas for Testimony or Documents</li>
                    <li>Divorce and Family Law Papers</li>
                    <li>Eviction Notices (Forcible Entry & Detainer)</li>
                </ul>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Restraining Orders</li>
                    <li>Small Claims Court Orders</li>
                    <li>Citations and Petitions</li>
                    <li>Business and Civil Litigation Papers</li>
                </ul>
              </div>
            </section>

            <section className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-blue-900">Why Not Just Use the Sheriff?</h3>
              <p className="mt-2 text-blue-800">
                While the Sheriff&apos;s office can serve papers, they are often overburdened with other law enforcement duties. A professional process server&apos;s sole focus is serving your documents quickly and correctly. We offer speed, persistence, and specialized services like skip tracing that are typically outside the scope of a sheriff&apos;s department.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-800">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">Is a process server required for all legal documents in Oklahoma?</h3>
                  <p>For most court-filed documents that initiate a lawsuit or require a response, a licensed third-party process server is required to ensure service is legally valid and impartial.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">How much does process serving cost?</h3>
                  <p>Costs depend on the urgency and location. Standard service in the Tulsa metro starts around $60. For detailed information, please see our <a href="/pricing" className="text-blue-700 underline">pricing page</a>.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">What if the person is actively avoiding service?</h3>
                  <p>This is where a professional shines. Our experienced servers use various legal methods and times of day to ensure service is completed, and we offer skip tracing if the person&apos;s location is unknown.</p>
                </div>
              </div>
            </section>

            <section className="text-center mt-12">
              <h2 className="text-3xl font-bold text-gray-900">Need a Professional Process Server?</h2>
              <p className="text-lg my-4">
                Ensure your legal documents are served correctly and on time. We serve Tulsa and all of Oklahoma.
              </p>
              <a href="tel:5393676832" className="bg-blue-600 text-white px-10 py-4 rounded-lg inline-block font-bold text-lg hover:bg-blue-700 transition-colors">
                Call (539) 367-6832 for a Quote
              </a>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

