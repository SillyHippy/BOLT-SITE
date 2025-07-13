import { Metadata } from 'next';
import Image from 'next/image';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Divorce Papers Service Tulsa | Fast Legal Document Delivery',
  description: 'Professional divorce paper serving in Tulsa, Oklahoma. Expert delivery of divorce documents, custody papers, and family court filings. Same-day service available. Call (539) 367-6832.',
  keywords: ['divorce papers Tulsa', 'divorce document service', 'family court papers', 'custody document delivery', 'divorce process server Tulsa', 'legal separation papers'],
  robots: 'index, follow',
  openGraph: {
    title: 'Divorce Papers Service Tulsa | Fast Legal Document Delivery',
    description: 'Professional divorce paper serving in Tulsa, Oklahoma. Expert delivery of divorce documents, custody papers, and family court filings. Same-day service available.',
    url: 'https://justlegalsolutions.org/divorce-papers-tulsa',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Divorce Papers Service Tulsa'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divorce Papers Service Tulsa | Fast Legal Document Delivery',
    description: 'Professional divorce paper serving in Tulsa, Oklahoma. Expert delivery of divorce documents, custody papers, and family court filings.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/divorce-papers-tulsa'
  }
};

export default function DivorcePapersTulsa() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Divorce Papers Service in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Family Court Specialists</strong> | Last Updated: {lastUpdated} | Sensitive Document Delivery
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1589216532372-3c7b5fd336f1?w=800&h=400&fit=crop&auto=format" 
            alt="Professional divorce papers and family court documents being served in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides compassionate and professional divorce paper serving throughout 
            Tulsa County. We understand the sensitive nature of family court documents and handle each 
            case with discretion and professionalism.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Divorce Document Services
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>✓ Divorce petitions and responses</li>
                <li>✓ Child custody modifications</li>
                <li>✓ Temporary restraining orders</li>
                <li>✓ Property division documents</li>
                <li>✓ Spousal support papers</li>
                <li>✓ Contempt of court notices</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Service Pricing
              </h3>
              <p className="text-blue-700 mb-4">
                Professional divorce paper serving with transparent pricing. 
                Sensitive handling for all family court documents.
              </p>
              <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                View Divorce Service Pricing
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Sensitive & Discreet Service
            </h3>
            <p className="text-yellow-700">
              We understand divorce proceedings are emotionally challenging. Our experienced process 
              servers handle all family court documents with the utmost discretion and professionalism, 
              ensuring proper service while maintaining dignity for all parties involved.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Tulsa County Family Court Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Tulsa County District Court filings</li>
                <li>Emergency protective orders</li>
                <li>Child support enforcement</li>
                <li>Grandparent visitation rights</li>
                <li>Adoption proceedings</li>
                <li>Paternity establishment</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Divorce mediation documents</li>
                <li>Property settlement agreements</li>
                <li>Alimony modification papers</li>
                <li>Custody evaluation orders</li>
                <li>Supervised visitation orders</li>
                <li>Domestic relations affidavits</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Divorce Document Service
            </h3>
            <p className="text-gray-700 mb-4">
              Professional divorce paper serving throughout Tulsa County. Experienced with all 
              family court procedures and sensitive document handling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(539) 367-6832" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Call (539) 367-6832
              </a>
              <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Schedule Service
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Content Freshness:</strong> This divorce papers serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Divorce Papers Serving", url: "/divorce-papers-tulsa" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="Divorce Papers Serving in Tulsa"
        faqs={[
          {
            question: "How much does it cost to serve divorce papers in Tulsa?",
            answer: "Divorce paper serving in Tulsa pricing varies based on service urgency and specific requirements. We offer standard, rush, same-day, and emergency service options. Contact us at (539) 367-6832 for a personalized quote. We handle all family court documents with discretion and professionalism."
          },
          {
            question: "How quickly can divorce papers be served in Tulsa County?",
            answer: "We offer flexible timing options for divorce paper serving in Tulsa County. Standard service typically takes 3-5 business days, with expedited rush, same-day, and emergency 2-hour service available when time-sensitive family court situations require immediate attention."
          },
          {
            question: "Do you handle sensitive family court documents with discretion?",
            answer: "Yes, we understand the sensitive nature of divorce and family court documents. All papers are served with complete professionalism, discretion, and confidentiality."
          },
          {
            question: "What divorce documents can you serve in Oklahoma?",
            answer: "We serve all divorce-related documents including petitions for dissolution, divorce summons, custody papers, child support documents, property division orders, restraining orders, and modification papers."
          },
          {
            question: "Do you provide proof of service for divorce papers?",
            answer: "Yes! We provide comprehensive documentation including professional affidavit of service, photo verification, GPS tracking data, and detailed service reports for immediate court filing."
          }
        ]}
      />
      
      <EnhancedServiceSchema 
        serviceName="Divorce Papers Serving"
        serviceDescription="Professional and discreet divorce document serving in Tulsa County, Oklahoma"
        serviceArea="Tulsa County, Oklahoma (Tulsa, Broken Arrow, Bixby, Jenks)"
        serviceType="Family Court Document Service"
        additionalServices={["Child Custody Papers", "Support Documents", "Property Orders"]}
      />
      
      <PerformanceSchema 
        pageName="Divorce Papers Serving - Tulsa County"
        pageUrl="/divorce-papers-tulsa"
        loadTime={1.9}
        mobileOptimized={true}
      />
      
      {/* Review Schema for SEO */}
      <ReviewSchema 
        businessName="Just Legal Solutions - Divorce Papers Service"
        aggregateRating={4.9}
        reviewCount={85}
        reviews={[
          {
            author: "Sarah M.",
            rating: 5,
            text: "Handled my divorce papers with complete professionalism and discretion. Fast service and great communication throughout the process.",
            date: "2024-12-10"
          },
          {
            author: "Jennifer L.",
            rating: 5,
            text: "Sensitive situation handled perfectly. Joseph was understanding and got everything served quickly without any issues.",
            date: "2024-11-25"
          },
          {
            author: "Mike R.",
            rating: 5,
            text: "Needed divorce documents served quickly. Same-day service was exactly what I needed during a difficult time.",
            date: "2024-11-15"
          }
        ]}
      />
      
      {/* Legacy FAQ Schema - Keeping for compatibility */}
      <Script
        id="divorce-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does it cost to serve divorce papers in Tulsa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Divorce paper serving in Tulsa starts at $60 for standard service, $100 for rush service, and $150 for same-day service. We handle all family court documents with discretion and professionalism."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can divorce papers be served in Tulsa County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer same-day divorce paper serving (within 24 hours) for $150, rush service (within 72 hours) for $100, and standard service (within 5 business days) for $60 in Tulsa County."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle sensitive family court documents with discretion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we understand the sensitive nature of divorce and family court documents. All papers are served with complete professionalism, discretion, and confidentiality."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}


