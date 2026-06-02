import Link from 'next/link';
import { getNearbyCounties } from '@/lib/county-neighbors';

interface CountyRelatedLinksProps {
  countySlug: string;
  countyName: string;
}

/** Cross-links for county pages: hubs, neighbors, and guides. */
export function CountyRelatedLinks({ countySlug, countyName }: CountyRelatedLinksProps) {
  const nearby = getNearbyCounties(countySlug, 4);
  const isTulsaMetro = ['tulsa-county', 'wagoner-county', 'rogers-county', 'creek-county', 'osage-county'].includes(
    countySlug
  );

  return (
    <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <h2 className="text-2xl font-bold mb-1">Nearby Counties &amp; Resources</h2>
        <p className="text-purple-100">
          Process serving coverage across {countyName} and Oklahoma
        </p>
      </div>
      <div className="p-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Process Serving Hubs</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/process-serving" className="text-blue-600 hover:underline">
                Oklahoma Process Serving
              </Link>
            </li>
            {isTulsaMetro && (
              <li>
                <Link href="/tulsa-process-server" className="text-blue-600 hover:underline">
                  Tulsa Process Server
                </Link>
              </li>
            )}
            <li>
              <Link href="/counties" className="text-blue-600 hover:underline">
                All 77 Oklahoma Counties
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="text-blue-600 hover:underline">
                City Service Areas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Nearby Counties</h3>
          <ul className="space-y-2">
            {nearby.map((c) => (
              <li key={c.slug}>
                <Link href={`/counties/${c.slug}`} className="text-blue-600 hover:underline">
                  {c.countyName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Guides &amp; Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">
                Process Serving FAQ
              </Link>
            </li>
            <li>
              <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">
                Oklahoma Service Laws (12 O.S. § 2004)
              </Link>
            </li>
            <li>
              <Link href="/resources/attorneys-guide-hiring-process-server" className="text-blue-600 hover:underline">
                Attorney&apos;s Hiring Guide (PDF)
              </Link>
            </li>
            <li>
              <Link href="/skip-tracing" className="text-blue-600 hover:underline">
                Skip Tracing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
