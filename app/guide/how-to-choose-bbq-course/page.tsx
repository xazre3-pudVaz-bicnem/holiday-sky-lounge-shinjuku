import GuideLayout, { GuideSection } from "@/components/seo/GuideLayout";
import DataTable from "@/components/seo/DataTable";
import { buildMetadata } from "@/lib/seo";
import { findGuide } from "@/data/guides";
import { NOTES } from "@/lib/site-config";
import { COURSES, OTHER_PLANS } from "@/data/courses";
import type { Faq } from "@/data/content";

const GUIDE = findGuide("how-to-choose-bbq-course")!;
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
    q: "はじめてならどのコースがいいですか？",
    a: "肉と海鮮の両方が入ったスタンダードBBQ（全13品・2時間飲み放題付・3,980円）が、内容を把握しやすい構成です。ブラックアンガスランプ、BBQポーク、チキン、ソーセージに、ガーリックシュリンプと焼きイカが付きます。",
  },
  {
    q: "飲み放題の時間はどう選べばいいですか？",
    a: "2時間・2.5時間・3時間のコースがあります。二次会の予定がある場合は2時間、その店で解散する場合は2.5時間以上を選ぶと時間に追われません。",
  },
  {
    q: "コースを人数分まとめて頼む必要がありますか？",
    a: "コースは1名あたりの料金設定です。同じテーブルで別のコースを組み合わせられるかは予約時に店舗へご確認ください。",
  },
  {
    q: "食材を持ち込むプランもありますか？",
    a: "RENTALコースがあります。機材・食器のレンタルのみのプラン（2,000円）と、生ビール2種を含む2時間飲み放題が付いたプラン（3,300円）から選べます。",
  },
];

export default function ChooseCourseGuidePage() {
  return (
    <GuideLayout
      guide={GUIDE}
      lead="4つのBBQコースは、肉の内容と飲み放題の長さが違います。どこから絞り込めば迷わないか、判断の順番にそって整理しました。"
      faqs={FAQS}
      ctaHeading="コースが決まったら、日程の確保を。"
      ctaLead="ご予約は食べログの予約ページから。コースはご予約時に選択いただけます。"
      related={[
        { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "全コースの詳細と、そのほかのプランを一覧にまとめています。" },
        { href: "/course/samgyeopsal", label: "厚切りサムギョプサルのK-BBQコースを見る", description: "韓国スタイルの焼き方と付け合わせを紹介しています。" },
        { href: "/course/churrasco", label: "串焼きシュラスコBBQコースの内容を見る", description: "部位ごとの違いと、アメリカンBBQとの比較を掲載しています。" },
        { href: "/shinjuku-bbq", label: "新宿で手ぶらBBQができる場所を探している方へ", description: "食材・機材・後片付けの範囲をまとめた総合ページです。" },
      ]}
    >
      <GuideSection title="結論：この4ステップで決まります">
        <p>
          コース選びで迷うのは、比較する軸が多すぎるからです。次の順番で絞り込むと、たいてい2つまで候補が減ります。
        </p>
        <DataTable
          head={["順番", "決めること", "判断の目安"]}
          rows={[
            ["1", "滞在時間", "二次会あり→2時間／ここで解散→2.5時間以上"],
            ["2", "1名あたりの予算", "3,980円／4,480円／4,980円／5,480円の4段階"],
            ["3", "食べたい肉", "肉と海鮮／サムギョプサル／ブラックアンガス牛／シュラスコ"],
            ["4", "同席者の好み", "韓国料理が好き→K-BBQ、量を食べたい→アメリカン"],
          ]}
        />
      </GuideSection>

      <GuideSection title="ステップ1：滞在時間から飲み放題を決める">
        <p>
          飲み放題の長さはコースごとに決まっています。スタンダードBBQとサムギョプサル＆K-BBQは2時間、アメリカンBBQとシュラスコBBQは2.5時間、JAPANESE BBQは3時間です。
        </p>
        <p>
          二次会の予定がある宴会では2時間で十分なことが多く、そのまま解散する集まりでは2.5時間あると急かされません。19時開始で2.5時間なら21時30分まで。ドリンクのラストオーダーは23:30なので、遅い時間からの開始でも余裕があります。
        </p>
      </GuideSection>

      <GuideSection title="ステップ2：予算の段階を選ぶ">
        <p>1名あたりの料金は4段階です。人数が多い宴会ほど、この差が総額に効いてきます。</p>
        <DataTable
          head={["コース", "料金", "品数", "飲み放題", "主な肉"]}
          rows={COURSES.map((c) => [
            c.name,
            `${c.price.toLocaleString("ja-JP")}円`,
            `全${c.dishes}品`,
            `${c.drinkMinutes / 60}時間`,
            c.points[0],
          ])}
          note={NOTES.price}
        />
      </GuideSection>

      <GuideSection title="ステップ3：食べたい肉で決める">
        <p>
          ここまでで候補が2つ程度に絞れているはずです。あとは何を食べたいかで決めます。肉と海鮮の両方を食べたいならスタンダードBBQ、厚切りの豚バラを鉄板で焼きたいならサムギョプサル＆K-BBQ、牛肉を部位ごとに食べ比べたいならアメリカンBBQ、串から切り分ける演出を楽しみたいならシュラスコBBQです。
        </p>
        <p>
          迷ったときは、同席する人の好みで決めるのが結果的にうまくいきます。韓国料理が好きな人が多い集まりならK-BBQ、肉の量を重視する人が多いならアメリカンBBQという具合です。
        </p>
      </GuideSection>

      <GuideSection title="コース以外の選択肢">
        <p>
          料理は単品で頼みたい日には、2時間プレミアム飲み放題プラン（1,980円）だけの利用もできます。食材を自分で用意したい場合は、機材と食器を借りるRENTALコース（2,000円／飲み放題付き3,300円）があります。
        </p>
        <DataTable
          head={["プラン", "料金", "内容"]}
          rows={OTHER_PLANS.map((p) => [p.name, `${p.price.toLocaleString("ja-JP")}円`, p.note])}
          note={NOTES.price}
        />
      </GuideSection>
    </GuideLayout>
  );
}
