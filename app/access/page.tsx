import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Access from "@/components/sections/Access";
import FirstTime from "@/components/sections/FirstTime";
import ReserveCta from "@/components/sections/ReserveCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { ACCESS } from "@/lib/site";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "アクセス", path: "/access" },
];

export const metadata = buildMetadata({
  title: "アクセス・店舗情報｜東新宿駅A1出口から徒歩2分",
  description:
    "新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」へのアクセス。東京都新宿区大久保1-8-4 K-SQUARE屋上、東新宿駅A1出口から徒歩2分、西武新宿駅から3分、新大久保駅から4分、新宿駅東口から6分。営業時間・電話番号・駐車場情報も掲載しています。",
  path: "/access",
  image: "/images/terrace-city-view-day.jpg",
  keywords: ["東新宿 ビアガーデン", "新大久保 ビアガーデン", "新宿 ビアガーデン アクセス", "新宿 屋上レストラン"],
});

const ROUTES = [
  {
    station: "東新宿駅",
    line: "都営大江戸線／東京メトロ副都心線",
    detail: "A1出口から徒歩2分",
    body: "最寄り駅です。A1出口を出て地上に上がると、すぐ目の前のエリアです。改札から店舗までいちばん短いルートになります。",
  },
  {
    station: "西武新宿駅",
    line: "西武新宿線",
    detail: "徒歩3分",
    body: "西武新宿線でお越しの場合はこちら。駅前から大久保方面へ進むルートです。",
  },
  {
    station: "新大久保駅",
    line: "JR山手線",
    detail: "徒歩4分",
    body: "JR山手線でお越しの場合の最寄り駅。新大久保のコリアンタウンから歩いてすぐの距離です。",
  },
  {
    station: "新宿駅 東口",
    line: "JR各線／私鉄・地下鉄各線",
    detail: "徒歩6分",
    body: "新宿駅からでも徒歩圏内です。東口から歩いて6分ほど。路線がバラバラなメンバーが集まるときに便利な立地です。",
  },
];

export default function AccessPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        en="Access"
        title="東新宿駅から徒歩2分。4つの駅から歩ける屋上へ。"
        lead="住所は東京都新宿区大久保1-8-4「K-SQUARE」。エレベーターで最上階まで上がり、通路を進んだ先が屋上の入口です。東新宿・西武新宿・新大久保・新宿東口の4駅からお越しいただけます。"
        image="/images/terrace-city-view-day.jpg"
        alt="新宿の街並みを見下ろす屋上ビアガーデンのテラスからの眺め"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- 駅別ルート ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Route"
            className="max-w-3xl"
            lead="4つの駅から徒歩圏内です。ご利用の路線に合わせて最寄り駅をお選びください。"
          >
            駅からの行き方
          </SectionHeading>

          <div className="mt-12 border-t border-line">
            {ROUTES.map((r, i) => (
              <Reveal key={r.station} delay={i * 60}>
                <article className="grid gap-3 border-b border-line py-7 md:grid-cols-[auto_11rem_1fr] md:items-baseline md:gap-8">
                  <p className="u-en text-[1.6rem] leading-none text-brand/25">
                    {String(ACCESS[i]?.minutes ?? "").padStart(2, "0")}
                    <span className="text-[0.7rem] tracking-normal">min</span>
                  </p>
                  <div>
                    <h2 className="text-[1.1rem] leading-[1.6] text-ink">{r.station}</h2>
                    <p className="mt-1 text-[0.72rem] text-ink-soft">{r.line}</p>
                    <p className="mt-1 text-[0.8rem] font-medium text-brand">{r.detail}</p>
                  </div>
                  <p className="text-[0.85rem] leading-[2] text-ink-soft">{r.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Access />
      <FirstTime />
      <ReserveCta />
    </>
  );
}
