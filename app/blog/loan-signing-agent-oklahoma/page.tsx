import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Loan Signing Agents in Oklahoma — What You Need to Know (2026)',
  description: 'Oklahoma loan signing agent guide 2026: NNA certification, mortgage closing process, common docs, and pricing that typically starts at $75–$200 per signing. Mobile notary services starts at $25.',
  keywords: 'loan signing agent oklahoma, notary signing agent tulsa, mortgage closing notary, NNA certified signing agent, loan closing notary tulsa, signing agent fees oklahoma',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Loan Signing Agents in Oklahoma — What You Need to Know',
    description: 'Mortgage closing notary essentials, certification, and pricing. Mobile notary starts at $25; signing packages typically $75–$200.',
    url: 'https://justlegalsolutions.org/blog/loan-signing-agent-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-063-loan-signing-agent-tulsa-hero.webp', width: 1200, height: 630, alt: 'Loan Signing Agents in Oklahoma 2026' }],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/blog/loan-signing-agent-oklahoma' },
  other: {
    'article:published_time': '2026-04-19',
    'article:modified_time': '2026-04-19',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary': 'Complete 2026 guide to loan signing agents in Oklahoma. A loan signing agent (LSA) is a notary who specializes in mortgage and refinance closings. Pricing typically runs $75–$200 per signing depending on package; mobile notary services start at $25 per act plus travel. Covers NNA certification, common closing documents, and how an LSA differs from a regular notary.',
    'ai-key-facts': 'Oklahoma notary fees capped at $5/act under 49 O.S. § 5; loan signing packages typically $75–$200 (covers travel, printing, multi-signature handling); NNA certification is the industry standard; mobile notary starts at $25; RON authorized under 49 O.S. § 209.',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is a loan signing agent in Oklahoma?',
    answer: 'A loan signing agent (LSA), sometimes called a notary signing agent (NSA), is a commissioned Oklahoma notary who specializes in walking borrowers through the signing of mortgage and refinance closing documents. The LSA confirms identity, notarizes the required pages under 49 O.S. § 5, and returns the signed package to the title company or lender.'
  },
  {
    question: 'How is an LSA different from a regular notary?',
    answer: 'A regular notary performs single notarizations — an acknowledgment, a jurat, an oath. An LSA handles a complete loan-closing package that may contain 60–150+ pages, dozens of signatures, and several notarized pages. LSAs receive specialized training on the order of documents, key clauses borrowers ask about, and the strict no-legal-advice line.'
  },
  {
    question: 'How much does a loan signing agent cost in Oklahoma?',
    answer: 'Signing agent fees typically range from $75 to $200 per signing, depending on the package size (refi vs. purchase vs. HELOC), distance, time of day, and whether printing and shipping are included. Under Oklahoma law (49 O.S. § 5) the notarial act itself is capped at $5; the rest of the fee covers travel, package handling, printing, and the signing service.'
  },
  {
    question: 'Do loan signing agents need NNA certification?',
    answer: 'NNA (National Notary Association) certification is not required by Oklahoma statute, but it is the industry standard most title companies and signing services require before assigning work. Certification involves a background check, an exam covering loan documents, and annual renewal. Many LSAs also carry E&O insurance of $25,000–$100,000.'
  },
  {
    question: 'What documents are in a typical loan signing package?',
    answer: 'Common documents include the Note, Deed of Trust or Mortgage, Closing Disclosure, Right to Cancel (refinances), W-9, Affidavit of Occupancy, Compliance Agreement, and various lender-specific affidavits. A purchase package may also include the Title Company\'s settlement statement, escrow disclosures, and HOA/Condo riders.'
  },
  {
    question: 'Can a loan signing agent give legal advice?',
    answer: 'No. Notaries — including LSAs — cannot give legal advice or interpret loan terms. The LSA can identify which document is which, explain where to sign, and answer factual questions about notarization. Substantive questions about loan terms, interest rates, or whether to sign should go to the lender, title company, or an attorney.'
  },
  {
    question: 'Where do loan signings usually happen?',
    answer: 'Most signings happen at the borrower\'s home, office, or a neutral location like a coffee shop, library meeting room, or the LSA\'s office. Mobile signings — where the LSA travels to the borrower — are the norm in Oklahoma. After-hours and weekend signings are common because closing windows often fall outside business hours.'
  },
  {
    question: 'How do I find a qualified loan signing agent in Tulsa?',
    answer: 'Look for an LSA who is a commissioned Oklahoma notary with current $10,000 surety bond (49 O.S. § 2), NNA certification, current background check, E&O insurance, and verifiable experience with refis and purchases. Just Legal Solutions provides loan signing services across the Tulsa metro and surrounding counties — call (539) 367-6832 for availability.'
  }
];

export default function LoanSigningAgentOklahoma() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Loan Signing Agents in Oklahoma — What You Need to Know (2026)"
        pageDescription="Oklahoma loan signing agent guide 2026: NNA certification, mortgage closing process, common docs, and pricing that typically starts at $75–$200 per signing."
        pageUrl="https://justlegalsolutions.org/blog/loan-signing-agent-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Loan Signing Agent', 'Mobile Notary', 'Remote Online Notarization']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Loan Signing Agents in Oklahoma', url: '/blog/loan-signing-agent-oklahoma' },
        ]}
        articleDetails={{
          headline: 'Loan Signing Agents in Oklahoma — What You Need to Know',
          author: 'Just Legal Solutions Team',
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
          image: 'https://justlegalsolutions.org/image-pack/images/image-063-loan-signing-agent-tulsa-hero.webp'
        }}
        keywords={['loan signing agent oklahoma', 'mortgage notary tulsa', 'NNA certified signing agent', 'loan closing notary', 'signing agent fees']}
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
            <span className="text-white font-medium">Loan Signing Agents in Oklahoma</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Loan Signing Agents in Oklahoma — What You Need to Know
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

            <p>If you are buying or refinancing a home in Oklahoma, the closing table no longer looks like it did twenty years ago. Most signings now happen wherever the borrower is — home, office, hospital, even a coffee shop — handled by a <strong>loan signing agent</strong> (LSA). The LSA is a specialized mobile notary trained to walk you through a closing package the right way: identifying the documents, pointing to where you sign, performing the required notarizations, and returning the package to the lender or title company on schedule.</p>

            <p>This 2026 guide explains what an LSA actually is in Oklahoma, how the role differs from a regular notary, what a typical closing looks like, what it costs, and how to vet an LSA before they sit down at your table with a 100-page stack of mortgage paperwork.</p>

            {/* Quick Answer Box */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: Loan Signing Agents in Oklahoma</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>📜 <strong>What:</strong> A commissioned Oklahoma notary specialized in mortgage closings</li>
                <li>💵 <strong>Typical signing fee:</strong> $75–$200 per package (travel + printing + handling)</li>
                <li>🔐 <strong>Notarial act fee:</strong> still capped at $5 per act under 49 O.S. § 5</li>
                <li>🎓 <strong>Standard credential:</strong> NNA certification + background check + E&amp;O</li>
                <li>📍 <strong>Where:</strong> Mobile — usually borrower&apos;s home or office</li>
              </ul>
              <p className="text-blue-700 text-sm mt-3">Mobile notary services start at $25 per act + travel. See the full menu at <Link href="/pricing" className="underline">/pricing</Link>.</p>
            </div>

            <h2>What a Loan Signing Agent Actually Does</h2>
            <p>The LSA&apos;s job is procedural, not advisory. At a typical closing, the LSA will:</p>
            <ol>
              <li>Confirm the borrower&apos;s identity using current government-issued photo ID</li>
              <li>Walk through the package in the order the lender prefers</li>
              <li>Identify each document by name and indicate where the borrower signs, dates, and initials</li>
              <li>Perform the required notarizations — typically acknowledgments on the Mortgage/Deed of Trust and a jurat on certain affidavits</li>
              <li>Verify all signatures, initials, and dates before closing the package</li>
              <li>Return the original package per the lender&apos;s shipping instructions (usually overnight to the title company)</li>
            </ol>
            <p>What the LSA does <em>not</em> do: explain loan terms, recommend whether to sign, interpret legal language, or modify documents. Those questions go to the lender, title company, or an attorney.</p>

            <h2>LSA vs. Regular Notary — The Key Differences</h2>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Aspect</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Regular Notary</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Loan Signing Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Scope', 'Single notarizations', 'Full mortgage closing packages'],
                    ['Document volume', '1–5 pages', '60–150+ pages'],
                    ['Specialized training', 'Not required', 'Recommended (NNA standard)'],
                    ['E&O insurance', 'Optional', 'Typically $25k–$100k'],
                    ['Background check', 'Not required', 'Generally required by lenders'],
                    ['Typical fee', '$5 act + travel', '$75–$200 per package'],
                    ['Common locations', 'Office or home', 'Mobile, often after-hours'],
                  ].map(([aspect, regular, lsa]) => (
                    <tr key={aspect} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{aspect}</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-600">{regular}</td>
                      <td className="border border-gray-200 px-4 py-2 text-gray-900 font-semibold">{lsa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>NNA Certification — The Industry Standard</h2>
            <p>The <strong>National Notary Association (NNA)</strong> certification is not required by Oklahoma law, but most title companies, signing services, and lenders require it before assigning work. Certification involves:</p>
            <ul>
              <li>Active state notary commission (Oklahoma issues these for four-year terms)</li>
              <li>Annual NSA exam covering loan documents and procedures</li>
              <li>Annual background check from an approved provider</li>
              <li>Errors &amp; omissions insurance (typically $25,000–$100,000)</li>
              <li>$10,000 surety bond required by Oklahoma under 49 O.S. § 2</li>
            </ul>
            <p>Always ask any LSA you hire to confirm these credentials are current. A reputable LSA provides this information without hesitation.</p>

            <h2>Common Documents in a Closing Package</h2>
            <p>Closing packages vary by lender and loan type, but most contain a familiar set of documents:</p>
            <ul>
              <li><strong>Note</strong> — Borrower&apos;s promise to repay the loan</li>
              <li><strong>Mortgage / Deed of Trust</strong> — Security instrument; notarized</li>
              <li><strong>Closing Disclosure (CD)</strong> — Final terms and costs (federally required)</li>
              <li><strong>Right to Cancel</strong> — 3-day rescission for refinances</li>
              <li><strong>Affidavit of Occupancy</strong> — Notarized; states intended use</li>
              <li><strong>Compliance Agreement</strong> — Borrower agrees to correct minor errors</li>
              <li><strong>W-9</strong> — Tax ID certification</li>
              <li><strong>Signature/Name Affidavit</strong> — Notarized; addresses name variations</li>
              <li><strong>Settlement Statement / Closing Statement</strong> — Itemized costs</li>
              <li><strong>Lender-specific addenda</strong> — Vary by program (FHA, VA, conventional)</li>
            </ul>

            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
              <div className="flex gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Read the Closing Disclosure Before the Signing</h3>
                  <p className="text-amber-800 text-sm">Federal law requires lenders to deliver the Closing Disclosure to refinance borrowers at least three business days before closing. Use that time to read it. The LSA cannot answer substantive questions about terms — they can only point to where the document lives in the stack. Questions on terms go to your lender. Need a notary visit? Call <a href="tel:+15393676832" className="font-semibold text-amber-900 hover:underline">(539) 367-6832</a>.</p>
                </div>
              </div>
            </div>

            <h2>How LSA Pricing Works in Oklahoma</h2>
            <p>The Oklahoma <strong>$5-per-act fee cap</strong> under 49 O.S. § 5 still applies to the actual notarization. The rest of an LSA&apos;s fee covers everything else that goes into a successful closing:</p>
            <ul>
              <li>Travel to and from the signing location</li>
              <li>Printing the closing package (often double-printed: borrower copy + title copy)</li>
              <li>Time at the table (60–90 minutes typical)</li>
              <li>Quality-control review after signing</li>
              <li>Drop-off to FedEx/UPS for overnight return</li>
              <li>E&amp;O insurance and ongoing certification costs</li>
            </ul>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-bold text-gray-900">Package Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-right font-bold text-gray-900">Typical Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Refinance (no print)', '$75 – $125'],
                    ['Refinance (with print)', '$100 – $175'],
                    ['Purchase / sale', '$125 – $200'],
                    ['Reverse mortgage', '$150 – $250'],
                    ['HELOC', '$75 – $150'],
                    ['After-hours / weekend', 'add $25 – $75'],
                  ].map(([pkg, range]) => (
                    <tr key={pkg} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{pkg}</td>
                      <td className="border border-gray-200 px-4 py-2 text-right font-semibold text-gray-900">{range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>Mobile notary services (non-loan-signing) start at $25 per act plus travel — see our <Link href="/blog/mobile-notary-tulsa-guide">mobile notary Tulsa guide</Link> for that breakdown. For comparison with all Oklahoma notary fees, see <Link href="/blog/oklahoma-notary-fees-guide">our notary fees guide</Link>.</p>

            <h2>How a Typical Oklahoma Closing Goes</h2>
            <ol>
              <li><strong>Assignment:</strong> A signing service or title company assigns the LSA, sends the package, and confirms the meeting time and location.</li>
              <li><strong>Print &amp; prep:</strong> The LSA prints the package, tabs notary pages, and reviews for missing pages.</li>
              <li><strong>Travel:</strong> The LSA arrives 5–10 minutes early.</li>
              <li><strong>ID verification:</strong> Government photo ID checked against borrower name on documents.</li>
              <li><strong>Walk-through:</strong> Each document identified, signed, dated, and initialed in order.</li>
              <li><strong>Notarizations:</strong> Acknowledgment on the Mortgage/Deed of Trust; jurats where required.</li>
              <li><strong>QC:</strong> LSA verifies every signature line, date, and notary block before sealing the package.</li>
              <li><strong>Return:</strong> Overnight shipment to the title company per instructions.</li>
            </ol>

            <h2>Remote Online Notarization (RON) for Loan Signings</h2>
            <p>Oklahoma authorized RON under <strong>49 O.S. § 209</strong>, with a $25 maximum per act for the notarization itself. Some lenders accept RON closings; many still prefer in-person ink signings for the security instrument. If you need a hybrid (some pages RON, some pages wet-signed), confirm with the lender and title company before scheduling.</p>

            <h2>How to Vet an Oklahoma LSA</h2>
            <ul>
              <li>Confirm active Oklahoma notary commission and $10,000 bond</li>
              <li>Request proof of NNA certification and background check date</li>
              <li>Ask about E&amp;O insurance amount (target $25k or higher)</li>
              <li>Confirm experience with refis, purchases, and reverse mortgages</li>
              <li>Verify they can print the package or accept lender-printed packages</li>
              <li>Ask for sample signing references from title companies</li>
              <li>Confirm cancellation, no-show, and re-print policies in writing</li>
            </ul>

            <h2>Why Choose Just Legal Solutions for Loan Signings</h2>
            <p>We are a commissioned Oklahoma notary, NNA-aligned, with a <Link href="/notary">complete mobile notary practice</Link> serving the Tulsa metro and surrounding counties. We handle refis, purchases, HELOCs, and reverse mortgages, with after-hours and weekend availability built in. Pair a signing with related services — <Link href="/blog/how-to-apostille-document-oklahoma">apostille</Link>, <Link href="/blog/power-of-attorney-guide-oklahoma">POA</Link>, or <Link href="/blog/estate-planning-notarization-oklahoma">estate planning notarization</Link> — and you have one vendor managing every signature your closing touches.</p>

            <hr />
            <p className="text-sm text-gray-500"><em>Disclaimer: This guide is general information about Oklahoma loan signing agents current as of April 2026 and is not legal or financial advice. For loan-specific questions, consult your lender, title company, or attorney.</em></p>
          </article>
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/pricing" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Notary Pricing — Mobile Starts at $25</span>
                <p className="text-sm text-gray-600 mt-1">Full notary, mobile, and signing pricing.</p>
              </Link>
              <Link href="/notary" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Notary Services</h3>
                <p className="text-gray-600 text-sm mt-2">Mobile notary, RON, hospital visits, and after-hours appointments.</p>
              </Link>
              <Link href="/blog/oklahoma-notary-fees-guide" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Oklahoma Notary Fees Guide</h3>
                <p className="text-gray-600 text-sm mt-2">$5 cap, RON max, travel fees, and surcharges explained.</p>
              </Link>
              <Link href="/blog/ron-vs-mobile-notary-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">RON vs. Mobile Notary</h3>
                <p className="text-gray-600 text-sm mt-2">Pick the right format for your closing or document set.</p>
              </Link>
              <Link href="/blog/mobile-notary-tulsa-guide" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Mobile Notary in Tulsa</h3>
                <p className="text-gray-600 text-sm mt-2">When mobile notary makes sense and how scheduling works.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Loan Signing Agent in Tulsa?</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">Mobile signings, after-hours availability, and clean QC every time. Mobile notary starts at $25; signing packages quoted by package.</p>
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
