# 未使用の店舗写真（元データ）

サイト制作時に `public/` へ配置されていた元写真 111 枚（`LINE_ALBUM_HOLIDAY 写真_260730_*.jpg`）のうち、
**サイト内で使用していない 45 枚**をここに退避しています。

- 使用中の写真は `public/images/` に、内容がわかる英字ファイル名で配置済み（66枚 / 画質82で再エンコード）
- ロゴ（元 `..._111.jpg`）は `public/logo.png`（透過）・`public/logo-white.png`（白版）・`app/icon.png` に変換済み
- このフォルダは `public/` の外にあるため、**サイトからは配信されません**

## 差し替えたいとき

1. ここから使いたい写真を選ぶ
2. `public/images/` に内容がわかる英字名でコピー（例: `bbq-beef-grill.jpg`）
3. 該当コンポーネント／`data/content.ts` の `image` と `alt` を書き換える

## 注意

**料理（肉・BBQの盛り付け・シュラスコなど）の写真が元データに含まれていません。**
料理写真が用意でき次第、`components/sections/FoodDrink.tsx`・`data/courses.ts` の `image` を
差し替えることを想定した構造にしています。
