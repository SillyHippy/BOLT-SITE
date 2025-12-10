/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    qualities: [75, 85, 100], // Configure allowed quality values for next/image
    // Add the new domain to the remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.okbar.org',
        port: '',
        pathname: '/**',
      },
      // You can keep the old one or remove it
      {
        protocol: 'http',
        hostname: 'googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.104'], // Allow local network access during dev
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './'),
    };
    config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', ...config.resolve.extensions];
    return config;
  },
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: 'true',
  },
  // Note: Redirects removed because they don't work with static export (output: 'export')
  // Old duplicate pages are deleted, so redirects aren't needed for SEO consolidation
  // Canonical pages now at: /tulsa-process-server and /service-areas/[city]
};

module.exports = nextConfig;
