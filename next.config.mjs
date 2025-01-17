/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
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
  },
};

export default nextConfig;
