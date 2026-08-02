# HOLIDAY SKY LOUNGE 新宿 — 公式サイト

新宿・東新宿の屋上ビアガーデン（手ぶらBBQ）の公式サイト。
ルートの `c:/projects/CLAUDE.md`（Elite Web Agency Master System）を継承する。

## 技術構成

Next.js 16.2.9（App Router / Turbopack）+ React 19 + TypeScript + Tailwind CSS v4。
**追加の依存パッケージなし**（アニメーションライブラリも未使用）。

- アニメーションは `components/ui/Reveal.tsx` の共有 IntersectionObserver + CSS transition のみ
  - Observer はページ全体で1つだけ生成する（モバイルのメインスレッド負荷を抑えるため。個別生成に戻さないこと）
  - `prefers-reduced-motion` で全アニメーションを停止（`app/globals.css` 末尾）
- `main > section` に `contain: layout` を付与してレイアウトコストを削減。
    **`content-visibility: auto` は使わない**（画面外の要素でIntersectionObserverが発火せず、表示されなくなる事故が起きたため）
  - `.reveal-clip` の clip-path は監視対象自身ではなく **子要素** に当てる（自己デッドロック防止）

## 事実情報のルール（重要）

**店舗情報・料金・コース内容を推測で書かない。** 掲載元は以下のみ（`lib/site-config.ts` の `SOURCES` にも定義）。

- 食べログ: https://tabelog.com/tokyo/A1304/A130401/13321032/
- ホットペッパーグルメ: https://www.hotpepper.jp/strJ004577116/
- ぐるなび: https://r.gnavi.co.jp/3azauksj0000/
- 公式Instagram: https://www.instagram.com/holidayskylounge/

※「新宿最大級」はどの掲載元にも記載がないため使用しない（2026-08-02に削除済み）。

数値・営業情報の**単一ソース**：

| ファイル | 内容 |
| --- | --- |
| `lib/site-config.ts` | siteConfig（ドメイン）・店名・住所・営業時間・電話番号・席数・アクセス・各URL・出典・最終確認日 |
| `lib/routes.ts` | インデックス対象ページ一覧・sitemapのlastModified・主軸キーワード |
| `data/guides.ts` | /guide 配下の記事メタ情報 |
| `data/courses.ts` | BBQコース4種＋その他プラン（価格・品数・飲み放題時間） |
| `data/content.ts` | 特徴・利用シーン・FAQ・来店の流れ・ギャラリー |

価格や営業時間を変更するときは**これらのファイルだけ**を編集する。
コンポーネントに数値を直書きしない。確認できない情報は断定せず
「予約ページまたは店舗へご確認ください」と書く。

予約CTAは**すべて食べログの上記URL**へ接続する。独自の予約フォームは作らない。

## デザインシステム

基準色はロゴ（`public/logo.png`）から抽出した値。`app/globals.css` の `@theme` を参照。

- `--color-brand: #185830`（ロゴの緑）／ `--color-sun: #f89820`（ロゴの太陽）
- 配色比率は **白・アイボリー70% / 緑20% / チャコール・ブラウン10%**
- 原色の緑で背景を塗らない。見出し・罫線・ボタン・装飾に使う
- 和文フォントは端末内蔵（明朝＝見出し／ゴシック＝本文）。欧文のみ Cormorant Garamond を next/font で読み込む
  - 和文Webフォントを追加するとLCPが悪化するため、安易に増やさない
- 角丸カードの羅列・3カラムの反復・意味のないグラデーションは禁止。写真を大きく使う編集的レイアウトにする

## 画像

- 使用中: `public/images/`（77枚・内容がわかる英字ファイル名）
- 未使用の元データ: `_photos-unused/`（`public/` の外なので配信されない）
- `next/image` を使い、`sizes` を必ず指定する。`priority` はLCP画像（各ページのヒーロー）だけ
- `alt` はSEOを意識した日本語で内容と一致させる。装飾画像のみ `alt=""`
- **料理写真11枚はAI生成のイメージ素材**（元データは `_photos-unused/ai-food-source/`）。
  実際に提供される料理と異なるため、`data/courses.ts` の `PHOTO_NOTE`（「※ 料理写真はイメージです。」）を
  コース／料理／ギャラリーの各セクションに表示している。
  **実店舗で撮影した料理写真に差し替えたら `PHOTO_NOTE` の表示を削除してよい**
  （表示箇所: `components/sections/Courses.tsx` / `FoodDrink.tsx` / `Gallery.tsx` / `app/food-drink/page.tsx`）

## SEO

- 対策キーワード: **「新宿 ビアガーデン」**（連呼せず、検索意図に沿って自然に使う）
- 全ページで `lib/seo.ts` の `buildMetadata()` を使い、title / description / canonical / OGP を設定する
- 構造化データは `lib/jsonld.ts`：`Restaurant`＋`WebSite`＋`WebPage`（全ページ）、`BreadcrumbList`（下層）、
  `FAQPage`（FAQを表示するページ）、`Menu`＋`ItemList`（/course）、`Place`（/access）、`Article`（/guide配下）
  - **aggregateRating・口コミは絶対に追加しない**（外部サイトの評価の転載は禁止）
- H1 は1ページに1つ。`sitemap.ts` / `robots.ts` は App Router の規約ファイルで生成

## 品質基準（達成済み・維持すること）

`npm run build` と `npx eslint .` がエラーなしで通ること。
Lighthouse（本番ビルド・モバイル）: 下層ページ Performance 90+、トップ 86前後、
Accessibility 100 / Best Practices 100 / SEO 100 / CLS 0。

- `<ul>`/`<ol>` の直下に `<div>` を置かない（`Reveal` は `as="li"` を使う）
- `aria-label` は要素内の可視テキストを必ず含める（含められないなら `aria-label` を付けない）
- 暗い背景上の文字は `text-white/60` 以上（`/40`・`/50` はコントラスト不足）

## サイト構成

全27ページ（`lib/routes.ts` が正）＋ 404。ページを追加したら `lib/routes.ts` にも必ず登録すること（sitemap掲載漏れ防止）。

## 環境変数（`.env.example` 参照）

- `NEXT_PUBLIC_SITE_URL` — 本番ドメイン。**ここ1か所を変えれば canonical / OGP / sitemap / robots / JSON-LD がすべて切り替わる。**
  未設定時は `https://holiday-sky-lounge-shinjuku.vercel.app`。末尾スラッシュはコード側で除去される。
- `NEXT_PUBLIC_GA_ID` — GA4の測定ID。未設定ならタグを読み込まない（架空IDは入れない）。
- `NEXT_PUBLIC_NOINDEX` — プレビュー環境で `true` にすると全ページ noindex + robots.txt で全拒否。本番では設定しない。

## SEO設計（2026-08-02 強化）

- **1ページ1キーワード**。主軸キーワードは `lib/routes.ts` の `primaryKeywords` に記録。カニバリを防ぐため、
  新規ページを足すときは既存ページの主軸と重ならないか必ず確認する。
- 検索意図別ページ: `/shinjuku-bbq` `/course/samgyeopsal` `/course/churrasco` `/scene/{company-party,private-party,girls-party,date,lunch}` `/area/{higashi-shinjuku,shin-okubo}`
- ガイド: `/guide` 配下6記事。情報ページ: `/info`（店舗情報・出典・掲載方針）`/privacy`
- 各ページ共通で `AnswerBlock`（結論を先に書くAIO向けブロック）＋ `DataTable`（表形式）＋ ページ固有FAQ ＋ `RelatedLinks` を持つ
- 構造化データは `lib/jsonld.ts`。店舗ノードは全ページ同一 `@id`（`RESTAURANT_ID`）。
  緯度経度は掲載元で確認できないため `GEO = null`。判明したら設定するだけでJSON-LDに反映される。
- 予約クリック計測は `data-track` 属性 ＋ `components/analytics/Analytics.tsx` の委譲リスナー。
  リンクはサーバーコンポーネントのまま保てる（`track()` ヘルパーを使う）。
- アンカーテキストに「こちら」「詳しくはこちら」は使わない。リンク先が分かる文言にする。
