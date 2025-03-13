/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
  // Configure basePath for GitHub Pages
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name',
};

module.exports = nextConfig;