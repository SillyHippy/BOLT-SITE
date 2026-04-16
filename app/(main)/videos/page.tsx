import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { allVideos, featuredVideos, fullVideos, shorts, Video } from '@/lib/video-data';
import { LiteYouTubeEmbed } from '@/components/lite-youtube-embed';

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
        url: 'https://justlegalsolutions.org/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions — Oklahoma Process Serving & Notary Videos',
      },
    ],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/videos' },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA
   ───────────────────────────────────────────────────────────────────────────── */
const videoGraph = allVideos.map((v) => ({
  '@type': 'VideoObject',
  name: v.title,
  description: v.description,
  thumbnailUrl: `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`,
  uploadDate: `${v.datePublished}T08:00:00-05:00`,
  duration: v.duration,
  embedUrl: `https://www.youtube.com/embed/${v.videoId}`,
  contentUrl: `https://www.youtube.com/watch?v=${v.videoId}`,
  publisher: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    logo: { '@type': 'ImageObject', url: 'https://justlegalsolutions.org/jls-logo.webp' },
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
            <span className="font-semibold text-white">Licensed</span>
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
        <LiteYouTubeEmbed videoid={video.videoId} title={video.title} />
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
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center">
          <LiteYouTubeEmbed videoid={video.videoId} title={video.title} />
        </div>
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
