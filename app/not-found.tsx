import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { NAV, LINKS } from "@/lib/site";
import { ArrowIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "お探しのページが見つかりません",
  description:
    "お探しのページは移動または削除された可能性があります。HOLIDAY SKY LOUNGE 新宿のトップページから、コースや空間、アクセス情報をご覧ください。",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ember">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/terrace-dusk-panorama.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,14,0.8),rgba(8,22,14,0.92))]" />
      </div>

      <div className="container-wide relative py-32 text-center">
        <p className="u-en text-[3.5rem] leading-none text-sun/70 lg:text-[5rem]">404</p>
        <h1 className="mt-6 text-[1.5rem] leading-[1.6] text-white lg:text-[2rem]">
          お探しのページが見つかりませんでした。
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-[0.88rem] leading-[2] text-white/70">
          ページが移動または削除された可能性があります。お手数ですが、下のメニューからお探しください。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn bg-white text-brand-deep hover:bg-sun hover:text-ember">
            トップページへ戻る
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <a
            href={LINKS.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-light"
          >
            空席を確認・予約する
          </a>
        </div>

        <nav aria-label="サイト内のご案内" className="mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {NAV.filter((n) => n.href !== "/").map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="u-en text-[0.72rem] text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/faq"
                className="u-en text-[0.72rem] text-white/60 transition-colors hover:text-white"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
