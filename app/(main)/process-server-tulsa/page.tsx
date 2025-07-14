import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tulsa County Process Server | Fast & Reliable | Just Legal Solutions',
  description: 'Certified process server for Tulsa County, OK. We provide fast, reliable, and compliant legal document delivery for attorneys, law firms, and the public. Same-day service available.',
  keywords: 'process server tulsa county, tulsa county legal services, certified process server tulsa, reliable process serving',
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-tulsa'
  }
};

export default function ProcessServerTulsaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="bg-blue-800 text-white">
            <div className="container mx-auto px-4 py-20 pt-32 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Your Certified Process Server for Tulsa County</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Ensuring your legal documents are served with precision, speed, and full compliance with Oklahoma law.</p>
            </div>
        </div>

        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Comprehensive Service Across Tulsa County</h2>
                    <p className="text-lg text-gray-700 mb-10 text-center">
                        From the busiest downtown law firms to the quietest rural addresses, Just Legal Solutions provides complete and reliable process serving across all of Tulsa County. We understand the local courts and the importance of timely service for your legal case.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-xl mb-3 text-blue-900">Services We Offer:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>Serving Summons & Complaints</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>Subpoena & Citation Delivery</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>Family Law & Divorce Papers</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>Eviction & Forcible Detainer Notices</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>Court Filings at the Tulsa County Courthouse</span></li>
                            </ul>
                        </div>
                         <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-xl mb-3 text-blue-900">Why Just Legal Solutions?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>**Speed:** Same-day and rush services available.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>**Reliability:** High success rate, even with evasive subjects.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>**Compliance:** Strict adherence to all Oklahoma statutes.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>**Communication:** Regular status updates and prompt proof of service.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1" /><span>**Professionalism:** Our servers are experienced and discreet.</span></li>
                            </ul>
                        </div>
                    </div>
                     <div className="text-center mt-16">
                        <Link href="/pricing" className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors">
                            View Our Competitive Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </main>
      {/* The duplicate Footer component that was here has been removed. */}
    </>
  );
}
