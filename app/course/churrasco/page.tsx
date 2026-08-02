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
import { NOTES } from "@/lib/site-config";
import { findCourse, PHOTO_NOTE } from "@/data/courses";
import type { Faq } from "@/data/content";

const PATH = "/course/churrasco";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "BBQコース", path: "/course" },
  { name: "本格シュラスコBBQ", path: PATH },
];

const COURSE = findCourse("churrasco")!;
const AMERICAN = findCourse("american")!;

const TITLE = "新宿のシュラスコBBQ・飲み放題｜屋上で串焼きピッカーニャ";
const DESCRIPTION =
  "新宿・東新宿の屋上テラスで楽しむ本格シュラスコBBQ。ピッカーニャ（イチボ）、サーロイン、ランプを串のまま焼き上げ、その場でカットします。全14品・2.5時間飲み放題付きで5,480円。誕生日や大人数の宴会にも対応。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/churrasco-skewers.jpg",
  imageAlt: "串に刺して焼き上げたピッカーニャとソーセージ、焼きパイナップル",
  keywords: ["新宿 シュラスコ", "新宿 シュラスコ 飲み放題", "新宿 ブラジル BBQ", "新宿 ピッカーニャ"],
});

const FAQS: Faq[] = [
  {
    q: "シュラスココースにはどんな肉が入っていますか？",
    a: "ピッカーニャ（イチボ）、サーロイン、ランプを串のまま焼き上げます。全14品の構成で、詳しい品目は時期により変わるため、最新の内容は食べログの予約ページでご確認ください。",
  },
  {
    q: "その場で切り分けてくれますか？",
    a: "串のまま焼き上げた肉をカットして提供するシュラスコスタイルです。焼きたての断面から立ちのぼる湯気ごと味わえるのが、この食べ方の特徴です。",
  },
  {
    q: "飲み放題の時間はどのくらいですか？",
    a: "本格シュラスコBBQコース（5,480円）には2.5時間の飲み放題が付いています。生ビール、ボトルビール、カクテル、ハイボール、ワイン、ソフトドリンクからお選びいただけます。",
  },
  {
    q: "アメリカンBBQコースとどちらを選べばいいですか？",
    a: "肉の量と部位のバリエーションを重視するならアメリカンBBQ（全16品・2.5時間飲み放題付・4,980円）、串焼きとカットの演出を楽しみたいならシュラスコBBQ（全14品・2.5時間飲み放題付・5,480円）が向いています。どちらも飲み放題は2.5時間です。",
  },
  {
    q: "誕生日のお祝いで使えますか？",
    a: "ご利用いただけます。誕生日・記念日向けには、乾杯のスパークリングワインが付いた「HAPPYコース」（全13品・5,500円）もご用意しています。演出のご相談は予約時に店舗へお問い合わせください。",
  },
  {
    q: "大人数でシュラスコを楽しめますか？",
    a: "着席250名・立食300名まで対応しており、50名以上で貸切のご相談も可能です。ロングテーブルを連結すれば、大人数でも同じ料理を囲めます。",
  },
];

export default function ChurrascoPage() {
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
            image: "/images/churrasco-skewers.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Churrasco BBQ"
        title="串のまま焼いて、その場で切り分ける。"
        lead="ピッカーニャ、サーロイン、ランプ。ブラジリアンスタイルのシュラスコを、新宿の屋上テラスで。全14品・2.5時間飲み放題付きのコースです。"
        image="/images/churrasco-carving.jpg"
        alt="焼き上げたピッカーニャを串からその場でカットするシュラスコ"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿でシュラスコを飲み放題付きで食べられますか？"
        facts={[
          { label: "コース料金", value: `${COURSE.price.toLocaleString("ja-JP")}円` },
          { label: "品数", value: `全${COURSE.dishes}品` },
          { label: "飲み放題", value: `${COURSE.drinkMinutes / 60}時間` },
          { label: "最寄り駅", value: "東新宿駅 A1出口から徒歩2分" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）の「本格シュラスコBBQコース」は、全14品・2.5時間飲み放題付きで5,480円です。ピッカーニャ（イチボ）、サーロイン、ランプを串のまま焼き上げ、その場でカットして提供します。
        </p>
        <p>
          東新宿駅A1出口から徒歩2分、営業は11:30から23:45まで。屋上のオープンエアのテラス席で、街明かりを眺めながらブラジリアンスタイルのBBQを楽しめます。
        </p>
      </AnswerBlock>

      {/* ---------- 部位 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Cuts"
            className="max-w-3xl"
            lead="シュラスコは部位ごとに味も食感も変わります。順番に食べ比べるのが、このコースのいちばんの楽しみ方です。"
          >
            肉の部位で、味が変わる。
          </SectionHeading>

          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:mt-16">
            {[
              ["ピッカーニャ（イチボ）", "シュラスコの主役とされる部位。赤身の旨みと、脂の甘みの両方があります。厚みのある断面を、まずは塩だけで。"],
              ["サーロイン", "きめが細かく、脂が全体に散った部位。焼き上がりの香りが立ちやすく、序盤に食べると印象に残ります。"],
              ["ランプ", "赤身が中心で、噛むほど味が出る部位。ピッカーニャのあとに食べると、赤身の違いが分かりやすくなります。"],
              ["ソーセージ・焼きパイナップル", "肉の合間に挟む役割。皮がはじけるソーセージと、焼いて甘みの増したパイナップルで口を切り替えます。"],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={(i % 2) * 80}>
                <article className="border-t border-brand/20 pt-6">
                  <h3 className="text-[1.1rem] leading-[1.7] text-ink">{t}</h3>
                  <p className="mt-3 text-[0.87rem] leading-[2] text-ink-soft">{b}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="clip" className="mt-14">
            <div className="reveal-zoom relative aspect-[16/9] overflow-hidden lg:aspect-[21/9]">
              <Image
                src="/images/churrasco-skewers.jpg"
                alt="串に刺して焼き上げたピッカーニャとソーセージ、焼きパイナップル"
                fill
                loading="lazy"
                quality={70}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-[0.76rem] text-ink-soft">{PHOTO_NOTE}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- アメリカンBBQとの違い ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Compare"
            className="max-w-3xl"
            lead="同じ「肉をたくさん食べるコース」でも、シュラスコとアメリカンBBQでは体験が違います。"
          >
            シュラスコとアメリカンBBQの違い
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["", "本格シュラスコBBQ", "アメリカンBBQ"]}
              rows={[
                ["料金", `${COURSE.price.toLocaleString("ja-JP")}円`, `${AMERICAN.price.toLocaleString("ja-JP")}円`],
                ["品数", `全${COURSE.dishes}品`, `全${AMERICAN.dishes}品`],
                ["飲み放題", `${COURSE.drinkMinutes / 60}時間`, `${AMERICAN.drinkMinutes / 60}時間`],
                ["肉の内容", "ピッカーニャ・サーロイン・ランプ", "ブラックアンガス牛のリブ・ランプ・ハラミ"],
                ["焼き方", "串のまま焼いてその場でカット", "グリルで焼くデカ盛りスタイル"],
                ["向いている場面", "演出を楽しみたい／記念日", "とにかく量を食べたい／肉好きの集まり"],
              ]}
              note={NOTES.price}
            />
          </div>

          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">大人数で囲むとき</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  串から切り分けるスタイルは、大人数のテーブルほど盛り上がります。ロングテーブルを連結すれば端まで同じ料理が回り、着席250名・立食300名まで対応できます。50名以上なら貸切のご相談も可能です。
                </p>
              </div>
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">誕生日・記念日に使うとき</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  カットの瞬間がそのまま写真になるため、お祝いの場と相性があります。乾杯のスパークリングワインが付く「HAPPYコース」（全13品・5,500円）もあり、目的に合わせて選べます。演出のご相談は予約時に店舗へお問い合わせください。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageFaq
        items={FAQS}
        heading="シュラスコBBQコースについて、よくあるご質問"
        lead="ご予約前に多くいただくご質問をまとめました。"
        tone="paper"
      />

      <RelatedLinks
        lead="ほかのコースや、大人数での利用を検討している方はこちらもご覧ください。"
        items={[
          {
            href: "/",
            label: "新宿のビアガーデン HOLIDAY SKY LOUNGE 新宿のトップページ",
            description: "約300席の屋上テラス、手ぶらBBQのコース、アクセスまでをまとめて確認できます。",
          },
          {
            href: "/course",
            label: "BBQコース4種類の料金と品数を比較する",
            description: "スタンダード・韓国・アメリカン・シュラスコの違いを一覧で確認できます。",
          },
          {
            href: "/course/samgyeopsal",
            label: "厚切りサムギョプサルのK-BBQコースを見る",
            description: "同じ屋上で選べる韓国スタイル。焼き方や付け合わせを紹介しています。",
          },
          {
            href: "/scene/private-party",
            label: "新宿の屋上を貸切にしてパーティーを開く",
            description: "50名から300名までの貸切について、対応できる範囲と相談の流れをまとめています。",
          },
          {
            href: "/scene/date",
            label: "夜景の見えるテラスでデートに使う",
            description: "カップルシートと、空の色が変わる時間帯の狙い方を紹介しています。",
          },
          {
            href: "/food-drink",
            label: "焼ける肉と海鮮、ドリンクの一覧を見る",
            description: "コースをまたいで提供している食材とドリンクをまとめています。",
          },
          {
            href: "/shinjuku-bbq",
            label: "新宿で手ぶらBBQができる場所を探している方へ",
            description: "食材・機材・後片付けの範囲と、コースの選び方をまとめた総合ページです。",
          },
        ]}
      />

      <SeoPageCta
        position="churrasco-bottom"
        heading="串が運ばれてくる席を、押さえておきませんか。"
        lead="本格シュラスコBBQコースは全14品・2.5時間飲み放題付きで5,480円。ご予約は食べログの予約ページから承っています。"
        image="/images/lounge-night-warm-lights.jpg"
      />
    </>
  );
}
