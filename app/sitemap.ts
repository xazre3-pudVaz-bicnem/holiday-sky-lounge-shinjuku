import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { ROUTES } from "@/lib/routes";
import { getAllPosts, getUsedCategories } from "@/lib/blog";

/**
 * 固定ページは lib/routes.ts に手で記録した「実際の更新日」を使う
 * （ビルドのたびに現在日時へ書き換えない）。
 * ブログ記事はファイルの frontmatter の date を使うので、自動生成分も自動で載る。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const jstDate = (d: string) => new Date(`${d}T00:00:00+09:00`);

  const staticPages: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: jstDate(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const posts = getAllPosts();

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: jstDate(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const categoryPages: MetadataRoute.Sitemap = getUsedCategories().map((c) => {
    const newest = posts.find((p) => p.category === c.slug)?.date;
    return {
      url: absoluteUrl(`/blog/category/${c.slug}`),
      lastModified: jstDate(newest ?? "2026-08-02"),
      changeFrequency: "weekly",
      priority: 0.4,
    };
  });

  return [...staticPages, ...postPages, ...categoryPages];
}
