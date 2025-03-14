/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
  // Configure base path based on environment
  basePath: process.env.NODE_ENV === 'production' 
    ? (process.env.CF_PAGES ? '' : '/BOLT-SITE') 
    : '',
  assetPrefix: process.env.NODE_ENV === 'production'
    ? (process.env.CF_PAGES ? '' : '/BOLT-SITE')
    : '',
};

module.exports = nextConfig;