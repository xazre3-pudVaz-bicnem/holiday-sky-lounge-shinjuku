/**
 * HOLIDAY SKY LOUNGE 新宿 — 店舗情報の単一ソース。
 * 掲載内容は食べログ店舗ページ / 公式Instagram の掲載情報に基づく。
 * 推測値は入れない。数値の更新はこのファイルのみを編集すること。
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://holidayskylounge.jp";

export const SHOP = {
  name: "HOLIDAY SKY LOUNGE 新宿",
  nameShort: "HOLIDAY SKY LOUNGE",
  tagline: "手ぶらBBQビアガーデン",
  postalCode: "169-0072",
  region: "東京都",
  city: "新宿区",
  street: "大久保1-8-4 K-SQUARE 屋上",
  addressFull: "東京都新宿区大久保1-8-4 K-SQUARE 屋上",
  /** 予約専用番号（食べログ掲載） */
  telReserve: "050-5869-1168",
  /** 店舗直通番号（食べログ掲載） */
  telShop: "080-6953-3136",
  hours: "11:30〜23:45",
  lastOrder: { food: "23:15", drink: "23:30" },
  seats: "約300席",
  seatsDetail: "着席250名／立食300名",
  priceRange: "￥2,000〜￥3,999",
  smoking: "分煙（加熱式たばこ限定）",
  payment: "各種クレジットカード・電子マネー・QRコード決済",
  parking: "近隣にコインパーキングあり（20分200円／6時間最大1,600円）",
} as const;

export const LINKS = {
  reserve: "https://tabelog.com/tokyo/A1304/A130401/13321032/",
  instagram: "https://www.instagram.com/holidayskylounge/",
  instagramHandle: "@holidayskylounge",
  gmap: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("HOLIDAY SKY LOUNGE 新宿 東京都新宿区大久保1-8-4"),
  gmapEmbed:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("東京都新宿区大久保1-8-4 K-SQUARE HOLIDAY SKY LOUNGE 新宿") +
    "&t=&z=17&ie=UTF8&iwloc=&output=embed",
} as const;

export const ACCESS = [
  { station: "東新宿駅", detail: "A1出口から徒歩2分", minutes: 2 },
  { station: "西武新宿駅", detail: "徒歩3分", minutes: 3 },
  { station: "新大久保駅", detail: "徒歩4分", minutes: 4 },
  { station: "新宿駅 東口", detail: "徒歩6分", minutes: 6 },
] as const;

export const NAV = [
  { label: "HOME", labelJa: "トップ", href: "/" },
  { label: "CONCEPT", labelJa: "コンセプト", href: "/concept" },
  { label: "BBQ COURSE", labelJa: "BBQコース", href: "/course" },
  { label: "FOOD & DRINK", labelJa: "料理・ドリンク", href: "/food-drink" },
  { label: "SPACE", labelJa: "空間", href: "/space" },
  { label: "SCENE", labelJa: "利用シーン", href: "/scene" },
  { label: "ACCESS", labelJa: "アクセス", href: "/access" },
] as const;
