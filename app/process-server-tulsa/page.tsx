import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, FileText, Shield } from 'lucide-react';

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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Process Serving Throughout Tulsa County</h2>
              <p className="text-gray-600 mb-6">
                Just Legal Solutions provides professional process serving services throughout Tulsa County, Oklahoma. Our certified process servers are experienced in handling all types of legal document service with precision, professionalism, and strict adherence to Oklahoma state laws.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need routine document service or urgent same-day delivery, our team ensures your legal documents are served properly and promptly. We maintain detailed records and provide comprehensive affidavits of service for all deliveries.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types of Documents We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Civil Process Service</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Summons and complaints</li>
                    <li>• Divorce papers and petitions</li>
                    <li>• Child custody documents</li>
                    <li>• Restraining orders</li>
                    <li>• Small claims court papers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Legal Document Delivery</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Subpoenas (witness and document)</li>
                    <li>• Eviction notices</li>
                    <li>• Garnishment papers</li>
                    <li>• Bankruptcy documents</li>
                    <li>• Court orders and judgments</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Process Serving Coverage Areas</h3>
              <p className="text-gray-600 mb-6">
                We provide comprehensive process serving throughout Tulsa County and surrounding areas in Oklahoma. Our local knowledge and established relationships ensure efficient service in all jurisdictions.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-3">Primary Service Areas:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
                  <div>
                    <strong>Tulsa County:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Tulsa</li>
                      <li>• Broken Arrow</li>
                      <li>• Sapulpa</li>
                      <li>• Sand Springs</li>
                      <li>• Jenks</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Surrounding Areas:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Wagoner County</li>
                      <li>• Creek County</li>
                      <li>• Rogers County</li>
                      <li>• Osage County</li>
                      <li>• Okmulgee County</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Statewide Service:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Oklahoma County</li>
                      <li>• Cleveland County</li>
                      <li>• Payne County</li>
                      <li>• All Oklahoma Counties</li>
                      <li>• Special Arrangements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Tulsa Process Serving Services</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Licensed and Bonded Professionals</h4>
                    <p className="text-gray-600">Our process servers are fully licensed, bonded, and insured, ensuring complete protection and compliance with Oklahoma state regulations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Fast Turnaround Times</h4>
                    <p className="text-gray-600">We offer same-day, rush, and standard service options to meet your timeline requirements. Most routine serves are completed within 24-48 hours.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Detailed Documentation</h4>
                    <p className="text-gray-600">Every service includes a detailed affidavit with time, date, location, and description of the person served, meeting all court requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Local Expertise</h4>
                    <p className="text-gray-600">Our team knows Tulsa County thoroughly, including difficult-to-locate addresses and the most efficient routes for timely service.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding Oklahoma Process Serving Laws</h3>
              <p className="text-gray-600 mb-4">
                Oklahoma has specific requirements for process service that must be followed to ensure legal validity. Our experienced process servers understand these requirements and ensure full compliance:
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Personal service requirements under Oklahoma Statute Title 12</li>
                <li>• Proper identification and verification procedures</li>
                <li>• Alternative service methods when personal service isn&apos;t possible</li>
                <li>• Timeline requirements for different types of legal proceedings</li>
                <li>• Affidavit preparation and filing procedures</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Serving Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Standard Service</span>
                  <span className="text-xl font-bold text-blue-600">$60</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Rush Service</span>
                  <span className="text-xl font-bold text-blue-600">$100</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Same-Day Service</span>
                  <span className="text-xl font-bold text-blue-600">$150</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                All services include detailed affidavit of service. Additional fees may apply for multiple attempts.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">Phone:</strong>
                  <p className="text-gray-600">(918) 123-4567</p>
                </div>
                <div>
                  <strong className="text-gray-900">Email:</strong>
                  <p className="text-gray-600">service@justlegalsolutions.org</p>
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
    </main>
  );
}
