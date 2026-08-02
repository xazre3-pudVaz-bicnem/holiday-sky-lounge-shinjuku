import GuideLayout, { GuideSection } from "@/components/seo/GuideLayout";
import DataTable from "@/components/seo/DataTable";
import { buildMetadata } from "@/lib/seo";
import { findGuide } from "@/data/guides";
import { ACCESS, SHOP } from "@/lib/site-config";
import type { Faq } from "@/data/content";

const GUIDE = findGuide("large-group-checklist")!;
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
    q: "人数が確定していなくても予約できますか？",
    a: "確定前でもご相談いただけます。上限と下限の人数をお伝えいただくと席の確保がしやすくなります。最終人数の連絡期限は、ご予約時にご確認ください。",
  },
  {
    q: "下見はできますか？",
    a: "下見の可否は掲載情報では確認できません。ご希望の場合は店舗（080-6953-3136）へ直接お問い合わせください。",
  },
  {
    q: "キャンセル料はいつから発生しますか？",
    a: "ホットペッパーグルメの店舗ページには、当日0時以降のキャンセルから料金が発生する旨が記載されています。予約サイトや貸切かどうかで条件が異なる可能性があるため、ご予約時に必ずご確認ください。",
  },
  {
    q: "集合場所はどう案内すればいいですか？",
    a: "屋上の店舗のため、「K-SQUAREの1F入口に集合、エレベーターで最上階へ」と案内しておくと迷いません。住所は東京都新宿区大久保1-8-4です。",
  },
];

export default function LargeGroupGuidePage() {
  return (
    <GuideLayout
      guide={GUIDE}
      lead="人数の確定、コース選び、集合場所の共有、雨天時の連絡。大人数の宴会で幹事がやることを、時系列で並べました。"
      faqs={FAQS}
      ctaHeading="日程が固まったら、席の相談から。"
      ctaLead="ご予約は食べログの予約ページから。人数やレイアウトのご相談は店舗（080-6953-3136）へお願いします。"
      related={[
        { href: "/scene/company-party", label: "新宿で大人数の会社宴会を開く幹事の方へ", description: "人数別の席の組み方と、店舗側の対応範囲をまとめています。" },
        { href: "/scene/private-party", label: "新宿の屋上を貸切にしてパーティーを開く", description: "50名から300名までの貸切について、条件と相談の流れをまとめています。" },
        { href: "/guide/how-to-choose-bbq-course", label: "人数と目的からBBQコースを選ぶ手順", description: "予算と滞在時間からコースを絞り込む方法です。" },
        { href: "/access", label: "K-SQUARE屋上までの行き方を確認する", description: "参加者へ共有する集合場所の案内に使えます。" },
      ]}
    >
      <GuideSection title="① 予約する前に決めること">
        <p>
          会場を押さえる前にこの4つを決めておくと、店舗とのやり取りが1往復で済みます。人数は確定していなくても、幅で伝えられれば問題ありません。
        </p>
        <DataTable
          head={["決めること", "目安"]}
          rows={[
            ["おおよその人数", "上限と下限。着席250名・立食300名まで対応"],
            ["希望日程と開始時間", "第2希望まであると調整しやすい"],
            ["1名あたりの予算", "3,980円／4,480円／4,980円／5,480円の4段階"],
            ["滞在時間", "飲み放題は2時間・2.5時間・3時間から選ぶ"],
          ]}
        />
      </GuideSection>

      <GuideSection title="② 予約時に伝えること・確認すること">
        <p>
          予約の連絡時に確認しておくと、当日の想定外が減ります。特にキャンセル規定と最終人数の連絡期限は、後から効いてくる項目です。
        </p>
        <p>
          伝えること：人数、開始時間、コース、飲み放題の長さ、席のタイプ（個室エリア／ロングテーブル／屋根付きエリア）、進行に必要な設備（VIPルームの利用など）。
        </p>
        <p>
          確認すること：最終人数を連絡する期限、キャンセル・人数変更の条件、支払い方法、当日の受付の流れ。ホットペッパーグルメには当日0時以降のキャンセルから料金が発生する旨が記載されていますので、予約したサイトの条件を必ず確認してください。
        </p>
      </GuideSection>

      <GuideSection title="③ 参加者へ共有すること">
        <p>
          屋上の店舗なので、住所だけを送ると当日「入口が分からない」という連絡が来ます。次の内容をまとめて共有しておくと、問い合わせがほぼなくなります。
        </p>
        <DataTable
          head={["共有する内容", "文面の例"]}
          rows={[
            ["店名と住所", `${SHOP.name}／${SHOP.addressFull}`],
            ["集合場所", "K-SQUARE 1F入口に集合、エレベーターで最上階へ"],
            ["最寄り駅", ACCESS.map((a) => `${a.station}${a.detail}`).join("／")],
            ["開始時間と終了目安", "19:00開始／飲み放題2.5時間"],
            ["服装の注意", "屋外のテラス席・炭火を使用。上着があると安心"],
            ["緊急連絡先", `店舗直通 ${SHOP.telShop}`],
          ]}
        />
      </GuideSection>

      <GuideSection title="④ 当日までに確認すること">
        <p>
          前日から当日にかけては、天候と最終人数の2つだけ見ておけば足ります。屋根のあるエリアもありますが、天候によって営業内容が変わる場合があるため、当日の営業状況は食べログの予約ページ、または店舗（{SHOP.telShop}）でご確認ください。
        </p>
        <p>
          人数の増減が出た場合は、判明した時点で早めに連絡します。飲み放題の開始時刻は着席時からになることが一般的なため、遅れて合流する参加者がいる場合は、その扱いも確認しておくと会計時に揉めません。
        </p>
      </GuideSection>

      <GuideSection title="人数別にできることの早見表">
        <DataTable
          head={["人数", "席の組み方", "貸切"]}
          rows={[
            ["10〜20名", "個室エリア／テラスのテーブル連結", "—"],
            ["20〜30名", "個室エリア／ロングテーブル1列", "—"],
            ["30〜50名", "ロングテーブルを複数列連結", "—"],
            ["50〜300名", "フロアを広く使った配置", "相談可"],
          ]}
          note={`収容人数は${SHOP.seatsDetail}。個室エリアは${SHOP.privateRoom}です。`}
        />
      </GuideSection>
    </GuideLayout>
  );
}
