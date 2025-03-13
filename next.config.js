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
  basePath: '/BOLT-SITE',
  assetPrefix: '/BOLT-SITE',
};

module.exports = nextConfig;