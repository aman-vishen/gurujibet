/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//     serverActions: true,
// },
  images: {
    formats:['image/webp'],
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "www.gurujibet.com",
      },
    ],
  },
};

module.exports = nextConfig;
