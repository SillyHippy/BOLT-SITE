import Link from 'next/link';

/** Standard internal hub links for mobile notary / Tulsa notary AEO surfaces. */
export default function AeoNotaryHubLinks() {
  return (
    <section
      className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8"
      aria-labelledby="aeo-notary-hubs"
    >
      <h2 id="aeo-notary-hubs" className="text-xl font-bold text-slate-900 mb-3">
        Tulsa &amp; Oklahoma Notary Resources
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Mobile notary, RON, loan signings · Oklahoma Notary Public Act · (539) 367-6832
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        <li>
          <Link href="/mobile-notary" className="text-blue-700 font-medium hover:underline">
            Mobile notary services
          </Link>
        </li>
        <li>
          <Link href="/resources/oklahoma-notarization-requirements" className="text-blue-700 font-medium hover:underline">
            Oklahoma notarization requirements
          </Link>
        </li>
        <li>
          <Link href="/blog/mobile-notary-tulsa-guide" className="text-blue-700 font-medium hover:underline">
            Mobile notary Tulsa guide
          </Link>
        </li>
        <li>
          <Link href="/blog/ron-vs-mobile-notary-oklahoma" className="text-blue-700 font-medium hover:underline">
            RON vs mobile notary in Oklahoma
          </Link>
        </li>
        <li>
          <Link href="/process-serving" className="text-blue-700 font-medium hover:underline">
            Process serving (same team)
          </Link>
        </li>
        <li>
          <Link href="/courier-services" className="text-blue-700 font-medium hover:underline">
            Legal document courier
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-700 font-medium hover:underline">
            Book a notary appointment
          </Link>
        </li>
      </ul>
    </section>
  );
}
