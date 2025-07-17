import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import ServiceSchema from '@/components/ui/service-schema';
import WebsiteSchema from '@/components/ui/website-schema';
import EnhancedBreadcrumbSchema, { VisualBreadcrumbs } from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema from '@/components/ui/enhanced-faq-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
import CoreWebVitals from '@/components/ui/core-web-vitals';

export const metadata: Metadata = {
  title: 'Sand Springs Process Server | Professional Legal Document Service Oklahoma',
  description: 'Professional process server in Sand Springs, Oklahoma. Fast, reliable legal document delivery throughout Tulsa County. 24/7 emergency service available. Call or text (539) 367-6832.',
  keywords: ['Sand Springs process server', 'legal document delivery Sand Springs', 'process serving Tulsa County', 'emergency process server Sand Springs', '24 hour legal service Sand Springs'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/process-server-sand-springs'
  },
  openGraph: {
    title: 'Sand Springs Process Server | Just Legal Solutions',
    description: 'Professional process server in Sand Springs, Oklahoma. Fast, reliable legal document delivery throughout Tulsa County.',
    url: 'https://justlegalsolutions.org/seo/process-server-sand-springs',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sand Springs Process Server | Just Legal Solutions',
    description: 'Professional process server in Sand Springs, Oklahoma. Fast, reliable legal document delivery throughout Tulsa County.',
  }
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Sand Springs Process Server', url: '/seo/process-server-sand-springs' }
];

const faqData = [
  {
    question: 'How much does process serving cost in Sand Springs, Oklahoma?',
    answer: 'Process serving in Sand Springs starts as low as $30 for bulk orders. For complete pricing information including standard, rush, and emergency service options, please visit our pricing page at justlegalsolutions.org/pricing. We offer transparent pricing with no hidden fees for Sand Springs and Tulsa County service.'
  },
  {
    question: 'Do you offer same-day process serving in Sand Springs?',
    answer: 'Yes! We provide same-day and emergency process serving in Sand Springs. For current pricing and availability, please visit our pricing page or call/text (539) 367-6832. Emergency 2-hour service is also available for critical legal deadlines.'
  },
  {
    question: 'What areas do you cover around Sand Springs?',
    answer: 'We provide comprehensive coverage throughout Sand Springs, all of Tulsa County, and statewide Oklahoma service. Our primary service area includes the entire Sand Springs metropolitan area with standard rates, plus surrounding communities.'
  },
  {
    question: 'Are you licensed process servers in Sand Springs?',
    answer: 'Yes, Just Legal Solutions is fully licensed and bonded for process serving throughout Sand Springs and all of Oklahoma. We comply with all state and local requirements, providing legally compliant service with professional affidavits.'
  },
  {
    question: 'What legal documents can you serve in Sand Springs?',
    answer: 'We serve all legal documents in Sand Springs including divorce papers, court summons, subpoenas, eviction notices, small claims documents, business litigation papers, restraining orders, and civil court documents. All services include professional handling and documentation.'
  },
  {
    question: 'Do you provide emergency process serving in Sand Springs?',
    answer: 'Yes! Emergency process serving is available 24/7 in Sand Springs for time-critical legal documents. We understand that legal deadlines don\'t follow business hours, so we\'re available around the clock for urgent service needs.'
  },
  {
    question: 'How do I schedule process serving in Sand Springs?',
    answer: 'Schedule process serving in Sand Springs by calling or texting (539) 367-6832 for immediate assistance. We provide real-time updates and professional communication throughout the service process.'
  },
  {
    question: 'Do you offer skip tracing services in Sand Springs?',
    answer: 'Yes, we provide professional skip tracing services in Sand Springs to locate difficult-to-find individuals. Our investigation services include database searches, social media analysis, and employment verification to ensure successful service completion.'
  },
  {
    question: 'What makes your Sand Springs process servers different?',
    answer: 'Our Sand Springs process servers offer statewide Oklahoma licensing, 24/7 emergency availability, GPS tracking, professional affidavits, multi-service capabilities, and local knowledge of Tulsa County procedures. We combine technology with personal service for optimal results.'
  },
  {
    question: 'How quickly can you respond to process serving requests in Sand Springs?',
    answer: 'We typically respond to process serving requests in Sand Springs within 30 minutes during business hours. Emergency service is available 24/7 with response times of 2 hours or less for critical legal documents and court deadlines.'
  }
];

export default function SandSpringsProcessServer() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <>
      <CoreWebVitals />
      <VoiceSearchOptimization
        primaryQuestions={voiceQuestions}
        conversationalAnswers={voiceAnswers}
        localIntent={true}
      />
      <ServiceSchema
        serviceName="Sand Springs Process Serving"
        serviceDescription="Professional process server in Sand Springs, Oklahoma. Fast, reliable legal document delivery throughout Tulsa County."
        serviceArea="Tulsa County, Oklahoma"
        priceRange="$60-$150"
        serviceType="Legal Document Delivery"
      />
      <WebsiteSchema
        url="https://justlegalsolutions.org/seo/process-server-sand-springs"
        name="Sand Springs Process Server - Just Legal Solutions"
        description="Professional process server in Sand Springs, Oklahoma. Fast, reliable legal document delivery throughout Tulsa County."
        keywords={['Sand Springs process server', 'legal document delivery Sand Springs', 'process serving Tulsa County']}
      />
      <EnhancedBreadcrumbSchema items={breadcrumbItems} />
      <EnhancedFAQSchema faqs={faqData} pageTitle="Sand Springs Process Server" />
      <PerformanceSchema
        pageName="Sand Springs Process Server"
        pageUrl="/seo/process-server-sand-springs"
        loadTime={2.1}
        mobileOptimized={true}
      />

      <Navbar />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <VisualBreadcrumbs items={breadcrumbItems} />
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 voice-optimized">
              Sand Springs Process Server | Professional Legal Document Delivery
            </h1>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-lg text-green-800 voice-answer">
                <strong>Licensed Professional Service</strong> | Serving Sand Springs, Tulsa County | 
                Updated: {lastUpdated} | 24/7 Emergency Availability
              </p>
            </div>
          </header>

          <section className="prose max-w-none mb-8">
            <p className="text-lg mb-6 primary-answer">
              Professional process server in Sand Springs, Oklahoma. Fast, reliable legal document 
              delivery throughout Sand Springs and surrounding Tulsa County areas with 24/7 emergency service availability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sand Springs Service Coverage
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Primary Coverage:</strong> Sand Springs (74063)</li>
                  <li><strong>County:</strong> Tulsa County</li>
                  <li><strong>Population Served:</strong> 19,000+ residents</li>
                  <li><strong>Service Radius:</strong> Complete Tulsa County coverage</li>
                  <li><strong>Emergency Service:</strong> Available 24/7</li>
                  <li><strong>Response Time:</strong> Under 2 hours for urgent matters</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Area Highlights:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Historic downtown Sand Springs district</li>
                  <li>Keystone State Park vicinity</li>
                  <li>Arkansas River waterfront areas</li>
                  <li>Residential neighborhoods and business districts</li>
                  <li>Industrial and commercial zones</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                  Why Choose Our Sand Springs Process Servers
                </h2>
                <ul className="list-disc ml-6 text-blue-700 space-y-2">
                  <li>Statewide Oklahoma licensing advantage</li>
                  <li>24/7 emergency service availability</li>
                  <li>GPS tracking and digital documentation</li>
                  <li>Professional affidavits of service</li>
                  <li>Multi-service capabilities (skip tracing, courier)</li>
                  <li>Local knowledge of Sand Springs and Tulsa County</li>
                  <li>Same-day and rush service options</li>
                  <li>Competitive pricing with transparent rates</li>
                  <li>Real-time status updates</li>
                  <li>Court deadline compliance expertise</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Complete Process Serving Services in Sand Springs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Legal Documents We Serve:</h3>
                <ul className="list-disc ml-6 text-gray-600 space-y-1">
                  <li>Divorce and family court papers</li>
                  <li>Civil lawsuit documents and complaints</li>
                  <li>Small claims court papers</li>
                  <li>Restraining orders and protective orders</li>
                  <li>Eviction notices and landlord-tenant papers</li>
                  <li>Business litigation and commercial disputes</li>
                  <li>Debt collection documents</li>
                  <li>Probate and estate papers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Additional Professional Services:</h3>
                <ul className="list-disc ml-6 text-gray-600 space-y-1">
                  <li>Subpoenas and witness summons</li>
                  <li>Court filing and document retrieval</li>
                  <li>Skip tracing and investigation services</li>
                  <li>Courier and delivery services</li>
                  <li>Document notarization assistance</li>
                  <li>Legal research and support</li>
                  <li>Emergency 24/7 service availability</li>
                  <li>Statewide Oklahoma coverage</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Sand Springs Process Serving Pricing & Service Options
            </h2>
            <div className="text-center mb-6">
              <p className="text-blue-700 mb-4">
                Process serving in Sand Springs starts as low as $30 for bulk orders. For complete pricing information including standard, rush, same-day, and emergency service options:
              </p>
              <a 
                href="/pricing" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block font-semibold transition-colors mr-4"
              >
                View Complete Pricing Guide
              </a>
            </div>
            <p className="text-blue-600 text-center text-sm">
              Transparent pricing with no hidden fees • Professional service guaranteed • 24/7 emergency availability
            </p>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Frequently Asked Questions - Sand Springs Process Server
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-blue-200 pb-4 last:border-b-0">
                  <h3 className="font-semibold text-blue-700 mb-2 voice-optimized">
                    {item.question}
                  </h3>
                  <p className="text-blue-600 voice-answer primary-answer">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Contact Sand Springs Process Server - 24/7 Service Available
            </h2>
            <p className="text-green-700 mb-6">
              Professional process serving throughout Sand Springs and Tulsa County. 
              Licensed statewide in Oklahoma with 24/7 emergency availability for urgent legal matters.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">📞 Call or Text: (539) 367-6832</h3>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Sand Springs, Tulsa County, Oklahoma</p>
                <p className="text-green-700">🕒 24/7 Emergency Service Available</p>
                <p className="text-green-700">⚡ Same-Day Service Available</p>
                <p className="text-green-700">🎯 Licensed & Bonded Professionals</p>
              </div>
              <div className="text-center md:text-right">
                <a 
                  href="/pricing" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg inline-block font-semibold mb-3 transition-colors"
                >
                  View Pricing & Get Quote
                </a>
                <div className="space-x-4">
                  <a 
                    href="/services" 
                    className="text-green-600 hover:text-green-700 underline font-medium"
                  >
                    View All Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
