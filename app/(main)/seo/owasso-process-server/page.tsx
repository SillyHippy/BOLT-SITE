import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Owasso Process Server | Same-Day Service in Tulsa & Rogers County',
  description: 'Professional process server in Owasso, Oklahoma. We offer same-day service for all legal documents. Licensed, bonded, and serving both Tulsa & Rogers Counties.',
  keywords: 'process server owasso, owasso process server, legal document delivery owasso, court papers owasso, subpoena service rogers county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/owasso-process-server'
  },
  openGraph: {
    title: 'Owasso, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Owasso. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/owasso-process-server',
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
    title: 'Owasso, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Owasso? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Owasso',
  description: 'Professional process server for Owasso and surrounding areas in Tulsa and Rogers counties.',
  url: 'https://justlegalsolutions.org/seo/owasso-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Owasso' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'AdministrativeArea', name: 'Rogers County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

const owassoData = {
    history: `Owasso's history began as a settlement in Indian Territory in 1881, growing significantly with the arrival of the railroad. Now a major suburb of Tulsa, Owasso is one of the fastest-growing cities in Oklahoma, known for its strong community and economic development. Its location spanning both Tulsa and Rogers counties presents unique jurisdictional challenges that require an experienced process server.`,
    courthouse: {
        name: 'Owasso Municipal Court',
        address: '111 N Main St, Owasso, OK 74055',
        phone: '(918) 376-1550',
        website: 'https://www.cityofowasso.com/181/Municipal-Court',
        note: 'Owasso is located in both Tulsa and Rogers counties. We are licensed to serve and file documents in both county courthouses as required for your specific case.'
    },
    processServingLaw: `Service of process in Owasso must adhere to Oklahoma State Statutes. Because the city is in two counties, it is crucial to verify the case jurisdiction and file the Affidavit of Service with the correct county court (either Tulsa or Rogers). We handle this verification to ensure your service is legally sound.`,
    serviceAreas: [
        'Downtown Owasso',
        'Smith Farm',
        'The Lakes at Bailey Ranch',
        'Coffee Creek',
        'Highway 169 Corridor',
        'Rural Owasso addresses'
    ],
    faqs: [
        {
            q: 'The person I need to serve lives in the Rogers County part of Owasso. Can you handle that?',
            a: 'Yes. We are fully licensed to serve in both Tulsa and Rogers counties. We regularly handle cross-county serves for Owasso residents and ensure the Affidavit of Service is filed correctly with the appropriate court.'
        },
        {
            q: 'How do you handle service in newer, large residential developments in Owasso?',
            a: 'Our process servers are familiar with the layouts of new developments like Smith Farm and Bailey Ranch. We use professional and legal methods to effectuate service in a discreet and timely manner.'
        },
        {
            q: 'What is your turnaround time for standard service in Owasso?',
            a: 'Standard service in Owasso is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters.'
        }
    ]
};

export default function OwassoProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-20 pt-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Owasso, Oklahoma Process Server</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Expert Legal Document Delivery in Tulsa & Rogers Counties</p>
            </div>
        </div>

        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Owasso</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {owassoData.history}
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Local Courthouse Info</h3>
                        <p className="font-bold">{owassoData.courthouse.name}</p>
                        <p>{owassoData.courthouse.address}</p>
                        <p>Phone: {owassoData.courthouse.phone}</p>
                        <a href={owassoData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Official Website</a>
                        <p className="text-sm text-gray-600 mt-2"><em>{owassoData.courthouse.note}</em></p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Oklahoma Law Compliance</h3>
                        <p>{owassoData.processServingLaw}</p>
                    </div>
                </section>

                 <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Owasso</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        {owassoData.serviceAreas.map(city => (
                            <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-semibold text-blue-900">{city}</p>
                            </div>
                        ))}
                    </div>
                 </section>

                <section className="bg-white py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {owassoData.faqs.map((faq, index) => (
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

