import { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Professional Process Server Tulsa County - Same Day Legal Document Delivery',
  description: 'Expert process server in Tulsa County offering same-day legal document delivery. Serving court papers, subpoenas, and legal notices across Tulsa, Broken Arrow, and all of Tulsa County. Licensed, bonded, and available 24/7.',
  keywords: 'process server tulsa, tulsa county process server, legal document delivery tulsa, court papers served tulsa, subpoena service tulsa county, process serving broken arrow, legal notice delivery oklahoma',
  openGraph: {
    title: 'Professional Process Server Tulsa County - Same Day Service',
    description: 'Licensed process server serving all of Tulsa County with same-day legal document delivery. Court papers, subpoenas, and legal notices served professionally.',
    url: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Professional Process Server Tulsa County'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Process Server Tulsa County - Same Day Service',
    description: 'Licensed process server serving all of Tulsa County with same-day legal document delivery.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive',
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
  name: 'Just Legal Solutions - Process Server Tulsa County',
  description: 'Professional process server serving all of Tulsa County with same-day legal document delivery. Licensed, bonded, and available 24/7.',
  url: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    postalCode: '74101',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1539,
    longitude: -95.9928
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Tulsa',
      containedInPlace: {
        '@type': 'State',
        name: 'Oklahoma'
      }
    },
    {
      '@type': 'City',
      name: 'Broken Arrow',
      containedInPlace: {
        '@type': 'State',
        name: 'Oklahoma'
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Tulsa County',
      containedInPlace: {
        '@type': 'State',
        name: 'Oklahoma'
      }
    }
  ],
  serviceType: [
    'Process Serving',
    'Legal Document Delivery',
    'Court Paper Service',
    'Subpoena Service',
    'Legal Notice Delivery'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Process Server Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Same Day Process Service',
          description: 'Emergency same-day legal document delivery throughout Tulsa County'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Court Paper Service',
          description: 'Professional service of court papers, summons, and complaints'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Subpoena Service',
          description: 'Reliable subpoena delivery for depositions and court appearances'
        }
      }
    ]
  },
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function TulsaProcessServerComprehensive() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen pt-12 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Process Server Tulsa County
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Same-Day Legal Document Delivery • Licensed & Bonded • Available 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Call Now: (539) 367-6832
                </a>
                <a href="#quote" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Serving All of Tulsa County
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Tulsa Metropolitan Area</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Downtown Tulsa</li>
                  <li>• Midtown Tulsa</li>
                  <li>• South Tulsa</li>
                  <li>• West Tulsa</li>
                  <li>• East Tulsa</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Tulsa County Cities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Broken Arrow</li>
                  <li>• Bixby</li>
                  <li>• Jenks</li>
                  <li>• Owasso</li>
                  <li>• Sand Springs</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Surrounding Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sapulpa</li>
                  <li>• Glenpool</li>
                  <li>• Collinsville</li>
                  <li>• Catoosa</li>
                  <li>• Skiatook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Services for Specific Industries */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Specialized Services for Professional Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">Attorneys & Law Firms</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Specialized service for legal professionals requiring precise, timely document delivery.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Litigation Support</li>
                  <li>• Discovery Documents</li>
                  <li>• Court Filing Assistance</li>
                  <li>• Rush Service Available</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-green-900">Property Managers</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Expert eviction notice service and tenant document delivery throughout Tulsa County.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Eviction Notices</li>
                  <li>• Notice to Quit</li>
                  <li>• Lease Violations</li>
                  <li>• Tenant Screening Support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-purple-900">Financial Institutions</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Confidential service for banks, credit unions, and lending institutions.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Foreclosure Notices</li>
                  <li>• Demand Letters</li>
                  <li>• Collection Documents</li>
                  <li>• Bankruptcy Papers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-red-900">Insurance Companies</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Reliable service for insurance claims, investigations, and legal proceedings.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Claims Documents</li>
                  <li>• Investigation Support</li>
                  <li>• Witness Subpoenas</li>
                  <li>• Settlement Papers</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Complete Process Server Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Court Papers & Summons</h3>
                <p className="text-gray-700 mb-4">
                  Professional service of court papers, summons, complaints, and civil litigation documents throughout Tulsa County.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Civil Summons</li>
                  <li>• Complaints & Petitions</li>
                  <li>• Divorce Papers</li>
                  <li>• Restraining Orders</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Subpoenas & Depositions</h3>
                <p className="text-gray-700 mb-4">
                  Reliable subpoena service for depositions, court appearances, and document production requests.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deposition Subpoenas</li>
                  <li>• Trial Subpoenas</li>
                  <li>• Records Subpoenas</li>
                  <li>• Witness Subpoenas</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Legal Notices</h3>
                <p className="text-gray-700 mb-4">
                  Timely delivery of legal notices, eviction notices, and other court-required documentation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Eviction Notices</li>
                  <li>• Notice to Quit</li>
                  <li>• Foreclosure Notices</li>
                  <li>• Demand Letters</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-4 text-red-900">Same-Day Service</h3>
                <p className="text-gray-700 mb-4">
                  Emergency same-day process service when time is critical for your legal proceedings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Emergency Service</li>
                  <li>• Rush Orders</li>
                  <li>• Weekend Service</li>
                  <li>• Holiday Service</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 text-orange-900">Skip Tracing</h3>
                <p className="text-gray-700 mb-4">
                  Professional skip tracing services to locate difficult-to-find defendants and witnesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Address Verification</li>
                  <li>• Asset Searches</li>
                  <li>• Employment Verification</li>
                  <li>• Background Checks</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-4 text-teal-900">Document Preparation</h3>
                <p className="text-gray-700 mb-4">
                  Assistance with document preparation and filing requirements for Tulsa County courts.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Court Filing</li>
                  <li>• Document Review</li>
                  <li>• Compliance Check</li>
                  <li>• Deadline Management</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Just Legal Solutions?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-900">Experience & Expertise</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    With over 10 years of experience serving Tulsa County, we understand the local court systems, 
                    filing requirements, and procedural nuances that ensure your legal documents are served correctly 
                    and on time.
                  </p>
                  <p>
                    Our team is licensed, bonded, and insured, providing you with the peace of mind that your 
                    important legal documents are in professional hands.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-900">Same-Day Service Guarantee</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We understand that legal matters often require immediate attention. Our same-day service 
                    guarantee ensures that your urgent process service needs are met without delay.
                  </p>
                  <p>
                    Available 24/7 for emergency service, we&apos;re here when you need us most - including 
                    weekends and holidays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-blue-900 text-white" id="quote">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Get Professional Process Service Today
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Licensed, bonded, and available 24/7 for your legal document delivery needs
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-800 p-6 rounded-lg">
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
                      <span className="font-semibold mr-2">Address:</span>
                      <span className="text-blue-200">123 Main Street<br />Tulsa, OK 74101</span>
                    </p>
                  </div>
                </div>
                <div className="bg-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                  <div className="space-y-2 text-left">
                    <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Emergency service available</p>
                    <p className="text-orange-200 font-semibold mt-4">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                  Call Now for Free Quote: (539) 367-6832
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
