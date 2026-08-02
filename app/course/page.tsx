import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Courses from "@/components/sections/Courses";
import ReserveCta from "@/components/sections/ReserveCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, courseItemListJsonLd, menuJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { lastModifiedOf } from "@/lib/routes";
import { COURSE_NOTE, OTHER_PLANS } from "@/data/courses";
import { STEPS } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Icons";
import { LINKS } from "@/lib/site-config";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "BBQコース", path: "/course" },
];

export const metadata = buildMetadata({
  title: "新宿のビアガーデンBBQコース一覧｜手ぶら・飲み放題付き",
  description:
    "新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」のBBQコース一覧。肉と海鮮のスタンダードBBQ（全13品・2時間飲み放題付 ¥3,980）、韓国BBQ、ブラックアンガス牛のアメリカンBBQ、シュラスコBBQ、ランチ限定コースまで。すべて手ぶらでご利用いただけます。",
  path: "/course",
  image: "/images/american-bbq-beef-platter.jpg",
  keywords: ["新宿 ビアガーデン BBQ", "新宿 手ぶらBBQ", "新宿 BBQ 飲み放題", "新宿 ビアガーデン コース"],
});

const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

export default function CoursePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/course", name: metadata.title as string, description: metadata.description as string, lastModified: lastModifiedOf("/course"), image: "/images/american-bbq-beef-platter.jpg", hasBreadcrumb: true }),
          breadcrumbJsonLd(CRUMBS, "/course"),
          menuJsonLd(),
          courseItemListJsonLd(),
        ]}
      />
      <PageHero
        en="BBQ Course"
        title="肉と海鮮を味わう、手ぶらのWORLD BBQコース"
        lead="アメリカン、韓国、ブラジリアン。同じ屋上で、その日の気分に合わせて世界のBBQスタイルを選べます。食材・機材・後片付けまで込みなので、身ひとつでお越しください。"
        image="/images/bbq-long-table-grill.jpg"
        alt="グリルをセットしたロングテーブルとスツールが並ぶ屋上の席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- コースの選び方 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading en="How to Choose">
                迷ったら、
                <br />
                この基準で選んでください。
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="space-y-6 text-[0.9rem] leading-[2.05] text-ink-soft">
                  <p>
                    はじめての方には、肉と海鮮が両方入った<strong className="font-medium text-ink">スタンダードBBQ（全13品・¥3,980）</strong>がいちばん選ばれています。ブラックアンガスランプ、BBQポーク、チキン、ソーセージに、ガーリックシュリンプと焼きイカが付く構成です。
                  </p>
                  <p>
                    とにかく肉を食べたい日は<strong className="font-medium text-ink">アメリカンBBQ（全16品・¥4,980）</strong>。ブラックアンガス牛のリブ・ランプ・ハラミを3種まとめて焼き上げます。飲み放題も2.5時間と長めです。
                  </p>
                  <p>
                    女子会や韓国料理好きの集まりなら<strong className="font-medium text-ink">サムギョプサル＆K-BBQ（全16品・¥4,480）</strong>、目の前でカットする演出を楽しみたいなら<strong className="font-medium text-ink">シュラスコBBQ（全14品・¥5,480）</strong>を。誕生日や記念日には乾杯のスパークリングワインが付くHAPPYコースもご用意しています。
                  </p>
                  <p>
                    昼から始めるなら、ランチ限定のBBQ4種盛りプレートコース（全10品・2時間飲み放題付・¥2,980）が手軽です。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Courses showAllLink={false} />

      {/* ---------- その他のプラン ---------- */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            en="Other Plans"
            className="max-w-3xl"
            lead="上記のほかにも、目的に合わせたプランをご用意しています。"
          >
            そのほかのコース・プラン
          </SectionHeading>

          <div className="mt-12 border-t border-line">
            {OTHER_PLANS.map((p, i) => (
              <Reveal key={p.name} delay={Math.min(i, 4) * 50}>
                <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                  <div>
                    <h3 className="text-[1rem] leading-[1.7] text-ink">{p.name}</h3>
                    <p className="mt-1 text-[0.78rem] text-ink-soft">{p.note}</p>
                  </div>
                  <p className="flex items-baseline gap-3 sm:justify-end">
                    <span className="u-en text-[1.5rem] leading-none text-brand">{yen(p.price)}</span>
                    {"listPrice" in p && p.listPrice ? (
                      <span className="text-[0.76rem] text-ink-soft line-through">
                        {yen(p.listPrice)}
                      </span>
                    ) : null}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-3xl border-l-2 border-brand/40 pl-5 text-[0.8rem] leading-[1.95] text-ink-soft">
              {COURSE_NOTE}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-10"
            >
              空席を確認・予約する
              <ArrowIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- 予約の流れ ---------- */}
      <section className="bg-ivory-deep py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Reservation Flow" className="max-w-3xl">
            ご予約から乾杯までの流れ
          </SectionHeading>

          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 60} className="border-t border-brand/25 pt-5">
                  <span className="u-en text-[1.6rem] leading-none text-brand/30">{s.no}</span>
                  <h3 className="mt-3 text-[0.98rem] leading-[1.7] text-ink">{s.title}</h3>
                  <p className="mt-3 text-[0.8rem] leading-[1.95] text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
