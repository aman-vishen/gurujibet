/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//     serverActions: true,
// },
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }
  ],
},
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
