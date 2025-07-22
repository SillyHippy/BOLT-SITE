import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// SEO Metadata optimized for the Bixby page
export const metadata: Metadata = {
  title: 'Bixby Process Server | Same-Day Service in Tulsa & Wagoner County',
  description: 'Professional process server in Bixby, Oklahoma. We offer same-day service for all legal documents, including court papers, subpoenas, and notices. Licensed, bonded, and available 24/7 for Bixby and surrounding areas.',
  keywords: 'process server bixby, bixby process server, legal document delivery bixby, court papers bixby, subpoena service bixby oklahoma, wagoner county process server',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/bixby-process-server'
  },
  openGraph: {
    title: 'Bixby, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Bixby. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/bixby-process-server',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/jls-logo.png',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions Logo'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bixby, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Bixby? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

// Detailed JSON-LD Schema for Bixby Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Bixby',
  description: 'Professional process server for Bixby and surrounding areas in Tulsa and Wagoner counties.',
  url: 'https://justlegalsolutions.org/seo/bixby-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'AdministrativeArea', name: 'Wagoner County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Local Content for Bixby, OK ---
const bixbyData = {
    history: `Known as "The Garden Spot of Oklahoma," Bixby was founded in 1899 and has a deep history rooted in agriculture along the fertile Arkansas River valley. Today, it is one of the fastest-growing suburbs of Tulsa, known for its excellent schools and family-oriented communities. This rapid growth means a mix of established rural properties and new, large-scale residential developments, requiring a process server with versatile local knowledge.`,
    courthouse: {
        name: 'Bixby Municipal Court (City Hall)',
        address: '116 W Needles Ave, Bixby, OK 74008',
        phone: '(918) 366-4430',
        website: 'https://www.bixbyok.gov/170/Municipal-Court',
        note: 'Bixby spans both Tulsa and Wagoner counties. We are licensed to serve and file documents in both county courthouses as required for your specific case.'
    },
    processServingLaw: `Service of process in Bixby must comply with Oklahoma State Statutes. As Bixby is located in both Tulsa and Wagoner counties, it is crucial to file the Affidavit of Service with the correct county court. We verify jurisdiction and ensure all legal paperwork is handled correctly for both counties.`,
    serviceAreas: [
        'Downtown Bixby',
        'White Hawk',
        'The Estates at Stonebrooke',
        'Bixby North',
        'South Bixby (near the river)',
        'Leonard',
        'County Line Road areas',
        'Rural Bixby addresses'
    ],
    faqs: [
        {
            q: 'My case is in Wagoner County but the person is in Bixby. Can you handle that?',
            a: 'Yes. We are fully licensed to serve in both Tulsa and Wagoner counties. We regularly handle cross-county serves for Bixby residents and ensure the Affidavit of Service is filed correctly with the appropriate court.'
        },
        {
            q: 'How do you serve documents in newer, gated communities in Bixby like White Hawk?',
            a: 'Our process servers are experienced with the protocols of gated communities. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner.'
        },
        {
            q: 'Do you serve in the rural parts of Bixby?',
            a: 'Absolutely. We cover all of Bixby, including rural routes and properties that may be difficult to locate. Our servers are equipped to handle service in less-developed areas.'
        },
        {
            q: 'What is the turnaround time for standard service in Bixby?',
            a: 'Standard service in Bixby is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters.'
        }
    ]
};

const BixbyProcessServer = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* The main layout handles the Navbar, Footer, and top padding */}
      <div className="min-h-screen bg-gray-50">
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-20 pt-20 text-center"> {/* SPACING FIX */}
                <h1 className="text-4xl md:text-5xl font-extrabold">Bixby, Oklahoma Process Server</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Expert Legal Document Delivery in Tulsa & Wagoner Counties</p>
            </div>
        </div>

        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Bixby</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {bixbyData.history}
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Local Courthouse Info</h3>
                        <p className="font-bold">{bixbyData.courthouse.name}</p>
                        <p>{bixbyData.courthouse.address}</p>
                        <p>Phone: {bixbyData.courthouse.phone}</p>
                        <a href={bixbyData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Official Website</a>
                        <p className="text-sm text-gray-600 mt-2"><em>{bixbyData.courthouse.note}</em></p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Oklahoma Law Compliance</h3>
                        <p>{bixbyData.processServingLaw}</p>
                    </div>
                </section>

                 <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Bixby and Beyond</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {bixbyData.serviceAreas.map(city => (
                            <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-semibold text-blue-900">{city}</p>
                            </div>
                        ))}
                    </div>
                 </section>

                <section className="bg-white py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {bixbyData.faqs.map((faq, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                                <p className="mt-2 text-gray-700">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
      </div>
      <BusinessSchema />
      <ServiceSchema />
      <FAQSchema />
    </>
  );
}

export default BixbyProcessServer;

