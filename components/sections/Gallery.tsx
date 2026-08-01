"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/data/content";
import { PHOTO_NOTE } from "@/data/courses";

/** Masonry用の高さパターン（単調な正方形グリッドを避ける） */
const SPAN = ["aspect-[3/4]", "aspect-[4/3]", "aspect-[1/1]", "aspect-[3/2]", "aspect-[4/5]"];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setIndex(i);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);

  const move = useCallback((dir: 1 | -1) => {
    setIndex((cur) => (cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => dialogRef.current?.querySelector("button")?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [index, close, move]);

  /* スマホ用のスワイプ操作 */
  const touchX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 60) move(dx < 0 ? 1 : -1);
  };

  const current = index === null ? null : GALLERY[index];

  return (
    <>
      <section id="gallery" className="bg-ivory-deep py-24 lg:py-36">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="u-eyebrow flex items-center gap-3 text-brand">
                <span aria-hidden="true" className="h-px w-8 bg-brand/60" />
                Gallery
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 text-[1.75rem] leading-[1.55] text-ink sm:text-[2.15rem] lg:text-[2.6rem]">
                昼の青空から、
                <br className="hidden sm:block" />
                夜の灯りまで。
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="text-[0.78rem] text-ink-soft">
              画像をタップすると拡大表示できます。
              <span className="mt-1 block text-[0.72rem]">{PHOTO_NOTE}</span>
            </p>
          </Reveal>
        </div>

        {/* Masonry（CSS columns で大小混在させる） */}
        <div className="mt-14 columns-2 gap-3 sm:gap-4 lg:columns-4 lg:gap-5">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 60} className="mb-3 break-inside-avoid sm:mb-4 lg:mb-5">
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`拡大表示：${g.alt}`}
                className="group relative block w-full overflow-hidden"
              >
                <div className={`relative w-full ${SPAN[i % SPAN.length]}`}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    loading="lazy"
                    quality={65}
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 48vw, 23vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-ember/0 transition-colors duration-500 group-hover:bg-ember/20"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* ライトボックスは position:fixed のため、
          contain:layout が効く <section> の外に置く（section基準に位置がずれるのを防ぐ） */}
      {current !== null && index !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="ギャラリー拡大表示"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ember/[0.985] p-4 backdrop-blur-sm sm:p-8"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            aria-label="閉じる"
            className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center text-white/80 transition-colors hover:text-white sm:right-6 sm:top-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="m5 5 14 14M19 5 5 19" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="前の写真"
            className="absolute left-1 z-10 flex h-14 w-12 items-center justify-center text-white/70 transition-colors hover:text-white sm:left-4"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="m14 5-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure className="max-h-full w-full max-w-5xl">
            <div className="relative mx-auto aspect-[3/2] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-[0.76rem] leading-relaxed text-white/65">
              {current.alt}
              <span className="mt-1 block text-white/40">
                {index + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="次の写真"
            className="absolute right-1 z-10 flex h-14 w-12 items-center justify-center text-white/70 transition-colors hover:text-white sm:right-4"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="m10 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
}
