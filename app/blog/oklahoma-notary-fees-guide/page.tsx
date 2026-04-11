import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Oklahoma Notary Fees & Rules 2026 | Complete Guide',
  description: 'Oklahoma notary fees 2026: $5 max per signature under 49 O.S. § 5. Mobile notary travel fees, RON rates, after-hours surcharges & more. Call (539) 367-6832.',
  keywords: 'oklahoma notary fees, how much does notary cost oklahoma, oklahoma notary fee schedule, mobile notary fees tulsa, remote online notarization oklahoma, notary fees 2026, notary fee cap oklahoma, RON notary oklahoma, after hours notary fees',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Notary Fees & Rules 2026 | Complete Guide',
    description: '$5 max per signature for acknowledgments and jurats. Mobile notary travel fees, RON rates, after-hours surcharges & more.',
    url: 'https://justlegalsolutions.org/blog/oklahoma-notary-fees-guide',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Oklahoma Notary Fees 2026 Guide' }],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/blog/oklahoma-notary-fees-guide' },
  other: {
    'article:published_time': '2026-04-07',
    'article:modified_time': '2026-04-07',
    'article:author': 'Joseph Iannazzi',
    'ai-content-type': 'article',
    'ai-summary': 'Complete guide to Oklahoma notary fees in 2026. Maximum $5 per notarial act (49 O.S. § 5), $25 max for RON (49 O.S. § 209). Covers mobile travel fees, after-hours surcharges, acknowledgment vs jurat, and how total costs are calculated.',
    'ai-key-facts': 'Oklahoma notary max fee: $5/act (49 O.S. § 5); RON max: $25/act (49 O.S. § 209); mobile travel fees $25-$75 (not regulated); $10,000 surety bond required; after-hours surcharge $25-$50 typical',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'How much can a notary charge in Oklahoma?',
    answer: 'Under Oklahoma law (49 O.S. § 5), notaries can charge a maximum of $5 per notarial act for acknowledgments, jurats, oaths, and certified copies. This is the fee for the notarization itself — mobile travel fees, after-hours surcharges, and platform fees for RON are separate charges.'
  },
  {
    question: 'How much does a mobile notary cost in Oklahoma?',
    answer: 'A mobile notary visit typically costs $5 per signature (the notary fee) plus a travel fee ranging from $25-$75 depending on distance. After-hours and weekend appointments may add $25-$50. Total cost for a standard mobile notary visit with one signature is typically $30-$80.'
  },
  {
    question: 'What is the RON fee in Oklahoma?',
    answer: 'Remote Online Notarization (RON) fees in Oklahoma typically range from $10-$25 per notarial act, as authorized under 49 O.S. § 209. Additional platform and identity verification fees of $5-$15 may apply. RON allows notarization via secure video conference without travel.'
  },
  {
    question: 'Can a notary charge more than $5 per signature in Oklahoma?',
    answer: 'No. The $5 maximum is set by 49 O.S. § 5 and applies to all traditional notarial acts including acknowledgments, jurats, oaths, and certified copies. However, notaries can charge separate fees for travel, after-hours service, and additional services like document printing or courier delivery.'
  },
  {
    question: 'What is the difference between an acknowledgment and a jurat?',
    answer: 'An acknowledgment verifies that the signer appeared before the notary, was identified, and acknowledged signing voluntarily — used for deeds, contracts, and most legal documents. A jurat requires the signer to sign in the notary\'s presence AND take an oath about the truthfulness of the document — used for affidavits and sworn statements. Both cost $5 max in Oklahoma.'
  },
  {
    question: 'Do hospitals charge extra for notary services?',
    answer: 'Hospitals themselves typically don\'t provide notary services. Mobile notaries who travel to hospitals charge the standard $5 per act plus travel fees. Emergency or after-hours hospital notarizations may include surcharges of $25-$100. Just Legal Solutions offers 24/7 hospital notary services — call (539) 367-6832.'
  },
  {
    question: 'Are notary fees tax deductible?',
    answer: 'Notary fees may be tax deductible if the notarization is for a business purpose, real estate transaction, or legal matter related to income-producing activities. Consult a tax professional for your specific situation. Keep receipts for all notary-related expenses.'
  },
  {
    question: 'How can I find the cheapest notary in Tulsa?',
    answer: 'Banks and credit unions often provide free notary services to account holders. UPS stores and public libraries may offer low-cost notarization. For documents that require professional handling — immigration forms, estate documents, medical directives — choosing an experienced notary like Just Legal Solutions is worth the investment. Call (539) 367-6832 for a free quote.'
  }
];

export default function OklahomaNotaryFeesGuide() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Oklahoma Notary Fees & Rules 2026 | Complete Guide"
        pageDescription="Oklahoma notary fees 2026: $5 max per signature under 49 O.S. § 5. Mobile notary travel fees, RON rates, after-hours surcharges & more."
        pageUrl="https://justlegalsolutions.org/blog/oklahoma-notary-fees-guide"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Notary Services', 'Mobile Notary', 'Remote Online Notarization']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Oklahoma Notary Fees & Rules 2026', url: '/blog/oklahoma-notary-fees-guide' },
        ]}
        articleDetails={{
          headline: 'Oklahoma Notary Fees & Rules 2026 | Complete Guide',
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-07',
          dateModified: '2026-04-07',
          image: 'https://justlegalsolutions.org/og-image.png'
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['oklahoma notary fees', 'notary fee schedule oklahoma', 'mobile notary fees tulsa', 'RON notary oklahoma']}
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
            <span className="text-white font-medium">Oklahoma Notary Fees &amp; Rules 2026</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Oklahoma Notary Fees &amp; Rules — 2026 Complete Guide
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">By</span>
              <span className="text-white font-semibold text-sm">Joseph Iannazzi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Published:</span>
              <span className="text-white font-semibold text-sm">April 7, 2026</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Reading Time:</span>
              <span className="text-white font-semibold text-sm">~12 min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">

            <p><strong>Oklahoma notary fees</strong> are regulated by state law to ensure fair, transparent pricing for notarial services. Whether you need a simple signature notarization, mobile notary service at your location, or Remote Online Notarization (RON), understanding the fee structure helps you budget appropriately and avoid overcharging.</p>

            <p>This comprehensive guide covers everything you need to know about Oklahoma notary fees in 2026 — maximum allowable charges, travel fees, RON pricing, after-hours rates, and how to find affordable notary services in the Tulsa area.</p>

            {/* Quick Answer Box */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: Oklahoma Notary Fee Maximums</h2>
              <div className="space-y-2 text-blue-800">
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>Acknowledgment / Jurat</span><span className="font-bold">$5 max per act</span></div>
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>Oath or Affirmation</span><span className="font-bold">$5 max</span></div>
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>Certified Copy</span><span className="font-bold">$5 max per copy</span></div>
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>Remote Online (RON)</span><span className="font-bold">$25 max per act</span></div>
                <div className="flex justify-between"><span>Mobile Travel Fee</span><span className="font-bold">$25–$75 (not regulated)</span></div>
              </div>
              <p className="text-blue-700 text-sm mt-3">Under 49 O.S. § 5 (traditional) and 49 O.S. § 209 (RON). Travel, after-hours, and additional service fees are separate.</p>
            </div>

            <h2>Oklahoma Notary Fee Schedule (2026)</h2>
            <p>Oklahoma notary fees are governed by the Revised Uniform Law on Notarial Acts (49 O.S. § 1 et seq.), which sets maximum amounts notaries can charge for each notarial act:</p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Notarial Act</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Maximum Fee</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Statute</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Acknowledgment (per signature)', '$5.00', '49 O.S. § 5'],
                    ['Jurat (per signature)', '$5.00', '49 O.S. § 5'],
                    ['Oath or Affirmation', '$5.00', '49 O.S. § 5'],
                    ['Certified Copy', '$5.00', '49 O.S. § 5'],
                    ['Protesting a Bill/Note', '$5.00', '49 O.S. § 5'],
                    ['Certificate and Seal', '$5.00', '49 O.S. § 5'],
                    ['RON Acknowledgment', '$25.00', '49 O.S. § 209'],
                    ['RON Jurat', '$25.00', '49 O.S. § 209'],
                  ].map(([act, fee, statute]) => (
                    <tr key={act} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{act}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{fee}</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-600">{statute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p><strong>Important:</strong> These are <em>maximum</em> fees allowed by law. Notaries may charge less, and many offer package pricing for multiple documents.</p>

            <h2>Understanding Acknowledgments vs. Jurats</h2>
            <p>The two most common notarial acts have different purposes:</p>
            <h3>Acknowledgment ($5 max)</h3>
            <p>Verifies that the signer personally appeared before the notary, was identified, and <strong>acknowledged signing the document voluntarily</strong>. The signer does NOT need to sign in front of the notary — they can pre-sign and acknowledge it later. Used for: deeds, contracts, powers of attorney, and most legal documents.</p>
            <h3>Jurat ($5 max)</h3>
            <p>Requires the signer to <strong>sign in the notary&apos;s presence AND take an oath or affirmation</strong> regarding the truthfulness of the document contents. More restrictive than an acknowledgment. Used for: affidavits, sworn statements, and documents where truthfulness under oath is required.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
              <div className="flex gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Not Sure Which You Need?</h3>
                  <p className="text-amber-800 text-sm">Check your document for instructions. If it says &quot;subscribed and sworn before me,&quot; you need a jurat. If it says &quot;acknowledged before me,&quot; you need an acknowledgment. When in doubt, call <a href="tel:+15393676832" className="font-semibold text-amber-900 hover:underline">(539) 367-6832</a> — we&apos;ll help you determine the correct notarial act.</p>
                </div>
              </div>
            </div>

            <h2>Remote Online Notarization (RON) Fees</h2>
            <p>Oklahoma authorized Remote Online Notarization in 2020, allowing notaries to perform notarizations via secure video conference. RON is particularly useful when:</p>
            <ul>
              <li>You can&apos;t travel to a notary (medical, scheduling, or distance reasons)</li>
              <li>You need after-hours or weekend notarization</li>
              <li>You&apos;re out of state but need an Oklahoma notarization</li>
              <li>You need a tamper-evident digital seal</li>
            </ul>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">RON Component</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Typical Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['RON Notarial Act', '$10 – $25'],
                    ['Platform/Technology Fee', '$5 – $15'],
                    ['Identity Verification', '$5 – $10'],
                    ['Total per session (typical)', '$20 – $50'],
                  ].map(([component, fee]) => (
                    <tr key={component} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{component}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Mobile Notary Travel Fees</h2>
            <p>Mobile notaries bring notarization to your home, office, hospital, or other location. While the notarization fee itself is capped at $5, <strong>travel fees are not regulated by state law</strong> and vary by distance and time:</p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Distance</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Typical Travel Fee</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Total (1 signature)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0–10 miles', '$25 – $35', '$30 – $40'],
                    ['10–20 miles', '$35 – $50', '$40 – $55'],
                    ['20–30 miles', '$50 – $75', '$55 – $80'],
                    ['30+ miles', '$75+', '$80+'],
                  ].map(([distance, travel, total]) => (
                    <tr key={distance} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{distance}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right text-gray-900">{travel}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>After-Hours &amp; Weekend Notary Rates</h2>
            <p>Need notarization outside regular business hours? Most mobile notaries add surcharges for non-standard times:</p>
            <ul>
              <li><strong>Before 8:00 AM or after 6:00 PM:</strong> $25–$50 surcharge</li>
              <li><strong>Weekends:</strong> $25–$50 surcharge</li>
              <li><strong>Holidays:</strong> $50–$100 surcharge</li>
              <li><strong>Emergency/Rush (same hour):</strong> $50–$100 surcharge</li>
            </ul>
            <p>At Just Legal Solutions, we offer <Link href="/hospital-notary">24/7 hospital and emergency notary services</Link> because some situations can&apos;t wait for business hours.</p>

            <h2>Where to Get Free or Low-Cost Notary in Oklahoma</h2>
            <p>For simple notarizations, several options offer free or low-cost services:</p>

            <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6 my-8">
              <h3 className="font-bold text-green-900 mb-3">Free &amp; Low-Cost Notary Options</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>✅ <strong>Banks &amp; credit unions</strong> — Often free for account holders</li>
                <li>✅ <strong>AAA offices</strong> — Free for members (basic notarization)</li>
                <li>✅ <strong>Public libraries</strong> — Many Tulsa City-County Library branches offer notary</li>
                <li>✅ <strong>UPS Store / FedEx Office</strong> — Typically $5 per signature</li>
                <li>✅ <strong>Law offices</strong> — Many have notaries on staff for clients</li>
              </ul>
              <p className="text-green-700 text-sm mt-3"><strong>Caveat:</strong> These options work for simple documents. For immigration forms, medical directives, estate documents, or after-hours needs, a professional mobile notary ensures proper handling.</p>
            </div>

            <h2>How Much Does Notarization Cost for Specific Documents?</h2>
            <p>Here&apos;s what you can expect to pay for common notarization needs in Oklahoma:</p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Document Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900"># Signatures</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Notary Fee</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">With Mobile Travel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Single affidavit', '1', '$5', '$30 – $55'],
                    ['Power of attorney', '1–2', '$5 – $10', '$30 – $60'],
                    ['Real estate deed', '2–4', '$10 – $20', '$35 – $70'],
                    ['Loan closing package', '5–15', '$25 – $75', '$50 – $125'],
                    ['Immigration I-864', '1–3', '$5 – $15', '$30 – $65'],
                    ['Advance directive', '1–2', '$5 – $10', '$30 – $60'],
                    ['Vehicle title transfer', '1–2', '$5 – $10', '$30 – $60'],
                  ].map(([doc, sigs, fee, total]) => (
                    <tr key={doc} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{doc}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right text-gray-600">{sigs}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right text-gray-900">{fee}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Oklahoma Notary Rules You Should Know</h2>
            <p>Several important rules protect both notaries and the public under Oklahoma law:</p>

            <h3>Identification Requirements</h3>
            <p>Notaries must verify the signer&apos;s identity using acceptable government-issued photo ID: driver&apos;s license, state ID, passport, or military ID. The ID must be current and include a photograph and signature.</p>

            <h3>Surety Bond Requirement</h3>
            <p>All Oklahoma notaries must maintain a <strong>$10,000 surety bond</strong> (49 O.S. § 2) to protect the public from notary errors or misconduct. This bond does NOT cover the notary — it compensates people who suffer financial loss due to the notary&apos;s improper acts.</p>

            <h3>Journal Requirements</h3>
            <p>While Oklahoma doesn&apos;t strictly mandate a notary journal for traditional notarizations, it is <strong>strongly recommended</strong> as a best practice. RON notarizations require recording the video session. Just Legal Solutions maintains detailed journals for every notarization.</p>

            <h3>Prohibited Actions</h3>
            <ul>
              <li>Notaries <strong>cannot notarize their own signature</strong></li>
              <li>Notaries <strong>cannot provide legal advice</strong> or practice law</li>
              <li>Notaries <strong>cannot notarize without the signer present</strong> (traditional) or on video (RON)</li>
              <li>Notaries <strong>cannot charge more than the statutory maximum</strong></li>
              <li>Notaries <strong>cannot refuse service based on protected characteristics</strong></li>
            </ul>

            <h2>How to Avoid Notary Fee Overcharges</h2>
            <p>Protect yourself from overcharging:</p>
            <ul>
              <li><strong>Ask for a complete quote upfront</strong> — including notary fees, travel, and surcharges</li>
              <li><strong>Know the legal maximums</strong> — $5 traditional, $25 RON per act</li>
              <li><strong>Count your signatures</strong> — you&apos;re charged per signature, not per document</li>
              <li><strong>Clarify travel fees</strong> — ensure they&apos;re reasonable for the distance</li>
              <li><strong>Get it in writing</strong> — reputable notaries provide clear pricing before service</li>
              <li><strong>Report overcharging</strong> — Contact the Oklahoma Secretary of State if you believe a notary violated fee rules</li>
            </ul>

            <hr />
            <p className="text-sm text-gray-500"><em>Disclaimer: This guide provides general information about Oklahoma notary fees and is current as of April 2026. Fees and regulations may change. Consult the Oklahoma Secretary of State or the full text of 49 O.S. § 1 et seq. for the most current information. This is not legal advice.</em></p>
          </article>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/tulsa-process-server" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Tulsa Process Server — Same-Day from $60</span>
                <p className="text-sm text-gray-600 mt-1">Licensed Tulsa process server for all document types. GPS-tracked, court-ready affidavits.</p>
              </Link>
              <Link href="/mobile-notary" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Mobile Notary Services</h3>
                <p className="text-gray-600 text-sm mt-2">We come to you — Tulsa metro, 24/7 hospital visits, after-hours appointments.</p>
              </Link>
              <Link href="/notary-faqs" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Notary FAQs</h3>
                <p className="text-gray-600 text-sm mt-2">Common questions about Oklahoma notary services — answered.</p>
              </Link>
              <Link href="/hospital-notary" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Hospital Notary Services</h3>
                <p className="text-gray-600 text-sm mt-2">24/7 bedside notarization for advance directives, POA, and medical documents.</p>
              </Link>
              <Link href="/immigration-document-notary-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Immigration Document Notary</h3>
                <p className="text-gray-600 text-sm mt-2">USCIS form notarization — I-130, I-485, I-751, I-864 and more.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Notary in Tulsa?</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">Transparent pricing. No surprises. Standard $5 per act + reasonable travel fees. Available 24/7 for hospitals and emergencies.</p>
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
