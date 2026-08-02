/**
 * サイト全体の設定と店舗情報の単一ソース。
 *
 * ■ ドメイン切り替え
 *   本番ドメインが決まったら `NEXT_PUBLIC_SITE_URL` を設定するだけで、
 *   metadataBase / canonical / OGP / sitemap / robots / JSON-LD がすべて切り替わる。
 *   末尾スラッシュ・www の有無はここで正規化する（混在防止）。
 *
 * ■ 掲載情報のルール
 *   数値・営業情報は食べログ／ホットペッパー／ぐるなびの掲載内容のみを根拠とし、
 *   確認できないものは書かない。出典は SOURCES、最終確認日は LAST_VERIFIED を参照。
 */

const RAW_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://holiday-sky-lounge-shinjuku.vercel.app";

/** 末尾スラッシュを除去してURLの表記を1つに固定する */
const normalize = (u: string) => u.replace(/\/+$/, "");

export const siteConfig = {
  name: "HOLIDAY SKY LOUNGE 新宿",
  nameKana: "ホリデイスカイラウンジ シンジュク",
  url: normalize(RAW_URL),
  locale: "ja_JP",
  lang: "ja",
  description:
    "新宿・東新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」。約300席の開放的なテラスで、ブラックアンガス牛・サムギョプサル・シュラスコ・海鮮の手ぶらBBQと飲み放題を楽しめます。",
  defaultOgImage: "/og-image.jpg",
} as const;

/** 絶対URLを組み立てる。パスは必ず先頭スラッシュ付きで渡す。 */
export const absoluteUrl = (path = "/") =>
  path === "/" ? siteConfig.url : `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

/** 構造化データで店舗を指す共通ID（全ページで同一にする） */
export const RESTAURANT_ID = `${siteConfig.url}/#restaurant`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

/** 掲載情報の最終確認日（表示にも使う） */
export const LAST_VERIFIED = "2026-08-02";

export const SOURCES = [
  { name: "食べログ", url: "https://tabelog.com/tokyo/A1304/A130401/13321032/" },
  { name: "ホットペッパーグルメ", url: "https://www.hotpepper.jp/strJ004577116/" },
  { name: "ぐるなび", url: "https://r.gnavi.co.jp/3azauksj0000/" },
] as const;

export const SHOP = {
  name: "HOLIDAY SKY LOUNGE 新宿",
  nameKana: "ホリデイスカイラウンジ シンジュク",
  nameShort: "HOLIDAY SKY LOUNGE",
  tagline: "手ぶらBBQビアガーデン",
  /** 食べログ掲載のお店のPR文 */
  catchCopy: "新宿の広々屋上テラスで楽しむ大人の手ぶらWORLD BBQビアガーデン",

  postalCode: "169-0072",
  region: "東京都",
  city: "新宿区",
  street: "大久保1-8-4 K-SQUARE 屋上",
  building: "K-SQUARE",
  addressFull: "東京都新宿区大久保1-8-4 K-SQUARE 屋上",

  /** 予約専用番号（食べログ発行） */
  telReserve: "050-5869-1168",
  /** 店舗直通番号 */
  telShop: "080-6953-3136",

  hours: "11:30〜23:45",
  lastOrder: { food: "23:15", drink: "23:30" },
  closedDays: "年中無休",
  openedOn: "2026-04-15",

  seats: "約300席",
  seatsDetail: "着席250名／立食300名",
  privateRoom: "10〜20名・20〜30名の個室エリア／VIPカラオケルーム（限定1室）",
  charter: "50名〜300名",

  priceRangeDinner: "￥3,000〜￥3,999",
  priceRangeLunch: "￥2,000〜￥2,999",
  /** JSON-LD の priceRange 用 */
  priceRange: "￥2,000〜￥3,999",

  smoking: "分煙（加熱式たばこ限定・専用喫煙スペースあり）",
  payment: "現金／クレジットカード（VISA・Mastercard・JCB・AMEX・Diners・銀聯）／電子マネー／QRコード決済",
  parking: "専用駐車場なし。ビル1F裏手のコインパーキング「三井のリパーク」（20分200円・6時間最大1,600円・24時間最大2,200円）",
  facilities: ["オープンテラス", "ソファー席", "カップルシート", "カラオケ設備", "無料Wi-Fi", "電源", "英語メニュー", "エレベーター"],
  childPolicy: "5歳まで無料／6〜10歳は半額／11歳以上は通常料金",
  cuisine: ["ビアガーデン", "バーベキュー", "ダイニングバー"],
  beer: "生ビール4種類と世界のボトルビール",
} as const;

export const LINKS = {
  /** 予約導線はすべてここへ集約する */
  reserve: "https://tabelog.com/tokyo/A1304/A130401/13321032/",
  instagram: "https://www.instagram.com/holidayskylounge/",
  instagramHandle: "@holidayskylounge",
  hotpepper: "https://www.hotpepper.jp/strJ004577116/",
  gnavi: "https://r.gnavi.co.jp/3azauksj0000/",
  gmap:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("HOLIDAY SKY LOUNGE 新宿 東京都新宿区大久保1-8-4"),
  gmapEmbed:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("東京都新宿区大久保1-8-4 K-SQUARE HOLIDAY SKY LOUNGE 新宿") +
    "&t=&z=17&ie=UTF8&iwloc=&output=embed",
} as const;

/**
 * TODO(店舗確認): 緯度・経度は掲載元で確認できないため未設定。
 * Googleビジネスプロフィールの座標が判明したらここに入れると
 * JSON-LD へ GeoCoordinates が自動で追加される。推測値は入れないこと。
 */
export const GEO: { latitude: number; longitude: number } | null = null;

export const ACCESS = [
  { station: "東新宿駅", line: "都営大江戸線／東京メトロ副都心線", detail: "A1出口から徒歩2分", minutes: 2 },
  { station: "西武新宿駅", line: "西武新宿線", detail: "徒歩3分", minutes: 3 },
  { station: "新大久保駅", line: "JR山手線", detail: "徒歩4分", minutes: 4 },
  { station: "新宿駅 東口", line: "JR各線／私鉄・地下鉄各線", detail: "徒歩6分", minutes: 6 },
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

/** 掲載情報の注記（各所で共通利用） */
export const NOTES = {
  photo: "※ 料理写真はイメージです。",
  price:
    "掲載の価格・品数・飲み放題時間は食べログ予約ページの掲載内容です。内容は時期により変更される場合があります。最新情報は予約ページでご確認ください。",
  verified: `掲載情報の最終確認日：${LAST_VERIFIED}`,
} as const;
