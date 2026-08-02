import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";
import { PHOTO_NOTE } from "@/data/courses";

const GRILL = [
  { name: "ブラックアンガス牛", note: "リブ・ランプ・ハラミ" },
  { name: "BBQポーク", note: "厚切りで、脂の甘みごと" },
  { name: "スパイシーチキン", note: "香ばしく焼き上げて" },
  { name: "グリルソーセージ", note: "皮がはじける瞬間を" },
  { name: "サムギョプサル", note: "韓国スタイルの厚切り豚バラ" },
  { name: "シュラスコ", note: "ピッカーニャ／サーロイン" },
];

const SEAFOOD = [
  { name: "ガーリックシュリンプ", note: "殻ごと、にんにくの香りで" },
  { name: "焼きイカ", note: "醤油が焦げる匂いまでごちそう" },
  { name: "海鮮グリル", note: "コースによって内容が変わります" },
  { name: "グリル野菜", note: "焼きとうもろこし、季節の野菜" },
  { name: "ガーリックライス", note: "〆にはこれを" },
  { name: "サイドメニュー", note: "サラダ、前菜など" },
];

const DRINKS = [
  "生ビール",
  "ボトルビール（コロナ／カールスバーグ ほか）",
  "カクテル",
  "ハイボール・焼酎",
  "ワイン",
  "ソフトドリンク",
];

export default function FoodDrink() {
  return (
    <section id="food-drink" className="bg-ivory-deep py-24 lg:py-36">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              en="Food & Drink"
              lead="下ごしらえを済ませた食材が、焼くだけの状態で運ばれてきます。網にのせて、脂がはぜる音を聞きながら待つ数分。焼きたてをそのまま口へ運ぶ、それがいちばんおいしい食べ方です。"
            >
              火を囲み、
              <br />
              焼きたてを頬張る。
            </SectionHeading>

            <Reveal delay={200}>
              <div className="reveal-zoom relative mt-12 aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/charcoal-grilled-steak.jpg"
                  alt="炭火のグリルで表面を焼き上げているステーキ"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-[0.72rem] text-ink-soft">{PHOTO_NOTE}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {/* GRILL / SEAFOOD メニュー：カードで囲まず、罫線と余白で構成 */}
            <Reveal>
              <h3 className="u-en border-b border-brand/25 pb-3 text-[0.78rem] text-brand">
                GRILL — 肉
              </h3>
            </Reveal>
            <ul className="mt-2">
              {GRILL.map((item, i) => (
                <Reveal as="li" key={item.name} delay={i * 40} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
                    <span className="text-[1rem] tracking-[0.05em] text-ink [font-family:var(--font-mincho)]">
                      {item.name}
                    </span>
                    <span className="text-[0.76rem] text-ink-soft">{item.note}</span>
                  </Reveal>
              ))}
            </ul>

            <Reveal>
              <h3 className="u-en mt-14 border-b border-brand/25 pb-3 text-[0.78rem] text-brand">
                SEAFOOD & SIDE — 海鮮・野菜
              </h3>
            </Reveal>
            <ul className="mt-2">
              {SEAFOOD.map((item, i) => (
                <Reveal as="li" key={item.name} delay={i * 40} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
                    <span className="text-[1rem] tracking-[0.05em] text-ink [font-family:var(--font-mincho)]">
                      {item.name}
                    </span>
                    <span className="text-[0.76rem] text-ink-soft">{item.note}</span>
                  </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- ドリンク：写真を大胆に使った帯 ---------- */}
      <div className="mt-24 lg:mt-32">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-12 md:gap-4">
            <Reveal variant="clip" className="md:col-span-5">
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden md:aspect-[3/4]">
                <Image
                  src="/images/cocktails-lineup.jpg"
                  alt="色とりどりのトロピカルカクテルが6杯並んだテーブル"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal variant="clip" delay={120} className="md:col-span-7">
              <div className="reveal-zoom relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                <Image
                  src="/images/cheers-beer-mug.jpg"
                  alt="泡の立った生ビールのジョッキを合わせて乾杯する手元"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="container-wide mt-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading en="Drink" as="h3">
                夜景と楽しむ、
                <br />
                2時間以上の飲み放題。
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="max-w-2xl text-[0.9rem] leading-[2.05] text-ink-soft">
                  ほとんどのBBQコースに2時間以上の飲み放題が付きます（コースにより2時間・2.5時間・3時間）。よく冷えた生ビールから、屋上の景色に合うボトルビール、南国らしい色のカクテルまで。料理は単品で頼みたい日には、2時間プレミアム飲み放題プラン（¥1,980）だけの利用も可能です。
                </p>
              </Reveal>
              <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
                {DRINKS.map((d, i) => (
                  <Reveal as="li" key={d} delay={i * 45} className="border border-brand/25 px-4 py-2 text-[0.78rem] tracking-[0.06em] text-brand">
                      {d}
                    </Reveal>
                ))}
              </ul>
              <Reveal delay={120}>
                <Link
                  href="/food-drink"
                  className="mt-10 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
                >
                  料理とドリンクを詳しく見る
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
