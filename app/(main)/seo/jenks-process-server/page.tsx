import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

// SEO Metadata optimized for the Jenks page
export const metadata: Metadata = {
  title: 'Jenks Process Server | Same-Day Service in Tulsa County, OK',
  description: 'Top-rated process server in Jenks, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa County.',
  keywords: 'process server jenks, jenks process server, legal document delivery jenks, court papers jenks, subpoena service tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/jenks-process-server'
  },
  openGraph: {
    title: 'Jenks, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Jenks. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/jenks-process-server',
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
    title: 'Jenks, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Jenks? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

// Detailed JSON-LD Schema for Jenks Service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Jenks',
  description: 'Professional process server for Jenks and surrounding areas in Tulsa County.',
  url: 'https://justlegalsolutions.org/seo/jenks-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

// --- High-Quality, Unique Local Content for Jenks, OK ---
const jenksData = {
    history: `Once known as the "Antique Capital of Oklahoma," Jenks was founded in 1905 and developed alongside the Arkansas River. It has transformed from a small railroad town into a vibrant suburban community, famed for the Oklahoma Aquarium and its historic, walkable downtown. This unique blend of history and modern growth makes local knowledge crucial for effective process serving.`,
    courthouse: {
        name: 'Jenks City Hall / Municipal Court',
        address: '211 N Elm St, Jenks, OK 74037',
        phone: '(918) 299-5883',
        website: 'https://www.jenks.com/214/Municipal-Court',
        note: 'All major civil cases for Jenks residents are filed at the Tulsa County Courthouse in downtown Tulsa.'
    },
    processServingLaw: `Service of process in Jenks is governed by the Oklahoma Rules of Civil Procedure. This requires that service be made by a licensed, disinterested party over 18. We strictly adhere to these rules, ensuring that every service is legally defensible and properly documented with a notarized Affidavit of Service.`,
    serviceAreas: [
        'Downtown Jenks (Main Street)',
        'River District (near Oklahoma Aquarium)',
        'Elwood Crossing',
        'Southern Lakes',
        'South Tulsa ( bordering Jenks)',
        'Glenpool (neighboring city)',
        'Woodland South',
        'The Reserve at Stonebrooke',
    ],
    faqs: [
        {
            q: 'What are your service hours in Jenks, OK?',
            a: 'Our process servers operate 7 days a week, including early mornings and late evenings, to maximize the chances of successful service in residential areas like Southern Lakes and commercial districts.'
        },
        {
            q: 'How do you handle service at the Oklahoma Aquarium or RiverWalk Crossing?',
            a: 'Serving documents in crowded public places requires discretion. Our servers are trained to handle service professionally and quietly in high-traffic commercial areas to ensure privacy and compliance.'
        },
        {
            q: 'Are you familiar with the local courts for Jenks?',
            a: 'Yes. While we serve documents for any court, we have extensive experience with filings related to the Jenks Municipal Court and the Tulsa County Courthouse, which serves Jenks residents for higher-level civil matters.'
        },
        {
            q: 'What happens if the person I need to serve lives in a gated community in Jenks?',
            a: 'We have proven strategies for legally accessing gated communities in the Jenks area. Our experienced servers understand the necessary procedures to ensure your documents are served legally and without delay.'
        }
    ]
};

export default function JenksProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-20 pt-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Jenks, Oklahoma Process Server</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service in Tulsa County</p>
            </div>
        </div>

        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Jenks</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {jenksData.history}
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Local Courthouse Info</h3>
                        <p className="font-bold">{jenksData.courthouse.name}</p>
                        <p>{jenksData.courthouse.address}</p>
                        <p>Phone: {jenksData.courthouse.phone}</p>
                        <a href={jenksData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Official Website</a>
                        <p className="text-sm text-gray-600 mt-2"><em>{jenksData.courthouse.note}</em></p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Oklahoma Law Compliance</h3>
                        <p>{jenksData.processServingLaw}</p>
                    </div>
                </section>

                 <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Jenks</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {jenksData.serviceAreas.map(city => (
                            <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-semibold text-blue-900">{city}</p>
                            </div>
                        ))}
                    </div>
                 </section>

                <section className="bg-white py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {jenksData.faqs.map((faq, index) => (
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

