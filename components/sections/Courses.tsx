import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";
import { COURSES, COURSE_NOTE, PHOTO_NOTE } from "@/data/courses";
import { LINKS } from "@/lib/site-config";
import { track } from "@/lib/analytics";

const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

export default function Courses({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="course" className="relative bg-brand-deep py-24 text-white lg:py-36">
      {/* 背景：夜のテラス写真を薄く敷く */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.14]">
        <Image
          src="/images/terrace-night-long-view.jpg"
          alt=""
          fill
          loading="lazy"
          quality={65}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-wide relative">
        <SectionHeading
          en="BBQ Course"
          tone="light"
          className="max-w-3xl"
          lead="アメリカン、韓国、ブラジリアン。同じ屋上で、世界のBBQスタイルから選べます。すべて食材・機材・後片付け込みの手ぶらプラン。"
        >
          肉と海鮮を味わう
          <br className="hidden sm:block" />
          WORLD BBQコース
        </SectionHeading>

        <div className="mt-14 space-y-6 lg:mt-20 lg:space-y-8">
          {COURSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 60}>
              <article className="group grid gap-6 border-t border-white/15 pt-6 md:grid-cols-12 md:gap-10 md:pt-8">
                <div className="md:col-span-5 lg:col-span-4">
                  <div className="reveal-zoom relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      loading="lazy"
                      quality={65}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 lg:col-span-8">
                  <p className="u-eyebrow text-sun">{c.eyebrow}</p>
                  <h3 className="mt-3 text-[1.35rem] leading-[1.55] text-white lg:text-[1.65rem]">
                    {c.name}
                  </h3>

                  <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-2">
                    <p className="flex items-baseline gap-2">
                      <span className="u-en text-[2rem] leading-none text-white lg:text-[2.4rem]">
                        {yen(c.price)}
                      </span>
                      {c.listPrice ? (
                        <span className="text-[0.8rem] text-white/45 line-through">
                          {yen(c.listPrice)}
                        </span>
                      ) : null}
                    </p>
                    <p className="flex items-center gap-3 text-[0.78rem] tracking-[0.08em] text-white/70">
                      <span>全{c.dishes}品</span>
                      <span aria-hidden="true" className="h-3 w-px bg-white/25" />
                      <span>{c.drinkMinutes / 60}時間飲み放題付</span>
                    </p>
                  </div>

                  <p className="mt-5 max-w-2xl text-[0.88rem] leading-[2] text-white/75">{c.lead}</p>

                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.76rem] text-white/60">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sun" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={LINKS.reserve}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-3 border-b border-sun/50 pb-1 text-[0.8rem] font-semibold tracking-[0.1em] text-sun transition-colors hover:border-sun hover:text-white"
                    {...track("course_reservation_click", "course-card", c.name)}
                  >
                    このコースで予約する
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>

                  {c.detailPath ? (
                    <Link
                      href={c.detailPath}
                      className="ml-6 mt-7 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[0.8rem] tracking-[0.06em] text-white/85 transition-colors hover:border-white hover:text-white"
                    >
                      {c.name}の詳細を見る
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-3xl border-l-2 border-sun/60 pl-5 text-[0.78rem] leading-[1.95] text-white/60">
            {PHOTO_NOTE}
            <br />
            {COURSE_NOTE}
          </p>
        </Reveal>

        {showAllLink ? (
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/course" className="btn border border-white/50 text-white hover:bg-white hover:text-brand-deep">
                すべてのコース・プランを見る
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
