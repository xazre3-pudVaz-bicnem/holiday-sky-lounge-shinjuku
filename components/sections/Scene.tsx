import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";
import { SCENES } from "@/data/content";

export default function Scene({ full = false }: { full?: boolean }) {
  return (
    <section id="scene" className="cv-auto paper py-24 lg:py-36">
      <div className="container-wide">
        <SectionHeading
          en="Scene"
          className="max-w-3xl"
          lead="宴会も、女子会も、デートも、家族での食事も。同じ屋上が、集まる人によって違う場所になります。"
        >
          宴会・女子会・デートに
          <br className="hidden sm:block" />
          おすすめの使い方
        </SectionHeading>

        <div className="mt-16 lg:mt-24">
          {SCENES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={full ? s.id : undefined}
                className={`grid items-center gap-8 py-10 md:grid-cols-12 md:gap-12 lg:py-14 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <Reveal
                  variant="clip"
                  className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}
                >
                  <div className="reveal-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <div className={`md:col-span-7 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}>
                  <Reveal>
                    <p className="u-eyebrow text-brand">{s.label}</p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h3 className="mt-4 text-[1.25rem] leading-[1.6] text-ink lg:text-[1.5rem]">
                      {s.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={150}>
                    <p className="mt-5 max-w-2xl text-[0.9rem] leading-[2.05] text-ink-soft">
                      {s.body}
                    </p>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>

        {!full ? (
          <Reveal delay={100}>
            <Link
              href="/scene"
              className="mt-12 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
            >
              利用シーンをもっと見る
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
