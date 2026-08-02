import GuideLayout, { GuideSection } from "@/components/seo/GuideLayout";
import DataTable from "@/components/seo/DataTable";
import { buildMetadata } from "@/lib/seo";
import { findGuide } from "@/data/guides";
import { SHOP } from "@/lib/site-config";
import type { Faq } from "@/data/content";

const GUIDE = findGuide("what-to-bring")!;
const PATH = `/guide/${GUIDE.slug}`;

export const metadata = buildMetadata({
  title: GUIDE.title,
  description: GUIDE.description,
  path: PATH,
  image: GUIDE.image,
  imageAlt: GUIDE.imageAlt,
  keywords: GUIDE.keywords,
});

const FAQS: Faq[] = [
  {
    q: "本当に何も持たずに行けますか？",
    a: "BBQに必要な食材・グリル・炭火・食器・調味料は店舗側で用意し、後片付けも行います。持ち物は必要ありません。ただし屋外のテラス席のため、季節によっては羽織るものがあると過ごしやすくなります。",
  },
  {
    q: "服装に決まりはありますか？",
    a: "ドレスコードはありません。屋外で炭火を使うため、においが付いても気にならない服装をおすすめします。",
  },
  {
    q: "スマートフォンの充電はできますか？",
    a: "食べログとぐるなびの店舗ページには、電源が利用できる旨が記載されています。席によって利用可否が異なる可能性があるため、必要な場合はご来店時にスタッフへお尋ねください。",
  },
  {
    q: "Wi-Fiはありますか？",
    a: "食べログ・ホットペッパーグルメ・ぐるなびの各店舗ページに、無料Wi-Fiがある旨が記載されています。",
  },
];

export default function WhatToBringGuidePage() {
  return (
    <GuideLayout
      guide={GUIDE}
      lead="食材も機材も店舗側で用意するので、持ち物は基本的に必要ありません。それでも屋上という環境だからこそ、あると快適なものがいくつかあります。"
      faqs={FAQS}
      ctaHeading="準備がいらないから、思い立った日に。"
      ctaLead="ご予約は食べログの予約ページから。日時と人数を選ぶだけでお申し込みいただけます。"
      related={[
        { href: "/shinjuku-bbq", label: "新宿で手ぶらBBQができる場所を探している方へ", description: "店舗が用意するものと、お客様が用意するものを表で整理しています。" },
        { href: "/guide/rainy-day", label: "雨の日の営業と確認方法について", description: "天候が読めない日の確認手順をまとめています。" },
        { href: "/scene/lunch", label: "新宿で昼から飲めるランチBBQについて", description: "日差し対策を含めた昼の過ごし方を紹介しています。" },
        { href: "/faq", label: "予約・持ち込み・貸切などのよくある質問を見る", description: "来店前の疑問をまとめて確認できます。" },
      ]}
    >
      <GuideSection title="結論：持ち物は不要。あると快適なものが3つ">
        <p>
          HOLIDAY SKY LOUNGE 新宿の手ぶらBBQでは、食材・グリル・炭火・食器・調味料の用意から後片付けまでを店舗側で行います。そのため、BBQのための持ち物はありません。
        </p>
        <p>
          一方で、屋上のオープンエアという環境に由来する注意点はあります。次の3つを用意しておくと、当日の快適さが変わります。
        </p>
        <DataTable
          head={["あると快適なもの", "理由"]}
          rows={[
            ["羽織れる上着", "屋上は風が通るため、日が落ちると体感温度が下がります。夏場でも夜は冷えることがあります。"],
            ["折りたたみ傘", "テラスは屋外です。天候が不安定な日は移動時にも役立ちます。"],
            ["髪をまとめるもの", "風が強い日と、炭火のにおい対策の両方に効きます。"],
          ]}
        />
      </GuideSection>

      <GuideSection title="服装の考え方">
        <p>
          ドレスコードはありません。仕事帰りのスーツでも、Tシャツでも問題なく利用できます。判断の基準になるのは「においが付いても気にならないか」の一点です。
        </p>
        <p>
          屋上のオープンエアなので、屋内の焼肉店に比べれば煙は上に抜けていきます。それでも炭火の前に座る以上、多少のにおいは付きます。このあと人と会う予定がある日は、上着を脱いで椅子の背にかけておくだけでも違います。
        </p>
        <p>
          足元は、屋上まではエレベーターで上がるため特別な配慮は不要です。ただし床は屋外用の素材のため、ヒールの細い靴は歩きにくく感じることがあります。
        </p>
      </GuideSection>

      <GuideSection title="季節ごとの注意点">
        <DataTable
          head={["時期", "気をつけること", "対策"]}
          rows={[
            ["日差しの強い時期", "昼の時間帯は直射日光が当たります", "パラソル席や屋根付きエリアを希望する／日焼け止め"],
            ["夜の時間帯", "屋上は風が通り、体感温度が下がります", "羽織れるものを1枚"],
            ["天候が不安定な日", "テラスは屋外です", "折りたたみ傘／当日の営業状況を確認"],
          ]}
          note="席のご希望はご予約時にお伝えいただけますが、当日の状況によりご希望に添えない場合があります。"
        />
      </GuideSection>

      <GuideSection title="店舗にある設備">
        <p>
          掲載元で確認できる設備は次のとおりです。長時間の滞在や、写真を撮りながら過ごす場合に関係してくる項目です。
        </p>
        <DataTable
          head={["設備", "備考"]}
          rows={[
            ["無料Wi-Fi", "食べログ・ホットペッパーグルメ・ぐるなびに記載"],
            ["電源", "食べログ・ぐるなびに記載。席により利用可否が異なる場合あり"],
            ["カラオケ", "VIPルーム（限定1室）"],
            ["喫煙", SHOP.smoking],
            ["英語メニュー", "ホットペッパーグルメ・ぐるなびに記載"],
            ["駐車場", SHOP.parking],
          ]}
        />
      </GuideSection>
    </GuideLayout>
  );
}
