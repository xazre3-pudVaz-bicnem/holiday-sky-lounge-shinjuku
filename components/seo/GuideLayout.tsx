import type { ReactNode } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import RelatedLinks, { type RelatedLink } from "@/components/seo/RelatedLinks";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { ArrowIcon } from "@/components/ui/Icons";
import type { Guide } from "@/data/guides";
import type { Faq } from "@/data/content";

/**
 * ガイド記事の共通レイアウト。
 * 本文はサーバーコンポーネントとして children で受け取る（JS実行後にしか出ない構成にしない）。
 */
export default function GuideLayout({
  guide,
  lead,
  children,
  faqs,
  related,
  ctaHeading,
  ctaLead,
}: {
  guide: Guide;
  lead: string;
  children: ReactNode;
  faqs?: Faq[];
  related: RelatedLink[];
  ctaHeading: string;
  ctaLead: string;
}) {
  const path = `/guide/${guide.slug}`;
  const crumbs = [
    { name: "ホーム", path: "/" },
    { name: "ガイド", path: "/guide" },
    { name: guide.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path,
            name: guide.title,
            description: guide.description,
            lastModified: guide.modified,
            image: guide.image,
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(crumbs, path),
          articleJsonLd({
            path,
            headline: guide.title,
            description: guide.description,
            image: guide.image,
            published: guide.published,
            modified: guide.modified,
          }),
          ...(faqs?.length ? [faqJsonLd(faqs, path)] : []),
        ]}
      />

      <PageHero en="Guide" title={guide.title} lead={lead} image={guide.image} alt={guide.imageAlt} />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={crumbs} />
      </div>

      <article className="paper py-16 lg:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[0.76rem] tracking-[0.08em] text-ink-soft">
              公開日 {guide.published}／最終更新日 {guide.modified}
            </p>
          </Reveal>

          <div className="mt-10 max-w-3xl space-y-12">{children}</div>

          <Reveal>
            <Link
              href="/guide"
              className="mt-16 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
            >
              ガイド記事の一覧へ戻る
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </article>

      {faqs?.length ? (
        <section className="bg-white py-16 lg:py-24">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="text-[1.4rem] leading-[1.6] text-ink lg:text-[1.7rem]">よくあるご質問</h2>
              <div className="mt-8 border-t border-line">
                {faqs.map((f, i) => (
                  <Reveal key={f.q} delay={Math.min(i, 4) * 45}>
                    <details className="group border-b border-line">
                      <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden">
                        <span aria-hidden="true" className="u-en mt-0.5 shrink-0 text-[0.8rem] text-brand/50">
                          Q
                        </span>
                        <h3 className="flex-1 text-[0.95rem] font-medium leading-[1.8] text-ink">{f.q}</h3>
                        <span aria-hidden="true" className="relative mt-2 block h-3 w-3 shrink-0 text-brand">
                          <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-current transition-transform duration-400 group-open:scale-y-0" />
                        </span>
                      </summary>
                      <div className="grid grid-cols-[auto_1fr] gap-4 pb-6">
                        <span aria-hidden="true" className="u-en shrink-0 text-[0.8rem] text-sun/70">
                          A
                        </span>
                        <p className="text-[0.86rem] leading-[2.05] text-ink-soft">{f.a}</p>
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <RelatedLinks items={related} lead="この記事とあわせて読まれているページです。" />

      <SeoPageCta position={`guide-${guide.slug}-bottom`} heading={ctaHeading} lead={ctaLead} />
    </>
  );
}

/** ガイド本文で使う見出し＋段落。マークアップを揃えるための小さなヘルパー。 */
export function GuideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal as="section">
      <h2 className="text-[1.25rem] leading-[1.7] text-ink lg:text-[1.5rem]">{title}</h2>
      <div className="mt-5 space-y-5 text-[0.92rem] leading-[2.1] text-ink-soft">{children}</div>
    </Reveal>
  );
}
