/**
 * Claude API で毎日1記事を生成し、content/blog/ へ Markdown として保存する。
 *
 *   npx tsx scripts/generate-daily-post.ts
 *
 * 必要な環境変数:
 *   ANTHROPIC_API_KEY  必須
 *   ANTHROPIC_MODEL    任意（未設定なら DEFAULT_MODEL を使う）
 *
 * 方針:
 * - コスト削減のため既定は Haiku。Sonnet / Opus は日次生成では使わない。
 * - 生成物は「掲載元で確認できない事実を書かない」。特に料金・営業時間・提供内容は
 *   本文に書かせず、/course や /access への内部リンクへ誘導する（下の検証で機械的に弾く）。
 */

import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import { getAllPosts, BLOG_DIR, CATEGORIES } from "../lib/blog";
import { SHOP, LINKS } from "../lib/site-config";

const DEFAULT_MODEL = "claude-haiku-4-5-20251001";
const MODEL = process.env.ANTHROPIC_MODEL?.trim() || DEFAULT_MODEL;
const MAX_ATTEMPTS = 3;

/* ------------------------------------------------------------------ *
 * トピックプール
 * ------------------------------------------------------------------ */
type Topic = { theme: string; keyword: string; category: (typeof CATEGORIES)[number]["slug"] };

const TOPICS: Topic[] = [
  { theme: "新宿でビアガーデンを探すときに見ておきたいポイント", keyword: "新宿 ビアガーデン", category: "beer-garden" },
  { theme: "屋上のビアガーデンならではの過ごし方", keyword: "新宿 屋上ビアガーデン", category: "beer-garden" },
  { theme: "新宿でBBQを楽しむという選択肢", keyword: "新宿 BBQ", category: "bbq" },
  { theme: "屋上でBBQをするときに知っておきたいこと", keyword: "新宿 屋上 BBQ", category: "bbq" },
  { theme: "新宿で肉料理を囲む夜の楽しみ方", keyword: "新宿 肉料理", category: "bbq" },
  { theme: "新宿での飲み会の店選びで失敗しないために", keyword: "新宿 飲み会", category: "scene" },
  { theme: "新宿で宴会の会場を決めるときの考え方", keyword: "新宿 宴会", category: "scene" },
  { theme: "女子会で使いやすい新宿のお店の条件", keyword: "新宿 女子会", category: "scene" },
  { theme: "新宿でのデートディナーに屋上を選ぶ理由", keyword: "新宿 デート ディナー", category: "scene" },
  { theme: "誕生日のディナーを新宿で計画するときに", keyword: "新宿 誕生日 ディナー", category: "scene" },
  { theme: "記念日を新宿で過ごすときの店選び", keyword: "新宿 記念日 ディナー", category: "scene" },
  { theme: "テラス席のあるお店で食事をする楽しさ", keyword: "新宿 テラス席", category: "beer-garden" },
  { theme: "開放感のあるレストランが向いている場面", keyword: "新宿 開放感のあるレストラン", category: "beer-garden" },
  { theme: "グループで使いやすいお店を新宿で探す", keyword: "新宿 グループ利用 レストラン", category: "scene" },
  { theme: "歓送迎会の幹事が押さえておきたい段取り", keyword: "新宿 歓送迎会", category: "season" },
  { theme: "忘年会の会場を新宿で決めるときの視点", keyword: "新宿 忘年会", category: "season" },
  { theme: "新年会を新宿で開くときに考えたいこと", keyword: "新宿 新年会", category: "season" },
  { theme: "夏の飲み会を屋外で楽しむために", keyword: "新宿 夏 飲み会", category: "season" },
  { theme: "夜景や雰囲気を重視して新宿の店を選ぶ", keyword: "新宿 夜景 食事", category: "area" },
  { theme: "ビアガーデンを一日楽しむための流れ", keyword: "ビアガーデン 楽しみ方", category: "beer-garden" },
  { theme: "はじめてビアガーデンに行く人へ", keyword: "初めてのビアガーデン", category: "beer-garden" },
  { theme: "BBQとビアガーデンは何が違うのか", keyword: "BBQ ビアガーデン 違い", category: "bbq" },
  { theme: "屋上ラウンジで食事をするという体験", keyword: "屋上ラウンジ 食事", category: "beer-garden" },
  { theme: "仕事帰りに寄りやすい店の条件を考える", keyword: "新宿 仕事帰り 飲み会", category: "scene" },
  { theme: "大人数で入れる飲食店を新宿で確保する", keyword: "新宿 大人数 飲食店", category: "scene" },
  { theme: "非日常感のあるディナーを新宿で探す", keyword: "新宿 非日常 ディナー", category: "area" },
  { theme: "肉料理とお酒の組み合わせを考える", keyword: "肉料理 お酒", category: "bbq" },
  { theme: "天候に左右されるビアガーデンの注意点", keyword: "ビアガーデン 雨 注意点", category: "beer-garden" },
  { theme: "新宿駅周辺でお店を選ぶときの基準", keyword: "新宿駅周辺 店選び", category: "area" },
  { theme: "週末に使いたい新宿のビアガーデン", keyword: "週末 新宿 ビアガーデン", category: "season" },
];

/* ------------------------------------------------------------------ *
 * 内部リンク（実在するページのみ）
 * ------------------------------------------------------------------ */
const INTERNAL_LINKS = [
  ["/course", "BBQコース一覧"],
  ["/food-drink", "料理・ドリンク"],
  ["/space", "屋上テラスと座席"],
  ["/scene", "利用シーン"],
  ["/access", "アクセス・店舗情報"],
  ["/faq", "よくある質問"],
  ["/concept", "コンセプト"],
  ["/shinjuku-bbq", "新宿の手ぶらBBQ"],
  ["/course/samgyeopsal", "サムギョプサル＆K-BBQコース"],
  ["/course/churrasco", "本格シュラスコBBQコース"],
  ["/scene/company-party", "会社宴会・歓送迎会"],
  ["/scene/private-party", "貸切パーティー"],
  ["/scene/girls-party", "女子会"],
  ["/scene/date", "デート・記念日"],
  ["/scene/lunch", "昼飲み・ランチBBQ"],
  ["/area/higashi-shinjuku", "東新宿エリア"],
  ["/area/shin-okubo", "新大久保エリア"],
  ["/guide", "利用ガイド"],
] as const;

const ALLOWED_PATHS = new Set<string>(INTERNAL_LINKS.map(([p]) => p));

/* ------------------------------------------------------------------ *
 * 生成
 * ------------------------------------------------------------------ */
type Generated = {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  body: string;
};

const SYSTEM_PROMPT = `あなたは、東京・新宿の屋上ビアガーデン「${SHOP.name}」の公式サイトに掲載するコラムを書く編集者です。
飲食店の読み物として自然で、読んだ人が「行ってみようかな」と思える文章を書きます。

## 店舗の事実（この範囲を超えることは書かない）
- 店名: ${SHOP.name}
- 所在地: ${SHOP.addressFull}（ビルの屋上）
- 最寄り: 東新宿駅A1出口から徒歩2分／西武新宿駅から徒歩3分／新大久保駅から徒歩4分／新宿駅東口から徒歩6分
- 業態: 屋上のビアガーデン、手ぶらBBQ、ダイニングバー
- 特徴: 頭上に遮るもののないオープンエアのテラス、約300席、屋根のあるエリアもある、
  食材・グリル・食器・後片付けまで店舗側で用意する手ぶらスタイル、
  アメリカン／韓国／ブラジリアンなど複数のBBQスタイル、飲み放題付きのコースがある、
  ソファー席・カップルシート・個室エリア・カラオケ付きVIPルームがある、大人数の宴会や貸切に対応
- 予約: 食べログの予約ページから（${LINKS.reserve}）

## 絶対に守ること
1. **具体的な金額を書かない。**「〇〇円」「〇〇円から」などの数値表現は一切使わない。料金に触れるときは
   「コースの料金は予約ページでご確認ください」のように案内し、内部リンク /course へ誘導する。
2. **具体的な時刻を書かない。**「11:30」「23:45」のような時刻表記や、ラストオーダーの時刻を書かない。
   営業時間に触れるときは /access への内部リンクで案内する。
3. **品数・人数・席数の具体的な数値を新たに作らない。**「約300席」「大人数」程度の表現にとどめる。
4. 根拠のない優位性を書かない。「新宿で一番」「No.1」「最安」「必ず満足」「絶対」「日本一」「唯一無二」
   「究極」「最高の体験」などは使用禁止。
5. 店舗が歌舞伎町にあるとは書かない（所在地は新宿区大久保）。
6. 食べ放題・飲み放題・提供メニューの内容を断定しない。「コースによって内容が異なります」と書く。
7. アレルギーや食材について触れる場合は、事前に店舗へ確認するよう促す。
8. 屋外・屋上・ビアガーデンの話題では、天候によって営業内容や利用条件が変わる場合があることに自然に触れる。
9. AIが書いたような定型句を使わない。「いかがでしたか」「〜ではないでしょうか」「まとめると」の多用禁止。
   誇張した煽り、感嘆符の連発、体言止めの連発もしない。
10. 事実として確認できないことは書かない。曖昧な場合は書かずに省く。

## 文章のトーン
- 落ち着いた敬体（です・ます）。一文は短め。
- 料理や情景は具体的に描写する（焼ける音、脂の香り、夜風、街明かりなど）。
- 読者に語りかけすぎない。宣伝臭を抑え、情報として役に立つことを優先する。`;

function buildUserPrompt(topic: Topic, existingTitles: string[], existingSlugs: string[]) {
  const links = INTERNAL_LINKS.map(([p, label]) => `- ${p} … ${label}`).join("\n");
  const avoid = existingTitles.length
    ? `\n## すでに公開済みの記事タイトル（内容が重複しないようにする）\n${existingTitles.slice(0, 40).map((t) => `- ${t}`).join("\n")}`
    : "";
  const usedSlugs = existingSlugs.length
    ? `\n## 使用済みスラッグ（重複禁止）\n${existingSlugs.slice(0, 60).join(", ")}`
    : "";

  return `次のテーマでコラムを1本書いてください。

## テーマ
${topic.theme}

## 想定する検索キーワード
${topic.keyword}

## カテゴリ
${topic.category}

## 構成（必ずこの順序で）
1. 導入（150〜250文字）：読者の状況や疑問から入り、この記事で何が分かるかを示す。
2. 本文：H2見出しを3〜4個。必要に応じてH3を使う。各H2の下に2〜4段落。
3. まとめ：H2「まとめ」で、要点を3つ前後に整理し、最後に来店・予約の案内を1〜2文添える。

## 分量
本文全体で日本語2,000〜3,000文字。少なすぎても多すぎてもいけません。

## 内部リンク
以下のパスから2〜4個を、本文中の自然な文脈でMarkdownリンクとして使ってください。
アンカーテキストは「こちら」ではなく、リンク先の内容が分かる文言にします。
${links}
${avoid}${usedSlugs}

## 出力形式
次のキーを持つJSONだけを出力してください。前後に説明文やコードフェンスを付けないこと。

{
  "title": "32文字以内。検索キーワードを自然に含む具体的なタイトル",
  "slug": "英小文字・数字・ハイフンのみ。3〜6語程度。既存と重複しないもの",
  "description": "70〜110文字。記事の内容を要約したmeta description",
  "category": "${topic.category}",
  "tags": ["3〜5個の日本語タグ"],
  "body": "Markdown本文。H1（#）は使わず、H2（##）から始める。フロントマターは含めない"
}`;
}

/* ------------------------------------------------------------------ *
 * 検証
 * ------------------------------------------------------------------ */
const BANNED_WORDS = [
  "No.1", "NO.1", "ナンバーワン", "日本一", "新宿一", "最安", "業界最安",
  "必ず満足", "絶対に", "唯一無二", "究極の", "最高の体験", "圧倒的No",
  "いかがでしたか", "間違いなし",
];

function validate(g: Generated, existingSlugs: string[]): string[] {
  const errs: string[] = [];
  const body = g.body ?? "";
  const plain = body.replace(/\s/g, "");

  if (!g.title || g.title.length > 40) errs.push(`title の長さが不正: ${g.title?.length}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(g.slug ?? "")) errs.push(`slug が不正: ${g.slug}`);
  if (existingSlugs.includes(g.slug)) errs.push(`slug が既存と重複: ${g.slug}`);
  if (!g.description || g.description.length < 50 || g.description.length > 140)
    errs.push(`description の長さが不正: ${g.description?.length}`);
  if (!Array.isArray(g.tags) || g.tags.length < 2) errs.push("tags が不足");

  if (plain.length < 1600) errs.push(`本文が短い: ${plain.length}文字`);
  if (plain.length > 3800) errs.push(`本文が長い: ${plain.length}文字`);

  if (/^#\s/m.test(body)) errs.push("本文にH1が含まれている");
  const h2 = (body.match(/^##\s/gm) ?? []).length;
  if (h2 < 3) errs.push(`H2が少ない: ${h2}個`);
  if (!/^##\s*まとめ/m.test(body)) errs.push("「まとめ」のH2がない");

  // 断定してはいけない数値
  if (/\d[\d,]*\s*円/.test(body)) errs.push("本文に金額が含まれている");
  if (/\d{1,2}\s*[:：]\s*\d{2}/.test(body)) errs.push("本文に時刻が含まれている");
  if (/L\.?O\.?/i.test(body)) errs.push("本文にラストオーダー表記が含まれている");

  for (const w of BANNED_WORDS) if (body.includes(w)) errs.push(`禁止表現: ${w}`);

  // 所在地の誤り
  if (/歌舞伎町[^。]{0,12}(にある|に位置|の屋上|の当店)/.test(body))
    errs.push("店舗が歌舞伎町にあるかのような記述");

  // 内部リンク
  const linked = [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]);
  const valid = linked.filter((l) => ALLOWED_PATHS.has(l));
  if (valid.length < 2) errs.push(`内部リンクが不足: ${valid.length}個`);
  const invalid = linked.filter((l) => !ALLOWED_PATHS.has(l));
  if (invalid.length) errs.push(`存在しないパスへのリンク: ${invalid.join(", ")}`);
  if (/\]\(\s*(こちら|ここ)\s*\)/.test(body) || /\[(こちら|ここ|詳しくはこちら)\]/.test(body))
    errs.push("アンカーテキストが「こちら」になっている");

  return errs;
}

/* ------------------------------------------------------------------ *
 * メイン
 * ------------------------------------------------------------------ */
async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY が設定されていません。");
    process.exit(1);
  }

  console.log(`使用モデル: ${MODEL}${process.env.ANTHROPIC_MODEL ? "（ANTHROPIC_MODEL で指定）" : "（既定値）"}`);

  const posts = getAllPosts();
  const existingTitles = posts.map((p) => p.title);
  const existingSlugs = posts.map((p) => p.slug);

  // 直近に使ったテーマを避ける。全部使い切ったら古い順に再利用する。
  const recentKeywords = posts.slice(0, TOPICS.length - 1).map((p) => p.tags.join(" ") + p.title);
  const unused = TOPICS.filter((t) => !recentKeywords.some((r) => r.includes(t.keyword)));
  const pool = unused.length ? unused : TOPICS;
  const topic = pool[Math.floor(Math.random() * pool.length)];

  console.log(`テーマ: ${topic.theme}（キーワード: ${topic.keyword} / カテゴリ: ${topic.category}）`);
  console.log(`既存記事: ${posts.length}件`);

  const client = new Anthropic({ apiKey });

  let generated: Generated | null = null;
  let lastErrors: string[] = [];

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const feedback =
      attempt === 1
        ? ""
        : `\n\n## 前回の出力で修正が必要だった点\n${lastErrors.map((e) => `- ${e}`).join("\n")}\nこれらを必ず直してください。`;

    const res = await client.messages.create({
      model: MODEL,
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: buildUserPrompt(topic, existingTitles, existingSlugs) + feedback },
        // JSON以外を出力させないため、先頭の「{」を先に埋めておく
        { role: "assistant", content: "{" },
      ],
    });

    const text = res.content.map((c) => (c.type === "text" ? c.text : "")).join("");
    let parsed: Generated;
    try {
      const jsonText = "{" + text.slice(0, text.lastIndexOf("}") + 1);
      parsed = JSON.parse(jsonText) as Generated;
    } catch (e) {
      lastErrors = [`JSONとして解釈できなかった: ${(e as Error).message}`];
      console.warn(`  試行 ${attempt}: ${lastErrors[0]}`);
      continue;
    }

    const errs = validate(parsed, existingSlugs);
    if (errs.length === 0) {
      generated = parsed;
      console.log(`  試行 ${attempt}: 検証OK`);
      break;
    }
    lastErrors = errs;
    console.warn(`  試行 ${attempt}: 検証NG -> ${errs.join(" / ")}`);
  }

  if (!generated) {
    console.error("規定回数内に条件を満たす記事を生成できませんでした。");
    console.error(lastErrors.map((e) => "  - " + e).join("\n"));
    process.exit(1);
  }

  // JST の日付でファイル名を作る
  const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const date = jst.toISOString().slice(0, 10);

  const yaml = [
    "---",
    `title: ${JSON.stringify(generated.title)}`,
    `slug: ${JSON.stringify(generated.slug)}`,
    `description: ${JSON.stringify(generated.description)}`,
    `date: ${JSON.stringify(date)}`,
    `category: ${JSON.stringify(generated.category)}`,
    `tags: [${generated.tags.map((t) => JSON.stringify(t)).join(", ")}]`,
    "---",
    "",
  ].join("\n");

  fs.mkdirSync(BLOG_DIR, { recursive: true });
  const file = path.join(BLOG_DIR, `${date}-${generated.slug}.md`);
  fs.writeFileSync(file, yaml + generated.body.trim() + "\n", "utf8");

  const rel = path.relative(process.cwd(), file).replace(/\\/g, "/");
  console.log(`生成しました: ${rel}`);
  console.log(`  タイトル: ${generated.title}`);
  console.log(`  文字数  : ${generated.body.replace(/\s/g, "").length}`);
  console.log(`  カテゴリ: ${generated.category}`);
  console.log(`  タグ    : ${generated.tags.join(", ")}`);

  // GitHub Actions のサマリ・後続ステップ用
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `file=${rel}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${generated.title}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `model=${MODEL}\n`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
