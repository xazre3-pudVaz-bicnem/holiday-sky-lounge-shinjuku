"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** fade: フェードアップ / clip: 下から現れる / zoom: 画像のスローズーム */
  variant?: "fade" | "clip" | "zoom";
  delay?: number;
  className?: string;
  as?: ElementType;
};

const VARIANT_CLASS = {
  fade: "reveal",
  clip: "reveal-clip",
  zoom: "reveal reveal-zoom",
} as const;

/*
 * ページ内に200個近く配置するため、IntersectionObserver は1つだけ生成して共有する。
 *
 * さらに「万一 observer が発火しなくても要素が消えたままにならない」保険として、
 * スクロール時に未表示要素の位置を直接見て表示する fail-open のフォールバックを持つ。
 * （content-visibility でスキップされた領域など、observer が発火しない状況があるため。
 *   最悪アニメーションが出ないだけで、コンテンツが見えなくなることはない）
 */
type Entry = { el: Element; reveal: () => void };

const pending = new Set<Entry>();
let observer: IntersectionObserver | null = null;
let fallbackBound = false;
let ticking = false;

/** ビューポート下端の少し上まで来ていたら表示する */
const TRIGGER_RATIO = 0.92;

function flushFallback() {
  ticking = false;
  const limit = window.innerHeight * TRIGGER_RATIO;
  for (const entry of Array.from(pending)) {
    const rect = entry.el.getBoundingClientRect();
    // rect が潰れている（レイアウトがスキップされている）場合も表示側に倒す
    const collapsed = rect.width === 0 && rect.height === 0;
    if (collapsed || rect.top < limit) {
      pending.delete(entry);
      observer?.unobserve(entry.el);
      entry.reveal();
    }
  }
}

function scheduleFallback() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(flushFallback);
}

function bindFallback() {
  if (fallbackBound) return;
  fallbackBound = true;
  window.addEventListener("scroll", scheduleFallback, { passive: true });
  window.addEventListener("resize", scheduleFallback, { passive: true });
  window.addEventListener("load", scheduleFallback);
}

function getObserver() {
  if (observer) return observer;
  if (typeof IntersectionObserver === "undefined") return null;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const p of pending) {
          if (p.el !== entry.target) continue;
          pending.delete(p);
          observer?.unobserve(p.el);
          p.reveal();
          break;
        }
      }
    },
    // threshold は 0 にする。面積比を条件にすると、
    // クリップやスケールで表示面積が縮んだ要素が出てこなくなる。
    { rootMargin: "0px 0px -8% 0px", threshold: 0 },
  );
  return observer;
}

export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const entry: Entry = { el, reveal: () => setVisible(true) };
    const io = getObserver();

    if (!io) {
      // IntersectionObserver 非対応環境では常時表示
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    pending.add(entry);
    io.observe(el);
    bindFallback();
    scheduleFallback();

    return () => {
      pending.delete(entry);
      io.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${VARIANT_CLASS[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}
