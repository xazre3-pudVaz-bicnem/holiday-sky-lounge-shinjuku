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
import { findCourse, PHOTO_NOTE } from "@/data/courses";
import type { Faq } from "@/data/content";

const PATH = "/course/samgyeopsal";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "BBQコース", path: "/course" },
  { name: "サムギョプサル＆K-BBQ", path: PATH },
];

const COURSE = findCourse("korean")!;

const TITLE = "新宿でサムギョプサルと飲み放題｜屋上のK-BBQコース";
const DESCRIPTION =
  "新大久保駅から徒歩4分、東新宿駅から徒歩2分の屋上テラスで、厚切りサムギョプサルを鉄板で焼く韓国BBQコース。全16品・2時間飲み放題付きで4,480円。サンチュやキムチも付き、女子会や韓国料理好きの集まりに向いています。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/images/korean-bbq-samgyeopsal-griddle.jpg",
  imageAlt: "鉄板で焼く厚切りサムギョプサルとキムチ、青唐辛子、にんにく",
  keywords: ["新宿 サムギョプサル", "新宿 韓国BBQ", "新大久保 サムギョプサル ビアガーデン", "新宿 K-BBQ 飲み放題"],
});

const FAQS: Faq[] = [
  {
    q: "サムギョプサルコースには何が含まれますか？",
    a: "厚切りのサムギョプサルを中心とした韓国スタイルのBBQプレートで、全16品の構成です。詳しい品目は時期により変わるため、最新の内容は食べログの予約ページでご確認ください。",
  },
  {
    q: "飲み放題は付いていますか？",
    a: "サムギョプサル＆K-BBQコース（4,480円）には2時間の飲み放題が付いています。生ビール、ボトルビール、カクテル、ハイボール、ワイン、ソフトドリンクからお選びいただけます。",
  },
  {
    q: "新大久保駅から歩けますか？",
    a: "新大久保駅から徒歩4分です。コリアンタウンを散策したあとに立ち寄れる距離で、東新宿駅A1出口からは徒歩2分、西武新宿駅からは徒歩3分でお越しいただけます。",
  },
  {
    q: "野菜やキムチも付いていますか？",
    a: "韓国スタイルのBBQプレートとして構成されており、サンチュやキムチなどの付け合わせを含みます。品目の詳細は時期により変わるため、予約ページの掲載内容をご確認ください。",
  },
  {
    q: "大人数でも予約できますか？",
    a: "できます。着席250名・立食300名まで対応しており、50名以上で貸切のご相談も可能です。10〜30名向けの個室エリアもあります。",
  },
  {
    q: "焼肉店とは何が違いますか？",
    a: "屋内の焼肉店と違い、屋上のオープンエアのテラス席で焼きます。においがこもらず、夜は街明かりを眺めながら食べられる点が大きな違いです。営業は11:30から23:45までの通し営業です。",
  },
];

export default function SamgyeopsalPage() {
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
            image: "/images/korean-bbq-samgyeopsal-griddle.jpg",
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
          faqJsonLd(FAQS, PATH),
        ]}
      />

      <PageHero
        en="Korean BBQ"
        title="厚切りサムギョプサルを、屋上の鉄板で。"
        lead="新大久保のコリアンタウンから徒歩4分。脂の透けた厚切り豚バラをじっくり焼いて、サンチュで巻いて食べる韓国スタイルのBBQコースです。"
        image="/images/korean-bbq-samgyeopsal-griddle.jpg"
        alt="鉄板で焼く厚切りサムギョプサルとキムチ、青唐辛子、にんにく"
      />

      <div className="bg-ivory pb-4">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <AnswerBlock
        question="新宿でサムギョプサルを飲み放題付きで食べられますか？"
        facts={[
          { label: "コース料金", value: `${COURSE.price.toLocaleString("ja-JP")}円` },
          { label: "品数", value: `全${COURSE.dishes}品` },
          { label: "飲み放題", value: `${COURSE.drinkMinutes / 60}時間` },
          { label: "新大久保駅から", value: "徒歩4分" },
        ]}
      >
        <p>
          HOLIDAY SKY LOUNGE 新宿（東京都新宿区大久保1-8-4
          K-SQUARE屋上）の「サムギョプサル＆K-BBQコース」は、全16品・2時間飲み放題付きで4,480円です。厚切りのサムギョプサルを鉄板で焼く韓国スタイルで、屋上のオープンエアのテラス席で食べられます。
        </p>
        <p>
          新大久保駅から徒歩4分、東新宿駅A1出口から徒歩2分。11:30から23:45まで通し営業しているため、コリアンタウンを歩いたあとの夕方からでも、仕事帰りの遅い時間からでも利用できます。
        </p>
      </AnswerBlock>

      {/* ---------- 焼き方 ---------- */}
      <section className="paper py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                en="How to Grill"
                lead="サムギョプサルは、焼く時間そのものが料理の一部です。急がずに脂を落としていくのがおいしく食べるコツです。"
              >
                脂が透けるまで、待つ。
              </SectionHeading>

              <Reveal delay={140}>
                <ol className="mt-10 space-y-6">
                  {[
                    ["鉄板が温まってから並べる", "厚切りの豚バラは、鉄板が十分に熱くなってから置きます。最初に触りすぎないほうが、表面がきれいに色づきます。"],
                    ["脂を落としながらじっくり焼く", "出てきた脂は鉄板の傾きに沿って流れます。焦らずに待つと、身が締まりながら脂だけが抜けていきます。"],
                    ["透き通ってきたらカット", "脂の部分が透明感を帯びたら食べごろです。ハサミで一口大に切り分けます。"],
                    ["サンチュで巻いて食べる", "サンチュにのせ、キムチやナムル、にんにくを添えて巻きます。付け合わせの組み合わせを変えると、最後まで味が単調になりません。"],
                  ].map(([t, b], i) => (
                    <li key={t} className="grid grid-cols-[auto_1fr] gap-x-5">
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

            <div className="lg:col-span-6">
              <Reveal variant="clip">
                <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/samgyeopsal-set.jpg"
                    alt="サンチュとキムチ、ナムルを添えたサムギョプサルの鉄板"
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-4 text-[0.76rem] text-ink-soft">{PHOTO_NOTE}</p>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-10 border-l-2 border-brand/40 pl-5 text-[0.87rem] leading-[2.05] text-ink-soft">
                  <p>
                    屋内の焼肉店との違いは、においがこもらないことです。屋上のオープンエアなので煙が上に抜けていき、髪や服に残りにくくなります。このあと新宿方面へ移動する予定がある日でも使いやすい環境です。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- コース詳細 ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            en="Course"
            className="max-w-3xl"
            lead="ほかのBBQコースと比べたときの位置づけです。韓国料理を目当てに来る場合は、このコースが基準になります。"
          >
            サムギョプサル＆K-BBQコースの内容
          </SectionHeading>

          <div className="mt-12">
            <DataTable
              head={["項目", "内容"]}
              rows={[
                ["コース名", COURSE.name],
                ["料金", `${COURSE.price.toLocaleString("ja-JP")}円（割引前価格 ${COURSE.listPrice?.toLocaleString("ja-JP")}円）`],
                ["品数", `全${COURSE.dishes}品`],
                ["飲み放題", `${COURSE.drinkMinutes / 60}時間付き`],
                ["主な内容", "厚切りサムギョプサル、韓国スタイルのBBQプレート"],
                ["席", "屋上テラス席（オープンエア）／屋根付きエリアあり"],
                ["向いている利用", "女子会、韓国料理好きの集まり、新大久保散策後の食事"],
              ]}
              note={NOTES.price}
            />
          </div>

          <Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">飲み放題の中身</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  {SHOP.beer}に加えて、カクテル、ハイボール、焼酎、ワイン、ソフトドリンクから選べます。韓国BBQの脂を流すなら、よく冷えたビールを最初の一杯に。2時間のうちにゆっくり切り替えていくのがおすすめです。
                </p>
              </div>
              <div className="border-t border-brand/20 pt-6">
                <h3 className="text-[1rem] text-ink">女子会での使い方</h3>
                <p className="mt-3 text-[0.86rem] leading-[2] text-ink-soft">
                  鉄板いっぱいに並んだサムギョプサルと、色のあるカクテル。ヤシの木とガーランドライトが背景に入るので、写真を撮る前提の集まりでも席の位置に悩みません。日没前後の時間帯は空の色が変わるため、予約時間の目安になります。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageFaq
        items={FAQS}
        heading="サムギョプサルコースについて、よくあるご質問"
        lead="ご予約前に多くいただくご質問をまとめました。"
        tone="paper"
      />

      <RelatedLinks
        lead="韓国BBQ以外のコースや、エリアからお探しの方はこちらもご覧ください。"
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
            href: "/area/shin-okubo",
            label: "新大久保から歩けるビアガーデンをお探しの方へ",
            description: "コリアンタウンからのアクセスと、散策後に立ち寄る使い方をまとめています。",
          },
          {
            href: "/scene/girls-party",
            label: "新宿の屋上テラスで女子会を開くなら",
            description: "写真の撮りやすい席や、時間帯の選び方を紹介しています。",
          },
          {
            href: "/course/churrasco",
            label: "串焼きシュラスコBBQコースの内容を見る",
            description: "同じ屋上で選べるブラジリアンスタイル。肉の部位と焼き方が異なります。",
          },
          {
            href: "/food-drink",
            label: "焼ける肉と海鮮、ドリンクの一覧を見る",
            description: "コースをまたいで提供している食材とドリンクをまとめています。",
          },
          {
            href: "/access",
            label: "新大久保駅・東新宿駅から店舗までのアクセス",
            description: "4駅それぞれのルートと、K-SQUARE屋上までの上がり方を案内しています。",
          },
        ]}
      />

      <SeoPageCta
        position="samgyeopsal-bottom"
        heading="鉄板の前に、席を取っておきませんか。"
        lead="サムギョプサル＆K-BBQコースは全16品・2時間飲み放題付きで4,480円。ご予約は食べログの予約ページから承っています。"
        image="/images/terrace-dusk-lights.jpg"
      />
    </>
  );
}
