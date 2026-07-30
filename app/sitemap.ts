import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/course", priority: 0.9, changeFrequency: "weekly" },
    { path: "/food-drink", priority: 0.8, changeFrequency: "monthly" },
    { path: "/space", priority: 0.8, changeFrequency: "monthly" },
    { path: "/scene", priority: 0.8, changeFrequency: "monthly" },
    { path: "/access", priority: 0.8, changeFrequency: "monthly" },
    { path: "/concept", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
