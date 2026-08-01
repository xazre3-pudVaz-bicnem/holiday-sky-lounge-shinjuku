import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/data/content";

/**
 * 6つの特徴。カードを並べず、写真と文章を左右交互に配置し、
 * 番号を大きく置いて視覚的なリズムを作る。
 */
export default function Features() {
  return (
    <section id="features" className="bg-white py-24 lg:py-36">
      <div className="container-wide">
        <SectionHeading
          en="Why HOLIDAY"
          className="max-w-3xl"
          lead="新宿の屋上で手ぶらBBQビアガーデンを楽しめる、6つの理由。"
        >
          新宿最大級の開放的な
          <br className="hidden sm:block" />
          ルーフトップテラス
        </SectionHeading>
      </div>

      <div className="mt-16 lg:mt-24">
        {FEATURES.map((f, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={f.no}
              className={`container-wide grid items-center gap-8 py-10 lg:grid-cols-12 lg:gap-16 lg:py-14 ${
                i !== 0 ? "border-t border-line" : ""
              }`}
            >
              <Reveal
                variant="clip"
                className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
              >
                <div className="reveal-zoom relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
                <Reveal>
                  <p className="u-en text-[2.6rem] leading-none text-brand/25 lg:text-[3.4rem]">
                    {f.no}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h3 className="mt-4 text-[1.3rem] leading-[1.6] text-ink lg:text-[1.55rem]">
                    {f.title}
                  </h3>
                </Reveal>
                <Reveal delay={150}>
                  <p className="mt-5 text-[0.9rem] leading-[2.05] text-ink-soft">{f.body}</p>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
