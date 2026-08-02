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
import { NOTES, SHOP } from "@/lib/site-config";
import type { Faq } from "@/data/content";

const PATH = "/scene/lunch";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "利用シーン", path: "/scene" },
  { name: "昼飲み・ランチBBQ", path: PATH },
];

const TITLE = "新宿で昼飲み・ランチBBQ｜11:30から屋上テラスで飲み放題";
const DESCRIPTION =
  "新宿で昼から飲める場所をお探しの方へ。東新宿駅から徒歩2分の屋上テラスは11:30から通し営業。ランチ限定のBBQ4種盛りプレートコースは全10品・2時間飲み放題付きで2,980円です。子ども料金の設定もあり、家族での食事にも使えます。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/terrace-daytime-drinking.jpg",
  imageAlt: "日差しの下でパラソルを開いた昼のテラス席",
  keywords: ["新宿 昼飲み", "新宿 ビアガーデン 昼", "新宿 ランチ BBQ", "新宿 昼から飲める"],
});

const FAQS: Faq[] = [
  {
    q: "何時から営業していますか？",
    a: `営業は${SHOP.hours}の通し営業です（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）。11:30から中断なく営業しているため、昼から夜まで続けてご利用いただけます。`,
  },
  {
    q: "ランチ限定のコースはありますか？",
    a: "ランチ限定のBBQ4種盛りプレートコース（全10品・2時間飲み放題付・2,980円）があります。前菜からガーリックライスまで含む構成です。提供時間帯は予約ページでご確認ください。",
  },
  {
    q: "昼でも飲み放題を利用できますか？",
    a: "ご利用いただけます。ランチ限定コースにも2時間の飲み放題が付いています。料理を単品で頼みたい場合は、2時間プレミアム飲み放題プラン（1,980円）だけの利用も可能です。",
  },
  {
    q: "子ども連れでも利用できますか？",
    a: "お子様料金の設定があり、5歳まで無料、6〜10歳は半額、11歳以上は通常料金です。なお予約サイトによってはご利用条件の記載が異なる場合がありますので、ご予約時に店舗へご確認ください。",
  },
  {
    q: "日差しを避けられる席はありますか？",
    a: "パラソル席のほか、屋根のあるエリアもあります。日差しが気になる場合は、ご予約時にご相談ください。",
  },
  {
    q: "昼と夜で料金は変わりますか？",
    a: "ランチ限定コース（2,980円）は昼の時間帯向けのプランです。そのほかのBBQコースは3,980円からで、時間帯による料金の違いは掲載情報では確認できません。詳細は予約ページでご確認ください。",
  },
];

export default function LunchPage() {
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
            image: "/images/terrace-daytime-drinking.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Lunch & Daytime"
        title="11:30から、明るいうちに始める。"
        lead="青空とパラソルの下でBBQ。ランチ限定コースは全10品・2時間飲み放題付きで2,980円。昼から夜まで通し営業なので、そのまま長居もできます。"
        image="/images/terrace-daytime-drinking.jpg"
        alt="日差しの下でパラソルを開いた昼のテラス席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿で昼から飲める場所を探しています。"
        facts={[
          { label: "営業開始", value: "11:30（通し営業）" },
          { label: "ランチ限定コース", value: "2,980円（全10品・2時間飲み放題付）" },
          { label: "飲み放題のみ", value: "1,980円（2時間プレミアム）" },
          { label: "お子様料金", value: "5歳まで無料／6〜10歳半額" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）は11:30から23:45までの通し営業です。昼の時間帯もそのまま営業しているため、ランチからそのまま夕方まで続けて過ごせます。
        </p>
        <p>
          ランチ限定のBBQ4種盛りプレートコースは、全10品・2時間飲み放題付きで2,980円。料理を単品で頼みたい場合は、2時間プレミアム飲み放題プラン（1,980円）だけの利用もできます。東新宿駅A1出口から徒歩2分です。
        </p>
      </AnswerBlock>

      {/* ---------- 昼の使い方 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Daytime" className="max-w-3xl" lead="夜とは違う、昼だけの過ごし方があります。">
            昼の屋上でできること
          </SectionHeading>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {[
              ["休日の昼飲み", "/images/terrace-day-palm-umbrella.jpg", "青空の下にパラソルとヤシの木が並ぶ昼のテラス", "パラソルを開けば日陰ができ、風が抜けます。予定のない休日に、明るいうちからビールを開けるための場所として。"],
              ["家族での食事", "/images/terrace-day-family.jpg", "丸テーブルとパラソルが並ぶ昼の座席", "お子様料金の設定があり、5歳まで無料・6〜10歳は半額です。屋外なので、声が響きにくいのも利用しやすい点です。"],
              ["写真を撮る", "/images/terrace-day-blue-sky.jpg", "青空とパラソルが広がる昼のテラス", "光がまわる時間帯は、料理も空間もはっきり写ります。夜とは違う色の写真が撮れます。"],
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
        </div>
      </section>

      {/* ---------- 昼と夜の比較 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Compare" className="max-w-3xl" lead="どちらの時間帯に予約するか迷ったときの判断材料です。">
            昼と夜、どちらを選ぶか
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["", "昼（11:30〜）", "夜（日没〜23:45）"]}
              rows={[
                ["景色", "青空とパラソル、緑の床", "街明かりとガーランドライト"],
                ["コース", "ランチ限定 2,980円ほか", "BBQコース 3,980円〜"],
                ["混み具合の傾向", "比較的ゆったり", "宴会が入り賑やかになりやすい"],
                ["向いている利用", "家族連れ・休日の昼飲み・写真", "会社宴会・デート・友人との飲み会"],
                ["注意点", "日差し（パラソル・屋根付きエリアあり）", "風で体感温度が下がることがある"],
              ]}
              note={NOTES.price}
            />
          </div>
        </div>
      </section>

      <PageFaq items={FAQS} heading="昼飲み・ランチ利用について、よくあるご質問" lead="ご予約前に多くいただくご質問をまとめました。" tone="paper" />

      <RelatedLinks
        lead="コースや空間をもっと知りたい方はこちらもご覧ください。"
        items={[
          { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "ランチ限定コースを含む全プランを一覧にまとめています。" },
          { href: "/shinjuku-bbq", label: "新宿で手ぶらBBQができる場所を探している方へ", description: "食材・機材・後片付けの範囲と、コースの選び方をまとめた総合ページです。" },
          { href: "/space", label: "昼と夜で表情が変わる屋上テラスを見る", description: "同じ席が時間帯でどう変わるかを写真で比較できます。" },
          { href: "/guide/what-to-bring", label: "手ぶらBBQの持ち物と服装のガイド", description: "屋上で過ごすときにあると安心なものをまとめています。" },
          { href: "/food-drink", label: "焼ける肉と海鮮、ドリンクの一覧を見る", description: "コースをまたいで提供している食材とドリンクをまとめています。" },
          { href: "/access", label: "東新宿駅から店舗までのアクセスと入口の場所", description: "屋上までの上がり方を含めて案内しています。" },
        ]}
      />

      <SeoPageCta
        position="lunch-bottom"
        heading="明るいうちの席を、押さえておく。"
        lead="ご予約は食べログの予約ページから。ランチ限定コースの提供時間帯もあわせてご確認いただけます。"
        image="/images/terrace-day-wide.jpg"
      />
    </>
  );
}
