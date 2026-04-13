import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Broken Arrow Process Server | Same-Day Service from $60',
  description: 'Licensed Broken Arrow process server. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving the Rose District, New Town, Forest Ridge & all of Broken Arrow. Call (539) 367-6832.',
  keywords: 'broken arrow process server, process server broken arrow oklahoma, serve papers broken arrow, legal document service broken arrow ok, broken arrow process serving, wagoner county process server, tulsa county process server broken arrow',
  other: {
    'ai-content-type': 'location-service',
    'ai-summary': 'Just Legal Solutions is a licensed process server serving Broken Arrow, Oklahoma. Standard service from $60, rush $100, same-day $150. Covers all Broken Arrow neighborhoods including The Rose District, New Town, South Broken Arrow, and Forest Ridge. GPS-tracked, court-ready affidavits same day. (539) 367-6832.',
    'ai-key-facts': 'Broken Arrow process server, licensed bonded, standard $60, rush $100, same-day $150, GPS-tracked, Wagoner and Tulsa county, 24/7 available, (539) 367-6832',
  },
  alternates: { canonical: 'https://justlegalsolutions.org/broken-arrow-process-server' },
  openGraph: {
    title: 'Broken Arrow Process Server | Same-Day Service from $60',
    description: 'Licensed Broken Arrow process server. Standard from $60, rush $100, same-day $150. GPS-tracked. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/broken-arrow-process-server',
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
};

const neighborhoods = [
  { name: 'The Rose District', desc: 'Historic downtown core, near Broken Arrow Municipal Center' },
  { name: 'New Town', desc: 'Growing commercial and residential northwest corridor' },
  { name: 'South Broken Arrow', desc: 'Established residential neighborhoods and medical district' },
  { name: 'Forest Ridge', desc: 'Upscale northeast Broken Arrow communities' },
  { name: 'Lynn Lane / 71st St Corridor', desc: 'Major commercial and retail district' },
  { name: 'Aspen Creek', desc: 'Newer subdivisions along the south boundary' },
  { name: 'Stone Canyon', desc: 'Master-planned community in south Broken Arrow' },
  { name: 'Adams Crossing', desc: 'Fast-growing southeast Broken Arrow near Wagoner County line' },
];

const faqs = [
  {
    q: 'How much does a process server cost in Broken Arrow, Oklahoma?',
    a: 'Standard process serving in Broken Arrow starts at $60 for up to 3 attempts. Rush service (within 72 hours) is $100. Same-day emergency service is $150. All rates are flat-rate with no hidden mileage fees.',
  },
  {
    q: 'How fast can you serve papers in Broken Arrow?',
    a: 'For standard service, we typically attempt within 2-5 business days. Rush service is attempted within 72 hours. Same-day service is dispatched within hours of your order, subject to availability.',
  },
  {
    q: 'Can you serve documents at the Broken Arrow courthouse?',
    a: 'Yes. We are familiar with the Broken Arrow Municipal Court (220 S 1st St, Broken Arrow, OK 74012) and the Wagoner County Courthouse for cases filed there. We can also file your affidavit of service electronically.',
  },
  {
    q: 'Do you serve papers in all parts of Broken Arrow including south BA and Forest Ridge?',
    a: 'Yes. We serve all Broken Arrow neighborhoods and ZIP codes including 74011, 74012, 74014, and surrounding areas. No additional fee for most of Broken Arrow.',
  },
  {
    q: 'Is Just Legal Solutions licensed to serve papers in Broken Arrow?',
    a: 'Yes. We are fully licensed under Oklahoma Statute 12 O.S. § 158.1 and carry E&O insurance. We serve all types of legal documents including divorce papers, eviction notices, subpoenas, and small claims summons.',
  },
];

export default function BrokenArrowProcessServerPage() {
  return (
    <>
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/broken-arrow-process-server"
        title="Broken Arrow Process Server | Same-Day Service from $60 | Just Legal Solutions"
        description="Licensed Broken Arrow process server. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready."
        serviceDetails={{
          name: 'Process Server — Broken Arrow, Oklahoma',
          description: 'Licensed process server serving Broken Arrow, OK and surrounding Tulsa/Wagoner County areas.',
          price: '$60-$200',
          areaServed: ['Broken Arrow', 'Wagoner County', 'Tulsa County', 'The Rose District', 'Forest Ridge'],
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
        faqItems={faqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      <div className="min-h-screen bg-white font-sans">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Broken Arrow Process Server</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Broken Arrow<br />
              <span className="text-yellow-400">Process Server</span>
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              Licensed, bonded, and GPS-tracked process serving in Broken Arrow, OK. Same-day service from <strong className="text-white">$60</strong>. All neighborhoods. All document types. Court-ready affidavits.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 max-w-2xl mb-8">
              <p className="text-white font-semibold text-lg mb-1">📍 Covering All of Broken Arrow</p>
              <p className="text-blue-200 text-sm">The Rose District · New Town · Forest Ridge · South Broken Arrow · Stone Canyon · All ZIP codes 74011, 74012, 74014</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all">
                📞 (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
                Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* Direct Answer */}
        <section className="bg-blue-50 border-y border-blue-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Need a process server in Broken Arrow, Oklahoma?</strong> Just Legal Solutions provides licensed, GPS-tracked process serving throughout Broken Arrow and all surrounding Tulsa and Wagoner County areas. Standard service starts at <strong>$60</strong> with same-day options available. We serve all document types — divorce papers, eviction notices, subpoenas, protective orders, and more. Call <strong>(539) 367-6832</strong> for same-day dispatch.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Broken Arrow Process Server Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[
                { name: 'Standard', price: '$60', time: 'Up to 10 business days', desc: '3 attempts at varied times', highlight: false },
                { name: 'Rush', price: '$100', time: 'Within 72 hours', desc: 'Priority handling', highlight: false },
                { name: 'Same-Day', price: '$150', time: 'Within 24 hours', desc: '⭐ Most requested', highlight: true },
                { name: 'Triple Rush', price: '$200', time: 'Within 72 hrs', desc: '3 guaranteed attempts', highlight: false },
              ].map((tier) => (
                <div key={tier.name} className={`rounded-xl border-2 p-5 text-center ${tier.highlight ? 'border-yellow-400 bg-yellow-50 shadow-lg' : 'border-gray-200 bg-white'}`}>
                  {tier.highlight && <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">MOST POPULAR</div>}
                  <h3 className="font-bold text-gray-900 mb-1">{tier.name}</h3>
                  <p className={`text-3xl font-bold mb-1 ${tier.highlight ? 'text-blue-700' : 'text-green-600'}`}>{tier.price}</p>
                  <p className="text-xs text-gray-500 mb-2">starting price</p>
                  <p className="font-medium text-gray-700 text-sm mb-1">{tier.time}</p>
                  <p className="text-xs text-gray-500">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">All rates apply to Broken Arrow (ZIP codes 74011, 74012, 74014). Includes GPS-tracked service and court-ready affidavit.</p>
          </div>
        </section>

        {/* Courthouse Info */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Broken Arrow Courthouse Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Broken Arrow Municipal Court</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Address:</strong> 220 S 1st St, Broken Arrow, OK 74012</li>
                  <li><strong>Phone:</strong> (918) 259-8404</li>
                  <li><strong>Hours:</strong> Mon–Fri, 8:00 AM – 5:00 PM</li>
                  <li><strong>Jurisdiction:</strong> Municipal violations within Broken Arrow city limits</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Wagoner County Courthouse</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Address:</strong> 307 E Cherokee St, Wagoner, OK 74467</li>
                  <li><strong>Phone:</strong> (918) 485-4508</li>
                  <li><strong>Hours:</strong> Mon–Fri, 8:00 AM – 5:00 PM</li>
                  <li><strong>Note:</strong> South Broken Arrow (east of Mingo Rd) is in Wagoner County</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Tulsa County Courthouse</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Address:</strong> 500 S Denver Ave, Tulsa, OK 74103</li>
                  <li><strong>Phone:</strong> (918) 596-5000</li>
                  <li><strong>Hours:</strong> Mon–Fri, 8:00 AM – 5:00 PM</li>
                  <li><strong>Note:</strong> West/north Broken Arrow falls within Tulsa County jurisdiction</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">📋 We Handle Court Filings Too</h3>
                <p className="text-gray-700 text-sm">
                  We can eFile your affidavit of service where available in Oklahoma courts, or walk it in to the Tulsa County or Wagoner County courthouse. eFiling is <strong>free where permitted</strong>. In-person filing at Tulsa County is <strong>$35 + court costs</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Broken Arrow Neighborhoods We Serve</h2>
            <p className="text-gray-600 mb-8">We cover all areas of Broken Arrow — no neighborhood surcharges within city limits.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhoods.map((n) => (
                <div key={n.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{n.name}</h3>
                  <p className="text-xs text-gray-500">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Documents We Serve in Broken Arrow</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '📄 Divorce Papers', '🏠 Eviction Notices', '⚖️ Subpoenas', '🛡️ Protective Orders',
                '📋 Small Claims', '🏢 Corporate Service', '💰 Debt Collection', '📝 Summons & Complaints',
                '🏛️ Federal Court Docs', '🔒 Restraining Orders', '👨‍👩‍👧 Family Law', '🏗️ Contractor Disputes',
              ].map((doc) => (
                <div key={doc} className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700">
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why JLS for BA */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Broken Arrow Chooses Just Legal Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🗺️', title: 'Local Knowledge', desc: 'We know every Broken Arrow neighborhood, subdivision, and gated community. No wasted trips.' },
                { icon: '📍', title: 'GPS Every Attempt', desc: 'Coordinates, timestamp, and photos on every service attempt. Your affidavit is bulletproof in court.' },
                { icon: '⚡', title: 'Fast Dispatch', desc: 'Broken Arrow is in our primary service zone. We can often dispatch within 2 hours of your order.' },
                { icon: '📞', title: 'Real-Time Updates', desc: 'We text or call you after every attempt — you\'re never left wondering what happened.' },
                { icon: '⚖️', title: 'Dual County Expertise', desc: 'BA spans Tulsa and Wagoner counties. We know both court systems inside and out.' },
                { icon: '💼', title: 'Volume Discounts for Firms', desc: 'Law firms and property management companies with recurring volume get preferred pricing and invoicing.' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Broken Arrow Process Server FAQ</h2>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Links */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services & Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/tulsa-process-server" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all">
                <h3 className="font-semibold text-blue-800">Tulsa Process Server</h3>
                <p className="text-sm text-gray-600 mt-1">Our full-service Tulsa County money page</p>
              </Link>
              <Link href="/service-areas/broken-arrow" className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
                <h3 className="font-semibold text-gray-800">Broken Arrow Service Area</h3>
                <p className="text-sm text-gray-600 mt-1">Overview of our BA coverage</p>
              </Link>
              <Link href="/pricing" className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
                <h3 className="font-semibold text-gray-800">Full Pricing Guide</h3>
                <p className="text-sm text-gray-600 mt-1">All service types and rates</p>
              </Link>
              <Link href="/process-server-near-me" className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
                <h3 className="font-semibold text-gray-800">Process Server Near Me</h3>
                <p className="text-sm text-gray-600 mt-1">All service areas in Oklahoma</p>
              </Link>
              <Link href="/contact" className="block p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-all">
                <h3 className="font-semibold text-green-800">Request Service Now</h3>
                <p className="text-sm text-gray-600 mt-1">Submit your order online</p>
              </Link>
              <Link href="/oklahoma-process-server-faq" className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
                <h3 className="font-semibold text-gray-800">Oklahoma Process Server FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">Answers to common questions</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Hire a Broken Arrow Process Server?</h2>
            <p className="text-blue-200 text-lg mb-8">Call now or submit online. Same-day service available. Licensed, GPS-tracked, and court-ready.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all">
                📞 (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}} />
    </>
  );
}
