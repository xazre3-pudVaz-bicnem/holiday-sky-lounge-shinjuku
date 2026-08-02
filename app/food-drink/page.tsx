import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ReserveCta from "@/components/sections/ReserveCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { lastModifiedOf } from "@/lib/routes";
import { ArrowIcon } from "@/components/ui/Icons";
import { PHOTO_NOTE } from "@/data/courses";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "料理・ドリンク", path: "/food-drink" },
];

export const metadata = buildMetadata({
  title: "新宿のBBQで食べられる肉｜シュラスコ・サムギョプサル・海鮮",
  description:
    "新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」の料理とドリンク。ブラックアンガス牛のリブ・ランプ・ハラミ、サムギョプサル、シュラスコ、ガーリックシュリンプなどの手ぶらBBQと、生ビール・ボトルビール・カクテルが選べる飲み放題をご紹介します。",
  path: "/food-drink",
  image: "/images/churrasco-carving.jpg",
  keywords: ["新宿 シュラスコ", "新宿 サムギョプサル", "新宿 BBQ 肉", "新宿 ビアガーデン 料理"],
});

const MEAT = [
  {
    name: "ブラックアンガス牛",
    body: "リブ、ランプ、ハラミ。部位ごとに脂の入り方が違うので、焼き加減を変えながら食べ比べるのがおすすめです。アメリカンBBQコースでは、この3種がまとめて登場します。",
  },
  {
    name: "BBQポーク",
    body: "厚めに切った豚肉を、じっくり焼いて脂を落としてから。表面が飴色になったあたりが食べごろです。",
  },
  {
    name: "スパイシーチキン",
    body: "スパイスをまとわせた鶏肉。皮目から焼くと香りが立ちます。ビールとの相性がいちばんわかりやすい一皿。",
  },
  {
    name: "グリルソーセージ",
    body: "網の上で皮がぱんと張ってきたら焼き上がり。噛んだ瞬間に肉汁が出てくる、あの瞬間のための一本です。",
  },
  {
    name: "サムギョプサル",
    body: "韓国スタイルの厚切り豚バラ。鉄板でゆっくり焼いて、脂が透き通ってきたらカット。新大久保が隣という土地柄を活かした一皿です。",
  },
  {
    name: "シュラスコ",
    body: "ピッカーニャ（イチボ）、サーロイン、ランプを串のまま焼き上げ、その場でカットしてお皿へ。断面から立ちのぼる湯気ごと味わってください。",
  },
];

const SEAFOOD = [
  {
    name: "ガーリックシュリンプ",
    body: "殻ごと網にのせて、にんにくとバターの香りを立たせながら。ハワイの屋台で食べるような食べ方で。",
  },
  {
    name: "焼きイカ",
    body: "醤油が焦げる匂いは、それ自体がごちそうです。反り返ってきたら食べごろ。",
  },
  {
    name: "海鮮グリル",
    body: "コースによって内容が変わります。肉のあいだにはさむと、味の緩急がついて最後まで飽きません。",
  },
  {
    name: "グリル野菜",
    body: "焼きとうもろこし、季節の野菜など。網の隅でゆっくり火を通しておくと、いいタイミングで甘くなります。",
  },
  {
    name: "ガーリックライス",
    body: "〆はこれで。肉の脂が残った鉄板で作ると、いちばんおいしくなります。",
  },
  {
    name: "サラダ・前菜",
    body: "コースによっては前菜のカルパッチョやサラダビュッフェが付きます。焼き始める前の一皿として。",
  },
];

const DRINK_GROUPS = [
  {
    en: "Beer",
    title: "ビール",
    items: ["生ビール", "ボトルビール（コロナ・エキストラ）", "ボトルビール（カールスバーグ ほか）"],
    body: "屋上でいちばん出るのは、やはり最初の一杯。冷えたジョッキで運ばれてくる生ビールと、氷を張ったバケットから抜いて飲むボトルビール。どちらも飲み放題に含まれます。",
    image: "/images/corona-ice-bucket.jpg",
    alt: "氷を張ったアイスバケットで冷やされたボトルビール",
  },
  {
    en: "Cocktail",
    title: "カクテル・ワイン",
    items: ["トロピカルカクテル", "ハイボール・焼酎", "ワイン", "スパークリングワイン"],
    body: "青やオレンジの南国らしいカクテルは、明るいうちに頼むと写真がよく映えます。誕生日や記念日のHAPPYコースには、乾杯用のスパークリングワインが付きます。",
    image: "/images/cocktails-row-fence.jpg",
    alt: "レモンやミントを添えたトロピカルカクテル",
  },
  {
    en: "Soft Drink",
    title: "ソフトドリンク",
    items: ["ソフトドリンク各種"],
    body: "お酒を飲まない方や、お子様連れの方も安心してご利用いただけるよう、飲み放題にはソフトドリンクも含まれています。お子様は5歳以下無料、6〜10歳は半額です。",
    image: "/images/cheers-corona-daytime.jpg",
    alt: "日差しの入るテラスで飲み物を合わせて乾杯する手元",
  },
];

export default function FoodDrinkPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/food-drink", name: metadata.title as string, description: metadata.description as string, lastModified: lastModifiedOf("/food-drink"), image: "/images/churrasco-carving.jpg", hasBreadcrumb: true }),
          breadcrumbJsonLd(CRUMBS, "/food-drink"),
        ]}
      />
      <PageHero
        en="Food & Drink"
        title="火を囲み、焼きたてを頬張る。"
        lead="下ごしらえを済ませた食材が、焼くだけの状態で運ばれてきます。網にのせて、脂がはぜる音を聞きながら数分。焼きたてをそのまま口へ運ぶ、それがいちばんおいしい食べ方です。"
        image="/images/churrasco-carving.jpg"
        alt="焼き上げたピッカーニャを串からその場でカットするシュラスコ"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- 肉 ---------- */}
      <section className="paper py-20 lg:py-32">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                en="Grill"
                lead="コースによって組み合わせは変わりますが、この屋上で焼けるのはこんな顔ぶれです。"
              >
                肉。
                <br />
                焼く音まで、ごちそう。
              </SectionHeading>
              <Reveal delay={200}>
                <div className="reveal-zoom relative mt-12 aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/bbq-steak-pork-platter.jpg"
                    alt="焼き上げたステーキと厚切り豚バラ、グリル野菜を並べたプレート"
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
              <div className="border-t border-brand/25">
                {MEAT.map((m, i) => (
                  <Reveal key={m.name} delay={Math.min(i, 4) * 50}>
                    <article className="border-b border-line py-7">
                      <h3 className="text-[1.15rem] leading-[1.7] text-ink">{m.name}</h3>
                      <p className="mt-3 text-[0.87rem] leading-[2] text-ink-soft">{m.body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 海鮮・野菜 ---------- */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 lg:order-2">
              <SectionHeading
                en="Seafood & Side"
                lead="肉のあいだに海鮮と野菜をはさむと、最後の一皿まで箸が止まりません。"
              >
                海鮮と、野菜と、〆のごはん。
              </SectionHeading>
              <div className="mt-10 border-t border-brand/25">
                {SEAFOOD.map((m, i) => (
                  <Reveal key={m.name} delay={Math.min(i, 4) * 50}>
                    <article className="border-b border-line py-7">
                      <h3 className="text-[1.15rem] leading-[1.7] text-ink">{m.name}</h3>
                      <p className="mt-3 text-[0.87rem] leading-[2] text-ink-soft">{m.body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal variant="clip" className="lg:col-span-5 lg:order-1">
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/bbq-mixed-grill-platter.jpg"
                  alt="海老・チキン・ソーセージ・グリル野菜を盛り合わせたBBQプレート"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- ドリンク ---------- */}
      <section className="bg-ivory-deep py-20 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            en="Drink"
            className="max-w-3xl"
            lead="ほとんどのBBQコースに2時間以上の飲み放題が付きます（コースにより2時間・2.5時間・3時間）。料理は単品で頼みたい日には、2時間プレミアム飲み放題プラン（¥1,980）だけの利用も可能です。"
          >
            新宿の夜景と楽しむ、
            <br className="hidden sm:block" />
            飲み放題。
          </SectionHeading>

          <div className="mt-14 grid gap-x-6 gap-y-14 lg:mt-20 lg:grid-cols-3">
            {DRINK_GROUPS.map((g, i) => (
              <Reveal key={g.en} delay={i * 90}>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.image}
                    alt={g.alt}
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 31vw"
                    className="object-cover"
                  />
                </div>
                <p className="u-eyebrow mt-6 text-brand">{g.en}</p>
                <h3 className="mt-3 text-[1.2rem] text-ink">{g.title}</h3>
                <p className="mt-3 text-[0.85rem] leading-[2] text-ink-soft">{g.body}</p>
                <ul className="mt-5 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5 text-[0.82rem] text-ink">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-sun" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 max-w-3xl border-l-2 border-brand/40 pl-5 text-[0.8rem] leading-[1.95] text-ink-soft">
              {PHOTO_NOTE}
              料理・ドリンクの内容はコースおよび時期により変わります。最新のコース内容と料金は予約ページをご確認ください。
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Link
              href="/course"
              className="mt-8 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
            >
              BBQコースの一覧を見る
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
