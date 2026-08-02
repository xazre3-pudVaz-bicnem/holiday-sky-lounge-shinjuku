import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./site-config";

type PageSeo = {
  /** ブランド名を除いたページ固有のタイトル */
  title: string;
  description: string;
  path: string;
  /** OG画像パス（/images/... ）。ページ内容に合った画像を指定する */
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  /** 検索結果に出したくないページのみ true */
  noindex?: boolean;
};

/**
 * 全ページ共通の metadata 生成。
 * canonical は自己参照。ドメインは siteConfig 経由なので環境変数だけで切り替わる。
 *
 * プレビュー環境（NEXT_PUBLIC_NOINDEX=true）は全ページ noindex にする。
 */
const PREVIEW_NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true";

export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  keywords,
  noindex,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? siteConfig.defaultOgImage);
  const hide = noindex || PREVIEW_NOINDEX;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: hide
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url,
      title: `${title}｜${siteConfig.name}`,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title}｜${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
