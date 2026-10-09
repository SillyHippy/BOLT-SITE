import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Official Oklahoma Notary Resources',
  description: 'Official Oklahoma Secretary of State notary guide, FAQ, application, bond, and remote-online rules. No substitute certificate templates.',
  alternates: { canonical: 'https://justlegalsolutions.org/notary-tools' },
};

const official = [
  ['SOS Notary Public Guide', 'https://sos.ok.gov/forms/notary/NotaryPublicGuide.pdf', 'Official guide and short-form certificate examples.'],
  ['SOS Notary FAQ', 'https://sos.ok.gov/notary/info/faqs.aspx', 'Current official answers.'],
  ['SOS General & Remote Online Information', 'https://sos.ok.gov/notary/info/generalInformation.aspx', 'Commission and remote-notarization information.'],
  ['SOS Application & Instructions', 'https://sos.ok.gov/forms/notary/NotaryApplicationInstructions.pdf', 'Current application and filing instructions.'],
  ['SOS Notary Bond Form', 'https://sos.ok.gov/forms/notary/NotaryBond.pdf', 'Official bond form.'],
  ['OAC 655:25 Rules', 'https://www.sos.ok.gov/forms/oar/655_25.pdf', 'Published Oklahoma administrative rules.'],
  ['HB 2265 Legislative History', 'https://www.oklegislature.gov/BillInfo.aspx?Bill=HB2265&Session=2600', 'Journal and exam proposal; not enacted.'],
];

export default function NotaryToolsPage() {
  return <main className="mx-auto max-w-4xl px-4 py-12 text-slate-900">
    <h1 className="text-3xl font-bold">Official Oklahoma Notary Resources</h1>
    <p className="mt-4">Start with the Secretary of State publications. Traditional in-person journal keeping is recommended, not generally mandatory. Remote online notarization has separate journal and audiovisual-record requirements. Check the current rules for your act.</p>
    <ul className="mt-8 space-y-3">{official.map(([title,href,description]) => <li key={href} className="rounded-xl border border-slate-200 p-4"><a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center font-semibold text-blue-800 underline">{title}</a><p className="text-sm text-slate-600">{description}</p></li>)}</ul>
    <p className="mt-8 rounded-xl bg-slate-50 p-4">The separate phone journal at <a className="text-blue-800 underline" href="https://notarylog.net/" target="_blank" rel="noopener noreferrer">notarylog.net</a> is a journal tool, not a remote-online notarization platform or certificate library. Bring the correct certificate for the act.</p>
    <p className="mt-5 text-sm text-slate-600">Information, not legal advice. <Link className="text-blue-800 underline" href="/pdf-tools">PDF tools</Link>.</p>
  </main>;
}
