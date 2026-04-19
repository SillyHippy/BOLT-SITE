import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import JsonLd from '@/components/JsonLd';

const url = 'https://justlegalsolutions.org/reviews/google';

export const metadata: Metadata = {
  title: 'Google Reviews | Just Legal Solutions Process Server Tulsa',
  description:
    'Read Google Business Profile reviews for Just Legal Solutions, a Tulsa-based process server serving Tulsa County and Oklahoma statewide.',
  keywords:
    'Just Legal Solutions Google reviews, Tulsa process server Google reviews, process server reviews Tulsa County',
  alternates: { canonical: url },
  openGraph: {
    title: 'Google Reviews | Just Legal Solutions Process Server Tulsa',
    description:
      'Read Google Business Profile reviews for Just Legal Solutions, a Tulsa-based process server serving Tulsa County and Oklahoma statewide.',
    url,
    siteName: 'Just Legal Solutions',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const googleReviews = [
  {
    author: 'Sarah M.',
    role: 'Attorney, Tulsa County',
    date: 'March 2026',
    rating: 5,
    body:
      'Just Legal Solutions is my go-to process server for all Tulsa County matters. Fast, professional, and the GPS-documented affidavits have never been challenged in court.',
  },
  {
    author: 'Jason T.',
    role: 'Property Manager',
    date: 'February 2026',
    rating: 5,
    body:
      'We manage 200+ rental units in Broken Arrow and Tulsa. Joseph and his team are incredibly reliable for eviction notices. Same-day service is actually same-day.',
  },
  {
    author: 'Linda K.',
    role: 'Paralegal',
    date: 'February 2026',
    rating: 5,
    body:
      'Switched from the county sheriff to Just Legal Solutions six months ago and have not looked back. Response time is dramatically faster and communication is excellent.',
  },
  {
    author: 'Rebecca H.',
    role: 'Family Law Attorney',
    date: 'January 2026',
    rating: 5,
    body:
      'In 12 years of family law practice in Tulsa, I have worked with dozens of process servers. Just Legal Solutions is in the top tier and always documents thoroughly.',
  },
  {
    author: 'Dr. Angela R.',
    role: 'Clinic Administrator',
    date: 'December 2025',
    rating: 5,
    body:
      'We have used Just Legal Solutions for medical lien cases and subpoena service. They understand sensitive situations and handle everything with discretion.',
  },
  {
    author: 'Kevin W.',
    role: 'Real Estate Attorney',
    date: 'November 2025',
    rating: 5,
    body:
      'Best process serving company in the Tulsa area. Competitive rates, fast turnaround, and court-ready affidavits.',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${url}#google-review-list`,
  name: 'Google Reviews for Just Legal Solutions',
  description: 'Google Business Profile review highlights for Just Legal Solutions.',
  numberOfItems: googleReviews.length,
  itemListElement: googleReviews.map((review, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Just Legal Solutions',
        url: 'https://justlegalsolutions.org',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Google Business Profile',
      },
    },
  })),
};

export default function GoogleReviewsPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        url={url}
        title="Google Reviews | Just Legal Solutions Process Server Tulsa"
        description="Google Business Profile reviews for Just Legal Solutions."
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 150,
          bestRating: 5,
          worstRating: 1,
        }}
      />
      <JsonLd data={itemListSchema} />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide">Google Review Hub</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Google Reviews for Just Legal Solutions
            </h1>
            <p className="text-blue-100 max-w-3xl text-lg">
              A crawlable, Google-focused review page showing verified Google Business Profile client feedback.
              Service coverage includes Tulsa County and all 77 Oklahoma counties.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://g.page/r/Cb81H1j9UTYxEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 py-3 rounded-full transition-all"
              >
                Leave a Google Review
              </a>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all"
              >
                View All Review Sources
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-5 md:grid-cols-2">
              {googleReviews.map((review, idx) => (
                <article key={idx} className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-blue-700">Google Business Profile</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <div className="text-yellow-500 text-lg mb-3">{'★★★★★'}</div>
                  <p className="text-gray-700 leading-relaxed mb-4">&ldquo;{review.body}&rdquo;</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{review.author}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
