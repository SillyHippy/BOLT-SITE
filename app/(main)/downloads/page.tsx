import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ClipboardCheck, BookOpen, Users, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Oklahoma Process Serving Downloads — DOCX & PDF Library',
  description:
    '30 free downloadable Oklahoma process-serving resources: how-to guides, fillable forms, audience packs, and statewide references. Each available as both DOCX and PDF.',
  twitter: {
    card: 'summary_large_image',
    title: 'Free Oklahoma Process Serving Downloads — DOCX & PDF Library',
    description: '30 free downloadable Oklahoma process-serving resources: how-to guides, fillable forms, audience packs, and statewide references. Each available as both DOCX and PDF.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-051-downloads-card.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/downloads',
  },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-051-downloads-card.png',
      width: 1200,
      height: 630,
      alt: 'Free Oklahoma process server forms and legal document downloads',
    }],
    title: 'Free Oklahoma Process Serving Downloads',
    description:
      '30 free downloadable resources covering Oklahoma process-serving law, procedure, and operations. DOCX and PDF formats.',
    url: 'https://justlegalsolutions.org/downloads',
    type: 'website',
  },
};

interface ResourceItem {
  slug: string; // file slug (without extension)
  title: string;
  description: string;
  pages?: number;
  internalHref?: string; // optional landing page on the site
}

interface ResourceCluster {
  id: string;
  title: string;
  blurb: string;
  Icon: typeof FileText;
  items: ResourceItem[];
}

const CLUSTERS: ResourceCluster[] = [
  {
    id: 'how-to-guides',
    title: 'How-To Service Guides',
    blurb: 'Step-by-step guides covering every common Oklahoma service-of-process scenario.',
    Icon: BookOpen,
    items: [
      {
        slug: 'JLS-How-To-Serve-Divorce-Papers-v1.0',
        title: 'How to Serve Divorce Papers in Oklahoma',
        description: 'Required documents checklist, timeline by method, step-by-step service flow.',
        internalHref: '/blog/how-to-serve-divorce-papers-oklahoma',
      },
      {
        slug: 'JLS-How-To-Serve-Eviction-Notice-v1.0',
        title: 'How to Serve Eviction Notices in Oklahoma',
        description: 'All 5 notice types, days required, service-method comparison, eviction timeline.',
        internalHref: '/learn/eviction-service-guide',
      },
      {
        slug: 'JLS-How-To-Serve-Subpoena-v1.0',
        title: 'How to Serve Subpoenas in Oklahoma',
        description: 'Witness fee & mileage table, subpoena types comparison, UIDDA interstate process.',
        internalHref: '/learn/uidda-subpoena-domestication',
      },
      {
        slug: 'JLS-How-To-Serve-Protective-Order-v1.0',
        title: 'How to Serve a Protective Order in Oklahoma',
        description: 'Order types (emergency / temporary / final), safety checklist, timeline tables.',
        internalHref: '/learn/vpo-protective-order-service',
      },
      {
        slug: 'JLS-How-To-Serve-Small-Claims-v1.0',
        title: 'How to Serve Small Claims in Oklahoma',
        description: 'Court fee reference, service-method pros/cons, deadline tracker.',
        internalHref: '/blog/how-to-serve-small-claims-oklahoma',
      },
      {
        slug: 'JLS-How-To-Serve-Child-Custody-v1.0',
        title: 'How to Serve Child Custody Papers in Oklahoma',
        description: 'Who must be served, emergency timelines, out-of-state parent service.',
        internalHref: '/blog/oklahoma-child-custody-support-service',
      },
      {
        slug: 'JLS-How-To-Serve-Business-Papers-v1.0',
        title: 'How to Serve a Business or Corporation in Oklahoma',
        description: 'Secretary of State lookup steps, entity-type rules, registered agent vs officer.',
        internalHref: '/serve-business-corporation-oklahoma',
      },
      {
        slug: 'JLS-How-To-Serve-Out-Of-State-v1.0',
        title: 'How to Serve an Out-of-State Defendant',
        description: 'UIDDA checklist, long-arm statute summary, timeline by method, interstate rules.',
      },
    ],
  },
  {
    id: 'tools-templates',
    title: 'Tools, Templates & Fillable Forms',
    blurb: 'Print-ready forms and checklists you can use on the job today.',
    Icon: ClipboardCheck,
    items: [
      {
        slug: 'JLS-Process-Server-Field-Sheet-v1.0',
        title: 'Process Server Field Sheet',
        description: 'Case info, 5-row attempt log with GPS column, result-code reference.',
        internalHref: '/resources/process-server-field-sheet-template',
      },
      {
        slug: 'JLS-Service-Attempt-Log-v1.0',
        title: 'Service Attempt Log',
        description: 'Multi-row attempt tracker with GPS coordinates and result codes.',
      },
      {
        slug: 'JLS-Client-Intake-Form-v1.0',
        title: 'Client Intake Form',
        description: 'Client + case info, service selection, special instructions, fee agreement signature.',
        internalHref: '/resources/client-intake-form',
      },
      {
        slug: 'JLS-Skip-Trace-Checklist-v1.0',
        title: 'Skip Tracing Checklist',
        description: '25+ items by phase: database → records → social → field verification → docs.',
        internalHref: '/resources/skip-trace-checklist',
      },
      {
        slug: 'JLS-Server-Safety-Checklist-v1.0',
        title: 'Process Server Safety Checklist',
        description: 'Pre-service, at-the-door, high-risk, and emergency-protocol checklists.',
        internalHref: '/process-server-safety-guide-oklahoma',
      },
      {
        slug: 'JLS-GPS-Service-Log-v1.0',
        title: 'GPS Tracking Log Template',
        description: 'Coordinate tracking table, route summary, timestamp verification.',
        internalHref: '/resources/gps-service-log',
      },
      {
        slug: 'JLS-Chain-Of-Custody-Form-v1.0',
        title: 'Chain of Custody Form',
        description: 'Pickup → transfer → delivery log with handoff signatures and condition notes.',
        internalHref: '/resources/chain-of-custody-form',
      },
    ],
  },
  {
    id: 'audience-packs',
    title: 'Audience-Specific Guides',
    blurb: 'Ready-to-share guides written for landlords, attorneys, pro se litigants, and others.',
    Icon: Users,
    items: [
      {
        slug: 'JLS-Youve-Been-Served-Guide-v1.0',
        title: "What to Do When You're Served Papers",
        description: 'First 24 hours, deadlines by document type, options flowchart, common mistakes.',
        internalHref: '/resources/what-to-do-when-served-oklahoma',
      },
      {
        slug: 'JLS-Process-Server-Myths-vs-Reality-v1.0',
        title: 'Can You Avoid Being Served? Myths vs Reality',
        description: 'Myths vs facts, consequences, substitute service rules, what actually works.',
        internalHref: '/blog/can-you-avoid-being-served-oklahoma',
      },
      {
        slug: 'JLS-Landlord-Eviction-Service-Guide-v1.0',
        title: "Landlord's Guide to Eviction Notice Service",
        description: 'All 5 notice types, service methods, timeline from notice to writ.',
        internalHref: '/eviction-notice-service',
      },
      {
        slug: 'JLS-Pro-Se-Litigant-Guide-v1.0',
        title: "Pro Se Litigant's Guide to Service",
        description: 'Glossary, DIY vs professional comparison, steps checklist.',
      },
      {
        slug: 'JLS-Attorney-Quick-Reference-v1.0',
        title: "Attorney's Quick Reference for Process Servers",
        description: 'What info to provide, rush comparison, proof of service, common mistakes.',
        internalHref: '/resources/attorneys-guide-hiring-process-server',
      },
      {
        slug: 'JLS-Debt-Collector-FDCPA-Guide-v1.0',
        title: "Debt Collector's Guide to Process Serving",
        description: 'FDCPA compliance, service methods, documentation, timing rules by debt type.',
        internalHref: '/process-serving-for-debt-collection',
      },
      {
        slug: 'JLS-Server-Vs-Sheriff-Comparison-v1.0',
        title: 'Process Server vs Sheriff: Which to Choose',
        description: 'Speed, cost, success rate, professionalism, when to use each.',
        internalHref: '/process-server-vs-sheriff',
      },
      {
        slug: 'JLS-Become-A-Process-Server-OK-v1.0',
        title: 'How to Become a Licensed Process Server (2026)',
        description: 'Requirements, application steps, costs, timeline, exam prep resources.',
        internalHref: '/resources/become-process-server-oklahoma',
      },
    ],
  },
  {
    id: 'statewide',
    title: 'Statewide References',
    blurb: 'Quick-reference materials covering Oklahoma-wide statutes, courts, and procedures.',
    Icon: MapPin,
    items: [
      {
        slug: 'JLS-OK-Service-Of-Process-FAQ-v1.0',
        title: 'Oklahoma Service of Process FAQ',
        description: '20+ Q&A organized by topic with deadline summary table.',
        internalHref: '/oklahoma-process-server-faq-2026',
      },
      {
        slug: 'JLS-OK-Statutes-Quick-Reference-v1.0',
        title: 'Oklahoma Statutes Quick Reference',
        description: '12 O.S. § 158.1, § 2004, § 2005, 22 O.S. § 1188 — plain English summary.',
        internalHref: '/oklahoma-process-server-laws',
      },
      {
        slug: 'JLS-Tribal-McGirt-Service-Guide-v1.0',
        title: 'Tribal Jurisdiction & Process Serving (McGirt)',
        description: 'Major tribes service rules, court contact reference, cross-deputization status.',
        internalHref: '/serving-legal-papers-on-tribal-land',
      },
      {
        slug: 'JLS-OK-Military-Bases-Service-Guide-v1.0',
        title: 'Serving Process on Military Bases',
        description: 'Fort Sill, Tinker AFB, Altus AFB procedures, gate access, SCRA, JAG coordination.',
        internalHref: '/guides/military-base-service',
      },
      {
        slug: 'JLS-OK-77-County-Court-Directory-v1.0',
        title: 'Oklahoma 77-County Court Directory',
        description: 'Alphabetized table: County | County Seat | District Court | General Phone.',
        internalHref: '/oklahoma-courthouse-directory',
      },
      {
        slug: 'JLS-Process-Server-Startup-Kit-v1.0',
        title: 'Process Server Startup Kit for Oklahoma',
        description: 'Equipment checklist with costs, software comparison, pricing worksheet, marketing tips.',
        internalHref: '/process-server-business-startup-guide',
      },
    ],
  },
];

const TOTAL_ITEMS = CLUSTERS.reduce((n, c) => n + c.items.length, 0);

function ResourceCard({ item }: { item: ResourceItem }) {
  const docxHref = `/downloads/${item.slug}.docx`;
  const pdfHref = `/downloads/${item.slug}.pdf`;
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <h3 className="font-semibold text-navy text-lg mb-1.5">{item.title}</h3>
      <p className="text-sm text-slate-600 mb-4 flex-1">{item.description}</p>
      <div className="flex flex-wrap gap-2 items-center">
        <a
          href={pdfHref}
          download
          className="inline-flex items-center gap-1.5 bg-navy text-white text-xs font-semibold px-3 py-2 rounded-md hover:bg-navy/90 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          PDF
        </a>
        <a
          href={docxHref}
          download
          className="inline-flex items-center gap-1.5 bg-gold text-navy text-xs font-semibold px-3 py-2 rounded-md hover:bg-gold/90 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          DOCX
        </a>
        {item.internalHref && (
          <Link
            href={item.internalHref}
            className="text-xs text-navy underline underline-offset-2 ml-auto hover:text-gold"
          >
            Read full guide →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function DownloadsPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Just Legal Solutions Free Oklahoma Process Serving Downloads',
    description:
      '30 free downloadable Oklahoma process-serving resources in DOCX and PDF formats.',
    numberOfItems: TOTAL_ITEMS,
    itemListElement: CLUSTERS.flatMap((cluster) =>
      cluster.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.title,
        url: `https://justlegalsolutions.org/downloads/${item.slug}.pdf`,
      })),
    ),
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="bg-navy text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            FREE DOWNLOAD LIBRARY
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Oklahoma Process Serving Resources
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mb-6">
            {TOTAL_ITEMS} free guides, fillable forms, and reference documents covering Oklahoma
            service of process — every resource available as both <strong>PDF</strong> and{' '}
            <strong>DOCX</strong>.
          </p>
          <p className="text-sm text-white/60">
            Built for attorneys, landlords, pro se litigants, debt collectors, and process servers.
            Use them, share them, customize them.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-6xl">
          <nav aria-label="Resource categories" className="mb-10 flex flex-wrap gap-3 justify-center">
            {CLUSTERS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors"
              >
                <c.Icon className="w-4 h-4" />
                {c.title}
              </a>
            ))}
          </nav>

          {CLUSTERS.map((cluster) => (
            <section key={cluster.id} id={cluster.id} className="mb-14 scroll-mt-24">
              <div className="flex items-start gap-3 mb-2">
                <cluster.Icon className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy">{cluster.title}</h2>
                  <p className="text-slate-600">{cluster.blurb}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {cluster.items.map((item) => (
                  <ResourceCard key={item.slug} item={item} />
                ))}
              </div>
            </section>
          ))}

          <section className="mt-12 bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">About these documents</h2>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li>
                Every document is free to download, share, and customize for your own use.
              </li>
              <li>
                PDFs are print-ready (US Letter, 1&quot; margins). DOCX files are fully editable in
                Word, Google Docs, and Pages.
              </li>
              <li>
                Statute citations were accurate at the publication date. Always verify current rules
                at{' '}
                <a className="underline" href="https://www.oklegislature.gov" target="_blank" rel="noopener noreferrer">
                  oklegislature.gov
                </a>{' '}
                and{' '}
                <a className="underline" href="https://www.oscn.net" target="_blank" rel="noopener noreferrer">
                  oscn.net
                </a>.
              </li>
              <li>
                Just Legal Solutions is not a law firm. These documents are procedural references —
                not legal advice. For advice on a specific case, consult a licensed Oklahoma attorney.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-md font-semibold hover:bg-navy/90"
              >
                Need professional service? Contact us
              </Link>
              <Link
                href="/oklahoma-process-serving-hub"
                className="inline-flex items-center gap-2 border border-slate-300 text-navy px-5 py-2.5 rounded-md font-semibold hover:bg-slate-50"
              >
                Visit interactive tools hub
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
