import GuideLayout, { GuideSection } from "@/components/seo/GuideLayout";
import DataTable from "@/components/seo/DataTable";
import { buildMetadata } from "@/lib/seo";
import { findGuide } from "@/data/guides";
import { SHOP } from "@/lib/site-config";
import type { Faq } from "@/data/content";

const GUIDE = findGuide("best-time-for-night-view")!;
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
    q: "何時に予約すれば夜景がきれいに見えますか？",
    a: "日没の1時間ほど前に着席できる時間で予約すると、明るい空・夕焼け・夜景の3つを1回の食事で見られます。日没時刻は季節により変わるため、来店日の時刻を確認して逆算してください。",
  },
  {
    q: "どの席から夜景が見えますか？",
    a: "屋上のテラスから東新宿・新宿方面のビル群を見渡せます。フェンス側の席ほど視界が開けます。席のご希望はご予約時にお伝えください。当日の状況によりご希望に添えない場合があります。",
  },
  {
    q: "遅い時間でも入れますか？",
    a: `営業は${SHOP.hours}です。フードのラストオーダーは${SHOP.lastOrder.food}、ドリンクは${SHOP.lastOrder.drink}のため、遅い時間からの利用もできます。`,
  },
  {
    q: "写真を撮るときのコツはありますか？",
    a: "日没直後は空とテーブルの明るさが近くなるため、人も背景も写りやすい時間帯です。暗くなってからはガーランドライトを背景に入れると、明かりが足りない場所でも雰囲気が出ます。",
  },
];

export default function NightViewGuidePage() {
  return (
    <GuideLayout
      guide={GUIDE}
      lead="屋上の景色がいちばん動くのは、日没をはさんだ30分ほどです。この時間に乾杯できるよう予約時刻を逆算する方法をまとめました。"
      faqs={FAQS}
      ctaHeading="空が変わる時間に、席を取っておく。"
      ctaLead="ご予約は食べログの予約ページから。日時と人数を選ぶだけでお申し込みいただけます。"
      related={[
        { href: "/space", label: "昼と夜で表情が変わる屋上テラスを見る", description: "同じ席が時間帯でどう変わるかを写真で比較できます。" },
        { href: "/scene/date", label: "夜景の見えるテラスでデートに使う", description: "カップルシートと、時間帯ごとの過ごし方を紹介しています。" },
        { href: "/scene/girls-party", label: "新宿の屋上テラスで女子会を開くなら", description: "写真が撮りやすい背景と席の選び方をまとめています。" },
        { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "飲み放題の長さから滞在時間を組み立てられます。" },
      ]}
    >
      <GuideSection title="結論：日没の1時間前に着席する">
        <p>
          屋上テラスの見え方は、時間とともに大きく変わります。狙うべきは、空がまだ青さを残したまま街の明かりが点きはじめる「日没直後の30分」です。この時間に席にいるためには、日没の1時間ほど前に着席できる予約を取ります。
        </p>
        <p>
          料理が運ばれてきて、焼きはじめて、最初の乾杯が済むまでに30分前後かかります。その流れが落ち着いたころに空の色が変わりはじめる、というのが理想的な組み立てです。
        </p>
        <DataTable
          head={["時間帯", "見えるもの", "向いていること"]}
          rows={[
            ["着席〜日没1時間前", "青空・パラソル・緑の床", "料理の写真／明るい集合写真"],
            ["日没前後30分", "青からオレンジへ変わる空", "屋上でいちばん景色が動く時間"],
            ["日没後", "街明かりとガーランドライト", "夜景を背景にした写真／落ち着いて飲む"],
          ]}
        />
      </GuideSection>

      <GuideSection title="飲み放題の時間と合わせて考える">
        <p>
          飲み放題は2時間・2.5時間・3時間から選べます。日没の1時間前に着席して2時間のコースを選んだ場合、日没後1時間まで滞在できる計算です。夜景をゆっくり眺めたいなら、2.5時間のコース（アメリカンBBQ 4,980円／シュラスコBBQ 5,480円）を選ぶと時間に追われません。
        </p>
        <p>
          日没時刻は季節によって数時間ずれます。夏至のころと冬至のころでは2時間以上違うため、「何時に予約するか」は必ず来店日の日没時刻を調べてから決めてください。
        </p>
      </GuideSection>

      <GuideSection title="席の選び方">
        <p>
          視界が開けるのはフェンス側の席です。東新宿から新宿方面へ続くビル群と、明治通りを行き交う車のライトが見えます。二人での利用なら、並んで座れるカップルシートから同じ方向を眺められます。
        </p>
        <p>
          席のご希望はご予約時にお伝えいただけますが、当日の混雑状況によりご希望に添えない場合があります。景色を重視する場合は、その旨を伝えたうえで比較的空いている時間帯を選ぶと確率が上がります。
        </p>
      </GuideSection>

      <GuideSection title="写真を撮るときの実際">
        <p>
          日没直後は、空の明るさとテーブルの明るさが近くなります。人物と背景の両方が写りやすく、この時間の写真がいちばん失敗しません。暗くなってからは、天井のガーランドライトを背景に入れると、明かりの足りない場所でも雰囲気のある写真になります。
        </p>
        <p>
          料理を撮るなら、日が完全に落ちる前のほうが色が出ます。焼き上がりのタイミングと空の色は待ってくれないので、撮りたいものがある場合は先に決めておくと慌てません。
        </p>
      </GuideSection>
    </GuideLayout>
  );
}
