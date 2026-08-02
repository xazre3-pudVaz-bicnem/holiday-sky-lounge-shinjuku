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
import { SHOP } from "@/lib/site-config";
import { findCourse, PHOTO_NOTE } from "@/data/courses";
import type { Faq } from "@/data/content";

const PATH = "/area/shin-okubo";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "エリア", path: "/access" },
  { name: "新大久保", path: PATH },
];

const KOREAN = findCourse("korean")!;

const TITLE = "新大久保から徒歩4分のビアガーデン｜屋上でサムギョプサル";
const DESCRIPTION =
  "新大久保駅から徒歩4分、K-SQUARE屋上のビアガーデン。コリアンタウンを歩いたあとに立ち寄れる距離で、厚切りサムギョプサルのK-BBQコースは全16品・2時間飲み放題付き4,480円。屋外のテラス席なのでにおいが残りにくく、女子会や大人数の食事にも使えます。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/samgyeopsal-set.jpg",
  imageAlt: "サンチュとキムチ、ナムルを添えたサムギョプサルの鉄板",
  keywords: ["新大久保 ビアガーデン", "新大久保 BBQ", "新大久保 サムギョプサル", "新大久保 屋上"],
});

const FAQS: Faq[] = [
  {
    q: "新大久保駅から歩いてどのくらいですか？",
    a: "新大久保駅（JR山手線）から徒歩4分です。住所は東京都新宿区大久保1-8-4「K-SQUARE」の屋上で、コリアンタウンを歩いたあとにそのまま立ち寄れる距離にあります。",
  },
  {
    q: "新大久保でサムギョプサルを食べられますか？",
    a: `厚切りサムギョプサルを鉄板で焼く「サムギョプサル＆K-BBQコース」（全${KOREAN.dishes}品・${KOREAN.drinkMinutes / 60}時間飲み放題付・${KOREAN.price.toLocaleString("ja-JP")}円）をご用意しています。屋上のオープンエアのテラス席で焼くスタイルです。`,
  },
  {
    q: "屋内の韓国料理店と何が違いますか？",
    a: "屋外の屋上テラスで焼くため、煙が上に抜けていきます。屋内の店舗と比べると、においが髪や服に残りにくいのが違いです。街明かりを眺めながら食べられる点も、屋上ならではです。",
  },
  {
    q: "大人数でも入れますか？",
    a: "着席250名・立食300名まで対応しています。10〜20名、20〜30名の個室エリアもあり、50名以上で貸切のご相談も可能です。",
  },
  {
    q: "新大久保で食べ歩きをしたあとでも利用できますか？",
    a: "営業は11:30から23:45までの通し営業です（フードL.O. 23:15）。夕方から夜まで途中で閉まる時間がないため、散策のあとの時間に合わせてご利用いただけます。",
  },
  {
    q: "新宿方面へ移動しやすいですか？",
    a: "新宿駅東口まで徒歩6分、西武新宿駅まで徒歩3分、東新宿駅まで徒歩2分です。食事のあとに新宿方面へ移動する場合も歩いて出られます。",
  },
];

export default function ShinOkuboPage() {
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
            image: "/images/samgyeopsal-set.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Shin-Okubo"
        title="コリアンタウンから、屋上へ。"
        lead="新大久保駅から徒歩4分。街を歩いたあとに、厚切りサムギョプサルを屋上の鉄板で焼く。屋外なので、においを気にせず次の予定へ進めます。"
        image="/images/samgyeopsal-set.jpg"
        alt="サンチュとキムチ、ナムルを添えたサムギョプサルの鉄板"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新大久保の近くでサムギョプサルが食べられる屋上のお店はありますか？"
        facts={[
          { label: "新大久保駅から", value: "徒歩4分" },
          { label: "K-BBQコース", value: `${KOREAN.price.toLocaleString("ja-JP")}円（全${KOREAN.dishes}品）` },
          { label: "飲み放題", value: `${KOREAN.drinkMinutes / 60}時間` },
          { label: "営業時間", value: SHOP.hours },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿は、新大久保駅（JR山手線）から徒歩4分、東京都新宿区大久保1-8-4「K-SQUARE」の屋上にあるビアガーデンです。厚切りサムギョプサルを鉄板で焼く韓国BBQコース（全16品・2時間飲み放題付・4,480円）を提供しています。
        </p>
        <p>
          コリアンタウンを歩いたあとに立ち寄れる距離で、屋外のテラス席のため煙が上に抜け、においが残りにくいのが特徴です。営業は11:30から23:45までの通し営業です。
        </p>
      </AnswerBlock>

      {/* ---------- 新大久保との関係 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Korean Town" className="max-w-3xl" lead="新大久保エリアで韓国料理を探している方に向けた、この店舗の位置づけです。">
            新大久保から歩く、という選択
          </SectionHeading>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {[
              ["散策のあとの食事に", "新大久保のコリアンタウンから徒歩4分。食べ歩きのあと、腰を据えて食べたくなったときの行き先として使えます。通し営業なので、夕方の中途半端な時間でも入れます。"],
              ["屋外だから、においが残りにくい", "サムギョプサルは脂の多い料理です。屋内の店舗では煙がこもりがちですが、屋上のオープンエアでは上に抜けていきます。このあと人と会う予定がある日でも使いやすい環境です。"],
              ["韓国料理好きの集まりに", `厚切りサムギョプサルを中心とした全${KOREAN.dishes}品のK-BBQコースは、${KOREAN.drinkMinutes / 60}時間の飲み放題付きで${KOREAN.price.toLocaleString("ja-JP")}円。人数が増えても1名あたりの料金が決まっているため、集金額を先に決められます。`],
              ["新宿方面への移動もしやすい", "新宿駅東口まで徒歩6分、西武新宿駅まで徒歩3分。二次会で新宿方面へ移動する場合も、歩いて出られる距離にあります。"],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={(i % 2) * 80}>
                <article className="border-t border-brand/20 pt-6">
                  <h3 className="text-[1.05rem] leading-[1.7] text-ink">{t}</h3>
                  <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">{b}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 韓国BBQコース ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal variant="clip" className="lg:col-span-6">
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                <Image src="/images/korean-bbq-table-beer.jpg" alt="焼きたての肉とビール、キムチやナムルが並んだテーブル" fill loading="lazy" quality={65} sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              </div>
              <p className="mt-4 text-[0.76rem] text-ink-soft">{PHOTO_NOTE}</p>
            </Reveal>

            <div className="lg:col-span-6">
              <SectionHeading en="K-BBQ" lead="新大久保から歩いて来る方が最初に選ぶことの多いコースです。">
                サムギョプサル＆K-BBQコース
              </SectionHeading>
              <div className="mt-10">
                <DataTable
                  head={["項目", "内容"]}
                  rows={[
                    ["料金", `${KOREAN.price.toLocaleString("ja-JP")}円`],
                    ["品数", `全${KOREAN.dishes}品`],
                    ["飲み放題", `${KOREAN.drinkMinutes / 60}時間付き`],
                    ["主な内容", "厚切りサムギョプサル、韓国スタイルのBBQプレート"],
                    ["席", "屋上テラス席／屋根付きエリアあり"],
                  ]}
                  note="内容は時期により変更される場合があります。最新情報は食べログの予約ページでご確認ください。"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <DataTable
              caption="店舗の基本情報"
              head={["項目", "内容"]}
              rows={[
                ["店名", SHOP.name],
                ["住所", `〒${SHOP.postalCode} ${SHOP.addressFull}`],
                ["新大久保駅から", "徒歩4分（JR山手線）"],
                ["営業時間", `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）`],
                ["席数", `${SHOP.seats}（${SHOP.seatsDetail}）`],
                ["電話", `${SHOP.telReserve}（予約専用）／${SHOP.telShop}（店舗直通）`],
              ]}
            />
          </div>
        </div>
      </section>

      <PageFaq items={FAQS} heading="新大久保からのご利用について、よくあるご質問" lead="ご来店前に多くいただくご質問をまとめました。" tone="paper" />

      <RelatedLinks
        lead="コースやほかのエリアもあわせてご覧ください。"
        items={[
          { href: "/course/samgyeopsal", label: "厚切りサムギョプサルのK-BBQコースを見る", description: "焼き方や付け合わせ、飲み放題の中身まで詳しく紹介しています。" },
          { href: "/area/higashi-shinjuku", label: "東新宿駅A1出口から徒歩2分の立地について", description: "最短ルートと、仕事帰りや周辺オフィスからの使い方をまとめています。" },
          { href: "/scene/girls-party", label: "新宿の屋上テラスで女子会を開くなら", description: "写真の撮りやすい席や、時間帯の選び方を紹介しています。" },
          { href: "/access", label: "4駅それぞれからのアクセスと地図を見る", description: "新大久保駅を含むルートと、屋上までの上がり方を案内しています。" },
          { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "韓国スタイル以外のコースとの違いを一覧で確認できます。" },
          { href: "/shinjuku-bbq", label: "新宿で手ぶらBBQができる場所を探している方へ", description: "食材・機材・後片付けの範囲と、コースの選び方をまとめた総合ページです。" },
        ]}
      />

      <SeoPageCta
        position="area-shin-okubo-bottom"
        heading="散策のあとに、鉄板の席を。"
        lead="ご予約は食べログの予約ページから。当日の空席状況も同じページでご確認いただけます。"
        image="/images/terrace-dusk-rows.jpg"
      />
    </>
  );
}
