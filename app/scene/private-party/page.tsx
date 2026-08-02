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

const PATH = "/scene/private-party";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "利用シーン", path: "/scene" },
  { name: "貸切パーティー", path: PATH },
];

const TITLE = "新宿の屋上を貸切パーティーに｜50名〜300名の貸切対応";
const DESCRIPTION =
  "新宿で貸切パーティーの会場をお探しの方へ。東新宿駅から徒歩2分の屋上テラスは50名から300名までの貸切に対応。着席250名・立食300名、カラオケを備えたVIPルームもあり、飲み放題付きコースは3,980円からです。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/terrace-night-party-tables.jpg",
  imageAlt: "照明が灯る夜のテラスに並んだテーブル席",
  keywords: ["新宿 貸切", "新宿 貸切パーティー", "新宿 ビアガーデン 貸切", "新宿 100人 宴会"],
});

const FAQS: Faq[] = [
  {
    q: "貸切は何名から相談できますか？",
    a: "50名以上から貸切のご相談が可能です。上限は300名で、着席の場合は250名までとなります。ご希望の人数と日程をお伝えいただくと、ご案内がスムーズです。",
  },
  {
    q: "100名規模のパーティーでも入れますか？",
    a: "対応可能な人数です。仕切りのないワンフロアのため、100名規模でも立食と着席を組み合わせて配置できます。具体的なレイアウトは予約時に店舗へご相談ください。",
  },
  {
    q: "カラオケは使えますか？",
    a: "カラオケを備えたVIPルーム（限定1室）があります。貸切時の利用可否や利用条件は、ご予約時に店舗へご確認ください。",
  },
  {
    q: "立食と着席のどちらもできますか？",
    a: "どちらも可能です。着席で250名、立食で300名まで対応しています。人数と進行内容に応じて組み合わせることもできます。",
  },
  {
    q: "貸切のときの料金はどうなりますか？",
    a: "料理はBBQコース（飲み放題付き3,980円〜）が基準になります。貸切時の最低利用金額や条件は日程・人数によって変わるため、店舗（080-6953-3136）へお問い合わせください。",
  },
  {
    q: "キャンセルや人数変更はいつまでできますか？",
    a: "ホットペッパーグルメの店舗ページには、当日0時以降のキャンセルから料金が発生する旨が記載されています。貸切の場合は条件が異なる可能性があるため、ご予約時に必ずご確認ください。",
  },
];

export default function PrivatePartyPage() {
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
            image: "/images/terrace-night-party-tables.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Private Party"
        title="屋上を、まるごと使う日。"
        lead="50名から300名まで。仕切りのないワンフロアなので、着席と立食を組み合わせた大規模なパーティーも屋上ひとつで完結します。"
        image="/images/terrace-night-party-tables.jpg"
        alt="照明が灯る夜のテラスに並んだテーブル席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿で貸切にできるビアガーデンはありますか？"
        facts={[
          { label: "貸切", value: "50名〜300名で相談可" },
          { label: "着席／立食", value: "着席250名／立食300名" },
          { label: "個室・VIP", value: "個室エリア／カラオケ付きVIPルーム" },
          { label: "コース", value: "飲み放題付き 3,980円〜" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）は、50名以上から貸切のご相談を承っています。着席250名・立食300名まで対応しており、仕切りのないワンフロアのため、100名を超える規模でも同じ空間にまとまります。
        </p>
        <p>
          カラオケを備えたVIPルーム（限定1室）や、10〜30名向けの個室エリアもあります。東新宿駅A1出口から徒歩2分、営業は11:30から23:45まで。日中の貸切から夜のパーティーまで対応できる時間設定です。
        </p>
      </AnswerBlock>

      {/* ---------- 使える空間 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Spaces"
            className="max-w-3xl"
            lead="貸切時に使えるエリアです。人数と進行内容に合わせて組み合わせられます。"
          >
            貸切で使えるエリア
          </SectionHeading>

          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {[
              [
                "大型屋上テラス",
                "/images/terrace-day-wide.jpg",
                "約300席が広がる大型ルーフトップテラス",
                "頭上をさえぎるもののないオープンエア。ロングテーブルを連結すれば端まで見渡せるため、挨拶や乾杯の進行がしやすい配置になります。",
              ],
              [
                "屋根付きエリア",
                "/images/terrace-covered-counter-day.jpg",
                "屋根の下にカウンターとテーブルが並ぶエリア",
                "日差しの強い時間帯や天候が読めない日に。屋根のあるエリアを含めて配置を組めます。",
              ],
              [
                "VIPルーム・個室エリア",
                "/images/tiki-bar-counter.jpg",
                "茅葺き屋根のバーカウンターとドリンクの黒板メニュー",
                "カラオケを備えたVIPルーム（限定1室）と、10〜20名・20〜30名の個室エリア。二次会や来賓の控えとしても使えます。",
              ],
            ].map(([title, src, alt, body], i) => (
              <Reveal key={title} delay={i * 80}>
                <article>
                  <div className="reveal-zoom relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      loading="lazy"
                      quality={65}
                      sizes="(max-width: 768px) 100vw, 31vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-[1.05rem] text-ink">{title}</h3>
                  <p className="mt-2.5 text-[0.85rem] leading-[1.95] text-ink-soft">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 貸切の条件 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Conditions"
            className="max-w-3xl"
            lead="掲載情報で確認できる範囲をまとめました。日程や時間帯によって条件が変わるため、詳細は店舗へご相談ください。"
          >
            貸切の条件と、確認しておくこと
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["項目", "内容"]}
              rows={[
                ["貸切可能人数", SHOP.charter],
                ["収容人数", SHOP.seatsDetail],
                ["個室・VIP", SHOP.privateRoom],
                ["料理", "BBQコース（飲み放題付き3,980円〜）"],
                ["飲み放題時間", "2時間／2.5時間／3時間（コースにより異なる）"],
                ["営業時間", `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）`],
                ["支払い方法", SHOP.payment],
                ["最寄り駅", "東新宿駅A1出口から徒歩2分ほか3駅"],
              ]}
              note={`貸切時の最低利用金額・時間帯の条件は掲載情報では確認できません。ご希望の日程と人数をお伝えのうえ、店舗（${SHOP.telShop}）へお問い合わせください。`}
            />
          </div>

          <Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                ["相談の流れ", "希望日程・人数・開始時間・おおよその予算を伝えます。空き状況と対応可否をご案内します。"],
                ["予約時に決めること", "コース、飲み放題の時間、席のレイアウト、進行に必要な設備（VIPルームの利用など）。"],
                ["キャンセル規定", "ホットペッパーグルメには当日0時以降のキャンセルから料金が発生する旨が記載されています。貸切は条件が異なる場合があるため、予約時にご確認ください。"],
              ].map(([t, b]) => (
                <div key={t} className="border-t border-brand/20 pt-6">
                  <h3 className="text-[1rem] text-ink">{t}</h3>
                  <p className="mt-3 text-[0.85rem] leading-[2] text-ink-soft">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-10 max-w-3xl border-l-2 border-brand/40 pl-5 text-[0.8rem] leading-[1.95] text-ink-soft">
              {NOTES.price}
            </p>
          </Reveal>
        </div>
      </section>

      <PageFaq
        items={FAQS}
        heading="貸切について、よくあるご質問"
        lead="ご相談前に多くいただくご質問をまとめました。"
        tone="paper"
      />

      <RelatedLinks
        lead="人数や目的が近いページもあわせてご覧ください。"
        items={[
          {
            href: "/scene/company-party",
            label: "新宿で大人数の会社宴会を開く幹事の方へ",
            description: "人数別の席の組み方と、予約前に決めておく6項目をまとめています。",
          },
          {
            href: "/guide/large-group-checklist",
            label: "大人数の宴会で幹事が確認するチェックリスト",
            description: "予約から当日までにやることを、時系列で整理したガイドです。",
          },
          {
            href: "/space",
            label: "屋上テラスと個室エリアの様子を見る",
            description: "席のタイプごとの写真と、昼夜で変わる雰囲気を紹介しています。",
          },
          {
            href: "/course/churrasco",
            label: "串焼きシュラスコBBQコースの内容を見る",
            description: "その場でカットする演出があり、大人数のテーブルほど盛り上がるコースです。",
          },
          {
            href: "/course",
            label: "BBQコース4種類の料金と品数を比較する",
            description: "予算と滞在時間からコースを選べるよう、一覧にまとめています。",
          },
          {
            href: "/access",
            label: "K-SQUARE屋上までの行き方を確認する",
            description: "4駅それぞれのルートと、建物入口からの上がり方を案内しています。",
          },
        ]}
      />

      <SeoPageCta
        position="private-party-bottom"
        heading="貸切のご相談は、日程と人数から。"
        lead="ご予約は食べログの予約ページから。貸切の可否や条件については、店舗（080-6953-3136）へ直接お問い合わせください。"
        image="/images/terrace-night-cityscape.jpg"
      />
    </>
  );
}
