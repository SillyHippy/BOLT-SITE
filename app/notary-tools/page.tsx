import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Oklahoma Notary Forms & Official Resources',
  description: 'Official Oklahoma Secretary of State notary guidance, short-form certificate examples and a recommended blank journal page.',
  alternates: { canonical: 'https://justlegalsolutions.org/notary-tools' },
};

const official = [
  ['SOS Notary Public Guide (12/2025)', 'https://sos.ok.gov/forms/notary/NotaryPublicGuide.pdf', 'Five short-form certificate examples and traditional journal recommendations.'],
  ['SOS Notary FAQ', 'https://sos.ok.gov/notary/info/faqs.aspx', 'Official answers about commissions, identification and record-keeping.'],
  ['SOS Remote Online Notarization Guidance', 'https://sos.ok.gov/notary/info/generalInformation.aspx', 'RON-specific electronic journal and audiovisual retention requirements.'],
  ['SOS Application & Instructions', 'https://sos.ok.gov/forms/notary/NotaryApplicationInstructions.pdf', 'Current application form and filing fees.'],
  ['SOS Notary Bond Form', 'https://sos.ok.gov/forms/notary/NotaryBond.pdf', 'Official bond form.'],
  ['SOS OAC 655:25 Rules', 'https://www.sos.ok.gov/forms/oar/655_25.pdf', 'Remote-online notarization rules and certificate guidance.'],
  ['Oklahoma Legislature HB 2265 History', 'https://www.oklegislature.gov/BillInfo.aspx?Bill=HB2265&Session=2600', 'The 2025 journal/exam proposal did not become law.'],
];

export default function NotaryToolsPage() {
  return <main className="mx-auto max-w-4xl px-4 py-12 text-slate-900">
    <h1 className="text-3xl font-bold">Oklahoma Notary Forms & Official Resources</h1>
    <p className="mt-4 text-base leading-relaxed">Use the Oklahoma Secretary of State’s own guide first. For traditional in-person acts, a journal is recommended, not mandated. Remote online notarizations require a permanent, tamper-evident electronic journal and additional records. Confirm current requirements before notarizing.</p>
    <section className="mt-9"><h2 className="text-xl font-bold">Official sources</h2><ul className="mt-4 space-y-3">{official.map(([title,url,description])=><li key={url} className="rounded-xl border border-slate-200 p-4"><a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center font-semibold text-blue-700 underline">{title}</a><p className="text-sm text-slate-600">{description}</p></li>)}</ul></section>
    <section className="mt-10"><h2 className="text-xl font-bold">Blank, editable examples</h2><p className="mt-2">These files reproduce the short-form wording in the SOS Guide. They are examples, not a replacement for the current state publication or your receiving institution’s instructions. Add the county where the notarization occurs, signature, commission details and seal where required.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border p-4"><strong>Five short-form certificates</strong><p className="my-2 text-sm">Individual/representative acknowledgment, oath or affirmation, signature witnessing and copy attestation.</p><a className="min-h-[44px] inline-flex items-center text-blue-700 underline mr-4" href="/downloads/JLS-OK-Notary-Short-Form-Certificates-v1.0.pdf">PDF</a><a className="min-h-[44px] inline-flex items-center text-blue-700 underline" href="/downloads/JLS-OK-Notary-Short-Form-Certificates-v1.0.docx">Editable Word</a></div>
      <div className="rounded-xl border p-4"><strong>Recommended paper journal page</strong><p className="my-2 text-sm">For traditional acts; not a RON recording system.</p><a className="min-h-[44px] inline-flex items-center text-blue-700 underline mr-4" href="/downloads/JLS-OK-Recommended-Notary-Journal-Page-v1.0.pdf">PDF</a><a className="min-h-[44px] inline-flex items-center text-blue-700 underline" href="/downloads/JLS-OK-Recommended-Notary-Journal-Page-v1.0.docx">Editable Word</a></div>
    </div></section>
    <section className="mt-10 rounded-xl bg-slate-50 p-5"><h2 className="text-xl font-bold">Notary-log: a separate phone journal tool</h2><p className="mt-2 text-sm">If you prefer a mobile electronic journal, visit <a className="text-blue-700 underline" href="https://notarylog.net/" target="_blank" rel="noopener noreferrer">notarylog.net</a>. It is a journal, not a remote-online notarization platform. Notaries bring their own document and select the appropriate certificate wording.</p></section>
    <p className="mt-8 text-sm text-slate-600">This page is informational, not legal advice. <Link className="text-blue-700 underline" href="/pdf-tools">Free PDF tools</Link> are also available.</p>
  </main>;
}
