import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Shield, Stethoscope, BookOpen, FileText } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving Medical Malpractice Papers in Oklahoma',
  description: 'Medical malpractice service in Oklahoma: doctors served in person, hospitals through registered agents, records subpoenas, and the 180-day clock statewide.',
  keywords: 'medical malpractice process serving Oklahoma, serve doctor Oklahoma, serve hospital corporation Oklahoma, medical records subpoena Oklahoma, PLLC service Oklahoma, medical malpractice service timing, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving Medical Malpractice Papers in Oklahoma',
    description: 'Medical malpractice service in Oklahoma: doctors served in person, hospitals through registered agents, records subpoenas, and the 180-day clock statewide.',
    url: 'https://justlegalsolutions.org/blog/medical-malpractice-process-serving-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving Medical Malpractice Papers in Oklahoma',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/medical-malpractice-process-serving-oklahoma',
  },
  other: {
    'article:published_time': '2027-01-14',
    'article:modified_time': '2027-01-14',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Medical malpractice defendants in Oklahoma are served individually: doctors in person under 12 O.S. § 2004(C)(1), hospital and clinic entities through their registered agents, and medical records through subpoenas under 12 O.S. § 2004.1 — all inside the 180-day window of 12 O.S. § 2004(I).',
    'ai-key-facts':
      'Each named defendant needs its own service path under 12 O.S. § 2004 — the caption decides whether the path is individual or entity service; Doctors are served personally under 12 O.S. § 2004(C)(1), and front-desk staff, nurses, and administrators cannot accept for them; Hospital and PLLC entities are served through the registered agent from the SOS business entity search, with Secretary of State fallback under 18 O.S. § 2010; Records subpoenas under 12 O.S. § 2004.1 need a production date at least 7 days out and the statutory objection language; The 180-day service window in 12 O.S. § 2004(I) is not paused by records requests or settlement talks; Just Legal Solutions serves all 77 Oklahoma counties',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Who needs to be served in an Oklahoma medical malpractice lawsuit?',
    answer: "Every defendant named in the petition — each doctor, each hospital or clinic entity, and each other party the caption lists. The petition controls the plan: a physician is served as an individual, a hospital corporation through its registered agent, and a medical group as an entity. Missing one named defendant leaves the case incomplete and invites a service dispute, so the caption gets read carefully before the first attempt.",
  },
  {
    question: 'Can I serve a doctor through the hospital where they practice?',
    answer: "No. The doctor is an individual under the service rules, and a nurse, unit clerk, or hospital administrator has no authority to accept papers for them. Personal delivery under 12 O.S. § 2004(C)(1) is the standard: hand the papers to the doctor in person, at the clinic, the hospital, or their home. If the doctor isn't available at the dwelling, substituted service on a resident 15 or older may apply — but a hospital front desk is not a dwelling and never substitutes.",
  },
  {
    question: 'How do I find the registered agent for a hospital or clinic?',
    answer: "Run the Oklahoma Secretary of State business entity search before dispatch. It returns the exact legal name, entity type, active or dissolved status, and the registered agent's street address in about two minutes. Many hospital systems list a corporate services company as agent. If the entity has no registered agent, or the agent can't be found, service may be made on the Secretary of State under 18 O.S. § 2010, and the entity then has 40 days to answer under 12 O.S. § 2012 instead of the usual 20.",
  },
  {
    question: 'Can a nurse or office manager accept malpractice papers?',
    answer: "Not for the doctor, and not for the entity either. A clinic receptionist, office manager, or nurse cannot accept service for a physician as an individual, and a hospital employee cannot accept for the corporation unless they hold one of the authorized roles — registered agent, officer, director, or managing or general agent. Handing papers to the wrong person creates a service dispute the defense can raise later. A clean, properly documented delivery to the right person beats a messy handoff every time.",
  },
  {
    question: 'How much time does a medical records subpoena need before production?',
    answer: "Under 12 O.S. § 2004.1, a documents-only subpoena served on a nonparty must set a production date at least seven days after service and carry the statutory language telling the custodian not to produce until that date so objections can be filed. The person served has 14 days to object in writing. If the plaintiff wants a nonparty's records before any defendant has answered the summons, leave of court is required for the first 30 days after service of the summons and petition.",
  },
  {
    question: 'Can a medical records subpoena be served by mail in Oklahoma?',
    answer: "Yes. 12 O.S. § 2004.1 allows service of a subpoena by certified mail with return receipt requested and delivery restricted to the person named in the subpoena. The server must show the date and place of mailing in the proof of service and attach the accepted return receipt. Mailing only counts if the named person actually accepts it — an unclaimed envelope is not service. In-person delivery by any person 18 or older remains the most reliable route for a records custodian.",
  },
  {
    question: 'Does the 180-day service clock pause while we wait for medical records?',
    answer: "No. The 180-day window in 12 O.S. § 2004(I) runs from filing, and it isn't paused by records subpoenas, settlement talks, or expert review. A malpractice case filed near the two-year deadline in 76 O.S. § 18 can have a service window that feels even shorter than it is. The practical answer is to run the records requests and the defendant service in parallel — dispatch both early, not one after the other.",
  },
  {
    question: 'What if the doctor has retired, moved, or left the state?',
    answer: "Start with the Oklahoma medical board license lookup and the last known practice address, then layer skip tracing over public records, property data, and professional listings. A retired doctor still gets served personally wherever they are. If the trail goes out of state, service follows the rules for out-of-state defendants, which usually means coordination with a server in the new state or the court's permission for an alternative method. The 180-day window still applies, so start the location work the day the case is filed.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Medical Malpractice Papers in Oklahoma"
        title="Serving Medical Malpractice Papers in Oklahoma"
        pageDescription="Medical malpractice service in Oklahoma: doctors served in person, hospitals through registered agents, records subpoenas, and the 180-day clock statewide."
        description="Medical malpractice service in Oklahoma: doctors served in person, hospitals through registered agents, records subpoenas, and the 180-day clock statewide."
        pageUrl="https://justlegalsolutions.org/blog/medical-malpractice-process-serving-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={118}
        services={['Process Serving', 'Skip Tracing', 'Records Subpoena Service', 'Court Filing', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving Medical Malpractice Papers in Oklahoma', item: 'https://justlegalsolutions.org/blog/medical-malpractice-process-serving-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving Medical Malpractice Papers in Oklahoma',
          datePublished: '2027-01-14',
          dateModified: '2027-01-14',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'medical malpractice process serving Oklahoma',
          'serve doctor Oklahoma',
          'serve hospital corporation Oklahoma',
          'medical records subpoena Oklahoma',
          'PLLC service Oklahoma',
          'medical malpractice service timing',
          'Oklahoma process server',
          '12 O.S. 2004.1'
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
            <Stethoscope className="w-4 h-4" />
            Medical Malpractice
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving Medical Malpractice Papers in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Medical malpractice defendants in Oklahoma are served on <strong>separate paths</strong>:
              each <strong>doctor in person</strong> under <strong>12 O.S. § 2004(C)(1)</strong>, each{' '}
              <strong>hospital or clinic entity through its registered agent</strong>, and{' '}
              <strong>medical records through subpoenas</strong> under <strong>12 O.S. § 2004.1</strong> —{' '}
              all inside the <strong>180-day window</strong> of <strong>12 O.S. § 2004(I)</strong>.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-01-14').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~13 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            A medical malpractice case arrives with a stack of defendants and a clock that doesn't wait. The surgeon, the hospital corporation, the clinic that employed them, maybe a nurse or an anesthesiologist — and often a filing deadline that makes the service window feel even tighter than the 180 days the statute gives you. Getting each defendant served the right way isn't a formality. In a case where the defense will pick apart every procedural seam, the service record has to be clean from the start.
          </p>

          <h2>The Caption Decides the Service Plan</h2>
          <p>
            Before a single attempt is made, read the caption. That short block of names at the top of the petition is the entire roadmap. Dr. Jane Smith, M.D. — an individual. St. Mary's Regional Medical Center, LLC — an entity. Tulsa Family Medicine, PLLC — another entity. Each one travels a different route to valid service, and no route overlaps the others. Serving the clinic's registered agent does not touch the doctor, and serving the doctor does nothing for the clinic.
          </p>
          <p>
            Every named defendant has to be served inside the 180-day window in 12 O.S. § 2004(I) unless the court extends it for good cause, and the motion for an extension has to be filed before the window closes. Miss one defendant and you've built a default problem into the case before anyone argues the merits. That's why the first conversation with a server should start with the petition, not the phone numbers.
          </p>

          <h2>Serving the Doctor Personally — Even at the Clinic</h2>
          <p>
            Under the service rules, a doctor is an individual no matter how many white coats are hanging in the office. Personal service under 12 O.S. § 2004(C)(1) means handing the summons and petition to the doctor in person, and it can happen at the clinic, the hospital, or the house. The person is what matters, not the building. A physician between surgeries, rounding on patients, or parked in the physicians' lounge is still a physician who can be served.
          </p>
          <p>
            What you can't do is leave the papers with the front-desk receptionist, the clinic manager, or a nurse and call it served. None of those people are authorized to accept for the doctor, any more than they'd accept for you. A handoff to the wrong person is worse than a failed attempt, because it creates a service dispute the defense can raise later. The affidavit has to name the actual recipient and explain the delivery — and the only recipient that works here is the doctor.
          </p>
          <p>
            Timing is part of the strategy. Surgeons operate on schedules that run early and run long, and clinic doors lock at five. A server who knows the pattern tries the clinic during morning hours, the hospital campus at shift change, and the home address on evenings and weekends. Substituted service at the dwelling — leaving papers with a resident 15 or older under 12 O.S. § 2004(C)(1) — can complete the job when the doctor genuinely isn't home, but a nurse's station is never a substitute for the dwelling.
          </p>

          <h2>Serving the Hospital: Registered Agents and Corporate Paths</h2>
          <p>
            Hospital entities run on the same corporate rails as every other Oklahoma business, and the service rules treat them accordingly. Under 12 O.S. § 2004, the registered agent sits at the top of the hierarchy, with an officer, director, or managing or general agent also authorized to accept. Before dispatch, run the Oklahoma Secretary of State business entity search — two minutes that answer four questions: the exact legal name, the entity type, whether the entity is active or dissolved, and the registered agent's street address.
          </p>
          <p>
            Many hospital systems list a corporate services company as their registered agent, which means the papers go to an address that may be hours from the hospital campus. That's fine — it's the address on the public record, and service there is service on the entity. What isn't service is handing the papers to a unit clerk, a hospital administrator, or the risk-management office. Employees accept for the corporation only when they hold one of the authorized roles, and guessing wrong hands the defense a ready-made motion.
          </p>
          <p>
            One caution worth flagging: a hospital that is owned or operated by a government body can add a separate layer of claims-handling rules, often involving notice deadlines under the Governmental Tort Claims Act. Those rules don't change how the summons is served, but they can change what else has to happen and when — a detail for counsel to confirm before the filing date.
          </p>

          <h2>Serving the Group Practice or PLLC</h2>
          <p>
            Medical groups are usually organized as PLLCs, and a PLLC follows the same service structure as any other LLC. The registered agent comes first, and when an entity has no agent, or the agent cannot be found, service may be made on the Secretary of State under 18 O.S. § 2010 — with the answer clock stretching to 40 days under 12 O.S. § 2012 instead of the usual 20. The agent's address on the SOS record is the anchor; a P.O. box on the record is a red flag worth documenting, because registered agents need a physical Oklahoma address.
          </p>
          <p>
            Malpractice captions frequently name the doctor and the group in the same petition — one individual, one entity, two deliveries, two returns. Serving the group's registered agent does not serve the doctor personally, and handing the doctor a copy at the office does not reach the entity. Each path is separate, each has its own deadline pressure inside the shared 180-day window, and each needs its own clean proof of service on the docket.
          </p>

          <h2>Subpoenas for Medical Records: A Separate Set of Rules</h2>
          <p>
            Records subpoenas under 12 O.S. § 2004.1 run on a different track than summons service, and malpractice cases live on that track constantly — the plaintiff needs the chart, the imaging, the operative notes, and the prescribing history long before depositions. Any person 18 or older can serve a subpoena, and service can be made by personal delivery or by certified mail with return receipt restricted to the named recipient. An unclaimed envelope is not service; the return receipt is the proof.
          </p>
          <p>
            A documents-only subpoena served on a nonparty must set a production date at least seven days out and must carry the statutory language telling the custodian not to produce until that date so objections can be filed. The records custodian then has 14 days to object in writing. And there's a timing rule plaintiffs' counsel watches closely: if the plaintiff wants a nonparty's records before any defendant has answered, leave of court is required during the first 30 days after service of the summons and petition.
          </p>
          <p>
            HIPAA sits on top of all of it, but it's a release gate, not a service barrier. A valid subpoena, paired with patient notice or a qualified protective order, is the mechanism that moves protected records lawfully. The server's job is delivery and proof — identifying the right custodian, delivering to the person named, and returning an affidavit that the court and the records department can both rely on. Sloppy subpoena service is how records get held, objections get filed, and discovery deadlines slip.
          </p>

          <h2>The Timing Trap: 180 Days, 20 to Answer, and the SOL</h2>
          <p>
            Malpractice cases are frequently filed near the two-year, discovery-based deadline in 76 O.S. § 18 — the clock runs from when the patient knew or should have known of the injury. Oklahoma doesn't currently require a general affidavit of merit with the petition, which puts even more weight on the mechanics that follow filing: the service window, the answer clock, and the proof. Once service lands, the defendant has 20 days to answer under 12 O.S. § 2006(A), and the case starts moving.
          </p>
          <p>
            The trap is the overlap. The 180-day service window isn't paused by records requests, expert review, or settlement conversations — those all run in parallel with the service deadline, and they don't extend it. A case filed in late February with a statute that runs out in May can burn its entire service window while counsel waits on charts. The practical answer is to run the tracks together: records subpoenas go out the same week the summonses do, and the server's attempts are scheduled aggressively from day one.
          </p>

          <h2>Proof of Service That Holds Up in Court</h2>
          <p>
            Malpractice defense firms scrutinize service returns the way they scrutinize the chart. The affidavit should name the person actually served, describe their role — the doctor, the registered agent, the records custodian — and state the date, time, and address of the delivery. GPS coordinates and photos support the narrative, but the narrative itself carries the weight. If a physician later claims the papers never arrived, the return is the defense's first exhibit and your client's best answer.
          </p>
          <p>
            That's the standard the whole assignment is built toward: a service record that survives a motion, an answer that arrives on time, and a docket with no procedural cracks for the defense to exploit. It's unglamorous work, but in malpractice litigation it's the foundation everything else stands on.
          </p>

          <h2>How a Licensed Server Fits Into the Case</h2>
          <p>
            A professional server brings the two things a malpractice case needs: coverage and documentation. Coverage means attempts at the clinic, the hospital campus, and the home at the times doctors are actually reachable — plus the skip tracing that finds a physician who has moved practices, retired, or left the state. Documentation means a GPS-tracked attempt log and a court-ready affidavit for every defendant, delivered promptly so the filing deadline is never the emergency.
          </p>
          <p>
            At Just Legal Solutions, we handle the full spread — doctor service, entity service through registered agents, records subpoenas, and skip tracing — across all 77 Oklahoma counties. When the caption has four defendants and one clock, that's exactly the kind of coordination that keeps the case on schedule.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Serving a Malpractice Case in Oklahoma?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions serves all 77 Oklahoma counties from our Glenpool home office with flat-rate pricing, GPS-tracked service, and court-ready affidavits delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:5393676832" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Call (539) 367-6832
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                Get a Written Quote
              </Link>
            </div>
          </div>
          </article>
          
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/process-serving-healthcare-hospitals-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Healthcare Service</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Process Serving at Healthcare Facilities in Oklahoma</h3>
                <p className="text-sm text-gray-600">HIPAA limits, visitor policies, and who can accept papers at hospitals and clinics.</p>
              </Link>
              <Link href="/blog/how-to-serve-a-subpoena-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Subpoena Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">How to Serve a Subpoena in Oklahoma</h3>
                <p className="text-sm text-gray-600">Subpoena duces tecum rules, witness fees, and service methods under 12 O.S. § 2004.1.</p>
              </Link>
              <Link href="/blog/serve-business-debt-lawsuit-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Entity Service</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Serving Business Debt Lawsuits in Oklahoma</h3>
                <p className="text-sm text-gray-600">Registered agents, LLCs, and corporations — the entity service path in practice.</p>
              </Link>
              <Link href="/blog/oklahoma-180-day-rule-service-process" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Deadline Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Oklahoma's 180-Day Service Rule</h3>
                <p className="text-sm text-gray-600">The service window in 12 O.S. § 2004(I), extensions, and the consequences of missing it.</p>
              </Link>
            </div>
          </section>

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
                <FileText className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Multiple Defendants, One Clock?</h2>
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
            <h2>Conclusion</h2>
            <p>
            Serving medical malpractice papers in Oklahoma comes down to three disciplines: reading the caption, serving each defendant on the right path, and respecting the clock. Doctors are individuals served in person; hospitals and PLLCs are entities served through registered agents; records move under subpoenas with their own notice and objection rules. Every track runs inside the same 180-day window, and none of them wait for the others.
          </p>
          <p>
            At Just Legal Solutions, we handle the whole spread — doctor service, entity service, records subpoenas, and skip tracing — across all 77 Oklahoma counties. If your caption has multiple defendants and one deadline, we'll keep every service on schedule and every return court-ready.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need malpractice papers served in Oklahoma?{' '}
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
