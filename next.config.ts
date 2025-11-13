import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/GeorgianWine/' : '',
  basePath: isProd ? '/GeorgianWine' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
