import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  MapPin,
  Phone,
  AlertTriangle,
  BookOpen,
  Gavel,
  ClipboardList,
  Users,
  Building2,
  Search,
} from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

const url = 'https://justlegalsolutions.org/subpoena-service-oklahoma';
const title = 'Subpoena Service Oklahoma | Witness, Deposition & Records Subpoenas | (539) 367-6832';
const description =
  'Oklahoma subpoena service by a licensed process server. Witness, deposition, records (subpoena duces tecum), and trial subpoenas served under 12 O.S. § 2004.1 across all 77 counties. Same-day and rush available. Starting at $60 standard · $100 rush.';

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'subpoena service Oklahoma, Oklahoma subpoena process server, serve a subpoena Oklahoma, witness subpoena Oklahoma, deposition subpoena Oklahoma, subpoena duces tecum Oklahoma, records subpoena Oklahoma, trial subpoena Tulsa, 12 O.S. 2004.1, subpoena witness fee Oklahoma, Tulsa subpoena server, serve subpoena records custodian Oklahoma',
  authors: [{ name: 'Just Legal Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title,
    description,
    url,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-020-subpoena-service-hero.png',
        width: 1200,
        height: 630,
        alt: 'Subpoena service across Oklahoma by Just Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    creator: '@ServeOK',
    title,
    description,
    images: ['https://justlegalsolutions.org/image-pack/images/image-020-subpoena-service-hero.png'],
  },
  alternates: { canonical: url },
  other: {
    'ai-content-type': 'service',
    'ai-summary':
      'Oklahoma subpoena service covering witness, deposition, records (duces tecum), and trial subpoenas under 12 O.S. § 2004.1, served by a licensed process server across all 77 counties.',
    'ai-key-facts':
      'Types: witness, deposition, records duces tecum, trial. Governing law: 12 O.S. § 2004.1. Service area: all 77 Oklahoma counties. Pricing: standard $60, rush $100, same-day starting at $150.',
  },
};

const faqs = [
  {
    question: 'What is a subpoena under Oklahoma law?',
    answer:
      "Under Oklahoma Statute 12 O.S. § 2004.1, a subpoena is a court order compelling a person to either (a) appear and give testimony at a deposition, hearing, or trial, or (b) produce designated documents, electronically stored information (ESI), or tangible things. A subpoena commanding both testimony and production is commonly called a subpoena duces tecum. Subpoenas may be issued by the court clerk or signed and issued by an Oklahoma-licensed attorney as an officer of the court.",
  },
  {
    question: 'Who can serve a subpoena in Oklahoma?',
    answer:
      "Under 12 O.S. § 2004.1(C), any person who is at least eighteen (18) years of age and not a party to the action may serve a subpoena. In practice, most attorneys use a licensed process server because private servers are faster than the sheriff, provide detailed proof of service affidavits, and handle evasive or hostile witnesses professionally. Just Legal Solutions is bonded under 12 O.S. § 158.1 and NAPPS-listed (Member ID 14801).",
  },
  {
    question: 'How is a subpoena served in Oklahoma?',
    answer:
      "Personal delivery to the named person is the gold standard and is required for subpoenas commanding attendance. For records-only subpoenas (duces tecum) directed at corporate custodians, service may be made on the corporation's registered agent or designated records custodian. The server tenders applicable witness fees and mileage at the time of service when required. A notarized affidavit of service — sometimes called a 'return of service' — is then filed with the issuing court.",
  },
  {
    question: 'Do I have to pay witness fees when serving a subpoena in Oklahoma?',
    answer:
      "Yes. Under 28 O.S. § 81, witnesses are entitled to a statutory attendance fee plus mileage calculated from their residence to the place of appearance. The witness fee must be tendered at the time of service for most fact-witness subpoenas (public employee/records-custodian subpoenas are often exempt). Just Legal Solutions will advance and tender the witness fee on your behalf and include it on your invoice so service is not defeated by a fee-tender challenge.",
  },
  {
    question: 'How much does it cost to serve a subpoena in Oklahoma?',
    answer:
      "Our subpoena service starts at $60 for standard service (3-5 business days) and $100 for rush service (1-2 business days). Same-day and after-hours service is available starting at $150 depending on location. Additional fees apply for subpoenas requiring long-distance travel outside our primary Tulsa-metro coverage area, plus the statutory witness fee tendered at service. All pricing is posted on our /pricing page.",
  },
  {
    question: 'Can you serve a subpoena duces tecum on a hospital or corporation?',
    answer:
      "Yes. Subpoenas duces tecum for medical records, employment records, bank records, phone records, or corporate documents are one of our most-requested services. We serve the records custodian directly, deliver a HIPAA-compliant cover letter where required, and coordinate production by agreed deadlines. Because many records custodians prefer a direct business-hours delivery, we schedule these services during weekday business hours unless rush is required.",
  },
  {
    question: 'What happens if a witness avoids service?',
    answer:
      "Evasion is common, especially with hostile witnesses. Our process servers document each attempt with timestamps, GPS coordinates, and photographic evidence. After three documented good-faith attempts at the most recent known address, your attorney can move for alternative service methods. We also offer skip tracing (starting at $75) to locate a witness whose address is stale or unknown, and we pair skip tracing with a follow-up service attempt at no extra coordination charge.",
  },
  {
    question: 'What is the difference between a deposition subpoena and a trial subpoena?',
    answer:
      "A deposition subpoena commands a witness to appear at a deposition — typically at an attorney's office or court reporter's suite — to give sworn testimony before trial. A trial subpoena commands the witness to appear at the courthouse for a scheduled hearing or trial. Both are governed by 12 O.S. § 2004.1 and follow the same service rules. The distinction matters for witness fees, travel mileage calculations, and the specificity required in the subpoena's command language.",
  },
  {
    question: 'Can I serve a subpoena across Oklahoma county lines?',
    answer:
      "Yes. An Oklahoma-issued subpoena is enforceable statewide. Just Legal Solutions serves subpoenas in all 77 Oklahoma counties, with direct in-house coverage in Tulsa, Wagoner, Rogers, Osage, Creek, Okmulgee, and Pawnee counties, and reliable NAPPS-partner coverage for Oklahoma City, Lawton, Enid, Muskogee, and every rural county. Out-of-state subpoenas must be domesticated first — see our /out-of-state-subpoena page for the UIDDA process.",
  },
  {
    question: 'How fast can you serve my Oklahoma subpoena?',
    answer:
      "Same-day service is available in the Tulsa metro if the subpoena is received before 2:00 PM on a business day. Rush service (1-2 business days) is available statewide. Standard service is completed within 3-5 business days. For trial subpoenas with short fuse deadlines, call (539) 367-6832 directly — we will coordinate an immediate same-day attempt when the schedule allows.",
  },
];

const subpoenaTypes = [
  {
    icon: Users,
    title: 'Witness Subpoena',
    description:
      'Compels a person to appear at trial, a hearing, or a deposition to give sworn testimony. Must include the statutory witness fee and mileage tendered at service.',
    price: 'From $60',
    color: 'blue',
  },
  {
    icon: FileText,
    title: 'Subpoena Duces Tecum (Records)',
    description:
      'Commands a records custodian — hospital, bank, employer, phone carrier — to produce specified documents or ESI. HIPAA cover letters handled where required.',
    price: 'From $60',
    color: 'indigo',
  },
  {
    icon: Gavel,
    title: 'Trial Subpoena',
    description:
      "Compels a witness to appear at a scheduled court trial or hearing. Same-day and rush options available for short-fuse trial deadlines.",
    price: 'From $100 rush',
    color: 'rose',
  },
  {
    icon: ClipboardList,
    title: 'Deposition Subpoena',
    description:
      "Commands appearance at a pretrial deposition for sworn testimony. Scheduled delivery to coordinate with the court reporter's availability.",
    price: 'From $60',
    color: 'emerald',
  },
  {
    icon: Building2,
    title: 'Corporate Records Subpoena',
    description:
      "Served on a corporation's registered agent or designated records custodian for business records, employment files, or ESI production.",
    price: 'From $60',
    color: 'amber',
  },
  {
    icon: Search,
    title: 'Skip Trace + Subpoena',
    description:
      'Witness with a stale or unknown address? We locate them via proprietary legal databases, then serve the subpoena at the verified address.',
    price: 'From $135 combined',
    color: 'violet',
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  rose: 'bg-rose-600',
  emerald: 'bg-emerald-600',
  amber: 'bg-amber-600',
  violet: 'bg-violet-600',
};

export default function SubpoenaServiceOklahomaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UnifiedSchema
        pageType="service"
        url={url}
        title={title}
        description={description}
        breadcrumbs={[
          { name: 'Home', url: 'https://justlegalsolutions.org/' },
          { name: 'Subpoena Service Oklahoma', url },
        ]}
        faqs={faqs}
        serviceDetails={{
          name: 'Oklahoma Subpoena Service',
          description:
            'Licensed service of witness, deposition, records (duces tecum), and trial subpoenas across all 77 Oklahoma counties under 12 O.S. § 2004.1.',
          price: '$60 standard · $100 rush',
          areaServed: ['Oklahoma'],
          serviceType: [
            'Subpoena service',
            'Witness subpoena',
            'Subpoena duces tecum',
            'Deposition subpoena',
            'Trial subpoena',
          ],
        }}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white" aria-current="page">
                  Subpoena Service Oklahoma
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <Scale className="w-3.5 h-3.5" aria-hidden="true" /> 12 O.S. § 2004.1 · Licensed &amp; Bonded
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
              Oklahoma Subpoena Service{' '}
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                Served Right the First Time
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-7 max-w-3xl leading-relaxed">
              Witness, deposition, records (subpoena duces tecum), and trial subpoenas —
              personally served by a NAPPS-listed Oklahoma process server with court-ready
              affidavits, GPS-tracked service logs, and witness-fee tendering handled for you.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              {[
                { icon: MapPin, label: 'All 77 Oklahoma counties' },
                { icon: Clock, label: 'Same-day available in Tulsa metro' },
                { icon: Shield, label: 'Court-ready affidavit of service' },
                { icon: CheckCircle2, label: 'Witness fee tendered on your behalf' },
              ].map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                >
                  <f.icon className="w-4 h-4 text-blue-300" aria-hidden="true" />
                  {f.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 border border-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Request Subpoena Service
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 text-blue-100 font-semibold px-4 py-3 rounded-lg hover:text-white transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* TYPES GRID */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Every Subpoena Type — Served Across Oklahoma
            </h2>
            <p className="text-gray-700 text-lg">
              We handle every category of subpoena authorized under{' '}
              <a
                href="https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=436470"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline"
              >
                12 O.S. § 2004.1
              </a>
              , including the hard-to-serve records custodian subpoenas that sheriff&apos;s
              offices routinely struggle with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subpoenaTypes.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${colorMap[t.color]} text-white flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{t.description}</p>
                  <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                    {t.price}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                How Oklahoma Subpoena Service Works
              </h2>
              <p className="text-gray-700 text-lg">
                Subpoenas have specific tendering and proof-of-service requirements that trip
                up less-experienced servers. Here&apos;s the full workflow we use to keep
                your service defensible.
              </p>
            </div>

            <ol className="space-y-5">
              {[
                {
                  n: '01',
                  title: 'Subpoena issued &amp; transmitted',
                  body: 'An Oklahoma-licensed attorney signs and issues the subpoena (or the court clerk issues it on request). You transmit the signed subpoena to Just Legal Solutions by email, upload, or in-person drop-off at our Glenpool office.',
                },
                {
                  n: '02',
                  title: 'Intake, witness-fee check &amp; scheduling',
                  body: 'We confirm the witness&apos;s address, calculate statutory witness fees and mileage under 28 O.S. § 81, and schedule the service window. For corporate records subpoenas we identify the registered agent and confirm HIPAA or custodian-of-records compliance requirements.',
                },
                {
                  n: '03',
                  title: 'Personal service + fee tendered',
                  body: 'Our licensed process server personally delivers the subpoena and tenders the statutory witness fee at service. Every attempt is GPS-logged with timestamps. For evasive witnesses, we document each good-faith attempt for future alternative-service motions.',
                },
                {
                  n: '04',
                  title: 'Court-ready affidavit filed',
                  body: 'Within 24 hours of successful service, we deliver a notarized affidavit of service (return of service) — or e-file it directly with the issuing Oklahoma court — documenting the date, time, location, and manner of service. GPS and photographic evidence are available on request for contested-service defense.',
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 items-start">
                  <div
                    aria-hidden="true"
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 text-white font-bold text-lg flex items-center justify-center"
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-1"
                       
                      dangerouslySetInnerHTML={{ __html: step.title }}
                    />
                    <p
                      className="text-gray-700"
                       
                      dangerouslySetInnerHTML={{ __html: step.body }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* LEGAL REFERENCE */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Statutes at a Glance
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Oklahoma Subpoena Statutes
              </h2>
              <dl className="space-y-4 text-gray-700">
                <div>
                  <dt className="font-semibold text-gray-900">12 O.S. § 2004.1 — Subpoenas</dt>
                  <dd className="text-sm">
                    Governs issuance, form, service, and response to Oklahoma subpoenas,
                    including subpoenas duces tecum for ESI and tangible things.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">12 O.S. § 158.1 — Process Server Licensing</dt>
                  <dd className="text-sm">
                    Requires licensing and a $5,000 bond for any person who serves process
                    for compensation in Oklahoma. Just Legal Solutions is actively licensed
                    and bonded.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">28 O.S. § 81 — Witness Fees</dt>
                  <dd className="text-sm">
                    Establishes the statutory witness attendance fee and mileage rate that
                    must be tendered at service for most fact-witness subpoenas.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">12 O.S. § 3253 — UIDDA</dt>
                  <dd className="text-sm">
                    Oklahoma&apos;s adoption of the Uniform Interstate Depositions and
                    Discovery Act for domesticating out-of-state subpoenas. See{' '}
                    <Link href="/out-of-state-subpoena" className="text-blue-700 underline">
                      /out-of-state-subpoena
                    </Link>
                    .
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Common Subpoena Service Pitfalls
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Failing to tender witness fees.</strong> A witness can refuse service
                    and move to quash if statutory fees were not tendered at the time of
                    service. We advance and tender fees on your behalf.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Wrong custodian.</strong> Corporate records subpoenas served on a
                    receptionist or non-designated employee can be quashed. We identify and
                    serve the proper registered agent or records custodian.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Inadequate response time.</strong> Oklahoma subpoenas must give
                    reasonable time for compliance. We flag unreasonable deadlines before
                    service to prevent sanctions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>HIPAA-covered records.</strong> Medical-records subpoenas require a
                    HIPAA-compliant cover letter or court order. We draft and attach the
                    proper notice on request.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.question}
                  className="group bg-gray-50 border border-gray-200 rounded-lg p-5 open:shadow-sm"
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-start gap-3">
                    <span>{f.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 text-blue-600 group-open:rotate-45 transition-transform text-xl leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Related Oklahoma Legal Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: '/out-of-state-subpoena',
                title: 'Out-of-State Subpoena (UIDDA)',
                body: 'Domesticate and serve foreign subpoenas in Oklahoma under the UIDDA.',
              },
              {
                href: '/tulsa-process-server',
                title: 'Tulsa Process Server',
                body: 'Core Tulsa County process serving with same-day and rush options.',
              },
              {
                href: '/courthouse-filing-services',
                title: 'Court Filing Services',
                body: 'OCIS e-filing and in-person courthouse filing across Oklahoma.',
              },
              {
                href: '/gps-tracked-process-serving',
                title: 'GPS-Tracked Service',
                body: 'Every attempt GPS-logged with timestamps and photographic proof.',
              },
              {
                href: '/skip-tracing',
                title: 'Oklahoma Skip Tracing',
                body: 'Locate witnesses and defendants using proprietary legal databases.',
              },
              {
                href: '/pricing',
                title: 'Transparent Pricing',
                body: 'Full pricing guide — standard, rush, same-day, and bundle options.',
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.body}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <Scale className="w-12 h-12 mx-auto mb-4 text-blue-200" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to serve your Oklahoma subpoena?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Licensed, bonded, NAPPS-listed, and statewide. Starting at $60 standard ·
              $100 rush · same-day available in the Tulsa metro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:5393676832"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition"
              >
                Request Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
