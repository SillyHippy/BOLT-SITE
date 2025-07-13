import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Jenks | Legal Document Delivery | Just Legal Solutions',
  description: 'Professional process server in Jenks, Oklahoma. Reliable legal document delivery in Tulsa County. Licensed and insured. Call (539) 367-6832 for 74037 service.',
  keywords: ['process server Jenks', 'Jenks process serving', 'legal document delivery Jenks', '74037 process server', 'Riverwalk legal service'],
  robots: 'index, follow',
  openGraph: {
    title: 'Process Server Jenks | Legal Document Delivery | Just Legal Solutions',
    description: 'Professional process server in Jenks, Oklahoma. Reliable legal document delivery in Tulsa County. Licensed and insured. Call (539) 367-6832 for 74037 service.',
    url: 'https://justlegalsolutions.org/process-server-jenks',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Process Server Jenks | Legal Document Delivery | Just Legal Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Jenks | Legal Document Delivery | Just Legal Solutions',
    description: 'Professional process server in Jenks, Oklahoma. Reliable legal document delivery in Tulsa County. Licensed and insured. Call (539) 367-6832 for 74037 service.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-jenks'
  },
};

export default function ProcessServerJenks() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Jenks, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Jenks, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Jenks, Oklahoma (74037). 
            Our professional process servers deliver legal documents throughout the Jenks area including 
            Riverwalk Crossing and surrounding Tulsa County communities with reliability and precision.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=400&fit=crop&auto=format" 
              alt="Jenks Oklahoma Riverwalk area and legal document delivery service"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Jenks Area Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Riverwalk District:</strong> Commercial and residential service</li>
                <li><strong>Court Summons:</strong> Legal complaint delivery</li>
                <li><strong>Subpoenas:</strong> Witness and document requests</li>
                <li><strong>Eviction Notices:</strong> Landlord-tenant documents</li>
                <li><strong>Divorce Papers:</strong> Family law documents</li>
                <li><strong>Business Documents:</strong> Commercial legal papers</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Jenks Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Local Service Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving throughout Jenks and Riverwalk area. 
                    Standard Tulsa County rates apply with no additional fees for 74037.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Coverage Area:</strong> All of Jenks including Riverwalk Crossing, 
                      residential neighborhoods, and business districts.
                    </p>
                  </div>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    Get Jenks Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Riverwalk Area Expertise
            </h3>
            <p className="text-blue-700">
              Our process servers are familiar with the Jenks Riverwalk district layout, 
              business locations, and residential areas. We provide efficient service 
              throughout this popular entertainment and shopping destination.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Professional Jenks Service Features
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Local Knowledge:</strong> Familiar with Jenks area geography</li>
              <li>✓ <strong>Riverwalk Experience:</strong> Commercial district expertise</li>
              <li>✓ <strong>Same-Day Service:</strong> Emergency delivery available</li>
              <li>✓ <strong>Digital Tracking:</strong> GPS monitoring and photo proof</li>
              <li>✓ <strong>Professional Staff:</strong> Courteous and discreet service</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Jenks Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Expert process serving in Jenks, Oklahoma including Riverwalk Crossing and 
              all surrounding areas. Professional, reliable, and efficient legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Jenks & Riverwalk (74037)</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Jenks Service
                </a>
              </div>
            </div>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "process server jenks", url: "/process-server-jenks" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="process server jenks in Oklahoma"
        faqs={generateProcessServingFAQs("Oklahoma", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="process server jenks"
        serviceDescription="Professional Process Serving services in Oklahoma, Oklahoma"
        serviceArea="Oklahoma, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="process server jenks - Oklahoma"
        pageUrl="/process-server-jenks"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





