/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resource-center/aip-resources",
        destination: "/resource-center/aip-resources/aip-updates",
        permanent: true,
      },
      {
        source: "/resource-center/curated-resources",
        destination: "/resource-center/curated-resources/featured",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about/aip-journey",
        permanent: true,
      },
      {
        source: "/our-work",
        destination: "/our-work/what-we-do",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    unoptimized: process.env.IMAGE_UNOPTIMIZE == "true",
  },
};

export default nextConfig;
