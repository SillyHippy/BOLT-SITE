'use client';

import { useState } from 'react';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import JsonLd from '@/components/JsonLd';
import { allReviews } from '@/data/reviews';

const REVIEWS_PER_PAGE = 20;
const SCHEMA_COUNT = 20;

const stats = [
  { value: '4.9★', label: 'Average Rating', sub: 'across all review sources' },
  { value: `${allReviews.length}+`, label: 'Verified Reviews', sub: 'Google, phone, text, email, survey' },
  { value: '95%+', label: 'Success Rate', sub: 'on first or second attempt' },
  { value: '50+', label: 'Years Combined', sub: 'process server experience' },
];

const sourceColors: Record<string, string> = {
  'Google': 'bg-blue-100 text-blue-800 border-blue-200',
  'Direct Client': 'bg-green-100 text-green-800 border-green-200',
  'Phone Review': 'bg-purple-100 text-purple-800 border-purple-200',
  'Email Feedback': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Client Survey': 'bg-orange-100 text-orange-800 border-orange-200',
  'Text Message': 'bg-teal-100 text-teal-800 border-teal-200',
};

const sources = ['All', 'Google', 'Direct Client', 'Phone Review', 'Email Feedback', 'Client Survey', 'Text Message'];
const services = ['All', ...Array.from(new Set(allReviews.map(r => r.service))).sort()];

function generateSchema(reviews: typeof allReviews) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://justlegalsolutions.org/reviews#collection',
    name: 'Just Legal Solutions Verified Client Reviews',
    url: 'https://justlegalsolutions.org/reviews',
    description:
      'Verified client reviews for Just Legal Solutions from Google Business Profile and internal client channels (phone, text, email, and survey).',
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': 'https://justlegalsolutions.org/#organization',
      name: 'Just Legal Solutions',
      telephone: '+15393676832',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 4.9,
        reviewCount: allReviews.length,
        bestRating: 5,
        worstRating: 1,
      },
    },
    hasPart: reviews.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      reviewBody: r.text,
    })),
  };
}

export default function ReviewsPage() {
  const [sourceFilter, setSourceFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = allReviews.filter(r => {
    if (sourceFilter !== 'All' && r.source !== sourceFilter) return false;
    if (serviceFilter !== 'All' && r.service !== serviceFilter) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / REVIEWS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE);

  const schemaReviews = allReviews.slice(0, SCHEMA_COUNT);

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/reviews"
        title="Just Legal Solutions Reviews — 5-Star Process Server | Tulsa, OK"
        description="Read reviews from attorneys, law firms & clients. 5-star rated process server in Tulsa, OK."
        reviews={schemaReviews.map(r => ({
          author: r.name,
          ratingValue: r.rating,
          reviewBody: r.text,
        }))}
        organization={{
          name: 'Just Legal Solutions',
          telephone: '+15393676832',
          address: {
            streetAddress: '564 E 138th PL',
            addressLocality: 'Glenpool',
            addressRegion: 'OK',
            postalCode: '74033',
            addressCountry: 'US',
          },
        }}
      />
      <JsonLd data={generateSchema(schemaReviews)} />

      <div className="min-h-screen bg-white font-sans">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Just Legal Solutions Reviews
            </h1>
            <p className="text-xl text-blue-200 mb-6">Rated 4.9 stars across {allReviews.length}+ verified reviews from Google and internal client channels across Oklahoma.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/Cb81H1j9UTYxEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg transition-all"
              >
                ⭐ Leave a Google Review
              </a>
              <a
                href="tel:5393676832"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                📞 (539) 367-6832
              </a>
            </div>
            <p className="text-sm text-blue-100 mt-5">
              Third-party profiles:{' '}
              <a href="https://www.google.com/maps/place/Just+Legal+Solutions/@35.3090496,-98.7167134,7z/data=!3m1!4b1!4m6!3m5!1s0x2d3a1c9aca7b5281:0x313651fd581f35bf!8m2!3d35.3090496!4d-98.7167134!16s%2Fg%2F11x0psycvf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Google Business Profile</a>{' '}·{' '}
              <a href="https://nationalprocessservernetwork.com/directory/just-legal-solutions/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">National Process Server Network</a>{' '}·{' '}
              <a href="https://www.instagram.com/just_legal_solutions/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Instagram</a>
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-blue-50 border-y border-blue-100 py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-blue-700">{s.value}</p>
                <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
                <p className="text-xs text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Source</label>
                <select
                  value={sourceFilter}
                  onChange={e => { setSourceFilter(e.target.value); setPage(1); }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                >
                  {sources.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Service Type</label>
                <select
                  value={serviceFilter}
                  onChange={e => { setServiceFilter(e.target.value); setPage(1); }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                >
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => { setSourceFilter('All'); setServiceFilter('All'); setPage(1); }}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium px-4 py-2"
                >
                  Clear filters
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Showing {paginated.length} of {filtered.length} reviews{sourceFilter !== 'All' || serviceFilter !== 'All' ? ` (filtered from ${allReviews.length} total)` : ''}
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((review, i) => (
                <div key={`p${page}-${i}`} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${sourceColors[review.source] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                      {review.source}
                    </span>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">&ldquo;{review.text}&rdquo;</p>

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.role} · {review.location}</p>
                    </div>
                    {review.verified && (
                      <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(p => p - 1)}
                  className="px-4 py-2 text-sm rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition-colors"
                >
                  ← Previous
                </button>
                <span className="text-sm text-gray-500">
                  Page {page} of {totalPages}
                </span>
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(p => p + 1)}
                  className="px-4 py-2 text-sm rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-100 transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* AI Crawler Section — all reviews in plain HTML, no JS required */}
        <section className="py-12 px-4 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <details className="text-gray-400">
              <summary className="cursor-pointer text-xs font-medium select-none">
                All {allReviews.length} verified reviews from Just Legal Solutions
              </summary>
              <div className="mt-6 space-y-3">
                {allReviews.map((r, i) => (
                  <div key={`ai-${i}`} className="border border-gray-100 rounded-lg p-3 text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{r.name}</span>
                      <span className="text-xs text-gray-400">• {r.role}</span>
                      <span className="text-xs text-gray-400">• {r.location}</span>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full border ${sourceColors[r.source] || 'bg-gray-100'}`}>{r.source}</span>
                      <span className="text-yellow-500">{'★'.repeat(r.rating)}</span>
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>
                    <p className="text-gray-600">&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Worked With Us? Share Your Experience.</h2>
            <p className="text-gray-600 mb-6">Your review helps other attorneys and clients find reliable process serving in Oklahoma.</p>
            <a
              href="https://g.page/r/Cb81H1j9UTYxEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg"
            >
              ⭐ Write a Google Review
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience 5-Star Service?</h2>
            <p className="text-blue-200 text-lg mb-8">Join {allReviews.length}+ satisfied clients. Licensed, GPS-tracked, court-ready. Start at $60.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all">
                📞 (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
