"use client";

import { useEffect, useState } from "react";
import { LINKS } from "@/lib/site-config";
import { ArrowIcon, InstagramIcon } from "@/components/ui/Icons";
import { track } from "@/lib/analytics";

/**
 * PC: 画面右側の控えめな縦型予約ボタン
 * SP: 画面下部の固定CTA（本文はbody側のpaddingで隠れないようにしている）
 */
export default function FixedCta() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ---------- PC ---------- */}
      <div
        className={`fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block ${
          shown ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <a
          href={LINKS.reserve}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 bg-brand py-7 pl-3 pr-3.5 text-white transition-colors duration-400 hover:bg-brand-deep"
          {...track("reservation_click", "fixed-side")}
        >
          <span className="text-[0.72rem] font-semibold tracking-[0.28em] [writing-mode:vertical-rl]">
            空席確認・予約
          </span>
          <ArrowIcon className="h-3.5 w-3.5 rotate-90" />
        </a>
      </div>

      {/* ---------- SP ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] border-t border-white/10 bg-ember/95 backdrop-blur-md lg:hidden">
        <a
          href={LINKS.reserve}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[var(--cta-height)] items-center justify-center gap-2 bg-brand px-4 text-[0.88rem] font-semibold tracking-[0.06em] text-white"
          {...track("reservation_click", "fixed-bottom")}
        >
          空席確認・予約
          <ArrowIcon className="h-4 w-4" />
        </a>
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="公式Instagramを見る（新しいタブで開きます）"
          className="flex min-h-[var(--cta-height)] w-[68px] items-center justify-center text-white"
          {...track("instagram_click", "fixed-bottom")}
        >
          <InstagramIcon className="h-[22px] w-[22px]" />
        </a>
      </div>
    </>
  );
}
