import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Forms & Tools',
  description: 'Use the affidavit and declaration generator, one-page field sheet, and free PDF tools. No misleading affidavit or invoice downloads.',
  alternates: { canonical: 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates' },
};

const tools = [
  { title: 'Affidavit or Declaration of Service', description: 'Complete service or non-service details in the browser, then print or save the finished document. Confirm the filing court accepts the selected format.', href: '/affidavit-of-service', action: 'Open the generator' },
  { title: 'Field Sheet', description: 'Record case details, subject information, and four service attempts together. Print the sheet from the browser.', href: '/field-sheet', action: 'Open the field sheet' },
  { title: 'PDF Tools', description: 'Merge, split, compress, and manage PDFs using the existing utility page.', href: '/pdf-tools', action: 'Open PDF tools' },
];

export default function OklahomaProcessServerFormsPage() {
  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <section className="bg-blue-900 px-4 py-12 text-white"><div className="mx-auto max-w-4xl"><h1 className="text-3xl font-bold sm:text-4xl">Oklahoma Process Server Forms & Tools</h1><p className="mt-4 text-lg text-blue-100">Use the form generator and field sheet directly. We do not label a field sheet as an affidavit, invoice, or proof of certified-mail service.</p></div></section>
    <section className="mx-auto max-w-4xl px-4 py-10"><h2 className="text-2xl font-semibold">Working tools</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{tools.map(tool => <article key={tool.href} className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="text-xl font-semibold">{tool.title}</h3><p className="mt-2 text-slate-700">{tool.description}</p><Link href={tool.href} className="mt-4 inline-flex min-h-[44px] items-center rounded-lg bg-blue-800 px-4 py-2 font-semibold text-white hover:bg-blue-700">{tool.action}</Link></article>)}</div></section>
    <section className="mx-auto max-w-4xl px-4 pb-12"><h2 className="text-2xl font-semibold">Before filing</h2><p className="mt-3 text-slate-700">Keep factual notes of the attempts you actually made. Ask the hiring attorney which return or declaration the filing court requires. A sworn affidavit needs notarization; an unsworn declaration has different execution language and is not accepted for every filing. Counsel handles requests for publication and other alternative service.</p><p className="mt-4 text-slate-700">Oklahoma private process-server licensing is governed by <Link className="text-blue-800 underline" href="/process-server-license-oklahoma">12 O.S. § 158.1 and the Oklahoma Supreme Court</Link>; this is not a CLEET license. These tools do not certify anyone's credentials or guarantee court acceptance.</p></section>
  </div>;
}
