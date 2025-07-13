import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';

export const metadata: Metadata = {
  title: 'Process Server Lotsee | Tulsa County Legal Document Service',
  description: 'Professional process server in Lotsee, Oklahoma. Expert legal document delivery in rural Tulsa County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Lotsee', 'Lotsee process serving', 'Tulsa County legal service', '74063 process server', 'rural Oklahoma legal'],
  robots: 'index, follow',
  openGraph: {
    title: 'Process Server Lotsee | Tulsa County Legal Document Service',
    description: 'Professional process server in Lotsee, Oklahoma. Expert legal document delivery in rural Tulsa County. Licensed and bonded. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/process-server-lotsee',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Process Server Lotsee | Tulsa County Legal Document Service'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Lotsee | Tulsa County Legal Document Service',
    description: 'Professional process server in Lotsee, Oklahoma. Expert legal document delivery in rural Tulsa County. Licensed and bonded. Call (539) 367-6832.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-lotsee'
  },
};

export default function ProcessServerLotsee() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Lotsee, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Lotsee, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides reliable process serving in Lotsee, Oklahoma (74063). 
            Our experienced process servers deliver legal documents throughout rural Tulsa County 
            with specialized service for remote and agricultural communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Lotsee Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Rural Community:</strong> Small town center</li>
                <li><strong>Agricultural Areas:</strong> Farm and ranch properties</li>
                <li><strong>Remote Locations:</strong> Hard-to-reach addresses</li>
                <li><strong>Country Roads:</strong> Rural route deliveries</li>
                <li><strong>Tribal Areas:</strong> Native American communities</li>
                <li><strong>Oil Fields:</strong> Energy industry sites</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Standard Rates</h3>
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
              Rural Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized experience in rural and remote area service. Knowledge of agricultural 
              schedules, tribal protocols, and hard-to-reach location navigation.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Lotsee Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Lotsee and rural Tulsa County. 
              Expert agricultural and remote community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Lotsee, Tulsa County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This Lotsee process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "process server lotsee", url: "/process-server-lotsee" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="process server lotsee in Oklahoma"
        faqs={generateProcessServingFAQs("Oklahoma", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="process server lotsee"
        serviceDescription="Professional Process Serving services in Oklahoma, Oklahoma"
        serviceArea="Oklahoma, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="process server lotsee - Oklahoma"
        pageUrl="/process-server-lotsee"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





