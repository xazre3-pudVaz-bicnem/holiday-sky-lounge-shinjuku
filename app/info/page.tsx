import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import DataTable from "@/components/seo/DataTable";
import SeoPageCta from "@/components/seo/SeoPageCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { lastModifiedOf } from "@/lib/routes";
import { ACCESS, LINKS, SHOP, SOURCES } from "@/lib/site-config";
import { NOTES } from "@/lib/site-config";
import { ArrowIcon } from "@/components/ui/Icons";

const PATH = "/info";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "店舗情報・サイトについて", path: PATH },
];

const TITLE = "店舗情報・サイトについて｜HOLIDAY SKY LOUNGE 新宿";
const DESCRIPTION =
  "HOLIDAY SKY LOUNGE 新宿の店舗情報一覧と、当サイトの掲載方針。住所・電話番号・営業時間・席数・設備・支払い方法をまとめ、掲載情報の出典と最終確認日を明記しています。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/terrace-day-entrance.jpg",
  imageAlt: "K-SQUARE屋上の入口付近から見たテラス",
  keywords: ["HOLIDAY SKY LOUNGE 新宿 店舗情報", "新宿 ビアガーデン 電話番号"],
});

export default function InfoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            lastModified: lastModifiedOf(PATH),
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
        ]}
      />

      <PageHero
        en="Information"
        title="店舗情報と、このサイトについて"
        lead="掲載している店舗情報の一覧と、情報の出典・更新方針をまとめています。数値はすべて公式の予約サイトで確認できる範囲のみを記載しています。"
        image="/images/terrace-day-entrance.jpg"
        alt="K-SQUARE屋上の入口付近から見たテラス"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- 店舗情報 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Shop Data" className="max-w-3xl" lead={NOTES.verified}>
            店舗情報
          </SectionHeading>

          <div className="mt-12 max-w-4xl">
            <DataTable
              head={["項目", "内容"]}
              rows={[
                ["店名", SHOP.name],
                ["読み方", SHOP.nameKana],
                ["住所", `〒${SHOP.postalCode} ${SHOP.addressFull}`],
                ["建物", `${SHOP.building}（屋上）`],
                ["予約専用電話", SHOP.telReserve],
                ["店舗直通電話", SHOP.telShop],
                ["営業時間", `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）`],
                ["定休日", `${SHOP.closedDays}（ぐるなび店舗ページの記載）`],
                ["席数", `${SHOP.seats}（${SHOP.seatsDetail}）`],
                ["個室", SHOP.privateRoom],
                ["貸切", SHOP.charter],
                ["料理ジャンル", SHOP.cuisine.join("／")],
                ["予算の目安", `夜 ${SHOP.priceRangeDinner}／昼 ${SHOP.priceRangeLunch}`],
                ["支払い方法", SHOP.payment],
                ["喫煙", SHOP.smoking],
                ["設備", SHOP.facilities.join("／")],
                ["お子様料金", SHOP.childPolicy],
                ["駐車場", SHOP.parking],
                ["オープン", `${SHOP.openedOn}（食べログ掲載）`],
              ]}
            />
          </div>

          <div className="mt-12 max-w-4xl">
            <DataTable
              caption="最寄り駅からの所要時間"
              head={["駅", "路線", "徒歩"]}
              rows={ACCESS.map((a) => [a.station, a.line, a.detail])}
            />
          </div>
        </div>
      </section>

      {/* ---------- 掲載方針 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading en="Editorial Policy">
                掲載情報について
              </SectionHeading>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <div className="max-w-2xl space-y-6 text-[0.9rem] leading-[2.05] text-ink-soft">
                  <p>
                    当サイトに掲載している営業時間・席数・料金・設備などの情報は、下記の公式予約サイトに掲載されている内容をもとにしています。掲載元で確認できない事項は記載せず、「予約ページまたは店舗へご確認ください」という案内に置き換えています。
                  </p>
                  <p>
                    料金やコース内容は時期により変更される場合があります。最新の情報は、各予約サイトの掲載内容をご確認ください。掲載内容に相違がある場合は、予約サイトの記載が優先されます。
                  </p>
                  <p>{NOTES.photo} 実際に提供される料理とは異なる場合があります。</p>
                  <p className="text-[0.82rem]">{NOTES.verified}</p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="mt-10">
                  <h3 className="text-[0.95rem] text-ink">情報の出典</h3>
                  <ul className="mt-4 space-y-2.5">
                    {SOURCES.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-1 text-[0.86rem] text-brand underline underline-offset-4 hover:text-brand-deep"
                        >
                          {s.name}の店舗ページ
                          <ArrowIcon className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1 text-[0.86rem] text-brand underline underline-offset-4 hover:text-brand-deep"
                      >
                        公式Instagram（{LINKS.instagramHandle}）
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/*
                TODO(店舗確認): 以下は掲載元で確認できないため未記載。
                判明したらこのページに追記する。
                - 運営会社名／所在地／代表者名
                - 屋上テラスの営業期間（通年営業かどうか）
                - 貸切時の最低利用金額
                - 緯度・経度（lib/site-config.ts の GEO に設定するとJSON-LDへ反映される）
              */}
              <Reveal delay={120}>
                <div className="mt-12 border-l-2 border-brand/40 pl-5">
                  <h3 className="text-[0.95rem] text-ink">お問い合わせ</h3>
                  <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                    ご予約は{" "}
                    <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">
                      食べログの予約ページ
                    </a>{" "}
                    から24時間お申し込みいただけます。当日の空席状況、大人数でのご利用、貸切のご相談などは、店舗直通（
                    <a href={`tel:${SHOP.telShop.replace(/-/g, "")}`} className="inline-block py-1 text-brand underline underline-offset-4">
                      {SHOP.telShop}
                    </a>
                    ）へお問い合わせください。
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <Link
                  href="/privacy"
                  className="mt-10 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
                >
                  プライバシーポリシーを見る
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SeoPageCta
        position="info-bottom"
        heading="ご予約・お問い合わせ"
        lead={`ご予約は食べログの予約ページから。お電話でのお問い合わせは ${SHOP.telShop}（店舗直通）へ。`}
      />
    </>
  );
}
