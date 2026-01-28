/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    qualities: [75, 90, 100],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
