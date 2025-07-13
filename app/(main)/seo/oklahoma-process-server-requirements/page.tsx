import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Requirements & Qualifications | Legal Compliance',
  description: 'Complete guide to Oklahoma process server requirements, qualifications, and legal compliance. Professional certified process servers in Tulsa. Call (539) 367-6832.',
  keywords: ['Oklahoma process server requirements', 'process server qualifications', 'legal compliance Oklahoma', 'certified process server', 'Tulsa process server licensing'],
  robots: 'index, follow',
  openGraph: {
    title: 'Oklahoma Process Server Requirements & Qualifications | Legal Compliance',
    description: 'Complete guide to Oklahoma process server requirements, qualifications, and legal compliance. Professional certified process servers in Tulsa. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/oklahoma-process-server-requirements',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Oklahoma Process Server Requirements & Qualifications | Legal Compliance'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Server Requirements & Qualifications | Legal Compliance',
    description: 'Complete guide to Oklahoma process server requirements, qualifications, and legal compliance. Professional certified process servers in Tulsa. Call (539) 367-6832.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-requirements'
  },
};

export default function OklahomaProcessServerRequirements() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Oklahoma Process Server Requirements & Legal Compliance
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Legal Compliance Guide</strong> | Updated: {lastUpdated} | Oklahoma State Requirements
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Understanding Oklahoma process server requirements ensures proper legal compliance and valid service 
            of process. Our certified process servers meet all state qualifications and legal standards.
          </p>

          <div className="space-y-8">
            {/* Legal Authority */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Oklahoma Legal Authority for Process Serving
              </h2>
              <p className="text-gray-700 mb-4">
                Oklahoma process serving is governed by state statutes and court rules, including:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Oklahoma Statutes Title 12:</strong> Civil procedure and service requirements</li>
                <li><strong>Oklahoma Rules of Civil Procedure:</strong> Specific service methods and timing</li>
                <li><strong>Local court rules:</strong> District-specific requirements and procedures</li>
                <li><strong>Due process requirements:</strong> Constitutional guarantees for proper notice</li>
              </ul>
            </div>

            {/* Who Can Serve */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Who Can Serve Legal Documents in Oklahoma?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Authorized Persons:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Sheriff or deputy sheriff</li>
                    <li>Licensed private process servers</li>
                    <li>Any adult not party to the case</li>
                    <li>Court-appointed officials</li>
                    <li>Certified mail (in certain cases)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Requirements:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Age 18 or older</li>
                    <li>Not a party to the lawsuit</li>
                    <li>Competent to testify</li>
                    <li>Understanding of legal procedures</li>
                    <li>Ability to provide sworn affidavit</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Methods */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Oklahoma Service of Process Methods
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Personal Service</h3>
                  <p className="text-gray-700 mb-2">
                    Direct delivery to the individual being served:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Hand delivery to the named person</li>
                    <li>Preferred method for most legal documents</li>
                    <li>Requires positive identification</li>
                    <li>Must be served within Oklahoma jurisdiction</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Substitute Service</h3>
                  <p className="text-gray-700 mb-2">
                    When personal service is not possible:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Service to household member over 15</li>
                    <li>Service at place of employment</li>
                    <li>Must be followed by mailed copy</li>
                    <li>Requires court approval in some cases</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Service by Publication</h3>
                  <p className="text-gray-700 mb-2">
                    Last resort when defendant cannot be located:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Requires court order and affidavit of diligent search</li>
                    <li>Publication in approved newspaper</li>
                    <li>Specific timeframes and procedures</li>
                    <li>Used primarily in divorce and foreclosure cases</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timing Requirements */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Oklahoma Service Timing Requirements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">General Civil Cases:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>Summons and complaint:</strong> 20 days before court date</li>
                    <li><strong>Motion hearings:</strong> 5 days notice minimum</li>
                    <li><strong>Subpoenas:</strong> Reasonable time before testimony</li>
                    <li><strong>Garnishments:</strong> Immediate service required</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Circumstances:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>Emergency orders:</strong> As soon as possible</li>
                    <li><strong>Eviction notices:</strong> 5-30 days (varies by type)</li>
                    <li><strong>Divorce papers:</strong> 20 days before default</li>
                    <li><strong>Small claims:</strong> 10 days before hearing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Documentation Requirements */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Required Documentation and Affidavits
              </h2>
              <p className="text-gray-700 mb-4">
                Proper documentation is essential for valid service:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Affidavit of Service Must Include:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Date, time, and location of service</li>
                    <li>Method of service used</li>
                    <li>Description of person served</li>
                    <li>Documents served</li>
                    <li>Process server&apos;s signature and notarization</li>
                    <li>Filing fee information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Supporting Documentation:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Copy of documents served</li>
                    <li>Photographs (when applicable)</li>
                    <li>GPS tracking data</li>
                    <li>Witness statements (if needed)</li>
                    <li>Return receipt (certified mail)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Standards */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Process Server Standards
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Training & Certification:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Knowledge of Oklahoma civil procedure</li>
                    <li>Understanding of constitutional due process</li>
                    <li>Professional liability insurance</li>
                    <li>Continuing education requirements</li>
                    <li>Background check clearance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Ethical Standards:</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Truthful and accurate reporting</li>
                    <li>Professional conduct and appearance</li>
                    <li>Confidentiality of case information</li>
                    <li>Timely completion of services</li>
                    <li>Proper record keeping and documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Violations */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                Common Service Violations to Avoid
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Invalid Service Examples:</h3>
                  <ul className="list-disc ml-6 text-red-700 space-y-1">
                    <li>Service by interested party</li>
                    <li>Insufficient notice time</li>
                    <li>Service outside jurisdiction</li>
                    <li>Improper substitute service</li>
                    <li>False affidavit information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Consequences:</h3>
                  <ul className="list-disc ml-6 text-red-700 space-y-1">
                    <li>Case dismissal or delay</li>
                    <li>Default judgment reversal</li>
                    <li>Additional costs and fees</li>
                    <li>Professional liability</li>
                    <li>Court sanctions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Professional Service */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Why Choose Professional Process Servers
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Legal Expertise:</h3>
                  <ul className="list-disc ml-6 text-green-700 space-y-1">
                    <li>Complete knowledge of Oklahoma requirements</li>
                    <li>Proper documentation and affidavits</li>
                    <li>Compliance with all timing rules</li>
                    <li>Experience with difficult service situations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Practical Benefits:</h3>
                  <ul className="list-disc ml-6 text-green-700 space-y-1">
                    <li>Higher success rates</li>
                    <li>Professional liability protection</li>
                    <li>Time and cost efficiency</li>
                    <li>Court-ready documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Oklahoma-Compliant Process Service
            </h3>
            <p className="text-blue-700 mb-4">
              Our certified process servers meet all Oklahoma requirements and provide legally compliant 
              service throughout Tulsa County and surrounding areas.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-800">📞 (539) 367-6832</p>
                <p className="text-blue-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block">
                  Professional Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Legal Disclaimer:</strong> This information is for educational purposes. Always consult 
              with qualified legal professionals for specific case requirements. Oklahoma laws subject to change.
            </p>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "oklahoma process server requirements", url: "/oklahoma-process-server-requirements" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="oklahoma process server requirements in Oklahoma"
        faqs={generateProcessServingFAQs("Oklahoma", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="oklahoma process server requirements"
        serviceDescription="Professional Process Serving services in Oklahoma, Oklahoma"
        serviceArea="Oklahoma, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="oklahoma process server requirements - Oklahoma"
        pageUrl="/oklahoma-process-server-requirements"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





