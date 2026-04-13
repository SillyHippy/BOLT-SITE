import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Process Server Near Me — Tulsa, Broken Arrow & All 77 OK Counties',
  description: 'Find a licensed process server near you in Oklahoma. Same-day service from $60. Tulsa, Broken Arrow, OKC & all 77 counties. GPS-tracked. Call (539) 367-6832.',
  keywords: 'process server near me, process server near me oklahoma, process server tulsa ok, local process server, find process server, oklahoma process server, process serving near me',
  alternates: { canonical: 'https://justlegalsolutions.org/process-server-near-me' },
  openGraph: {
    title: 'Process Server Near Me — Tulsa, Broken Arrow & All 77 OK Counties',
    description: 'Find a licensed process server near you in Oklahoma. Same-day service from $60. GPS-tracked. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/process-server-near-me',
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const serviceAreas = [
  { region: 'Tulsa Metro', cities: [
    { name: 'Tulsa', slug: '/tulsa-process-server', county: 'Tulsa County' },
    { name: 'Broken Arrow', slug: '/service-areas/broken-arrow', county: 'Tulsa/Wagoner County' },
    { name: 'Bixby', slug: '/service-areas/bixby', county: 'Tulsa County' },
    { name: 'Jenks', slug: '/service-areas/jenks', county: 'Tulsa County' },
    { name: 'Owasso', slug: '/service-areas/owasso', county: 'Tulsa County' },
    { name: 'Sand Springs', slug: '/service-areas/sand-springs', county: 'Tulsa County' },
    { name: 'Glenpool', slug: '/service-areas/glenpool', county: 'Tulsa County' },
    { name: 'Sapulpa', slug: '/service-areas/sapulpa', county: 'Creek County' },
    { name: 'Catoosa', slug: '/service-areas/catoosa', county: 'Rogers County' },
    { name: 'Collinsville', slug: '/service-areas/collinsville', county: 'Tulsa County' },
    { name: 'Skiatook', slug: '/service-areas/skiatook', county: 'Osage County' },
    { name: 'Coweta', slug: '/service-areas/coweta', county: 'Wagoner County' },
  ]},
  { region: 'Northeast Oklahoma', cities: [
    { name: 'Claremore', slug: '/service-areas/claremore', county: 'Rogers County' },
    { name: 'Bartlesville', slug: '/service-areas/bartlesville', county: 'Washington County' },
    { name: 'Vinita', slug: '/service-areas/vinita', county: 'Craig County' },
    { name: 'Pryor', slug: '/service-areas/pryor', county: 'Mayes County' },
    { name: 'Wagoner', slug: '/service-areas/wagoner', county: 'Wagoner County' },
    { name: 'Nowata', slug: '/service-areas/nowata', county: 'Nowata County' },
    { name: 'Pawhuska', slug: '/service-areas/pawhuska', county: 'Osage County' },
  ]},
  { region: 'Central & Statewide', cities: [
    { name: 'Oklahoma City', slug: '/service-areas/oklahoma-city', county: 'Oklahoma County' },
    { name: 'Bristow', slug: '/service-areas/bristow', county: 'Creek County' },
    { name: 'Kellyville', slug: '/service-areas/kellyville', county: 'Creek County' },
  ]},
];

const countyLinks = [
  'Adair','Alfalfa','Atoka','Beaver','Beckham','Blaine','Bryan','Caddo','Canadian','Carter',
  'Cherokee','Choctaw','Cimarron','Cleveland','Coal','Comanche','Cotton','Craig','Creek','Custer',
  'Delaware','Dewey','Ellis','Garfield','Garvin','Grady','Grant','Greer','Harmon','Harper',
  'Haskell','Hughes','Jackson','Jefferson','Johnston','Kay','Kingfisher','Kiowa','Latimer','Le Flore',
  'Lincoln','Logan','Love','Major','Marshall','Mayes','McClain','McCurtain','McIntosh','Murray',
  'Muskogee','Noble','Nowata','Okfuskee','Oklahoma','Okmulgee','Osage','Ottawa','Pawnee','Payne',
  'Pittsburg','Pontotoc','Pottawatomie','Pushmataha','Roger Mills','Rogers','Seminole','Sequoyah',
  'Stephens','Texas','Tillman','Tulsa','Wagoner','Washington','Washita','Woods','Woodward'
];

export default function ProcessServerNearMePage() {
  return (
    <>
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/process-server-near-me"
        title="Process Server Near Me — Tulsa, Broken Arrow & All 77 OK Counties"
        description="Find a licensed process server near you in Oklahoma. Same-day service from $60."
        serviceDetails={{
          name: 'Process Server Near Me — Oklahoma',
          description: 'Licensed process server serving all 77 Oklahoma counties including Tulsa, Broken Arrow, OKC, and surrounding areas.',
          price: '$60-$200',
          areaServed: ['Tulsa', 'Broken Arrow', 'Bixby', 'Jenks', 'Owasso', 'Oklahoma City', 'All 77 Oklahoma Counties'],
          serviceType: ['Process Serving', 'Legal Document Delivery', 'Skip Tracing'],
        }}
        organizationDetails={{
          name: 'Just Legal Solutions',
          url: 'https://justlegalsolutions.org',
          logo: 'https://justlegalsolutions.org/email%20signature%20logo.png',
          contactPoint: { telephone: '(539) 367-6832', email: 'info@justlegalsolutions.org' },
          address: { streetAddress: '564 E 138th PL', addressLocality: 'Glenpool', addressRegion: 'OK', postalCode: '74033', addressCountry: 'US' },
        }}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156, bestRating: 5, worstRating: 1 }}
        location={{ name: "Just Legal Solutions", geo: { latitude: 36.1540, longitude: -95.9928 } }}
        faqItems={[
          { question: 'How do I find a process server near me in Oklahoma?', answer: 'Just Legal Solutions serves all 77 Oklahoma counties. Call (539) 367-6832 for same-day service anywhere in the state.' },
          { question: 'What is the closest process server to Tulsa?', answer: 'Just Legal Solutions is based in the Tulsa metro (Glenpool, OK) and serves all Tulsa County cities including Broken Arrow, Bixby, Jenks, and Owasso.' },
          { question: 'How much does a process server near me cost in Oklahoma?', answer: 'Standard service starts at $60. Rush service is $100 and same-day emergency service is $150. No hidden fees.' },
          { question: 'Do you serve documents on weekends or after hours?', answer: 'Yes. Just Legal Solutions offers 24/7 emergency service including Sundays and holidays.' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeoCoordinates",
          "latitude": 36.1540,
          "longitude": -95.9928,
          "name": "Just Legal Solutions — Process Server Oklahoma",
          "address": { "@type": "PostalAddress", "addressLocality": "Glenpool", "addressRegion": "OK", "postalCode": "74033", "addressCountry": "US" }
        })}}
      />

      <div className="min-h-screen bg-white font-sans">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/40 border border-blue-400/30 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              📍 Serving All 77 Oklahoma Counties — Fast
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Process Server<br />
              <span className="text-yellow-400">Near You in Oklahoma</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Licensed, bonded, and GPS-tracked. Same-day service from <strong className="text-white">$60</strong> anywhere in Oklahoma — Tulsa, Broken Arrow, OKC, and all 77 counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all"
              >
                📞 (539) 367-6832 — Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                Get a Free Quote →
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-200">
              <span>✓ All 77 OK Counties</span>
              <span>✓ Same-Day Available</span>
              <span>✓ Licensed & Bonded</span>
              <span>✓ GPS-Tracked Service</span>
              <span>✓ 4.9★ Rating (156 reviews)</span>
            </div>
          </div>
        </section>

        {/* Direct Answer */}
        <section className="bg-blue-50 border-y border-blue-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Looking for a process server near you in Oklahoma?</strong> Just Legal Solutions is a licensed and bonded Oklahoma process server based in the Tulsa metro area, serving clients across all 77 counties. Standard process serving starts at <strong>$60</strong>, with same-day emergency service available statewide. Call <strong>(539) 367-6832</strong> and we can typically dispatch within hours.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Service Rates — No Hidden Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Standard', price: '$60', time: 'Within 10 business days', note: 'Up to 3 attempts', color: 'border-gray-200' },
                { name: 'Rush', price: '$100', time: 'Within 72 hours', note: 'Priority handling', color: 'border-blue-300' },
                { name: 'Same-Day', price: '$150', time: 'Within 24 hours', note: '⭐ Most popular', color: 'border-yellow-400 shadow-lg' },
              ].map((tier) => (
                <div key={tier.name} className={`bg-white border-2 ${tier.color} rounded-xl p-6 text-center`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name} Service</h3>
                  <p className="text-4xl font-bold text-blue-700 mb-1">{tier.price}</p>
                  <p className="text-sm text-gray-500 mb-3">starting price</p>
                  <p className="text-gray-700 font-medium mb-1">{tier.time}</p>
                  <p className="text-sm text-gray-500">{tier.note}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">Prices are for Tulsa County and nearby areas. Surcharges may apply for distant counties — always quoted upfront.</p>
          </div>
        </section>

        {/* Map Embed */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Us — Serving All of Oklahoma</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416071.8934!2d-96.3104!3d36.1540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e7f%3A0xda618d08a0e9a7b0!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Just Legal Solutions Service Area — Tulsa, Oklahoma"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Based in Glenpool, OK — dispatching across all 77 Oklahoma counties</p>
          </div>
        </section>

        {/* Service Areas by Region */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Cities We Serve Near You</h2>
            <p className="text-center text-gray-600 mb-10">Click any city for dedicated service information and local courthouse details.</p>
            <div className="space-y-10">
              {serviceAreas.map((region) => (
                <div key={region.region}>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-blue-100">{region.region}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {region.cities.map((city) => (
                      <Link
                        key={city.name}
                        href={city.slug}
                        className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-3 text-center transition-all"
                      >
                        <p className="font-semibold text-gray-900 text-sm">{city.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{city.county}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All 77 Counties */}
        <section className="py-14 px-4 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">All 77 Oklahoma Counties Covered</h2>
            <p className="text-center text-blue-200 mb-10">We serve every county in Oklahoma. Click a county for local process serving information.</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {countyLinks.map((county) => (
                <Link
                  key={county}
                  href={`/counties/${county.toLowerCase().replace(/ /g, '-').replace("'", '')}`}
                  className="block bg-blue-800/50 hover:bg-blue-700 border border-blue-700 hover:border-blue-500 rounded-lg px-2 py-2 text-center text-xs font-medium transition-all"
                >
                  {county}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why JLS */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose Just Legal Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '📍', title: 'GPS-Tracked Every Serve', desc: 'Every service attempt is GPS-stamped and time-logged. Your affidavit of service is court-ready and defensible.' },
                { icon: '⚡', title: 'Same-Day Dispatch Available', desc: 'Need papers served today? Call before noon and we\'ll typically dispatch within hours across the Tulsa metro.' },
                { icon: '⚖️', title: 'Licensed & Bonded in Oklahoma', desc: 'Fully licensed under 12 O.S. § 158.1. We carry E&O insurance and are registered with all 77 Oklahoma county courts.' },
                { icon: '💰', title: 'Flat-Rate Pricing, No Surprises', desc: 'Standard from $60, rush $100, same-day $150. You\'re quoted upfront — no mileage fees, no hidden charges.' },
                { icon: '🌙', title: '24/7 Including Weekends', desc: 'Process serving doesn\'t stop at 5 PM. We\'re available evenings, weekends, and holidays for urgent matters.' },
                { icon: '⭐', title: '4.9-Star Rated Across 156 Reviews', desc: 'Trusted by attorneys, law firms, property managers, and individuals across Oklahoma.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I find a licensed process server near me in Oklahoma?',
                  a: 'Call Just Legal Solutions at (539) 367-6832. We\'re licensed, bonded, and GPS-equipped to serve documents anywhere in Oklahoma — from Tulsa to rural counties. We can typically confirm your assignment within the hour.',
                },
                {
                  q: 'What cities and counties does Just Legal Solutions serve?',
                  a: 'We serve all 77 Oklahoma counties. Our primary service area is the Tulsa metro including Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Glenpool, and Sapulpa. We also serve Oklahoma City, Claremore, Bartlesville, and statewide.',
                },
                {
                  q: 'How much does it cost to hire a process server near me in Tulsa?',
                  a: 'Standard process serving in Tulsa County starts at $60 for up to 3 attempts. Rush service (within 72 hours) is $100. Same-day emergency service is $150. All pricing is flat-rate with no hidden fees.',
                },
                {
                  q: 'Can a process server serve papers on a Sunday in Oklahoma?',
                  a: 'Yes. Oklahoma law allows service 7 days a week. Just Legal Solutions offers 24/7 service including Sunday for urgent matters.',
                },
                {
                  q: 'What types of documents can you serve near me?',
                  a: 'We serve all legal documents including summons, subpoenas, divorce papers, eviction notices, small claims documents, protective orders, and federal court documents under FRCP Rule 4.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Hire a Process Server Near You?</h2>
            <p className="text-blue-200 text-lg mb-8">Call us now for same-day service anywhere in Oklahoma. Licensed, bonded, and GPS-tracked.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all">
                📞 (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
                Submit Online →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
