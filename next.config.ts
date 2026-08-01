import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // 遅延読み込み画像は圧縮率を上げてLCPの帯域を確保する
    qualities: [65, 75],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920, 2560],
  },
};

export default nextConfig;
