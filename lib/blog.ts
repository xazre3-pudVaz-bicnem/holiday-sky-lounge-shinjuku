import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * content/blog/*.md を読むためのユーティリティ。
 * 記事は GitHub Actions が Claude API で毎日1本生成し、main へ直接コミットする。
 * （生成スクリプトは scripts/generate-daily-post.ts）
 */

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** カテゴリはここで固定する。生成スクリプトもこの一覧から選ぶ。 */
export const CATEGORIES = [
  { slug: "beer-garden", name: "ビアガーデンの楽しみ方" },
  { slug: "bbq", name: "BBQ・肉料理" },
  { slug: "scene", name: "シーン別の使い方" },
  { slug: "area", name: "新宿エリアの話" },
  { slug: "season", name: "季節・イベント" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const categoryName = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
  category: CategorySlug;
  tags: string[];
  /** 本文（Markdown） */
  content: string;
  /** 目安の読了時間（分） */
  readingMinutes: number;
};

const isValidSlug = (s: string) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);

function parseFile(file: string): Post | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);

  const slug = String(data.slug ?? file.replace(/\.md$/, "")).trim();
  const title = String(data.title ?? "").trim();
  const date = String(data.date ?? "").trim();

  // frontmatter が壊れている記事はビルドを止めずにスキップする
  if (!title || !date || !isValidSlug(slug)) return null;

  const category = (
    CATEGORIES.some((c) => c.slug === data.category) ? data.category : "beer-garden"
  ) as CategorySlug;

  const tags = Array.isArray(data.tags) ? data.tags.map(String).filter(Boolean) : [];

  return {
    slug,
    title,
    description: String(data.description ?? "").trim(),
    date,
    category,
    tags,
    content,
    readingMinutes: Math.max(1, Math.round(content.replace(/\s/g, "").length / 500)),
  };
}

/** 新しい順の全記事。content/blog が無い場合は空配列を返す（初回ビルド対策）。 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug < b.slug ? 1 : -1));
}

export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug) ?? null;

export const getPostsByCategory = (category: string) =>
  getAllPosts().filter((p) => p.category === category);

/** 使われているカテゴリだけを返す（記事0件のカテゴリページは作らない） */
export function getUsedCategories() {
  const used = new Set(getAllPosts().map((p) => p.category));
  return CATEGORIES.filter((c) => used.has(c.slug));
}

/** 同カテゴリ優先で関連記事を返す */
export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const others = getAllPosts().filter((p) => p.slug !== current.slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  return [...sameCategory, ...others.filter((p) => p.category !== current.category)].slice(0, limit);
}

/** 生成スクリプトの重複チェック用。既存のタイトルとスラッグを返す。 */
export function getExistingTitlesAndSlugs() {
  const posts = getAllPosts();
  return { titles: posts.map((p) => p.title), slugs: posts.map((p) => p.slug) };
}
