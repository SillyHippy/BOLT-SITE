import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Oklahoma Notary Fees: What Can a Notary Charge?',
  description: 'Oklahoma notary fees cap at $5 per notarial act under 49 O.S. § 5. Learn RON limits, travel charges, absentee ballot rules, and fees notaries cannot collect.',
  keywords: 'Oklahoma notary fees, notary public charges Oklahoma, 49 O.S. 5, RON fees Oklahoma, mobile notary travel fees, notary fee limits Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Notary Fees: What Can a Notary Charge?',
    description: 'Oklahoma notary fees cap at $5 per notarial act under 49 O.S. § 5. Learn RON limits, travel charges, absentee ballot rules, and fees notaries cannot collect.',
    url: 'https://justlegalsolutions.org/blog/oklahoma-notary-fees-allowed-charges',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Notary Fees: What Can a Notary Charge?',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/oklahoma-notary-fees-allowed-charges',
  },
  other: {
    'article:published_time': '2027-02-23',
    'article:modified_time': '2027-02-23',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Under 49 O.S. § 5, Oklahoma notaries may charge no more than $5 per notarial act; travel, mileage, and after-hours convenience fees are separate if agreed in advance; remote online notarization is capped at $25 under 49 O.S. § 209; absentee ballot notarization is free; notaries cannot charge for unauthorized legal advice or split fees with title companies.',
    'ai-key-facts':
      'Maximum statutory fee is $5 per notarial act under 49 O.S. § 5; RON sessions capped at $25 under 49 O.S. § 209; Travel and mobile convenience fees are allowed if disclosed upfront; Absentee ballot notarization must be performed at no charge; Charging for legal advice or document preparation beyond clerical typing is prohibited; Fee overcharges can trigger Secretary of State discipline and consumer complaints',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is the maximum fee an Oklahoma notary can charge?',
    answer: 'Under 49 O.S. § 5, the maximum fee for any notarial act in Oklahoma is $5. That cap applies whether the notary works at a bank counter in Oklahoma City, a title office in Tulsa, or a mobile appointment in a rural county. Each distinct notarial act — an acknowledgment, a jurat, an oath, a copy certification — is a separate act and can carry its own $5 fee. If a document requires two signatures notarized separately, that is two acts and up to $10 total in statutory notary fees, not one bundled charge.',
  },
  {
    question: 'Can an Oklahoma mobile notary charge for travel?',
    answer: 'Yes. Travel, mileage, and trip fees are not part of the $5 statutory cap under 49 O.S. § 5 because they are not notarial acts — they are convenience charges for coming to you. Mobile notaries across Oklahoma commonly quote a base travel fee plus the per-act fees. The key is transparency: the notary should tell you the travel charge before the appointment, and you should agree to it. A notary who surprises you with a $75 "trip fee" after showing up has created a trust problem even if the fee itself is legal.',
  },
  {
    question: 'How much can an Oklahoma notary charge for remote online notarization (RON)?',
    answer: 'Under 49 O.S. § 209, the maximum fee for a remote online notarization session in Oklahoma is $25. That is higher than the $5 in-person cap because RON involves identity proofing, audio-video technology, and electronic journal requirements under Oklahoma\'s RON statutes. Some platforms bundle the notary fee with technology fees; read the checkout screen carefully. The $25 cap applies to the notarial portion — separate platform or scheduling fees from a vendor may appear on your receipt if disclosed.',
  },
  {
    question: 'Can a notary charge to notarize an absentee ballot in Oklahoma?',
    answer: 'No. Oklahoma law requires that notarization of an absentee ballot affidavit be performed free of charge. A notary who tries to collect even the standard $5 fee for ballot-related notarization is violating that rule. If you are voting absentee and need a notary, ask upfront whether there is any charge — the correct answer for the ballot affidavit itself is zero. Mobile notaries may still charge travel to reach you, but the notarial act on the ballot paperwork should not carry a fee.',
  },
  {
    question: 'Can an Oklahoma notary charge after-hours or weekend fees?',
    answer: 'Oklahoma statute does not set a separate cap for after-hours or weekend service, so a notary may charge a convenience or scheduling premium in addition to the $5 per act — again, as long as you know about it before the appointment. Think of it like paying extra for a rush courier: the underlying notarial fee stays at $5, but the notary\'s time on a Sunday evening in Enid or a 10 p.m. signing in Broken Arrow has a market price. Get the total in writing or by text before they drive out.',
  },
  {
    question: 'What fees can Oklahoma notaries NOT charge?',
    answer: 'Notaries cannot charge for legal advice, selecting which documents you need, explaining your legal rights, or preparing substantive legal content — that is the unauthorized practice of law, not a notarial fee. They cannot inflate the $5 statutory fee or disguise overcharges as "processing" or "administrative" fees tied to the act itself. They cannot charge for absentee ballot notarization. They also cannot accept kickbacks or split illegal referral fees with title companies or immigration consultants in ways that violate Oklahoma\'s notary and consumer protection rules. If someone calling themselves a notary quotes $200 to "handle your divorce papers," that is a red flag.',
  },
  {
    question: 'If I need three documents notarized, how much should I expect to pay?',
    answer: 'Count the notarial acts, not the pages. Three separate acknowledgments on three documents equals three acts — up to $15 in statutory fees under 49 O.S. § 5. One document with three signers each needing an acknowledgment equals three acts as well. Add travel if you use a mobile notary: a typical metro appointment might run $25–$50 in travel plus acts, while a long drive into a rural county can cost more. RON would be up to $25 per online session depending on how many acts fit in that session. Always ask for an itemized quote.',
  },
  {
    question: 'What should I do if an Oklahoma notary overcharged me?',
    answer: 'First, ask for a receipt that separates notarial act fees from travel or convenience charges. If the notary charged more than $5 per act without a lawful separate fee category, or charged for a free absentee ballot notarization, you can file a complaint with the Oklahoma Secretary of State, which commissions and disciplines notaries. For deceptive business practices — hidden fees, false claims of legal expertise — also consider the Oklahoma Attorney General\'s consumer protection division. Keep texts, emails, and invoices. Legitimate notaries fix billing mistakes; bad actors count on you not knowing the $5 cap.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Oklahoma Notary Fees: What Can a Notary Charge?"
        title="Oklahoma Notary Fees: What Can a Notary Charge?"
        pageDescription="Oklahoma notary fees cap at $5 per notarial act under 49 O.S. § 5. Learn RON limits, travel charges, absentee ballot rules, and fees notaries cannot collect."
        description="Oklahoma notary fees cap at $5 per notarial act under 49 O.S. § 5. Learn RON limits, travel charges, absentee ballot rules, and fees notaries cannot collect."
        pageUrl="https://justlegalsolutions.org/blog/oklahoma-notary-fees-allowed-charges"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Oklahoma Notary Fees: What Can a Notary Charge?', item: 'https://justlegalsolutions.org/blog/oklahoma-notary-fees-allowed-charges' }
        ]}
        articleDetails={{
          headline: 'Oklahoma Notary Fees: What Can a Notary Charge?',
          datePublished: '2027-02-23',
          dateModified: '2027-02-23',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'Oklahoma notary fees',
          'notary public charges',
          '49 O.S. 5',
          'RON fees Oklahoma',
          'mobile notary travel',
          'legal support services',
          'Oklahoma notary public'
        ]}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Notary Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Oklahoma Notary Fees: What Can a Notary Charge?
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Oklahoma caps the notarial act fee at <strong>$5 per act</strong> under <strong>49 O.S. § 5</strong> — each
              acknowledgment, jurat, or oath counts separately. <strong>Travel, mileage, and after-hours fees</strong> are
              allowed on top of that if you agree upfront. <strong>Remote online notarization</strong> tops out at{' '}
              <strong>$25</strong> under <strong>49 O.S. § 209</strong>. Notaries must not charge for{' '}
              <strong>absentee ballot</strong> notarization, and they cannot bill you for legal advice disguised as a
              notary fee.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-02-23').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~11 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            You need something notarized before the bank closes, the title company emails again, or your landlord's lease deadline hits tomorrow. You call a mobile notary or walk into a shipping store and hear a number — maybe $5, maybe $45, maybe "it depends." That confusion is common, and in Oklahoma it has a clear legal answer. Notaries are public officers with fee caps written into state law, but the market also charges for convenience, distance, and time. This guide walks through what Oklahoma notaries can legally charge, what stays separate from the statutory cap, and the fees that should never appear on your receipt.
          </p>

          <h2>The $5 Cap: What 49 O.S. § 5 Actually Means</h2>

          <p>
            Oklahoma sets a straightforward maximum: under 49 O.S. § 5, a notary public may charge no more than $5 for each notarial act. That is the ceiling, not a mandatory price. Many notaries charge less — some banks still notarize free for customers — but none may charge more than $5 for the act itself.
          </p>
          <p>
            The important word is "act," not "document" and not "visit." An acknowledgment where the signer personally appears and acknowledges signing is one act. A jurat where the notary administers an oath and witnesses the signing is one act. A verification on oath, a copy certification, or an oath without a signature can each be its own act depending on what the document requires. If you and your spouse both sign a deed and each signature needs an acknowledgment, that is two acts and up to $10 in statutory fees — even though it is one piece of paper.
          </p>

          <h3>Why the Per-Act Rule Catches People Off Guard</h3>
          <p>
            Title companies, loan signings, and estate packets routinely stack multiple notarial acts into one appointment. A closing folder might include a deed, a mortgage, an affidavit of title, and a corrective acknowledgment — four acts, $20 in maximum statutory fees before anyone mentions travel. If a notary quotes "$5 flat for anything," that is either a courtesy discount or a misunderstanding of the law. Ask how many acts are in your stack before you assume the total.
          </p>

          <h2>Travel, Mobile Service, and After-Hours Charges</h2>

          <p>
            Here is where Oklahoma law and real-world pricing diverge in a way that actually helps consumers understand their bill. The $5 cap in 49 O.S. § 5 applies to notarial acts only. It does not regulate what a mobile notary may charge to drive from Glenpool to Stillwater, meet you at a hospital in Lawton, or show up at 8 p.m. on a Tuesday because that is the only hour you are free.
          </p>
          <p>
            Travel fees, mileage, trip minimums, and scheduling premiums are separate commercial charges. Oklahoma notaries who run mobile businesses typically publish a travel rate or quote it when you book. That fee compensates gas, time, and opportunity cost — not the stamp and the journal entry. There is no single statutory travel cap, which means the market sets the price. What you should insist on is disclosure before the notary leaves their office. A legitimate mobile notary tells you: "$5 per act, plus $35 travel within Tulsa County," not a vague "service fee" added after the fact.
          </p>

          <h3>After-Hours and Weekend Appointments</h3>
          <p>
            Same principle. Nothing in Title 49 prevents a notary from charging extra for a Sunday signing in Muskogee or a before-work appointment in Edmond. The underlying notarial acts still max out at $5 each; the premium pays for the notary's off-hours time. Compare two quotes: a storefront notary during business hours might cost you $5 per act with zero travel, while a mobile notary on a Saturday night might charge $5 per act plus a $50 convenience fee. Both can be lawful if you agreed to the breakdown upfront.
          </p>

          <h2>Remote Online Notarization: The $25 Cap Under 49 O.S. § 209</h2>

          <p>
            Oklahoma authorizes remote online notarization (RON) under its notary statutes, and the fee structure is different from in-person work. Under 49 O.S. § 209, the maximum fee for performing a remote online notarization is $25. That higher cap reflects the technology stack — identity proofing, audio-video session, electronic journal, and retention rules — not just putting a stamp on paper.
          </p>
          <p>
            RON can be convenient when you are out of state, immobile, or juggling a tight deadline with a lender who accepts electronic notarization. Read the platform checkout carefully: some vendors display the notary's $25 cap alongside separate technology or scheduling fees. The statutory limit applies to what the notary charges for the notarial session, not necessarily every line item on a SaaS invoice. If you are unsure, ask whether the quoted price includes all notarial acts in one session or bills per signer.
          </p>

          <h3>RON vs. Traditional Mobile: Which Costs More?</h3>
          <p>
            It depends on act count and urgency. A single acknowledgment done online might run up to $25 total — more than the $5 in-person cap but possibly less than a mobile notary's travel minimum for one signature. A loan signing with a dozen acts still stacks $5 per act in person, while RON may bundle multiple acts into one session fee up to the platform's pricing model. Neither option is automatically cheaper; compare total out-the-door cost and whether the receiving institution accepts RON for your specific document.
          </p>

          <h2>Absentee Ballots: The Fee Oklahoma Notaries Cannot Collect</h2>

          <p>
            One hard exception belongs on every voter's checklist. Oklahoma law requires that notarization performed in connection with an absentee ballot affidavit be done at no charge. A notary cannot collect even the ordinary $5 statutory fee for that act. Election season brings mobile notaries to libraries and community centers; if someone tries to charge you for the ballot affidavit itself, they are wrong.
          </p>
          <p>
            Travel is the nuance. A notary who drives to your home for multiple documents might still charge travel for the trip, but the ballot notarization line item should read zero. If your only need is ballot paperwork, look for free notary events sponsored by county election boards or community organizations — or ask a notary who will waive travel for a quick curb-side ballot signature. The law protects voters from pay-to-notarize barriers on the ballot itself.
          </p>

          <h2>What Notaries Cannot Charge For — Ever</h2>

          <p>
            The fee caps assume the notary is performing authorized notarial acts — verifying identity, administering oaths, taking acknowledgments. They do not license a notary to sell legal services on the side. Charging to explain whether a power of attorney is right for you, to pick which court form to file, or to draft substantive language in a contract crosses into unauthorized practice of law territory. That is not a notary fee; it is a legal fee from someone who is not your lawyer.
          </p>
          <p>
            Notaries also cannot disguise overcharges. Labeling a $25 "administrative fee" that is really three notarial acts at illegal rates violates the spirit and letter of 49 O.S. § 5. They cannot charge for absentee ballot notarization. Kickback arrangements — paying title agents for referrals in ways that violate Oklahoma's notary ethics rules — can trigger Secretary of State discipline. Immigration-related "consultation" fees from notaries who are not attorneys are a known scam pattern; the notarial act might be $5 while the harmful upsell is everything else on the invoice.
          </p>

          <h3>Receipts and Red Flags</h3>
          <p>
            Before you pay, ask for an itemized breakdown: notarial acts at up to $5 each, travel or convenience separately labeled, zero for ballot work if applicable. Red flags include refusal to itemize, pressure to pay cash without a receipt, quotes that sound like legal advice bundled into "notary service," and anyone using the Spanish title "notario publico" to imply lawyer status. Oklahoma commissions notaries; it does not give them a law license.
          </p>

          <h2>How Oklahoma Notary Fees Compare to What You Actually Pay</h2>

          <p>
            Walk into a credit union in Norman on a weekday and you might pay nothing. Schedule a mobile notary for a hospital bedside signing in Oklahoma City and you might pay $5 per act plus a trip fee that reflects rush timing and parking. Close a refinance in Broken Arrow with a signing agent and the line items multiply fast — multiple acts, extended wait time, print fees from the signing service. The statutory cap keeps the notarial portion predictable; the rest is market pricing for convenience.
          </p>
          <p>
            For businesses that need repeatable notary support — law firms, title companies, property managers — volume often negotiates travel down even though per-act fees stay capped. For individuals with one affidavit, calling ahead saves money: ask act count, travel zone, and whether RON is accepted by whoever receives the document. A $5 answer beats a $75 surprise.
          </p>

          <h2>Discipline and Complaints When Fees Go Wrong</h2>

          <p>
            Oklahoma notaries are commissioned by the Secretary of State and must follow Title 49. Overcharging statutory fees, charging for free ballot notarization, or commingling notary work with unauthorized legal advice can lead to complaints, commission suspension or revocation, and referral to consumer protection authorities. You do not need a lawyer to file a basic fee complaint — keep your receipt, note the date and location, and describe how the charge differed from what 49 O.S. § 5 allows.
          </p>
          <p>
            Good notaries welcome fee questions because transparency is part of the job. If someone gets defensive when you cite the $5 cap, that tells you plenty. The vast majority of Oklahoma notaries — whether at a desk in Ponca City or a mobile unit crossing all 77 counties — charge honestly and explain their travel rates before they come to you.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Notary Who Quotes Fees Upfront?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions provides mobile and office notary services across all 77 Oklahoma counties with clear per-act pricing, disclosed travel rates, and the documentation standards courts and title companies expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:5393676832" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Call (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                Request Notary Service
              </Link>
            </div>
          </div>
          </article>
          
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* FAQ Section */}
          <section className="mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-200 rounded-lg bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                      <span>{faq.question}</span>
                      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 border border-gray-200 group-open:bg-blue-50 group-open:text-blue-600 group-open:border-blue-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 pt-0 leading-relaxed text-gray-700 bg-white border-t border-gray-100 rounded-b-lg">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Scale className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Need Professional Legal Support?</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving, courier, and notary services across all 77 Oklahoma counties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Submit Assignment
                  </Link>
                  <a href="tel:5393676832" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Call (539) 367-6832
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <article className="prose prose-lg prose-blue max-w-none mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2>The Bottom Line</h2>
            <p>
            Oklahoma keeps notarial act fees simple: $5 max per act under 49 O.S. § 5, $25 max for a remote online session under 49 O.S. § 209, and zero for absentee ballot notarization. Travel and convenience charges ride on top, legally, when you know about them before the appointment. What notaries cannot do is inflate the statutory fee, charge for legal advice, or hide the math on your receipt. Ask for act count, ask for itemization, and walk away from anyone who will not explain the bill.
          </p>
          <p>
            At Just Legal Solutions, we notarize documents across all 77 Oklahoma counties with the same transparency we bring to process serving and court filing — clear fees, proper journals, and work that meets what Oklahoma courts and title companies expect.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need professional notary services in Oklahoma?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Just Legal Solutions
            </Link>{' '}
            for licensed, bonded support across all 77 Oklahoma counties. Call or text{' '}
            <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a>{' '}
            for same-business-day intake. Visit our{' '}
            <Link href="/pricing" className="text-blue-600 hover:underline">pricing page</Link>{' '}
            for current service rates.
          </p>
          </article>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
