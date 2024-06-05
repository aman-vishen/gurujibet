/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//     serverActions: true,
// },

module: { 
  rules: [ 
      { 
          test: /\.css$/, 
          use: ['style-loader', 'css-loader'], 
      }, 
      { 
          test: /\.scss$/, 
          use: ['style-loader',  
          'css-loader', 'sass-loader'], 
      }, 
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
