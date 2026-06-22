'use client';

import { useState, useEffect, useRef } from 'react';

interface LiteYouTubeProps {
  videoid: string;
  title?: string;
  params?: string;
  adNetwork?: boolean;
}

export function LiteYouTubeEmbed({
  videoid,
  title = 'YouTube video',
  params = '',
  adNetwork = false,
}: LiteYouTubeProps) {
  const [isActivated, setIsActivated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailLoaded = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activateVideo = () => {
    setIsActivated(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoid}/hqdefault.jpg`;
  const maxResThumbnail = `https://img.youtube.com/vi/${videoid}/maxresdefault.jpg`;

  if (isActivated) {
    const embedParams = `?autoplay=1&autohide=1&${params}`;
    return (
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoid}${embedParams}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={activateVideo}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateVideo();
        }
      }}
      aria-label={`Play YouTube video: ${title}`}
    >
      {/* Thumbnail */}
      <picture>
        <source srcSet={maxResThumbnail} media="(min-width: 768px)" />
        <source srcSet={thumbnailUrl} media="(max-width: 767px)" />
        <img
          src={isInView ? (maxResThumbnail || thumbnailUrl) : thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-16 h-12 sm:w-20 sm:h-14">
          {/* Play button background */}
          <div className="absolute inset-0 bg-red-600 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity shadow-lg" />
          {/* Play triangle */}
          <svg
            className="absolute inset-0 w-full h-full text-white ml-1"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* YouTube branding (optional, matches native embed feel) */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
        </svg>
        <span className="text-white text-xs font-semibold drop-shadow">YouTube</span>
      </div>
    </div>
  );
}
