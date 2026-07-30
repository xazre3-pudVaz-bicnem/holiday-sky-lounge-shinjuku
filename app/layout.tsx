import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FixedCta from "@/components/layout/FixedCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { restaurantJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { SHOP, SITE_URL } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "新宿のビアガーデン・手ぶらBBQ｜HOLIDAY SKY LOUNGE 新宿",
    template: `%s｜${SHOP.name}`,
  },
  description:
    "新宿・東新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」。夜景を望む開放的なテラスで、ブラックアンガス牛や海鮮の手ぶらBBQ、飲み放題を楽しめます。宴会、女子会、デート、貸切にも対応。",
  keywords: [
    "新宿 ビアガーデン",
    "新宿 屋上ビアガーデン",
    "新宿 BBQ",
    "新宿 手ぶらBBQ",
    "新宿 飲み放題",
    "新宿 テラス",
    "東新宿 ビアガーデン",
    "新大久保 ビアガーデン",
    "新宿 宴会",
    "新宿 貸切",
  ],
  applicationName: SHOP.name,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SHOP.name,
    url: SITE_URL,
    title: "新宿のビアガーデン・手ぶらBBQ｜HOLIDAY SKY LOUNGE 新宿",
    description:
      "新宿・東新宿の屋上ビアガーデン。夜景を望むテラスで、ブラックアンガス牛や海鮮の手ぶらBBQと飲み放題を。宴会・女子会・デート・貸切にも対応。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SHOP.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "新宿のビアガーデン・手ぶらBBQ｜HOLIDAY SKY LOUNGE 新宿",
    description:
      "新宿・東新宿の屋上ビアガーデン。夜景を望むテラスで手ぶらBBQと飲み放題を。",
    images: ["/og-image.jpg"],
  },
  robots: {
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
    <html lang="ja" className={cormorant.variable}>
      <body>
        <JsonLd data={[restaurantJsonLd(), websiteJsonLd()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FixedCta />
      </body>
    </html>
  );
}
