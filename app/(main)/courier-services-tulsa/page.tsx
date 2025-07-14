import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Truck, Clock, FileText, Shield, MapPin } from 'lucide-react';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

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
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header Section with More Padding */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Courier Services in Tulsa County, Oklahoma
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Secure, reliable courier services for legal documents, court filings, and business materials throughout Tulsa County and Oklahoma.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Professional Image */}
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* ...existing code... */}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Button Instead of List */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Courier Service Rates</h3>
                <Link 
                  href="/pricing" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full text-center font-bold text-lg"
                >
                  View Pricing
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  Rates vary by distance and urgency. Court filing services include additional handling fees.
                </p>
              </div>

              {/* Service Hours Updated to 24/7 */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Open:</span>
                    <span>24/7 Emergency Service Available</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Courier Service?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us for fast, secure courier services in Tulsa County. Same-day delivery available.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request Service
                </Link>
              </div>
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
