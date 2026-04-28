import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Mobile Notary in Tulsa — When, Why, and How Much (2026)',
  description: 'Mobile notary Tulsa 2026 guide: hospital, jail, nursing home, business, and after-hours visits. Pricing starts at $25 per act + travel. RON alternative under 49 O.S. § 209 explained.',
  keywords: 'mobile notary tulsa, mobile notary near me, hospital notary tulsa, after hours notary oklahoma, RON tulsa, jail notary, nursing home notary',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Mobile Notary in Tulsa — When, Why, and How Much',
    description: 'Hospital, jail, nursing-home, business, after-hours mobile notary in Tulsa metro. Starts at $25/act + travel.',
    url: 'https://justlegalsolutions.org/blog/mobile-notary-tulsa-guide',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp', width: 1200, height: 630, alt: 'Mobile Notary in Tulsa 2026 Guide' }],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/blog/mobile-notary-tulsa-guide' },
  other: {
    'article:published_time': '2026-04-19',
    'article:modified_time': '2026-04-19',
    'article:author': 'Joseph Iannazzi',
    'ai-content-type': 'article',
    'ai-summary': 'Complete 2026 guide to mobile notary services in Tulsa. Mobile notary covers hospital, jail, nursing home, business, and after-hours visits. Pricing starts at $25 per act plus travel. Notary fees capped at $5/act under 49 O.S. § 5; RON is authorized under 49 O.S. § 209 with a $25 cap. Same-day appointments and 24/7 emergency coverage available.',
    'ai-key-facts': 'Mobile notary in Tulsa starts at $25/act + travel; in-office notary starts at $20; statutory cap $5/act under 49 O.S. § 5; RON authorized under 49 O.S. § 209 with $25 cap; $10,000 surety bond required (49 O.S. § 2); same-day and after-hours availability.',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is a mobile notary in Tulsa?',
    answer: 'A mobile notary is a commissioned Oklahoma notary who travels to your location — home, office, hospital, nursing home, jail, or coffee shop — to perform notarial acts under 49 O.S. § 5. Mobile notaries are useful when you cannot easily travel, when you need after-hours service, or when the signer is bedridden or in custody.'
  },
  {
    question: 'How much does a mobile notary cost in Tulsa?',
    answer: 'Mobile notary services with Just Legal Solutions start at $25 per notarial act plus travel. The $5 statutory cap under 49 O.S. § 5 applies to the notarial act itself; the additional fee covers travel time, mileage, and after-hours availability. In-office notary appointments start at $20.'
  },
  {
    question: 'When does mobile notary make sense vs. coming to your office?',
    answer: 'Mobile notary makes sense when the signer cannot travel (hospital, hospice, mobility limits), when the documents are time-sensitive and you cannot leave work, when multiple signers need to be in one room, when the signer is in custody, or when the appointment falls outside business hours. For routine single-signer notarizations during business hours, in-office service (starts at $20) is typically the best value.'
  },
  {
    question: 'Do you do hospital and nursing-home notary visits?',
    answer: 'Yes. We perform hospital, hospice, nursing-home, and rehabilitation-facility notary visits across the Tulsa metro and surrounding counties. Common documents include advance directives, healthcare powers of attorney, financial powers of attorney, do-not-resuscitate (DNR) forms, and last-minute estate documents. After-hours and weekend visits are available — call (539) 367-6832.'
  },
  {
    question: 'What do I need to have ready for a mobile notary appointment?',
    answer: 'Have ready: the unsigned document(s), a current government-issued photo ID for every signer (driver license, state ID, passport, or military ID), any required witnesses (some documents need two), and payment method. Do not sign in advance unless the document specifically calls for an acknowledgment of a prior signature — most jurats require signing in the notary\'s presence.'
  },
  {
    question: 'What is RON and is it cheaper than mobile notary?',
    answer: 'Remote Online Notarization (RON) is authorized in Oklahoma under 49 O.S. § 209 with a $25 cap on the notarial act. RON happens by secure video conference — no travel required. RON often costs $25–$50 total, which can be cheaper than a mobile visit when distance is a factor. RON is a great fit for healthy signers who can use a webcam; it is not a fit for hospital bedside or signers without ID/tech access.'
  },
  {
    question: 'How quickly can a mobile notary get to me in Tulsa?',
    answer: 'For standard appointments, we book 1–2 hours in advance most days. Same-day and same-hour appointments are usually possible across the Tulsa metro. After-hours, weekend, and emergency hospital visits are available 24/7 — though emergency surcharges apply. Call (539) 367-6832 and we will give you a confirmed window.'
  },
  {
    question: 'Are mobile notary visits limited to Tulsa city limits?',
    answer: 'No. We cover the entire Tulsa metro — Tulsa, Broken Arrow, Bixby, Jenks, Glenpool, Sand Springs, Owasso, Sapulpa — and we routinely serve surrounding counties (Creek, Wagoner, Rogers, Osage, Okmulgee). For visits beyond a 30–40 mile radius, a small additional travel charge may apply, disclosed before booking.'
  }
];

export default function MobileNotaryTulsaGuide() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Mobile Notary in Tulsa — When, Why, and How Much (2026)"
        pageDescription="Mobile notary Tulsa 2026 guide: hospital, jail, nursing home, business, and after-hours visits. Pricing starts at $25 per act + travel."
        pageUrl="https://justlegalsolutions.org/blog/mobile-notary-tulsa-guide"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Mobile Notary', 'Remote Online Notarization', 'Hospital Notary']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Mobile Notary in Tulsa', url: '/blog/mobile-notary-tulsa-guide' },
        ]}
        articleDetails={{
          headline: 'Mobile Notary in Tulsa — When, Why, and How Much',
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
          image: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp'
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['mobile notary tulsa', 'hospital notary tulsa', 'after hours notary oklahoma', 'RON tulsa', 'mobile notary near me']}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Mobile Notary in Tulsa</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Mobile Notary in Tulsa — When, Why, and How Much
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">By</span>
              <span className="text-white font-semibold text-sm">Joseph Iannazzi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Published:</span>
              <span className="text-white font-semibold text-sm">April 19, 2026</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Reading Time:</span>
              <span className="text-white font-semibold text-sm">~10 min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">

            <p>Sometimes you simply cannot get to a notary — you are in the hospital, the document is due tomorrow, the only signer with a pen is in custody, or your closing got rescheduled to 7 p.m. on a Saturday. <strong>Mobile notary</strong> exists to solve exactly those problems. A commissioned Oklahoma notary travels to you, performs the notarial act, and leaves you with a document that is good to file or record.</p>

            <p>This 2026 guide covers when mobile notary makes sense in the Tulsa metro, what it costs, what to have ready, how it differs from in-office and Remote Online Notarization (RON), and how to schedule an appointment that actually fits your day.</p>

            {/* Quick Answer Box */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: Mobile Notary in Tulsa</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>📍 <strong>Coverage:</strong> Tulsa metro + surrounding counties (Creek, Wagoner, Rogers, Osage, Okmulgee)</li>
                <li>💵 <strong>Pricing:</strong> starts at $25 per act + travel (in-office starts at $20)</li>
                <li>🛏 <strong>Locations:</strong> home, office, hospital, hospice, nursing home, jail, coffee shop</li>
                <li>⏰ <strong>Availability:</strong> same-day, after-hours, weekends, holidays</li>
                <li>💻 <strong>RON alternative:</strong> $25 cap under 49 O.S. § 209</li>
              </ul>
              <p className="text-blue-700 text-sm mt-3">See full pricing at <Link href="/pricing" className="underline">/pricing</Link>.</p>
            </div>

            <h2>When Mobile Notary Makes Sense</h2>
            <p>Mobile notary is the right choice in any of these situations:</p>
            <h3>Hospital and Healthcare Settings</h3>
            <p>Hospital, hospice, rehab, and nursing-home stays often produce urgent paperwork: advance directives, healthcare POAs, financial POAs, DNR forms, and last-minute estate documents. We come to the bedside, work with nursing staff to confirm capacity, and complete the notarization without disrupting care.</p>
            <h3>Jail and Custody</h3>
            <p>Documents for incarcerated signers — vehicle title transfers, custody papers, financial authorizations — typically require a notary visit. We coordinate with facility staff and follow visitation rules.</p>
            <h3>Business and Professional Settings</h3>
            <p>Office signings for HR documents, vendor agreements, real estate forms, and corporate authorizations are easier when the notary comes to you. No employee leaves the building, no signers wait in a lobby.</p>
            <h3>Time-Sensitive or After-Hours</h3>
            <p>Filings due tomorrow, documents that closed late, mortgage signings outside 9–5, and weekend emergencies all benefit from a mobile visit. We schedule around your timeline.</p>
            <h3>Multiple Signers in One Place</h3>
            <p>Estate planning, real estate, and business deals often need three to six signatures from people who are not all going to drive across town. One mobile visit at the right location finishes the whole stack.</p>

            <h2>Tulsa Metro Coverage Areas</h2>
            <p>We routinely serve:</p>
            <ul>
              <li>Tulsa, Broken Arrow, Bixby, Jenks, Glenpool, Sand Springs, Owasso, Sapulpa, Catoosa</li>
              <li>Creek, Wagoner, Rogers, Osage, and Okmulgee counties</li>
              <li>Major Tulsa hospitals: Saint Francis, Hillcrest, Ascension St. John, OSU Medical Center, Saint Francis South</li>
              <li>Tulsa County Jail and surrounding facility visits</li>
              <li>Long-term care facilities throughout the metro</li>
            </ul>
            <p>Outside the metro? We serve all 77 Oklahoma counties — distance pricing is disclosed before booking.</p>

            <h2>Mobile Notary Pricing in Tulsa</h2>
            <p>Oklahoma caps the notarial act fee at <strong>$5 per act under 49 O.S. § 5</strong>. Mobile pricing covers the act plus travel time, mileage, scheduling, and after-hours availability. With Just Legal Solutions, mobile notary services start at $25 per act plus travel.</p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Service</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Starts At</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['In-Office Notary', '$20', 'Mon–Fri 8am–6pm'],
                    ['Mobile Notary / RON', '$25', 'per act, travel may apply'],
                    ['Hospital / Nursing Home', '$25 + travel', 'Same-day and after-hours common'],
                    ['Jail Visit', '$25 + travel', 'Coordinated with facility'],
                    ['After-Hours / Weekend', 'add $25–$75', 'Typical surcharge range'],
                    ['Holiday / Emergency', 'add $50–$100', 'Same-hour response available'],
                  ].map(([service, price, notes]) => (
                    <tr key={service} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{service}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{price}</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-600">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>For the full Oklahoma notary fee structure, see our <Link href="/blog/oklahoma-notary-fees-guide">Oklahoma notary fees guide</Link>.</p>

            <h2>RON — When Remote Beats Mobile</h2>
            <p>Oklahoma authorized <strong>Remote Online Notarization under 49 O.S. § 209</strong> with a $25 cap. RON happens by secure video conference: the signer joins from a webcam, ID is verified electronically, and the notary signs and seals digitally. RON is a great fit when:</p>
            <ul>
              <li>The signer is healthy and comfortable using a computer</li>
              <li>Distance would make a mobile visit expensive</li>
              <li>The document accepts a digital seal (most do; some still require ink)</li>
              <li>Multiple signers are in different cities</li>
            </ul>
            <p>RON is not a fit for hospital bedside, signers without compatible devices, or documents that explicitly require an ink seal. Read our <Link href="/blog/ron-vs-mobile-notary-oklahoma">RON vs. mobile notary comparison</Link> to choose the right format.</p>

            <h2>What to Have Ready</h2>
            <p>To make the appointment fast and painless, please have:</p>
            <ul>
              <li><strong>The document(s)</strong> — printed and unsigned (do not sign before the notary arrives unless the document is a pre-signed acknowledgment of an old signature)</li>
              <li><strong>Government-issued photo ID</strong> for every signer — driver license, state ID, passport, or military ID, unexpired with photo and signature</li>
              <li><strong>Any required witnesses</strong> — some documents (e.g., certain wills and self-proving affidavits) need two adult witnesses unrelated to the signers</li>
              <li><strong>Payment method</strong> — we accept cards, cash, and most app-based payments</li>
              <li><strong>A quiet workspace</strong> — a flat surface with reasonable lighting</li>
            </ul>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
              <div className="flex gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Do Not Sign Before the Notary Arrives</h3>
                  <p className="text-amber-800 text-sm">Most notarizations — especially jurats — require the signer to sign in the notary&apos;s presence. If you sign in advance, the notary may not be able to perform the act and you waste a visit. When in doubt, leave the signature line blank and let us guide you. Call <a href="tel:+15393676832" className="font-semibold text-amber-900 hover:underline">(539) 367-6832</a>.</p>
                </div>
              </div>
            </div>

            <h2>How Scheduling Works</h2>
            <ol>
              <li><strong>Call or text</strong> (539) 367-6832 with the document type, location, signer count, and preferred window.</li>
              <li><strong>We confirm availability</strong> and send a written quote — flat rate for the act plus disclosed travel.</li>
              <li><strong>You receive a calendar confirmation</strong> with arrival window.</li>
              <li><strong>Notary arrives</strong>, verifies ID, performs the notarization, and provides receipts.</li>
              <li><strong>You leave</strong> with documents ready to file, record, or submit.</li>
            </ol>

            <h2>Common Mobile Notary Documents</h2>
            <ul>
              <li>Advance directives, healthcare POA, financial POA — see <Link href="/blog/power-of-attorney-guide-oklahoma">our POA guide</Link></li>
              <li>Wills and self-proving affidavits — see <Link href="/blog/estate-planning-notarization-oklahoma">estate planning notarization</Link></li>
              <li>Real estate deeds, quitclaims, and affidavits</li>
              <li>Vehicle title transfers</li>
              <li>Loan signing packages — see <Link href="/blog/loan-signing-agent-oklahoma">our loan signing agent guide</Link></li>
              <li>Apostille-bound documents — see <Link href="/blog/how-to-apostille-document-oklahoma">how to apostille a document</Link></li>
              <li>Immigration affidavits and translations</li>
              <li>Sworn statements and declarations</li>
            </ul>

            <h2>Why Choose a Professional Mobile Notary</h2>
            <p>Banks and chain stores can handle simple single-signature notarizations during business hours. For everything else — bedside visits, multi-signer estate documents, after-hours signings, time-sensitive filings — a dedicated professional mobile notary is faster, more flexible, and far less likely to send you back for a second visit. We carry the required $10,000 surety bond under 49 O.S. § 2, maintain a journal, and bring the right supplies (extra forms, witnesses on standby when arranged, certified copies on request).</p>
            <p>And because we also offer <Link href="/process-serving">process serving</Link>, court filing, and skip tracing, you have one trusted vendor for the full document lifecycle — from notarization through service and filing.</p>

            <hr />
            <p className="text-sm text-gray-500"><em>Disclaimer: This guide is general information about mobile notary services in Oklahoma current as of April 2026. Notary fees, regulations, and statutes can change. This is not legal advice. For document-specific guidance, consult a licensed Oklahoma attorney.</em></p>
          </article>
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/pricing" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Pricing — Mobile Notary Starts at $25</span>
                <p className="text-sm text-gray-600 mt-1">All mobile, in-office, and RON pricing in one place.</p>
              </Link>
              <Link href="/notary" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Notary Services</h3>
                <p className="text-gray-600 text-sm mt-2">Mobile, in-office, RON, hospital and after-hours visits.</p>
              </Link>
              <Link href="/blog/oklahoma-notary-fees-guide" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Oklahoma Notary Fees Guide</h3>
                <p className="text-gray-600 text-sm mt-2">$5 cap, RON max, travel and surcharge breakdown.</p>
              </Link>
              <Link href="/blog/ron-vs-mobile-notary-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">RON vs. Mobile Notary</h3>
                <p className="text-gray-600 text-sm mt-2">Which format wins for your specific situation.</p>
              </Link>
              <Link href="/blog/loan-signing-agent-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Loan Signing Agents in Oklahoma</h3>
                <p className="text-gray-600 text-sm mt-2">Mortgage and refi closing essentials and pricing.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Mobile Notary in Tulsa?</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">Same-day and after-hours appointments across the Tulsa metro. Mobile notary starts at $25 per act + travel.</p>
              <a href="tel:+15393676832" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                📞 Call (539) 367-6832
              </a>
            </div>
          </section>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
