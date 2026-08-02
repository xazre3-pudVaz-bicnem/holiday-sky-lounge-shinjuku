import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FixedCta from "@/components/layout/FixedCta";
import Analytics from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/ui/JsonLd";
import { restaurantJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";

/**
 * 欧文のみWebフォント（latin subsetのみ・軽量）。
 * 和文は端末内蔵フォント（明朝／ゴシック）を使い、フォント読み込みによるLCP悪化を避ける。
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const PREVIEW_NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true";

const HOME_TITLE = "新宿のビアガーデン・屋上手ぶらBBQ";

export const metadata: Metadata = {
  // ドメインは siteConfig 経由。環境変数を変えるだけで全URLが切り替わる。
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${HOME_TITLE}｜${siteConfig.name}`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${HOME_TITLE}｜${siteConfig.name}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.defaultOgImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOME_TITLE}｜${siteConfig.name}`,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: PREVIEW_NOINDEX
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#185830",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.lang} className={cormorant.variable}>
      <body>
        {/* 店舗・サイト本体の構造化データは全ページ共通（@idで各ページから参照する） */}
        <JsonLd data={[restaurantJsonLd(), websiteJsonLd()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FixedCta />
        <Analytics />
      </body>
    </html>
  );
}
