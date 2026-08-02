import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnswerBlock from "@/components/seo/AnswerBlock";
import DataTable from "@/components/seo/DataTable";
import PageFaq from "@/components/seo/PageFaq";
import RelatedLinks from "@/components/seo/RelatedLinks";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { lastModifiedOf } from "@/lib/routes";
import { NOTES } from "@/lib/site-config";
import { PHOTO_NOTE } from "@/data/courses";
import type { Faq } from "@/data/content";

const PATH = "/scene/girls-party";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "利用シーン", path: "/scene" },
  { name: "女子会", path: PATH },
];

const TITLE = "新宿のテラスで女子会｜屋上BBQと飲み放題で写真も映える";
const DESCRIPTION =
  "新宿で女子会の場所をお探しの方へ。東新宿駅から徒歩2分の屋上テラスで、韓国BBQやトロピカルカクテルを楽しめます。飲み放題付きコースは3,980円から、サムギョプサル＆K-BBQは4,480円。ヤシの木とガーランドライトが背景になり写真も撮りやすい席です。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/cocktails-lineup.jpg",
  imageAlt: "青や赤のトロピカルカクテル6杯を並べた木のテーブル",
  keywords: ["新宿 ビアガーデン 女子会", "新宿 テラス 女子会", "新宿 BBQ 女子会", "新宿 女子会 飲み放題"],
});

const FAQS: Faq[] = [
  {
    q: "女子会向けのコースはありますか？",
    a: "サムギョプサル＆K-BBQコース（全16品・2時間飲み放題付・4,480円）は韓国料理を目当てに集まる女子会に向いています。肉と海鮮のスタンダードBBQ（全13品・3,980円）は、量を抑えたい場合の選択肢です。",
  },
  {
    q: "何名から予約できますか？",
    a: "少人数から大人数まで対応しています。10〜20名、20〜30名の個室エリアもあるため、人数が増えた場合もまとまった席をご用意できます。",
  },
  {
    q: "写真を撮りやすい席はありますか？",
    a: "ヤシの木、ガーランドライト、HOLIDAYの壁画など、背景になる要素が屋上のあちこちにあります。ご希望の雰囲気があれば、ご予約時にお伝えいただくと席のご相談がしやすくなります。",
  },
  {
    q: "何時ごろに予約するときれいに撮れますか？",
    a: "日没前後の30分ほどは、空が青からオレンジへ変わっていく時間帯です。この時間に合わせると、同じ席でも写真の印象が変わります。日没時刻は季節によって変わるため、当日の時刻をご確認ください。",
  },
  {
    q: "お酒が飲めない人も一緒に楽しめますか？",
    a: "飲み放題にはソフトドリンクも含まれています。カクテルやビールを飲まない方も同じコースでご利用いただけます。",
  },
  {
    q: "においが服につきませんか？",
    a: "屋上のオープンエアのテラス席のため、煙が上に抜けていきます。屋内の焼肉店と比べるとにおいは残りにくい環境ですが、気になる場合は上着を用意しておくと安心です。",
  },
];

export default function GirlsPartyPage() {
  const modified = lastModifiedOf(PATH);

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            lastModified: modified,
            image: "/images/cocktails-lineup.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Girls Party"
        title="韓国BBQと、色のあるカクテルと。"
        lead="新大久保が隣という立地を活かしたサムギョプサル。ヤシの木とガーランドライトが背景に入るテラス席で、写真を撮りながら過ごす女子会に。"
        image="/images/cocktails-lineup.jpg"
        alt="青や赤のトロピカルカクテル6杯を並べた木のテーブル"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿で女子会に使えるテラスのお店はありますか？"
        facts={[
          { label: "おすすめコース", value: "サムギョプサル＆K-BBQ 4,480円" },
          { label: "飲み放題", value: "2時間（ソフトドリンクも対象）" },
          { label: "最寄り駅", value: "東新宿駅 徒歩2分／新大久保駅 徒歩4分" },
          { label: "個室", value: "10〜20名／20〜30名のエリアあり" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）は、屋上のオープンエアのテラス席で韓国BBQとカクテルを楽しめる店舗です。女子会には、厚切りサムギョプサルを鉄板で焼くK-BBQコース（全16品・2時間飲み放題付・4,480円）がよく合います。
        </p>
        <p>
          新大久保駅から徒歩4分のため、コリアンタウンを歩いたあとの食事にも使えます。飲み放題にはソフトドリンクも含まれるので、飲む人も飲まない人も同じコースで揃えられます。
        </p>
      </AnswerBlock>

      {/* ---------- 写真が撮りやすい理由 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Photogenic"
            className="max-w-3xl"
            lead="どこにカメラを向けても背景が成立するので、席の位置で悩む時間が減ります。"
          >
            背景に困らない屋上
          </SectionHeading>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {[
              ["ヤシの木とガーランドライト", "/images/terrace-night-palm.jpg", "ヤシの木と照明に囲まれた夜の座席", "日が落ちると天井いっぱいのライトが灯ります。逆光にならない位置に座ると、料理も人もきれいに写ります。"],
              ["色のあるカクテル", "/images/cocktails-row-fence.jpg", "青や赤のトロピカルカクテル6杯を並べた木のテーブル", "青やオレンジのカクテルは、明るい時間帯に頼むと発色が出ます。並べて撮るだけで画になります。"],
              ["HOLIDAYの壁画とネオン", "/images/neon-cheers-sign.jpg", "グリーンに囲まれた「Cheers」のネオンサイン", "壁画やネオンサインの前は定番の撮影スポット。人数が多いときの集合写真にも使えます。"],
            ].map(([t, src, alt, body], i) => (
              <Reveal key={t} delay={i * 80}>
                <article>
                  <div className="reveal-zoom relative aspect-[3/2] overflow-hidden">
                    <Image src={src} alt={alt} fill loading="lazy" quality={65} sizes="(max-width: 768px) 100vw, 31vw" className="object-cover" />
                  </div>
                  <h3 className="mt-5 text-[1.05rem] text-ink">{t}</h3>
                  <p className="mt-2.5 text-[0.85rem] leading-[1.95] text-ink-soft">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-[0.76rem] text-ink-soft">{PHOTO_NOTE}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 人数と時間 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Plan" className="max-w-3xl" lead="人数と目的から、コースと時間帯を決めるための目安です。">
            女子会の組み立て方
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["人数", "席の目安", "向いているコース"]}
              rows={[
                ["2〜4名", "テラスの丸テーブル／カップルシート", "スタンダードBBQ 3,980円"],
                ["5〜10名", "テラスのテーブルを連結", "サムギョプサル＆K-BBQ 4,480円"],
                ["10〜20名", "個室エリア、またはロングテーブル", "サムギョプサル＆K-BBQ 4,480円"],
                ["20〜30名", "個室エリア／ロングテーブル1列", "コースは人数で相談"],
              ]}
              note={NOTES.price}
            />
          </div>

          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">時間帯の選び方</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  明るいうちから始めたいなら11:30以降。写真を重視するなら、日没の30分前あたりに乾杯できる時間で予約すると、青空・夕焼け・夜景の3つを1回で撮れます。飲み放題は2時間なので、日没時刻から逆算して開始時間を決めるのがおすすめです。
                </p>
              </div>
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">誕生日を兼ねるとき</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  乾杯のスパークリングワインが付く「HAPPYコース」（全13品・5,500円）があります。サプライズやプレートのご相談は、ご予約時に店舗へお問い合わせください。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageFaq items={FAQS} heading="女子会について、よくあるご質問" lead="ご予約前に多くいただくご質問をまとめました。" tone="paper" />

      <RelatedLinks
        lead="コースやエリアからお探しの方はこちらもご覧ください。"
        items={[
          {
            href: "/",
            label: "新宿のビアガーデン HOLIDAY SKY LOUNGE 新宿のトップページ",
            description: "約300席の屋上テラス、手ぶらBBQのコース、アクセスまでをまとめて確認できます。",
          },
          { href: "/course/samgyeopsal", label: "厚切りサムギョプサルのK-BBQコースを見る", description: "焼き方や付け合わせ、飲み放題の中身まで詳しく紹介しています。" },
          { href: "/area/shin-okubo", label: "新大久保から歩けるビアガーデンをお探しの方へ", description: "コリアンタウンからのアクセスと、散策後に立ち寄る使い方をまとめています。" },
          { href: "/food-drink", label: "カクテルやビールなど飲み放題の内容を見る", description: "生ビール4種類とボトルビール、カクテルまでの一覧です。" },
          { href: "/guide/best-time-for-night-view", label: "夜景がいちばんきれいに見える時間帯", description: "写真を撮る前提で予約時間を決めるためのガイドです。" },
          { href: "/space", label: "テラス席とカップルシートの様子を見る", description: "席のタイプごとの写真と、昼夜で変わる雰囲気を紹介しています。" },
          { href: "/scene/date", label: "夜景の見えるテラスでデートに使う", description: "二人で並んで座れる席と、時間帯の選び方を紹介しています。" },
        ]}
      />

      <SeoPageCta
        position="girls-party-bottom"
        heading="日が沈む時間に、席を取っておく。"
        lead="ご予約は食べログの予約ページから。人数と時間を選ぶだけでお申し込みいただけます。"
        image="/images/terrace-dusk-sunset.jpg"
      />
    </>
  );
}
