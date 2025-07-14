import { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Process Server Sand Springs Oklahoma - Expert Legal Document Service',
  description: 'Professional process server in Sand Springs, Oklahoma providing same-day legal document delivery. Serving court papers, subpoenas, and legal notices throughout Sand Springs and Tulsa County.',
  keywords: 'process server sand springs, sand springs process server, legal document service sand springs oklahoma, court papers sand springs, subpoena service sand springs',
  openGraph: {
    title: 'Process Server Sand Springs Oklahoma - Expert Legal Document Service',
    description: 'Professional process server in Sand Springs, Oklahoma providing same-day legal document delivery service.',
    url: 'https://justlegalsolutions.org/seo/sand-springs-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Process Server Sand Springs Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Sand Springs Oklahoma - Expert Legal Document Service',
    description: 'Professional process server in Sand Springs, Oklahoma providing same-day legal document delivery service.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/sand-springs-process-server',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SandSpringsProcessServer() {
  return (
    <>
      <div className="min-h-screen pt-12 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Process Server Sand Springs, Oklahoma
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-100">
                Expert Legal Document Service • Same-Day Delivery • Licensed & Bonded
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Call Now: (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Professional Process Server Services in Sand Springs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">Court Papers</h3>
                <p className="text-gray-700 mb-4">
                  Professional service of court papers, summons, and civil litigation documents in Sand Springs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Civil Summons</li>
                  <li>• Complaints & Petitions</li>
                  <li>• Divorce Papers</li>
                  <li>• Restraining Orders</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                <h3 className="text-xl font-semibold mb-4 text-cyan-800">Subpoenas</h3>
                <p className="text-gray-700 mb-4">
                  Reliable subpoena service for depositions and court appearances throughout Sand Springs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deposition Subpoenas</li>
                  <li>• Trial Subpoenas</li>
                  <li>• Records Subpoenas</li>
                  <li>• Witness Subpoenas</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Legal Notices</h3>
                <p className="text-gray-700 mb-4">
                  Timely delivery of eviction notices, foreclosure notices, and legal documents.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Eviction Notices</li>
                  <li>• Notice to Quit</li>
                  <li>• Foreclosure Notices</li>
                  <li>• Demand Letters</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Local Focus */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Serving Sand Springs and the Greater Tulsa Area
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">
                Our professional process server provides expert legal document delivery throughout 
                Sand Springs, Oklahoma and the surrounding Tulsa County area. We specialize in 
                timely, accurate service of all types of legal documents.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-teal-800">Same-Day Service</h3>
                  <p className="text-gray-700">
                    Emergency same-day process service available throughout Sand Springs for urgent legal matters.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-800">Licensed & Bonded</h3>
                  <p className="text-gray-700">
                    Fully licensed and bonded process server providing secure, professional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Contact Our Sand Springs Process Server
              </h2>
              <p className="text-xl mb-8 text-teal-100">
                Professional legal document delivery service in Sand Springs, Oklahoma
              </p>
              <div className="bg-teal-600 p-6 rounded-lg max-w-md mx-auto">
                <p className="text-lg mb-4">
                  <strong>Phone:</strong> <a href="tel:5393676832" className="text-teal-200 hover:text-white">(539) 367-6832</a>
                </p>
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:info@justlegalsolutions.org" className="text-teal-200 hover:text-white">info@justlegalsolutions.org</a>
                </p>
                <p className="text-lg">
                  <strong>Service Area:</strong> Sand Springs and all of Tulsa County
                </p>
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
