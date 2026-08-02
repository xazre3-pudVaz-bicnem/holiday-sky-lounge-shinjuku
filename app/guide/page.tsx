import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";
import { lastModifiedOf } from "@/lib/routes";
import { GUIDES } from "@/data/guides";
import { ArrowIcon } from "@/components/ui/Icons";

const PATH = "/guide";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "ガイド", path: PATH },
];

const TITLE = "新宿ビアガーデンの利用ガイド｜予約・コース選び・雨天時";
const DESCRIPTION =
  "新宿の屋上ビアガーデンを利用する前に知っておきたいことをまとめたガイドです。2026年の営業情報、BBQコースの選び方、雨の日の確認方法、持ち物と服装、大人数の幹事向けチェックリスト、夜景がきれいな時間帯を掲載しています。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/terrace-dusk-panorama.jpg",
  imageAlt: "夕暮れのビル群を背景に約300席のテーブルが並ぶ屋上テラスの全景",
  keywords: ["新宿 ビアガーデン ガイド", "新宿 ビアガーデン 予約", "新宿 BBQ 選び方"],
});

export default function GuideIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            lastModified: lastModifiedOf(PATH),
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${absoluteUrl(PATH)}#guidelist`,
            name: "新宿ビアガーデンの利用ガイド",
            numberOfItems: GUIDES.length,
            itemListElement: GUIDES.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: g.title,
              url: absoluteUrl(`/guide/${g.slug}`),
            })),
          },
        ]}
      />

      <PageHero
        en="Guide"
        title="来店前に、知っておきたいこと。"
        lead="予約の取り方、コースの選び方、雨の日の確認方法。屋上のビアガーデンを使ううえで迷いやすいところを、6つの記事にまとめました。"
        image="/images/terrace-dusk-panorama.jpg"
        alt="夕暮れのビル群を背景に約300席のテーブルが並ぶ屋上テラスの全景"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g, i) => (
              <Reveal key={g.slug} as="li" delay={(i % 3) * 70}>
                <Link href={`/guide/${g.slug}`} className="group block">
                  <div className="reveal-zoom relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={g.image}
                      alt={g.imageAlt}
                      fill
                      loading="lazy"
                      quality={65}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 46vw, 31vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mt-5 text-[0.72rem] tracking-[0.08em] text-ink-soft">更新 {g.modified}</p>
                  <h2 className="mt-2 text-[1.05rem] leading-[1.7] text-ink transition-colors group-hover:text-brand">
                    {g.title}
                  </h2>
                  <p className="mt-2.5 text-[0.85rem] leading-[1.95] text-ink-soft">{g.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.08em] text-brand">
                    記事を読む
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SeoPageCta
        position="guide-index-bottom"
        heading="読んで決まったら、席の確保を。"
        lead="ご予約は食べログの予約ページから。日時・人数・コースを選ぶだけでお申し込みいただけます。"
      />
    </>
  );
}
