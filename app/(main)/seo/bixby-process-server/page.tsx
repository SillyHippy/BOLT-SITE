import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Process Server Bixby Oklahoma - Expert Legal Document Delivery',
  description: 'Professional process server in Bixby, Oklahoma offering same-day legal document delivery. Serving court papers, subpoenas, and legal notices throughout Bixby and surrounding areas.',
  keywords: 'process server bixby, bixby process server, legal document service bixby oklahoma, court papers bixby, subpoena service bixby',
  openGraph: {
    title: 'Process Server Bixby Oklahoma - Expert Legal Document Delivery',
    description: 'Professional process server in Bixby, Oklahoma offering same-day legal document delivery service.',
    url: 'https://justlegalsolutions.org/seo/bixby-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Process Server Bixby Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Bixby Oklahoma - Expert Legal Document Delivery',
    description: 'Professional process server in Bixby, Oklahoma offering same-day legal document delivery service.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/bixby-process-server',
  },
  robots: {
    index: true,
    follow: true,
  },
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Bixby',
  description: 'Professional process server serving Bixby, Oklahoma with same-day legal document delivery. Licensed, bonded, and available 24/7.',
  url: 'https://justlegalsolutions.org/seo/bixby-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.9420,
    longitude: -95.8836
  },
  areaServed: [
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  serviceType: [
    'Process Serving',
    'Legal Document Delivery',
    'Court Paper Service',
    'Subpoena Service',
    'Legal Notice Delivery'
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$',
};

const BixbyProcessServer = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-green-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-32 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Trusted Process Server in Bixby, Oklahoma</h1>
            <p className="mt-4 text-xl text-green-200 max-w-3xl mx-auto">Your local experts for fast, reliable, and professional legal document delivery in Bixby and South Tulsa County.</p>
          </div>
        </div>

        {/* Local Courthouse Information */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Bixby Municipal Court</h2>
            <p className="text-gray-700 mb-2">Bixby Municipal Court handles local legal matters, traffic violations, and city ordinance cases for Bixby residents.</p>
            <p className="text-gray-700"><strong>Address:</strong> 116 W Needles Ave, Bixby, OK 74008<br/>
              <strong>Phone:</strong> (918) 366-4430<br/>
              <strong>Website:</strong> <a href="https://www.bixbyok.gov/170/Municipal-Court" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">Bixby Municipal Court</a>
            </p>
          </div>
        </div>

        {/* Hyper-Local Service Description */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Neighborhoods & Landmarks We Serve</h2>
            <p className="text-gray-700 mb-4">We know Bixby inside and out—from the Riverwalk and Bentley Park to the neighborhoods of South Memorial, North Bixby, and the scenic Arkansas River corridor. Whether your documents need to reach a home in White Hawk, a business near Washington Irving Park, or an address in Downtown Bixby, we guarantee prompt and professional service. We also serve the greater South Tulsa area and nearby communities.</p>
            <p className="text-gray-700 mt-6">We also serve Glenpool, Jenks, South Tulsa, and all of Tulsa County.</p>
          </div>
        </div>

        {/* Local Case Study */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Case Study: Rush Service in North Bixby</h2>
            <p className="text-gray-700">Recently, we were hired by a Tulsa attorney to serve a time-sensitive summons in North Bixby. The recipient was difficult to locate, but our process server used diligent research and multiple attempts at different times of day. The documents were served legally and on time, helping the client meet a crucial court deadline. (Details anonymized for privacy.)</p>
          </div>
        </div>

        {/* Core Services Offered */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Core Services Offered</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Summons and Complaints:</strong> The critical first step in any lawsuit, served promptly to establish jurisdiction.</li>
              <li><strong>Subpoenas:</strong> Legally compelling witnesses to testify or produce evidence, delivered with proof of service.</li>
              <li><strong>Family Law Documents:</strong> Handling sensitive papers like divorce petitions and child custody orders with care and discretion.</li>
              <li><strong>Eviction and Forcible Detainer:</strong> Serving notices to tenants in strict accordance with Oklahoma&apos;s landlord-tenant laws.</li>
              <li><strong>Garnishments and Writs:</strong> Executing court orders for asset seizure and wage garnishment.</li>
            </ul>
          </div>
        </div>

        {/* Serving Bixby and Surrounding Areas (existing section) */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Serving Bixby and Surrounding Areas</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">From the heart of Bixby to the farthest reaches of South Tulsa County, we guarantee the same level of professional service for every client.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Bixby', 'Glenpool', 'Jenks', 'South Tulsa', 'Broken Arrow', 'Tulsa', 'Liberty', 'Leonard'].map(city => (
              <div key={city} className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900">{city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section (existing section) */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">What exactly does a process server do?</h3>
                <p className="mt-2 text-gray-700">A process server is a professional who delivers legal documents (like lawsuits, subpoenas, and restraining orders) to individuals involved in a court case. This official notification, called &quot;service of process,&quot; is legally required to ensure the individual is aware of the legal action against them, upholding their right to due process.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">How much does it cost to hire a process server in Bixby?</h3>
                <p className="mt-2 text-gray-700">The cost varies based on urgency. Standard service in the Bixby area starts at a competitive rate, while rush and same-day services are available for time-sensitive cases. We provide a full, transparent quote upfront with no hidden fees. Please see our <a href="/pricing" className="text-green-600 underline">pricing page</a> for details.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">What happens if the person is avoiding service?</h3>
                <p className="mt-2 text-gray-700">Our experienced process servers are trained in various techniques to handle evasive subjects. If direct personal service is not possible after multiple attempts, we can perform a &quot;substitute service&quot; as allowed by Oklahoma law, which may involve leaving the documents with a competent person at the residence or workplace and mailing a copy. We document all attempts meticulously.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Is your service legally valid in Bixby courts?</h3>
                <p className="mt-2 text-gray-700">Absolutely. We are fully licensed and bonded in the state of Oklahoma. Every service is performed in strict compliance with the Oklahoma Rules of Civil Procedure, and we provide a notarized Affidavit of Service that is ready for filing with the Bixby Municipal Court or Tulsa County court clerk.</p>
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

export default BixbyProcessServer;
