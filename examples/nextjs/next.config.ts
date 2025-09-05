import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
