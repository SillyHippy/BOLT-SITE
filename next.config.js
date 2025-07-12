/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages supports dynamic API routes, so no static export needed
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
    optimizeCss: true,
  },
};

module.exports = nextConfig;