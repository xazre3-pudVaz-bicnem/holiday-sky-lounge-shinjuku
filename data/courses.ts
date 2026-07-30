/**
 * コース情報。すべて食べログ「宴会・コース」ページの掲載内容に基づく。
 * 価格・品数・飲み放題時間は掲載元と一致させること（独自の推測値は禁止）。
 */

export type Course = {
  id: string;
  eyebrow: string;
  name: string;
  /** 食べログ掲載のプラン名（表記ゆれ防止のため原文を保持） */
  sourceName: string;
  price: number;
  originalPrice?: number;
  dishes: number;
  drinkMinutes: number;
  lead: string;
  points: string[];
  image: string;
  alt: string;
  featured?: boolean;
};

export const COURSES: Course[] = [
  {
    id: "standard",
    eyebrow: "STANDARD BBQ",
    name: "お肉と海鮮のスタンダードBBQ",
    sourceName: "新宿ビアガーデンでお肉と海鮮を楽しむスタンダードBBQ13品コース",
    price: 3980,
    originalPrice: 5000,
    dishes: 13,
    drinkMinutes: 120,
    lead: "初めての方にいちばん選ばれている定番コース。ブラックアンガスランプ、BBQポーク、ソーセージ、チキンに、ガーリックシュリンプと焼きイカの海鮮まで。肉も海鮮も一度に楽しめます。",
    points: ["ブラックアンガスランプ", "BBQポーク・チキン・ソーセージ", "ガーリックシュリンプ／焼きイカ"],
    image: "/images/bbq-long-table-grill.jpg",
    alt: "新宿の屋上ビアガーデンでスタンダードBBQコースを楽しむロングテーブルとグリル",
    featured: true,
  },
  {
    id: "korean",
    eyebrow: "KOREAN BBQ",
    name: "サムギョプサル＆K-BBQ",
    sourceName: "新宿の夜景屋上ビアガーデンで楽しむサムギョプサル＆K-BBQコース",
    price: 4480,
    originalPrice: 5480,
    dishes: 16,
    drinkMinutes: 120,
    lead: "新大久保のすぐ隣という土地柄を活かした韓国スタイル。厚切りサムギョプサルを鉄板でじっくり焼き上げ、夜景を眺めながら韓国BBQを囲みます。女子会でよく選ばれる16品構成。",
    points: ["厚切りサムギョプサル", "韓国スタイルのBBQプレート", "全16品・2時間飲み放題付"],
    image: "/images/terrace-grill-table-day.jpg",
    alt: "新宿の屋上ビアガーデンで韓国BBQサムギョプサルコースを楽しめるグリル付きテーブル席",
  },
  {
    id: "american",
    eyebrow: "AMERICAN BBQ",
    name: "ブラックアンガス牛のアメリカンBBQ",
    sourceName: "ブラックアンカス牛肉3種リブ・ランプ・ハラミ含むデカ盛りグリル15品コース",
    price: 4980,
    originalPrice: 5980,
    dishes: 16,
    drinkMinutes: 150,
    lead: "リブ・ランプ・ハラミ。ブラックアンガス牛を3種類まとめて焼き上げる、いちばん肉を食べたい日のコース。スモークポークやスパイシーチキンも並ぶデカ盛りグリルです。",
    points: ["ブラックアンガス牛3種（リブ・ランプ・ハラミ）", "スモークポーク／スパイシーチキン", "飲み放題は2.5時間"],
    image: "/images/counter-table-stools.jpg",
    alt: "新宿の屋上ビアガーデンでブラックアンガス牛のアメリカンBBQを楽しむカウンターテーブル席",
  },
  {
    id: "churrasco",
    eyebrow: "CHURRASCO BBQ",
    name: "本格シュラスコBBQ",
    sourceName: "本格シュラスコBBQ14品コース",
    price: 5480,
    originalPrice: 6500,
    dishes: 14,
    drinkMinutes: 150,
    lead: "イチボ（ピッカーニャ）、サーロイン、ランプを串のまま焼き上げ、その場でカットしてお皿へ。焼きたての断面から立ちのぼる香りごと味わう、ブラジリアンスタイルです。",
    points: ["ピッカーニャ／サーロイン／ランプ", "目の前でカットするシュラスコスタイル", "飲み放題は2.5時間"],
    image: "/images/lounge-night-warm-lights.jpg",
    alt: "新宿の屋上ビアガーデンでシュラスコBBQコースを味わう夜の照明に包まれたテラス席",
  },
];

/** トップ／コースページ下部に並べる、その他のプラン（食べログ掲載） */
export const OTHER_PLANS = [
  {
    name: "JAPANESE BBQ（和牛プレート＆グリル野菜）",
    price: 6000,
    originalPrice: 7000,
    note: "全13品・3時間飲み放題付",
  },
  {
    name: "HAPPYコース（誕生日・記念日）",
    price: 5500,
    originalPrice: 6500,
    note: "全13品・乾杯スパークリングワイン付",
  },
  {
    name: "ランチ限定BBQ4種盛りプレートコース",
    price: 2980,
    originalPrice: 4000,
    note: "全10品・2時間飲み放題付",
  },
  {
    name: "2時間プレミアム飲み放題プラン",
    price: 1980,
    originalPrice: 2980,
    note: "料理は単品でオーダー",
  },
  {
    name: "RENTALコース（機材レンタル＋生ビール2種付飲み放題）",
    price: 3300,
    note: "食材の持ち込みOK・2時間飲み放題付",
  },
  {
    name: "RENTALコース（機材レンタルのみ）",
    price: 2000,
    note: "BBQ機材と食器のレンタル・食材の持ち込みOK",
  },
] as const;

export const COURSE_NOTE =
  "掲載の価格・品数・飲み放題時間は、食べログ予約ページの掲載内容をそのまま記載しています。内容は時期により変更される場合があります。詳しいコース内容・最新料金は予約ページをご確認ください。";
