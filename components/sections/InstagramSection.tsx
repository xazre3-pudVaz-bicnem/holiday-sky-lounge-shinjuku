import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, InstagramIcon } from "@/components/ui/Icons";
import { LINKS } from "@/lib/site";

/**
 * 公式Instagramへの導線。
 * 投稿の直接スクレイピングは行わず、public配下の写真＋公式アカウントへのリンクで構成。
 */
const SHOTS = [
  { src: "/images/cheers-corona-mural.jpg", alt: "HOLIDAYの壁画の前でボトルビールを合わせて乾杯する屋上ビアガーデン" },
  { src: "/images/terrace-holiday-sign-sunset.jpg", alt: "夕暮れのHOLIDAYサインが並ぶ新宿の屋上ビアガーデンのテラス" },
  { src: "/images/corona-ice-bucket-palm.jpg", alt: "ヤシの木を背景にアイスバケットで冷やされたボトルビール" },
  { src: "/images/terrace-dusk-lights.jpg", alt: "日没後に照明が灯る新宿の屋上ビアガーデンのテーブル席" },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="paper py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                <InstagramIcon className="h-6 w-6" />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[1.5rem] leading-[1.6] text-ink lg:text-[1.85rem]">
                最新の料理・空席情報を
                <br className="hidden sm:block" />
                Instagramでチェック
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="u-en mt-4 text-[0.85rem] text-brand">{LINKS.instagramHandle}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-md text-[0.87rem] leading-[2] text-ink-soft">
                季節ごとの新しいコース、その日の屋上の空の色、当日の空席状況。いちばん新しい情報は公式Instagramで発信しています。
              </p>
            </Reveal>
            <Reveal delay={230}>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-8"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagramを見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {SHOTS.map((s, i) => (
                <Reveal key={s.src} variant="clip" delay={i * 80}>
                  <a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`公式Instagramを見る：${s.alt}`}
                    className="group relative block aspect-square overflow-hidden"
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 48vw, 24vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center bg-brand-deep/0 text-white opacity-0 transition-all duration-500 group-hover:bg-brand-deep/45 group-hover:opacity-100"
                    >
                      <InstagramIcon className="h-7 w-7" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
