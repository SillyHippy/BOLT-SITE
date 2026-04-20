import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, CheckSquare, ShieldAlert, Database, FileSearch, Eye } from 'lucide-react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';

const SLUG = 'JLS-Skip-Trace-Checklist-v1.0';

export const metadata: Metadata = {
  title: 'Skip Trace Checklist for Process Servers (Oklahoma) — Free PDF & DOCX',
  description:
    'Systematic skip-trace checklist for Oklahoma process servers: public records, licensed databases, social media, field verification — all GLB and FCRA compliant.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources/skip-trace-checklist',
  },
  openGraph: {
    title: 'Skip Trace Checklist for Process Servers (Oklahoma)',
    description: '25+ item checklist with public-records sources, database tools, and field-verification steps.',
    url: 'https://justlegalsolutions.org/resources/skip-trace-checklist',
  },
};

interface ChecklistSection {
  phase: string;
  Icon: typeof CheckSquare;
  items: string[];
}

const PHASES: ChecklistSection[] = [
  {
    phase: 'Phase 1 — Free public records (start here)',
    Icon: FileSearch,
    items: [
      'Pull Oklahoma County Assessor records for property ownership history',
      'Run Oklahoma Tax Commission vehicle registration lookup',
      'Check Oklahoma State Voter Registration database',
      'Search OSCN and ODCR for prior civil and criminal cases',
      'Pull marriage and divorce filings in known counties of residence',
      'Verify any professional licenses (medical, legal, real estate, contractor)',
      'Search Oklahoma Secretary of State business records for affiliated entities',
      'Check the Oklahoma Sex Offender Registry if relevant to safety planning',
    ],
  },
  {
    phase: 'Phase 2 — Licensed database tools',
    Icon: Database,
    items: [
      'Verify your permissible-purpose authorization under GLB and FCRA before searching',
      'Run subject through skip-trace database (TLO, IRB, LexisNexis, or BeenVerified Pro)',
      'Pull associated phone numbers and verify carrier and line type',
      'Pull current and historical addresses with reported dates',
      'Pull associates, relatives, and known co-residents',
      'Cross-reference any business or LLC ownership',
      'Document the database query used and results retrieved',
    ],
  },
  {
    phase: 'Phase 3 — Open-source intelligence (social media)',
    Icon: Eye,
    items: [
      'Search Facebook by name, known email, and known phone',
      'Search LinkedIn for current employer and location',
      'Search Instagram, TikTok, and X/Twitter for recent activity',
      'Check Nextdoor for neighborhood-level identification',
      'Document screenshots with timestamps, full URLs, and your username',
      'Note recent locations, new employer changes, and routine patterns',
    ],
  },
  {
    phase: 'Phase 4 — Field verification',
    Icon: ShieldAlert,
    items: [
      'Drive by the most-likely address at varied times (early AM, evening, weekend)',
      'Note vehicles present and any plates visible',
      'Check mailbox for delivered mail (do not open)',
      'Speak briefly with neighbors when safe and appropriate',
      'Verify utility connection through visible service indicators',
      'Document each attempt with date, time, and GPS coordinates',
      'Update attempt log after every visit',
    ],
  },
];

const COMPLIANCE_TABLE = [
  {
    statute: '15 U.S.C. § 6801–6809 (GLBA)',
    rule: 'Permissible purpose required to obtain non-public personal info from financial institutions',
    application: 'Process servers may use the "to facilitate service of legal process" exception',
  },
  {
    statute: '15 U.S.C. § 1681 (FCRA)',
    rule: 'Consumer credit reports require permissible purpose',
    application: 'Locator-only databases (no credit data) generally fall outside FCRA',
  },
  {
    statute: '18 U.S.C. § 2721 (DPPA)',
    rule: 'Restricts use of state DMV records',
    application: 'Service of process is a permitted use under § 2721(b)(4)',
  },
  {
    statute: 'Okla. Stat. tit. 47 § 1112',
    rule: 'Oklahoma DMV record access',
    application: 'Permitted for service of process; document permissible-purpose statement',
  },
];

export default function SkipTraceChecklistPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Skip Trace Checklist for Process Servers (Oklahoma)',
    description:
      'Systematic skip-trace methodology covering public records, licensed databases, social media, and field verification.',
    totalTime: 'PT4H',
    step: PHASES.flatMap((phase, pi) =>
      phase.items.map((item, ii) => ({
        '@type': 'HowToStep',
        position: pi * 100 + ii + 1,
        name: item,
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <HubPageLayout
        title="Skip Trace Checklist for Process Servers"
        description="A 25+ item systematic checklist for locating evasive servees in Oklahoma — public records, licensed databases, social media, and field verification, all GLB and FCRA compliant."
        citations={[
          { title: '15 U.S.C. § 6801 (Gramm-Leach-Bliley Act)', url: 'https://www.law.cornell.edu/uscode/text/15/6801' },
          { title: '15 U.S.C. § 1681 (Fair Credit Reporting Act)', url: 'https://www.law.cornell.edu/uscode/text/15/1681' },
          { title: '18 U.S.C. § 2721 (Driver\'s Privacy Protection Act)', url: 'https://www.law.cornell.edu/uscode/text/18/2721' },
          { title: 'Oklahoma Statutes — oklegislature.gov', url: 'https://www.oklegislature.gov' },
        ]}
      >
        <div className="bg-navy text-white rounded-xl p-5 md:p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-white/70 mb-1">Take this checklist into the field</p>
            <p className="text-lg font-semibold">Print-ready PDF and editable DOCX — both free.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`/downloads/${SLUG}.pdf`}
              download
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-4 py-2.5 rounded-md hover:bg-gold/90"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <a
              href={`/downloads/${SLUG}.docx`}
              download
              className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-4 py-2.5 rounded-md hover:bg-white/90"
            >
              <Download className="w-4 h-4" />
              Download DOCX
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy mb-3">Why a checklist beats freelancing</h2>
        <p className="text-slate-700 mb-6">
          Skip tracing is one of the highest-stakes parts of process serving. Miss a step and the
          server can&apos;t be located; skip the wrong step and you may violate federal privacy
          statutes. This checklist sequences your work from free public records up through licensed
          databases and field verification — every step is logged so you can prove diligent search
          to the court if substitute service or service by publication becomes necessary.
        </p>

        {PHASES.map((phase) => (
          <section key={phase.phase} className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-navy mb-3">
              <phase.Icon className="w-5 h-5 text-gold" />
              {phase.phase}
            </h3>
            <ul className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-100">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-3 px-4 py-2.5">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 border-2 border-navy rounded shrink-0" aria-hidden />
                  <span className="text-sm text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <h2 className="text-2xl font-bold text-navy mb-3 mt-10">Compliance reference table</h2>
        <p className="text-slate-700 mb-4">
          Process servers may use most locator data under explicit statutory exceptions. Document
          your permissible purpose in writing for every search:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-navy text-white text-left">
              <tr>
                <th className="px-3 py-2 font-semibold">Statute</th>
                <th className="px-3 py-2 font-semibold">Rule</th>
                <th className="px-3 py-2 font-semibold">Application to process serving</th>
              </tr>
            </thead>
            <tbody>
              {COMPLIANCE_TABLE.map((row, i) => (
                <tr key={row.statute} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-3 py-2 align-top font-mono text-xs">{row.statute}</td>
                  <td className="px-3 py-2 align-top">{row.rule}</td>
                  <td className="px-3 py-2 align-top">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy mb-3">Frequently asked questions</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="font-semibold text-navy mb-1">Is skip tracing legal for Oklahoma process servers?</p>
            <p className="text-sm text-slate-700">
              Yes. Locating individuals for service of process is a permitted purpose under GLBA,
              FCRA, and DPPA. You must still document your permissible purpose and avoid pulling
              full credit reports unless you have an independent FCRA-compliant reason.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="font-semibold text-navy mb-1">How many attempts before substitute service?</p>
            <p className="text-sm text-slate-700">
              Oklahoma has no fixed minimum, but most courts expect at least three good-faith
              attempts at varied times before approving substitute service or service by publication
              under 12 O.S. § 2004(C)(3).
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="font-semibold text-navy mb-1">What about credit reports?</p>
            <p className="text-sm text-slate-700">
              Full consumer credit reports require a separate FCRA permissible purpose and generally
              are not appropriate for skip tracing. Use locator-only products that do not return
              credit data.
            </p>
          </div>
        </div>

        <div className="bg-cream border border-gold/40 rounded-xl p-5 text-sm text-slate-700">
          <p>
            <strong>Need help locating a server in Oklahoma?</strong> Just Legal Solutions handles
            skip-trace and serve packages statewide.{' '}
            <Link href="/contact" className="text-navy underline">Contact us</Link> or learn more
            about our{' '}
            <Link href="/skip-tracing" className="text-navy underline">skip tracing services</Link>.
          </p>
        </div>
      </HubPageLayout>
    </>
  );
}
