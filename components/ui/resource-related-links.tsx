import Link from 'next/link';

const RESOURCE_PAGES = [
  {
    href: '/resources/attorneys-guide-hiring-process-server',
    title: "Attorney's Guide to Hiring a Process Server",
    description: 'Vetting checklist, red flags, and firm workflow tips',
  },
  {
    href: '/resources/oklahoma-service-of-process-reference',
    title: 'Oklahoma Service of Process Reference',
    description: '12 O.S. § 2004 methods, timelines, and affidavit requirements',
  },
  {
    href: '/resources/oklahoma-eviction-timeline',
    title: 'Oklahoma Eviction Timeline',
    description: 'Notice periods, court steps, and service deadlines for landlords',
  },
  {
    href: '/resources/what-to-do-when-served-oklahoma',
    title: 'What to Do When Served in Oklahoma',
    description: 'Rights, deadlines, and next steps for defendants',
  },
  {
    href: '/resources/oklahoma-notarization-requirements',
    title: 'Oklahoma Notarization Requirements',
    description: 'ID rules, RON vs mobile notary, and common mistakes',
  },
  {
    href: '/resources/process-server-field-sheet-template',
    title: 'Process Server Field Sheet Template',
    description: 'Downloadable attempt log aligned with court proof standards',
  },
  {
    href: '/resources/become-process-server-oklahoma',
    title: 'Become a Process Server in Oklahoma',
    description: 'Licensing under 12 O.S. § 158.1 and career path overview',
  },
  {
    href: '/resources/chain-of-custody-form',
    title: 'Chain of Custody Form',
    description: 'Document handling template for legal support teams',
  },
  {
    href: '/resources/gps-service-log',
    title: 'GPS Service Log Template',
    description: 'Track attempts with GPS-verified proof fields',
  },
  {
    href: '/resources/skip-trace-checklist',
    title: 'Skip Trace Checklist',
    description: 'Due diligence steps before alternate service',
  },
] as const;

const SERVICE_HUBS = [
  { href: '/process-serving', title: 'Process Serving Services' },
  { href: '/tulsa-process-server', title: 'Tulsa Process Server' },
  { href: '/mobile-notary', title: 'Mobile Notary Tulsa' },
  { href: '/attorney-services', title: 'Attorney Services' },
  { href: '/for-landlords', title: 'Landlord Eviction Service' },
  { href: '/skip-tracing', title: 'Skip Tracing' },
] as const;

interface ResourceRelatedLinksProps {
  currentPath: string;
}

/** Cross-links between resource downloads, guides, and service hubs. */
export function ResourceRelatedLinks({ currentPath }: ResourceRelatedLinksProps) {
  const normalized = currentPath.replace(/\/$/, '');
  const related = RESOURCE_PAGES.filter((p) => p.href !== normalized).slice(0, 4);

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Related Resources</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Free Oklahoma legal support guides, templates, and service pages from Just Legal Solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-lg font-bold text-blue-800 group-hover:text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-center">Professional Services</h3>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {SERVICE_HUBS.map((hub) => (
              <li key={hub.href}>
                <Link href={hub.href} className="text-blue-600 hover:underline font-medium">
                  {hub.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/resources" className="text-blue-600 hover:underline font-medium">
                All Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
