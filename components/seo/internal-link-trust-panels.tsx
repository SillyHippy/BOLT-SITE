import Link from 'next/link';

export function CountyNetworkPanel() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Related Oklahoma Service Resources
        </h2>
        <p className="text-slate-600 mb-5">
          Use these pages to compare service speed, methods, and filing support
          before scheduling service in your county.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <Link
            href="/process-serving"
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Process Serving Services
          </Link>
          <Link
            href="/subpoena-service"
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Subpoena Service
          </Link>
          <Link
            href="/skip-tracing"
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Skip Tracing
          </Link>
          <Link
            href="/oklahoma-tools"
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Oklahoma Tools
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Pricing and Turnaround
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LegalTrustSignalsPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-slate-50 border border-slate-200 rounded-2xl">
      <div className={compact ? 'p-5' : 'p-7'}>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Licensing, Proof, and Service Standards
        </h2>
        <ul className="space-y-2 text-slate-700 mb-5">
          <li>
            Licensed Oklahoma private process servers under{' '}
            <Link href="/oklahoma-process-server-laws" className="text-blue-700 hover:underline">
              12 O.S. section 158.1
            </Link>
            .
          </li>
          <li>Each assigned server carries the required statutory surety bond.</li>
          <li>Every attempt is GPS timestamped, with photo support when appropriate.</li>
          <li>Returns include notarized affidavits suitable for court filing.</li>
        </ul>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">How service works</h3>
        <ol className="list-decimal list-inside space-y-1 text-slate-700">
          <li>Submit documents and deadline details.</li>
          <li>Receive dispatch updates for each service attempt.</li>
          <li>Get an affidavit and status report for filing.</li>
        </ol>
      </div>
    </section>
  );
}

export function CorePageCountyLinksPanel() {
  return (
    <section className="bg-white border border-blue-200 rounded-2xl p-7">
      <h2 className="text-2xl font-bold text-blue-900 mb-3">
        County Coverage Quick Links
      </h2>
      <p className="text-slate-700 mb-5">
        Review county-specific service pages for courthouse details, local FAQs,
        and coverage notes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Link href="/counties" className="text-blue-700 font-semibold hover:underline">
          All Oklahoma Counties
        </Link>
        <Link href="/counties/tulsa-county" className="text-blue-700 font-semibold hover:underline">
          Tulsa County
        </Link>
        <Link href="/counties/creek-county" className="text-blue-700 font-semibold hover:underline">
          Creek County
        </Link>
        <Link href="/counties/rogers-county" className="text-blue-700 font-semibold hover:underline">
          Rogers County
        </Link>
        <Link href="/counties/wagoner-county" className="text-blue-700 font-semibold hover:underline">
          Wagoner County
        </Link>
        <Link href="/counties/oklahoma-county" className="text-blue-700 font-semibold hover:underline">
          Oklahoma County
        </Link>
      </div>
    </section>
  );
}
