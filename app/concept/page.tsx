import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ReserveCta from "@/components/sections/ReserveCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { ArrowIcon } from "@/components/ui/Icons";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "コンセプト", path: "/concept" },
];

export const metadata = buildMetadata({
  title: "コンセプト｜新宿の屋上に広がるリゾート型ビアガーデン",
  description:
    "新宿・東新宿のK-SQUARE屋上にある「HOLIDAY SKY LOUNGE 新宿」のコンセプト。約300席のルーフトップテラス、ハワイアンリゾートを思わせる空間、準備不要の手ぶらBBQ。昼から夜まで楽しめる新宿のビアガーデンです。",
  path: "/concept",
  image: "/images/concept-sunset-palm-sign.jpg",
  keywords: ["新宿 ビアガーデン", "新宿 屋上ビアガーデン", "新宿 テラス", "新宿 屋上レストラン"],
});

const PILLARS = [
  {
    en: "Open Air",
    title: "頭上に、何もない。",
    body: "屋内のダイニングでは味わえないのが、空の広さです。テラスに出た瞬間に視界が開けて、ビルの間を抜けてきた風がそのまま届く。同じビールでも、屋根の下で飲むのとは味が変わります。約300席のワンフロアすべてが、この開放感の上に成り立っています。",
    image: "/images/terrace-dusk-panorama.jpg",
    alt: "頭上に遮るもののない、新宿の屋上ビアガーデンの開放的なテラス全景",
  },
  {
    en: "Resort",
    title: "新宿にいながら、遠くへ。",
    body: "ヤシの木、茅葺き屋根のバーカウンター、緑の床、そして日が落ちてから灯るガーランドライト。ハワイアンリゾートを思わせる要素を屋上に持ち込むことで、エレベーターを降りた瞬間に「いつもの新宿」から切り離されるようにしています。旅に出なくても、休日の空気だけは味わえます。",
    image: "/images/tiki-bar-counter.jpg",
    alt: "南国リゾートを思わせる茅葺き屋根のバーカウンターがある新宿の屋上ビアガーデン",
  },
  {
    en: "Hands Free",
    title: "準備は、こちらで。",
    body: "BBQのいちばん楽しい部分は、火を囲んで焼いている時間です。買い出しも、炭起こしも、後片付けも、その時間を削るだけ。だから全部こちらで引き受けます。お客様がするのは、席について、焼いて、乾杯すること。それだけです。",
    image: "/images/bbq-grill-table-day.jpg",
    alt: "手ぶらで楽しめるようグリルがセットされた新宿の屋上ビアガーデンのテーブル",
  },
  {
    en: "For Everyone",
    title: "気取らず、上質に。",
    body: "屋上のリゾートラウンジでありながら、50名の会社宴会も、二人だけの記念日も、同じフロアで成立させたいと考えています。ドレスコードはありません。仕事帰りのスーツでも、Tシャツでも。上質な景色と、気楽に過ごせる空気。その両方を残すことを、この場所の基準にしています。",
    image: "/images/terrace-night-party-tables.jpg",
    alt: "会社宴会から少人数の飲み会まで対応する新宿の屋上ビアガーデンの夜のテラス席",
  },
];

export default function ConceptPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        en="Concept"
        title="新宿にいながら、南国リゾートのようなひとときを。"
        lead="エレベーターの扉が開くと、そこはビルの屋上。ヤシの木とガーランドライトに囲まれた約300席のテラスが広がります。新宿の空の下で過ごす、少しだけ非日常な時間について。"
        image="/images/concept-sunset-palm-sign.jpg"
        alt="夕暮れの空の下、ヤシの木とHOLIDAYのサインが並ぶ新宿の屋上ビアガーデン"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- ストーリー ---------- */}
      <section className="paper py-20 lg:py-32">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading en="Story">
                都会の真ん中に、
                <br />
                空だけの場所をつくる。
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="max-w-2xl space-y-6 text-[0.92rem] leading-[2.1] text-ink-soft">
                  <p>
                    新宿区大久保。東新宿駅と新大久保駅のちょうど間にあるK-SQUAREという建物の、いちばん上。エレベーターを降りて通路を進んだ先に、HOLIDAY SKY LOUNGE 新宿はあります。
                  </p>
                  <p>
                    このエリアは、ビルが密集していて、路面には人が絶えず流れています。ところが屋上に上がると、その騒がしさが一段下に沈む。同じ街なのに、空気の密度が変わります。私たちが最初にこの場所を選んだのは、その落差に驚いたからでした。
                  </p>
                  <p>
                    そこで考えたのは、「新宿の屋上を、休日の場所にする」ということ。海にも山にも行けない平日の夜に、それでも少しだけ休日の気分を持ち帰ってもらえる場所。ヤシの木を植え、緑の床を敷き、天井いっぱいにライトを張ったのは、そのためです。
                  </p>
                  <p>
                    そして、この場所の真ん中には必ず火があります。網の上で肉が焼ける音、立ちのぼる煙、それを囲んで自然と近くなる距離。BBQを選んだのは、料理を待つ時間ではなく、一緒に焼く時間そのものを楽しんでほしかったからです。
                  </p>
                  <p>
                    昼は青空とパラソルの下で、夜は街の灯りを眺めながら。11:30から23:45まで、どの時間に来ても、それぞれ違う顔の屋上が待っています。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4つの柱 ---------- */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-wide">
          <SectionHeading en="What We Value" className="max-w-3xl">
            この屋上で、
            <br className="hidden sm:block" />
            大切にしていること。
          </SectionHeading>
        </div>

        <div className="mt-14 lg:mt-20">
          {PILLARS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={p.en}
                className={`container-wide grid items-center gap-8 py-10 lg:grid-cols-12 lg:gap-16 lg:py-14 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <Reveal
                  variant="clip"
                  className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}
                >
                  <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      loading="lazy"
                      quality={65}
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <div className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Reveal>
                    <p className="u-eyebrow text-brand">{p.en}</p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h3 className="mt-4 text-[1.3rem] leading-[1.6] text-ink lg:text-[1.6rem]">
                      {p.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={150}>
                    <p className="mt-5 max-w-xl text-[0.9rem] leading-[2.05] text-ink-soft">{p.body}</p>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>

        <div className="container-wide mt-14">
          <Reveal>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="/space"
                className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                空間・座席について
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/course"
                className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                BBQコースについて
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
