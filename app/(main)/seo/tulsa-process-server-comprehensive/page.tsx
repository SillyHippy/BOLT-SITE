
import type { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Comprehensive Process Server Tulsa County | Same Day Legal Document Delivery',
  description: 'Your comprehensive guide to process serving in Tulsa County. We offer same-day service for all legal documents, including court papers, subpoenas, and notices across Tulsa, Broken Arrow, and more. Licensed, bonded, and available 24/7.',
  keywords: 'process server tulsa, tulsa county process server, legal document delivery tulsa, court papers served tulsa, subpoena service tulsa county, process serving broken arrow, legal notice delivery oklahoma, same day process server tulsa, tulsa courthouse service, serve papers tulsa, golden driller, oral roberts university',
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
        {/* Hero Section */}
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-32 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Comprehensive Process Serving in Tulsa County</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">The definitive resource for professional, reliable, and swift legal document service in the greater Tulsa area.</p>
            <div className="flex justify-center mt-8">
              <Image
                src="/images/Tulsa_skyline_aerial,_April_2023.jpg"
                alt="Aerial view of the Tulsa skyline"
                width={800}
                height={320}
                className="rounded-lg shadow-lg max-h-80 object-cover"
                priority={false}
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
            <p className="text-gray-700 mb-4">Our process servers have intimate knowledge of every Tulsa neighborhood, from the bustling streets of Downtown&apos;s Blue Dome and Deco Districts to the serene paths along Riverside and the vibrant shops of Brookside. Whether your legal documents need to reach a residence in South Tulsa near Woodland Hills, a business on Cherry Street, or an address in historic Greenwood, we ensure prompt and successful service. We are familiar with all major landmarks, including the Gathering Place, BOK Center, and of course, the Tulsa County Courthouse.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <Image
                  src="/images/Golden_Driller,Tulsa_USA-_panoramio.jpg"
                  alt="The Golden Driller statue in Tulsa"
                  width={500}
                  height={240}
                  className="rounded-lg shadow-md mx-auto max-h-60 w-full object-cover"
                  priority={false}
                />
                <p className="text-sm text-gray-600 mt-2">The iconic Golden Driller statue.</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/Prayer_Tower_on_the_campus_of_Oral_Roberts_University.jpg"
                  alt="Prayer Tower on the Oral Roberts University campus"
                  width={500}
                  height={240}
                  className="rounded-lg shadow-md mx-auto max-h-60 w-full object-cover"
                  priority={false}
                />
                <p className="text-sm text-gray-600 mt-2">The Prayer Tower at Oral Roberts University.</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">We also serve Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Glenpool, and surrounding communities.</p>
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
            <p className="text-gray-700 mb-4 max-w-3xl mx-auto">Our comprehensive knowledge of Tulsa is built on years of experience navigating its streets. This historical map illustrates our deep connection to the city&apos;s layout and history.</p>
            <Image
              src="/images/Tulsa_OK_Map_1920.jpg"
              alt="Historical Map of Tulsa from 1920"
              width={600}
              height={400}
              className="rounded-lg shadow max-h-96 mx-auto"
              priority={false}
            />
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
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">From the largest city to the smallest town, our reach extends across all of Tulsa County. We guarantee the same level of professional service whether you need papers served in a dense urban area or a quiet suburban community.</p>
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
