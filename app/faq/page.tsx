import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Faq from "@/components/sections/Faq";
import ReserveCta from "@/components/sections/ReserveCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { FAQS } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Icons";
import { SHOP } from "@/lib/site";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "よくある質問", path: "/faq" },
];

export const metadata = buildMetadata({
  title: "よくあるご質問｜予約・雨天時・持ち込み・貸切について",
  description:
    "新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」へよくいただくご質問。予約方法、当日予約、雨天時の対応、お子様連れ、食材の持ち込み、大人数の貸切、喫煙、支払い方法、最寄り駅などにお答えします。",
  path: "/faq",
  image: "/images/terrace-dusk-lights.jpg",
  keywords: ["新宿 ビアガーデン 予約", "新宿 BBQ 持ち込み", "新宿 ビアガーデン 雨", "新宿 貸切"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(CRUMBS), faqJsonLd(FAQS)]} />
      <PageHero
        en="FAQ"
        title="ご来店前によくいただくご質問"
        lead="予約方法から雨天時の対応、持ち込みや貸切まで。お問い合わせの多い内容をまとめました。ここに載っていないことは、お気軽に店舗までお尋ねください。"
        image="/images/terrace-dusk-lights.jpg"
        alt="日没後に照明が灯る新宿の屋上ビアガーデンのテーブル席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <Faq showAllLink={false} />

      {/* ---------- お問い合わせ ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading en="Contact">
                解決しない場合は、
                <br />
                店舗までご連絡ください。
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="max-w-2xl text-[0.9rem] leading-[2.05] text-ink-soft">
                  当日の空席状況、雨天時の営業、大人数でのご利用やサプライズのご相談など、掲載していない内容についてはお電話でお問い合わせください。ご予約そのものは、食べログの予約ページから24時間お申し込みいただけます。
                </p>
              </Reveal>

              <Reveal delay={80}>
                <dl className="mt-10 border-t border-line">
                  <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
                    <dt className="u-en text-[0.7rem] text-brand">RESERVE TEL</dt>
                    <dd>
                      <a
                        href={`tel:${SHOP.telReserve.replace(/-/g, "")}`}
                        className="inline-block py-1 text-[1.05rem] underline underline-offset-4 hover:text-brand"
                      >
                        {SHOP.telReserve}
                      </a>
                      <span className="ml-2 text-[0.76rem] text-ink-soft">予約専用</span>
                    </dd>
                  </div>
                  <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
                    <dt className="u-en text-[0.7rem] text-brand">SHOP TEL</dt>
                    <dd>
                      <a
                        href={`tel:${SHOP.telShop.replace(/-/g, "")}`}
                        className="inline-block py-1 text-[1.05rem] underline underline-offset-4 hover:text-brand"
                      >
                        {SHOP.telShop}
                      </a>
                      <span className="ml-2 text-[0.76rem] text-ink-soft">店舗直通</span>
                    </dd>
                  </div>
                  <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
                    <dt className="u-en text-[0.7rem] text-brand">OPEN</dt>
                    <dd className="text-[0.9rem]">
                      {SHOP.hours}
                      <span className="mt-1 block text-[0.76rem] text-ink-soft">
                        フードL.O. {SHOP.lastOrder.food}／ドリンクL.O. {SHOP.lastOrder.drink}
                      </span>
                    </dd>
                  </div>
                  <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
                    <dt className="u-en text-[0.7rem] text-brand">PAYMENT</dt>
                    <dd className="text-[0.9rem] leading-[1.9]">{SHOP.payment}</dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                  <Link
                    href="/access"
                    className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
                  >
                    アクセス・行き方を見る
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/course"
                    className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
                  >
                    コースと料金を見る
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
