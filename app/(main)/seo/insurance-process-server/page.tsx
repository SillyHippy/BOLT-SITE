import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Insurance Company Process Server Tulsa | Claim Investigation Service',
  description: 'Professional process server for insurance companies in Tulsa. Claim investigations, witness interviews, document delivery. Licensed investigators. Call (539) 367-6832.',
  keywords: ['insurance process server', 'claim investigation Tulsa', 'insurance legal service', 'witness interviews', 'claim documents', 'insurance litigation support'],
  robots: 'index, follow',
  openGraph: {
    title: 'Insurance Company Process Server Tulsa | Claim Investigation Service',
    description: 'Professional process server for insurance companies in Tulsa. Claim investigations, witness interviews, document delivery. Licensed investigators. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/insurance-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Insurance Company Process Server Tulsa | Claim Investigation Service'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Company Process Server Tulsa | Claim Investigation Service',
    description: 'Professional process server for insurance companies in Tulsa. Claim investigations, witness interviews, document delivery. Licensed investigators. Call (539) 367-6832.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/insurance-process-server'
  },
};

export default function ProcessServerInsurance() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server for Insurance Companies in Tulsa
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Insurance Claims & Investigations
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides specialized process serving and investigative support for insurance 
            companies throughout Tulsa. We understand the critical nature of claim investigations and provide 
            professional, thorough documentation services for insurance litigation and claim verification.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&auto=format" 
              alt="Insurance claim investigation documents and professional process server in Tulsa office"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Insurance Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Claim Investigations:</strong> Witness interviews and statements</li>
                <li><strong>Fraud Investigations:</strong> Document gathering and verification</li>
                <li><strong>Litigation Support:</strong> Subpoenas and court documents</li>
                <li><strong>Witness Service:</strong> Expert and lay witness subpoenas</li>
                <li><strong>Medical Records:</strong> Hospital and clinic document service</li>
                <li><strong>Property Inspections:</strong> Damage assessment coordination</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Insurance Company Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Investigative Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional investigative and process serving rates for insurance companies. 
                    Volume pricing available for ongoing claim investigations.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Insurance Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Insurance Industry Expertise
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Licensed Investigators:</strong> Professional claim investigation support</li>
              <li>✓ <strong>Court Experience:</strong> Familiar with insurance litigation procedures</li>
              <li>✓ <strong>Confidential Service:</strong> Secure handling of sensitive claim information</li>
              <li>✓ <strong>Fast Response:</strong> Emergency service for time-sensitive investigations</li>
              <li>✓ <strong>Detailed Reports:</strong> Comprehensive documentation for claim files</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Insurance Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving and investigative support for insurance companies. 
              Reliable claim investigation and litigation support services throughout Tulsa.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Insurance Companies</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Investigation Service
                </a>
              </div>
            </div>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "insurance process server", url: "/insurance-process-server" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="insurance process server in Oklahoma"
        faqs={generateProcessServingFAQs("Oklahoma", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="insurance process server"
        serviceDescription="Professional Process Serving services in Oklahoma, Oklahoma"
        serviceArea="Oklahoma, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="insurance process server - Oklahoma"
        pageUrl="/insurance-process-server"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





