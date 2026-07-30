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

/**
 * ページ内に多数配置するため、IntersectionObserver は1つだけ生成して共有する。
 * （要素ごとに生成するとモバイルのメインスレッド負荷が大きくなるため）
 */
type Callback = () => void;
const callbacks = new WeakMap<Element, Callback>();
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  if (typeof IntersectionObserver === "undefined") return null;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
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

    const io = getObserver();
    if (!io) {
      // 未対応ブラウザでは常時表示にフォールバック
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    callbacks.set(el, () => setVisible(true));
    io.observe(el);
    return () => {
      callbacks.delete(el);
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
