/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  async redirects() {
    return [
      { source: "/pricing", destination: "/#pricing", permanent: false },
      { source: "/before-after", destination: "/#before-after", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/gallery", destination: "/#gallery", permanent: false },
      { source: "/appointment", destination: "/#appointment", permanent: false },
      { source: "/payment", destination: "/#payment", permanent: false },
    ];
  },
};

module.exports = nextConfig;
