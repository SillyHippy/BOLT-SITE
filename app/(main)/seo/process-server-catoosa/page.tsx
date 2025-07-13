import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Catoosa | Rogers County Legal Document Service',
  description: 'Professional process server in Catoosa, Rogers County. Expert legal document delivery at Port of Catoosa and surrounding areas. Call (539) 367-6832.',
  keywords: ['process server Catoosa', 'Catoosa process serving', 'Rogers County legal service', '74015 process server', 'Port of Catoosa legal'],
  robots: 'index, follow',
  openGraph: {
    title: 'Process Server Catoosa | Rogers County Legal Document Service',
    description: 'Professional process server in Catoosa, Rogers County. Expert legal document delivery at Port of Catoosa and surrounding areas. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/process-server-catoosa',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Process Server Catoosa | Rogers County Legal Document Service'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Catoosa | Rogers County Legal Document Service',
    description: 'Professional process server in Catoosa, Rogers County. Expert legal document delivery at Port of Catoosa and surrounding areas. Call (539) 367-6832.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-catoosa'
  },
};

export default function ProcessServerCatoosa() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Catoosa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Catoosa, Rogers County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Catoosa, Oklahoma (74015). 
            Our certified process servers deliver legal documents throughout Rogers County 
            with specialized service for industrial facilities including the Port of Catoosa.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&h=400&fit=crop&auto=format" 
              alt="Catoosa Oklahoma Rogers County port and industrial legal services"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Catoosa Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Port of Catoosa:</strong> Industrial and shipping facilities</li>
                <li><strong>Downtown Catoosa:</strong> Business district</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>Industrial Corridor:</strong> Manufacturing zones</li>
                <li><strong>Transportation Hub:</strong> Logistics facilities</li>
                <li><strong>Hard Rock Casino:</strong> Entertainment district</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2"></h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving with transparent pricing. Rates vary by service type and urgency.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Complete Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Industrial & Port Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service to Port of Catoosa and industrial facilities. Understanding of 
              security protocols, shift schedules, and transportation industry requirements.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Catoosa Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Catoosa and Rogers County. 
              Expert industrial facility and transportation hub document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Catoosa, Rogers County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "process server catoosa", url: "/process-server-catoosa" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="process server catoosa in Oklahoma"
        faqs={generateProcessServingFAQs("Oklahoma", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="process server catoosa"
        serviceDescription="Professional Process Serving services in Oklahoma, Oklahoma"
        serviceArea="Oklahoma, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="process server catoosa - Oklahoma"
        pageUrl="/process-server-catoosa"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





