import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Truck, Clock, FileText, Shield, MapPin } from 'lucide-react';
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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
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
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Document Delivery Throughout Oklahoma</h2>
              <p className="text-gray-600 mb-6">
                Just Legal Solutions provides professional courier services throughout Tulsa County and Oklahoma, specializing in legal document delivery, court filings, and secure business document transport. Our experienced team ensures your sensitive materials reach their destination safely and on time.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need same-day delivery for urgent court filings or routine document transport between offices, our secure courier services maintain chain of custody and provide detailed delivery confirmations for all shipments.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Courier Service Specialties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Legal Document Delivery</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Court filing services</li>
                    <li>• Attorney-to-attorney delivery</li>
                    <li>• Client document pickup/delivery</li>
                    <li>• Notarized document transport</li>
                    <li>• Contract and agreement delivery</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Business Document Services</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Banking document delivery</li>
                    <li>• Insurance claim materials</li>
                    <li>• Medical record transport</li>
                    <li>• Real estate closing documents</li>
                    <li>• Corporate filing services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Same-Day Courier Services</h3>
              <p className="text-gray-600 mb-6">
                When time is critical, our same-day courier services ensure your urgent documents reach their destination quickly. We understand that legal deadlines and business requirements often demand immediate action.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-3">Same-Day Service Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <ul className="space-y-2">
                    <li>• Pickup within 2 hours of request</li>
                    <li>• Direct delivery (no stops)</li>
                    <li>• Real-time tracking updates</li>
                    <li>• Signature confirmation required</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Secure chain of custody maintained</li>
                    <li>• Immediate delivery confirmation</li>
                    <li>• Available 7 days a week</li>
                    <li>• Emergency after-hours service</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Court Filing and Document Services</h3>
              <p className="text-gray-600 mb-6">
                Our experienced team provides comprehensive court filing services throughout Oklahoma. We understand the specific requirements of different courts and ensure your documents are filed correctly and on time.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Electronic Filing Assistance</h4>
                    <p className="text-gray-600">We can handle electronic court filings on your behalf, ensuring documents are submitted correctly and confirmations are received.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Secure Document Handling</h4>
                    <p className="text-gray-600">All documents are handled with strict confidentiality protocols, maintaining security throughout the delivery process.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Deadline Management</h4>
                    <p className="text-gray-600">We track filing deadlines and ensure documents are delivered with time to spare, preventing missed court dates.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Courier Service Coverage Areas</h3>
              <p className="text-gray-600 mb-6">
                Our courier services cover all of Tulsa County and extend throughout Oklahoma for urgent delivery needs. We maintain reliable service in both urban and rural areas.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-3">Service Coverage:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                  <div>
                    <strong>Tulsa Metro:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Downtown Tulsa</li>
                      <li>• Broken Arrow</li>
                      <li>• Sapulpa</li>
                      <li>• Sand Springs</li>
                      <li>• Bixby</li>
                      <li>• Jenks</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Regional Coverage:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Wagoner County</li>
                      <li>• Creek County</li>
                      <li>• Rogers County</li>
                      <li>• Osage County</li>
                      <li>• Okmulgee County</li>
                      <li>• Pawnee County</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Statewide Options:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Oklahoma City</li>
                      <li>• Norman</li>
                      <li>• Stillwater</li>
                      <li>• Lawton</li>
                      <li>• All State Courts</li>
                      <li>• Federal Courts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Courier Services</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Truck className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Professional Fleet</h4>
                    <p className="text-gray-600">Our vehicles are equipped with secure storage compartments and GPS tracking for real-time location updates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Local Knowledge</h4>
                    <p className="text-gray-600">Our drivers know the Tulsa area thoroughly, ensuring efficient routes and timely deliveries even to hard-to-find locations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Insured and Bonded</h4>
                    <p className="text-gray-600">Full insurance coverage protects your valuable documents during transport, providing peace of mind for sensitive materials.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Courier Service Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Local Delivery</span>
                  <span className="text-xl font-bold text-blue-600">$25</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Rush Delivery</span>
                  <span className="text-xl font-bold text-blue-600">$50</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Same-Day Service</span>
                  <span className="text-xl font-bold text-blue-600">$75</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Rates vary by distance and urgency. Court filing services include additional handling fees.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
                <div className="flex justify-between">
                  <span>After Hours:</span>
                  <span>Available by Request</span>
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
  );
}
