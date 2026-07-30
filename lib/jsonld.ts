import { SHOP, SITE_URL, LINKS } from "./site";
import { COURSES } from "@/data/courses";
import type { Faq } from "@/data/content";

const abs = (p: string) => `${SITE_URL}${p}`;

/** Restaurant（緯度経度・評価は掲載元で確認できないため設定しない） */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: SHOP.name,
    alternateName: "ホリデースカイラウンジ 新宿",
    description:
      "東京都新宿区大久保のK-SQUARE屋上にある、約300席の屋上ビアガーデン。手ぶらで楽しめるBBQコースと飲み放題を、新宿の夜景を眺めながら味わえます。",
    url: SITE_URL,
    image: [abs("/og-image.jpg"), abs("/images/hero-rooftop-beergarden-night.jpg"), abs("/images/terrace-dusk-panorama.jpg")],
    logo: abs("/logo.png"),
    telephone: SHOP.telReserve,
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP.street,
      addressLocality: SHOP.city,
      addressRegion: SHOP.region,
      postalCode: SHOP.postalCode,
      addressCountry: "JP",
    },
    servesCuisine: ["ビアガーデン", "バーベキュー", "ダイニングバー", "ルーフトップレストラン"],
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
    hasMenu: {
      "@type": "Menu",
      name: "BBQコース・ドリンクメニュー",
      url: abs("/course"),
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "BBQコース",
          hasMenuItem: COURSES.map((c) => ({
            "@type": "MenuItem",
            name: c.name,
            description: `全${c.dishes}品／${c.drinkMinutes / 60}時間飲み放題付`,
            offers: {
              "@type": "Offer",
              price: c.price,
              priceCurrency: "JPY",
            },
          })),
        },
      ],
    },
    sameAs: [LINKS.instagram, LINKS.reserve],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SHOP.name,
    url: SITE_URL,
    inLanguage: "ja",
  };
}
