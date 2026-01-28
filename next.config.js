/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    qualities: [75, 90, 100],
  },
  // Suppress known HTML validation warnings from third-party libraries
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
