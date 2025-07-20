/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true, // This line is correctly removed
  output: 'export',
  distDir: 'out',
  
  // The 'images' block has been removed to re-enable optimization.
  // Next.js will now automatically handle image optimization.

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
