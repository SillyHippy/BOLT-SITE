// Speakable Schema for voice search optimization
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Sand Springs Process Server',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'xpath': [
      '/html/body/div/main/div/section[1]/p',
      '/html/body/div/main/div/section[4]'
    ]
  },
  'url': 'https://justlegalsolutions.org/seo/sand-springs-process-server'
};
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

// Removed glenpoolData, not used for Sand Springs page

export default function SandSpringsProcessServer() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold">Sand Springs, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Professional Legal Document Service for Sand Springs and the Tulsa Metro</p>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Sand Springs</h2>
              <p className="text-lg text-gray-700 mb-4">
                Sand Springs is a unique blend of historic neighborhoods and new developments along the Arkansas River. If you need a process server in Sand Springs or nearby <a href="/seo/broken-arrow-process-server" className="text-blue-700 underline">Broken Arrow</a> or <a href="/seo/owasso-process-server" className="text-blue-700 underline">Owasso</a>, our team is ready to help.
              </p>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Sand Springs Courthouse & Local Service Areas</h3>
              <div className="mb-4">
                <strong>Sand Springs Municipal Court</strong><br />
                100 E Broadway St, Sand Springs, OK 74063<br />
                <a href="https://sandspringsok.org/169/Municipal-Court" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Municipal Court Website</a><br />
                <span className="text-gray-600 text-sm">All major civil cases for Sand Springs residents are filed at the Tulsa County Courthouse in downtown Tulsa.</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Neighborhoods & Service Areas:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Prattville</li>
                  <li>Downtown Sand Springs</li>
                  <li>River West</li>
                  <li>Charles Page Blvd</li>
                  <li>Sand Springs North</li>
                  <li>Rural Sand Springs</li>
                </ul>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Oklahoma Process Serving Law in Sand Springs</h3>
              <p className="text-gray-700 mb-4">Service of process in Sand Springs is governed by Oklahoma State Statutes. Our team ensures every serve is legally compliant and provides a notarized Affidavit of Service for the Tulsa County District Court.</p>
            </section>
            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Do you serve gated communities in Sand Springs?</h3>
                  <p className="mt-2 text-gray-700">Yes, our process servers are experienced with the protocols of gated communities and rural addresses in Sand Springs. We use professional and legal methods to gain access and effectuate service discreetly and promptly.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">How fast can you serve papers in Sand Springs?</h3>
                  <p className="mt-2 text-gray-700">Standard service is typically attempted within 24-48 hours and completed within 3-5 business days. Same-day and rush services are available for urgent matters.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Do you serve businesses and schools in Sand Springs?</h3>
                  <p className="mt-2 text-gray-700">Absolutely. We serve all types of locations, including businesses, schools, and public buildings, with professionalism and discretion.</p>
                </div>
              </div>
            </section>
            <section className="bg-blue-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact & Service Area Map</h3>
              <div className="mb-6">
                <iframe
                  title="Sand Springs Oklahoma Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.964234234234!2d-96.1086!3d36.1395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sSand%20Springs%2C%20OK!5e0!3m2!1sen!2sus!4v1689988888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Service in Sand Springs</a>
              </div>
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Related Cities & Internal Links</h3>
              <ul className="list-disc list-inside text-blue-700">
                <li><a href="/seo/broken-arrow-process-server" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/seo/owasso-process-server" className="underline">Owasso Process Server</a></li>
                <li><a href="/seo/glenpool-process-server" className="underline">Glenpool Process Server</a></li>
                <li><a href="/seo/legal-posting-process-server" className="underline">Legal Posting Service</a></li>
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Service</a></li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      <BusinessSchema />
      <ServiceSchema />
      {/* <FAQSchema /> removed to prevent duplicate/stray FAQ rendering at the top */}
    </>
  );
}

