import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, MapPin } from 'lucide-react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

const SLUG = 'JLS-GPS-Service-Log-v1.0';

export const metadata: Metadata = {
  title: 'GPS Service Log Template (Oklahoma) — Free PDF & DOCX',
  description:
    'Court-admissible GPS log template for Oklahoma process servers. Records latitude, longitude, timestamps, and event notes for every service attempt.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources/gps-service-log',
  },
};

const COLUMNS = [
  { name: 'Date', desc: 'Calendar date of attempt (MM/DD/YYYY)' },
  { name: 'Arrival time', desc: 'GPS-synchronized clock from device' },
  { name: 'Departure time', desc: 'GPS-synchronized clock from device' },
  { name: 'Latitude', desc: 'Decimal degrees from device, ≥4 decimals' },
  { name: 'Longitude', desc: 'Decimal degrees from device, ≥4 decimals' },
  { name: 'Accuracy (m)', desc: 'Reported horizontal accuracy in meters' },
  { name: 'Event', desc: 'Attempt, service, refusal, posting, transfer, etc.' },
  { name: 'Notes', desc: 'Brief context: vehicles present, witnesses, etc.' },
  { name: 'Initials', desc: 'Server initials confirming entry' },
];

const ADMISSIBILITY = [
  {
    rule: 'Business Records — 12 O.S. § 2803(6)',
    requirement: 'Made at or near the time, by someone with knowledge, kept in the regular course of business',
    practice: 'Log every attempt the same day; retain logs as part of standard server file',
  },
  {
    rule: 'Authentication — 12 O.S. § 2901',
    requirement: 'Server testifies the GPS device was working and the data is what was recorded',
    practice: 'Note device model, app version, and any calibration check',
  },
  {
    rule: 'Best Evidence — 12 O.S. § 3001',
    requirement: 'Original record (or duplicate) preferred',
    practice: 'Keep both digital export and printed log; preserve raw GPX or KML if available',
  },
];

export default function GpsServiceLogPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="GPS Service Log Template (Oklahoma) — Free PDF & DOCX"
        pageDescription="Court-admissible GPS log template for Oklahoma process servers. Records latitude, longitude, timestamps, and event notes for every service attempt."
        pageUrl="https://justlegalsolutions.org/resources/gps-service-log"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'GPS Service Log Template (Oklahoma) — Free PDF & DOCX', url: '/resources/gps-service-log' },
        ]}
      />
    <HubPageLayout
      title="GPS Service Log Template"
      description="A court-admissible GPS log template that documents the exact time, place, and manner of every service attempt — with columns for accuracy, event type, and server initials."
      citations={[
        { title: '12 O.S. § 2803 (Hearsay Exception — Business Records)', url: 'https://www.oscn.net' },
        { title: '12 O.S. § 2901 (Authentication)', url: 'https://www.oscn.net' },
        { title: 'Oklahoma Evidence Code (Title 12 Ch. 40)', url: 'https://www.oscn.net' },
      ]}
    >
      <div className="bg-navy text-white rounded-xl p-5 md:p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-white/70 mb-1">Use it on a clipboard or fill on screen</p>
          <p className="text-lg font-semibold">GPS Service Log (9-column template + verification page)</p>
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

      <h2 className="text-2xl font-bold text-navy mb-3">Why GPS evidence wins challenges</h2>
      <p className="text-slate-700 mb-6">
        Oklahoma courts increasingly expect GPS data when service is contested. A well-maintained
        log corroborates your affidavit with objective coordinates and timestamps from atomic-clock
        synchronized devices — far stronger than memory or handwritten notes alone.
      </p>

      <h2 className="text-2xl font-bold text-navy mb-3">Columns in the template</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-navy text-white text-left">
            <tr>
              <th className="px-3 py-2 font-semibold">Column</th>
              <th className="px-3 py-2 font-semibold">What to record</th>
            </tr>
          </thead>
          <tbody>
            {COLUMNS.map((col, i) => (
              <tr key={col.name} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-3 py-2 font-semibold text-navy">{col.name}</td>
                <td className="px-3 py-2 text-slate-800">{col.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-navy mb-3">Admissibility under the Oklahoma Evidence Code</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-navy text-white text-left">
            <tr>
              <th className="px-3 py-2 font-semibold">Rule</th>
              <th className="px-3 py-2 font-semibold">Requirement</th>
              <th className="px-3 py-2 font-semibold">Best practice</th>
            </tr>
          </thead>
          <tbody>
            {ADMISSIBILITY.map((row, i) => (
              <tr key={row.rule} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-3 py-2 align-top font-mono text-xs">{row.rule}</td>
                <td className="px-3 py-2 align-top">{row.requirement}</td>
                <td className="px-3 py-2 align-top">{row.practice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-navy mb-3">Field workflow</h2>
      <ol className="list-decimal pl-5 space-y-2 text-slate-700 text-sm mb-8">
        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Record arrival coordinates and time the moment you stop the vehicle.</li>
        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Note observed conditions before knocking (vehicles, lights, animals).</li>
        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Capture event type immediately after the door interaction or attempt.</li>
        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Photograph the GPS screen showing time and coordinates if service was effected.</li>
        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Record departure coordinates and time before leaving the location.</li>
        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> Sync or export raw GPX/KML data the same day to a tamper-evident store.</li>
      </ol>

      <div className="bg-cream border border-gold/40 rounded-xl p-5 text-sm text-slate-700">
        <p>
          We use this exact log on every job — see how it integrates into our{' '}
          <Link href="/gps-tracked-process-serving" className="text-navy underline">
            GPS-tracked process serving
          </Link>{' '}
          workflow, or pair it with the{' '}
          <Link href="/resources/chain-of-custody-form" className="text-navy underline">
            chain-of-custody form
          </Link>.
        </p>
      </div>
    </HubPageLayout>
    </>
  );
}
