import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Faq } from "@/data/content";

/** ページ固有のFAQ。表示内容と FAQPage 構造化データを必ず一致させること。 */
export default function PageFaq({
  items,
  heading = "よくあるご質問",
  lead,
  tone = "light",
}: {
  items: readonly Faq[];
  heading?: string;
  lead?: string;
  tone?: "light" | "paper";
}) {
  return (
    <section className={`${tone === "paper" ? "paper" : "bg-ivory-deep"} py-20 lg:py-28`}>
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading en="FAQ" lead={lead}>
              {heading}
            </SectionHeading>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {items.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i, 4) * 45}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start gap-4 py-6 [&::-webkit-details-marker]:hidden">
                      <span aria-hidden="true" className="u-en mt-0.5 shrink-0 text-[0.8rem] text-brand/50">
                        Q
                      </span>
                      <h3 className="flex-1 text-[0.98rem] font-medium leading-[1.8] text-ink">{f.q}</h3>
                      <span aria-hidden="true" className="relative mt-2 block h-3 w-3 shrink-0 text-brand">
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
          </div>
        </div>
      </div>
    </section>
  );
}
