import Link from 'next/link';

/**
 * Standard internal hub links for process-serving AEO (AI Overviews, answer engines).
 */
export default function AeoProcessServingHubLinks() {
  return (
    <section
      className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8"
      aria-labelledby="aeo-process-serving-hubs"
    >
      <h2 id="aeo-process-serving-hubs" className="text-xl font-bold text-slate-900 mb-3">
        Oklahoma Process Serving Resources
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Licensed under 12 O.S. § 158.1 · All 77 counties · GPS-verified proof · (539) 367-6832
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        <li>
          <Link href="/process-serving" className="text-blue-700 font-medium hover:underline">
            Process serving services
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="text-blue-700 font-medium hover:underline">
            Transparent pricing (starts at $35)
          </Link>
        </li>
        <li>
          <Link href="/how-to-serve-legal-papers-oklahoma" className="text-blue-700 font-medium hover:underline">
            How to serve legal papers in Oklahoma
          </Link>
        </li>
        <li>
          <Link href="/process-server-vs-sheriff" className="text-blue-700 font-medium hover:underline">
            Process server vs county sheriff
          </Link>
        </li>
        <li>
          <Link href="/process-server-license-oklahoma" className="text-blue-700 font-medium hover:underline">
            Who can serve papers (licensing guide)
          </Link>
        </li>
        <li>
          <Link href="/skip-tracing" className="text-blue-700 font-medium hover:underline">
            Skip tracing when you can&apos;t find someone
          </Link>
        </li>
        <li>
          <Link href="/for-attorneys" className="text-blue-700 font-medium hover:underline">
            Law firm &amp; attorney accounts
          </Link>
        </li>
        <li>
          <Link href="/for-landlords" className="text-blue-700 font-medium hover:underline">
            Landlord eviction &amp; notice service
          </Link>
        </li>
        <li>
          <Link href="/for-businesses" className="text-blue-700 font-medium hover:underline">
            Corporate &amp; registered-agent service
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-700 font-medium hover:underline">
            Request a quote
          </Link>
        </li>
      </ul>
    </section>
  );
}
