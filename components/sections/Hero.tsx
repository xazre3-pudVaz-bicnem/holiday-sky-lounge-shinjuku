import Image from "next/image";
import { ACCESS, LINKS, SHOP } from "@/lib/site";
import { ArrowIcon, InstagramIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ember">
      {/* 背景写真：ゆっくりズーム */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rooftop-beergarden-night.jpg"
          alt="新宿の屋上ビアガーデン HOLIDAY SKY LOUNGE 新宿、夜景とガーランドライトに包まれたルーフトップテラス"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-zoom object-cover object-center"
        />
      </div>

      {/* 可読性のためのオーバーレイ（緑がかった暗幕 + 下部グラデーション） */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,14,0.62)_0%,rgba(8,22,14,0.28)_38%,rgba(8,22,14,0.55)_72%,rgba(8,22,14,0.86)_100%)]"
      />

      <div className="container-wide relative flex min-h-[100svh] flex-col justify-end pb-[calc(var(--cta-height)+3.5rem)] pt-32 sm:pb-28 lg:pb-24">
        <div className="max-w-3xl">
          {/* 店舗ロゴ（ファーストビュー内に店名を明示） */}
          <Image
            src="/logo-white.png"
            alt="HOLIDAY SKY LOUNGE 新宿 ロゴ"
            width={1200}
            height={625}
            priority
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
            className="h-auto w-[240px] sm:w-[300px] lg:w-[340px]"
          />

          <p className="mt-7 text-[0.72rem] tracking-[0.32em] text-white/75 sm:text-[0.78rem]">
            新宿・東新宿 ／ ROOFTOP BEER GARDEN
          </p>

          <h1 className="text-shadow-hero mt-4 text-[1.9rem] font-medium leading-[1.5] text-white sm:text-[2.5rem] lg:text-[3.15rem] lg:leading-[1.42]">
            新宿の屋上で楽しむ
            <br />
            手ぶらBBQビアガーデン
          </h1>

          <p className="text-shadow-hero mt-6 max-w-xl text-[0.92rem] leading-[2] text-white/85 sm:text-[1rem]">
            新宿の空の下、今日は少しだけ、休日気分。
            <br className="hidden sm:block" />
            夜景とともに味わう、手ぶらWORLD BBQ。約300席のルーフトップテラスで。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-brand-deep hover:bg-brand hover:text-white"
            >
              空席を確認・予約する
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagramを見る
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-[0.78rem] text-white/75">
            <div className="flex items-baseline gap-2">
              <dt className="u-en text-[0.62rem] text-sun">OPEN</dt>
              <dd>{SHOP.hours}</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="u-en text-[0.62rem] text-sun">ACCESS</dt>
              <dd>
                {ACCESS[0].station}
                {ACCESS[0].detail}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="u-en text-[0.62rem] text-sun">SEATS</dt>
              <dd>{SHOP.seats}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* スクロール誘導 */}
      <a
        href="#concept"
        aria-label="SCROLL コンセプトセクションへ移動"
        className="absolute bottom-[calc(var(--cta-height)+0.75rem)] right-5 hidden items-center gap-3 text-white/70 transition-colors hover:text-white sm:bottom-8 sm:flex lg:right-10"
      >
        <span className="u-en text-[0.6rem] [writing-mode:vertical-rl]">SCROLL</span>
        <span aria-hidden="true" className="scroll-line relative block h-14 w-px bg-white/30" />
      </a>
    </section>
  );
}
