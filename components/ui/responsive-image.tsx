'use client';

/**
 * Responsive image component that serves mobile-optimized versions on small screens.
 * Uses native <picture> element for proper art direction and bandwidth savings.
 */
interface ResponsiveImageProps {
  src: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function ResponsiveImage({
  src,
  mobileSrc,
  alt,
  className = 'object-cover',
  loading = 'lazy',
}: ResponsiveImageProps) {
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 640px)" type="image/webp" />
      <source srcSet={src} media="(min-width: 641px)" type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${className}`}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
