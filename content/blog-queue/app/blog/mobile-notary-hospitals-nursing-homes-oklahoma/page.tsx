import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Mobile Notary for Hospitals and Nursing Homes in Oklahoma',
  description: 'Mobile notary for Oklahoma hospitals and nursing homes: HIPAA-safe visits, bed-bound signing, witness rules, capacity screening, and facility logistics.',
  keywords: 'mobile notary hospital Oklahoma, nursing home notary Oklahoma, bed-bound notary signing, HIPAA notary visit, hospital notary Tulsa, capacity notarization Oklahoma, 49 O.S. notary',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Mobile Notary for Hospitals and Nursing Homes in Oklahoma',
    description: 'Mobile notary for Oklahoma hospitals and nursing homes: HIPAA-safe visits, bed-bound signing, witness rules, capacity screening, and facility logistics.',
    url: 'https://justlegalsolutions.org/blog/mobile-notary-hospitals-nursing-homes-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile Notary for Hospitals and Nursing Homes in Oklahoma',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/mobile-notary-hospitals-nursing-homes-oklahoma',
  },
  other: {
    'article:published_time': '2027-03-02',
    'article:modified_time': '2027-03-02',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Oklahoma mobile notaries can perform bedside and facility-room signings at hospitals and nursing homes when the signer personally appears, shows ID, and meets capacity standards; facilities require advance coordination and HIPAA-safe handling of PHI; witnesses may be required by the document or facility policy; statutory fees cap at $5 per act under Title 49 O.S.; travel and scheduling fees are separate; notaries must follow 12 O.S. 2004 journal rules and cannot provide legal advice about capacity or document selection.',
    'ai-key-facts':
      'Hospital and nursing home notarizations require personal appearance and valid ID under Oklahoma notary law; HIPAA limits what staff can share without authorization — notaries should not request medical records beyond what signing requires; capacity concerns may require physician input or an attorney review before notarizing powers of attorney or estate documents; many facilities require visitor check-in, escort, and scheduled appointment windows; bed-bound signers can sign at bedside if alert and able to communicate; witness requirements depend on the document type, not the notary statute alone; maximum notarial fee is $5 per act under Title 49 O.S.; mobile travel fees are disclosed separately from statutory act fees',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can a mobile notary come into an Oklahoma hospital room to notarize documents?',
    answer: 'Yes, when the hospital allows visitor access and the patient can personally appear before the notary. Oklahoma notaries must verify identity with satisfactory evidence — usually a government-issued photo ID — and confirm the signer is alert enough to understand what they are signing. Most Tulsa and Oklahoma City hospitals require you to schedule the visit through nursing staff or patient relations, check the notary in at security, and follow infection-control rules. The notary performs the act at bedside if the signer can mark or direct a mark; the hospital does not supply the notary, but it controls whether outside visitors enter the unit.',
  },
  {
    question: 'How does HIPAA affect notary visits at nursing homes and hospitals?',
    answer: 'HIPAA protects patient health information, so staff cannot freely discuss diagnosis, medication lists, or capacity evaluations with a notary who walks in unannounced. What the notary needs is limited: confirmation that a named patient is a current resident or admitted patient, a room or unit number for check-in, and permission for the visit — not a full chart. Family members with proper authorization can coordinate scheduling. The notary should avoid asking nurses to explain medical history on the record; if capacity is in question, that is a legal and medical issue handled outside the notarial act, not a HIPAA release for casual conversation.',
  },
  {
    question: 'Can a bed-bound patient in a nursing home sign a power of attorney in Oklahoma?',
    answer: 'Physical inability to leave bed does not block notarization if the signer is mentally competent and can communicate assent. The notary meets the patient at bedside, verifies ID (or uses permitted alternatives if ID is unavailable and law allows), and completes an acknowledgment or jurat per the document. If the patient cannot hold a pen, Oklahoma law allows directed signing in some circumstances — the notary should follow the document instructions and standard notary practice. When dementia, sedation, or confusion is present, the notary should decline; capacity screening protects the signer and reduces fraud claims later.',
  },
  {
    question: 'Who can serve as a witness during a hospital or nursing home notarization?',
    answer: 'Witness rules come from the document and Oklahoma law governing that instrument, not from a single hospital policy. A will may need disinterested witnesses; a healthcare directive might specify none or one; some facility forms supply their own witness lines. Nursing staff can witness in many cases if they are not prohibited by facility policy and are not beneficiaries of the document. The notary and witnesses are different roles — the notary verifies identity and completes the notarial certificate; witnesses observe the signing. Ask the receiving institution what witness count and qualifications they require before booking the appointment.',
  },
  {
    question: 'What should I tell the facility before a mobile notary arrives?',
    answer: 'Call the charge nurse, social worker, or admissions office at least one business day ahead when possible. Provide the patient or resident name, room number if known, expected arrival window, and document type (power of attorney, advance directive, HIPAA release, financial form). Ask about visitor policies, parking, check-in location, and whether a staff member must escort the notary. Confirm the signer will be awake and available — not in therapy, imaging, or a procedure — during the window. Facilities that handle frequent signings often have a preferred process; following it prevents a wasted trip.',
  },
  {
    question: 'How much does a mobile notary charge for a hospital or nursing home visit in Oklahoma?',
    answer: 'Under Title 49 O.S., the statutory notarial act fee is capped at $5 per act — each acknowledgment, jurat, or oath counts separately. Travel, mileage, after-hours scheduling, and facility wait time are separate commercial charges if disclosed before the appointment. A bedside visit in Tulsa might run $5 per act plus a travel minimum; a rural nursing home outside metro coverage may cost more because of drive time. Hospitals do not set the notary fee. Get an itemized quote: per-act fees, travel, and any witness coordination you are asking the notary to arrange.',
  },
  {
    question: 'When should an Oklahoma notary refuse to notarize at a hospital or nursing home?',
    answer: 'Refuse when the signer cannot communicate, appears heavily medicated, does not understand the document, lacks satisfactory ID without a lawful alternative, or is being pressured by someone in the room. Refuse when the notary would have a direct financial interest in the transaction or when the request involves legal advice — choosing document language, explaining estate strategy, or judging medical capacity. Title 49 O.S. and Oklahoma notary standards expect a clear-minded willing signer; a journal entry under 12 O.S. 2004 should reflect a proper personal appearance. When in doubt, pause and recommend an attorney or physician assessment before proceeding.',
  },
  {
    question: 'Do Oklahoma nursing homes allow after-hours or weekend notary visits?',
    answer: 'Policies vary by facility and ownership group. Many skilled nursing facilities restrict visitors to posted hours unless a family member or administrator approves an exception. Memory-care units often have stricter access. Mobile notaries routinely work evenings and weekends for discharge deadlines or family travel windows, but the facility must agree — a notary at the locked door without clearance does not help anyone. Plan ahead: weekend signings at a Broken Arrow rehab center or a Lawton VA-affiliated facility may need social services to meet you at the entrance. After-hours premiums may apply on the travel portion of the quote, not the $5 statutory act fee.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Mobile Notary for Hospitals and Nursing Homes in Oklahoma"
        title="Mobile Notary for Hospitals and Nursing Homes in Oklahoma"
        pageDescription="Mobile notary for Oklahoma hospitals and nursing homes: HIPAA-safe visits, bed-bound signing, witness rules, capacity screening, and facility logistics."
        description="Mobile notary for Oklahoma hospitals and nursing homes: HIPAA-safe visits, bed-bound signing, witness rules, capacity screening, and facility logistics."
        pageUrl="https://justlegalsolutions.org/blog/mobile-notary-hospitals-nursing-homes-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Mobile Notary for Hospitals and Nursing Homes in Oklahoma', item: 'https://justlegalsolutions.org/blog/mobile-notary-hospitals-nursing-homes-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Mobile Notary for Hospitals and Nursing Homes in Oklahoma',
          datePublished: '2027-03-02',
          dateModified: '2027-03-02',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'mobile notary hospital Oklahoma',
          'nursing home notary',
          'bed-bound signing',
          'HIPAA notary visit',
          'capacity screening notary',
          'Title 49 O.S. notary fees',
          'Oklahoma hospital notary'
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
            Mobile Notary for Hospitals and Nursing Homes in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              A <strong>mobile notary</strong> can notarize at an Oklahoma hospital or nursing home when the signer{' '}
              <strong>personally appears</strong>, shows valid ID, and is alert enough to understand the document.{' '}
              <strong>HIPAA</strong> limits what staff share — coordinate the visit in advance.{' '}
              <strong>Bed-bound</strong> patients can sign at bedside; <strong>witnesses</strong> depend on the form, not the notary statute.{' '}
              Statutory fees cap at <strong>$5 per act</strong> under <strong>Title 49 O.S.</strong>; travel is separate.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-03-02').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Your dad is in a Tulsa hospital bed and the discharge planner says he needs a power of attorney notarized before rehab will accept him. Your aunt lives in a nursing home outside Muskogee and the bank will not release joint-account paperwork unless someone meets her at the facility. These are everyday Oklahoma situations — not edge cases — and they need a notary who understands hospital check-in, nursing station etiquette, and when to walk away because capacity is unclear. This guide covers how mobile notary visits work inside Oklahoma hospitals and skilled nursing facilities: HIPAA boundaries, bed-bound signing logistics, witness rules, capacity screening, and the facility policies that can make or break your appointment window.
          </p>

          <h2>Why Facility Notarizations Are Different From a Coffee Shop Signing</h2>

          <p>
            A standard mobile appointment at someone&apos;s kitchen table has two parties: the signer and the notary. A hospital or nursing home adds layers — security desks, unit nurses, infection-control signage, visiting hours, and privacy rules that govern what staff can say about a patient. Oklahoma notaries still follow the same core duties under Title 49 O.S.: personal appearance, identity verification, a complete notarial certificate, and a journal entry consistent with 12 O.S. 2004. The building does not change the law; it changes the choreography.
          </p>
          <p>
            Families often assume the facility provides a notary because nurses help with paperwork. Most Oklahoma hospitals and nursing homes do not employ notaries for patient legal documents. Social workers may keep a list of community resources; they rarely notarize themselves unless they happen to hold a separate commission and policy allows it. You hire the mobile notary; you coordinate with the facility; the notary shows up with stamp, journal, and patience for elevator delays.
          </p>

          <h3>Common Documents Signed at Bedside</h3>
          <p>
            Power of attorney and healthcare proxy forms lead the list, especially during admission or discharge crunches. HIPAA authorization forms, VA benefit paperwork, trust amendments, loan modifications, and property deeds also show up when illness accelerates estate planning. Each document carries its own signature and witness requirements — the notary&apos;s job is the notarial act on the certificate, not rewriting the underlying form. Bring extra copies; facilities sometimes keep one for the chart while you mail another to the bank.
          </p>

          <h2>HIPAA: What Notaries Need — and What They Should Not Ask For</h2>

          <p>
            HIPAA protects individually identifiable health information. That means a charge nurse at an Oklahoma City metro hospital cannot rattle off diagnosis details to a notary who calls asking whether Mom is &quot;competent enough&quot; to sign. What you legitimately need for scheduling is narrower: patient name, room or unit, whether visitors are allowed, and a time window when the signer is expected to be awake and not in a procedure.
          </p>
          <p>
            The notary does not need — and should not request — medical records, medication lists, or physician notes as part of routine notarization. If a document itself contains health information, handle copies discreetly; do not leave them at the nurses&apos; station. Family members with existing HIPAA authorization can coordinate; otherwise work through the patient if alert, or the legally authorized representative. Mobile notaries who serve hospitals regularly learn to say, &quot;I am here for a scheduled signing appointment with [name]&quot; at the desk, not &quot;I need to know their cognitive status.&quot;
          </p>

          <h2>Capacity Screening: The Line Between Notary and Lawyer</h2>

          <p>
            Oklahoma notaries verify identity and witness willingness — they do not judge whether a power of attorney is clinically appropriate. Still, every commissioned notary is trained to notice red flags: a signer who cannot track the conversation, repeats questions without retention, or looks to a third party for every answer before nodding. Title 49 O.S. expects a notarial act only when the signer understands the general nature of what they are signing. Pushing through a POA while someone is delirious invites fraud allegations and can harm the signer.
          </p>
          <p>
            When capacity is genuinely uncertain, pause. Options include rescheduling when medication is adjusted, asking whether a physician can document alertness for the family file (outside the notary certificate), or involving an estate attorney who handles contested capacity questions. References to 12 O.S. 158.1 remind families that licensed legal support and notary commission standards overlap in documentation quality but not in legal advice — selecting the right POA form or deciding whether to sign at all is lawyer territory, not a $5 acknowledgment.
          </p>

          <h2>Bed-Bound and Limited-Mobility Signings</h2>

          <p>
            Physical limitation is normal in hospitals and nursing homes. The signer does not need to sit at a desk. If they can hold a pen, they sign where they are comfortable — adjusted bed, recliner, wheelchair at the day-room table. If they cannot physically mark the paper, directed signing may apply when the signer instructs another person to sign on their behalf in their presence; follow the document instructions and Oklahoma notary practice standards for that scenario.
          </p>
          <p>
            Bring a hard surface — a clipboard helps when over-bed tables are crowded with cups and monitors. Lower the rail if policy allows and staff approve. Identify a lighting source; fluorescent hallway glare makes ID checks harder. For nursing home residents with tremor, allow extra time; rushing a shaky signature helps nobody. The notary still completes personal appearance requirements: they saw the signer, verified identity, and administered the oath or took the acknowledgment required by the certificate.
          </p>

          <h3>ID Challenges in Long-Term Care</h3>
          <p>
            Wallet left at home, expired license, or no current ID after years in memory care — these happen. Oklahoma law defines satisfactory evidence of identity; credible identifying witnesses may be available in some cases when permitted. Facility photo ID badges are not government ID but staff who know the resident long-term sometimes serve as credible witnesses per statute. Work through options before the appointment; a notary who drives to Enid or Lawton needs to know ID status upfront.
          </p>

          <h2>Facility Policies: Check-In, Escorts, and Visiting Hours</h2>

          <p>
            Every Oklahoma facility runs its own visitor playbook. Large Tulsa hospitals use main-lobby security, wristbands, and unit-specific phone numbers. Rural critical-access hospitals may have you sign a paper log at the nurse desk. Nursing homes under corporate chains often publish visiting hours on their websites; independent homes may flex rules when social services knows you are coming for legal paperwork.
          </p>
          <p>
            Ask these questions when you call: Where does the notary park? Is there a maximum visitors count in the room? Does infection control require masking or restrict outside pens? Will a staff member escort the notary to the room? Are there blackout times for shift change or activities? Memory-care units sometimes require the family to meet the notary at the locked entrance — plan an extra fifteen minutes for every locked door between parking and bedside.
          </p>

          <h2>Witness Requirements in Hospitals and Nursing Homes</h2>

          <p>
            Witness rules ride on the document, not on hospital policy alone. Oklahoma wills typically require disinterested witnesses; some advance directives need none; financial institution forms may insist on two witnesses plus a notary. The notary is not automatically a witness unless the form designates that dual role and Oklahoma law permits it for that instrument.
          </p>
          <p>
            Who makes a practical witness onsite? A CNA who is named in the POA cannot witness. A neighbor resident in a nursing home day room may witness if the document allows and they are disinterested. Family members witness in many non-will contexts when the form permits related parties. Coordinate witness count before the notary arrives — showing up with one notary and zero witnesses for a two-witness bank form wastes the trip. Some families bring two friends; others ask facility activities staff when policy allows.
          </p>

          <h2>Fees Under Title 49 O.S. and Travel to Facilities</h2>

          <p>
            Oklahoma caps the notarial act fee at $5 per act under Title 49 O.S. — each acknowledgment, jurat, or oath stands alone. A stack of admission paperwork might include three acts; that is up to $15 in statutory fees before travel. Mobile notaries quote travel, mileage, wait time in lobby if a procedure runs long, and after-hours premiums separately because those charges are not notarial acts.
          </p>
          <p>
            Facility visits sometimes include unpaid waiting — the notary clears security while nursing finishes medication pass. Reputable mobile notaries disclose whether wait time is included in the travel flat rate or billed in increments. Hospitals do not reimburse notary fees; Medicare and Medicaid do not pay for your POA notarization. Budget for acts plus travel when you compare a bedside visit to driving the patient out after discharge — sometimes bedside is the only realistic option.
          </p>

          <h2>Practical Checklist Before the Notary Arrives</h2>

          <p>
            Confirm the signer is expected to be alert and in the room. Email or text the notary the facility address, unit, parking instructions, and a callback number for the nurses&apos; station. Print documents unless the notary offers secure printing — some mobile units carry printers; many prefer you supply final PDFs or paper ready to sign. Pack government photo ID for the signer and witnesses. Bring blue ink if the receiving bank requires it.
          </p>
          <p>
            Tell the notary about family dynamics if a dispute is brewing. Clear the over-bed table and ask staff for a few quiet minutes. After signing, verify each page the institution needs stamped; journal entries and receipt should list acts separately from travel per Oklahoma fee transparency norms.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Bedside Notary at a Hospital or Nursing Home?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions provides HIPAA-aware mobile notary visits across Oklahoma with clear per-act pricing, disclosed travel rates, and experience navigating facility check-in from Tulsa to rural county nursing homes.
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
            Hospital and nursing home notarizations in Oklahoma come down to coordination, clarity, and knowing when not to sign. Schedule through the facility, respect HIPAA limits on patient information, bring ID and witnesses the document requires, and use a mobile notary who will walk away if capacity is doubtful. Statutory fees stay at $5 per act under Title 49 O.S.; travel is quoted separately. Journal and recordkeeping follow 12 O.S. 2004 — the same discipline courts expect from any commissioned notary, whether the signing happens in a ICU room or a skilled nursing day space.
          </p>
          <p>
            At Just Legal Solutions, we meet patients and residents where they are — bedside, wheelchair, or family conference room — with licensed, bonded service under 12 O.S. 158.1 standards and transparent pricing across all 77 Oklahoma counties. Call before discharge day crunch hits; you will save yourself a second trip through hospital security.
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
