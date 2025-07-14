import { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Process Server Broken Arrow OK - Same Day Legal Document Service',
  description: 'Professional process server in Broken Arrow, Oklahoma. Same-day service for court papers, subpoenas, and legal notices. Licensed, bonded, and serving all of Tulsa County.',
  keywords: 'process server broken arrow, broken arrow process server, legal document service broken arrow, court papers broken arrow, subpoena service broken arrow oklahoma',
  openGraph: {
    title: 'Process Server Broken Arrow OK - Same Day Legal Document Service',
    description: 'Professional process server in Broken Arrow, Oklahoma. Same-day service for court papers, subpoenas, and legal notices.',
    url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Process Server Broken Arrow Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Broken Arrow OK - Same Day Service',
    description: 'Professional process server in Broken Arrow, Oklahoma. Same-day service for court papers and legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Broken Arrow',
  description: 'Professional process server serving Broken Arrow, Oklahoma with same-day legal document delivery.',
  url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Broken Arrow',
    addressRegion: 'OK',
    postalCode: '74012',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0526,
    longitude: -95.7969
  },
  areaServed: {
    '@type': 'City',
    name: 'Broken Arrow',
    containedInPlace: {
      '@type': 'State',
      name: 'Oklahoma'
    }
  },
  serviceType: [
    'Process Serving',
    'Legal Document Delivery',
    'Court Paper Service',
    'Subpoena Service'
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89',
    bestRating: '5'
  }
};

export default function BrokenArrowProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-800 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Process Server Broken Arrow, Oklahoma
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Same-Day Legal Document Service • Licensed & Bonded • Serving All of Tulsa County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Call Now: (539) 367-6832
                </a>
                <a href="#contact" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local Area Focus */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Professional Process Service in Broken Arrow
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-800">Local Expertise</h3>
                  <p className="text-gray-700 mb-4">
                    As a trusted process server in Broken Arrow, we know the local courts, neighborhoods, 
                    and business districts. Our familiarity with the area ensures efficient and timely 
                    service of your legal documents.
                  </p>
                  <p className="text-gray-700">
                    We serve all areas of Broken Arrow including Rose District, downtown, and surrounding 
                    residential and commercial areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">Same-Day Service</h3>
                  <p className="text-gray-700 mb-4">
                    Need documents served today? Our same-day service guarantee ensures your legal 
                    documents are delivered promptly, helping you meet critical deadlines.
                  </p>
                  <p className="text-gray-700">
                    Available 24/7 for emergency service throughout Broken Arrow and all of Tulsa County.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Complete Process Server Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Court Papers</h3>
                <p className="text-gray-700 mb-4">
                  Professional service of court papers, summons, and civil litigation documents in Broken Arrow.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Civil Summons</li>
                  <li>• Complaints & Petitions</li>
                  <li>• Divorce Papers</li>
                  <li>• Restraining Orders</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Subpoenas</h3>
                <p className="text-gray-700 mb-4">
                  Reliable subpoena service for depositions, court appearances, and document production.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deposition Subpoenas</li>
                  <li>• Trial Subpoenas</li>
                  <li>• Records Subpoenas</li>
                  <li>• Witness Subpoenas</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Legal Notices</h3>
                <p className="text-gray-700 mb-4">
                  Timely delivery of eviction notices, foreclosure notices, and other legal documents.
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

        {/* Why Choose Us */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our Broken Arrow Process Server?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Licensed & Bonded</h3>
                <p className="text-gray-700">
                  Fully licensed and bonded process server providing secure, professional service in Broken Arrow.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Same-Day Service</h3>
                <p className="text-gray-700">
                  Emergency same-day process service available throughout Broken Arrow and surrounding areas.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Local Knowledge</h3>
                <p className="text-gray-700">
                  Extensive knowledge of Broken Arrow neighborhoods, businesses, and local court procedures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Broken Arrow Areas We Serve
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Residential Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Rose District</li>
                    <li>• Downtown Broken Arrow</li>
                    <li>• Elm Creek</li>
                    <li>• Stonebridge</li>
                    <li>• Countryside</li>
                    <li>• Broken Arrow North</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Commercial Districts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Main Street Business District</li>
                    <li>• Broken Arrow Expressway</li>
                    <li>• 71st Street Commercial</li>
                    <li>• Aspen Creek Shopping</li>
                    <li>• Broken Arrow Plaza</li>
                    <li>• Industrial Areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-green-800 to-blue-800 text-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Professional Process Server Ready to Help
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Same-day service available throughout Broken Arrow and Tulsa County
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-left">
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href="tel:5393676832" className="text-green-200 hover:text-white">(539) 367-6832</a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href="mailto:info@justlegalsolutions.org" className="text-green-200 hover:text-white">info@justlegalsolutions.org</a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Serving:</span>
                      <span className="text-green-200">All of Broken Arrow<br />and Tulsa County</span>
                    </p>
                  </div>
                </div>
                <div className="bg-blue-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                  <div className="space-y-2 text-left">
                    <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Emergency service</p>
                    <p className="text-orange-200 font-semibold mt-4">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                  Call Now: (539) 367-6832
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
