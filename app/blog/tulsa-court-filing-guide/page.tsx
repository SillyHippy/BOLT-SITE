import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import AeoProcessServingHubLinks from '@/components/seo/aeo-process-serving-hub-links';

export const metadata: Metadata = {
  title: 'Tulsa County Court Filing Guide — eFiling, Costs & Timelines (2026)',
  description: 'How to file in Tulsa County District Court 2026: OCIS eFiling, civil cover sheets, court fees, document prep, and courier filing service that starts at $25 plus court costs.',
  keywords: 'tulsa county court filing, oklahoma efiling guide, ocis efiling, tulsa district court fees, courier filing service tulsa, civil cover sheet oklahoma, court filing mistakes',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Tulsa County Court Filing Guide — eFiling, Costs & Timelines',
    description: 'OCIS eFiling, court fees, and courier filing in Tulsa County District Court. Court runs start at $25 plus court costs.',
    url: 'https://justlegalsolutions.org/blog/tulsa-court-filing-guide',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp', width: 1200, height: 630, alt: 'Tulsa County Court Filing Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa County Court Filing Guide — eFiling, Costs & Timelines (2026)',
    description: 'How to file in Tulsa County District Court 2026: OCIS eFiling, civil cover sheets, court fees, document prep, and courier filing service that starts at $25 plus court costs.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/blog/tulsa-court-filing-guide' },
  other: {
    'article:published_time': '2026-04-19',
    'article:modified_time': '2026-04-19',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary': 'Practical 2026 guide to filing in Tulsa County District Court. Covers OCIS eFiling, civil cover sheets, fee schedules, document preparation, and common mistakes. Courier and walk-in filing services start at $25 plus court costs and integrate with statewide process serving (starts at $35).',
    'ai-key-facts': 'Tulsa County District Court located at 500 S. Denver Ave; OCIS eFiling system used by Oklahoma Supreme Court Network; standard civil filing fee approximately $200; small claims fee tier lower; courier filing starts at $25 plus court costs; process serving starts at $35.',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'How do I file a case in Tulsa County District Court?',
    answer: 'Most civil cases in Tulsa County are filed through the Oklahoma Court Information System (OCIS) eFiling portal, which is the statewide system maintained by the Oklahoma Supreme Court Network (OSCN). Pro se filers may also walk documents to the Tulsa County Court Clerk at 500 S. Denver Ave. Our courier filing service starts at $25 plus court costs and handles eFiling or walk-in filing for you.'
  },
  {
    question: 'What is OCIS eFiling?',
    answer: 'OCIS is Oklahoma\'s electronic filing system used by district courts statewide. It allows attorneys and self-represented litigants to file petitions, motions, and other documents online, pay fees by card, and receive file-stamped copies electronically. Tulsa County requires eFiling for most attorney-filed civil matters; pro se litigants may file in person or via courier.'
  },
  {
    question: 'How much does it cost to file a civil case in Tulsa County?',
    answer: 'Standard civil filing fees in Tulsa County are typically around $200 (varies by case type), small claims fees scale by the amount in controversy, and there are additional fees for jury demands, summons issuance, and certified copies. Fees change — confirm with the Tulsa County Court Clerk before you file. Our courier service rolls all court costs through to you at cost.'
  },
  {
    question: 'What documents do I need to file a civil case?',
    answer: 'A standard civil filing includes the petition, the civil cover sheet, the summons (one for each defendant), an entry of appearance if represented, and any required exhibits. Some case types require additional forms — for example, family law matters require disclosures and parenting affidavits. We can prepare a filing checklist for your specific case type.'
  },
  {
    question: 'What are the most common Tulsa filing mistakes?',
    answer: 'Top mistakes: missing or incomplete civil cover sheet, wrong filing fee, summons not formatted to match the petition, attorney bar number missing or wrong, unsigned verifications, exhibits not labeled, and missing certificate of service for filings after the petition. Each of these can trigger a clerk rejection and delay your case by days or weeks.'
  },
  {
    question: 'Can a process server file my documents at the courthouse?',
    answer: 'Yes. As a courier and licensed process server, we can walk filings into the Tulsa County courthouse, pay the court costs, get the file-stamped copy, and immediately serve the defendant — eliminating the gap between filing and service. Court runs start at $25 plus court costs; process serving starts at $35.'
  },
  {
    question: 'How quickly can you file a document for me?',
    answer: 'For Tulsa County, same-day filing is available if we receive the documents by mid-morning. Rush courier service starts at $100 for hard deadlines. eFiling can often be completed within hours of receipt. Always tell us about statute deadlines up front so we can prioritize correctly.'
  },
  {
    question: 'Do I have to use eFiling, or can I file paper documents?',
    answer: 'Attorneys are generally required to eFile in Tulsa County District Court for most civil matters. Self-represented litigants may file in person at the court clerk\'s office. Some specialized filings (such as certain protective orders) may have specific procedures — confirm with the clerk or have us handle the run for you.'
  }
];

export default function TulsaCourtFilingGuide() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Tulsa County Court Filing Guide — eFiling, Costs & Timelines (2026)"
        pageDescription="How to file in Tulsa County District Court 2026: OCIS eFiling, civil cover sheets, court fees, document prep, and courier filing service that starts at $25 plus court costs."
        pageUrl="https://justlegalsolutions.org/blog/tulsa-court-filing-guide"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Court Filing', 'Courier Service', 'Process Serving']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Tulsa Court Filing Guide', url: '/blog/tulsa-court-filing-guide' },
        ]}
        articleDetails={{
          headline: 'Tulsa County Court Filing Guide — eFiling, Costs & Timelines',
          author: 'Just Legal Solutions Team',
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
          image: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp'
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['tulsa court filing', 'ocis efiling oklahoma', 'tulsa district court fees', 'courier filing tulsa', 'civil cover sheet oklahoma']}
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
            <span className="text-white font-medium">Tulsa Court Filing Guide</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Tulsa County Court Filing Guide — eFiling, Costs &amp; Timelines
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
              <span className="text-white font-semibold text-sm">~11 min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">

            <p>Filing a case in <strong>Tulsa County District Court</strong> is mostly straightforward — until it isn&apos;t. A missing civil cover sheet, a wrong fee, or a summons that does not match the petition can bounce your filing back and burn days off a critical deadline. This 2026 guide walks through exactly how filing works in Tulsa County, what it costs, what to prepare, and how to avoid the rejections we see most often.</p>

            <p>Whether you are an attorney handling routine civil matters, a small business pursuing a collection, or a self-represented filer trying to keep your case moving, this is the practical playbook. And when you would rather not stand in line, our courier filing service (starts at $25 plus court costs) handles the run for you.</p>

            {/* Quick Answer Box */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: Tulsa County Filing Essentials</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>🏛 <strong>Court:</strong> Tulsa County District Court — 500 S. Denver Ave, Tulsa, OK 74103</li>
                <li>💻 <strong>eFiling:</strong> OCIS / OSCN portal (required for most attorney filings)</li>
                <li>💰 <strong>Civil filing fee:</strong> approx. $200 (varies by case type)</li>
                <li>📑 <strong>Required:</strong> petition, civil cover sheet, summons, fee</li>
                <li>🚚 <strong>Our courier:</strong> starts at $25 plus court costs</li>
              </ul>
              <p className="text-blue-700 text-sm mt-3">See full pricing at <Link href="/pricing" className="underline">/pricing</Link>. Process serving starts at $35 and can be triggered the moment your filing is stamped.</p>
            </div>

            <h2>The Tulsa County District Court at a Glance</h2>
            <p>The Tulsa County District Court is a court of general jurisdiction handling civil, criminal, family, juvenile, and probate matters. The main courthouse is at 500 S. Denver Avenue in downtown Tulsa, with the Court Clerk on the lower floors. Most civil filings are now electronic, but in-person and courier filings are still accepted for self-represented filers and certain document types.</p>

            <h2>OCIS eFiling — The Standard for Most Cases</h2>
            <p>Oklahoma&apos;s statewide electronic filing platform is the <strong>Oklahoma Court Information System (OCIS)</strong>, accessed through the Oklahoma Supreme Court Network (OSCN). For attorneys, OCIS is required for most civil case filings in Tulsa County.</p>

            <h3>How OCIS Filing Works</h3>
            <ol>
              <li>Register an OSCN/OCIS account (one-time)</li>
              <li>Select the case type (civil, family, probate, etc.)</li>
              <li>Upload PDFs of the petition, summons, exhibits, and cover sheet</li>
              <li>Pay the filing fee by credit card</li>
              <li>Receive the file-stamped copy electronically — usually within hours</li>
            </ol>

            <h3>OCIS Tips That Save Time</h3>
            <ul>
              <li>PDFs should be flattened and text-searchable, not scanned image-only</li>
              <li>File names should match the document type (e.g., &quot;Petition.pdf&quot;)</li>
              <li>Save your login &mdash; password resets are slow during deadline crunches</li>
              <li>If a filing is rejected, the clerk usually states the reason &mdash; fix and refile the same day</li>
            </ul>

            <h2>Document Preparation Checklist</h2>
            <p>Before you (or we) hit submit, make sure you have:</p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Document</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Required For</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Common Pitfalls</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Petition', 'All civil cases', 'Wrong jurisdiction, unsigned, missing verification'],
                    ['Civil Cover Sheet', 'All new civil filings', 'Wrong case type code, missing damages amount'],
                    ['Summons', 'All defendants', 'Caption mismatch with petition, wrong response deadline'],
                    ['Filing Fee', 'All new cases', 'Wrong fee amount, expired card'],
                    ['Verification / Affidavits', 'Many family / replevin / protective order cases', 'Missing notary block — see 49 O.S. § 5'],
                    ['Exhibits', 'When referenced in petition', 'Unlabeled, oversized, illegible scans'],
                    ['Certificate of Service', 'Filings after the petition', 'Missing or wrong service method'],
                  ].map(([doc, required, pitfalls]) => (
                    <tr key={doc} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{doc}</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-600">{required}</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-600">{pitfalls}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Tulsa County Court Fee Schedule (Approximate)</h2>
            <p>Court fees change periodically and vary by case type. The numbers below are approximate ranges as of 2026 — always confirm the current schedule with the Tulsa County Court Clerk before filing.</p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Case Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Approximate Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Civil filing (general)', '~$200'],
                    ['Small claims (under $1,500)', '~$60'],
                    ['Small claims ($1,500 – $7,500)', '~$80–$120'],
                    ['Forcible entry / detainer (eviction)', '~$85'],
                    ['Probate', '~$200'],
                    ['Divorce / family law', '~$200+'],
                    ['Jury demand', 'add ~$100'],
                    ['Certified copy (per page)', '~$1'],
                    ['Summons issuance (per defendant)', '~$10'],
                  ].map(([type, fee]) => (
                    <tr key={type} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{type}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>Indigent filers may apply to file in forma pauperis (without paying fees up front) by submitting a financial affidavit.</p>

            <h2>Common Filing Mistakes — and How to Avoid Them</h2>
            <h3>1. Civil Cover Sheet Errors</h3>
            <p>The cover sheet must match the petition exactly — case type, damages amount, parties, and county. Wrong codes cause clerk rejections.</p>
            <h3>2. Summons Mismatches</h3>
            <p>Summons must list every defendant exactly as named in the caption, with the correct response time (typically 20 days for civil cases under <strong>12 O.S. § 2012</strong>). Mismatches cause service challenges later.</p>
            <h3>3. Missing Notary Blocks</h3>
            <p>Verifications, affidavits, and certain family-law forms require a notary signature under 49 O.S. § 5. We can notarize on the spot — see our <Link href="/notary">notary services</Link>.</p>
            <h3>4. Wrong Filing Fee</h3>
            <p>The most common reason eFilings get rejected. Use the current schedule, not a printout from last year.</p>
            <h3>5. Missing Certificate of Service</h3>
            <p>Once the petition is on file, every subsequent filing must include a certificate of service to opposing parties.</p>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
              <div className="flex gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Filing Deadline Today?</h3>
                  <p className="text-amber-800 text-sm">Missed deadlines kill cases. If you have a filing that must hit today, call us before noon and we can usually walk it in same-day. Court runs start at $25 plus court costs. <a href="tel:+15393676832" className="font-semibold text-amber-900 hover:underline">(539) 367-6832</a></p>
                </div>
              </div>
            </div>

            <h2>Filing + Service in One Stop</h2>
            <p>Where a courier-server combo really shines is when filing and service need to happen back-to-back. We file the petition, get the file-stamped summons issued, and immediately dispatch a licensed process server (under <strong>12 O.S. § 158.1</strong>) to serve the defendant. That eliminates the dead time between the clerk window and the first attempt — sometimes saving days, occasionally saving an entire statute deadline.</p>
            <p>For a deeper look at process serving cost, read our <Link href="/blog/process-serving-cost-guide-oklahoma">2026 process serving cost guide</Link>; for vendor selection, see <Link href="/blog/how-to-hire-a-process-server-oklahoma">how to hire a process server</Link>.</p>

            <h2>Special Filing Scenarios</h2>
            <h3>Protective Orders</h3>
            <p>Tulsa County offers expedited intake for protective orders. See our complete <Link href="/blog/how-to-file-protective-order-oklahoma">how to file a protective order</Link> walk-through.</p>
            <h3>Evictions</h3>
            <p>Forcible entry and detainer filings have shorter response windows and statutory posting requirements — see <Link href="/blog/how-to-serve-eviction-notices-in-oklahoma">how to serve eviction notices in Oklahoma</Link>.</p>
            <h3>Small Claims</h3>
            <p>Filed in the small claims division when the amount in controversy is $10,000 or less. See <Link href="/blog/how-to-serve-small-claims-oklahoma">how to serve small claims</Link>.</p>
            <h3>Subpoenas</h3>
            <p>Subpoenas are issued by the clerk after the case is open. See <Link href="/blog/how-to-serve-a-subpoena-oklahoma">how to serve a subpoena</Link>.</p>

            <h2>Why Use Our Courier Filing Service</h2>
            <p>You get a paralegal-grade pre-flight check on every document, a real human at the clerk window, immediate file-stamped copies, and the option to chain process serving the moment the summons issues. For attorneys with one Tulsa County matter a month or one a day, the cost-per-minute math beats sending a paralegal downtown — and it never beats sending you, the named attorney, downtown.</p>

            <hr />
            <p className="text-sm text-gray-500"><em>Disclaimer: Court fees, procedures, and rules change. This guide is informational and current as of April 2026; always confirm with the Tulsa County Court Clerk and current Oklahoma statutes. This is not legal advice.</em></p>
          </article>
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/pricing" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Pricing — Court Filing Starts at $25</span>
                <p className="text-sm text-gray-600 mt-1">All courier, filing, process serving, and notary starting prices.</p>
              </Link>
              <Link href="/tulsa-process-server" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Tulsa Process Server</h3>
                <p className="text-gray-600 text-sm mt-2">Pair filing with same-day service of the summons in one stop.</p>
              </Link>
              <Link href="/blog/process-serving-cost-guide-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Process Serving Cost Guide</h3>
                <p className="text-gray-600 text-sm mt-2">Full 2026 process serving pricing and what affects each tier.</p>
              </Link>
              <Link href="/blog/how-to-file-protective-order-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">How to File a Protective Order</h3>
                <p className="text-gray-600 text-sm mt-2">Step-by-step Oklahoma protective order filing with intake tips.</p>
              </Link>
              <Link href="/blog/how-to-serve-small-claims-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">How to Serve Small Claims</h3>
                <p className="text-gray-600 text-sm mt-2">Small claims service essentials for Tulsa County filers.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Documents Filed in Tulsa County Today?</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">Same-day courier filing plus optional immediate service of the summons. Court runs start at $25 plus court costs.</p>
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

      
          <AeoProcessServingHubLinks />
          <Footer />
    </>
  );
}
