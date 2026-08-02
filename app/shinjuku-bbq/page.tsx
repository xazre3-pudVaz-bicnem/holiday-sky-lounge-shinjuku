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
import { ACCESS, SHOP, NOTES } from "@/lib/site-config";
import { COURSES, PHOTO_NOTE } from "@/data/courses";
import type { Faq } from "@/data/content";

const PATH = "/shinjuku-bbq";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "新宿の手ぶらBBQ", path: PATH },
];

const TITLE = "新宿で手ぶらBBQ｜屋上で食材も機材も込みのバーベキュー";
const DESCRIPTION =
  "新宿でバーベキューをするなら、東新宿駅A1出口から徒歩2分の屋上「HOLIDAY SKY LOUNGE 新宿」。食材・グリル・食器・後片付けまで店舗側で用意する手ぶらBBQを、11:30から23:45まで楽しめます。肉と海鮮のコースは飲み放題付き3,980円から。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/bbq-long-table-grill.jpg",
  imageAlt: "グリルをセットしたロングテーブルが並ぶ屋上のBBQ席",
  keywords: ["新宿 BBQ", "新宿 手ぶらBBQ", "新宿 バーベキュー", "新宿 BBQ 屋上", "東新宿 BBQ"],
});

const FAQS: Faq[] = [
  {
    q: "新宿で本当に手ぶらでBBQができますか？",
    a: "HOLIDAY SKY LOUNGE 新宿では、食材・グリル・炭火・食器・調味料の用意から後片付けまでを店舗側で行います。お客様にご用意いただくものはなく、仕事帰りや買い物のあとにそのままお越しいただけます。",
  },
  {
    q: "BBQの食材は自分で焼きますか？",
    a: "セルフスタイルです。下ごしらえを済ませた食材が焼くだけの状態で運ばれてきますので、テーブルのグリルでご自身で焼いてお召し上がりいただきます。焼き方に迷われた場合はスタッフへお声がけください。",
  },
  {
    q: "食材を持ち込んでBBQすることはできますか？",
    a: "食材をお持ち込みいただける「RENTALコース」があります。機材・食器のレンタルのみのプラン（お一人様2,000円）と、生ビール2種を含む2時間飲み放題が付いたプラン（お一人様3,300円）から選べます。持ち込みの条件は予約時にご確認ください。",
  },
  {
    q: "BBQに適した服装はありますか？",
    a: "ドレスコードはありません。屋外のテラス席で炭火を使うため、においが付いても気にならない服装をおすすめします。屋上のため風が通り、夜は体感温度が下がることがあります。",
  },
  {
    q: "雨の日でもBBQはできますか？",
    a: "屋根のあるエリアもございますが、天候によって営業内容が変わる場合があります。当日の営業状況は食べログの予約ページ、または店舗（080-6953-3136）へご確認ください。",
  },
  {
    q: "何名から予約できますか？",
    a: "少人数から大人数まで対応しています。着席250名・立食300名までご利用いただけ、50名以上で貸切のご相談も可能です。人数が確定していない場合も、予約時に目安をお伝えいただけます。",
  },
];

export default function ShinjukuBbqPage() {
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
            image: "/images/bbq-long-table-grill.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Shinjuku BBQ"
        title="新宿の屋上で、食材も機材も込みの手ぶらBBQ"
        lead="買い出しも炭起こしも後片付けもいりません。東新宿駅A1出口から徒歩2分、K-SQUAREの屋上で、焼くだけの状態から始められるバーベキューです。"
        image="/images/bbq-long-table-grill.jpg"
        alt="グリルをセットしたロングテーブルとスツールが並ぶ屋上の席"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿で手ぶらBBQができる場所を探しています。"
        facts={[
          { label: "営業時間", value: `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}）` },
          { label: "最寄り駅", value: "東新宿駅 A1出口から徒歩2分" },
          { label: "コース料金", value: "3,980円〜（2時間飲み放題付）" },
          { label: "席数", value: `${SHOP.seats}（${SHOP.seatsDetail}）` },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE
          新宿（東京都新宿区大久保1-8-4 K-SQUARE屋上）では、食材・グリル・炭火・食器の用意から後片付けまでを店舗側で行う手ぶらBBQを提供しています。持ち物は必要なく、東新宿駅A1出口から徒歩2分、11:30から23:45まで通し営業しているため、ランチにも仕事帰りにも利用できます。
        </p>
        <p>
          コースは肉と海鮮のスタンダードBBQ（全13品・2時間飲み放題付・3,980円）を基本に、韓国スタイル、アメリカン、ブラジリアンの4種類。食材を持ち込んで機材だけ借りるプランも用意されています。
        </p>
      </AnswerBlock>

      {/* ---------- 手ぶらの中身 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                en="Hands Free"
                lead="「手ぶら」と書かれていても、どこまで用意されているのかは店によって違います。ここで店舗側が受け持つ範囲をはっきりさせておきます。"
              >
                何を用意しなくていいのか。
              </SectionHeading>
              <Reveal delay={180}>
                <div className="reveal-zoom relative mt-12 aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/bbq-grill-table-day.jpg"
                    alt="食材を焼くだけの状態でグリルがセットされたテーブル席"
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
              <DataTable
                caption="手ぶらBBQで店舗側が用意するもの／お客様にご用意いただくもの"
                head={["項目", "店舗が用意", "内容"]}
                rows={[
                  ["食材", "○", "下味・下ごしらえを済ませた状態で提供"],
                  ["グリル・炭火", "○", "着席時にテーブルへセット済み"],
                  ["食器・カトラリー", "○", "取り皿、トング、箸などを用意"],
                  ["調味料・タレ", "○", "コースに応じて用意"],
                  ["後片付け・洗い物", "○", "そのままお帰りいただけます"],
                  ["ドリンク", "○", "飲み放題付きコース、または単品でオーダー"],
                  ["食材の持ち込み", "任意", "RENTALコースを選んだ場合のみ持ち込み可"],
                ]}
                note="RENTALコース（お一人様2,000円）は機材と食器のレンタルのみのプランです。食材をご自身で用意したい場合にご利用ください。"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 何が焼けるか ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="What You Grill"
            className="max-w-3xl"
            lead="コースによって組み合わせは変わりますが、網の上にのるのはこうした顔ぶれです。"
          >
            肉と海鮮、両方を焼く。
          </SectionHeading>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-16">
            <Reveal variant="clip">
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/bbq-meat-seafood-grill.jpg"
                  alt="鉄板で焼き上げた牛肉とホタテ、海老、グリル野菜を盛り合わせたBBQ"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-[1.1rem] text-ink">肉</h3>
              <p className="mt-3 text-[0.87rem] leading-[2] text-ink-soft">
                ブラックアンガス牛のランプ・リブ・ハラミ、BBQポーク、スパイシーチキン、グリルソーセージ。コースによっては厚切りのサムギョプサルや、串焼きのシュラスコが加わります。網にのせて、脂がはぜる音を聞きながら焼き上げていきます。
              </p>
            </Reveal>

            <Reveal variant="clip" delay={120}>
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/bbq-mixed-grill-platter.jpg"
                  alt="海老・チキン・ソーセージ・グリル野菜を盛り合わせたBBQプレート"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-[1.1rem] text-ink">海鮮と野菜</h3>
              <p className="mt-3 text-[0.87rem] leading-[2] text-ink-soft">
                殻ごと焼くガーリックシュリンプ、醤油を垂らした焼きイカ、季節のグリル野菜。肉の合間にはさむと味に緩急がつき、最後の一皿まで箸が止まりません。〆にはガーリックライスを用意しているコースもあります。
              </p>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-8 text-[0.76rem] text-ink-soft">{PHOTO_NOTE}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- コースの選び方 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Choose"
            className="max-w-3xl"
            lead="4つのBBQコースは、肉の内容と飲み放題の長さが違います。人数と滞在時間から選ぶと迷いません。"
          >
            どのBBQコースを選ぶか
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["コース", "料金", "品数", "飲み放題", "向いている人"]}
              rows={[
                ["お肉と海鮮のスタンダードBBQ", "3,980円", "全13品", "2時間", "はじめての来店・肉も海鮮も食べたい"],
                ["サムギョプサル＆K-BBQ", "4,480円", "全16品", "2時間", "韓国料理が好き・女子会"],
                ["ブラックアンガス牛のアメリカンBBQ", "4,980円", "全16品", "2.5時間", "とにかく肉を食べたい・長めに飲みたい"],
                ["本格シュラスコBBQ", "5,480円", "全14品", "2.5時間", "その場でカットする演出を楽しみたい"],
                ["ランチ限定BBQ4種盛りプレート", "2,980円", "全10品", "2時間", "昼から軽めに始めたい"],
              ]}
              note={NOTES.price}
            />
          </div>
        </div>
      </section>

      {/* ---------- 昼と夜 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading en="Day & Night" className="max-w-3xl" lead="同じ席でも、来る時間帯でまったく印象が変わります。">
            昼のBBQと、夜のBBQ
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal variant="clip">
              <figure>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/terrace-daytime-drinking.jpg"
                    alt="日差しの下でパラソルを開いた昼のテラス席"
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-0 top-0 bg-white/92 px-4 py-2">
                    <span className="u-en text-[0.7rem] text-brand">11:30 —</span>
                  </figcaption>
                </div>
                <p className="mt-4 text-[0.85rem] leading-[1.95] text-ink-soft">
                  パラソルを開いた明るいテラス。ランチ限定コースがあり、昼から飲み放題を付けられます。休日に家族で使う場合や、写真をきれいに撮りたい場合はこの時間帯が向いています。
                </p>
              </figure>
            </Reveal>

            <Reveal variant="clip" delay={130}>
              <figure>
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/terrace-night-string-lights.jpg"
                    alt="ガーランドライトが灯る夜のテラス席"
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-0 top-0 bg-ember/85 px-4 py-2">
                    <span className="u-en text-[0.7rem] text-sun">— 23:45</span>
                  </figcaption>
                </div>
                <p className="mt-4 text-[0.85rem] leading-[1.95] text-ink-soft">
                  日が落ちると天井のガーランドライトが灯り、眼下に街明かりが広がります。フードのラストオーダーは23:15、ドリンクは23:30。仕事帰りから終電前まで使える時間設定です。
                </p>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- アクセスと予約 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading en="Access & Booking">
                4駅から歩けて、
                <br />
                予約はページ上で完結。
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <DataTable
                caption="最寄り駅からの所要時間"
                head={["駅", "路線", "徒歩"]}
                rows={ACCESS.map((a) => [a.station, a.line, a.detail])}
              />
              <Reveal>
                <div className="mt-8 space-y-4 text-[0.87rem] leading-[2.05] text-ink-soft">
                  <p>
                    住所は東京都新宿区大久保1-8-4「K-SQUARE」。建物のエレベーターで最上階まで上がり、通路を進んだ先が屋上の入口です。屋上の店舗のため、初めての方は入口で迷いやすい場所です。分かりにくい場合は店舗（080-6953-3136）へお電話ください。
                  </p>
                  <p>
                    ご予約は食べログの予約ページから、日時・人数・コースを選ぶだけで完了します。当日の空席状況も同じページで確認できます。席数に限りがあるため、事前のご予約をおすすめしています。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <PageFaq
        items={FAQS}
        heading="新宿の手ぶらBBQについて、よくあるご質問"
        lead="ご予約前に多くいただくご質問をまとめました。"
      />

      <RelatedLinks
        lead="BBQの内容をさらに詳しく知りたい方、目的が決まっている方はこちらもご覧ください。"
        items={[
          {
            href: "/course",
            label: `BBQコース${COURSES.length}種類の料金と品数を比較する`,
            description: "スタンダード・韓国・アメリカン・シュラスコの4コースと、ランチ限定・持ち込みプランの一覧です。",
          },
          {
            href: "/course/samgyeopsal",
            label: "厚切りサムギョプサルのK-BBQコースを見る",
            description: "新大久保のすぐ隣という立地を活かした韓国スタイルのBBQ。焼き方や付け合わせも紹介しています。",
          },
          {
            href: "/course/churrasco",
            label: "串焼きシュラスコBBQコースの内容を見る",
            description: "ピッカーニャやサーロインを串のまま焼き、その場でカットするブラジリアンスタイルです。",
          },
          {
            href: "/guide/how-to-choose-bbq-course",
            label: "人数と目的からBBQコースを選ぶ手順",
            description: "何を基準に選べばいいか迷ったときのために、判断の順番をまとめたガイドです。",
          },
          {
            href: "/scene/company-party",
            label: "新宿で大人数の宴会を開く幹事の方へ",
            description: "着席250名・立食300名までの宴会と、幹事が事前に確認しておきたい項目をまとめています。",
          },
          {
            href: "/access",
            label: "東新宿駅から店舗までのアクセスと入口の場所",
            description: "4駅それぞれからのルートと、K-SQUARE屋上までの上がり方を写真付きで案内しています。",
          },
        ]}
      />

      <SeoPageCta
        position="shinjuku-bbq-bottom"
        heading="新宿の屋上で、手ぶらのBBQを。"
        lead="食材も機材も用意して、席でお待ちしています。ご予約は食べログの予約ページから、日時と人数を選ぶだけです。"
        image="/images/terrace-night-long-view.jpg"
      />
    </>
  );
}
