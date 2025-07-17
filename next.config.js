
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
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
