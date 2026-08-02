import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";

export type RelatedLink = {
  href: string;
  /** アンカーテキストはリンク先の内容が分かる具体的な文言にする（「こちら」は使わない） */
  label: string;
  description: string;
};

export default function RelatedLinks({
  items,
  heading = "あわせて読みたいページ",
  lead,
}: {
  items: RelatedLink[];
  heading?: string;
  lead?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <SectionHeading en="Related" className="max-w-3xl" lead={lead}>
          {heading}
        </SectionHeading>

        <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.href} as="li" delay={(i % 2) * 70} className="border-t border-brand/20 pt-6">
              <Link href={item.href} className="group block py-1">
                <span className="inline-flex items-center gap-3 text-[0.95rem] font-medium leading-[1.7] text-brand transition-colors group-hover:text-brand-deep">
                  {item.label}
                  <ArrowIcon className="h-3.5 w-3.5 shrink-0" />
                </span>
                <span className="mt-2 block text-[0.82rem] leading-[1.95] text-ink-soft">{item.description}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
