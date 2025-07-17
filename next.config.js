/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages free tier deployment
  output: 'export',
  // Static site generation with GitHub Actions SEO automation
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    // Allow external images from Unsplash
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
  // Optimize for Cloudflare Pages free tier
  experimental: {
    // Build optimizations for Cloudflare Pages
    optimizePackageImports: ['lucide-react'],
    // Memory optimization for 20-minute build limit
    workerThreads: false,
  },
  // Cloudflare Pages specific optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  // Reduce bundle size for faster builds
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    // Optimize for Cloudflare build limits
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    return config;
  },
};

module.exports = nextConfig;
