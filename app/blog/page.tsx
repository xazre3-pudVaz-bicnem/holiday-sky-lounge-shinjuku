import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PostList from "@/components/blog/PostList";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";
import { getAllPosts, getUsedCategories } from "@/lib/blog";
import { ArrowIcon } from "@/components/ui/Icons";

const PATH = "/blog";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "ブログ", path: PATH },
];

const TITLE = "ブログ｜新宿のビアガーデンとBBQの読みもの";
const DESCRIPTION =
  "新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」のブログ。ビアガーデンの楽しみ方、BBQや肉料理の話、宴会や女子会など目的別の店選び、新宿エリアの話題を随時更新しています。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/terrace-dusk-lights.jpg",
  imageAlt: "日没後に照明が灯りはじめたテーブル席",
  keywords: ["新宿 ビアガーデン ブログ", "新宿 BBQ 読みもの", "新宿 ビアガーデン 楽しみ方"],
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getUsedCategories();
  const latest = posts[0]?.date;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            lastModified: latest,
            image: "/images/terrace-dusk-lights.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          ...(posts.length
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "Blog",
                  "@id": `${absoluteUrl(PATH)}#blog`,
                  name: TITLE,
                  description: DESCRIPTION,
                  url: absoluteUrl(PATH),
                  inLanguage: "ja",
                  blogPost: posts.slice(0, 20).map((p) => ({
                    "@type": "BlogPosting",
                    headline: p.title,
                    description: p.description,
                    datePublished: p.date,
                    url: absoluteUrl(`/blog/${p.slug}`),
                  })),
                },
              ]
            : []),
        ]}
      />

      <PageHero
        en="Blog"
        title="新宿の屋上から、その日その日の話を。"
        lead="ビアガーデンの楽しみ方、BBQや肉料理のこと、宴会や女子会の店選び。来店の前に読んでおくと役に立つ話を、随時更新しています。"
        image="/images/terrace-dusk-lights.jpg"
        alt="日没後に照明が灯りはじめたテーブル席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Articles"
            className="max-w-3xl"
            lead={posts.length ? `全${posts.length}件の記事を掲載しています。` : undefined}
          >
            記事一覧
          </SectionHeading>

          {categories.length > 1 ? (
            <Reveal>
              <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/blog/category/${c.slug}`}
                      className="inline-block border border-brand/25 px-4 py-2 text-[0.78rem] tracking-[0.06em] text-brand transition-colors hover:bg-brand hover:text-white"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <div className="mt-12">
            <PostList posts={posts} />
          </div>

          <Reveal>
            <div className="mt-14 border-l-2 border-brand/40 pl-5">
              <p className="text-[0.85rem] leading-[2] text-ink-soft">
                ご来店前に確認しておきたい実用的な情報は、
                <Link href="/guide" className="text-brand underline underline-offset-4">
                  利用ガイド
                </Link>
                にまとめています。コースの内容と料金は
                <Link href="/course" className="text-brand underline underline-offset-4">
                  BBQコース一覧
                </Link>
                をご覧ください。
              </p>
              <Link
                href="/guide"
                className="mt-5 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                来店前に読む利用ガイドを見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SeoPageCta
        position="blog-index-bottom"
        heading="読んで決まったら、席の確保を。"
        lead="ご予約は食べログの予約ページから。日時・人数・コースを選ぶだけでお申し込みいただけます。"
      />
    </>
  );
}
