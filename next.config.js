/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true, // This line is removed to fix the resource loading errors
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  experimental: {
    // No unrecognized keys
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: false,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './'),
    };

    config.resolve.extensions = ['.tsx', '.ts', 'js', '.jsx', ...config.resolve.extensions];

    return config;
  },
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: 'true',
  },
};

module.exports = nextConfig;
