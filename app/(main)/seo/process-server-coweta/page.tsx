import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';

export const metadata: Metadata = {
  title: 'Process Server Coweta | Wagoner County Legal Document Service',
  description: 'Professional process server in Coweta, Wagoner County. Reliable legal document delivery throughout rural Oklahoma communities. Call (539) 367-6832.',
  keywords: ['process server Coweta', 'Coweta process serving', 'Wagoner County legal service', '74429 process server', 'rural Oklahoma legal'],
  robots: 'index, follow',
  openGraph: {
    title: 'Process Server Coweta | Wagoner County Legal Document Service',
    description: 'Professional process server in Coweta, Wagoner County. Reliable legal document delivery throughout rural Oklahoma communities. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/process-server-coweta',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Process Server Coweta | Wagoner County Legal Document Service'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Coweta | Wagoner County Legal Document Service',
    description: 'Professional process server in Coweta, Wagoner County. Reliable legal document delivery throughout rural Oklahoma communities. Call (539) 367-6832.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-coweta'
  },
};

export default function ProcessServerCoweta() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Coweta, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Coweta, Wagoner County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Coweta, Oklahoma (74429). 
            Our certified process servers deliver legal documents throughout Wagoner County 
            with specialized service for rural and small-town communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Coweta Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Coweta:</strong> Main business district</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>Rural Routes:</strong> Outlying properties</li>
                <li><strong>School District:</strong> Coweta Public Schools area</li>
                <li><strong>Industrial Areas:</strong> Manufacturing zones</li>
                <li><strong>County Coverage:</strong> All Wagoner County</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Standard Service (3-5 days)</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Rush Service (1-2 days)</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Same-Day Service</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Emergency (2 hours)</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Coweta Legal Document Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Family court and divorce papers</li>
                <li>Civil litigation documents</li>
                <li>Landlord and tenant notices</li>
                <li>Small claims court papers</li>
                <li>Protective orders</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Subpoenas and court summons</li>
                <li>Business litigation papers</li>
                <li>Debt collection documents</li>
                <li>Probate and estate notices</li>
                <li>Emergency legal deliveries</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Rural Delivery Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service for rural properties and hard-to-find locations in Wagoner County. 
              Our process servers are experienced with country roads and remote addresses.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Why Choose Our Coweta Process Servers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Local Knowledge:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>Familiar with Coweta community</li>
                  <li>Knowledge of rural delivery routes</li>
                  <li>Understanding of local customs</li>
                  <li>Established county relationships</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Professional Service:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>GPS tracking for all locations</li>
                  <li>Photo documentation of service</li>
                  <li>Detailed affidavits of service</li>
                  <li>Multiple delivery attempts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Coweta Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Coweta and Wagoner County. 
              Reliable rural and small-town legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Coweta, Wagoner County</p>
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
              <strong>Content Freshness:</strong> This Coweta process serving page updates daily 
              for search optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "process server coweta", url: "/process-server-coweta" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="process server coweta in Oklahoma"
        faqs={generateProcessServingFAQs("Oklahoma", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="process server coweta"
        serviceDescription="Professional Process Serving services in Oklahoma, Oklahoma"
        serviceArea="Oklahoma, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="process server coweta - Oklahoma"
        pageUrl="/process-server-coweta"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





