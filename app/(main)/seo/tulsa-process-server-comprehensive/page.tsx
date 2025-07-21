
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Comprehensive Process Server Tulsa County | Same Day Legal Document Delivery',
  description: 'Your comprehensive guide to process serving in Tulsa County. We offer same-day service for all legal documents, including court papers, subpoenas, and notices across Tulsa, Broken Arrow, and more. Licensed, bonded, and available 24/7.',
  keywords: 'process server tulsa, tulsa county process server, legal document delivery tulsa, court papers served tulsa, subpoena service tulsa county, process serving broken arrow, legal notice delivery oklahoma',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Tulsa County',
  description: 'Professional process server serving all of Tulsa County with same-day legal document delivery. Licensed, bonded, and available 24/7.',
  url: 'https://justlegalsolutions.org/seo/tulsa-process-server-comprehensive',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1539,
    longitude: -95.9928
  },
  areaServed: [
    { '@type': 'City', name: 'Tulsa' },
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'City', name: 'Owasso' },
    { '@type': 'City', name: 'Sand Springs' },
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

export default function TulsaProcessServerComprehensive() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Local Image */}
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-32 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Comprehensive Process Serving in Tulsa County</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">The definitive resource for professional, reliable, and swift legal document service in the greater Tulsa area.</p>
            <div className="flex justify-center mt-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Downtown_Tulsa_Skyline.jpg/640px-Downtown_Tulsa_Skyline.jpg"
                alt="Downtown Tulsa Skyline"
                className="rounded-lg shadow-lg max-h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Local Courthouse Information */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Tulsa County Courthouse</h2>
            <p className="text-gray-700 mb-2">Tulsa County Courthouse is the heart of legal proceedings in the region, serving as the main venue for civil and criminal cases.</p>
            <p className="text-gray-700"><strong>Address:</strong> 500 S Denver Ave, Tulsa, OK 74103<br/>
              <strong>Phone:</strong> (918) 596-5000<br/>
              <strong>Website:</strong> <a href="https://www.oscn.net/dockets/Results.aspx?db=Tulsa" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Tulsa County Court Dockets</a>
            </p>
          </div>
        </div>

        {/* Hyper-Local Service Description */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Neighborhoods & Landmarks We Serve</h2>
            <p className="text-gray-700 mb-2">We provide process serving throughout Tulsa, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Downtown Tulsa (Blue Dome, Deco District)</li>
              <li>Brookside & Riverside</li>
              <li>Cherry Street & Midtown</li>
              <li>South Tulsa (Woodland Hills, Union)</li>
              <li>East Tulsa (Admiral Place, McClure Park)</li>
              <li>North Tulsa (Greenwood, Gilcrease)</li>
              <li>Landmarks: Gathering Place, BOK Center, Tulsa County Courthouse</li>
            </ul>
            <p className="text-gray-700">We also serve Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Glenpool, and surrounding communities.</p>
          </div>
        </div>

        {/* Local Case Study */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Case Study: Successful Service in Midtown Tulsa</h2>
            <p className="text-gray-700">Recently, we assisted a Tulsa law firm in serving a time-sensitive subpoena in the Midtown area. Despite the recipient&apos;s attempts to avoid service, our process server used diligent skip-tracing and multiple attempts at different times of day. The documents were served legally and on time, helping the client meet a crucial court deadline. (Details anonymized for privacy.)</p>
          </div>
        </div>

        {/* Service Area Map */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-10 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Tulsa Service Area Map</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tulsa_County_Oklahoma_Incorporated_and_Unincorporated_areas_Tulsa_Highlighted_4075000.svg/600px-Tulsa_County_Oklahoma_Incorporated_and_Unincorporated_areas_Tulsa_Highlighted_4075000.svg.png"
              alt="Tulsa County Service Area Map"
              className="rounded-lg shadow max-h-72 mx-auto"
              loading="lazy"
            />
            <p className="text-gray-600 mt-2 text-sm">Map: Tulsa County and City of Tulsa (Wikimedia Commons)</p>
          </div>
        </div>

        {/* Core Services Offered (existing section) */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Core Services Offered</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Summons and Complaints:</strong> The critical first step in any lawsuit, served promptly to establish jurisdiction.</li>
              <li><strong>Subpoenas:</strong> Legally compelling witnesses to testify or produce evidence, delivered with proof of service.</li>
              <li><strong>Family Law Documents:</strong> Handling sensitive papers like divorce petitions and child custody orders with care and discretion.</li>
              <li><strong>Eviction and Forcible Detainer:</strong> Serving notices to tenants in strict accordance with Oklahoma&apos;s landlord-tenant laws.</li>
              <li><strong>Garnishments and Writs:</strong> Executing court orders for asset seizure and wage garnishment.</li>
            </ul>
          </div>
        </div>

        {/* Serving Every Corner of Tulsa County (existing section) */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Serving Every Corner of Tulsa County</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Tulsa', 'Broken Arrow', 'Bixby', 'Jenks', 'Owasso', 'Sand Springs', 'Sapulpa', 'Glenpool'].map(city => (
              <div key={city} className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900">{city}</p>
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
                <p className="mt-2 text-gray-700">A process server is a professional who delivers legal documents (like lawsuits, subpoenas, and restraining orders) to individuals involved in a court case. This official notification, called &ldquo;service of process,&rdquo; is legally required to ensure the individual is aware of the legal action against them, upholding their right to due process.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">How much does it cost to hire a process server in Tulsa?</h3>
                <p className="mt-2 text-gray-700">The cost varies based on urgency. Standard service in the Tulsa metro area starts at a competitive rate, while rush and same-day services are available for time-sensitive cases. We provide a full, transparent quote upfront with no hidden fees. Please see our <a href="/pricing" className="text-blue-600 underline">pricing page</a> for details.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">What happens if the person is avoiding service?</h3>
                <p className="mt-2 text-gray-700">Our experienced process servers are trained in various techniques to handle evasive subjects. If direct personal service is not possible after multiple attempts, we can perform a &ldquo;substitute service&rdquo; as allowed by Oklahoma law, which may involve leaving the documents with a competent person at the residence or workplace and mailing a copy. We document all attempts meticulously.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Is your service legally valid in Tulsa County courts?</h3>
                <p className="mt-2 text-gray-700">Absolutely. We are fully licensed and bonded in the state of Oklahoma. Every service is performed in strict compliance with the Oklahoma Rules of Civil Procedure, and we provide a notarized Affidavit of Service that is ready for filing with the Tulsa County court clerk.</p>
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
