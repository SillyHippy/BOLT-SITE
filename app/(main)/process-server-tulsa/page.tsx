import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';

export const metadata: Metadata = {
  title: 'Professional Process Server in Tulsa County Oklahoma | Same-Day Service',
  description: 'Expert process server in Tulsa County, OK. Certified legal document delivery for divorce papers, summons, subpoenas, and court documents. Same-day service available.',
  keywords: 'process server Tulsa, process serving Oklahoma, legal document delivery, summons service, divorce papers Tulsa, subpoena service',
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-tulsa'
  }
};

export default function ProcessServerTulsaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-12 bg-white">
        {/* Header Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Process Server in Tulsa County, Oklahoma
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Certified process serving services throughout Tulsa County. Fast, reliable, and compliant legal document delivery for attorneys, law firms, and individuals.
            </p>
          </div>
        </div>

        {/* New Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Trusted Partner for Legal Services in Tulsa</h2>
            <p className="text-lg text-gray-700 mb-6">
                At Just Legal Solutions, we provide fast, reliable, and professional process serving throughout Tulsa and surrounding communities, including Broken Arrow, Glenpool, and Sapulpa. Our experienced servers ensure your legal documents are delivered accurately and on time, every time.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Services Include:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Serving Summons and Complaints</li>
                        <li>Subpoena Delivery</li>
                        <li>Eviction & Foreclosure Notices</li>
                        <li>Court Filings & Document Retrieval</li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Same-Day & Rush Service Available</li>
                        <li>Licensed & Bonded Professionals</li>
                        <li>Real-Time GPS Tracking</li>
                        <li>Transparent and Competitive Pricing</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* SEO Components */}
        <GoogleSpecificOptimization 
          businessName="Just Legal Solutions - Process Server Tulsa"
          primaryLocation="Tulsa County, Oklahoma"
          serviceArea={["Tulsa", "Broken Arrow", "Bixby", "Glenpool", "Sapulpa", "Sand Springs"]}
          emergencyService={true}
        />
        <BingYahooOptimization 
          businessName="Just Legal Solutions - Process Server Tulsa"
          serviceTypes={["Process Server Tulsa County", "Legal Document Delivery", "Divorce Papers Service", "Summons Delivery"]}
          expertise={["Certified Process Server", "Same-Day Service", "Professional Delivery", "Court Compliant"]}
          serviceRadius={75}
        />
        <DuckDuckGoOptimization 
          businessName="Just Legal Solutions - Process Server Tulsa"
          focusKeywords={["process server tulsa county", "tulsa legal document delivery", "divorce papers tulsa", "certified process server"]}
          privacyFocused={true}
          quickAnswers={true}
        />
        <SearchEngineUniversalOptimization 
          businessName="Just Legal Solutions - Process Server Tulsa"
          primaryService="Certified Process Serving"
          location="Tulsa County, Oklahoma"
          emergencyAvailable={true}
        />
      </main>
      <Footer />
    </>
  );
}
