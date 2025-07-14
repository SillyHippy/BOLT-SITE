import { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Legal Posting Process Server Tulsa County - Notice & Publication Service',
  description: 'Professional legal posting and publication service in Tulsa County. Expert notice posting, service by publication, and legal document posting for courts and attorneys.',
  keywords: 'legal posting tulsa, service by publication tulsa county, notice posting oklahoma, process server posting service, legal document posting',
  openGraph: {
    title: 'Legal Posting Process Server Tulsa County - Notice & Publication Service',
    description: 'Professional legal posting and publication service in Tulsa County. Expert notice posting and service by publication.',
    url: 'https://justlegalsolutions.org/seo/legal-posting-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Legal Posting Process Server Tulsa County'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Posting Process Server Tulsa County - Notice & Publication Service',
    description: 'Professional legal posting and publication service in Tulsa County. Expert notice posting and service by publication.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/legal-posting-process-server',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalPostingProcessServer() {
  return (
    <>
      <div className="min-h-screen pt-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Legal Posting Process Server Tulsa County
              </h1>
              <p className="text-xl text-center text-gray-600 mt-4">24/7 Emergency Service Available</p>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional Notice & Publication Service • Licensed & Bonded • Court Approved
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Call Now: (539) 367-6832
                </a>
                <a href="#services" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Posting Services */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Professional Legal Posting Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" id="services">
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Service by Publication</h3>
                <p className="text-gray-700 mb-4">
                  Court-approved service by publication when defendants cannot be personally served.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Newspaper Publication</li>
                  <li>• Legal Notice Posting</li>
                  <li>• Court Affidavit Filing</li>
                  <li>• Publication Compliance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Notice Posting</h3>
                <p className="text-gray-700 mb-4">
                  Professional posting of legal notices at courthouses and designated public locations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Courthouse Posting</li>
                  <li>• Public Notice Boards</li>
                  <li>• Property Posting</li>
                  <li>• Proof of Posting</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Legal Document Posting</h3>
                <p className="text-gray-700 mb-4">
                  Secure posting of legal documents when traditional service methods are unavailable.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Default Judgments</li>
                  <li>• Foreclosure Notices</li>
                  <li>• Probate Notices</li>
                  <li>• Bankruptcy Filings</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Court Approved Methods</h3>
                <p className="text-gray-700 mb-4">
                  All posting methods approved by Tulsa County courts and Oklahoma state law.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Oklahoma Court Rules</li>
                  <li>• Tulsa County Procedures</li>
                  <li>• State Law Compliance</li>
                  <li>• Legal Requirements</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Documentation & Proof</h3>
                <p className="text-gray-700 mb-4">
                  Complete documentation and proof of posting for court filing requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Affidavit of Posting</li>
                  <li>• Photo Documentation</li>
                  <li>• Time & Date Stamps</li>
                  <li>• Court Filing Prep</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Emergency Posting</h3>
                <p className="text-gray-700 mb-4">
                  Same-day emergency posting service for urgent legal matters and court deadlines.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-Day Service</li>
                  <li>• Emergency Orders</li>
                  <li>• Rush Posting</li>
                  <li>• Weekend Service</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Legal Posting Service Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Tulsa County Courts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tulsa County Courthouse</li>
                  <li>• District Courts</li>
                  <li>• Municipal Courts</li>
                  <li>• Justice Centers</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Primary Cities</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-green-800">Extended Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Glenpool</li>
                  <li>• Sapulpa</li>
                  <li>• Coweta</li>
                  <li>• Wagoner</li>
                  <li>• Mounds</li>
                  <li>• Kiefer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our Legal Posting Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Court Experience</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    With extensive experience in Tulsa County courts, we understand the specific 
                    requirements and procedures for legal posting and service by publication.
                  </p>
                  <p>
                    Our team ensures all postings meet Oklahoma state law requirements and court 
                    rules, providing legally compliant service every time.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-purple-800">Complete Documentation</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We provide complete documentation and proof of posting, including affidavits, 
                    photographs, and detailed records for court filing requirements.
                  </p>
                  <p>
                    Our thorough documentation protects your legal interests and ensures compliance 
                    with all court-ordered posting requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Professional Legal Posting Service
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Court-approved posting methods with complete documentation
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-left">
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href="tel:5393676832" className="text-blue-200 hover:text-white">(539) 367-6832</a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href="mailto:info@justlegalsolutions.org" className="text-blue-200 hover:text-white">info@justlegalsolutions.org</a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Service Area:</span>
                      <span className="text-blue-200">All of Tulsa County<br />and surrounding areas</span>
                    </p>
                  </div>
                </div>
                <div className="bg-purple-600 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                  <div className="space-y-2 text-left">
                    <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Emergency service available</p>
                    <p className="text-orange-200 font-semibold mt-4">Same-Day Emergency Posting</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                  Call Now for Posting Service: (539) 367-6832
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
