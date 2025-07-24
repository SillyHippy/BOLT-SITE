/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true, // This line is correctly removed
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // This line disables image optimization to fix the build
    // --- Add this 'remotePatterns' section to allow external images ---
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
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

    config.resolve.extensions = ['.tsx', '.ts', '.js', '.jsx', ...config.resolve.extensions];

    return config;
  },
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: 'true',
  },
};

module.exports = nextConfig;
