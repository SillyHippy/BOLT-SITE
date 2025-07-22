import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// SEO Metadata optimized for the Broken Arrow page
export const metadata: Metadata = {
  title: 'Process Server Broken Arrow, OK | Same-Day Service',
  description: 'Top-rated process server in Broken Arrow, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa & Wagoner Counties.',
  keywords: 'process server broken arrow, broken arrow process server, legal document service broken arrow, court papers broken arrow, subpoena service broken arrow oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/broken-arrow-process-server'
  },
  openGraph: {
    title: 'Process Server Broken Arrow, OK | Just Legal Solutions',
    description: 'Reliable and fast process serving in Broken Arrow. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
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
    title: 'Broken Arrow, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Broken Arrow? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

// Detailed JSON-LD Schema for Broken Arrow Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Broken Arrow',
  description: 'Professional process server for Broken Arrow and surrounding areas in Tulsa and Wagoner counties.',
  url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'AdministrativeArea', name: 'Wagoner County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Local Content for Broken Arrow, OK ---
const brokenArrowData = {
    history: `Broken Arrow's name originates from a Muscogee (Creek) community who settled in the area after the Trail of Tears. Founded as a city in 1902, it has grown from a small agricultural community into Oklahoma's fourth-largest city. Its vibrant Rose District and sprawling residential neighborhoods create a diverse service area that requires local expertise.`,
    courthouse: {
        name: 'Broken Arrow Municipal Court (Justice Center)',
        address: '2304 S 1st Pl, Broken Arrow, OK 74012',
        phone: '(918) 451-8558',
        website: 'https://www.brokenarrowok.gov/government/municipal-court',
        note: 'Broken Arrow is primarily in Tulsa County, with a portion in Wagoner County. All major civil cases are handled at the respective county courthouses.'
    },
    processServingLaw: `Service of process in Broken Arrow must comply with Oklahoma State Statutes. This means a licensed server must make diligent efforts to effect personal service. We are experts in these statutes and ensure every service is legally sound for both Tulsa and Wagoner County District Courts.`,
    serviceAreas: [
        'Rose District',
        'Downtown Broken Arrow',
        'South Broken Arrow',
        'Battle Creek',
        'Forest Ridge',
        'Indian Springs',
        'Aspen Creek',
        'Iron Horse Ranch'
    ],
    faqs: [
        {
            q: 'How do you handle service in large, gated communities in Broken Arrow?',
            a: 'Our process servers are experienced with the protocols of gated communities like Forest Ridge. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner.'
        },
        {
            q: 'The person I need to serve lives in the Wagoner County part of Broken Arrow. Is that a problem?',
            a: 'Not at all. We are fully licensed to serve in both Tulsa and Wagoner counties. We handle cross-county serves for Broken Arrow residents regularly and ensure the Affidavit of Service is filed with the correct court.'
        },
        {
            q: 'What is your turnaround time for standard service in Broken Arrow?',
            a: 'Standard service in Broken Arrow is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters.'
        },
        {
            q: 'Can you serve papers to someone at their job in Broken Arrow?',
            a: 'Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in the commercial and industrial areas of Broken Arrow.'
        }
    ]
};

export default function BrokenArrowProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navbar and Footer are handled by the main layout */}
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-20 pt-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Broken Arrow, Oklahoma Process Server</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Expert Legal Document Delivery in Tulsa & Wagoner Counties</p>
            </div>
        </div>

        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Broken Arrow</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {brokenArrowData.history}
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Local Courthouse Info</h3>
                        <p className="font-bold">{brokenArrowData.courthouse.name}</p>
                        <p>{brokenArrowData.courthouse.address}</p>
                        <p>Phone: {brokenArrowData.courthouse.phone}</p>
                        <a href={brokenArrowData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Official Website</a>
                        <p className="text-sm text-gray-600 mt-2"><em>{brokenArrowData.courthouse.note}</em></p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Oklahoma Law Compliance</h3>
                        <p>{brokenArrowData.processServingLaw}</p>
                    </div>
                </section>

                 <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Broken Arrow and Beyond</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {brokenArrowData.serviceAreas.map(city => (
                            <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-semibold text-blue-900">{city}</p>
                            </div>
                        ))}
                    </div>
                 </section>

                <section className="bg-white py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {brokenArrowData.faqs.map((faq, index) => (
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

