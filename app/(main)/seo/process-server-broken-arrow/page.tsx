import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Process Server Broken Arrow, OK | Same-Day Service',
  description: 'Top-rated process server in Broken Arrow, Oklahoma. We offer same-day service for all legal documents, including subpoenas and court papers. Licensed, bonded, and serving Tulsa & Wagoner Counties.',
  keywords: 'process server broken arrow, broken arrow process server, legal document service broken arrow, court papers broken arrow, subpoena service broken arrow oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/process-server-broken-arrow'
  },
  openGraph: {
    title: 'Process Server Broken Arrow, OK | Just Legal Solutions',
    description: 'Reliable and fast process serving in Broken Arrow. We ensure your legal documents are served correctly and on time.',
    url: 'https://justlegalsolutions.org/seo/process-server-broken-arrow',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Process Server Broken Arrow',
  description: 'Professional process server for Broken Arrow and surrounding areas in Tulsa and Wagoner counties.',
  url: 'https://justlegalsolutions.org/seo/process-server-broken-arrow',
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

export default function ProcessServerBrokenArrowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Broken Arrow, Oklahoma Process Server</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Expert Legal Document Delivery in Tulsa & Wagoner Counties</p>
            <div className="flex justify-center mt-8">
              <Image src="/images/broken-arrow-rose-district.jpg" width={600} height={350} alt="Broken Arrow Rose District legal process server" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-blue-100 mt-2">Serving the Rose District and all of Broken Arrow</p>
          </div>
        </div>

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Local Expertise in Broken Arrow</h2>
              <p className="text-lg text-gray-700 mb-4">{brokenArrowData.history}</p>
              <div className="flex justify-center mt-4">
                <Image src="/images/broken-arrow-municipal-court.jpg" width={400} height={166} alt="Broken Arrow Municipal Court building" className="rounded shadow" />
              </div>
              <p className="text-xs text-gray-500 text-center mt-1">Broken Arrow Municipal Court – Trusted for legal document delivery</p>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Community Connection</h3>
              <p className="text-gray-700 mb-2">Just Legal Solutions officially opened in Broken Arrow in 2025, building on legal experience since 2020. We partner with local attorneys, participate in Chamber of Commerce events, and support Broken Arrow’s legal and civic community.</p>
              <p className="text-gray-700">Our team understands the unique needs of Broken Arrow’s neighborhoods and businesses, providing fast, compliant service across Tulsa and Wagoner counties.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Broken Arrow and Beyond</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
                {brokenArrowData.serviceAreas.map(city => (
                  <div key={city} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-semibold text-blue-900">{city}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Image src="/images/forest-ridge-broken-arrow.jpg" width={400} height={250} alt="Forest Ridge neighborhood in Broken Arrow" className="rounded shadow" />
              </div>
              <p className="text-xs text-gray-500 text-center mt-1">Featured Neighborhood: Forest Ridge – Secure, professional process serving</p>
            </section>

            <section className="bg-white py-6 border-b mb-12 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Need a licensed process server in Broken Arrow?</h3>
              <p className="text-gray-800 mb-2">Contact us for same-day legal document service or call for a quote!</p>
              <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Get Started</a>
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
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Do you offer same-day or rush service options in Broken Arrow?</h3>
                  <p className="mt-2 text-gray-700">Yes, we provide same-day and emergency rush service for urgent legal matters throughout Broken Arrow and surrounding areas.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">How do you handle legal document delivery during holidays or inclement weather?</h3>
                  <p className="mt-2 text-gray-700">We monitor weather and holiday schedules closely and communicate with clients to ensure timely, secure delivery, even in challenging conditions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Can you serve documents at workplaces or commercial locations in Broken Arrow?</h3>
                  <p className="mt-2 text-gray-700">Absolutely. We regularly serve legal documents at offices, businesses, and commercial properties throughout Broken Arrow, always with professionalism and discretion.</p>
                </div>
              </div>
            </section>

            <section className="bg-blue-100 py-8 border-t text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Have more Broken Arrow legal questions?</h3>
              <p className="text-gray-800 mb-4">Suggest an FAQ or <a href="/contact" className="underline text-blue-700 font-semibold">contact our experts today</a>!</p>
            </section>

            <section className="py-8 text-center">
              <h4 className="text-lg font-semibold mb-2">Explore More</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/tulsa-process-server" className="text-blue-700 underline font-semibold">Tulsa Process Server</Link>
                <Link href="/courier-services-tulsa" className="text-blue-700 underline font-semibold">Courier Services Tulsa</Link>
                <Link href="/pricing" className="text-blue-700 underline font-semibold">See Pricing</Link>
                <Link href="/contact" className="text-blue-700 underline font-semibold">Contact Us</Link>
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

