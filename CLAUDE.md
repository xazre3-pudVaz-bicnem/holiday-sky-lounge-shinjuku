# HOLIDAY SKY LOUNGE 新宿 — 公式サイト

新宿・東新宿の屋上ビアガーデン（手ぶらBBQ）の公式サイト。
ルートの `c:/projects/CLAUDE.md`（Elite Web Agency Master System）を継承する。

## 技術構成

Next.js 16.2.9（App Router / Turbopack）+ React 19 + TypeScript + Tailwind CSS v4。
**追加の依存パッケージなし**（アニメーションライブラリも未使用）。

- アニメーションは `components/ui/Reveal.tsx` の共有 IntersectionObserver + CSS transition のみ
  - Observer はページ全体で1つだけ生成する（モバイルのメインスレッド負荷を抑えるため。個別生成に戻さないこと）
  - `prefers-reduced-motion` で全アニメーションを停止（`app/globals.css` 末尾）
- 長いセクションには `.cv-auto`（`content-visibility: auto`）を付与してレイアウトコストを削減

## 事実情報のルール（重要）

**店舗情報・料金・コース内容を推測で書かない。** 掲載元は以下の2つのみ。

- 食べログ: https://tabelog.com/tokyo/A1304/A130401/13321032/
- 公式Instagram: https://www.instagram.com/holidayskylounge/

数値・営業情報の**単一ソース**：

| ファイル | 内容 |
| --- | --- |
| `lib/site.ts` | 店名・住所・営業時間・電話番号・席数・アクセス・各URL |
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

- 使用中: `public/images/`（66枚・内容がわかる英字ファイル名）
- 未使用の元データ: `_photos-unused/`（`public/` の外なので配信されない）
- `next/image` を使い、`sizes` を必ず指定する。`priority` はLCP画像（各ページのヒーロー）だけ
- `alt` はSEOを意識した日本語で内容と一致させる。装飾画像のみ `alt=""`
- **料理写真が元データに存在しない。** 入手でき次第 `data/courses.ts` と
  `components/sections/FoodDrink.tsx` の `image` を差し替える想定

## SEO

- 対策キーワード: **「新宿 ビアガーデン」**（連呼せず、検索意図に沿って自然に使う）
- 全ページで `lib/seo.ts` の `buildMetadata()` を使い、title / description / canonical / OGP を設定する
- 構造化データは `lib/jsonld.ts`：`Restaurant`＋`WebSite`（全ページ）、`BreadcrumbList`（下層）、`FAQPage`（トップ・/faq）
  - **緯度経度・aggregateRating は追加しない**（掲載元で確認できないため）
- H1 は1ページに1つ。`sitemap.ts` / `robots.ts` は App Router の規約ファイルで生成

## 品質基準（達成済み・維持すること）

`npm run build` と `npx eslint .` がエラーなしで通ること。
Lighthouse（本番ビルド）: Performance 91+/98+（モバイル/デスクトップ）、Accessibility 100、
Best Practices 100、SEO 100。CLS 0。

- `<ul>`/`<ol>` の直下に `<div>` を置かない（`Reveal` は `as="li"` を使う）
- `aria-label` は要素内の可視テキストを必ず含める（含められないなら `aria-label` を付けない）
- 暗い背景上の文字は `text-white/60` 以上（`/40`・`/50` はコントラスト不足）

## サイト構成

`/` `/concept` `/course` `/food-drink` `/space` `/scene` `/access` `/faq` ＋ 404。

## 環境変数

- `NEXT_PUBLIC_SITE_URL` — 本番ドメイン。**未設定時は `https://holidayskylounge.jp` にフォールバック**。
  正式ドメインが決まったら設定すること（canonical・OGP・sitemap に影響）。
