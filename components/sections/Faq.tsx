import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";
import { FAQS, type Faq as FaqItem } from "@/data/content";

export default function Faq({
  items = FAQS,
  showAllLink = true,
}: {
  items?: readonly FaqItem[];
  showAllLink?: boolean;
}) {
  return (
    <section id="faq" className="cv-auto bg-ivory-deep py-24 lg:py-36">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionHeading
              en="FAQ"
              lead="ご来店前によくいただくご質問をまとめました。ここに載っていないことは、お気軽に店舗へお問い合わせください。"
            >
              よくある
              <br className="hidden lg:block" />
              ご質問
            </SectionHeading>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {items.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i, 5) * 45}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start gap-4 py-6 [&::-webkit-details-marker]:hidden">
                      <span aria-hidden="true" className="u-en mt-0.5 shrink-0 text-[0.8rem] text-brand/50">
                        Q
                      </span>
                      <h3 className="flex-1 text-[0.98rem] font-medium leading-[1.8] text-ink">
                        {f.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="relative mt-2 block h-3 w-3 shrink-0 text-brand"
                      >
                        <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current" />
                        <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-current transition-transform duration-400 group-open:scale-y-0" />
                      </span>
                    </summary>
                    <div className="grid grid-cols-[auto_1fr] gap-4 pb-7">
                      <span aria-hidden="true" className="u-en shrink-0 text-[0.8rem] text-sun/70">
                        A
                      </span>
                      <p className="text-[0.87rem] leading-[2.05] text-ink-soft">{f.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>

            {showAllLink ? (
              <Reveal>
                <Link
                  href="/faq"
                  className="mt-10 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
                >
                  よくあるご質問をすべて見る
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
