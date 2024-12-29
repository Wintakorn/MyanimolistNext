import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:{
      bodySizeLimit: '5mb'
    }
  },
  reactStrictMode:false,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '**', // อนุญาตทุก hostname
      },
      {
        protocol: 'http',
        hostname: '**', // อนุญาตทั้ง http และ https
      }
    ]
  }
};

export default nextConfig;
