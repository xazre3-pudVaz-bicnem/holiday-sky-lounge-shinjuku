import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import PostBody from "@/components/blog/PostBody";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { categoryName, getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { ArrowIcon } from "@/components/ui/Icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "記事が見つかりません", robots: { index: false, follow: true } };

  return buildMetadata({
    title: post.title,
    description: post.description || `${post.title}｜HOLIDAY SKY LOUNGE 新宿のブログ`,
    path: `/blog/${post.slug}`,
    image: "/images/terrace-dusk-lights.jpg",
    imageAlt: post.title,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "ブログ", path: "/blog" },
    { name: post.title, path },
  ];
  const related = getRelatedPosts(post);

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path,
            name: post.title,
            description: post.description,
            lastModified: post.date,
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(crumbs, path),
          articleJsonLd({
            path,
            headline: post.title,
            description: post.description,
            image: "/images/terrace-dusk-lights.jpg",
            published: post.date,
            modified: post.date,
          }),
        ]}
      />

      <div className="bg-ivory pt-[92px] lg:pt-[110px]">
        <Breadcrumbs items={crumbs} />
      </div>

      <article className="paper pb-20 pt-8 lg:pb-28 lg:pt-12">
        <div className="container-wide">
          <header className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href={`/blog/category/${post.category}`}
                  className="border border-brand/25 px-3 py-1.5 text-[0.72rem] text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  {categoryName(post.category)}
                </Link>
                <time dateTime={post.date} className="u-en text-[0.78rem] tracking-[0.1em] text-ink-soft">
                  {post.date.replace(/-/g, ".")}
                </time>
                <span className="text-[0.72rem] text-ink-soft">約{post.readingMinutes}分で読めます</span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-5 text-[1.5rem] leading-[1.65] text-ink sm:text-[1.9rem] lg:text-[2.2rem]">
                {post.title}
              </h1>
            </Reveal>

            {post.description ? (
              <Reveal delay={120}>
                <p className="mt-5 text-[0.92rem] leading-[2.05] text-ink-soft">{post.description}</p>
              </Reveal>
            ) : null}
          </header>

          <div className="mt-12">
            <PostBody markdown={post.content} />
          </div>

          {post.tags.length ? (
            <Reveal>
              <ul className="mt-14 flex max-w-3xl flex-wrap gap-2.5 border-t border-line pt-8">
                {post.tags.map((t) => (
                  <li key={t} className="border border-line px-3 py-1.5 text-[0.75rem] text-ink-soft">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal>
            <p className="mt-10 max-w-3xl border-l-2 border-brand/40 pl-5 text-[0.78rem] leading-[1.95] text-ink-soft">
              記事内の内容は掲載時点のものです。コースの料金や内容、営業時間は変更される場合がありますので、
              最新の情報は
              <Link href="/course" className="text-brand underline underline-offset-4">
                BBQコース一覧
              </Link>
              と
              <Link href="/access" className="text-brand underline underline-offset-4">
                アクセス・店舗情報
              </Link>
              、または予約ページでご確認ください。屋上のテラス席のため、天候により営業内容が変わる場合があります。
            </p>
          </Reveal>

          <Reveal>
            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
            >
              ブログ記事の一覧へ戻る
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </article>

      {related.length ? (
        <section className="bg-white py-20 lg:py-24">
          <div className="container-wide">
            <h2 className="text-[1.3rem] leading-[1.6] text-ink lg:text-[1.6rem]">ほかの記事</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} as="li" delay={i * 60} className="border-t border-brand/20 pt-5">
                  <Link href={`/blog/${r.slug}`} className="group block">
                    <time dateTime={r.date} className="u-en text-[0.72rem] tracking-[0.1em] text-ink-soft">
                      {r.date.replace(/-/g, ".")}
                    </time>
                    <span className="mt-2 block text-[0.95rem] leading-[1.75] text-ink transition-colors group-hover:text-brand">
                      {r.title}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <SeoPageCta
        position="blog-post-bottom"
        heading="読み終えたら、屋上の席へ。"
        lead="ご予約は食べログの予約ページから。日時・人数・コースを選ぶだけでお申し込みいただけます。"
      />
    </>
  );
}
