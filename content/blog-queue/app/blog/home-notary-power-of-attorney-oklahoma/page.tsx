import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Oklahoma Notary for Power of Attorney at Home',
  description: 'Oklahoma durable power of attorney under 58 O.S. § 1072.2 needs two witnesses and a notary. Mobile home signing, ID rules, and what notaries cannot advise.',
  keywords: 'Oklahoma power of attorney notary, durable POA Oklahoma, 58 O.S. 1072.2, mobile notary POA, home notary Oklahoma, POA witnesses Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Notary for Power of Attorney at Home',
    description: 'Oklahoma durable power of attorney under 58 O.S. § 1072.2 needs two witnesses and a notary. Mobile home signing, ID rules, and what notaries cannot advise.',
    url: 'https://justlegalsolutions.org/blog/home-notary-power-of-attorney-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Notary for Power of Attorney at Home',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/home-notary-power-of-attorney-oklahoma',
  },
  other: {
    'article:published_time': '2027-03-09',
    'article:modified_time': '2027-03-09',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Under 58 O.S. § 1072.2, an Oklahoma durable power of attorney must be signed by the principal, witnessed by two disinterested adults, and acknowledged before a notary; a mobile notary can perform the acknowledgment at home after verifying government ID and assessing that the signer appears to understand the document; the notary cannot draft the POA, explain legal consequences, or confirm mental capacity beyond routine notarial duties.',
    'ai-key-facts':
      'Durable POA in Oklahoma requires principal signature plus two disinterested witnesses and notarial acknowledgment under 58 O.S. § 1072.2; Witnesses cannot be the agent, successor agent, or related by blood or marriage to the principal; Mobile notaries may travel to homes, hospitals, or care facilities for the acknowledgment; Valid government photo ID is required for personal appearance; Notaries verify identity and willingness to sign but cannot give legal advice or select POA powers; Mental capacity is a legal question for attorneys and courts, not notaries',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Does Oklahoma require a notary for a durable power of attorney?',
    answer: 'Yes. Under 58 O.S. § 1072.2, a durable power of attorney in Oklahoma must be acknowledged before a notary public in addition to being signed by the principal and witnessed by two disinterested adults. The notary performs an acknowledgment — confirming that the person signing is who they claim to be and that they signed voluntarily. Without the notarial acknowledgment and the two witness signatures, the document may not meet Oklahoma statutory requirements for a durable POA, and banks, title companies, or healthcare providers may refuse to honor it.',
  },
  {
    question: 'Who qualifies as a disinterested witness for an Oklahoma POA?',
    answer: 'Oklahoma law expects witnesses who are not beneficiaries of the power and who do not stand to gain from the appointment. The agent named in the POA, any successor agent, and people related to the principal by blood, marriage, or adoption are generally poor choices. Neighbors, coworkers, friends without a financial stake, or unrelated caregivers who are not named in the document work better. Both witnesses must watch the principal sign (or acknowledge the signature) and then sign the witness block themselves. Using interested parties invites challenges later if someone questions whether the principal was pressured or whether the formalities were followed.',
  },
  {
    question: 'Can a mobile notary come to my home to notarize a power of attorney?',
    answer: 'Absolutely. Mobile notaries routinely travel to private homes, assisted-living apartments, hospitals, and rehab centers across Oklahoma for POA acknowledgments. The notary brings a stamp, journal, and any required supplies; you provide the completed POA (or one your attorney prepared), valid photo ID, and your two disinterested witnesses in the same room at signing time. Travel and trip fees are separate from the statutory notarial act fee and should be quoted before the appointment. A home visit does not relax any of the witness or acknowledgment rules — it just moves the notary to where the principal is comfortable signing.',
  },
  {
    question: 'What identification do I need when a notary acknowledges my POA?',
    answer: 'Oklahoma notaries rely on satisfactory evidence of identity, which usually means an unexpired government-issued photo ID such as an Oklahoma driver license, state ID card, passport, or military ID. The name on the ID should match the name on the power of attorney, or you should be prepared to explain a reasonable variation (a maiden name, a middle initial difference). If the signer lacks standard ID — common with elderly parents who no longer drive — tell the notary when you book the appointment. Alternative identity methods may be available under Oklahoma notary rules, but planning ahead avoids a wasted trip.',
  },
  {
    question: 'Can an Oklahoma notary tell me which powers to include in my POA?',
    answer: 'No. Selecting powers — financial, healthcare, real estate, gifting, or authority to access digital accounts — is legal work, not a notarial act. A notary may not recommend language, compare statutory forms, or explain what happens if you grant broad versus limited authority. That guidance comes from an Oklahoma estate planning or elder law attorney who knows your assets, family situation, and goals. The notary role starts when the document is ready to sign: verify identity, confirm the signer appears willing, complete the acknowledgment, and record the act in a journal. Anything that sounds like "you should give your daughter full authority over your bank accounts" crosses the line.',
  },
  {
    question: 'What does 58 O.S. § 1072.2 require for a durable power of attorney?',
    answer: 'Section 1072.2 of Title 58 governs durable powers of attorney in Oklahoma — the kind that survive the principal incapacity if the document says so. The statute sets execution formalities: the principal must sign (or direct someone to sign in their presence), two disinterested witnesses must sign, and a notary must acknowledge the principal signature. The document should state that the authority continues despite later disability. Oklahoma also has specific rules about when third parties must accept a POA and what agents may do. Your attorney drafts to those requirements; the notary and witnesses satisfy the signing formalities so the finished paper can be used with banks and medical offices.',
  },
  {
    question: 'How does a notary assess whether I have capacity to sign a POA?',
    answer: 'Notaries are not doctors or judges. They do not conduct capacity evaluations and cannot give a legal opinion that someone is competent. During an acknowledgment, the notary may note whether the signer communicates, responds to basic questions about the document, and appears to sign without obvious coercion — but that is a lay observation, not a medical or legal finding. If you worry about future challenges because of dementia, stroke recovery, or medication effects, talk to an attorney before scheduling the notary. They may recommend a capacity letter from a physician or a signing when symptoms are stable. Refusing to notarize when a signer clearly cannot understand what they are signing is appropriate; certifying capacity is not.',
  },
  {
    question: 'Should I use a statutory form or a custom POA before calling a notary?',
    answer: 'Oklahoma publishes statutory short-form and long-form durable power of attorney templates, and many attorneys use customized documents that track 58 O.S. § 1072.2 while adding client-specific provisions. The notary does not choose between them. Have the final document before witnesses and the notary arrive — reprinting mid-appointment because someone picked the wrong form wastes time and can confuse an elderly signer. Bring enough copies if your bank wants an original and your agent wants one for records. The notary notarizes the signature on the document you present; they do not edit clauses, attach riders, or merge pages from different templates.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Oklahoma Notary for Power of Attorney at Home"
        title="Oklahoma Notary for Power of Attorney at Home"
        pageDescription="Oklahoma durable power of attorney under 58 O.S. § 1072.2 needs two witnesses and a notary. Mobile home signing, ID rules, and what notaries cannot advise."
        description="Oklahoma durable power of attorney under 58 O.S. § 1072.2 needs two witnesses and a notary. Mobile home signing, ID rules, and what notaries cannot advise."
        pageUrl="https://justlegalsolutions.org/blog/home-notary-power-of-attorney-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Oklahoma Notary for Power of Attorney at Home', item: 'https://justlegalsolutions.org/blog/home-notary-power-of-attorney-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Oklahoma Notary for Power of Attorney at Home',
          datePublished: '2027-03-09',
          dateModified: '2027-03-09',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'Oklahoma power of attorney notary',
          'durable POA Oklahoma',
          '58 O.S. 1072.2',
          'mobile notary POA',
          'home notary signing',
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
            Oklahoma Notary for Power of Attorney at Home
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              An Oklahoma <strong>durable power of attorney</strong> under <strong>58 O.S. § 1072.2</strong> requires the
              principal signature, <strong>two disinterested witnesses</strong>, and a <strong>notarial acknowledgment</strong>.
              A <strong>mobile notary</strong> can perform that acknowledgment at your home after checking{' '}
              <strong>government photo ID</strong> and confirming the signer appears willing. The notary{' '}
              <strong>cannot draft the POA, pick your agent, or give legal advice</strong> about powers or capacity.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 58 where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-03-09').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Your parent needs a durable power of attorney before surgery, your bank wants one on file for a trust account, or an elder law attorney sent home a packet with blank witness lines and a note to get it notarized. You could load everyone into the car and hunt for a walk-in notary, but for many Oklahoma families the easier path is a mobile appointment at the kitchen table. That works — as long as you understand what 58 O.S. § 1072.2 actually requires, who can witness, what ID to bring, and where a notary job ends and legal advice begins. This guide walks through home POA signings from the notary side of the table so your document is usable the first time a hospital or title company sees it.
          </p>

          <h2>What Oklahoma Law Requires for a Durable POA</h2>

          <p>
            A durable power of attorney lets someone you trust — your agent — handle financial or property matters for you, and in Oklahoma the durable version keeps working if you later become incapacitated, provided the document says so. Title 58 governs these instruments, and 58 O.S. § 1072.2 sets the execution rules that courts, banks, and registries expect to see on the signature page.
          </p>
          <p>
            The formalities are specific: the principal signs the power of attorney (or directs another person to sign in the principal presence), two disinterested witnesses sign, and a notary public acknowledges the principal signature. That is three separate roles — principal, witnesses, notary — and skipping one creates a paper that might look finished but fails when a third party checks compliance. Oklahoma also has acceptance rules for institutions that receive a POA and limits on what agents may do without explicit authority. Your attorney handles substance; witnesses and the notary handle the signing ceremony.
          </p>

          <h2>Two Disinterested Witnesses: Who Can — and Cannot — Sign</h2>

          <p>
            Disinterested does not mean uninterested. It means the witness should not stand to benefit from the power you are granting. The daughter you name as agent should not also witness. Neither should her spouse, your paid caregiver if they are named for reimbursement authority, or anyone inheriting under a will that this POA might affect. Oklahoma POA challenges often focus on whether formalities were cosmetic or real; using insiders as witnesses gives a disappointed relative something to argue about later.
          </p>
          <p>
            Good witness candidates include neighbors, church members, longtime friends without a stake in your estate, or unrelated office staff if you sign at work. Both must be adults, present at the same time as the principal signature, and able to sign their own names on the witness lines. Plan for three people besides the notary in the room: two witnesses and the principal. If one witness runs late, wait — do not notarize first and add witnesses afterward unless your attorney confirms that sequence is valid for your specific form.
          </p>

          <h2>The Notary Role: Acknowledgment, Not Legal Review</h2>

          <p>
            When an Oklahoma notary acknowledges a power of attorney, they confirm identity through satisfactory evidence — typically government photo ID — and that the signer appeared to execute the document willingly. The notary completes a certificate, stamps the document, and records the act in a journal. They are not certifying that the POA is wise, that the agent is trustworthy, or that the principal has full mental capacity under medical or legal standards.
          </p>
          <p>
            That distinction matters for families who hope the notary will sanity-check the appointment. A notary who says your brother should not be agent is giving legal advice they are not licensed to give. A notary who notarizes while a signer clearly does not know what a power of attorney is creates a different problem — a document vulnerable to attack. The middle ground is professional: polite, observant, willing to pause if something looks off, but clear that questions about powers and capacity belong to your attorney and, when needed, your doctor.
          </p>

          <h2>Mobile Home Signings: How They Work in Practice</h2>

          <p>
            Mobile notaries across Oklahoma City, Tulsa, Norman, and rural counties schedule home POA appointments every week. You book a time, confirm the fee for travel plus the notarial act, and gather everyone in one location. The notary arrives with stamp and journal; you provide the unsigned or partially signed document your attorney approved, two witnesses, and the principal valid ID.
          </p>
          <p>
            Home signings help when mobility is limited — post-surgery recovery, hospice-adjacent planning, or a parent who should not drive across town for a strip-mall notary. They also help adult children coordinating from out of state: you fly in, line up witnesses among local friends, and one appointment completes the packet before you board a return flight. The law does not care whether acknowledgment happens at a bank, a law office, or a living room in Stillwater; it cares that personal appearance, witnesses, and the certificate are correct.
          </p>

          <h2>Identification Rules for POA Acknowledgments</h2>

          <p>
            Oklahoma notaries must identify signers through methods authorized under state law. For most home POA appointments, that means an unexpired driver license, Oklahoma identification card, passport, or comparable government ID with photo and signature. Expired IDs, hospital wristbands without photo, or utility bills alone typically do not suffice for a standard acknowledgment.
          </p>
          <p>
            Elderly principals sometimes let licenses lapse when they stop driving. If that is your situation, mention it when scheduling. The notary may know alternative paths — credible identifying witnesses under Oklahoma rules, for example — but those take planning and extra people. Adult children should not wait until the notary is at the door to discover Dad has no current photo ID. A trip to a tag agency for a state ID card before signing day is boring and effective.
          </p>

          <h2>Capacity, Willingness, and What Notaries Cannot Decide</h2>

          <p>
            Capacity — whether someone understands the nature and effect of a power of attorney — is a legal and often medical question. Notaries are not qualified to diagnose dementia, parse medication fog, or opine on undue influence between siblings. They may observe whether the principal can communicate, whether answers to simple questions make sense, and whether someone else is directing every pen stroke. If a signer cannot respond when asked what document they are signing, a responsible notary should decline rather than rubber-stamp a family crisis.
          </p>
          <p>
            Families sometimes confuse notarization with blessing the decision. It is neither. Attorneys screen capacity before drafting; doctors may letter when capacity is borderline; judges resolve disputes after the fact. At the home table, your job is to protect an elderly parent from pressure while giving them space to execute a plan they chose with counsel. Rushing a confused signer helps no one when a bank later freezes access because the POA looks suspicious.
          </p>

          <h2>What Your Oklahoma Notary Cannot Advise On</h2>

          <p>
            Here is a practical list to save disappointment at appointment time. A notary cannot tell you whether to use Oklahoma statutory short-form or long-form templates. They cannot recommend an agent, remove an agent you already named, or explain tax consequences of gifting authority. They cannot say whether the POA should be immediate or springing, whether to include healthcare decisions (often a separate advance directive in Oklahoma planning), or whether your form matches what Chase or Arvest requires on their internal checklist.
          </p>
          <p>
            They also cannot prepare a new POA from a verbal summary, notarize without personal appearance except through authorized remote online channels your document accepts, or backdate signatures. Asking a mobile notary to meet you at a coffee shop so Mom can stay in the car while you sign for her is not personal appearance and is not legitimate. Unauthorized practice of law and notary fraud both create headaches far worse than paying an attorney for an hour of document prep.
          </p>

          <h2>Common Home Signing Mistakes Oklahoma Families Make</h2>

          <p>
            Using the agent and their spouse as witnesses ranks first — convenient and invalidating. Second is printing a draft with blank spaces the attorney meant to fill. Third is scheduling the notary before witnesses confirm, then improvising with a neighbor who turns out to be the successor agent. Fourth is assuming a hospital notary knows Oklahoma durable POA witness rules; many hospital staff notaries help with advance directives but your estate POA still needs its own compliant page.
          </p>
          <p>
            Fifth is forgetting copies. Some banks want an original acknowledged POA on file; your agent may want a certified copy or a second original if your attorney issued duplicates. The notary notarizes what you present — they do not automatically produce extras unless you arranged copies in advance.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Mobile Notary for a Power of Attorney at Home?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions provides mobile notary acknowledgments for durable powers of attorney across all 77 Oklahoma counties — clear fees, proper journals, and appointments built around your witnesses and timeline.
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
            Oklahoma durable powers of attorney under 58 O.S. § 1072.2 are not complicated on paper — principal signature, two disinterested witnesses, notarial acknowledgment — but families stumble when they treat the notary like a lawyer or the witnesses like decorations. Line up disinterested adults, match ID to the form, finish drafting before anyone signs, and book a mobile notary when driving to a storefront is the wrong fit. The notary verifies identity and willingness; your attorney owns the rest.
          </p>
          <p>
            At Just Legal Solutions, we acknowledge powers of attorney at homes, facilities, and offices across all 77 Oklahoma counties with the same documentation standards we bring to process serving and court filing — journals done right, fees quoted upfront, and no legal advice where a stamp and a certificate are what the law actually requires.
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
