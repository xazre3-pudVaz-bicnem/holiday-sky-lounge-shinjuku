import Image from "next/image";
import Link from "next/link";
import { ACCESS, LINKS, NAV, SHOP } from "@/lib/site-config";
import { ArrowIcon, InstagramIcon } from "@/components/ui/Icons";
import { track } from "@/lib/analytics";

const PURPOSE_LINKS = [
  { href: "/shinjuku-bbq", label: "新宿の手ぶらBBQ" },
  { href: "/course/samgyeopsal", label: "サムギョプサル＆K-BBQ" },
  { href: "/course/churrasco", label: "シュラスコBBQ" },
  { href: "/scene/company-party", label: "会社宴会・歓送迎会" },
  { href: "/scene/private-party", label: "貸切パーティー" },
  { href: "/scene/girls-party", label: "女子会" },
  { href: "/scene/date", label: "デート・記念日" },
  { href: "/scene/lunch", label: "昼飲み・ランチBBQ" },
  { href: "/area/higashi-shinjuku", label: "東新宿エリア" },
  { href: "/area/shin-okubo", label: "新大久保エリア" },
  { href: "/guide", label: "利用ガイド" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ember pb-[calc(var(--cta-height)+1.5rem)] pt-20 text-white/70 lg:pb-16 lg:pt-24">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Image
              src="/logo-white.png"
              alt={`${SHOP.name}（手ぶらBBQビアガーデン）のロゴ`}
              width={1200}
              height={625}
              loading="lazy"
              quality={65}
              sizes="(max-width: 640px) 210px, 260px"
              className="h-auto w-[210px] lg:w-[260px]"
            />
            <p className="mt-7 text-[0.85rem] leading-[2] text-white/60">
              新宿・東新宿の屋上ビアガーデン。約300席のルーフトップテラスで、手ぶらBBQと飲み放題を。
            </p>

            <address className="mt-7 not-italic text-[0.85rem] leading-[2] text-white/60">
              〒{SHOP.postalCode} {SHOP.addressFull}
              <br />
              <a
                href={`tel:${SHOP.telReserve.replace(/-/g, "")}`}
                className="inline-block py-1 transition-colors hover:text-white"
              >
                {SHOP.telReserve}
              </a>
              <span className="text-white/60">（予約専用）</span>
              <br />
              <a
                href={`tel:${SHOP.telShop.replace(/-/g, "")}`}
                className="inline-block py-1 transition-colors hover:text-white"
              >
                {SHOP.telShop}
              </a>
              <span className="text-white/60">（店舗直通）</span>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h2 className="u-en text-[0.7rem] text-sun">MENU</h2>
            <ul className="mt-6 space-y-3 text-[0.85rem]">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 transition-colors hover:text-white">
                    <span className="u-en text-[0.72rem] text-white/60">{item.label}</span>
                    <span className="ml-3">{item.labelJa}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="inline-block py-1 transition-colors hover:text-white">
                  <span className="u-en text-[0.72rem] text-white/60">FAQ</span>
                  <span className="ml-3">よくある質問</span>
                </Link>
              </li>
            </ul>

            <h2 className="u-en mt-9 text-[0.7rem] text-sun">PURPOSE</h2>
            <ul className="mt-5 space-y-2.5 text-[0.85rem]">
              {PURPOSE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="u-en text-[0.7rem] text-sun">INFORMATION</h2>
            <dl className="mt-6 space-y-4 text-[0.85rem] leading-[1.9]">
              <div>
                <dt className="text-white/60">営業時間</dt>
                <dd className="text-white/75">
                  {SHOP.hours}
                  <span className="mt-0.5 block text-[0.76rem] text-white/60">
                    フードL.O. {SHOP.lastOrder.food}／ドリンクL.O. {SHOP.lastOrder.drink}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">アクセス</dt>
                <dd className="text-white/75">
                  {ACCESS.map((a) => (
                    <span key={a.station} className="block text-[0.8rem]">
                      {a.station} {a.detail}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-white/60">席数</dt>
                <dd className="text-white/75">
                  {SHOP.seats}（{SHOP.seatsDetail}）
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={LINKS.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                {...track("reservation_click", "footer")}
              >
                空席を確認・予約する
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light"
                {...track("instagram_click", "footer")}
              >
                <InstagramIcon className="h-4 w-4" />
                Instagramを見る
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.72rem] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>&copy; {year} {SHOP.name}</p>
            <Link href="/info" className="inline-block py-1 transition-colors hover:text-white">店舗情報・サイトについて</Link>
            <Link href="/privacy" className="inline-block py-1 transition-colors hover:text-white">プライバシーポリシー</Link>
          </div>
          <p className="u-en tracking-[0.2em]">ROOFTOP BBQ BEER GARDEN / SHINJUKU</p>
        </div>
      </div>
    </footer>
  );
}
