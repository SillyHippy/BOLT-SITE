import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  Clock,
  Shield,
  CheckCircle2,
  XCircle,
  MapPin,
  Phone,
  AlertTriangle,
  Gavel,
  ClipboardList,
  DollarSign,
  FileText,
  Users,
  TrendingDown,
  Package,
  Search,
} from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

const url = 'https://justlegalsolutions.org/bail-bondsmen-process-serving';
const title = 'Bail Bondsmen Process Serving Oklahoma | 90-Day Forfeiture Rescue + Volume Pricing';
const description =
  "Oklahoma bail bondsmen process serving built around the 90-day forfeiture timeline (59 O.S. § 1332). Skip tracing, defendant notices, and personal service of motions to vacate — with volume-discounted pricing for bonding agencies. Call (539) 367-6832.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'bail bondsmen process server Oklahoma, bail bond process serving Tulsa, bail forfeiture Oklahoma, 59 O.S. 1332, 90 day bail timeline Oklahoma, bail bond skip tracing, bail bondsman notice of forfeiture, bail recovery vs process server, bond agency process server, volume pricing process server Oklahoma',
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
        url: 'https://justlegalsolutions.org/image-pack/images/image-093-bail-bondsmen-process-serving-card.webp',
        width: 1200,
        height: 630,
        alt: 'Bail bondsmen process serving across Oklahoma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    creator: '@ServeOK',
    title,
    description,
    images: ['https://justlegalsolutions.org/image-pack/images/image-093-bail-bondsmen-process-serving-card.webp'],
  },
  alternates: { canonical: url },
  other: {
    'ai-content-type': 'industry-landing',
    'ai-summary':
      "Oklahoma bail bondsmen process serving that aligns with the 59 O.S. § 1332 90-day forfeiture window. Licensed process servers are not recovery agents — we serve notices, motions, and skip-trace defendants legally, with volume pricing for bond agencies.",
    'ai-key-facts':
      "Oklahoma bail forfeiture timeline: 90 days from bond breach under 59 O.S. § 1332. Process server role: serve notices, motions to vacate, and skip-trace — not apprehend. Volume discounts: 10+ services/mo.",
  },
};

const faqs = [
  {
    question: "What is the Oklahoma 90-day bail forfeiture timeline?",
    answer:
      "Under 59 O.S. § 1332, when a defendant fails to appear and the court orders forfeiture of the bond, the bondsman typically has 90 days from the date of forfeiture to either (a) surrender the defendant, (b) locate the defendant and provide proof the failure to appear was not willful, or (c) file a motion to vacate the forfeiture. Missing this window forces the bondsman to pay the full face amount of the bond. Fast, documented service of notices and defendant-location efforts inside the 90-day window is the single biggest factor in avoiding forfeiture losses.",
  },
  {
    question: "What is the difference between a process server and a bail recovery agent?",
    answer:
      "A licensed Oklahoma process server (12 O.S. § 158.1) serves legal documents — court notices, motions, subpoenas, writs of bodily attachment — and performs skip tracing to locate defendants. A bail recovery agent (bounty hunter) physically apprehends and returns fugitives. They are two different licenses and two different jobs. Just Legal Solutions is a licensed process server; we do NOT apprehend defendants. We serve the legal notices that trigger warrants, document service for motions to vacate, and locate defendants through skip tracing so your recovery agent can do their job safely and legally.",
  },
  {
    question: "How can a process server help a bail bondsman avoid forfeiture?",
    answer:
      "Four ways: (1) Rapid service of notices — any court notice, order, or demand the bondsman must serve to preserve rights gets personal-delivery attention inside the 90-day window. (2) Skip tracing — when the defendant has gone dark, our skip trace locates them so the bondsman or recovery agent can take next steps. (3) Motion-to-vacate service — we serve motions to vacate forfeiture on the State or required parties and file court-ready affidavits. (4) Documented due diligence — GPS-tracked service attempts and affidavits create a defensible record of the bondsman's efforts, which courts consider when ruling on motions to vacate.",
  },
  {
    question: "Do you offer volume pricing for bail bonding agencies?",
    answer:
      "Yes. Agencies that average 10+ service requests per month qualify for our volume-pricing tier, which discounts standard service and includes priority dispatch and monthly consolidated invoicing with case-number tracking. For agencies with a dedicated pipeline, we offer retainer-based pricing with guaranteed SLA windows. Call (539) 367-6832 to discuss agency pricing — we keep it simple and undercut sheriff's-office turnaround on every service.",
  },
  {
    question: "Can you skip-trace a defendant who has skipped bond?",
    answer:
      "Yes. Our skip-tracing division uses proprietary legal databases (TLOxp, IRB Search, LexisNexis Accurint) plus open-source intelligence and social-media analysis to locate skipped defendants. Standard skip trace is $75; rush skip trace (24-hour turnaround) is $125. We produce a locate report with last-known address, phone numbers, employment, and associated parties. When you combine skip trace with follow-up service, we bundle pricing so you pay less than booking the two services separately.",
  },
  {
    question: "What paperwork does a bail bondsman typically need served?",
    answer:
      "The most common: (1) Notices to defendants regarding bond conditions or court dates. (2) Notices of forfeiture hearings. (3) Motions to vacate forfeiture served on the State. (4) Subpoenas on third-party witnesses relevant to the motion to vacate. (5) Writs of bodily attachment (served on the Sheriff, not the defendant). (6) Indemnitor/co-signer notices. We handle every one of these within Oklahoma under 12 O.S. § 2004 and provide court-ready affidavits.",
  },
  {
    question: "How fast can you turn around a bail-related service?",
    answer:
      "Same-day in the Tulsa metro if received before 2:00 PM. Rush (1-2 business days) statewide. Standard (3-5 business days) is rarely the right speed for forfeiture-timeline work — most bail agency requests get scheduled as rush or same-day by default. For agencies on volume pricing, we reserve capacity on weekdays to ensure priority dispatch.",
  },
  {
    question: "What counties do you cover for bail bondsmen?",
    answer:
      "Direct in-house coverage: Tulsa, Wagoner, Rogers, Osage, Creek, Okmulgee, Pawnee. Statewide coverage via our NAPPS partner network: all 77 Oklahoma counties. For agencies with a significant caseload in Oklahoma City, Muskogee, Lawton, or Enid, we coordinate with vetted in-county servers and guarantee the same affidavit-quality and turnaround standard.",
  },
];

const comparisonRows = [
  {
    category: 'Primary role',
    processServer: 'Serve legal documents and locate defendants through skip tracing',
    recoveryAgent: 'Physically apprehend and return fugitives',
  },
  {
    category: 'Oklahoma license',
    processServer: 'Licensed under 12 O.S. § 158.1, $5,000 bond',
    recoveryAgent: 'Licensed under separate state bail-enforcement framework',
  },
  {
    category: 'Arrest authority',
    processServer: 'NO — cannot detain or arrest',
    recoveryAgent: 'YES — limited apprehension authority on bonded defendants',
  },
  {
    category: 'Typical use in forfeiture window',
    processServer: 'Serve motions, notices, subpoenas; skip-trace defendant',
    recoveryAgent: 'Physically return defendant to custody',
  },
  {
    category: 'Creates court-admissible affidavit',
    processServer: 'YES — notarized, GPS-logged, filed with court',
    recoveryAgent: 'No standard court affidavit; creates bail bond return',
  },
  {
    category: 'Risk of liability for bondsman',
    processServer: 'LOW — licensed statutory actor',
    recoveryAgent: 'HIGHER — apprehension mistakes carry civil liability',
  },
];

const timelineSteps = [
  {
    day: 'Day 0',
    title: 'Bond forfeiture triggered',
    body: 'Defendant fails to appear. Court orders bond forfeiture on the record. The 90-day clock under 59 O.S. § 1332 starts today.',
    tone: 'alert',
  },
  {
    day: 'Day 1–7',
    title: 'Initial skip trace &amp; notice service',
    body: "Engage Just Legal Solutions for a rush skip trace on the defendant and service of any immediate court notices. Document every action — motion-to-vacate prep begins now.",
    tone: 'action',
  },
  {
    day: 'Day 7–30',
    title: 'Defendant location &amp; due diligence',
    body: 'GPS-logged service attempts at the defendant&apos;s known addresses. Co-signer and indemnitor notices served. All attempts documented for the bondsman&apos;s motion-to-vacate file.',
    tone: 'action',
  },
  {
    day: 'Day 30–60',
    title: 'Motion to vacate prepared',
    body: 'With defendant located (or exhaustive due diligence documented), the bondsman&apos;s attorney files a motion to vacate forfeiture. We personally serve the motion on the State and any required parties.',
    tone: 'action',
  },
  {
    day: 'Day 60–90',
    title: 'Hearing + surrender window',
    body: 'Court schedules the motion-to-vacate hearing. If the defendant has been surrendered or compelling due-diligence evidence has been filed, the court may grant relief. Missing this window = full forfeiture paid.',
    tone: 'warning',
  },
  {
    day: 'Day 90+',
    title: 'Forfeiture becomes final',
    body: 'If no motion has been filed or the motion is denied, the bondsman must pay the full bond face amount. Post-90-day remedies exist but are drastically narrower — timing is everything.',
    tone: 'alert',
  },
];

const toneMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  action: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', dot: 'bg-blue-600' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', dot: 'bg-amber-500' },
  alert: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-900', dot: 'bg-rose-600' },
};

export default function BailBondsmenProcessServingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UnifiedSchema
        pageType="service"
        url={url}
        title={title}
        description={description}
        breadcrumbs={[
          { name: 'Home', url: 'https://justlegalsolutions.org/' },
          { name: 'Bail Bondsmen Process Serving', url },
        ]}
        faqItems={faqs}
        serviceDetails={{
          name: 'Bail Bondsmen Process Serving & Skip Tracing',
          description:
            "Oklahoma bail bondsmen process serving built around the 59 O.S. § 1332 90-day forfeiture timeline. Rush notices, motion-to-vacate service, skip tracing, and volume pricing for bonding agencies.",
          price: 'Volume pricing available for 10+ monthly services',
          areaServed: ['Oklahoma'],
          serviceType: [
            'Bail bondsmen process serving',
            'Skip tracing for bail agencies',
            'Motion to vacate service',
            'Forfeiture notice service',
          ],
        }}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-rose-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white" aria-current="page">
                  Bail Bondsmen Process Serving
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/40 text-rose-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" /> Built for the 59 O.S. § 1332 90-Day Clock
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
              Bail Bondsmen Process Serving{' '}
              <span className="bg-gradient-to-r from-rose-300 to-white bg-clip-text text-transparent">
                That Beats the 90-Day Clock
              </span>
            </h1>

            <p className="text-lg md:text-xl text-rose-100 mb-7 max-w-3xl leading-relaxed">
              Oklahoma&apos;s bail forfeiture timeline is unforgiving. When the clock
              starts, every day you spend waiting on the sheriff&apos;s office is a day
              closer to writing the State a check for the full bond. Just Legal
              Solutions is the licensed process-server partner Oklahoma bonding
              agencies use to serve motions, notices, and subpoenas fast — and to
              skip-trace defendants before day 90.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              {[
                { icon: Clock, label: 'Same-day available in Tulsa metro' },
                { icon: MapPin, label: 'All 77 Oklahoma counties' },
                { icon: DollarSign, label: 'Volume pricing for 10+ services/mo' },
                { icon: Shield, label: 'NAPPS Member ID 14801 · Bonded' },
              ].map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-lg backdrop-blur-sm"
                >
                  <f.icon className="w-4 h-4 text-rose-300" aria-hidden="true" />
                  {f.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 bg-white text-rose-900 font-bold px-6 py-3 rounded-lg hover:bg-rose-50 transition"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-rose-700 border border-rose-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-800 transition"
              >
                Agency Volume Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              The Oklahoma 90-Day Forfeiture Timeline
            </h2>
            <p className="text-gray-700 text-lg">
              Under{' '}
              <a
                href="https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=85268"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-700 hover:text-rose-800 underline"
              >
                59 O.S. § 1332
              </a>
              , bail bondsmen have approximately 90 days from bond breach to remedy a
              forfeiture. Here&apos;s how experienced agencies use a licensed process
              server inside that window.
            </p>
          </div>

          <ol className="space-y-4">
            {timelineSteps.map((step) => {
              const tone = toneMap[step.tone];
              return (
                <li
                  key={step.day}
                  className={`${tone.bg} ${tone.border} border rounded-xl p-5 flex gap-4 items-start`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span
                      className={`w-3 h-3 rounded-full ${tone.dot}`}
                      aria-hidden="true"
                    ></span>
                    <span className={`mt-2 text-xs font-bold ${tone.text}`}>
                      {step.day}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title.replace('&amp;', '&')}
                    </h3>
                    <p
                      className="text-sm text-gray-700"
                       
                      dangerouslySetInnerHTML={{ __html: step.body }}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* COMPARISON TABLE */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Process Server vs. Bail Recovery Agent
              </h2>
              <p className="text-gray-700 text-lg">
                Experienced agency owners know the two jobs are not interchangeable.
                Here&apos;s the clean comparison.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Factor
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                      Licensed Process Server
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-rose-700 uppercase tracking-wider">
                      Bail Recovery Agent
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonRows.map((row) => (
                    <tr key={row.category}>
                      <th scope="row" className="px-4 py-3 text-sm font-semibold text-gray-900 align-top">
                        {row.category}
                      </th>
                      <td className="px-4 py-3 text-sm text-gray-700 align-top">
                        {row.processServer.startsWith('YES') ? (
                          <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                            <span>{row.processServer}</span>
                          </span>
                        ) : row.processServer.startsWith('NO') ? (
                          <span className="inline-flex items-center gap-1.5">
                            <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" aria-hidden="true" />
                            <span>{row.processServer}</span>
                          </span>
                        ) : (
                          row.processServer
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 align-top">
                        {row.recoveryAgent.startsWith('YES') ? (
                          <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                            <span>{row.recoveryAgent}</span>
                          </span>
                        ) : row.recoveryAgent.startsWith('No') ? (
                          <span className="inline-flex items-center gap-1.5">
                            <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" aria-hidden="true" />
                            <span>{row.recoveryAgent}</span>
                          </span>
                        ) : (
                          row.recoveryAgent
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-4 italic">
              Just Legal Solutions is a licensed process server, not a recovery agent.
              We pair perfectly with Oklahoma bail recovery agents — we serve the
              paper and locate the defendant; the recovery agent handles
              apprehension.
            </p>
          </div>
        </section>

        {/* SERVICES FOR AGENCIES */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What We Do for Oklahoma Bail Bonding Agencies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: FileText,
                title: 'Forfeiture Notice Service',
                body: 'Personal service of any forfeiture-related notice on the defendant or third parties, with notarized affidavits filed within 24 hours.',
              },
              {
                icon: Gavel,
                title: 'Motion to Vacate Service',
                body: "Service of the bondsman's motion to vacate forfeiture on the State and required parties, with court-ready affidavits for the motion packet.",
              },
              {
                icon: Search,
                title: 'Defendant Skip Tracing',
                body: 'Locate skipped defendants using TLOxp, Accurint, and OSINT. Standard $75 · Rush 24-hour $125. Pair with service for bundled pricing.',
              },
              {
                icon: Users,
                title: 'Indemnitor &amp; Co-Signer Notices',
                body: 'Personal service of co-signer and indemnitor notices, with documented service attempts to support indemnity actions.',
              },
              {
                icon: ClipboardList,
                title: 'Witness Subpoenas',
                body: 'Service of subpoenas on third-party witnesses relevant to the motion to vacate — employers, family, landlords.',
              },
              {
                icon: Package,
                title: 'Writ of Bodily Attachment Filing',
                body: "File writs with the sheriff's office and document the filing chain for the bondsman's records and next steps.",
              },
            ].map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-2"
                     
                    dangerouslySetInnerHTML={{ __html: svc.title }}
                  />
                  <p
                    className="text-sm text-gray-700"
                     
                    dangerouslySetInnerHTML={{ __html: svc.body }}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* VOLUME PRICING */}
        <section className="bg-gradient-to-br from-slate-900 to-rose-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/40 text-rose-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                  <TrendingDown className="w-3.5 h-3.5" aria-hidden="true" /> Agency Volume Pricing
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Built for bonding agencies that run real volume
                </h2>
                <p className="text-rose-100 text-lg mb-6">
                  When you&apos;re moving 10+ services a month, the last thing you
                  need is à-la-carte invoicing and sheriff&apos;s-office SLAs.
                  We&apos;ll set you up with volume pricing, priority dispatch, and
                  consolidated monthly invoicing.
                </p>
                <ul className="space-y-3 text-rose-100">
                  {[
                    'Discounted standard, rush, and same-day service tiers',
                    'Monthly consolidated invoicing with case-number tracking',
                    'Priority dispatch ahead of retail clients',
                    'Dedicated intake contact for your agency',
                    'Optional retainer-based pricing with SLA guarantees',
                  ].map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-rose-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Request agency pricing</h3>
                <p className="text-sm text-gray-700 mb-5">
                  Call or email with your estimated monthly volume, primary counties,
                  and preferred turnaround. We&apos;ll send a custom pricing sheet
                  inside 24 hours.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:5393676832"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    (539) 367-6832
                  </a>
                  <a
                    href="mailto:joseph@justlegalsolutions.org?subject=Bail%20Agency%20Volume%20Pricing"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-rose-400 hover:text-rose-700 transition"
                  >
                    joseph@justlegalsolutions.org
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Licensed Oklahoma process server · NAPPS Member ID 14801 · Bonded
                  under 12 O.S. § 158.1
                </p>
              </div>
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
                      className="flex-shrink-0 text-rose-600 group-open:rotate-45 transition-transform text-xl leading-none"
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

        {/* RELATED */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Related Services for Legal Professionals
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: '/skip-tracing',
                title: 'Oklahoma Skip Tracing',
                body: 'Proprietary-database skip tracing with 24-hour rush tier.',
              },
              {
                href: '/subpoena-service-oklahoma',
                title: 'Subpoena Service Oklahoma',
                body: 'Witness, deposition, records, and trial subpoenas statewide.',
              },
              {
                href: '/gps-tracked-process-serving',
                title: 'GPS-Tracked Process Serving',
                body: 'Every attempt GPS-logged with photographic evidence for contested service.',
              },
              {
                href: '/courthouse-filing-services',
                title: 'Courthouse Filing',
                body: 'OCIS e-filing and in-person filing statewide — file motions to vacate fast.',
              },
              {
                href: '/tulsa-process-server',
                title: 'Tulsa Process Server',
                body: 'Core Tulsa County process serving with same-day in-metro options.',
              },
              {
                href: '/pricing',
                title: 'Transparent Pricing',
                body: 'Full retail pricing guide. Agency pricing on request.',
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-rose-300 hover:shadow-sm transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.body}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-rose-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <Scale className="w-12 h-12 mx-auto mb-4 text-rose-200" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Don&apos;t lose a bond to the clock
            </h2>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              The 90-day window is unforgiving. Call the licensed Oklahoma process
              server Oklahoma bail bondsmen trust for rush notices, motion service,
              and skip tracing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:5393676832"
                className="px-6 py-3 bg-white text-rose-700 font-semibold rounded-lg hover:bg-rose-50 transition"
              >
                Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-rose-800 text-white font-semibold rounded-lg hover:bg-rose-900 transition"
              >
                Request Agency Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
