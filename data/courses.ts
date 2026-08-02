import { LAST_VERIFIED } from "@/lib/site-config";

/**
 * コース情報。すべて食べログ「宴会・コース」ページの掲載内容に基づく。
 * 価格・品数・飲み放題時間は掲載元と一致させること（独自の推測値は禁止）。
 * 最終確認日は COURSE_VERIFIED を参照。
 */

export type Course = {
  id: string;
  eyebrow: string;
  name: string;
  /** 食べログ掲載のプラン名（表記ゆれ防止のため原文を保持） */
  sourceName: string;
  price: number;
  /** 食べログ予約ページに割引前として併記されている価格 */
  listPrice?: number;
  dishes: number;
  drinkMinutes: number;
  lead: string;
  points: string[];
  image: string;
  alt: string;
  /** 専用の詳細ページがある場合のパス */
  detailPath?: string;
};

export const COURSE_VERIFIED = LAST_VERIFIED;

export const COURSES: Course[] = [
  {
    id: "standard",
    eyebrow: "STANDARD BBQ",
    name: "お肉と海鮮のスタンダードBBQ",
    sourceName: "新宿ビアガーデンでお肉と海鮮を楽しむスタンダードBBQ13品コース",
    price: 3980,
    listPrice: 5000,
    dishes: 13,
    drinkMinutes: 120,
    lead: "ブラックアンガスランプ、BBQポーク、ソーセージ、チキンに、ガーリックシュリンプと焼きイカ。肉と海鮮の両方が入った全13品で、はじめて来店する方が最初に選びやすい構成です。",
    points: ["ブラックアンガスランプ", "BBQポーク・チキン・ソーセージ", "ガーリックシュリンプ／焼きイカ"],
    image: "/images/bbq-meat-seafood-grill.jpg",
    alt: "鉄板で焼き上げた牛肉とホタテ、海老、グリル野菜を盛り合わせたBBQ",
    detailPath: "/shinjuku-bbq",
  },
  {
    id: "korean",
    eyebrow: "KOREAN BBQ",
    name: "サムギョプサル＆K-BBQ",
    sourceName: "新宿の夜景屋上ビアガーデンで楽しむサムギョプサル＆K-BBQコース",
    price: 4480,
    listPrice: 5480,
    dishes: 16,
    drinkMinutes: 120,
    lead: "厚切りのサムギョプサルを鉄板でじっくり焼き上げる韓国スタイル。新大久保のコリアンタウンから徒歩4分という立地を活かした、全16品のK-BBQコースです。",
    points: ["厚切りサムギョプサル", "韓国スタイルのBBQプレート", "全16品・2時間飲み放題付"],
    image: "/images/korean-bbq-samgyeopsal-griddle.jpg",
    alt: "鉄板で焼く厚切りサムギョプサルとキムチ、青唐辛子、にんにく",
    detailPath: "/course/samgyeopsal",
  },
  {
    id: "american",
    eyebrow: "AMERICAN BBQ",
    name: "ブラックアンガス牛のアメリカンBBQ",
    sourceName: "ブラックアンカス牛肉3種リブ・ランプ・ハラミ含むデカ盛りグリル15品コース",
    price: 4980,
    listPrice: 5980,
    dishes: 16,
    drinkMinutes: 150,
    lead: "リブ・ランプ・ハラミ。ブラックアンガス牛を3種類まとめて焼き上げる、いちばん肉を食べたい日のコース。スモークポークやスパイシーチキンも並ぶデカ盛りグリルです。",
    points: ["ブラックアンガス牛3種（リブ・ランプ・ハラミ）", "スモークポーク／スパイシーチキン", "飲み放題は2.5時間"],
    image: "/images/american-bbq-beef-platter.jpg",
    alt: "焼き上げたブラックアンガス牛3種とグリル野菜を並べた大皿",
  },
  {
    id: "churrasco",
    eyebrow: "CHURRASCO BBQ",
    name: "本格シュラスコBBQ",
    sourceName: "本格シュラスコBBQ14品コース",
    price: 5480,
    listPrice: 6500,
    dishes: 14,
    drinkMinutes: 150,
    lead: "イチボ（ピッカーニャ）、サーロイン、ランプを串のまま焼き上げ、その場でカットしてお皿へ。焼きたての断面から立ちのぼる香りごと味わうブラジリアンスタイルです。",
    points: ["ピッカーニャ／サーロイン／ランプ", "目の前でカットするシュラスコスタイル", "飲み放題は2.5時間"],
    image: "/images/churrasco-skewers.jpg",
    alt: "串に刺して焼き上げたピッカーニャとソーセージ、焼きパイナップル",
    detailPath: "/course/churrasco",
  },
];

/** トップ／コースページ下部に並べる、その他のプラン（食べログ掲載） */
export const OTHER_PLANS = [
  { name: "JAPANESE BBQ（和牛プレート＆グリル野菜）", price: 6000, listPrice: 7000, note: "全13品・3時間飲み放題付" },
  { name: "HAPPYコース（誕生日・記念日）", price: 5500, listPrice: 6500, note: "全13品・乾杯スパークリングワイン付" },
  { name: "ランチ限定BBQ4種盛りプレートコース", price: 2980, listPrice: 4000, note: "全10品・2時間飲み放題付" },
  { name: "2時間プレミアム飲み放題プラン", price: 1980, listPrice: 2980, note: "料理は単品でオーダー" },
  { name: "RENTALコース（機材レンタル＋生ビール2種付飲み放題）", price: 3300, note: "食材の持ち込みOK・2時間飲み放題付" },
  { name: "RENTALコース（機材レンタルのみ）", price: 2000, note: "BBQ機材と食器のレンタル・食材の持ち込みOK" },
] as const;

export const COURSE_NOTE =
  "掲載の価格・品数・飲み放題時間は食べログ予約ページの掲載内容です。取り消し線の価格は、同ページに割引前価格として併記されているものです。内容は時期により変更される場合がありますので、最新情報は予約ページでご確認ください。";

/** 料理写真がイメージ素材のため表示している注記。実店舗の撮影写真に差し替えたら削除してよい。 */
export const PHOTO_NOTE = "※ 料理写真はイメージです。";

export const findCourse = (id: string) => COURSES.find((c) => c.id === id);
