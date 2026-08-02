import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { lastModifiedOf } from "@/lib/routes";
import { LAST_VERIFIED, LINKS, SHOP, siteConfig } from "@/lib/site-config";
import { GA_ID } from "@/lib/analytics";

const PATH = "/privacy";
const CRUMBS = [
  { name: "ホーム", path: "/" },
  { name: "プライバシーポリシー", path: PATH },
];

const TITLE = "プライバシーポリシー";
const DESCRIPTION =
  "HOLIDAY SKY LOUNGE 新宿 公式サイトのプライバシーポリシー。アクセス解析ツールの利用、外部サイトへのリンク、免責事項について記載しています。";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const SECTIONS = [
  {
    h: "1. 個人情報の取得について",
    p: [
      `当サイト（${siteConfig.url}）は、店舗情報の掲載を目的としたウェブサイトです。当サイト上でお名前・電話番号・メールアドレスなどの個人情報を入力していただくフォームは設置していません。`,
      "ご予約は外部の予約サイト（食べログ）で受け付けています。予約時に入力された情報の取り扱いについては、各予約サイトのプライバシーポリシーをご確認ください。",
    ],
  },
  {
    h: "2. アクセス解析ツールについて",
    p: [
      "当サイトでは、サイトの利用状況を把握するためにアクセス解析ツール（Google アナリティクス）を利用する場合があります。このツールはCookieを使用して、個人を特定しない形で閲覧ページや利用環境などの情報を収集します。",
      "収集した情報は、サイトの改善を目的とした分析にのみ使用します。Cookieの使用を望まない場合は、ブラウザの設定によりCookieを無効にすることができます。",
    ],
  },
  {
    h: "3. 外部サイトへのリンクについて",
    p: [
      "当サイトには、予約サイト（食べログ・ホットペッパーグルメ・ぐるなび）、公式Instagram、Googleマップなど外部サイトへのリンクが含まれます。リンク先のサイトで提供される情報・サービスについては、各サイトの運営者が責任を負うものとします。",
      "Googleマップの地図は、ページ上のボタンを押した時点で読み込まれます。ボタンを押すまでは外部への通信は発生しません。",
    ],
  },
  {
    h: "4. 掲載情報の免責事項",
    p: [
      "当サイトに掲載している営業時間・料金・コース内容・設備などの情報は、公式の予約サイトに掲載されている内容をもとにしています。内容は時期により変更される場合があるため、最新の情報は各予約サイトまたは店舗へ直接ご確認ください。",
      "料理写真はイメージです。実際に提供される料理とは異なる場合があります。",
      `掲載情報の最終確認日：${LAST_VERIFIED}`,
    ],
  },
  {
    h: "5. お問い合わせ",
    p: [
      `当サイトの掲載内容に関するお問い合わせは、店舗直通（${SHOP.telShop}）へお願いいたします。ご予約については、予約専用（${SHOP.telReserve}）または食べログの予約ページをご利用ください。`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            lastModified: lastModifiedOf(PATH),
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd(CRUMBS, PATH),
        ]}
      />

      <div className="bg-ivory pt-[92px] lg:pt-[110px]">
        <Breadcrumbs items={CRUMBS} />
      </div>

      <section className="paper pb-24 pt-10 lg:pb-32 lg:pt-14">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal>
              <p className="u-eyebrow flex items-center gap-3 text-brand">
                <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
                Privacy Policy
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[1.6rem] leading-[1.6] text-ink lg:text-[2.1rem]">プライバシーポリシー</h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-4 text-[0.76rem] tracking-[0.08em] text-ink-soft">最終更新日 {LAST_VERIFIED}</p>
            </Reveal>

            <div className="mt-12 space-y-11">
              {SECTIONS.map((s, i) => (
                <Reveal key={s.h} as="section" delay={Math.min(i, 4) * 50}>
                  <h2 className="text-[1.1rem] leading-[1.7] text-ink">{s.h}</h2>
                  <div className="mt-4 space-y-4 text-[0.89rem] leading-[2.05] text-ink-soft">
                    {s.p.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {/*
              TODO(店舗確認): 運営会社名・所在地・代表者名が判明したら
              「運営者情報」としてこのページに追記する。推測での記載はしないこと。
            */}

            <Reveal>
              <p className="mt-14 border-l-2 border-brand/40 pl-5 text-[0.8rem] leading-[1.95] text-ink-soft">
                ご予約は{" "}
                <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">
                  食べログの予約ページ
                </a>{" "}
                から承っています。
                {GA_ID ? "" : "（現在、アクセス解析ツールの測定IDは設定されていません。）"}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
