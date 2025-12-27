import React from 'react';

/**
 * StaticSEO2025 - Clean SEO component with only valid, recognized meta tags
 * Removed all fake AI-* meta tags that trigger spam filters
 */
export default function StaticSEO2025() {
  return (
    <>
      {/* Performance Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Resource Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://cdn.cloudflare.com" />
      
      {/* Performance Directives */}
      <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      <meta name="format-detection" content="telephone=no" />

      {/* Robots Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Social Platform Optimization */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Just Legal Solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@justlegalsol" />
    </>
  );
}
