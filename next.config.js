/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
  // Remove basePath and assetPrefix if the site is served from root domain
  // If serving from username.github.io/repo-name, uncomment and update these:
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
};

module.exports = nextConfig;