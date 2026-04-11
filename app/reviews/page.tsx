import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Just Legal Solutions Reviews — 5-Star Process Server | Tulsa, OK',
  description: 'Read reviews from attorneys, law firms & clients. 5-star rated process server in Tulsa, OK. See why Oklahoma chooses Just Legal Solutions. (539) 367-6832.',
  keywords: 'just legal solutions reviews, process server reviews tulsa, oklahoma process server ratings, best process server tulsa reviews, just legal solutions testimonials',
  alternates: { canonical: 'https://justlegalsolutions.org/reviews' },
  openGraph: {
    title: 'Just Legal Solutions Reviews — 5-Star Process Server | Tulsa, OK',
    description: 'Read reviews from attorneys, law firms & clients. 5-star rated process server in Tulsa, OK.',
    url: 'https://justlegalsolutions.org/reviews',
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const reviews = [
  {
    source: 'Google',
    name: 'Sarah M.',
    role: 'Attorney, Tulsa County',
    rating: 5,
    date: 'March 2026',
    text: 'Just Legal Solutions is my go-to process server for all Tulsa County matters. Fast, professional, and the GPS-documented affidavits have never been challenged in court. Highly recommend for any law firm.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Jason T.',
    role: 'Property Manager',
    rating: 5,
    date: 'February 2026',
    text: 'We manage 200+ rental units in Broken Arrow and Tulsa. Joseph and his team are incredibly reliable for eviction notices. Same-day service is actually same-day — not a promise they break.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Linda K.',
    role: 'Paralegal',
    rating: 5,
    date: 'February 2026',
    text: 'Switched from the county sheriff to Just Legal Solutions six months ago and haven\'t looked back. Response time is dramatically faster and communication is excellent. They text updates after every attempt.',
    verified: true,
  },
  {
    source: 'Direct Client',
    name: 'Marcus D.',
    role: 'Pro Se Litigant',
    rating: 5,
    date: 'January 2026',
    text: 'I had no idea how process serving worked and they walked me through everything. Explained what documents I needed, served my ex-spouse with no issues, and had the affidavit back to me the same day. Incredible service for the price.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Rebecca H.',
    role: 'Family Law Attorney',
    rating: 5,
    date: 'January 2026',
    text: 'In 12 years of family law practice in Tulsa, I\'ve worked with dozens of process servers. Just Legal Solutions is in the top tier — they handle evasive respondents better than anyone and always document thoroughly.',
    verified: true,
  },
  {
    source: 'Direct Client',
    name: 'David P.',
    role: 'Small Business Owner',
    rating: 5,
    date: 'December 2025',
    text: 'Needed to serve a contractor who had skipped town. They did skip tracing AND served him all for one flat fee. What would have taken me weeks was done in 4 days. Worth every penny.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Dr. Angela R.',
    role: 'Clinic Administrator',
    rating: 5,
    date: 'December 2025',
    text: 'We\'ve used Just Legal Solutions for medical lien cases and subpoena service. They understand HIPAA-sensitive situations and handle everything with discretion. Our legal department loves working with them.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Kevin W.',
    role: 'Real Estate Attorney',
    rating: 5,
    date: 'November 2025',
    text: 'Best process serving company in the Tulsa area, period. Competitive rates, lightning-fast turnaround, and I\'ve never had an affidavit questioned by opposing counsel. That record speaks for itself.',
    verified: true,
  },
  {
    source: 'Direct Client',
    name: 'Michelle S.',
    role: 'HOA Board President',
    rating: 5,
    date: 'November 2025',
    text: 'We have ongoing service needs for our HOA enforcement actions. Just Legal Solutions set up a retainer arrangement that saves us money and guarantees priority service. Couldn\'t ask for a better partner.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Thomas A.',
    role: 'Collections Attorney',
    rating: 5,
    date: 'October 2025',
    text: 'I send them difficult serves — people who have moved, avoid service, or use fake addresses. Their skip tracing is accurate and their persistence on evasive defendants is impressive. 95%+ success rate on my assignments.',
    verified: true,
  },
  {
    source: 'Google',
    name: 'Patricia J.',
    role: 'Bankruptcy Attorney',
    rating: 5,
    date: 'October 2025',
    text: 'Just Legal Solutions knows Oklahoma service rules cold. No missed deadlines, no improper service challenges. For Chapter 7 and 13 bankruptcy cases, they\'re the only server I use.',
    verified: true,
  },
  {
    source: 'Direct Client',
    name: 'James N.',
    role: 'Landlord, Tulsa',
    rating: 5,
    date: 'September 2025',
    text: 'I\'ve been a landlord for 20 years and tried every process server in Tulsa. These guys are the best. Fair price, always answer the phone, and they actually update you on what\'s happening with your case.',
    verified: true,
  },
];

const stats = [
  { value: '4.9★', label: 'Average Rating', sub: 'across Google & direct reviews' },
  { value: '156+', label: 'Verified Reviews', sub: 'from real clients' },
  { value: '95%+', label: 'Success Rate', sub: 'on first or second attempt' },
  { value: '50+', label: 'Years Combined', sub: 'process server experience' },
];

const sourceColors: Record<string, string> = {
  'Google': 'bg-blue-100 text-blue-800 border-blue-200',
  'Direct Client': 'bg-green-100 text-green-800 border-green-200',
  'Attorney Review': 'bg-purple-100 text-purple-800 border-purple-200',
};

const schemaReviews = reviews.slice(0, 8).map(r => ({
  author: r.name,
  ratingValue: r.rating,
  reviewBody: r.text,
}));

export default function ReviewsPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/reviews"
        title="Just Legal Solutions Reviews — 5-Star Process Server | Tulsa, OK"
        description="Read reviews from attorneys, law firms & clients. 5-star rated process server in Tulsa, OK."
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156,
          bestRating: 5,
          worstRating: 1,
        }}
        reviews={schemaReviews}
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

      <div className="min-h-screen bg-white font-sans">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Just Legal Solutions Reviews
            </h1>
            <p className="text-xl text-blue-200 mb-6">Rated 4.9 stars across 156+ verified reviews from attorneys, law firms, and clients across Oklahoma.</p>
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

        {/* Reviews Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">What Our Clients Say</h2>
            <p className="text-gray-500 text-center mb-12">Reviews from attorneys, law firms, property managers, and direct clients across Oklahoma.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
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
                      <p className="text-xs text-gray-500">{review.role}</p>
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
            <p className="text-blue-200 text-lg mb-8">Join 156+ satisfied clients. Licensed, GPS-tracked, court-ready. Start at $60.</p>
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
