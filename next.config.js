/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.loket.com",
      "loket-asset-production.s3.ap-southeast-1.amazonaws.com",
      "s3-ap-southeast-1.amazonaws.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
