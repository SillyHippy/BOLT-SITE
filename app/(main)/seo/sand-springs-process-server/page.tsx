import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Glenpool Process Server | Same-Day Service in Tulsa County, OK',
  description: 'Top-rated process server in Glenpool, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa County.',
  keywords: 'process server glenpool, glenpool process server, legal document delivery glenpool, court papers glenpool, subpoena service tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/glenpool-process-server'
  },
  openGraph: {
    title: 'Glenpool, OK Process Server | Just Legal Solutions',
    description: 'Reliable and fast process serving in Glenpool. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/glenpool-process-server',
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
    title: 'Glenpool, OK Process Server | Same-Day & Rush Service',
    description: 'Need a process server in Glenpool? We offer professional, same-day service for all legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Glenpool',
  description: 'Professional process server for Glenpool and surrounding areas in Tulsa County.',
  url: 'https://justlegalsolutions.org/seo/glenpool-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'City', name: 'Glenpool' },
    { '@type': 'AdministrativeArea', name: 'Tulsa County' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

const glenpoolData = {
    history: `Glenpool is famously known as "The Town that Made Tulsa Famous" after the discovery of the Glenn Pool Oil Reserve in 1905, one of the largest oil fields in world history. This discovery transformed the entire region. Today, Glenpool is a growing community with a mix of historic sites and modern development, requiring a process server who understands its unique layout.`,
    courthouse: {
        name: 'Glenpool Municipal Court (City Hall)',
        address: '1220 W 141st St, Glenpool, OK 74033',
        phone: '(918) 322-5442',
        website: 'https://glenpoolonline.com/163/Municipal-Court',
        note: 'All major civil cases for Glenpool residents are filed at the Tulsa County Courthouse in downtown Tulsa.'
    },
    processServingLaw: `Service of process in Glenpool falls under the jurisdiction of Tulsa County and is governed by Oklahoma State Statutes. This requires that service be made by a licensed, disinterested party. We ensure every serve is legally compliant and provide a notarized Affidavit of Service for the Tulsa County District Court.`,
    serviceAreas: [
        'Downtown Glenpool',
        'Black Gold Park area',
        'Glenpool South',
        'Liberty Park',
        'Highway 75 corridor',
        'Rural Glenpool addresses'
    ],
    faqs: [
        {
            q: 'How quickly can you serve papers near the Glenpool Conference Center?',
            a: 'We can provide rush or same-day service to businesses and individuals along the busy Highway 75 corridor, including the area around the Glenpool Conference Center. Our local servers know the area well to ensure prompt delivery.'
        },
        {
            q: 'Do you serve documents in the rural areas outside of Glenpool city limits?',
            a: 'Yes, our service area includes all of Glenpool and its surrounding rural routes. We are equipped to handle serves at properties that may have non-standard addresses or are difficult to locate.'
        },
        {
            q: 'What is your process for serving an employee at one of the industrial businesses in Glenpool?',
            a: 'We handle service at places of employment with professionalism and discretion. We follow all company protocols and ensure the documents are delivered privately to the individual to minimize any disruption.'
        }
    ]
};

export default function GlenpoolProcessServer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-20 pt-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Glenpool, Oklahoma Process Server</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service in the Heart of Tulsa County</p>
            </div>
        </div>

        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Glenpool</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {glenpoolData.history}
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Local Courthouse Info</h3>
                        <p className="font-bold">{glenpoolData.courthouse.name}</p>
                        <p>{glenpoolData.courthouse.address}</p>
                        <p>Phone: {glenpoolData.courthouse.phone}</p>
                        <a href={glenpoolData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Official Website</a>
                        <p className="text-sm text-gray-600 mt-2"><em>{glenpoolData.courthouse.note}</em></p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Oklahoma Law Compliance</h3>
                        <p>{glenpoolData.processServingLaw}</p>
                    </div>
                </section>

                 <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Glenpool</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        {glenpoolData.serviceAreas.map(city => (
                            <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-semibold text-blue-900">{city}</p>
                            </div>
                        ))}
                    </div>
                 </section>

                <section className="bg-white py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {glenpoolData.faqs.map((faq, index) => (
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

