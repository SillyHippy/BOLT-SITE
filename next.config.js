/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/BOLT-SITE' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BOLT-SITE' : '',
};

module.exports = nextConfig;