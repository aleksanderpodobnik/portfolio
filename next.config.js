/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    qualities: [75, 90, 100],
  },
};

module.exports = nextConfig;
