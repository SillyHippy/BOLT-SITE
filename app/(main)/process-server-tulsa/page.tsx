import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, FileText, Shield } from 'lucide-react';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

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
              Professional Process Server in Tulsa County, Oklahoma
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Certified process serving services throughout Tulsa County. Fast, reliable, and compliant legal document delivery for attorneys, law firms, and individuals.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Professional Image */}
          <div className="mb-12 text-center">
            <Image
              src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&h=400&fit=crop&auto=format"
              alt="Professional process server delivering legal documents in Tulsa County Oklahoma"
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Process Serving Rates</h3>
                <Link 
                  href="/pricing" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full text-center font-bold text-lg"
                >
                  View Pricing
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  All services include detailed affidavit of service. Additional fees may apply for multiple attempts.
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

              {/* Contact Info Updated */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-900">Phone:</strong>
                    <p className="text-gray-600">(539) 367-6832</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Email:</strong>
                    <p className="text-gray-600">info@justlegalsolutions.org</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Coverage:</strong>
                    <p className="text-gray-600">Tulsa County & Statewide Oklahoma</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Process Service?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us today for fast, professional process serving in Tulsa County. Same-day service available.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Quote Now
                </Link>
              </div>
            </div>
          </div>
        </div>

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
