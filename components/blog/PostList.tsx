import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";
import { categoryName, type Post } from "@/lib/blog";

/** 記事一覧。写真を持たない記事のため、罫線とタイポグラフィで構成する。 */
export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <Reveal>
        <p className="border-l-2 border-brand/40 pl-5 text-[0.9rem] leading-[2] text-ink-soft">
          記事はまだ公開されていません。順次追加していきます。
        </p>
      </Reveal>
    );
  }

  return (
    <ul className="border-t border-brand/20">
      {posts.map((p, i) => (
        <Reveal key={p.slug} as="li" delay={Math.min(i, 5) * 45} className="border-b border-line">
          <Link href={`/blog/${p.slug}`} className="group grid gap-3 py-7 md:grid-cols-[9rem_1fr] md:gap-8">
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
              <time dateTime={p.date} className="u-en text-[0.78rem] tracking-[0.1em] text-ink-soft">
                {p.date.replace(/-/g, ".")}
              </time>
              <span className="border border-brand/25 px-2.5 py-1 text-[0.7rem] text-brand">
                {categoryName(p.category)}
              </span>
            </div>

            <div>
              <h2 className="flex items-start gap-3 text-[1.05rem] leading-[1.75] text-ink transition-colors group-hover:text-brand lg:text-[1.15rem]">
                {p.title}
                <ArrowIcon className="mt-1.5 h-3.5 w-3.5 shrink-0 text-brand" />
              </h2>
              {p.description ? (
                <p className="mt-2.5 text-[0.85rem] leading-[1.95] text-ink-soft">{p.description}</p>
              ) : null}
              <p className="mt-3 text-[0.72rem] text-ink-soft">約{p.readingMinutes}分で読めます</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
