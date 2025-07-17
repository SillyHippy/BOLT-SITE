
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'out', // Changed from 'dist' to match Cloudflare Pages expectation
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  typescript: {
    // During builds, ignore TypeScript errors for faster deployment
    ignoreBuildErrors: false,
  },
  eslint: {
    // During builds, ignore ESLint errors for faster deployment
    ignoreDuringBuilds: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './'),
    };
    return config;
  },
};

module.exports = nextConfig;
