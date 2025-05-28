import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        pathname: '/images/media/meals/**',
      },
    ],
  },
};

export default nextConfig;

