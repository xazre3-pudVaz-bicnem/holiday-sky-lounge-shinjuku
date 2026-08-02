import {
  ACCESS,
  GEO,
  LINKS,
  RESTAURANT_ID,
  SHOP,
  WEBSITE_ID,
  absoluteUrl,
  siteConfig,
} from "./site-config";
import { COURSES, OTHER_PLANS } from "@/data/courses";
import type { Faq } from "@/data/content";

/**
 * 構造化データ。
 * - 店舗を指すノードは全ページで同じ @id（RESTAURANT_ID）を使う
 * - 画面に表示していない内容は入れない
 * - 外部サイトの評価（aggregateRating / review）は転載しない
 */

/** 店舗本体。トップと /access で出力し、他ページからは @id で参照する。 */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": RESTAURANT_ID,
    name: SHOP.name,
    alternateName: SHOP.nameKana,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    image: [
      absoluteUrl("/og-image.jpg"),
      absoluteUrl("/images/hero-rooftop-beergarden-night.jpg"),
      absoluteUrl("/images/terrace-dusk-panorama.jpg"),
      absoluteUrl("/images/bbq-meat-seafood-grill.jpg"),
    ],
    telephone: SHOP.telReserve,
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP.street,
      addressLocality: SHOP.city,
      addressRegion: SHOP.region,
      postalCode: SHOP.postalCode,
      addressCountry: "JP",
    },
    // 緯度経度は掲載元で確認できるまで出力しない（推測値は入れない）
    ...(GEO ? { geo: { "@type": "GeoCoordinates", latitude: GEO.latitude, longitude: GEO.longitude } } : {}),
    hasMap: LINKS.gmap,
    servesCuisine: [...SHOP.cuisine],
    priceRange: SHOP.priceRange,
    currenciesAccepted: "JPY",
    paymentAccepted: "現金, クレジットカード, 電子マネー, QRコード決済",
    acceptsReservations: LINKS.reserve,
    maximumAttendeeCapacity: 300,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:30",
        closes: "23:45",
      },
    ],
    hasMenu: absoluteUrl("/course"),
    sameAs: [LINKS.instagram, LINKS.reserve, LINKS.hotpepper, LINKS.gnavi],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SHOP.name,
    url: siteConfig.url,
    inLanguage: "ja",
    publisher: { "@id": RESTAURANT_ID },
  };
}

/** 各ページの WebPage ノード。パンくずと店舗ノードに紐づける。 */
export function webPageJsonLd(opts: {
  path: string;
  name: string;
  description: string;
  lastModified?: string;
  image?: string;
  hasBreadcrumb?: boolean;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "ja",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": RESTAURANT_ID },
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(opts.image) } } : {}),
    ...(opts.lastModified ? { dateModified: opts.lastModified } : {}),
    ...(opts.hasBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], pagePath?: string) {
  const url = absoluteUrl(pagePath ?? items[items.length - 1]?.path ?? "/");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly Faq[], pagePath?: string) {
  const base = pagePath ? { "@id": `${absoluteUrl(pagePath)}#faq` } : {};
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...base,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** /course のメニュー。画面に出している価格・品数と一致させる。 */
export function menuJsonLd() {
  const item = (name: string, description: string, price: number) => ({
    "@type": "MenuItem",
    name,
    description,
    offers: { "@type": "Offer", price, priceCurrency: "JPY", availability: "https://schema.org/InStock", url: LINKS.reserve },
  });

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${absoluteUrl("/course")}#menu`,
    name: "BBQコース・飲み放題プラン",
    url: absoluteUrl("/course"),
    inLanguage: "ja",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "WORLD BBQコース",
        description: "アメリカン・韓国・ブラジリアンのBBQコース。すべて飲み放題付き。",
        hasMenuItem: COURSES.map((c) =>
          item(c.name, `全${c.dishes}品／${c.drinkMinutes / 60}時間飲み放題付`, c.price),
        ),
      },
      {
        "@type": "MenuSection",
        name: "そのほかのコース・プラン",
        hasMenuItem: OTHER_PLANS.map((p) => item(p.name, p.note, p.price)),
      },
    ],
  };
}

/** コース一覧の ItemList（並び順を検索エンジンへ伝える） */
export function courseItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl("/course")}#courselist`,
    name: "HOLIDAY SKY LOUNGE 新宿のBBQコース一覧",
    numberOfItems: COURSES.length,
    itemListElement: COURSES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: c.detailPath ? absoluteUrl(c.detailPath) : `${absoluteUrl("/course")}#${c.id}`,
    })),
  };
}

/** ガイド記事用 */
export function articleJsonLd(opts: {
  path: string;
  headline: string;
  description: string;
  image?: string;
  published: string;
  modified: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    inLanguage: "ja",
    mainEntityOfPage: url,
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    datePublished: opts.published,
    dateModified: opts.modified,
    author: { "@id": RESTAURANT_ID },
    publisher: { "@id": RESTAURANT_ID },
  };
}

/** アクセスページ用の補足（駅からの所要時間を表現） */
export function accessPlaceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${absoluteUrl("/access")}#place`,
    name: `${SHOP.name}（${SHOP.building} 屋上）`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP.street,
      addressLocality: SHOP.city,
      addressRegion: SHOP.region,
      postalCode: SHOP.postalCode,
      addressCountry: "JP",
    },
    hasMap: LINKS.gmap,
    publicAccess: true,
    additionalProperty: ACCESS.map((a) => ({
      "@type": "PropertyValue",
      name: `${a.station}からの所要時間`,
      value: a.detail,
    })),
  };
}
