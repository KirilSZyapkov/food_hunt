/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.buzzfeed.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "**",
      }
    ],
  },
};

module.exports = nextConfig;

// http://localhost:3001/(https://s3.amazonaws.com/video-api-prod/assets/6ec67fc6adc0425d9e0216ec0d0e8797/FBthumb.jpg)