import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Oklahoma process serving career resources and industry information.',
};

const resources = [
  { href: '/resources/become-process-server-oklahoma', title: 'Become a Process Server in Oklahoma', desc: 'Step-by-step career guide with licensing requirements, bond information, CLEET details, and timeline.' },
  { href: '/resources/future-of-process-serving', title: 'Future of Process Serving in Oklahoma', desc: '2025 industry outlook covering technology trends, consolidation, AI integration, and regulatory changes.' },
  { href: '/resources/skip-trace-checklist', title: 'Skip Trace Checklist for Process Servers', desc: '25+ item systematic checklist (PDF + DOCX) covering public records, licensed databases, social media, and field verification — GLB and FCRA compliant.' },
  { href: '/resources/chain-of-custody-form', title: 'Chain of Custody Form for Legal Documents', desc: 'Tamper-evident custody form (PDF + DOCX) tracking documents from client receipt through court filing with full signature blocks.' },
  { href: '/resources/client-intake-form', title: 'Process Server Client Intake Form', desc: 'Professional intake form (PDF + DOCX) capturing case details, special instructions, billing authorization, and signatures.' },
  { href: '/resources/gps-service-log', title: 'GPS Service Log Template', desc: 'Court-admissible 9-column GPS log (PDF + DOCX) for documenting time, place, and manner of every service attempt.' },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-navy text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Resources</h1>
          <p className="text-white/70 text-sm md:text-base max-w-2xl">
            Career information, industry analysis, and professional resources for Oklahoma process servers.
          </p>
        </div>
      </div>
      <main className="flex-1 bg-cream py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-6 bg-navy text-white rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-white/70 mb-1">New — Free Download Library</p>
              <p className="text-lg font-semibold">30 free Oklahoma process serving resources (PDF + DOCX)</p>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-4 py-2.5 rounded-md hover:bg-gold/90"
            >
              Browse downloads →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {resources.map((res) => (
              <Link
                key={res.href}
                href={res.href}
                className="card card-hover group"
              >
                <h2 className="font-semibold text-navy group-hover:text-gold transition-colors mb-1">{res.title}</h2>
                <p className="text-sm text-text-muted">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
