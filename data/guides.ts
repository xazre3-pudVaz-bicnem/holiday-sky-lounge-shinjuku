/** /guide 配下の記事一覧。一覧ページと各記事、sitemap の表示に使う。 */

export type Guide = {
  slug: string;
  title: string;
  /** 一覧に出す短い説明 */
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  published: string;
  modified: string;
  keywords: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: "shinjuku-beer-garden-2026",
    title: "2026年の新宿ビアガーデン情報｜営業時間・コース・予約",
    summary: "2026年の営業情報、コース料金、昼夜の違い、予約方法をまとめた基本ガイド。",
    description:
      "2026年のHOLIDAY SKY LOUNGE 新宿の営業情報まとめ。営業時間11:30〜23:45、東新宿駅A1出口から徒歩2分、飲み放題付きBBQコースは3,980円から。昼夜の違い、予約方法、雨天時の確認方法、団体利用まで1ページで確認できます。",
    image: "/images/terrace-dusk-panorama.jpg",
    imageAlt: "夕暮れのビル群を背景に約300席のテーブルが並ぶ屋上テラスの全景",
    published: "2026-08-02",
    modified: "2026-08-02",
    keywords: ["新宿 ビアガーデン 2026", "新宿 ビアガーデン おすすめ", "新宿 ビアガーデン 期間"],
  },
  {
    slug: "rainy-day",
    title: "雨の日のビアガーデンはどうなる？確認方法と屋根付きエリア",
    summary: "屋上の店舗で天候が読めないときに、何をどこで確認すればいいかをまとめました。",
    description:
      "屋上ビアガーデンを予約したあと、雨が心配になったときの確認手順。HOLIDAY SKY LOUNGE 新宿には屋根のあるエリアもありますが、天候により営業内容が変わる場合があります。当日の確認先と、予約前後にやっておくことを整理しました。",
    image: "/images/terrace-covered-counter-day.jpg",
    imageAlt: "屋根の下にカウンターとテーブルが並ぶエリア",
    published: "2026-08-02",
    modified: "2026-08-02",
    keywords: ["新宿 ビアガーデン 雨", "ビアガーデン 雨天", "屋上 BBQ 雨"],
  },
  {
    slug: "how-to-choose-bbq-course",
    title: "BBQコースの選び方｜人数・予算・滞在時間から決める手順",
    summary: "4つのBBQコースを、何を基準に選べばいいのか。判断の順番を整理しました。",
    description:
      "HOLIDAY SKY LOUNGE 新宿のBBQコースは4種類。スタンダード（3,980円）、韓国BBQ（4,480円）、アメリカンBBQ（4,980円）、シュラスコ（5,480円）を、人数・予算・滞在時間・食べたい肉の順に絞り込む手順で解説します。",
    image: "/images/bbq-meat-seafood-grill.jpg",
    imageAlt: "鉄板で焼き上げた牛肉とホタテ、海老、グリル野菜を盛り合わせたBBQ",
    published: "2026-08-02",
    modified: "2026-08-02",
    keywords: ["新宿 BBQ コース 選び方", "手ぶらBBQ コース", "BBQ 飲み放題 選び方"],
  },
  {
    slug: "what-to-bring",
    title: "手ぶらBBQの持ち物と服装｜屋上で過ごすときの準備",
    summary: "本当に手ぶらで大丈夫か。あると安心なものと、服装の考え方をまとめました。",
    description:
      "手ぶらBBQでは食材・グリル・食器・後片付けまで店舗側で用意します。それでも屋上という環境ならではの準備はあります。服装、羽織るもの、においへの対策、季節ごとの注意点をまとめました。",
    image: "/images/bbq-grill-table-day.jpg",
    imageAlt: "食材を焼くだけの状態でグリルがセットされたテーブル席",
    published: "2026-08-02",
    modified: "2026-08-02",
    keywords: ["手ぶらBBQ 持ち物", "ビアガーデン 服装", "屋上 BBQ 準備"],
  },
  {
    slug: "large-group-checklist",
    title: "大人数の宴会チェックリスト｜幹事が予約前後にやること",
    summary: "予約から当日までにやることを、時系列で整理した幹事向けのチェックリスト。",
    description:
      "新宿で大人数の宴会を開く幹事向けに、予約前・予約時・当日までにやることを時系列でまとめました。人数の確定、コースと飲み放題時間の選び方、集合場所の共有、雨天時の連絡、キャンセル規定の確認まで。",
    image: "/images/banquet-long-table-day.jpg",
    imageAlt: "連結したロングテーブルが続く大人数向けのエリア",
    published: "2026-08-02",
    modified: "2026-08-02",
    keywords: ["宴会 幹事 チェックリスト", "新宿 大人数 宴会 準備", "歓送迎会 幹事"],
  },
  {
    slug: "best-time-for-night-view",
    title: "屋上の夜景がいちばんきれいな時間帯｜予約時刻の決め方",
    summary: "空の色が動く30分をどう狙うか。日没から逆算して予約時間を決める方法。",
    description:
      "屋上テラスの景色がいちばん動くのは日没前後の30分ほど。青からオレンジ、群青へと変わる時間に合わせて予約するための、時刻の逆算方法と席の選び方をまとめました。飲み放題の時間との兼ね合いも解説します。",
    image: "/images/terrace-blue-hour-wide.jpg",
    imageAlt: "ブルーアワーの空に染まるルーフトップテラスの全景",
    published: "2026-08-02",
    modified: "2026-08-02",
    keywords: ["新宿 夜景 ビアガーデン 時間", "ブルーアワー 屋上", "屋上 夜景 写真"],
  },
];

export const findGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
