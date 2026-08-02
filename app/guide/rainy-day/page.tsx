import GuideLayout, { GuideSection } from "@/components/seo/GuideLayout";
import DataTable from "@/components/seo/DataTable";
import { buildMetadata } from "@/lib/seo";
import { findGuide } from "@/data/guides";
import { LINKS, SHOP } from "@/lib/site-config";
import type { Faq } from "@/data/content";

const GUIDE = findGuide("rainy-day")!;
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
    q: "雨が降ったら営業しませんか？",
    a: "屋根のあるエリアもございますが、天候によって営業内容が変わる場合があります。中止・変更の判断基準は掲載情報では確認できないため、当日の営業状況は食べログの予約ページ、または店舗（080-6953-3136）へご確認ください。",
  },
  {
    q: "雨の予報でもキャンセルできますか？",
    a: "ホットペッパーグルメの店舗ページには、当日0時以降のキャンセルから料金が発生する旨が記載されています。天候を理由とした取り扱いは掲載情報では確認できないため、ご予約時に条件をご確認ください。",
  },
  {
    q: "屋根のある席を指定できますか？",
    a: "屋根付きのエリアがあります。席のご希望はご予約時にお伝えいただけますが、当日の状況によりご希望に添えない場合があります。",
  },
  {
    q: "傘は必要ですか？",
    a: "屋上までは建物内のエレベーターで上がりますが、テラスは屋外です。天候が不安定な日は、折りたたみ傘や羽織るものがあると安心です。",
  },
];

export default function RainyDayGuidePage() {
  return (
    <GuideLayout
      guide={GUIDE}
      lead="屋上のビアガーデンを予約したあと、天気予報が気になったときに何をどこで確認すればいいか。判断に必要な手順だけをまとめました。"
      faqs={FAQS}
      ctaHeading="当日の状況は、予約ページで確認できます。"
      ctaLead="ご予約と空席状況の確認は食べログの予約ページから。個別のご相談は店舗（080-6953-3136）へお願いします。"
      related={[
        { href: "/faq", label: "予約・持ち込み・貸切などのよくある質問を見る", description: "雨天時以外の疑問もまとめて確認できます。" },
        { href: "/space", label: "屋根付きエリアを含む席の様子を見る", description: "テラスと屋根付きエリアの写真を掲載しています。" },
        { href: "/guide/what-to-bring", label: "手ぶらBBQの持ち物と服装のガイド", description: "天候が読めない日にあると安心なものをまとめています。" },
        { href: "/access", label: "K-SQUARE屋上までの行き方を確認する", description: "建物入口からエレベーターまでの経路を案内しています。" },
      ]}
    >
      <GuideSection title="まず結論：判断は当日、店舗と予約ページで確認する">
        <p>
          HOLIDAY SKY LOUNGE 新宿には屋根のあるエリアもありますが、天候によって営業内容が変わる場合があります。どの程度の雨で内容が変わるのかという基準は、食べログ・ホットペッパーグルメ・ぐるなびのいずれにも記載がありません。そのため、雨が予想される日は当日に確認するのが確実です。
        </p>
        <DataTable
          head={["確認したいこと", "確認先"]}
          rows={[
            ["当日営業しているか", "食べログの予約ページ／店舗へ電話"],
            ["屋根付きエリアを使えるか", `店舗（${SHOP.telShop}）へ電話`],
            ["予約の変更・キャンセルの可否", "予約したサイトの予約内容ページ"],
            ["最新のお知らせ", `公式Instagram（${LINKS.instagramHandle}）`],
          ]}
        />
      </GuideSection>

      <GuideSection title="予約する時点でやっておくこと">
        <p>
          天候が読めない時期に予約するなら、この3つを先に決めておくと当日慌てません。
        </p>
        <p>
          1つ目は、キャンセル・人数変更の条件を予約時に確認しておくこと。ホットペッパーグルメの店舗ページには、当日0時以降のキャンセルから料金が発生する旨が記載されています。予約サイトによって条件が異なる可能性があるため、申し込んだページの記載を確認しておきます。
        </p>
        <p>
          2つ目は、屋根付きエリアの希望を伝えておくこと。当日の状況によりご希望に添えない場合はありますが、事前に伝えておくほうが調整の余地があります。
        </p>
        <p>
          3つ目は、参加者への連絡手段を決めておくこと。大人数の宴会では、当日の判断を全員へ伝える必要があります。連絡先をまとめておくだけで、当日の負担がかなり減ります。
        </p>
      </GuideSection>

      <GuideSection title="当日、雨が降っているときの流れ">
        <p>
          まず食べログの予約ページで営業状況を確認します。ページ上で判断がつかない場合は、店舗（{SHOP.telShop}）へ直接電話するのが早い方法です。営業している場合は、屋根付きエリアの利用可否もあわせて確認しておくと、席に着いてからの想定がしやすくなります。
        </p>
        <p>
          屋上までは建物内のエレベーターで上がるため、移動中に濡れることはほとんどありません。ただしテラス自体は屋外です。折りたたみ傘と、羽織れるものを1枚持っておくと安心です。雨の日は気温も下がりやすいため、夏場でも上着があると過ごしやすくなります。
        </p>
      </GuideSection>

      <GuideSection title="雨の日ならではの過ごし方">
        <p>
          天候が読めない日は、屋根付きエリアやカウンター席を中心に使うことになります。人出が少なくなる分、落ち着いて過ごせる時間帯でもあります。カラオケを備えたVIPルーム（限定1室）もあるため、天候に左右されにくい過ごし方を相談してみるのも一つの方法です。
        </p>
      </GuideSection>
    </GuideLayout>
  );
}
