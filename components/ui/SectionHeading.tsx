import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  en: string;
  children: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  en,
  children,
  lead,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className = "",
}: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <Reveal>
        <p
          className={`u-eyebrow ${isLight ? "text-sun" : "text-brand"} ${
            align === "center" ? "flex items-center justify-center gap-3" : "flex items-center gap-3"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-8 ${isLight ? "bg-sun/70" : "bg-brand/60"}`}
          />
          {en}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <Tag
          className={`mt-5 text-[1.75rem] leading-[1.55] sm:text-[2.15rem] lg:text-[2.6rem] ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          {children}
        </Tag>
      </Reveal>
      {lead ? (
        <Reveal delay={170}>
          <div
            className={`mt-7 max-w-2xl text-[0.95rem] leading-[2.05] ${
              align === "center" ? "mx-auto" : ""
            } ${isLight ? "text-white/80" : "text-ink-soft"}`}
          >
            {lead}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
