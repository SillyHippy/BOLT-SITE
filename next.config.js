/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages deployment
  output: 'export',
  // Static site generation for CF Pages free tier
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    // Allow external images from Unsplash
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
  // Optimize for Cloudflare Pages
  experimental: {
    // Disabled optimizeCss to prevent critters dependency issues
    // optimizeCss: true,
  },
};

module.exports = nextConfig;