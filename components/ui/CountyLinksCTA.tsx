import Link from 'next/link';

// Top Oklahoma counties by case volume. Used to surface internal blog->county links
// for SEO (previously blog posts had no links to /counties/* pages).
const FEATURED_COUNTIES: { slug: string; name: string }[] = [
  { slug: 'tulsa-county', name: 'Tulsa County' },
  { slug: 'oklahoma-county', name: 'Oklahoma County' },
  { slug: 'cleveland-county', name: 'Cleveland County' },
  { slug: 'creek-county', name: 'Creek County' },
  { slug: 'rogers-county', name: 'Rogers County' },
  { slug: 'wagoner-county', name: 'Wagoner County' },
  { slug: 'washington-county', name: 'Washington County' },
  { slug: 'canadian-county', name: 'Canadian County' },
  { slug: 'comanche-county', name: 'Comanche County' },
  { slug: 'payne-county', name: 'Payne County' },
  { slug: 'muskogee-county', name: 'Muskogee County' },
  { slug: 'osage-county', name: 'Osage County' },
];

export interface CountyLinksCTAProps {
  heading?: string;
  description?: string;
  showAllLink?: boolean;
}

export function CountyLinksCTA({
  heading = 'Need Service in Your Oklahoma County?',
  description = 'Just Legal Solutions serves all 77 Oklahoma counties. Jump to your county page for local court info, pricing, and a direct request form.',
  showAllLink = true,
}: CountyLinksCTAProps) {
  return (
    <aside
      aria-labelledby="county-links-heading"
      className="ui-surface-card mt-12 p-6 border border-slate-200"
    >
      <h2
        id="county-links-heading"
        className="text-2xl font-bold text-slate-900 mb-2"
      >
        {heading}
      </h2>
      <p className="text-slate-600 mb-4">{description}</p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
        {FEATURED_COUNTIES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/counties/${c.slug}`}
              className="block text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
            >
              {c.name} Process Server
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mt-2">
        {showAllLink && (
          <Link
            href="/counties"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
            View all 77 Oklahoma counties
          </Link>
        )}
        <Link
          href="/pricing"
          className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
        >
          See pricing
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Request service now
        </Link>
      </div>
    </aside>
  );
}

export default CountyLinksCTA;
