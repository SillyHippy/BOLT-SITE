
import { Metadata } from 'next';
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
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-20 pt-32 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Comprehensive Process Serving in Tulsa County</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">The definitive resource for professional, reliable, and swift legal document service in the greater Tulsa area.</p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Guide to Professional Service of Process in Tulsa</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Navigating the legal system requires precision at every step, especially when it comes to the official delivery of legal documents. As Tulsa County&apos;s premier process serving agency, Just Legal Solutions provides an exhaustive range of services designed to meet the rigorous demands of attorneys, businesses, and private citizens. Our deep understanding of Oklahoma&apos;s Rules of Civil Procedure ensures that every service is performed correctly, legally, and without delay.
                </p>
                <p className="text-lg text-gray-700 mb-10">
                    This page serves as a comprehensive overview of our capabilities, service areas, and unwavering commitment to excellence in the field of legal support services.
                </p>

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

                 <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Serving Every Corner of Tulsa County</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {['Tulsa', 'Broken Arrow', 'Bixby', 'Jenks', 'Owasso', 'Sand Springs', 'Sapulpa', 'Glenpool'].map(city => (
                        <div key={city} className="bg-blue-50 p-4 rounded-lg">
                            <p className="font-semibold text-blue-900">{city}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
        
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
