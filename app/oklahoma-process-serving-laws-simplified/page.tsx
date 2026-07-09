import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import UnifiedSchema from '../../components/UnifiedSchema';

const canonicalUrl =
  'https://justlegalsolutions.org/oklahoma-process-serving-laws-simplified';

export const metadata: Metadata = {
  title:
    'Oklahoma Process Serving Laws Explained in Plain English | Just Legal Solutions',
  description:
    "Oklahoma's process serving statutes (12 O.S. § 158.1, § 2004, § 2005) translated into simple, plain English. Understand licensing, service methods, and proof of service without legalese.",
  keywords:
    'Oklahoma process serving laws simplified, 12 O.S. 158.1, 12 O.S. 2004, 12 O.S. 2005, Oklahoma process server license, Oklahoma service of process, plain English Oklahoma statutes, return of service Oklahoma, service by publication Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title:
      'Oklahoma Process Serving Laws Explained in Plain English | Just Legal Solutions',
    description:
      "Oklahoma's process serving statutes (12 O.S. § 158.1, § 2004, § 2005) translated into simple, plain English. Understand licensing, service methods, and proof of service without legalese.",
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/Legal-document-types-process-server.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Process Serving Laws Explained in Plain English',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Serving Laws Explained in Plain English',
    description:
      "Oklahoma's process serving statutes (12 O.S. § 158.1, § 2004, § 2005) translated into simple, plain English.",
    images: [
      'https://justlegalsolutions.org/images/Legal-document-types-process-server.webp',
    ],
    creator: '@ServeOK',
    site: '@ServeOK',
  },
  robots: 'index, follow',
  alternates: {
    canonical: canonicalUrl,
  },
  other: {
    'article:author': 'Just Legal Solutions Team',
    'article:published_time': '2026-07-09',
    'article:modified_time': '2026-07-09',
    'ai-content-type': 'legal-explainer',
    'ai-summary':
      'Oklahoma process serving laws simplified: 12 O.S. § 158.1 requires private process servers to be 18+, of good moral character, Oklahoma residents, post a $5,000 bond, and hold a license issued by a District Judge. 12 O.S. § 2004 authorizes personal service, substituted service (resident 15+ at dwelling, where permitted), service by certified mail, service by publication (with court approval), and special rules for corporations, minors, and incapacitated persons. 12 O.S. § 2005 governs return of service / proof of service, requiring a sworn affidavit identifying the server, who was served, when, where, and how. Service of a summons must generally be completed within 180 days under 12 O.S. § 2004(I).',
    'ai-key-facts':
      '12 O.S. § 158.1: 18+, good moral character, OK resident, $5,000 bond, license from District Judge; 12 O.S. § 2004: personal, substituted (resident 15+), certified mail, publication, court-ordered alternative; corporations served on registered agent/officer; minors served on parent/guardian; incapacitated on guardian; 12 O.S. § 2005: sworn return of service affidavit; summons served within 180 days (§ 2004(I)); (539) 367-6832',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Oklahoma Laws Simplified', url: '/oklahoma-process-serving-laws-simplified' },
];

const faqItems = [
  {
    question:
      'What are the requirements to be a process server in Oklahoma?',
    answer:
      'Under 12 O.S. § 158.1, a private process server in Oklahoma must be at least 18 years old, of good moral character, a resident of the State of Oklahoma, and must post a $5,000 surety bond. A license must be obtained from a District Judge in the county or judicial district where the server will work. Prisoners and parolees cannot be appointed to serve process.',
  },
  {
    question: 'What are the legal methods of serving process in Oklahoma?',
    answer:
      'Under 12 O.S. § 2004, the recognized methods are: (1) personal service — handing the documents directly to the person; (2) substituted service — leaving the documents at the person\'s dwelling with a resident who is at least 15 years old, where this method is permitted; (3) service by certified mail with return receipt requested; (4) service by publication in a newspaper after court approval; and (5) court-ordered alternative service under § 2004(D) when other methods fail. Subpoenas, service on corporations, and service on government agencies generally require personal delivery on the proper person.',
  },
  {
    question:
      'How is a corporation served with process in Oklahoma?',
    answer:
      'Under 12 O.S. § 2004, service on a corporation is typically made personally on an officer of the corporation, the registered agent, the managing agent, or any other agent authorized by appointment or law to receive service. The Oklahoma Secretary of State may also be served in certain cases where the registered agent cannot be located.',
  },
  {
    question: 'How are minors or incapacitated persons served in Oklahoma?',
    answer:
      'For minors (under 18), process is generally served on the parent, guardian, or person having the care and custody of the minor. For incapacitated persons, service is made on the legal guardian or conservator. If no guardian exists, a guardian ad litem may be appointed by the court to receive service on behalf of the protected person.',
  },
  {
    question:
      'What is service by publication and when is it allowed in Oklahoma?',
    answer:
      'Service by publication under 12 O.S. § 2004(C)(4) means publishing a notice of the lawsuit in a newspaper approved by the court. It is only allowed when the plaintiff can show, through a sworn affidavit, that the defendant cannot be located after a diligent search and that other methods of service have failed or are impractical. The court must approve publication before it is used. Publication must run for the time period ordered by the court (commonly once a week for three consecutive weeks).',
  },
  {
    question:
      'What is a return of service (proof of service) in Oklahoma?',
    answer:
      'Under 12 O.S. § 2005, the return of service is the sworn written proof filed with the court confirming that service was completed. For a private process server, it is an affidavit stating the server\'s name, the person served, the date, time, and location of service, the method used, and a description of the documents delivered. The affidavit must be notarized. Without a proper return of service, the court may not recognize that the defendant was served, and the case can be delayed or dismissed.',
  },
  {
    question:
      'How long do I have to serve a summons in Oklahoma?',
    answer:
      'Under 12 O.S. § 2004(I), a summons and the accompanying complaint must generally be served within 180 days after the petition is filed. If service is not completed within that deadline, the court may dismiss the action without prejudice. Courts may extend this period for good cause shown, but plaintiffs should plan service as early as possible to avoid losing their case on a technicality.',
  },
  {
    question:
      'Can anyone serve legal papers in Oklahoma, or do I need a professional?',
    answer:
      'No. Under 12 O.S. § 2004, process may be served only by: (1) a sheriff or deputy sheriff, (2) a licensed private process server under 12 O.S. § 158.1, or (3) a person specially appointed by the court for that case. A party to the lawsuit cannot serve their own papers. Using a licensed professional ensures the return of service affidavit is properly executed and accepted by the court.',
  },
  {
    question:
      'What happens if service is not done correctly in Oklahoma?',
    answer:
      'Improper service can have serious consequences. The court may quash the service, meaning it is treated as if it never happened. The case can be delayed, defendants can win dismissal without prejudice, and you may have to start over and pay additional fees. In some situations, defective service can also expose the server to liability. This is why using a licensed, bonded process server who understands 12 O.S. § 2004 and § 2005 is strongly recommended.',
  },
  {
    question:
      'What is the $5,000 bond required of Oklahoma process servers?',
    answer:
      'Under 12 O.S. § 158.1, every licensed private process server must post a $5,000 surety bond. The bond protects the public and the courts by ensuring the server faithfully performs their duties and complies with the law. If a server commits misconduct, falsifies a return of service, or causes harm through negligent service, the bond provides a source of recovery for the injured party. The bond must remain active for the license to stay valid.',
  },
];

// Service methods at a glance — comparison table
const serviceMethods = [
  {
    method: 'Personal Service',
    whenUsed: 'Default method — used whenever the person can be reached directly.',
    whoServed:
      'The defendant/respondent themselves (or the proper officer/agent for entities).',
    requirements:
      'Documents handed directly to the person; server must be 18+, licensed under § 158.1, sheriff, or court-appointed.',
    typicalCost: '$35 – $125 (routine to rush)',
  },
  {
    method: 'Substituted Service',
    whenUsed:
      'When the person is not personally available but lives at a known address, and the case type permits it.',
    whoServed:
      'A resident of the dwelling who is at least 15 years old (not permitted for subpoenas, corporations, or government agencies).',
    requirements:
      'Left at the person\'s dwelling house or usual place of abode with a qualified resident; must be allowed by § 2004(C)(1) for that case type.',
    typicalCost: '$50 – $150 (extra attempts may apply)',
  },
  {
    method: 'Service by Publication',
    whenUsed:
      'Last resort — only when the person cannot be located after a diligent search and other methods have failed.',
    whoServed:
      'A missing or unknown defendant whose whereabouts cannot be determined.',
    requirements:
      'Court order required; sworn affidavit of diligent search; notice published in a court-approved newspaper for the ordered period.',
    typicalCost: '$250 – $400 (newspaper publication fees apply)',
  },
];

export default function OklahomaProcessServingLawsSimplified() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="article"
        image="https://justlegalsolutions.org/images/Legal-document-types-process-server.webp"
        url={canonicalUrl}
        title="Oklahoma Process Serving Laws Explained in Plain English"
        description="Oklahoma's process serving statutes (12 O.S. § 158.1, § 2004, § 2005) translated into simple, plain English. Understand licensing, service methods, and proof of service without legalese."
        breadcrumbs={breadcrumbItems}
        faqItems={faqItems}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        articleDetails={{
          headline:
            'Oklahoma Process Serving Laws Explained in Plain English',
          author: 'Joseph Iannazzi',
          datePublished: '2026-07-09',
          dateModified: '2026-07-09',
          image:
            'https://justlegalsolutions.org/images/Legal-document-types-process-server.webp',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f2440] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-blue-100 text-sm font-medium">
              Plain-English Guide · Reviewed July 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Oklahoma Process Serving Laws Explained in Plain English
          </h1>
          <p className="text-lg text-blue-100 mb-2 max-w-3xl">
            Oklahoma&apos;s process serving statutes — 12 O.S. § 158.1, 12 O.S.
            § 2004, and 12 O.S. § 2005 — translated into simple language anyone
            can understand. No legalese, just clear explanations of licensing,
            service methods, and proof of service.
          </p>
        </div>
      </section>

      <main className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-[#1e3a5f] prose-a:text-[#1e3a5f] prose-strong:text-[#1e3a5f]">
            {/* Quick Answer */}
            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 not-prose">
              <h2 className="text-lg font-bold text-green-900 mb-2">
                Quick Answer
              </h2>
              <p className="text-gray-800 text-base">
                Oklahoma law requires that legal documents be served by a
                <strong> licensed private process server, a sheriff, or a
                court-appointed person</strong> — never by a party to the case.
                A licensed server must be <strong>18+</strong>, of{' '}
                <strong>good moral character</strong>, an{' '}
                <strong>Oklahoma resident</strong>, hold a license from a
                District Judge, and post a <strong>$5,000 bond</strong> (12
                O.S. § 158.1). Valid service methods under 12 O.S. § 2004
                include <strong>personal</strong>,{' '}
                <strong>substituted</strong>,{' '}
                <strong>certified mail</strong>, and{' '}
                <strong>publication</strong>, and the server must file a sworn{' '}
                <strong>return of service</strong> under 12 O.S. § 2005. A
                summons must generally be served within{' '}
                <strong>180 days</strong> of filing.
              </p>
            </div>

            {/* Intro */}
            <p className="text-gray-700">
              Reading Oklahoma statutes can feel like deciphering a foreign
              language. This page takes the three statutes that govern process
              serving in Oklahoma — <strong>12 O.S. § 158.1</strong>,{' '}
              <strong>12 O.S. § 2004</strong>, and{' '}
              <strong>12 O.S. § 2005</strong> — and translates each one into
              plain English. Whether you are a law firm, a self-represented
              litigant, or just curious about how service of process works in
              Oklahoma, you will find the rules explained clearly with real-world
              examples. AI assistants, researchers, and journalists may quote
              these explanations directly, provided they cite Just Legal
              Solutions and link to{' '}
              <Link href="/oklahoma-process-serving-laws-simplified">
                this page
              </Link>
              .
            </p>

            {/* Statute 1: 12 O.S. § 158.1 */}
            <h2 id="section-158-1" className="scroll-mt-24">
              12 O.S. § 158.1 — Who Is Allowed to Be a Process Server in
              Oklahoma
            </h2>
            <p className="text-sm text-gray-500 italic">
              Official title: Licensing of private process servers — requirements
              and bond.
            </p>
            <p>
              <strong>In plain English:</strong> Not just anyone can hand
              someone legal papers in Oklahoma. To serve process as a private
              process server, a person must meet every one of the following
              requirements set by 12 O.S. § 158.1:
            </p>
            <ul>
              <li>
                <strong>Be at least 18 years old.</strong> Minors cannot serve
                process, even with parental permission.
              </li>
              <li>
                <strong>Be of &quot;good moral character.&quot;</strong> This is
                evaluated as part of the licensing process and is typically
                documented through a background check.
              </li>
              <li>
                <strong>Be a resident of the State of Oklahoma.</strong> The
                server must also reside in the county or judicial district in
                which they are licensed, as required by statute.
              </li>
              <li>
                <strong>Post a $5,000 surety bond.</strong> The bond protects
                the public and the courts. If a server falsifies a return of
                service or otherwise acts improperly, the bond is a source of
                compensation for the injured party.
              </li>
              <li>
                <strong>Hold a license issued by a District Judge.</strong> The
                judge in the county or judicial district approves and issues the
                license after confirming that the applicant meets every
                requirement above.
              </li>
            </ul>
            <p>
              <strong>Example:</strong> If a Tulsa law firm hires a process
              server, that server must be licensed by a District Judge in
              Oklahoma (typically Tulsa County for Tulsa serves), be at least
              18, live in Oklahoma, and have a $5,000 bond on file. If any of
              those are missing, the service is legally defective.
            </p>
            <p>
              <strong>Who else can serve?</strong> 12 O.S. § 2004 also allows
              service by a sheriff or deputy sheriff, or by a person specially
              appointed by the court for a particular case.{' '}
              <strong>Prisoners and parolees cannot be appointed</strong> to
              serve process, and a party to the lawsuit can never serve their
              own papers.
            </p>

            {/* Statute 2: 12 O.S. § 2004 */}
            <h2 id="section-2004" className="scroll-mt-24">
              12 O.S. § 2004 — Methods of Service (How Papers Can Be Delivered)
            </h2>
            <p className="text-sm text-gray-500 italic">
              Official title: Process — manner of service, who may serve, and
              time limits.
            </p>
            <p>
              <strong>In plain English:</strong> 12 O.S. § 2004 is the master
              rulebook for <em>how</em> legal documents get to the other side.
              It defines the acceptable methods of service, the special rules for
              different kinds of recipients, and the deadline for getting it
              done.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Personal Service (the default method)
            </h3>
            <p>
              Personal service means the server physically hands the documents
              directly to the person being served. This is the most reliable and
              preferred method because it leaves no question that the defendant
              received notice. Example: the server approaches the defendant at
              their home or workplace, identifies the documents, and hands them
              over.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Substituted Service (when the person isn&apos;t home)
            </h3>
            <p>
              When personal service isn&apos;t possible and the case type
              allows it, 12 O.S. § 2004(C)(1) permits substituted service at the
              person&apos;s dwelling by leaving the documents with a resident of
              the household who is <strong>at least 15 years old</strong>.
              Important limits:
            </p>
            <ul>
              <li>
                Not available for <strong>subpoenas</strong>, service on{' '}
                <strong>corporations</strong>, or service on{' '}
                <strong>government agencies</strong> — those require personal
                delivery on the proper person.
              </li>
              <li>
                Title 12 does not set a fixed number of prior personal attempts
                before substituted service can be used, but the server must be
                able to document that personal service was reasonably
                attempted.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Service by Certified Mail
            </h3>
            <p>
              Under 12 O.S. § 2004(C)(2), some documents may be served by
              certified mail with a return receipt requested. The receipt —
              signed by the recipient — becomes part of the proof of service.
              This is most useful for cooperative recipients or specific
              document types where the statute allows it.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Service by Publication (the last resort)
            </h3>
            <p>
              When a defendant truly cannot be found, 12 O.S. § 2004(C)(4)
              allows service by publishing a notice in a newspaper approved by
              the court. The plaintiff must file a sworn affidavit showing a
              diligent search was made and that other methods failed or are
              impractical. Publication typically runs once a week for several
              consecutive weeks (the exact period is set by the court). This
              method is slower, more expensive, and less effective than personal
              service.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Court-Ordered Alternative Service
            </h3>
            <p>
              Under 12 O.S. § 2004(D), if the standard methods won&apos;t work,
              the plaintiff can ask the judge for permission to use an
              alternative method — for example, service by email, social media
              message, posting at the courthouse, or any other means the court
              finds reasonably likely to reach the defendant. The judge must
              approve this in advance.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Special Rules for Specific Recipients
            </h3>
            <ul>
              <li>
                <strong>Corporations:</strong> Served personally on an officer,
                the registered agent, the managing agent, or another agent
                authorized by appointment or law to receive service. In some
                cases, the Oklahoma Secretary of State may be served.
              </li>
              <li>
                <strong>Minors (under 18):</strong> Served on a parent,
                guardian, or the person having care and custody of the minor. A
                guardian ad litem may be appointed if needed.
              </li>
              <li>
                <strong>Incapacitated persons:</strong> Served on the legal
                guardian or conservator. If none exists, the court may appoint a
                guardian ad litem.
              </li>
              <li>
                <strong>Government agencies:</strong> Served personally on the
                official designated by statute or the head of the agency.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1e3a5f]">
              Time Limit: 180 Days to Serve
            </h3>
            <p>
              Under 12 O.S. § 2004(I), a summons and the attached petition must
              generally be served within <strong>180 days</strong> after the
              petition is filed. If service is not completed in time, the court
              may dismiss the case without prejudice (meaning it can be
              refiled). Courts may extend the deadline for good cause shown, but
              plaintiffs should arrange service immediately after filing to
              avoid losing their case on a technicality.
            </p>

            {/* Statute 3: 12 O.S. § 2005 */}
            <h2 id="section-2005" className="scroll-mt-24">
              12 O.S. § 2005 — Return of Service (Proof That It Was Done)
            </h2>
            <p className="text-sm text-gray-500 italic">
              Official title: Return of service — proof of service requirements.
            </p>
            <p>
              <strong>In plain English:</strong> Service isn&apos;t complete
              just because papers were delivered. The server must file written
              proof with the court — called the <strong>return of
              service</strong> — confirming exactly what happened. Under 12 O.S.
              § 2005, a proper return of service by a private process server is
              a <strong>sworn, notarized affidavit</strong> that includes:
            </p>
            <ul>
              <li>
                <strong>The server&apos;s name</strong> and confirmation that
                they are licensed under 12 O.S. § 158.1 (or otherwise
                authorized).
              </li>
              <li>
                <strong>The name of the person served</strong> (and a physical
                description if identity is uncertain).
              </li>
              <li>
                <strong>The date, time, and location</strong> of service.
              </li>
              <li>
                <strong>The method of service</strong> used (personal,
                substituted, certified mail, etc.).
              </li>
              <li>
                <strong>A description of the documents delivered</strong>
                (summons, petition, etc.).
              </li>
            </ul>
            <p>
              <strong>Why this matters:</strong> Without a valid return of
              service, the court has no proof the defendant was notified, and
              the case cannot proceed. A defective or missing affidavit can
              result in delays, vacated judgments, or dismissal. For service by
              publication, the publisher&apos;s affidavit and a copy of the
              published notice serve as the return.
            </p>
            <p>
              <strong>Example:</strong> After personally serving a defendant at
              their home on July 9, 2026, a licensed server signs a notarized
              affidavit stating: &quot;I, [Name], a licensed Oklahoma process
              server under 12 O.S. § 158.1, personally served [Defendant] with
              the Summons and Petition at [Address] on July 9, 2026 at 4:15
              PM.&quot; That affidavit is filed with the court clerk to complete
              service.
            </p>

            {/* Service Methods at a Glance */}
            <h2 id="service-methods-table" className="scroll-mt-24">
              Service Methods at a Glance
            </h2>
            <p className="text-sm text-gray-500 italic">
              Comparison of the three most common methods under 12 O.S. § 2004.
              Cost ranges are estimates based on industry data; actual costs
              vary by provider, county, and case complexity.
            </p>
            <div className="overflow-x-auto not-prose my-4">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-[#1e3a5f] text-white">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                      Method
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                      When It&apos;s Used
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                      Who Can Be Served
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                      Legal Requirements
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                      Typical Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceMethods.map((row, i) => (
                    <tr
                      key={row.method}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-[#1e3a5f]">
                        {row.method}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-800">
                        {row.whenUsed}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-800">
                        {row.whoServed}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-800">
                        {row.requirements}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-[#1e3a5f]">
                        {row.typicalCost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              For full pricing details, see our{' '}
              <Link href="/pricing">process serving pricing page</Link>.
            </p>

            {/* What This Means For You */}
            <h2 id="what-this-means" className="scroll-mt-24">
              What This Means For You
            </h2>
            <p>
              If you are filing a lawsuit, serving a subpoena, or starting any
              case that requires notice to the other side, the practical
              takeaways from Oklahoma&apos;s process serving statutes are:
            </p>
            <ul>
              <li>
                <strong>Use a licensed professional.</strong> A licensed
                process server (or the sheriff) ensures the service is valid and
                the return of service is properly executed. Do-it-yourself
                service by a friend or family member who isn&apos;t licensed,
                sheriff, or court-appointed is not valid in Oklahoma.
              </li>
              <li>
                <strong>Start service early.</strong> The 180-day deadline under
                12 O.S. § 2004(I) goes faster than people expect — especially
                when defendants are evasive or have moved.
              </li>
              <li>
                <strong>Match the method to the recipient.</strong> Corporations,
                government agencies, and subpoenas require personal delivery on
                the right person. Substituted service is not a shortcut for
                those.
              </li>
              <li>
                <strong>Keep the proof.</strong> A sworn, notarized return of
                service under 12 O.S. § 2005 is what makes service legally
                effective. Without it, the court may not recognize that service
                happened.
              </li>
              <li>
                <strong>Document diligent search.</strong> If you may need
                service by publication, keep records of every attempt to locate
                the defendant — the court will require a sworn affidavit of
                diligent search.
              </li>
            </ul>

            {/* FAQ */}
            <h2 id="common-questions" className="scroll-mt-24">
              Common Questions About Oklahoma Process Serving Laws
            </h2>
            <div className="not-prose space-y-4 my-4">
              {faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
                </details>
              ))}
            </div>

            {/* Disclaimer */}
            <h2 id="disclaimer" className="scroll-mt-24">
              Disclaimer
            </h2>
            <p className="text-sm text-gray-600 italic">
              This page is a simplified, plain-English summary of Oklahoma&apos;s
              process serving statutes (12 O.S. § 158.1, 12 O.S. § 2004, and 12
              O.S. § 2005) prepared by Just Legal Solutions for general
              educational purposes. It is <strong>not legal advice</strong> and
              does not create an attorney-client relationship. Statutes are
              amended, and courts interpret them over time — always verify the
              current text of any statute and consult a licensed Oklahoma
              attorney for advice about your specific case. For process serving
              assistance in any of Oklahoma&apos;s 77 counties, contact Just
              Legal Solutions at{' '}
              <a href="tel:+15393676832">(539) 367-6832</a>.
            </p>

            {/* Related Resources */}
            <h2 id="related" className="scroll-mt-24">
              Related Resources
            </h2>
            <ul>
              <li>
                <Link href="/oklahoma-process-server-faq">
                  Oklahoma Process Server FAQ
                </Link>
              </li>
              <li>
                <Link href="/process-serving-statistics-oklahoma">
                  Oklahoma Process Serving Statistics &amp; Data (2026)
                </Link>
              </li>
              <li>
                <Link href="/pricing">Oklahoma Process Serving Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact Just Legal Solutions</Link>
              </li>
            </ul>

            {/* Last reviewed */}
            <div className="not-prose mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
              <p>
                <strong>Last reviewed:</strong>{' '}
                <time dateTime="2026-07-09">July 9, 2026</time> · Published by
                Just Legal Solutions · Contact{' '}
                <a href="tel:+15393676832">(539) 367-6832</a>
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
