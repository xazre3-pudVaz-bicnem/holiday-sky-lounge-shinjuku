import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import PostList from "@/components/blog/PostList";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { CATEGORIES, categoryName, getPostsByCategory, getUsedCategories } from "@/lib/blog";
import { ArrowIcon } from "@/components/ui/Icons";

type Params = { params: Promise<{ category: string }> };

/** 記事が1件以上あるカテゴリだけページを作る（空ページを量産しない） */
export function generateStaticParams() {
  return getUsedCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORIES.some((c) => c.slug === category)) {
    return { title: "カテゴリが見つかりません", robots: { index: false, follow: true } };
  }
  const name = categoryName(category);
  return buildMetadata({
    title: `${name}の記事一覧｜ブログ`,
    description: `HOLIDAY SKY LOUNGE 新宿のブログから、「${name}」に関する記事をまとめました。新宿の屋上ビアガーデンとBBQに関する読みものです。`,
    path: `/blog/category/${category}`,
    image: "/images/terrace-dusk-lights.jpg",
  });
}

export default async function BlogCategoryPage({ params }: Params) {
  const { category } = await params;
  if (!CATEGORIES.some((c) => c.slug === category)) notFound();

  const posts = getPostsByCategory(category);
  if (posts.length === 0) notFound();

  const name = categoryName(category);
  const path = `/blog/category/${category}`;
  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "ブログ", path: "/blog" },
    { name, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path,
            name: `${name}の記事一覧`,
            description: `「${name}」に関する記事の一覧です。`,
            lastModified: posts[0]?.date,
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(crumbs, path),
        ]}
      />

      <PageHero
        en="Category"
        title={`${name}の記事`}
        lead={`「${name}」に関する記事をまとめました。新宿の屋上ビアガーデンとBBQについての読みものです。`}
        image="/images/terrace-dusk-lights.jpg"
        alt="日没後に照明が灯りはじめたテーブル席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <Reveal>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {getUsedCategories().map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/blog/category/${c.slug}`}
                    aria-current={c.slug === category ? "page" : undefined}
                    className={`inline-block border px-4 py-2 text-[0.78rem] tracking-[0.06em] transition-colors ${
                      c.slug === category
                        ? "border-brand bg-brand text-white"
                        : "border-brand/25 text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-12">
            <PostList posts={posts} />
          </div>

          <Reveal>
            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
            >
              すべてのブログ記事を見る
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SeoPageCta
        position="blog-category-bottom"
        heading="読んで決まったら、席の確保を。"
        lead="ご予約は食べログの予約ページから。日時・人数・コースを選ぶだけでお申し込みいただけます。"
      />
    </>
  );
}
