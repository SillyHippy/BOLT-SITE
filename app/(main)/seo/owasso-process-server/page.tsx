// Speakable Schema for voice search optimization
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Owasso Process Server',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'xpath': [
      '/html/body/div/main/div/section[1]/p',
      '/html/body/div/main/div/section[4]'
    ]
  },
  'url': 'https://justlegalsolutions.org/seo/owasso-process-server'
};
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
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
                {owassoData.history} We also serve neighboring communities, so if you need a process server in <a href="/seo/broken-arrow-process-server" className="text-blue-700 underline">Broken Arrow</a> or <a href="/seo/glenpool-process-server" className="text-blue-700 underline">Glenpool</a>, our team is ready to help.
              </p>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Owasso Courthouse & Local Service Areas</h3>
              <div className="mb-4">
                <strong>{owassoData.courthouse.name}</strong><br />
                {owassoData.courthouse.address}<br />
                <a href={owassoData.courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Municipal Court Website</a><br />
                <span className="text-gray-600 text-sm">{owassoData.courthouse.note}</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Neighborhoods & Service Areas:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {owassoData.serviceAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Oklahoma Process Serving Law in Owasso</h3>
              <p className="text-gray-700 mb-4">{owassoData.processServingLaw}</p>
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
            <section className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact & Service Area Map</h3>
              <div className="mb-6">
                <iframe
                  title="Owasso Oklahoma Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.964234234234!2d-95.8281!3d36.2695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sOwasso%2C%20OK!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Service in Owasso</a>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Related Cities & Internal Links</h3>
              <ul className="list-disc list-inside text-blue-700">
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/glenpool-process-server" className="underline">Glenpool Process Server</a></li>
                <li><a href="/seo/sand-springs-process-server" className="underline">Sand Springs Process Server</a></li>
                <li><a href="/seo/legal-posting-process-server" className="underline">Legal Posting Service</a></li>
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Service</a></li>
              </ul>
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

