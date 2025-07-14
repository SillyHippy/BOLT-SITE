import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';

export const metadata: Metadata = {
  title: 'Professional Courier Services Tulsa County | Legal Document Delivery',
  description: 'Expert courier services in Tulsa County, Oklahoma. Same-day legal document delivery, court filings, and secure business document transport throughout Oklahoma.',
  keywords: 'courier services Tulsa, legal document delivery, court filing services, same-day courier Oklahoma, secure document transport',
  alternates: {
    canonical: 'https://justlegalsolutions.org/courier-services-tulsa'
  }
};

export default function CourierServicesTulsaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-12 bg-white">
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Courier Services in Tulsa County, Oklahoma
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Secure, reliable courier services for legal documents, court filings, and business materials throughout Tulsa County and Oklahoma.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=400&fit=crop&auto=format"
              alt="Professional courier service delivering legal documents in Tulsa County Oklahoma"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reliable Legal & Professional Courier in Tulsa</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              When time-sensitive documents need to be delivered securely, Just Legal Solutions offers the premier courier service in Tulsa. We specialize in the swift and confidential transport of legal documents, courthouse filings, and professional packages.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Courier Services For:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Law Firms & Attorneys</li>
                  <li>Real Estate & Title Companies</li>
                  <li>Architectural & Engineering Firms</li>
                  <li>Medical Offices</li>
                  <li>Corporate & Small Businesses</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Same-Day & On-Demand Delivery</li>
                  <li>Secure, Point-to-Point Transport</li>
                  <li>Courthouse Filing & Document Stamping</li>
                  <li>Professional & Uniformed Couriers</li>
                  <li>Competitive Flat-Rate Pricing</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/pricing"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg"
              >
                Explore Our Courier Rates
              </a>
            </div>
          </div>
        </div>

        <GoogleSpecificOptimization
          businessName="Just Legal Solutions - Courier Services Tulsa"
          primaryLocation="Tulsa County, Oklahoma"
          serviceArea={["Tulsa", "Oklahoma City", "Broken Arrow", "Norman", "Edmond", "Lawton"]}
          emergencyService={true}
        />
        <BingYahooOptimization
          businessName="Just Legal Solutions - Courier Services Tulsa"
          serviceTypes={["Courier Services Tulsa", "Legal Document Delivery", "Court Filing Services", "Secure Document Transport"]}
          expertise={["Same-Day Delivery", "Legal Courier", "Court Filings", "Secure Transport"]}
          serviceRadius={100}
        />
        <DuckDuckGoOptimization
          businessName="Just Legal Solutions - Courier Services Tulsa"
          focusKeywords={["courier services tulsa", "legal document delivery oklahoma", "court filing services", "secure courier tulsa"]}
          privacyFocused={true}
          quickAnswers={true}
        />
        <SearchEngineUniversalOptimization
          businessName="Just Legal Solutions - Courier Services Tulsa"
          primaryService="Courier Services"
          location="Tulsa County, Oklahoma"
          emergencyAvailable={true}
        />
      </main>
      <Footer />
    </>
  );
}
