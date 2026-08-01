import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";

const SEATS = [
  {
    title: "ソファー席",
    body: "ゆったり腰を沈めて座れる、長居向きの席。少人数の飲み会に。",
    image: "/images/terrace-sofa-seat-sunset.jpg",
    alt: "夕暮れの新宿の屋上ビアガーデンにあるソファー席とベンチシート",
  },
  {
    title: "カップルシート",
    body: "並んで街の灯りを眺められる、二人のための席。デートや記念日に。",
    image: "/images/couple-seat-round-table.jpg",
    alt: "新宿の屋上ビアガーデンのカップルシートと丸テーブル",
  },
  {
    title: "大人数宴会エリア",
    body: "ロングテーブルを連結して、着席250名・立食300名まで。50名以上は貸切も。",
    image: "/images/banquet-long-table-day.jpg",
    alt: "新宿の屋上ビアガーデンで大人数の宴会に対応するロングテーブルエリア",
  },
  {
    title: "バーカウンター",
    body: "茅葺き屋根のカウンター。屋根付きなので、日差しの強い日にも。",
    image: "/images/tiki-bar-counter.jpg",
    alt: "南国リゾート風の茅葺き屋根が印象的な新宿の屋上ビアガーデンのバーカウンター",
  },
];

export default function Space() {
  return (
    <section id="space" className="bg-white py-24 lg:py-36">
      <div className="container-wide">
        <SectionHeading
          en="Space"
          className="max-w-3xl"
          lead="約300席のワンフロア。グリーンに囲まれたテラスは、時間帯によって表情がまるで変わります。"
        >
          新宿の夜景を眺める、
          <br className="hidden sm:block" />
          天空のリゾートラウンジ。
        </SectionHeading>

        {/* ---------- 昼と夜の対比 ---------- */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-24">
          <Reveal variant="clip">
            <figure>
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/terrace-day-palm-umbrella.jpg"
                  alt="青空とパラソル、ヤシの木に囲まれた昼間の新宿の屋上ビアガーデン"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-0 top-0 bg-white/92 px-4 py-2">
                  <span className="u-en text-[0.7rem] text-brand">DAYTIME</span>
                </figcaption>
              </div>
              <p className="mt-4 text-[0.85rem] leading-[1.95] text-ink-soft">
                昼は、青空とパラソルの下。緑の床に日差しが落ちて、まるで南国のプールサイドのような明るさになります。11:30から営業しているので、昼飲みやランチBBQにも。
              </p>
            </figure>
          </Reveal>

          <Reveal variant="clip" delay={140}>
            <figure>
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/terrace-night-umbrella-lights.jpg"
                  alt="照明が灯り夜景に包まれた新宿の屋上ビアガーデンの夜のテラス席"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-0 top-0 bg-ember/85 px-4 py-2">
                  <span className="u-en text-[0.7rem] text-sun">NIGHT</span>
                </figcaption>
              </div>
              <p className="mt-4 text-[0.85rem] leading-[1.95] text-ink-soft">
                日が落ちると、天井のガーランドライトが一斉に灯ります。眼下にはビルの窓明かりと車のライト。同じ席なのに、昼とはまったく違う場所に見えてきます。
              </p>
            </figure>
          </Reveal>
        </div>

        {/* ---------- 夜景のワイド写真 ---------- */}
        <Reveal variant="clip" className="mt-16 lg:mt-24">
          <div className="reveal-zoom relative aspect-[16/9] overflow-hidden lg:aspect-[21/9]">
            <Image
              src="/images/rooftop-cityscape-dusk.jpg"
              alt="新宿の街並みとビル群を見渡す、日没後の屋上ビアガーデンの夜景"
              fill
              loading="lazy"
              quality={65}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* ---------- 席タイプ ---------- */}
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {SEATS.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="reveal-zoom relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 23vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-[1.05rem] text-ink">{s.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-[1.9] text-ink-soft">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <Link
            href="/space"
            className="mt-14 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
          >
            空間・座席を詳しく見る
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
