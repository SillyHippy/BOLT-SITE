import type { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Eviction Notice Process Server Tulsa County - Expert Legal Document Delivery',
  description: 'Professional eviction notice service in Tulsa County. Fast, reliable delivery of eviction notices, notice to quit, and landlord-tenant legal documents. Licensed process server available 24/7.',
  keywords: 'eviction notice process server tulsa, eviction service tulsa county, notice to quit tulsa, landlord tenant legal documents, property management process server',
  openGraph: {
    title: 'Eviction Notice Process Server Tulsa County - Expert Legal Document Delivery',
    description: 'Professional eviction notice service in Tulsa County. Fast, reliable delivery of eviction notices and landlord-tenant legal documents.',
    url: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Eviction Notice Process Server Tulsa County'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eviction Notice Process Server Tulsa County - Expert Legal Document Delivery',
    description: 'Professional eviction notice service in Tulsa County. Fast, reliable delivery of eviction notices and landlord-tenant legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EvictionNoticeProcessServer() {
  return (
    <>
      <div className="min-h-screen pt-12 bg-gradient-to-br from-red-50 via-white to-orange-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-700 to-orange-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Eviction Notice Process Server Tulsa County
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100">
                Expert Legal Document Delivery • Same-Day Service • Licensed & Bonded
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Call Now: (539) 367-6832
                </a>
                <a href="#services" className="bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property Manager Services */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Professional Eviction Services for Property Managers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" id="services">
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Eviction Notices</h3>
                <p className="text-gray-700 mb-4">
                  Professional service of eviction notices and unlawful detainer actions throughout Tulsa County.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3-Day Notice to Quit</li>
                  <li>• 5-Day Notice to Pay</li>
                  <li>• 30-Day Notice to Vacate</li>
                  <li>• Unlawful Detainer Summons</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Lease Violations</h3>
                <p className="text-gray-700 mb-4">
                  Expert service of lease violation notices and cure or quit demands for property managers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lease Violation Notices</li>
                  <li>• Cure or Quit Demands</li>
                  <li>• Pet Policy Violations</li>
                  <li>• Noise Complaints</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Tenant Documents</h3>
                <p className="text-gray-700 mb-4">
                  Reliable service of tenant-related legal documents and property management notices.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rental Agreements</li>
                  <li>• Security Deposit Demands</li>
                  <li>• Property Inspection Notices</li>
                  <li>• Lease Renewal Documents</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Court Filings</h3>
                <p className="text-gray-700 mb-4">
                  Complete eviction court filing services and legal document preparation assistance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Eviction Court Filings</li>
                  <li>• Small Claims Court</li>
                  <li>• Judgment Enforcement</li>
                  <li>• Writ of Possession</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Same-Day Service</h3>
                <p className="text-gray-700 mb-4">
                  Emergency same-day eviction notice service when time is critical for your property.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Emergency Service</li>
                  <li>• Rush Orders</li>
                  <li>• Weekend Service</li>
                  <li>• Holiday Service</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Skip Tracing</h3>
                <p className="text-gray-700 mb-4">
                  Professional skip tracing services to locate difficult-to-find tenants and defendants.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tenant Location Services</li>
                  <li>• Address Verification</li>
                  <li>• Employment Verification</li>
                  <li>• Asset Searches</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Eviction Notice Service Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Primary Service Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tulsa</li>
                  <li>• Broken Arrow</li>
                  <li>• Bixby</li>
                  <li>• Jenks</li>
                  <li>• Owasso</li>
                  <li>• Sand Springs</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Extended Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Glenpool</li>
                  <li>• Sapulpa</li>
                  <li>• Coweta</li>
                  <li>• Wagoner</li>
                  <li>• Mounds</li>
                  <li>• Kiefer</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Surrounding Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Catoosa</li>
                  <li>• Collinsville</li>
                  <li>• Skiatook</li>
                  <li>• Claremore</li>
                  <li>• Pryor Creek</li>
                  <li>• All of Tulsa County</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Property Managers Choose Our Eviction Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-800">Experience & Expertise</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    With extensive experience in landlord-tenant law and eviction procedures, we understand 
                    the critical timelines and proper service requirements for eviction notices in Oklahoma.
                  </p>
                  <p>
                    Our team knows the local court systems and ensures all eviction documents are served 
                    correctly and on time to protect your legal rights as a property owner.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-800">Same-Day Service Guarantee</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Eviction situations often require immediate action. Our same-day service guarantee 
                    ensures your urgent eviction notices are served promptly to meet legal deadlines.
                  </p>
                  <p>
                    Available 24/7 for emergency eviction service, we&apos;re here when you need us most 
                    to protect your property investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-red-700 to-orange-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Professional Eviction Notice Service
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Licensed, bonded, and available 24/7 for emergency eviction service
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-left">
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href="tel:5393676832" className="text-red-200 hover:text-white">(539) 367-6832</a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href="mailto:info@justlegalsolutions.org" className="text-red-200 hover:text-white">info@justlegalsolutions.org</a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Service Area:</span>
                      <span className="text-red-200">All of Tulsa County<br />and surrounding areas</span>
                    </p>
                  </div>
                </div>
                <div className="bg-orange-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                  <div className="space-y-2 text-left">
                    <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Emergency service available</p>
                    <p className="text-yellow-200 font-semibold mt-4">24/7 Emergency Eviction Service</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                  Call Now for Emergency Service: (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <BusinessSchema />
      <ServiceSchema />
      <FAQSchema />
    </>
  );
}
