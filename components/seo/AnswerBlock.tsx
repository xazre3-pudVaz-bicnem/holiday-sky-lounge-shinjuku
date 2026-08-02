import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

/**
 * 検索ユーザーの疑問に、ページ冒頭で結論から答えるブロック。
 * 単独で引用されても意味が通るよう、主語（店名）と場所を省略しない文章を入れる。
 */
export default function AnswerBlock({
  question,
  children,
  facts,
}: {
  question: string;
  children: ReactNode;
  /** 数値で答えられる要点（営業時間・料金・アクセスなど） */
  facts?: { label: string; value: string }[];
}) {
  return (
    <section className="bg-brand-tint py-14 lg:py-16">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-4xl border-l-2 border-brand pl-6 lg:pl-8">
            <h2 className="text-[1.15rem] leading-[1.7] text-ink lg:text-[1.35rem]">{question}</h2>
            <div className="mt-4 space-y-4 text-[0.92rem] leading-[2.05] text-ink-soft">{children}</div>
          </div>
        </Reveal>

        {facts?.length ? (
          <Reveal delay={90}>
            <dl className="mt-9 grid max-w-4xl gap-x-8 gap-y-4 border-t border-brand/20 pt-7 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[0.72rem] tracking-[0.12em] text-brand">{f.label}</dt>
                  <dd className="mt-1.5 text-[0.9rem] leading-[1.8] text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
