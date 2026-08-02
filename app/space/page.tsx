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
import { SHOP } from "@/lib/site-config";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "空間", path: "/space" },
];

export const metadata = buildMetadata({
  title: "新宿の夜景が見えるテラス席｜屋上レストランの空間紹介",
  description:
    "新宿・東新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」の空間紹介。約300席の大型ルーフトップテラス、ソファー席、カップルシート、VIPエリア、大人数の宴会エリアまで。昼と夜で表情の変わる屋上の様子をご覧ください。",
  path: "/space",
  image: "/images/rooftop-cityscape-dusk.jpg",
  keywords: ["新宿 夜景 ビアガーデン", "新宿 テラス", "新宿 屋上レストラン"],
});

const AREAS = [
  {
    en: "Terrace",
    title: "大型屋上テラス",
    body: "ビル1棟分の屋上をまるごと使った、仕切りのないワンフロア。約300席が同じ空の下に並びます。天然芝を思わせるグリーンの床と、赤・黄のウッドフェンス。頭上をさえぎるものがないので、視界の抜け方が屋内の店舗とはまったく違います。",
    image: "/images/terrace-day-wide.jpg",
    alt: "約300席が広がる大型ルーフトップテラス",
  },
  {
    en: "Green",
    title: "グリーンに囲まれたリゾート空間",
    body: "ヤシの木、吊り下げたグリーン、茅葺き屋根のバーカウンター。ハワイアンリゾートを思わせる要素を屋上に持ち込むことで、エレベーターを降りた瞬間に空気が切り替わるようにしています。植栽の緑と、ロゴにも使っている深い緑が、この場所の基調色です。",
    image: "/images/terrace-green-umbrella-day.jpg",
    alt: "植栽とパラソルに囲まれたリゾート風のテラス",
  },
  {
    en: "Sofa",
    title: "ソファー席・カップルシート",
    body: "テラスの一角には、腰を沈めて長居できるソファー席と、二人で並んで景色を眺められるカップルシートがあります。テーブルを挟んで向かい合うのではなく、同じ方向を向いて座れるので、デートや記念日の利用に向いています。",
    image: "/images/terrace-sofa-seat-sunset.jpg",
    alt: "夕暮れのテラスに置かれたソファー席とベンチシート",
  },
  {
    en: "Banquet",
    title: "大人数宴会エリア・VIPルーム",
    body: "ロングテーブルを連結すれば、着席250名・立食300名まで対応できます。10〜30名向けの個室エリアや、カラオケを備えたVIPルームもご用意。50名以上のご利用なら、貸切のご相談も承っています。",
    image: "/images/banquet-long-table-day.jpg",
    alt: "連結したロングテーブルが続く大人数向けのエリア",
  },
  {
    en: "Bar",
    title: "バーカウンター",
    body: "茅葺き屋根のバーカウンターは、屋上のちょうど中心。少人数なら、ここでカウンター飲みという使い方もできます。屋根付きなので、日差しの強い時間帯の避難場所にもなります。",
    image: "/images/tiki-bar-counter.jpg",
    alt: "茅葺き屋根のバーカウンターとドリンクの黒板メニュー",
  },
  {
    en: "Counter",
    title: "ハイテーブル・カウンター席",
    body: "スツールを並べたハイテーブルは、立ち飲みに近い距離感で使えます。人数が読めない二次会や、軽く一杯だけという日にも。フェンス側の席なら、街を見下ろしながら飲めます。",
    image: "/images/counter-table-stools.jpg",
    alt: "スツールを並べたハイテーブルのカウンター席",
  },
];

export default function SpacePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/space", name: metadata.title as string, description: metadata.description as string, lastModified: lastModifiedOf("/space"), image: "/images/rooftop-cityscape-dusk.jpg", hasBreadcrumb: true }),
          breadcrumbJsonLd(CRUMBS, "/space"),
        ]}
      />
      <PageHero
        en="Space"
        title="新宿の夜景を眺める、天空のリゾートラウンジ。"
        lead={`K-SQUAREの屋上に広がる${SHOP.seats}のワンフロア。青空の下で過ごす昼と、街の灯りに囲まれる夜。同じ席なのに、時間帯で印象がまるで変わります。`}
        image="/images/rooftop-cityscape-dusk.jpg"
        alt="日没後の新宿方面を見渡す屋上テラスからの眺め"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- 昼と夜 ---------- */}
      <section className="paper py-20 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            en="Day & Night"
            className="max-w-3xl"
            lead="営業は11:30から23:45まで。同じテラスが、時間の経過とともに別の場所になっていきます。"
          >
            昼と夜で、
            <br className="hidden sm:block" />
            表情が変わる屋上。
          </SectionHeading>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
            <Reveal variant="clip">
              <figure>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/terrace-day-blue-sky.jpg"
                    alt="青空とパラソルが広がる昼のテラス"
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-0 top-0 bg-white/92 px-4 py-2">
                    <span className="u-en text-[0.7rem] text-brand">11:30 — DAYTIME</span>
                  </figcaption>
                </div>
                <div className="mt-5 space-y-4 text-[0.87rem] leading-[2] text-ink-soft">
                  <p>
                    日中の屋上は、とにかく明るい。パラソルを開いて、緑の床に日差しが落ちて、まるで南国のプールサイドのような色になります。風が抜けるので、真夏でも日陰に入れば過ごせます。
                  </p>
                  <p>
                    ランチ限定のBBQコース（全10品・2時間飲み放題付・¥2,980）もあるので、休日の昼飲みや、家族での食事にもご利用いただけます。写真を撮るなら、光がまわるこの時間帯がおすすめです。
                  </p>
                </div>
              </figure>
            </Reveal>

            <Reveal variant="clip" delay={140}>
              <figure>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/terrace-night-string-lights.jpg"
                    alt="ガーランドライトが灯る夜のテラス席"
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-0 top-0 bg-ember/85 px-4 py-2">
                    <span className="u-en text-[0.7rem] text-sun">— 23:45 NIGHT</span>
                  </figcaption>
                </div>
                <div className="mt-5 space-y-4 text-[0.87rem] leading-[2] text-ink-soft">
                  <p>
                    日が落ちると、天井いっぱいに張ったガーランドライトが一斉に灯ります。眼下には東新宿から新宿方面へ続くビルの窓明かりと、明治通りを流れる車のライト。
                  </p>
                  <p>
                    いちばんきれいなのは、空がまだ青さを残している日没直後の30分ほど。この時間に合わせて予約を取ると、空の色が変わっていく過程をそのまま眺められます。
                  </p>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 夜景ワイド ---------- */}
      <section className="bg-white pt-20 lg:pt-32">
        <div className="container-wide">
          <Reveal variant="clip">
            <div className="reveal-zoom relative aspect-[16/9] overflow-hidden lg:aspect-[21/9]">
              <Image
                src="/images/terrace-night-cityscape.jpg"
                alt="屋上から見渡す新宿方面の街明かりとテラス席とテラス席"
                fill
                loading="lazy"
                quality={65}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- エリア紹介 ---------- */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            en="Seats"
            className="max-w-3xl"
            lead="人数や目的に合わせて、席のタイプを選べます。ご希望がある場合はご予約時にお知らせください。"
          >
            席とエリアのご案内
          </SectionHeading>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <Reveal key={a.en} delay={(i % 3) * 80}>
                <article>
                  <div className="reveal-zoom relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      loading="lazy"
                      quality={65}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 31vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="u-eyebrow mt-6 text-brand">{a.en}</p>
                  <h3 className="mt-3 text-[1.15rem] leading-[1.7] text-ink">{a.title}</h3>
                  <p className="mt-3 text-[0.85rem] leading-[2] text-ink-soft">{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <dl className="mt-16 grid gap-x-10 gap-y-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="u-en text-[0.7rem] text-brand">SEATS</dt>
                <dd className="mt-2 text-[0.88rem] text-ink">
                  {SHOP.seats}
                  <span className="mt-1 block text-[0.76rem] text-ink-soft">{SHOP.seatsDetail}</span>
                </dd>
              </div>
              <div>
                <dt className="u-en text-[0.7rem] text-brand">PRIVATE ROOM</dt>
                <dd className="mt-2 text-[0.88rem] text-ink">
                  10〜30名
                  <span className="mt-1 block text-[0.76rem] text-ink-soft">
                    カラオケ付きVIPルームあり
                  </span>
                </dd>
              </div>
              <div>
                <dt className="u-en text-[0.7rem] text-brand">CHARTER</dt>
                <dd className="mt-2 text-[0.88rem] text-ink">
                  50名〜
                  <span className="mt-1 block text-[0.76rem] text-ink-soft">貸切のご相談を承ります</span>
                </dd>
              </div>
              <div>
                <dt className="u-en text-[0.7rem] text-brand">SMOKING</dt>
                <dd className="mt-2 text-[0.88rem] text-ink">
                  分煙
                  <span className="mt-1 block text-[0.76rem] text-ink-soft">加熱式たばこ限定</span>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="/scene"
                className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                利用シーン別の使い方を見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/access"
                className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                アクセス・行き方を見る
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
