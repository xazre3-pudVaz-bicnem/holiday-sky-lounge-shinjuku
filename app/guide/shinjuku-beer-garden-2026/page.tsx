import GuideLayout, { GuideSection } from "@/components/seo/GuideLayout";
import DataTable from "@/components/seo/DataTable";
import { buildMetadata } from "@/lib/seo";
import { findGuide } from "@/data/guides";
import { ACCESS, NOTES, SHOP } from "@/lib/site-config";
import { COURSES, OTHER_PLANS } from "@/data/courses";
import type { Faq } from "@/data/content";

const GUIDE = findGuide("shinjuku-beer-garden-2026")!;
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
    q: "2026年の営業期間はいつまでですか？",
    a: "営業期間についての記載は掲載情報では確認できません。営業日と営業時間は食べログの予約ページでご確認いただけます。",
  },
  {
    q: "何時から何時まで営業していますか？",
    a: `${SHOP.hours}の通し営業です（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）。昼から夜まで中断なく営業しています。`,
  },
  {
    q: "定休日はありますか？",
    a: "ぐるなびの店舗ページには年中無休と記載されています。臨時休業の可能性もあるため、ご来店前に予約ページでご確認ください。",
  },
  {
    q: "予約なしでも入れますか？",
    a: "当日の空席状況によります。屋上で席数に限りがあるため、ご予約をおすすめしています。当日の空き枠は食べログの予約ページでご確認いただけます。",
  },
];

export default function Guide2026Page() {
  return (
    <GuideLayout
      guide={GUIDE}
      lead="2026年のHOLIDAY SKY LOUNGE 新宿について、営業時間、アクセス、コース料金、予約方法をまとめました。数値はすべて掲載元で確認できる範囲のみを記載しています。"
      faqs={FAQS}
      ctaHeading="内容を確認したら、日程を押さえる。"
      ctaLead="ご予約は食べログの予約ページから。当日の空席状況も同じページでご確認いただけます。"
      related={[
        { href: "/shinjuku-bbq", label: "新宿で手ぶらBBQができる場所を探している方へ", description: "食材・機材・後片付けの範囲と、コースの選び方をまとめた総合ページです。" },
        { href: "/course", label: "BBQコース4種類の料金と品数を比較する", description: "全コースの料金・品数・飲み放題時間を一覧で確認できます。" },
        { href: "/guide/how-to-choose-bbq-course", label: "人数と目的からBBQコースを選ぶ手順", description: "何を基準に選べばいいか迷ったときの判断の順番です。" },
        { href: "/access", label: "4駅それぞれからのアクセスと地図を見る", description: "K-SQUARE屋上までの上がり方を含めて案内しています。" },
      ]}
    >
      <GuideSection title="店舗の基本情報">
        <p>
          HOLIDAY SKY LOUNGE 新宿は、東京都新宿区大久保1-8-4「K-SQUARE」の屋上にあるビアガーデンです。食材・グリル・食器・後片付けまで店舗側で用意する手ぶらBBQを、11:30から23:45まで通しで提供しています。
        </p>
        <DataTable
          head={["項目", "内容"]}
          rows={[
            ["店名", SHOP.name],
            ["住所", `〒${SHOP.postalCode} ${SHOP.addressFull}`],
            ["営業時間", `${SHOP.hours}（フードL.O. ${SHOP.lastOrder.food}／ドリンクL.O. ${SHOP.lastOrder.drink}）`],
            ["定休日", `${SHOP.closedDays}（ぐるなび店舗ページの記載）`],
            ["席数", `${SHOP.seats}（${SHOP.seatsDetail}）`],
            ["予算の目安", `夜 ${SHOP.priceRangeDinner}／昼 ${SHOP.priceRangeLunch}`],
            ["電話", `${SHOP.telReserve}（予約専用）／${SHOP.telShop}（店舗直通）`],
            ["オープン", `${SHOP.openedOn}（食べログ掲載）`],
          ]}
        />
      </GuideSection>

      <GuideSection title="2026年のコースと料金">
        <p>
          BBQコースは4種類。いずれも飲み放題付きで、コースによって飲み放題の長さが変わります。ランチ限定コースや、料理を単品で頼む飲み放題のみのプランもあります。
        </p>
        <DataTable
          head={["コース", "料金", "品数", "飲み放題"]}
          rows={[
            ...COURSES.map((c) => [c.name, `${c.price.toLocaleString("ja-JP")}円`, `全${c.dishes}品`, `${c.drinkMinutes / 60}時間`]),
            ...OTHER_PLANS.map((p) => [p.name, `${p.price.toLocaleString("ja-JP")}円`, "—", p.note]),
          ]}
          note={NOTES.price}
        />
      </GuideSection>

      <GuideSection title="昼と夜、どちらに行くか">
        <p>
          11:30からの通し営業なので、昼と夜のどちらでも利用できます。昼は青空とパラソルの下で、パラソルや屋根付きエリアを使って日差しを避けながら過ごせます。ランチ限定のBBQ4種盛りプレートコース（全10品・2時間飲み放題付・2,980円）があるのも昼の時間帯です。
        </p>
        <p>
          夜は日没とともに天井のガーランドライトが灯り、眼下に街明かりが広がります。会社宴会や友人との飲み会が入る時間帯のため、賑やかな雰囲気になります。落ち着いて過ごしたい場合は、開店直後の時間帯を選ぶという方法もあります。
        </p>
      </GuideSection>

      <GuideSection title="アクセスと、屋上までの行き方">
        <p>4駅から徒歩圏内です。屋上の店舗のため、建物に入ってからの経路も合わせて確認しておくと当日迷いません。</p>
        <DataTable head={["駅", "路線", "徒歩"]} rows={ACCESS.map((a) => [a.station, a.line, a.detail])} />
        <p>
          K-SQUAREの建物に入り、エレベーターで最上階まで上がります。エレベーターを降りて通路を進んだ先が屋上の入口です。分かりにくい場合は店舗（{SHOP.telShop}）へお電話ください。
        </p>
      </GuideSection>

      <GuideSection title="予約方法と、雨天時の確認">
        <p>
          ご予約は食べログの予約ページから、日時・人数・コースを選んで申し込みます。当日の空席状況も同じページで確認できます。席数に限りがあるため、事前予約をおすすめしています。
        </p>
        <p>
          屋根のあるエリアもありますが、天候によって営業内容が変わる場合があります。当日の営業状況は予約ページ、または店舗（{SHOP.telShop}）へご確認ください。大人数でのご利用時は、参加者への連絡方法も先に決めておくと当日の対応が楽になります。
        </p>
      </GuideSection>

      <GuideSection title="団体での利用">
        <p>
          着席250名・立食300名まで対応しており、50名以上から貸切のご相談が可能です。10〜20名、20〜30名の個室エリアや、カラオケを備えたVIPルーム（限定1室）もあります。人数が確定していない段階でも、上限と下限を伝えておくと席の確保がしやすくなります。
        </p>
      </GuideSection>
    </GuideLayout>
  );
}
