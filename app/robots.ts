import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/** プレビュー環境ではクロールさせない */
const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true";

export default function robots(): MetadataRoute.Robots {
  if (NOINDEX) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    // CSS・JS・画像はブロックしない（レンダリング評価に必要なため）
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
