import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";
import { STEPS } from "@/data/content";
import { LINKS, SHOP } from "@/lib/site";

export default function FirstTime() {
  return (
    <section id="first-time" className="bg-white py-24 lg:py-36">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              en="First Visit"
              lead="屋上の店舗なので、初めての方は「どこから入るのか」で迷いがちです。ご来店から乾杯までの流れをまとめました。"
            >
              初めての方へ。
              <br />
              入口から乾杯まで。
            </SectionHeading>

            <Reveal delay={200}>
              <div className="reveal-zoom relative mt-12 aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/terrace-day-entrance.jpg"
                  alt="新宿・大久保のK-SQUARE屋上にあるビアガーデンの入口付近のテラス"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-5 text-[0.78rem] leading-[1.9] text-ink-soft">
                住所は{SHOP.addressFull}。順路がわからない場合は、店舗（
                <a href={`tel:${SHOP.telShop.replace(/-/g, "")}`} className="text-brand underline underline-offset-4">
                  {SHOP.telShop}
                </a>
                ）までお気軽にお電話ください。
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.no} delay={i * 70} className="relative grid grid-cols-[auto_1fr] gap-x-6 pb-10 lg:gap-x-9">
                    <div className="flex flex-col items-center">
                      <span className="u-en flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/35 text-[0.78rem] text-brand">
                        {s.no}
                      </span>
                      {i !== STEPS.length - 1 ? (
                        <span aria-hidden="true" className="mt-2 w-px flex-1 bg-line" />
                      ) : null}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-[1.05rem] leading-[1.7] text-ink lg:text-[1.15rem]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[0.87rem] leading-[2] text-ink-soft">{s.body}</p>
                    </div>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <a
                href={LINKS.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4"
              >
                空席を確認・予約する
                <ArrowIcon className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
