import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ClipboardList } from 'lucide-react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

const SLUG = 'JLS-Client-Intake-Form-v1.0';

export const metadata: Metadata = {
  title: 'Process Server Client Intake Form (Oklahoma) — Free PDF & DOCX',
  description:
    'Professional intake form for Oklahoma process servers — captures case details, special instructions, rush handling, billing authorization, and signature.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources/client-intake-form',
  },
};

const SECTIONS = [
  {
    title: 'Case information',
    rows: [
      ['Case number', 'County and court'],
      ['Case type', 'Date filed'],
      ['Plaintiff', 'Defendant'],
      ['Hearing or deadline date', 'Statutory deadline'],
      ['Attorney of record (firm + bar #)', 'Opposing counsel'],
    ],
  },
  {
    title: 'Subject and service details',
    rows: [
      ['Full legal name of subject', 'Aliases / DBAs'],
      ['Primary address', 'Best time to attempt'],
      ['Secondary or work address', 'Vehicle (make, model, plate)'],
      ['Description (height, build, hair)', 'Photo on file? Y / N'],
      ['Co-residents', 'Known animals on property'],
    ],
  },
  {
    title: 'Special instructions',
    rows: [
      ['Service method requested', 'Stakeout authorized? Y / N'],
      ['Time-window restrictions', 'Witness required? Y / N'],
      ['Skip-trace authorized?', 'GPS log required?'],
      ['Safety concerns / known risks', 'Other'],
    ],
  },
  {
    title: 'Billing & authorization',
    rows: [
      ['Service rate (standard / rush / same-day)', 'Mileage rate'],
      ['Skip-trace fee (if any)', 'Notarization fee (if any)'],
      ['Retainer paid', 'Balance due'],
      ['Payment method', 'PO or matter number'],
      ['Client signature & date', 'Server signature & date'],
    ],
  },
];

export default function ClientIntakeFormPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Process Server Client Intake Form (Oklahoma) — Free PDF & DOCX"
        pageDescription="Professional intake form for Oklahoma process servers — captures case details, special instructions, rush handling, billing authorization, and signature."
        pageUrl="https://justlegalsolutions.org/resources/client-intake-form"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Process Server Client Intake Form (Oklahoma) — Free PDF & DOCX', url: '/resources/client-intake-form' },
        ]}
      />
    <HubPageLayout
      title="Process Server Client Intake Form"
      description="A professional intake form that captures every detail needed to accept, execute, and bill a process-serving job in Oklahoma."
      citations={[
        { title: '12 O.S. § 158.1 (Licensed Process Servers)', url: 'https://www.oscn.net' },
        { title: '12 O.S. § 2004 (Service of Process)', url: 'https://www.oscn.net' },
        { title: 'Oklahoma Uniform Electronic Transactions Act (12A O.S. § 15)', url: 'https://www.oscn.net' },
      ]}
    >
      <div className="bg-navy text-white rounded-xl p-5 md:p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-white/70 mb-1">Free download — print, fill, or use as a base for your CRM</p>
          <p className="text-lg font-semibold">Client Intake Form (4 sections, signature blocks included)</p>
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

      <h2 className="text-2xl font-bold text-navy mb-3">Use this form to:</h2>
      <ul className="space-y-2 text-slate-700 text-sm mb-8 list-disc pl-5">
        <li>Capture every required case detail before you accept a job</li>
        <li>Document client instructions in writing to prevent fee disputes later</li>
        <li>Authorize specific add-ons (skip trace, stakeouts, GPS logs, after-hours service)</li>
        <li>Establish a clear engagement record under Oklahoma&apos;s electronic transactions act</li>
      </ul>

      {SECTIONS.map((section) => (
        <section key={section.title} className="mb-8">
          <h3 className="flex items-center gap-2 text-xl font-bold text-navy mb-3">
            <ClipboardList className="w-5 h-5 text-gold" />
            {section.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={`${section.title}-${i}`} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-3 py-2 border-r border-slate-200 w-1/2 text-slate-800">{row[0]}</td>
                    <td className="px-3 py-2 text-slate-800">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <h2 className="text-2xl font-bold text-navy mb-3">Tips before you hand it to a client</h2>
      <ul className="space-y-2 text-slate-700 text-sm mb-8 list-disc pl-5">
        <li>Pre-fill your standard rates and policies so the client only fills the case-specific fields.</li>
        <li>Add a one-line confidentiality clause if you handle sensitive matters (family, protective orders).</li>
        <li>If you e-sign, keep an audit log — Oklahoma recognizes electronic signatures, but only with a verifiable record.</li>
        <li>Have an attorney review your fee structure annually for compliance with Oklahoma billing rules.</li>
      </ul>

      <div className="bg-cream border border-gold/40 rounded-xl p-5 text-sm text-slate-700">
        <p>
          Looking for the rest of the operations toolkit?{' '}
          <Link href="/downloads" className="text-navy underline">View all 30 free downloads</Link>{' '}
          including the field sheet, attempt log, and chain-of-custody form.
        </p>
      </div>
    </HubPageLayout>
    </>
  );
}
