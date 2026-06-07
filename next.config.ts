import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  serverExternalPackages: ["better-sqlite3"],
  outputFileTracingIncludes: {
    '/api/**/*': [
      './yms-education.db',
      './yms-education.db-shm',
      './yms-education.db-wal',
    ],
  },
};

export default nextConfig;
