/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/iosb0n9nw257/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/iosb0n9nw257/**",
      },
    ],
  },
};

module.exports = nextConfig;
