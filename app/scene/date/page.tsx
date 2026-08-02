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

const PATH = "/scene/date";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "利用シーン", path: "/scene" },
  { name: "デート・記念日", path: PATH },
];

const TITLE = "新宿の夜景が見えるテラスでデート｜屋上のカップルシート";
const DESCRIPTION =
  "新宿で夜景の見えるデートスポットをお探しの方へ。東新宿駅から徒歩2分の屋上テラスには、二人で並んで座れるカップルシートとソファー席があります。飲み放題付きBBQコースは3,980円から、記念日には乾杯スパークリングワイン付きのコースも。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/couple-seat-round-table.jpg",
  imageAlt: "並んで座れるカップルシートと丸テーブル",
  keywords: ["新宿 ビアガーデン デート", "新宿 夜景 デート", "新宿 テラス デート", "新宿 屋上 デート"],
});

const FAQS: Faq[] = [
  {
    q: "カップルシートはありますか？",
    a: "二人で並んで座れるカップルシートと、腰を沈められるソファー席があります。ご希望がある場合は、ご予約時にお伝えいただくと席のご相談がしやすくなります。",
  },
  {
    q: "夜景は見えますか？",
    a: "屋上のテラスから、東新宿から新宿方面へ続くビル群と明治通りの車のライトを見渡せます。日が落ちると天井のガーランドライトが灯り、昼間とは違う雰囲気になります。",
  },
  {
    q: "記念日向けのコースはありますか？",
    a: "乾杯のスパークリングワインが付く「HAPPYコース」（全13品・5,500円）があります。サプライズの演出やプレートについては、ご予約時に店舗へご相談ください。",
  },
  {
    q: "二人でも予約できますか？",
    a: "2名からご予約いただけます。BBQコースは1名あたりの料金設定のため、少人数でもご利用いただけます。",
  },
  {
    q: "予約は何時ごろがおすすめですか？",
    a: "空が青からオレンジへ変わる日没前後は、屋上の印象がいちばん変わる時間帯です。日没時刻は季節により変わるため、当日の時刻を確認して逆算すると狙いやすくなります。",
  },
  {
    q: "服装に決まりはありますか？",
    a: "ドレスコードはありません。屋外のテラス席で炭火を使うため、においが気になる服装は避けたほうが安心です。屋上のため夜は風が通り、体感温度が下がることがあります。",
  },
];

export default function DatePage() {
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
            image: "/images/couple-seat-round-table.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Date"
        title="並んで座って、街の灯りを眺める。"
        lead="向かい合うのではなく、同じ方向を向いて座れる席。日が落ちるにつれて、目の前の景色がゆっくり変わっていきます。"
        image="/images/couple-seat-round-table.jpg"
        alt="並んで座れるカップルシートと丸テーブル"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿で夜景が見えるデート向けのお店はありますか？"
        facts={[
          { label: "席", value: "カップルシート／ソファー席" },
          { label: "コース", value: "飲み放題付き 3,980円〜" },
          { label: "記念日", value: "HAPPYコース 5,500円（乾杯スパークリング付）" },
          { label: "最寄り駅", value: "東新宿駅 A1出口から徒歩2分" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）には、二人で並んで座れるカップルシートとソファー席があります。屋上のテラスから東新宿・新宿方面のビル群を見渡せ、日が落ちるとガーランドライトが灯ります。
        </p>
        <p>
          BBQコースは飲み放題付き3,980円から。記念日には乾杯のスパークリングワインが付くHAPPYコース（全13品・5,500円）も選べます。営業は{SHOP.hours}で、東新宿駅A1出口から徒歩2分です。
        </p>
      </AnswerBlock>

      {/* ---------- 時間帯 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Timing"
            className="max-w-3xl"
            lead="同じ席でも、来る時間で見えるものが変わります。何を見たいかで予約時間を決めるのがおすすめです。"
          >
            どの時間に予約するか
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            <Reveal variant="clip">
              <figure>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/terrace-dusk-sunset.jpg" alt="夕焼けに染まるテラスのテーブル席" fill loading="lazy" quality={65} sizes="(max-width: 768px) 100vw, 46vw" className="object-cover" />
                </div>
                <h3 className="mt-5 text-[1.05rem] text-ink">日没前後 — 空の色が変わる30分</h3>
                <p className="mt-3 text-[0.85rem] leading-[1.95] text-ink-soft">
                  青からオレンジ、そして群青へ。屋上でいちばん景色が動く時間帯です。この時間に乾杯できるよう予約すると、1回の食事で3つの空を見られます。
                </p>
              </figure>
            </Reveal>

            <Reveal variant="clip" delay={130}>
              <figure>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/terrace-night-cityscape.jpg" alt="新宿方面の街明かりを望む夜のテラス席" fill loading="lazy" quality={65} sizes="(max-width: 768px) 100vw, 46vw" className="object-cover" />
                </div>
                <h3 className="mt-5 text-[1.05rem] text-ink">日没後 — 街明かりとガーランドライト</h3>
                <p className="mt-3 text-[0.85rem] leading-[1.95] text-ink-soft">
                  眼下にビルの窓明かりと車のライトが広がります。天井のライトが灯るので、テーブルの上も暗くなりすぎません。フードのL.O.は{SHOP.lastOrder.food}です。
                </p>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 席とコース ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Seats & Course" className="max-w-3xl" lead="二人で使うときの席とコースの目安です。">
            席とコースの選び方
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["目的", "向いている席", "コースの目安"]}
              rows={[
                ["景色を眺めながら静かに", "カップルシート／フェンス側の席", "スタンダードBBQ 3,980円"],
                ["ゆっくり長く過ごす", "ソファー席", "アメリカンBBQ 4,980円（2.5時間飲み放題）"],
                ["記念日・誕生日", "テラス席（相談可）", "HAPPYコース 5,500円"],
                ["料理は軽めに、飲みたい", "ハイテーブル／カウンター席", "2時間プレミアム飲み放題 1,980円＋単品"],
              ]}
              note={NOTES.price}
            />
          </div>

          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">屋上ならではの注意点</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  オープンエアのため、風の強い日や気温の下がる時期は体感温度が下がります。羽織るものを一枚持っておくと安心です。屋根のあるエリアもあるため、天候が読めない日はご予約時にご相談ください。
                </p>
              </div>
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">静かに話したいとき</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  大人数の宴会が入る時間帯は賑やかになります。落ち着いて過ごしたい場合は、開店直後の時間帯や、フロアの端の席を希望されると雰囲気が変わります。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageFaq items={FAQS} heading="デート利用について、よくあるご質問" lead="ご予約前に多くいただくご質問をまとめました。" tone="paper" />

      <RelatedLinks
        lead="空間や時間帯をもっと知りたい方はこちらもご覧ください。"
        items={[
          { href: "/space", label: "カップルシートとソファー席の様子を見る", description: "席のタイプごとの写真と、昼夜で変わる雰囲気を紹介しています。" },
          { href: "/guide/best-time-for-night-view", label: "夜景がいちばんきれいに見える時間帯", description: "日没から逆算して予約時間を決めるためのガイドです。" },
          { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "二人で使うときの量と飲み放題の長さを比べられます。" },
          { href: "/course/churrasco", label: "串焼きシュラスコBBQコースの内容を見る", description: "その場でカットする演出があり、記念日にも向くコースです。" },
          { href: "/scene/girls-party", label: "新宿の屋上テラスで女子会を開くなら", description: "写真の撮りやすい席や、時間帯の選び方を紹介しています。" },
          { href: "/access", label: "東新宿駅から店舗までのアクセスと入口の場所", description: "屋上までの上がり方を含めて案内しています。" },
        ]}
      />

      <SeoPageCta
        position="date-bottom"
        heading="日が落ちる時間に、二人分の席を。"
        lead="ご予約は食べログの予約ページから。席のご希望は、ご予約時にお知らせください。"
        image="/images/terrace-night-umbrella-lights.jpg"
      />
    </>
  );
}
