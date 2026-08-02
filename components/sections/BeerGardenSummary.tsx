import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import DataTable from "@/components/seo/DataTable";
import { ArrowIcon } from "@/components/ui/Icons";
import { ACCESS, SHOP } from "@/lib/site-config";

/**
 * ヒーロー直後に置く、検索意図への結論ブロック。
 *
 * 「新宿 ビアガーデン」で来た人が最初に知りたいこと（場所・規模・スタイル・予約）へ
 * ページ冒頭で答える。AI検索から引用されても意味が通るよう、主語と場所を省略しない。
 */
export default function BeerGardenSummary() {
  return (
    <section className="bg-brand-tint py-16 lg:py-20">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="u-eyebrow flex items-center gap-3 text-brand">
                <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
                Overview
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[1.4rem] leading-[1.65] text-ink lg:text-[1.8rem]">
                新宿のビアガーデンを
                <br className="hidden sm:block" />
                お探しの方へ
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-[0.92rem] leading-[2.05] text-ink-soft">
                <p>
                  HOLIDAY SKY LOUNGE 新宿は、東京都新宿区大久保のビル「K-SQUARE」屋上にある、約300席のビアガーデンです。東新宿駅A1出口から徒歩2分、新宿駅東口からも徒歩6分の場所にあります。
                </p>
                <p>
                  食材・グリル・食器の用意から後片付けまで店舗側で行う手ぶらBBQを、飲み放題付きのコースで提供しています。頭上に遮るもののないオープンエアのテラスが中心で、屋根のあるエリアもあります。
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Link
                href="/shinjuku-bbq"
                className="mt-8 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                新宿で手ぶらBBQができる場所を詳しく見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <DataTable
              caption="新宿のビアガーデンとしての基本情報"
              head={["項目", "内容"]}
              rows={[
                ["場所", `${SHOP.addressFull}（ビル屋上）`],
                ["最寄り駅", ACCESS.map((a) => `${a.station}${a.detail}`).join("／")],
                ["席数", `${SHOP.seats}（${SHOP.seatsDetail}）`],
                ["スタイル", "手ぶらBBQ（アメリカン／韓国／ブラジリアン）・飲み放題付きコース"],
                ["営業時間", `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）`],
                ["予算の目安", `夜 ${SHOP.priceRangeDinner}／昼 ${SHOP.priceRangeLunch}`],
                ["個室・貸切", `${SHOP.privateRoom}／貸切は${SHOP.charter}`],
                ["天候", "屋根のあるエリアあり。天候により営業内容が変わる場合があります"],
                ["予約", "食べログの予約ページから（当日の空席状況も確認できます）"],
              ]}
              note="掲載内容は変更される場合があります。最新の料金と営業状況は予約ページでご確認ください。"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
