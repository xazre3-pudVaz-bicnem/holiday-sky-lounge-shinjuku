import type { Metadata } from "next";
import { SITE_URL, SHOP } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** OG用の画像パス（/images/... ）。未指定なら共通OG画像 */
  image?: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path, image, keywords }: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? "/og-image.jpg";
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: SHOP.name,
      url,
      title,
      description,
      images: [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630, alt: SHOP.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}
