import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "www.ariannaskitchen.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
