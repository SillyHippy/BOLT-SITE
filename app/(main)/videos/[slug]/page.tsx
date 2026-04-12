import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { allVideos, Video } from '@/lib/video-data';
import { LiteYouTubeEmbed } from '@/components/lite-youtube-embed';

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────────────────────── */

function slugify(videoId: string): string {
  const video = allVideos.find((v) => v.videoId === videoId);
  if (!video) return videoId;
  return video.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function findVideo(slug: string): Video | undefined {
  return allVideos.find((v) => slugify(v.videoId) === slug);
}

export async function generateStaticParams() {
  return allVideos.map((v) => ({ slug: slugify(v.videoId) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const video = findVideo(slug);
  if (!video) return { title: 'Video Not Found' };

  return {
    title: `${video.title} | Just Legal Solutions`,
    description: video.description,
    keywords: `Oklahoma process server, ${video.category.toLowerCase()}, Tulsa legal services, ${video.title}`,
    authors: [{ name: 'Joseph Iannazzi' }],
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
      title: video.title,
      description: video.description,
      url: `https://justlegalsolutions.org/videos/${slug}`,
      siteName: 'Just Legal Solutions',
      locale: 'en_US',
      type: 'video.other',
      videos: [
        {
          url: `https://www.youtube.com/watch?v=${video.videoId}`,
          width: 1280,
          height: 720,
          type: 'video/mp4',
        },
      ],
      images: [
        {
          url: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
          width: 480,
          height: 360,
          alt: video.title,
        },
      ],
    },
    alternates: { canonical: `https://justlegalsolutions.org/videos/${slug}` },
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────────── */

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = findVideo(slug);
  if (!video) notFound();

  const canonicalUrl = `https://justlegalsolutions.org/videos/${slug}`;
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

  const durationText = video.duration
    .replace('PT', '')
    .replace('H', 'h ')
    .replace('M', 'm ')
    .replace('S', 's')
    .trim();

  const videoObjectSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        '@id': `${canonicalUrl}#video`,
        name: video.title,
        description: video.description,
        thumbnailUrl: [
          thumbnailUrl,
          `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
        ],
        uploadDate: `${video.datePublished}T08:00:00-05:00`,
        duration: video.duration,
        embedUrl: embedUrl,
        contentUrl: watchUrl,
        url: canonicalUrl,
        publisher: {
          '@type': 'Organization',
          '@id': 'https://justlegalsolutions.org/#organization',
          name: 'Just Legal Solutions',
          logo: { '@type': 'ImageObject', url: 'https://justlegalsolutions.org/images/jls-logo.png' },
        },
        author: {
          '@type': 'Person',
          name: 'Joseph Iannazzi',
          url: 'https://www.linkedin.com/in/joseph-iannazzi',
        },
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/WatchAction',
          userInteractionCount: 0,
        },
      },
      {
        '@type': 'WebPage',
        '@id': canonicalUrl,
        name: video.title,
        description: video.description,
        url: canonicalUrl,
        isPartOf: { '@id': 'https://justlegalsolutions.org/#website' },
        about: { '@id': `${canonicalUrl}#video` },
      },
    ],
  };

  const relatedVideos = allVideos
    .filter((v) => v.videoId !== video.videoId && v.category === video.category)
    .slice(0, 4);

  return (
    <>
      <Script
        id="video-object-single"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
      />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28 pb-12 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/videos" className="hover:text-white transition-colors">Videos</Link></li>
              <li>/</li>
              <li className="text-white font-medium truncate">{video.title}</li>
            </ol>
          </nav>

          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <LiteYouTubeEmbed videoid={video.videoId} title={video.title} />
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white mb-3">
                {video.category}{video.isShort ? ' • Short' : ''}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">{video.title}</h1>
              <p className="text-blue-200 mt-2 text-sm">
                Published {new Date(video.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                {video.duration ? ` • Duration: ${durationText}` : ''}
              </p>
            </div>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About This Video</h2>
          <p className="text-gray-700 leading-relaxed text-base">{video.description}</p>

          {video.relatedPage && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-2">📖 Read the full written guide:</p>
              <Link
                href={video.relatedPage}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                {video.relatedPage.replace(/\/blog\//, '').replace(/\/service-areas\//, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                <span>→</span>
              </Link>
            </div>
          )}
        </div>

        {relatedVideos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedVideos.map((rv) => {
                const rvSlug = slugify(rv.videoId);
                const rvThumbnail = `https://img.youtube.com/vi/${rv.videoId}/hqdefault.jpg`;
                return (
                  <Link
                    key={rv.videoId}
                    href={`/videos/${rvSlug}`}
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="relative aspect-video bg-gray-900">
                      <Image
                        src={rvThumbnail}
                        alt={rv.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized // YouTube images don't need Next image optimization
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors">
                        {rv.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(rv.datePublished).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            ← Back to All Videos
          </Link>
        </div>

        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl p-8 md:p-12 text-center mt-12">
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-3">Need Process Serving in Oklahoma?</h2>
            <p className="text-blue-100 text-base max-w-xl mx-auto mb-6">
              Licensed, GPS-tracked service covering all 77 Oklahoma counties. Starting at <strong className="text-white">$60 flat-rate</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Call (539) 367-6832
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
