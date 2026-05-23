import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileCheck, ArrowRight } from 'lucide-react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

const SLUG = 'JLS-Chain-Of-Custody-Form-v1.0';

export const metadata: Metadata = {
  title: 'Chain of Custody Form for Legal Documents (Oklahoma) — Free PDF & DOCX',
  description:
    'Tamper-evident chain-of-custody form tracking legal documents from client receipt through court filing. Includes signature blocks for every handoff.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources/chain-of-custody-form',
  },
};

const STAGES = [
  {
    stage: '1. Document receipt',
    fields: [
      'Date and time received',
      'Received from (name + firm)',
      'Document description and total page count',
      'Number of copies',
      'Condition on receipt',
      'Special handling instructions',
      'Receiving server signature',
    ],
  },
  {
    stage: '2. Document handling log',
    fields: [
      'Copies made and to whom distributed',
      'Documents sealed in envelopes for service',
      'Documents transported in the field',
      'Storage or safekeeping events',
      'Date, time, and signature on every entry',
    ],
  },
  {
    stage: '3. Service or transfer',
    fields: [
      'Date, time, and location of service',
      'Person served (or transferee name)',
      'Description of what was served',
      'Method of service used',
      'Transferor signature',
      'Transferee signature',
    ],
  },
  {
    stage: '4. Filing and completion',
    fields: [
      'Date and time of court filing',
      'Court clerk or e-filing reference number',
      'Method of delivery (in person, mail, e-file)',
      'Disposition of remaining copies',
      'Final signature certifying completion',
    ],
  },
];

const RETENTION = [
  { rule: 'Active matter', period: 'Retain through case completion' },
  { rule: 'Closed matter (general)', period: 'Minimum 3 years' },
  { rule: 'Closed matter (best practice)', period: '7 years from last activity' },
  { rule: 'Document integrity challenged', period: 'Indefinite hold until resolved' },
];

export default function ChainOfCustodyFormPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Chain of Custody Form for Legal Documents (Oklahoma) — Free PDF & DOCX"
        pageDescription="Tamper-evident chain-of-custody form tracking legal documents from client receipt through court filing. Includes signature blocks for every handoff."
        pageUrl="https://justlegalsolutions.org/resources/chain-of-custody-form"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Chain of Custody Form for Legal Documents (Oklahoma) — Free PDF & DOCX', url: '/resources/chain-of-custody-form' },
        ]}
      />
    <HubPageLayout
      title="Chain of Custody Form for Legal Documents"
      description="Track every handoff of legal documents — from client receipt through field service to courthouse filing — with a tamper-evident form designed for Oklahoma process servers."
      citations={[
        { title: '12 O.S. § 2004 (Service of Process)', url: 'https://www.oscn.net' },
        { title: '12 O.S. § 2005 (Service of Pleadings)', url: 'https://www.oscn.net' },
        { title: 'Oklahoma Evidence Code (Title 12 Ch. 40)', url: 'https://www.oscn.net' },
      ]}
    >
      <div className="bg-navy text-white rounded-xl p-5 md:p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-white/70 mb-1">Free download — print or fill on screen</p>
          <p className="text-lg font-semibold">Chain of Custody Form (4 stages, full signature blocks)</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`/downloads/${SLUG}.pdf`} download className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-4 py-2.5 rounded-md hover:bg-gold/90">
            <Download className="w-4 h-4" /> Download PDF
          </a>
          <a href={`/downloads/${SLUG}.docx`} download className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-4 py-2.5 rounded-md hover:bg-white/90">
            <Download className="w-4 h-4" /> Download DOCX
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-navy mb-3">Why chain of custody matters</h2>
      <p className="text-slate-700 mb-6">
        While Oklahoma doesn&apos;t mandate a chain of custody form for every service, attorneys and
        courts increasingly expect one when document integrity is challenged. A clean custody log
        proves that the papers your subject received are the same papers your client handed you —
        unchanged, unredacted, and unhandled by anyone outside the documented chain.
      </p>

      <h2 className="text-2xl font-bold text-navy mb-3">What the form captures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {STAGES.map((s) => (
          <div key={s.stage} className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-gold" />
              {s.stage}
            </h3>
            <ul className="space-y-1.5">
              {s.fields.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <ArrowRight className="w-3.5 h-3.5 text-gold mt-1 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-navy mb-3">Retention guidelines</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-navy text-white text-left">
            <tr>
              <th className="px-3 py-2 font-semibold">Situation</th>
              <th className="px-3 py-2 font-semibold">Retention period</th>
            </tr>
          </thead>
          <tbody>
            {RETENTION.map((r, i) => (
              <tr key={r.rule} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-3 py-2">{r.rule}</td>
                <td className="px-3 py-2 font-medium">{r.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-navy mb-3">Best practices</h2>
      <ul className="space-y-2 text-slate-700 text-sm mb-8 list-disc pl-5">
        <li>Use indelible ink or a tracked digital form — never pencil.</li>
        <li>Initial every line; never leave blank rows where someone else could insert entries.</li>
        <li>Pair the custody form with your GPS service log and photographs of sealed envelopes.</li>
        <li>Store completed forms with the matching affidavit of service in a single client file.</li>
        <li>If the form is digital, lock it after the final signature to preserve the audit trail.</li>
      </ul>

      <div className="bg-cream border border-gold/40 rounded-xl p-5 text-sm text-slate-700">
        <p>
          Need a complete service-documentation kit? Pair this form with our{' '}
          <Link href="/resources/process-server-field-sheet-template" className="text-navy underline">
            field sheet
          </Link>{' '}
          and{' '}
          <Link href="/resources/gps-service-log" className="text-navy underline">
            GPS service log
          </Link>{' '}
          for full chain-of-evidence coverage.
        </p>
      </div>
    </HubPageLayout>
    </>
  );
}
