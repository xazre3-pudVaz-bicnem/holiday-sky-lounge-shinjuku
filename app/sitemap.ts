import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { ROUTES } from "@/lib/routes";

/**
 * lastModified は lib/routes.ts に手で記録した「実際の更新日」を使う。
 * ビルドのたびに現在日時へ書き換えない。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: new Date(`${r.lastModified}T00:00:00+09:00`),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
