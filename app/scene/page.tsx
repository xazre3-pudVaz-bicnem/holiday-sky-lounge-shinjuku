import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Scene from "@/components/sections/Scene";
import ReserveCta from "@/components/sections/ReserveCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { ArrowIcon } from "@/components/ui/Icons";
import { SCENES } from "@/data/content";

const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "利用シーン", path: "/scene" },
];

export const metadata = buildMetadata({
  title: "利用シーン｜宴会・女子会・デート・貸切パーティー",
  description:
    "新宿の屋上ビアガーデン「HOLIDAY SKY LOUNGE 新宿」の利用シーン。最大300名の会社宴会・歓送迎会から、女子会、デート、誕生日、家族での食事、昼飲み、貸切パーティーまで。目的別の使い方と席のご提案をまとめました。",
  path: "/scene",
  image: "/images/banquet-long-table-day.jpg",
  keywords: ["新宿 宴会", "新宿 貸切", "新宿 女子会", "新宿 デート", "新宿 昼飲み", "新宿 ビアガーデン"],
});

const PARTY = [
  { label: "10〜30名", body: "部署単位の飲み会や歓送迎会に。個室エリアのご利用も可能です。" },
  { label: "30〜50名", body: "ロングテーブルを連結して、一体感のある宴会に。飲み放題付きコースで会計も明快。" },
  { label: "50名以上", body: "貸切のご相談を承ります。着席250名・立食300名まで対応可能です。" },
];

export default function ScenePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        en="Scene"
        title="宴会も、女子会も、デートも。同じ屋上で。"
        lead="仕切りのないワンフロアだからこそ、集まる人数と目的に合わせて自由に組み替えられます。10名の部署飲みから300名規模のパーティーまで、目的別の使い方をご紹介します。"
        image="/images/banquet-long-table-day.jpg"
        alt="新宿の屋上ビアガーデンで宴会に使われるロングテーブルのエリア"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      {/* ---------- シーン一覧（アンカーリンク） ---------- */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-wide">
          <Reveal>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {SCENES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="inline-block border border-brand/25 px-4 py-2 text-[0.78rem] tracking-[0.06em] text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Scene full />

      {/* ---------- 人数別 ---------- */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            en="For Organizers"
            className="max-w-3xl"
            lead="幹事様からよくいただく「何名まで入れますか」というご質問に、人数別でお答えします。"
          >
            人数別・宴会のご案内
          </SectionHeading>

          <div className="mt-12 border-t border-line">
            {PARTY.map((p, i) => (
              <Reveal key={p.label} delay={i * 60}>
                <div className="grid gap-2 border-b border-line py-7 sm:grid-cols-[10rem_1fr] sm:gap-10">
                  <h3 className="u-en text-[1.15rem] text-brand">{p.label}</h3>
                  <p className="text-[0.88rem] leading-[2] text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-3xl border-l-2 border-brand/40 pl-5 text-[0.8rem] leading-[1.95] text-ink-soft">
              大人数でのご利用・貸切をご検討の場合は、ご希望の日程と人数をお伝えいただけるとご案内がスムーズです。ご予約は食べログの予約ページから、詳細のご相談は店舗（080-6953-3136）へお問い合わせください。
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="/course"
                className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                コースと料金を見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/space"
                className="inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                席・エリアを見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ReserveCta />
    </>
  );
}
