import type { NextConfig } from "next";

/**
 * 旧ドメイン（Vercelの自動割当URL）は重複コンテンツになるため、
 * 本番ドメインへ 308（恒久リダイレクト）で寄せる。
 *
 * ホスト名の完全一致で判定しているので、プレビューデプロイ
 * （*-git-*.vercel.app など別ホスト）には影響しない。
 *
 * ※ 独自ドメイン内の www 統一と http→https は Vercel 側で設定済み。
 *   - holidayskylounge.jp      → 308 → www.holidayskylounge.jp
 *   - http://www.holidayskylounge.jp → 308 → https://www.holidayskylounge.jp
 */
const LEGACY_HOST = "holiday-sky-lounge-shinjuku.vercel.app";
const PRODUCTION_URL = "https://www.holidayskylounge.jp";

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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: LEGACY_HOST }],
        destination: `${PRODUCTION_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
