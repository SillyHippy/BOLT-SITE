import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Serve a Business or Corporation in Oklahoma | Process Server',
  description: 'Need to serve an LLC, corporation, or business in Oklahoma? Let our professional process servers handle registered agent service efficiently.',
  alternates: { canonical: 'https://justlegalsolutions.org/serve-business-corporation-oklahoma' },
};

export default function ServeBusinessServicePage() {
  return (
    <>
      <UnifiedSchema
        pageType="service"
        pageTitle="Serve a Business or Corporation in Oklahoma"
        pageDescription="Professional process serving for LLCs, corporations, and businesses in Oklahoma."
        pageUrl="https://justlegalsolutions.org/serve-business-corporation-oklahoma"
        siteName="Just Legal Solutions"
      />
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">Serving Businesses & Corporations in Oklahoma</h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When suing a business, LLC, or corporation, you cannot simply hand the documents to a cashier or random employee. Oklahoma law requires serving the <strong>registered agent</strong>, an officer, or a managing agent of the company.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Our Business Process Serving Solutions</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8">
              <li><strong>Registered Agent Service:</strong> We regularly serve major commercial registered agents in Oklahoma, including CT Corporation, CSC, and others.</li>
              <li><strong>Secretary of State Service:</strong> If the registered agent cannot be found, we can help facilitate service upon the Oklahoma Secretary of State.</li>
              <li><strong>Evasive Business Service:</strong> If a business is actively avoiding service, we employ skip tracing and investigative techniques to serve owners and officers directly.</li>
              <li><strong>Out-of-State Entities:</strong> We serve foreign corporations and LLCs that are registered to do business in Oklahoma.</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Need detailed instructions?</h3>
              <p className="text-blue-800 mb-4">
                Read our comprehensive guide to understanding the legal requirements of serving businesses in Oklahoma.
              </p>
              <Link href="/blog/serve-business-corporation-oklahoma" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Read the Full Guide
              </Link>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Serve Your Documents?</h3>
              <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-md">
                Hire a Process Server Today
              </Link>
            </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
