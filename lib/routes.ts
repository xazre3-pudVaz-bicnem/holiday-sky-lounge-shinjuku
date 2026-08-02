/**
 * インデックス対象ページの一覧。sitemap とサイト内リンクの単一ソース。
 *
 * lastModified は「実際に内容を更新した日」を手で入れる。
 * ビルドのたびに現在日時へ書き換えない（更新していないのに更新扱いになるため）。
 */

export type Route = {
  path: string;
  /** sitemap 用。内容を実際に更新したときだけ更新する */
  lastModified: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  /** そのページが狙う主軸キーワード（カニバリ防止のための記録） */
  primaryKeywords: string[];
};

export const ROUTES: Route[] = [
  { path: "/", lastModified: "2026-08-02", changeFrequency: "weekly", priority: 1.0, primaryKeywords: ["新宿 ビアガーデン"] },

  // --- 主要カテゴリ ---
  { path: "/concept", lastModified: "2026-07-31", changeFrequency: "yearly", priority: 0.6, primaryKeywords: ["新宿 屋上ビアガーデン", "新宿 ルーフトップ"] },
  { path: "/course", lastModified: "2026-08-02", changeFrequency: "weekly", priority: 0.9, primaryKeywords: ["新宿 ビアガーデン BBQ", "新宿 手ぶらBBQ", "新宿 BBQ 飲み放題"] },
  { path: "/food-drink", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 シュラスコ", "新宿 サムギョプサル", "新宿 BBQ 肉"] },
  { path: "/space", lastModified: "2026-07-31", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["新宿 夜景 ビアガーデン", "新宿 テラス", "新宿 屋上レストラン"] },
  { path: "/scene", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 ビアガーデン 宴会", "新宿 ビアガーデン 女子会", "新宿 ビアガーデン デート"] },
  { path: "/access", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["東新宿 ビアガーデン", "新大久保 ビアガーデン"] },
  { path: "/faq", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["新宿 ビアガーデン 雨", "新宿 ビアガーデン 予約", "新宿 BBQ 持ち込み"] },

  // --- 検索意図別 ---
  { path: "/shinjuku-bbq", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.9, primaryKeywords: ["新宿 BBQ", "新宿 手ぶらBBQ", "新宿 バーベキュー"] },
  { path: "/course/samgyeopsal", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 サムギョプサル", "新宿 韓国BBQ", "新大久保 サムギョプサル ビアガーデン"] },
  { path: "/course/churrasco", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 シュラスコ", "新宿 シュラスコ 飲み放題", "新宿 ブラジル BBQ"] },
  { path: "/scene/company-party", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 ビアガーデン 宴会", "新宿 大人数 宴会", "新宿 歓送迎会"] },
  { path: "/scene/private-party", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 貸切", "新宿 貸切パーティー", "新宿 ビアガーデン 貸切"] },
  { path: "/scene/girls-party", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["新宿 ビアガーデン 女子会", "新宿 テラス 女子会", "新宿 BBQ 女子会"] },
  { path: "/scene/date", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["新宿 ビアガーデン デート", "新宿 夜景 デート", "新宿 テラス デート"] },
  { path: "/scene/lunch", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["新宿 昼飲み", "新宿 ビアガーデン 昼", "新宿 ランチ BBQ"] },

  // --- エリア ---
  { path: "/area/higashi-shinjuku", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["東新宿 ビアガーデン", "東新宿 BBQ", "東新宿 宴会"] },
  { path: "/area/shin-okubo", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.7, primaryKeywords: ["新大久保 ビアガーデン", "新大久保 BBQ", "新大久保 サムギョプサル"] },

  // --- ガイド ---
  { path: "/guide", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.6, primaryKeywords: ["新宿 ビアガーデン ガイド"] },
  { path: "/guide/shinjuku-beer-garden-2026", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.8, primaryKeywords: ["新宿 ビアガーデン 2026", "新宿 ビアガーデン おすすめ", "新宿 ビアガーデン 期間"] },
  { path: "/guide/rainy-day", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.6, primaryKeywords: ["新宿 ビアガーデン 雨", "ビアガーデン 雨天"] },
  { path: "/guide/how-to-choose-bbq-course", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.6, primaryKeywords: ["新宿 BBQ コース 選び方", "手ぶらBBQ コース"] },
  { path: "/guide/what-to-bring", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.6, primaryKeywords: ["手ぶらBBQ 持ち物", "ビアガーデン 服装"] },
  { path: "/guide/large-group-checklist", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.6, primaryKeywords: ["宴会 幹事 チェックリスト", "新宿 大人数 宴会 準備"] },
  { path: "/guide/best-time-for-night-view", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.6, primaryKeywords: ["新宿 夜景 ビアガーデン 時間", "ブルーアワー 屋上"] },

  // --- 情報ページ ---
  { path: "/info", lastModified: "2026-08-02", changeFrequency: "monthly", priority: 0.4, primaryKeywords: ["HOLIDAY SKY LOUNGE 新宿 店舗情報"] },
  { path: "/privacy", lastModified: "2026-08-02", changeFrequency: "yearly", priority: 0.2, primaryKeywords: [] },
];

export const findRoute = (path: string) => ROUTES.find((r) => r.path === path);
export const lastModifiedOf = (path: string) => findRoute(path)?.lastModified ?? "2026-08-02";
