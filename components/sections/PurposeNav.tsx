import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";

/**
 * トップページをハブにするための「目的から選ぶ」導線。
 * カードを並べるだけにせず、大きい写真＋テキストリンクの2層構成にしている。
 */
const FEATURED = [
  {
    href: "/shinjuku-bbq",
    label: "新宿で手ぶらBBQを楽しみたい",
    body: "食材もグリルも食器も店舗側で用意。何を用意しなくていいのかを、表で整理しています。",
    image: "/images/bbq-long-table-grill.jpg",
    alt: "グリルをセットしたロングテーブルとスツールが並ぶ屋上の席",
  },
  {
    href: "/course/samgyeopsal",
    label: "サムギョプサルを楽しみたい",
    body: "新大久保から徒歩4分。厚切りの豚バラを鉄板で焼く、全16品のK-BBQコース。",
    image: "/images/samgyeopsal-set.jpg",
    alt: "サンチュとキムチ、ナムルを添えたサムギョプサルの鉄板",
  },
  {
    href: "/course/churrasco",
    label: "シュラスコを楽しみたい",
    body: "ピッカーニャ、サーロイン、ランプ。串のまま焼いて、その場で切り分けます。",
    image: "/images/churrasco-skewers.jpg",
    alt: "串に刺して焼き上げたピッカーニャとソーセージ、焼きパイナップル",
  },
];

const LINKS = [
  { href: "/scene/company-party", label: "会社宴会を開きたい", note: "着席250名・立食300名" },
  { href: "/scene/private-party", label: "大人数で貸切したい", note: "50名〜300名で相談可" },
  { href: "/scene/girls-party", label: "女子会で利用したい", note: "韓国BBQとカクテル" },
  { href: "/scene/date", label: "夜景デートで利用したい", note: "カップルシートあり" },
  { href: "/scene/lunch", label: "昼から飲みたい", note: "11:30から通し営業" },
  { href: "/area/higashi-shinjuku", label: "東新宿駅から近い店を探している", note: "A1出口から徒歩2分" },
  { href: "/area/shin-okubo", label: "新大久保から近い店を探している", note: "徒歩4分" },
  { href: "/guide", label: "予約前に詳しく知りたい", note: "利用ガイド6記事" },
];

export default function PurposeNav() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeading
          en="Find Your Way"
          className="max-w-3xl"
          lead="やりたいことが決まっている方は、こちらから。目的別に、必要な情報だけをまとめたページをご用意しています。"
        >
          目的から選ぶ
        </SectionHeading>

        {/* 主要3導線は写真つきで大きく */}
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3 lg:mt-20">
          {FEATURED.map((f, i) => (
            <Reveal key={f.href} delay={i * 80}>
              <Link href={f.href} className="group block">
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 31vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="mt-5 flex items-center gap-3 text-[1.05rem] leading-[1.7] text-ink transition-colors group-hover:text-brand">
                  {f.label}
                  <ArrowIcon className="h-3.5 w-3.5 shrink-0 text-brand" />
                </h3>
                <p className="mt-2.5 text-[0.85rem] leading-[1.95] text-ink-soft">{f.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 残りはテキストリンクで簡潔に */}
        <ul className="mt-16 grid gap-x-12 border-t border-brand/20 sm:grid-cols-2">
          {LINKS.map((l, i) => (
            <Reveal key={l.href} as="li" delay={(i % 2) * 50} className="border-b border-line">
              <Link href={l.href} className="group flex items-baseline justify-between gap-4 py-5">
                <span className="text-[0.95rem] leading-[1.7] text-ink transition-colors group-hover:text-brand">
                  {l.label}
                </span>
                <span className="flex shrink-0 items-center gap-3 text-[0.76rem] text-ink-soft">
                  {l.note}
                  <ArrowIcon className="h-3.5 w-3.5 text-brand" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
