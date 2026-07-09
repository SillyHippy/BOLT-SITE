import Link from 'next/link';

const ABOUT_URL = 'https://justlegalsolutions.org/about/joseph-iannazzi';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joseph Iannazzi',
  jobTitle: 'Licensed Oklahoma Process Server',
  url: ABOUT_URL,
  worksFor: {
    '@type': 'LegalService',
    name: 'Just Legal Solutions',
    url: 'https://justlegalsolutions.org',
  },
};

export default function AuthorBio() {
  return (
    <aside
      aria-label="About the author"
      className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-4 my-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div
        aria-hidden="true"
        className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-700 text-white font-bold text-lg flex items-center justify-center"
      >
        JI
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-blue-900 leading-tight">
          Joseph Iannazzi
        </p>
        <p className="text-sm text-blue-800 font-medium mb-1">
          Licensed Oklahoma Process Server
        </p>
        <p className="text-sm text-gray-700 leading-snug">
          Licensed and bonded under 12 O.S. § 158.1, serving all 77 Oklahoma
          counties with GPS-verified proof of service. Founder of Just Legal
          Solutions.
        </p>
        <Link
          href="/about/joseph-iannazzi"
          className="inline-block mt-2 text-sm font-semibold text-blue-700 hover:text-blue-900 underline"
        >
          Read more about Joseph →
        </Link>
      </div>
    </aside>
  );
}
