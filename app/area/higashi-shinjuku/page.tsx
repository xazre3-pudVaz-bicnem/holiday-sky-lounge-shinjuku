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
import type { Faq } from "@/data/content";

const PATH = "/area/higashi-shinjuku";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "エリア", path: "/access" },
  { name: "東新宿", path: PATH },
];

const TITLE = "東新宿駅から徒歩2分のビアガーデン｜A1出口すぐの屋上BBQ";
const DESCRIPTION =
  "東新宿駅A1出口から徒歩2分、K-SQUARE屋上のビアガーデン。都営大江戸線・東京メトロ副都心線から地上に出てすぐの立地で、仕事帰りの飲み会や周辺オフィスの宴会に使えます。営業は11:30から23:45まで、飲み放題付きBBQコースは3,980円から。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/terrace-city-view-day.jpg",
  imageAlt: "東新宿の街並みを見下ろすテラス席",
  keywords: ["東新宿 ビアガーデン", "東新宿 BBQ", "東新宿 宴会", "東新宿 屋上"],
});

const FAQS: Faq[] = [
  {
    q: "東新宿駅のどの出口から近いですか？",
    a: "A1出口です。地上に出てから徒歩2分、東京都新宿区大久保1-8-4「K-SQUARE」の屋上にあります。都営大江戸線・東京メトロ副都心線をご利用の方はこちらが最短です。",
  },
  {
    q: "仕事帰りに寄れますか？",
    a: "営業は11:30から23:45まで（フードL.O. 23:15／ドリンクL.O. 23:30）の通し営業です。食材も機材も店舗側で用意する手ぶらBBQのため、荷物を持たずに直接お越しいただけます。",
  },
  {
    q: "建物のどこから入りますか？",
    a: "K-SQUAREの建物に入り、エレベーターで最上階まで上がります。エレベーターを降りて通路を進んだ先が屋上の入口です。分かりにくい場合は店舗（080-6953-3136）へお電話ください。",
  },
  {
    q: "周辺のオフィスからの宴会でも使えますか？",
    a: "着席250名・立食300名まで対応しており、50名以上で貸切のご相談も可能です。10〜20名、20〜30名の個室エリアもあるため、部署単位の宴会にもご利用いただけます。",
  },
  {
    q: "終電前まで飲めますか？",
    a: "ドリンクのラストオーダーは23:30です。19時開始で2.5時間の飲み放題を付けても、終電までに余裕があります。",
  },
  {
    q: "駐車場はありますか？",
    a: `専用駐車場はありません。${SHOP.parking}`,
  },
];

export default function HigashiShinjukuPage() {
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
            image: "/images/terrace-city-view-day.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Higashi-Shinjuku"
        title="A1出口を上がって、2分。"
        lead="改札から地上に出て、明治通り沿いのK-SQUAREへ。エレベーターで最上階まで上がれば、そこが屋上のビアガーデンです。"
        image="/images/terrace-city-view-day.jpg"
        alt="東新宿の街並みを見下ろすテラス席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="東新宿駅の近くにビアガーデンはありますか？"
        facts={[
          { label: "最寄り出口", value: "東新宿駅 A1出口" },
          { label: "徒歩", value: "2分" },
          { label: "路線", value: "都営大江戸線／東京メトロ副都心線" },
          { label: "営業時間", value: `${SHOP.hours}` },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿は、東新宿駅A1出口から徒歩2分、東京都新宿区大久保1-8-4「K-SQUARE」の屋上にあるビアガーデンです。都営大江戸線・東京メトロ副都心線が乗り入れる東新宿駅から、地上に出てすぐの距離にあります。
        </p>
        <p>
          食材・グリル・食器・後片付けまで店舗側で用意する手ぶらBBQのため、仕事帰りにそのまま立ち寄れます。営業は11:30から23:45までの通し営業で、飲み放題付きのBBQコースは3,980円からです。
        </p>
      </AnswerBlock>

      {/* ---------- 駅からのルート ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading en="Route" lead="屋上の店舗なので、初めての方は建物に入るところで迷いがちです。順番に確認しておくとスムーズです。">
                A1出口から店舗まで
              </SectionHeading>
              <Reveal delay={180}>
                <div className="reveal-zoom relative mt-12 aspect-[4/3] overflow-hidden">
                  <Image src="/images/terrace-day-entrance.jpg" alt="K-SQUARE屋上の入口付近から見たテラス" fill loading="lazy" quality={65} sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <ol className="border-t border-brand/20">
                  {[
                    ["東新宿駅 A1出口から地上へ", "都営大江戸線・東京メトロ副都心線の東新宿駅から、A1出口を上がります。"],
                    ["徒歩2分でK-SQUAREへ", "住所は東京都新宿区大久保1-8-4。建物の外観に店舗の看板が出ています。"],
                    ["エレベーターで最上階へ", "建物のエレベーターに乗り、最上階まで上がります。"],
                    ["通路を進んで屋上へ", "エレベーターを降りたら通路を進みます。その先が屋上の入口です。"],
                  ].map(([t, b], i) => (
                    <li key={t} className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-line py-6">
                      <span className="u-en flex h-9 w-9 items-center justify-center rounded-full border border-brand/35 text-[0.72rem] text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1rem] leading-[1.7] text-ink">{t}</h3>
                        <p className="mt-2 text-[0.85rem] leading-[2] text-ink-soft">{b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 東新宿からの使い方 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Use Cases" className="max-w-3xl" lead="東新宿という立地だからこその使い方をまとめました。">
            東新宿から使うなら
          </SectionHeading>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {[
              ["仕事帰りにそのまま", "手ぶらBBQなので、買い出しも道具の持参もいりません。A1出口から2分という距離は、退勤後に「ちょっと寄る」が成立する範囲です。フードのラストオーダーは23:15なので、遅い時間の合流にも対応できます。"],
              ["周辺オフィスの宴会", "着席250名・立食300名まで対応。10〜20名、20〜30名の個室エリアもあるため、部署単位の飲み会から全社規模の宴会まで人数に合わせて組めます。50名以上なら貸切の相談も可能です。"],
              ["集合場所として使いやすい", "東新宿だけでなく、西武新宿駅から徒歩3分、新大久保駅から徒歩4分、新宿駅東口から徒歩6分。参加者の使う路線がばらけていても、それぞれが歩いて来られます。"],
              ["終電前までの時間設定", "ドリンクのラストオーダーは23:30。19時開始で2.5時間の飲み放題を付けても、終電までに余裕を持って解散できます。二次会に移動する場合も、新宿方面へ歩いて出られる距離です。"],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={(i % 2) * 80}>
                <article className="border-t border-brand/20 pt-6">
                  <h3 className="text-[1.05rem] leading-[1.7] text-ink">{t}</h3>
                  <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">{b}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <DataTable
              caption="店舗の基本情報"
              head={["項目", "内容"]}
              rows={[
                ["店名", SHOP.name],
                ["住所", `〒${SHOP.postalCode} ${SHOP.addressFull}`],
                ["最寄り駅", "東新宿駅 A1出口から徒歩2分"],
                ["営業時間", `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）`],
                ["席数", `${SHOP.seats}（${SHOP.seatsDetail}）`],
                ["電話", `${SHOP.telReserve}（予約専用）／${SHOP.telShop}（店舗直通）`],
              ]}
            />
          </div>
        </div>
      </section>

      <PageFaq items={FAQS} heading="東新宿からのご利用について、よくあるご質問" lead="ご来店前に多くいただくご質問をまとめました。" tone="paper" />

      <RelatedLinks
        lead="ほかのエリアや、目的別のページもあわせてご覧ください。"
        items={[
          {
            href: "/",
            label: "新宿のビアガーデン HOLIDAY SKY LOUNGE 新宿のトップページ",
            description: "約300席の屋上テラス、手ぶらBBQのコース、アクセスまでをまとめて確認できます。",
          },
          { href: "/area/shin-okubo", label: "新大久保から歩けるビアガーデンをお探しの方へ", description: "コリアンタウンからのアクセスと、韓国BBQとの相性をまとめています。" },
          { href: "/access", label: "4駅それぞれからのアクセスと地図を見る", description: "西武新宿駅・新宿駅東口を含めたルートと、屋上までの上がり方を案内しています。" },
          { href: "/scene/company-party", label: "新宿で大人数の会社宴会を開く幹事の方へ", description: "人数別の席の組み方と、予約前に決めておく項目をまとめています。" },
          { href: "/shinjuku-bbq", label: "新宿で手ぶらBBQができる場所を探している方へ", description: "食材・機材・後片付けの範囲と、コースの選び方をまとめた総合ページです。" },
          { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "予算と滞在時間からコースを選べるよう、一覧にまとめています。" },
          { href: "/guide/rainy-day", label: "雨の日の営業と確認方法について", description: "屋上の店舗ならではの、天候時の確認手順をまとめています。" },
        ]}
      />

      <SeoPageCta
        position="area-higashi-shinjuku-bottom"
        heading="A1出口から2分の屋上で。"
        lead="ご予約は食べログの予約ページから。当日の空席状況も同じページでご確認いただけます。"
        image="/images/terrace-dusk-panorama.jpg"
      />
    </>
  );
}
