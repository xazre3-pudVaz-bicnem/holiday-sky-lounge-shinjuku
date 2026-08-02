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
import { ACCESS, NOTES, SHOP } from "@/lib/site-config";
import type { Faq } from "@/data/content";

const PATH = "/scene/company-party";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "利用シーン", path: "/scene" },
  { name: "会社宴会・歓送迎会", path: PATH },
];

const TITLE = "新宿のビアガーデンで会社宴会｜大人数・飲み放題付きコース";
const DESCRIPTION =
  "新宿で会社宴会や歓送迎会の会場をお探しの幹事様へ。東新宿駅A1出口から徒歩2分の屋上テラスは、着席250名・立食300名まで対応。飲み放題付きコースは3,980円からで会計が読みやすく、4駅から歩けるため集合しやすい立地です。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/banquet-long-table-day.jpg",
  imageAlt: "連結したロングテーブルが続く大人数向けのエリア",
  keywords: ["新宿 ビアガーデン 宴会", "新宿 大人数 宴会", "新宿 歓送迎会", "新宿 ビアガーデン 団体"],
});

const FAQS: Faq[] = [
  {
    q: "何名まで利用できますか？",
    a: "着席で250名、立食で300名までご利用いただけます。仕切りのないワンフロアのため、ロングテーブルを連結して大人数でも一体感のある席を組めます。",
  },
  {
    q: "少人数の部署飲みでも予約できますか？",
    a: "できます。10〜20名、20〜30名の個室エリアもご用意しているため、部署単位の飲み会や歓送迎会にもご利用いただけます。",
  },
  {
    q: "飲み放題付きのコースはありますか？",
    a: "BBQコースはいずれも飲み放題付きです。2時間のコース（3,980円〜）と2.5時間のコース（4,980円〜）があり、宴会の予定時間に合わせて選べます。3時間飲み放題付きのJAPANESE BBQコース（6,000円）もあります。",
  },
  {
    q: "会計は人数割りしやすいですか？",
    a: "コースが1名あたりの料金で設定されているため、人数から総額を計算しやすい構成です。追加のオーダー分は別途加算されます。詳しい精算方法はご予約時に店舗へご確認ください。",
  },
  {
    q: "雨天時はどうなりますか？",
    a: "屋根のあるエリアもございますが、天候によって営業内容が変わる場合があります。当日の営業状況は食べログの予約ページ、または店舗（080-6953-3136）へご確認ください。",
  },
  {
    q: "キャンセル規定はありますか？",
    a: "ホットペッパーグルメの店舗ページには、当日0時以降のキャンセルから料金が発生する旨が記載されています。人数変更やキャンセルの取り扱いは予約サイトや予約方法によって異なる場合があるため、ご予約時に必ずご確認ください。",
  },
];

export default function CompanyPartyPage() {
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
            image: "/images/banquet-long-table-day.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Company Party"
        title="幹事が確認したいことを、先に全部。"
        lead="人数、時間、会計、集合場所、雨天時。新宿で会社宴会や歓送迎会の会場を決めるときに必要な情報を、このページにまとめました。"
        image="/images/banquet-long-table-day.jpg"
        alt="連結したロングテーブルが続く大人数向けのエリア"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿で大人数の会社宴会ができる会場を探しています。"
        facts={[
          { label: "収容人数", value: "着席250名／立食300名" },
          { label: "貸切", value: "50名〜300名で相談可" },
          { label: "コース", value: "飲み放題付き 3,980円〜" },
          { label: "最寄り駅", value: "東新宿駅 A1出口から徒歩2分" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）は、着席250名・立食300名まで対応する屋上のビアガーデンです。仕切りのないワンフロアのため、10名程度の部署飲みから300名規模のパーティーまで、人数に応じて席を組み替えられます。
        </p>
        <p>
          BBQコースはすべて飲み放題付きで3,980円から。東新宿駅A1出口から徒歩2分、西武新宿駅から3分、新大久保駅から4分、新宿駅東口から6分と4駅から歩けるため、部署ごとに最寄り駅が違っても集合場所で揉めません。
        </p>
      </AnswerBlock>

      {/* ---------- 人数別 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Capacity"
            className="max-w-3xl"
            lead="人数によって使える席の組み方が変わります。まずは概算の人数を決めてから相談すると話が早く進みます。"
          >
            人数別に、できること
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["人数", "席の組み方", "使える設備"]}
              rows={[
                ["10〜20名", "個室エリア、またはテラスのテーブルを連結", "個室エリア／テラス席"],
                ["20〜30名", "個室エリア、またはロングテーブル1列", "個室エリア／ロングテーブル"],
                ["30〜50名", "ロングテーブルを複数列連結", "テラス席／屋根付きエリア"],
                ["50〜300名", "フロアを広く使った配置。貸切の相談が可能", "テラス全体／VIPカラオケルーム"],
              ]}
              note={`収容人数は${SHOP.seatsDetail}。個室エリアは${SHOP.privateRoom}です。ご希望のレイアウトは予約時に店舗へご相談ください。`}
            />
          </div>
        </div>
      </section>

      {/* ---------- 幹事のチェックリスト ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                en="Checklist"
                lead="会場を押さえる前に決めておくと、当日までのやり取りが減ります。"
              >
                予約前に決めておく6項目
              </SectionHeading>
              <Reveal delay={180}>
                <div className="reveal-zoom relative mt-12 aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/terrace-dusk-long-tables.jpg"
                    alt="夕暮れのテラスに連結されたロングテーブルの列"
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <ol className="border-t border-brand/20">
                  {[
                    ["おおよその人数", "確定していなくても構いません。上限と下限を伝えておくと席の確保がしやすくなります。"],
                    ["開始時間と滞在時間", "飲み放題は2時間・2.5時間・3時間のコースがあります。二次会の予定から逆算して選びます。"],
                    ["コースの予算", "1名あたり3,980円（全13品・2時間飲み放題付）が基準。肉を増やしたい場合は4,980円のアメリカンBBQへ。"],
                    ["席のタイプ", "個室エリア、ロングテーブル、屋根付きエリアなど。希望があれば予約時に伝えます。"],
                    ["集合場所の共有", "屋上の店舗のため、「K-SQUAREの1F入口に集合、エレベーターで最上階」と案内しておくと迷いません。"],
                    ["雨天時の連絡方法", "当日の営業状況は予約ページか店舗へ確認します。参加者への連絡手段を決めておきます。"],
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

              <Reveal delay={90}>
                <p className="mt-8 border-l-2 border-brand/40 pl-5 text-[0.82rem] leading-[2] text-ink-soft">
                  キャンセル・人数変更の取り扱いは予約方法によって異なります。ホットペッパーグルメの店舗ページには当日0時以降のキャンセルから料金が発生する旨が記載されていますので、ご予約時に条件をご確認ください。
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 集合のしやすさ ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Meeting Point"
            className="max-w-3xl"
            lead="参加者の勤務地が分かれている宴会ほど、集合のしやすさが会場選びの決め手になります。"
          >
            4駅から歩ける、という利点
          </SectionHeading>
          <div className="mt-12">
            <DataTable
              caption="最寄り駅からの所要時間"
              head={["駅", "路線", "徒歩"]}
              rows={ACCESS.map((a) => [a.station, a.line, a.detail])}
              note="住所は東京都新宿区大久保1-8-4「K-SQUARE」。エレベーターで最上階まで上がり、通路を進んだ先が屋上の入口です。"
            />
          </div>

          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">終電前まで使える時間設定</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  営業は{SHOP.hours}。フードのラストオーダーは{SHOP.lastOrder.food}、ドリンクは{SHOP.lastOrder.drink}です。19時開始で2.5時間の飲み放題を付けても、終電までに余裕があります。
                </p>
              </div>
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">会計が読みやすい</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  コースが1名あたりの料金で設定されているため、参加人数から総額の目安を立てられます。集金額を先に決めたい幹事にとっては計算しやすい構成です。{NOTES.price}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageFaq
        items={FAQS}
        heading="会社宴会について、幹事様からよくいただくご質問"
        lead="ご予約前に多くいただくご質問をまとめました。"
      />

      <RelatedLinks
        lead="貸切や、ほかの利用シーンを検討している方はこちらもご覧ください。"
        items={[
          {
            href: "/scene/private-party",
            label: "新宿の屋上を貸切にしてパーティーを開く",
            description: "50名から300名までの貸切について、対応できる範囲と相談の流れをまとめています。",
          },
          {
            href: "/guide/large-group-checklist",
            label: "大人数の宴会で幹事が確認するチェックリスト",
            description: "予約から当日までにやることを、時系列で整理したガイドです。",
          },
          {
            href: "/course",
            label: "BBQコース4種類の料金と品数を比較する",
            description: "宴会の予算と滞在時間からコースを選べるよう、一覧にまとめています。",
          },
          {
            href: "/space",
            label: "ロングテーブルや個室エリアの様子を見る",
            description: "席のタイプごとの写真と、昼夜の雰囲気の違いを紹介しています。",
          },
          {
            href: "/area/higashi-shinjuku",
            label: "東新宿駅から徒歩2分という立地について",
            description: "オフィス帰りの集合や、駅から店舗までのルートをまとめています。",
          },
          {
            href: "/access",
            label: "K-SQUARE屋上までの行き方を確認する",
            description: "4駅それぞれのルートと、建物入口からの上がり方を案内しています。",
          },
        ]}
      />

      <SeoPageCta
        position="company-party-bottom"
        heading="宴会の日程が決まったら、席の相談を。"
        lead="ご予約は食べログの予約ページから。人数やレイアウトのご相談は、店舗（080-6953-3136）へお電話ください。"
        image="/images/terrace-night-long-view.jpg"
      />
    </>
  );
}
