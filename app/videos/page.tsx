import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Process Serving & Notary Videos — Oklahoma Legal Guides',
  description:
    "Watch 42 free educational videos on Oklahoma process serving, notary services, skip tracing, pricing, and more from Joseph Iannazzi — Tulsa's #1 rated process server.",
  keywords:
    'Oklahoma process serving videos, process server tutorial, legal document delivery guide, skip tracing explained, Tulsa notary videos, Oklahoma notary 2026',
  authors: [{ name: 'Joseph Iannazzi' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Free Oklahoma Process Serving & Notary Video Guides',
    description:
      'Watch 42 step-by-step videos covering process serving, notary services, skip tracing, and pricing in Oklahoma.',
    url: 'https://justlegalsolutions.org/videos',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions — Oklahoma Process Serving & Notary Videos',
      },
    ],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/videos' },
};

/* ─────────────────────────────────────────────────────────────────────────────
   VIDEO DATA
   ───────────────────────────────────────────────────────────────────────────── */

interface Video {
  videoId: string;
  title: string;
  description: string;
  datePublished: string;
  duration: string; // ISO 8601
  relatedPage?: string;
  category: string;
  isShort: boolean;
}

const featuredVideos: Video[] = [
  {
    videoId: 'ApPeLMDA5wU',
    title: 'Oklahoma Eviction Process — Landlord\'s Complete Step-by-Step Guide',
    description: 'The complete landlord\'s guide to the Oklahoma eviction process — every step from notice to court order, explained by a licensed process server.',
    datePublished: '2026-04-01',
    duration: 'PT15M0S',
    relatedPage: '/blog/how-to-serve-eviction-notices-in-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'IEKOF4TiEDY',
    title: 'Attorney\'s Guide to Hiring a Process Server in Oklahoma | Just Legal Solutions',
    description: 'What attorneys need to know when hiring a process server in Oklahoma — licensing, GPS documentation, affidavits, and rush service options.',
    datePublished: '2026-04-01',
    duration: 'PT12M0S',
    relatedPage: '/process-serving',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: '4TeTwsMP3dw',
    title: 'Free Process Server Tools & Resources for Oklahoma Servers',
    description: 'Free tools, apps, and resources every Oklahoma process server should know about in 2026.',
    datePublished: '2026-04-01',
    duration: 'PT10M0S',
    relatedPage: '/process-server-equipment-checklist',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'Rr5utB7OFsI',
    title: 'Want to Become a Process Server in Oklahoma? — Complete 2026 Guide',
    description: 'Everything you need to know to become a licensed process server in Oklahoma — licensing, bonding, court registration, and building your business.',
    datePublished: '2026-04-01',
    duration: 'PT14M0S',
    relatedPage: '/blog/become-process-server-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: '7BxAu4S-q0k',
    title: 'Federal Court Process Serving in Oklahoma — Different Rules You Need to Know',
    description: 'Federal court process serving in Oklahoma follows different rules than state court. Learn what\'s required under FRCP Rule 4 and how we handle federal service.',
    datePublished: '2026-04-01',
    duration: 'PT11M0S',
    relatedPage: '/process-serving',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'Y-ATkdBkLsY',
    title: 'Protective Order & Restraining Order Service in Oklahoma',
    description: 'How protective orders and restraining orders are legally served in Oklahoma — VPO service, emergency orders, and documentation requirements.',
    datePublished: '2026-04-01',
    duration: 'PT10M0S',
    relatedPage: '/blog/how-to-file-protective-order-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'iuSq5CGC07w',
    title: 'Divorce & Family Law Process Serving in Oklahoma — Complete Guide',
    description: 'Complete guide to serving divorce papers and family law documents in Oklahoma — personal service, substituted service, and proof of service requirements.',
    datePublished: '2026-04-01',
    duration: 'PT13M0S',
    relatedPage: '/blog/how-to-serve-divorce-papers-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: '9fpWkN2l7xQ',
    title: 'Landlord\'s Complete Guide to Oklahoma Eviction Process Serving | Just Legal Solutions',
    description: 'A dedicated landlord\'s guide to properly serving eviction notices and FED (Forcible Entry and Detainer) summons in Oklahoma.',
    datePublished: '2026-04-01',
    duration: 'PT12M0S',
    relatedPage: '/blog/how-to-serve-eviction-notices-in-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'U9vTOLPoB7E',
    title: 'How to Get a Document Notarized in Oklahoma — Beginner\'s Guide | Just Legal Solutions',
    description: 'A beginner-friendly guide to getting documents notarized in Oklahoma — what to bring, how the process works, and what to expect.',
    datePublished: '2026-04-01',
    duration: 'PT9M0S',
    relatedPage: '/notary',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: '-C9XFE71nVU',
    title: 'New Oklahoma Notary Laws 2026 — HB 2265 Changes Explained',
    description: 'What changed for Oklahoma notaries in 2026 under HB 2265 — new requirements, updated journal rules, and what notaries must do to stay compliant.',
    datePublished: '2026-04-01',
    duration: 'PT11M0S',
    relatedPage: '/notary-laws',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'UTU0Xtpps3I',
    title: 'How to Get an Apostille in Oklahoma — Step by Step Guide',
    description: 'Step-by-step guide to obtaining an apostille in Oklahoma for international document use — what it is, who issues it, and how long it takes.',
    datePublished: '2026-04-01',
    duration: 'PT10M0S',
    relatedPage: '/notary',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'q5JlBEFCUlU',
    title: 'Subpoena Service in Oklahoma | Witness & Document Subpoenas Explained',
    description: 'Everything you need to know about serving witness subpoenas and document subpoenas in Oklahoma civil and criminal cases.',
    datePublished: '2026-04-01',
    duration: 'PT11M0S',
    relatedPage: '/blog/how-to-serve-a-subpoena-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'qDey9Ihtpys',
    title: 'Small Claims Court Process Serving Oklahoma | Complete Guide to Filing & Serving',
    description: 'Complete guide to filing and serving small claims court papers in Oklahoma — from filing your petition to serving the defendant and attending your hearing.',
    datePublished: '2026-04-01',
    duration: 'PT12M0S',
    relatedPage: '/blog/how-to-serve-small-claims-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'tEASEYhCM1o',
    title: 'Substitute Service in Oklahoma | When Personal Service Fails — Your Legal Options',
    description: 'When personal service isn\'t possible in Oklahoma, substitute service under 12 O.S. § 2004(C)(1) may be your answer. Learn how it works and when courts approve it.',
    datePublished: '2026-04-01',
    duration: 'PT10M0S',
    relatedPage: '/substitute-service-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'g8-RXySoohc',
    title: 'How to Serve a Business or Corporation in Oklahoma | Corporate Process Serving Guide',
    description: 'How to properly serve a business entity, LLC, or corporation with legal papers in Oklahoma — registered agents, officers, and what happens when no agent is found.',
    datePublished: '2026-04-01',
    duration: 'PT11M0S',
    relatedPage: '/blog/serve-business-corporation-oklahoma',
    category: 'Featured',
    isShort: false,
  },
  {
    videoId: 'HLO7mJvNxG4',
    title: 'What To Do After Being Served Papers in Oklahoma | Your Rights Explained Step by Step',
    description: 'If you\'ve just been served with legal papers in Oklahoma, don\'t panic. This video walks you through exactly what to do next, your rights, and your deadlines.',
    datePublished: '2026-04-01',
    duration: 'PT10M0S',
    relatedPage: '/blog/what-to-do-when-served-papers-oklahoma',
    category: 'Featured',
    isShort: false,
  },
];

const fullVideos: Video[] = [
  {
    videoId: 'PBCQDHACoi8',
    title: 'Process Server vs Sheriff Oklahoma (Which Is Better 2026)',
    description:
      'Joseph Iannazzi compares private process servers vs. sheriff service in Oklahoma — speed, cost, flexibility, and legal requirements explained for 2026.',
    datePublished: '2026-03-01',
    duration: 'PT8M0S',
    relatedPage: '/blog/sheriff-vs-private-process-server-oklahoma',
    category: 'Process Serving',
    isShort: false,
  },
  {
    videoId: '2oG6oM94G8I',
    title: 'What To Bring To Your Mobile Notary Appointment — Oklahoma Guide 2026',
    description:
      'Everything you need to bring to a mobile notary appointment in Oklahoma: valid ID, documents, witnesses, and more. Avoid common mistakes.',
    datePublished: '2026-03-05',
    duration: 'PT6M30S',
    relatedPage: '/what-to-bring',
    category: 'Notary',
    isShort: false,
  },
  {
    videoId: '9Bogug5UdqQ',
    title: 'Oklahoma Process Server Laws Explained — Legal Guide 2026',
    description:
      'A full breakdown of Oklahoma process server licensing requirements, statutes (12 O.S. § 158.1), and compliance rules for 2026.',
    datePublished: '2026-03-08',
    duration: 'PT10M0S',
    relatedPage: '/oklahoma-process-server-laws',
    category: 'Process Serving',
    isShort: false,
  },
  {
    videoId: 'FiLQQukVOBc',
    title: 'Remote Online Notary Oklahoma — Legal in 2026',
    description:
      'Is remote online notarization (RON) legal in Oklahoma in 2026? Joseph explains the laws, platforms, and how to get documents notarized entirely online.',
    datePublished: '2026-03-12',
    duration: 'PT7M0S',
    relatedPage: '/remote-online-notary',
    category: 'Notary',
    isShort: false,
  },
  {
    videoId: 'NFAhglMUNqc',
    title: 'Best Process Server in Tulsa, Oklahoma',
    description:
      'Why Just Legal Solutions is Tulsa\'s top-rated process server — 156+ five-star reviews, GPS-tracked service, flat-rate pricing, and 24/7 emergency availability.',
    datePublished: '2026-03-15',
    duration: 'PT5M0S',
    relatedPage: '/tulsa-process-server',
    category: 'Process Serving',
    isShort: false,
  },
  {
    videoId: 'zTuTJiO71Gk',
    title: 'How Much Does a Process Server Cost in Oklahoma? — Full 2026 Pricing Breakdown',
    description:
      'Complete 2026 pricing guide for Oklahoma process serving: standard $60, rush $150, same-day $265. No mileage fees, no hidden charges across all 77 counties.',
    datePublished: '2026-03-20',
    duration: 'PT9M0S',
    relatedPage: '/how-much-does-process-server-cost',
    category: 'Pricing',
    isShort: false,
  },
];

const shorts: Video[] = [
  {
    videoId: 'FA1k11n2MNc',
    title: 'Rush & Same-Day Process Serving Tulsa Oklahoma 2026',
    description: 'Need papers served fast? See how rush and same-day process serving works in Tulsa, Oklahoma.',
    datePublished: '2026-03-02',
    duration: 'PT60S',
    relatedPage: '/rush-vs-standard-vs-same-day-service',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'MyLClwwuewY',
    title: 'Wedding Officiant Services Tulsa Oklahoma 2026',
    description: 'Joseph is a licensed wedding officiant in Oklahoma — legal ceremonies, elopements, and civil unions.',
    datePublished: '2026-03-02',
    duration: 'PT60S',
    relatedPage: '/wedding-officiant',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: 'av9_-Gr81MQ',
    title: 'Immigration Document Notary Oklahoma Requirements 2026',
    description: 'What immigration documents require notarization in Oklahoma, and what to bring to your appointment.',
    datePublished: '2026-03-03',
    duration: 'PT60S',
    relatedPage: '/immigration-document-notary-oklahoma',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: '7FYC5Uh8BqE',
    title: 'Real Estate Closing Notary Tulsa Oklahoma — Signing Agent 2026',
    description: 'What a loan signing agent does at real estate closings in Tulsa, Oklahoma.',
    datePublished: '2026-03-03',
    duration: 'PT60S',
    relatedPage: '/real-estate-notary',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: '-I2yhHi5m0E',
    title: 'Loan Signing Agent Oklahoma — What They Do 2026',
    description: 'Difference between a notary and a certified loan signing agent in Oklahoma.',
    datePublished: '2026-03-04',
    duration: 'PT60S',
    relatedPage: '/loan-signing-agent-tulsa',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: 'l-2Pw4ZY9z4',
    title: 'Hospital Notary Services Oklahoma — Medical Legal Documents 2026',
    description: 'How mobile notary services work in hospitals, hospice facilities, and care centers in Oklahoma.',
    datePublished: '2026-03-04',
    duration: 'PT60S',
    relatedPage: '/hospital-notary',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: 'mVm-yPjIJog',
    title: 'Power of Attorney Notary Oklahoma — Step by Step Guide 2026',
    description: 'How to get a Power of Attorney notarized in Oklahoma step by step.',
    datePublished: '2026-03-05',
    duration: 'PT60S',
    relatedPage: '/power-of-attorney-notary-oklahoma',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: 'OlljbiBmPEI',
    title: 'Mobile Notary vs Bank Notary Oklahoma — Comparison 2026',
    description: 'Mobile notary vs bank notary: which is better for your situation in Oklahoma?',
    datePublished: '2026-03-06',
    duration: 'PT60S',
    relatedPage: '/mobile-notary-vs-bank',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: 'XNkr7tAh3R0',
    title: 'What Is a Mobile Notary? — Oklahoma Notary Services 2026',
    description: 'What a mobile notary does, how to hire one, and when you need one in Oklahoma.',
    datePublished: '2026-03-06',
    duration: 'PT60S',
    relatedPage: '/mobile-notary',
    category: 'Notary',
    isShort: true,
  },
  {
    videoId: 'w7MLnkKUaXw',
    title: 'Debt Collection Process Serving Oklahoma Tulsa Legal 2026',
    description: 'How process serving works for debt collection cases in Oklahoma — serving summons and complaints.',
    datePublished: '2026-03-07',
    duration: 'PT60S',
    relatedPage: '/process-serving-for-debt-collection',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'e6OCpIZVC-A',
    title: 'GPS-Tracked Process Serving Oklahoma — Why It Matters 2026',
    description: 'Why GPS-verified process serving creates court-proof documentation that holds up to challenges in Oklahoma.',
    datePublished: '2026-03-08',
    duration: 'PT60S',
    relatedPage: '/gps-tracked-process-serving',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'Jpk6tOjEnVs',
    title: 'Cannot Find Someone to Serve? — Oklahoma Skip Tracing 2026',
    description: 'What happens when you can\'t find someone to serve in Oklahoma — skip tracing explained.',
    datePublished: '2026-03-09',
    duration: 'PT60S',
    relatedPage: '/ai-skip-tracing-guide-oklahoma',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'ROZiEmxx33k',
    title: 'Eviction Process Serving Tulsa Oklahoma — Legal Guide 2026',
    description: 'How eviction notices are legally served in Oklahoma — Forcible Entry and Detainer rules.',
    datePublished: '2026-03-10',
    duration: 'PT60S',
    relatedPage: '/blog/how-to-serve-eviction-notices-in-oklahoma',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'cZfshhpPQYY',
    title: 'Divorce Process Serving Oklahoma Tulsa Legal Guide 2026',
    description: 'How to serve divorce papers in Oklahoma — legal requirements under 12 O.S. § 2004.',
    datePublished: '2026-03-11',
    duration: 'PT60S',
    relatedPage: '/blog/how-to-serve-divorce-papers-oklahoma',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'BXO_ga6zhKA',
    title: 'Sunday Process Serving Oklahoma — Legal or Not? 2026',
    description: 'Can a process server serve papers on Sunday in Oklahoma? The answer might surprise you.',
    datePublished: '2026-03-12',
    duration: 'PT60S',
    relatedPage: '/can-process-server-serve-on-sunday',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: '6TibSVogOeE',
    title: 'Process Server Cost Tulsa Oklahoma — Pricing Guide 2026',
    description: 'How much does a process server cost in Tulsa? Standard, rush, and same-day pricing explained.',
    datePublished: '2026-03-13',
    duration: 'PT60S',
    relatedPage: '/oklahoma-process-server-pricing',
    category: 'Pricing',
    isShort: true,
  },
  {
    videoId: 'yadgfypxTu0',
    title: 'How Long Does Process Serving Take? — Oklahoma Timeline 2026',
    description: 'Standard, rush, and same-day process serving timelines in Oklahoma — what to expect.',
    datePublished: '2026-03-14',
    duration: 'PT60S',
    relatedPage: '/how-long-does-process-serving-take',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: '9Ow7-muHxl8',
    title: 'What Happens If Someone Avoids Service? — Tulsa Process Server',
    description: 'What happens when someone tries to avoid being served in Oklahoma — skip tracing, drop service, and legal options.',
    datePublished: '2026-03-15',
    duration: 'PT60S',
    relatedPage: '/what-happens-if-someone-refuses-service',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'cbHsAUozxnc',
    title: 'How Process Serving Works in Oklahoma 2026 — Tulsa Legal',
    description: 'The full process serving workflow in Oklahoma explained — from filing to affidavit of service.',
    datePublished: '2026-03-16',
    duration: 'PT60S',
    relatedPage: '/process-server-tulsa-guide',
    category: 'Process Serving',
    isShort: true,
  },
  {
    videoId: 'wqPJSh_RABc',
    title: 'How Much Does a Process Server Cost in Oklahoma?',
    description: 'Quick breakdown of process server pricing in Oklahoma — no hidden fees, all 77 counties covered.',
    datePublished: '2026-03-17',
    duration: 'PT60S',
    relatedPage: '/how-much-does-process-server-cost',
    category: 'Pricing',
    isShort: true,
  },
];

const allVideos = [...featuredVideos, ...fullVideos, ...shorts];

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA
   ───────────────────────────────────────────────────────────────────────────── */
const videoGraph = allVideos.map((v) => ({
  '@type': 'VideoObject',
  name: v.title,
  description: v.description,
  thumbnailUrl: `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`,
  uploadDate: v.datePublished,
  duration: v.duration,
  embedUrl: `https://www.youtube.com/embed/${v.videoId}`,
  contentUrl: `https://www.youtube.com/watch?v=${v.videoId}`,
  publisher: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    logo: { '@type': 'ImageObject', url: 'https://justlegalsolutions.org/jls-logo.png' },
  },
  author: {
    '@type': 'Person',
    name: 'Joseph Iannazzi',
    url: 'https://www.linkedin.com/in/joseph-iannazzi',
  },
}));

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */
export default function VideosPage() {
  const categories = [...new Set(allVideos.map((v) => v.category))].sort();

  return (
    <>
      {/* VideoObject schema for all 42 videos */}
      <Script
        id="video-object-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({ '@context': 'https://schema.org', '@graph': videoGraph })}
      </Script>

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <span className="text-red-400 text-xl">▶</span>
            <span className="text-white text-sm font-semibold">{allVideos.length} Free Videos — Updated April 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Oklahoma Process Serving &amp; Notary<br className="hidden md:block" /> Video Guides
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
            Expert videos from Joseph Iannazzi — Oklahoma Licensed Process Server{' '}
            <span className="font-semibold text-white">PSL-2026-2</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              ⭐ {featuredVideos.length} Featured
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              🎬 {fullVideos.length} Full Guides
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              ⚡ {shorts.length} Quick Shorts
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              📍 Tulsa, Oklahoma
            </span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* ── Category pills ── */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-4 py-1.5 bg-blue-700 text-white text-sm font-semibold rounded-full">
              All ({allVideos.length})
            </span>
            {categories.map((cat) => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:border-blue-400 hover:text-blue-700 transition-colors">
                {cat} ({allVideos.filter((v) => v.category === cat).length})
              </a>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 1 — FEATURED VIDEOS (NEW)
              ═══════════════════════════════════════════════ */}
          <section id="featured" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-yellow-500 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Videos</h2>
              <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                ⭐ {featuredVideos.length} videos · New April 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video) => (
                <VideoCard key={video.videoId} video={video} />
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 2 — FULL-LENGTH VIDEOS
              ═══════════════════════════════════════════════ */}
          <section id="full-videos" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Full-Length Guides</h2>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {fullVideos.length} videos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullVideos.map((video) => (
                <VideoCard key={video.videoId} video={video} />
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 2 — SHORTS
              ═══════════════════════════════════════════════ */}
          <section id="shorts" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-red-500 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Quick Shorts</h2>
              <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                {shorts.length} shorts · under 60 seconds
              </span>
            </div>

            {/* Shorts grid — 9:16 portrait layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {shorts.map((video) => (
                <ShortCard key={video.videoId} video={video} />
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-3">Need Process Serving in Oklahoma?</h2>
              <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                Licensed, GPS-tracked service covering all 77 Oklahoma counties. Starting at <strong className="text-white">$60 flat-rate</strong> — no mileage, no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:5393676832"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Call (539) 367-6832
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */

function VideoCard({ video }: { video: Video }) {
  const categoryColors: Record<string, string> = {
    'Process Serving': 'bg-blue-50 text-blue-700',
    'Notary': 'bg-green-50 text-green-700',
    'Pricing': 'bg-amber-50 text-amber-700',
    'Featured': 'bg-yellow-50 text-yellow-700',
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col">
      {/* 16:9 embed */}
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 w-fit ${categoryColors[video.category] || 'bg-gray-100 text-gray-600'}`}>
          {video.category}
        </span>
        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">{video.description}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <span className="text-xs text-gray-400">
            {new Date(video.datePublished).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </span>
          {video.relatedPage && (
            <Link
              href={video.relatedPage}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read guide →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function ShortCard({ video }: { video: Video }) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col">
      {/* 9:16 portrait */}
      <div className="relative overflow-hidden bg-gray-900" style={{ paddingTop: '177.78%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
        {/* Shorts badge */}
        <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded pointer-events-none z-10">
          SHORT
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2 mb-2">{video.title}</p>
        {video.relatedPage && (
          <Link
            href={video.relatedPage}
            className="text-[11px] font-medium text-blue-600 hover:text-blue-800 transition-colors mt-auto"
          >
            Learn more →
          </Link>
        )}
      </div>
    </article>
  );
}
