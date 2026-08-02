"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { LINKS, NAV, SHOP, ACCESS } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { ArrowIcon, ClockIcon, InstagramIcon, PinIcon } from "@/components/ui/Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /** トップページのみヒーロー上に透過ヘッダーを重ねる */
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* モバイルメニュー: スクロールロック + Escape + フォーカストラップ */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, close]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        本文へスキップ
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          overlay
            ? "bg-gradient-to-b from-black/55 via-black/25 to-transparent"
            : "bg-ivory/95 shadow-[0_1px_0_rgba(0,0,0,0.07)] backdrop-blur-md"
        }`}
      >
        <div className="container-wide flex h-[68px] items-center justify-between gap-6 lg:h-[84px]">
          <Link
            href="/"
            aria-label={`${SHOP.name} トップページ`}
            className="relative block shrink-0 py-2"
          >
            <Image
              src={overlay ? "/logo-white.png" : "/logo.png"}
              alt={`${SHOP.name}（手ぶらBBQビアガーデン）のロゴ`}
              width={1200}
              height={625}
              priority
              sizes="(max-width: 1024px) 168px, 210px"
              className="h-[38px] w-auto lg:h-[46px]"
            />
          </Link>

          <nav aria-label="メインメニュー" className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`u-en group relative py-2 text-[0.7rem] transition-colors ${
                    overlay ? "text-white/90 hover:text-white" : "text-ink hover:text-brand"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    } ${overlay ? "bg-white" : "bg-brand"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HOLIDAY SKY LOUNGE 新宿の公式Instagramを見る（新しいタブで開きます）"
              {...track("instagram_click", "header")}
              className={`hidden h-11 w-11 items-center justify-center rounded-full border transition-colors sm:flex ${
                overlay
                  ? "border-white/50 text-white hover:bg-white hover:text-brand-deep"
                  : "border-line text-ink hover:border-brand hover:bg-brand hover:text-white"
              }`}
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>

            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.1em] transition-all duration-400 sm:inline-flex ${
                overlay
                  ? "bg-white/95 text-brand-deep hover:bg-white"
                  : "bg-brand text-white hover:bg-brand-deep"
              }`}
            >
              空席を確認・予約
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              className={`flex h-11 w-11 items-center justify-center xl:hidden ${
                overlay ? "text-white" : "text-ink"
              }`}
            >
              <span className="relative block h-4 w-6">
                <span
                  className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-400 ${
                    open ? "top-[7px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-px w-6 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-400 ${
                    open ? "top-[7px] -rotate-45" : "top-[14px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ---------- モバイルメニュー ---------- */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
        className={`fixed inset-0 z-40 xl:hidden ${open ? "visible" : "invisible"}`}
        style={{ transitionProperty: "visibility", transitionDuration: open ? "0s" : "500ms" }}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={close}
          className={`absolute inset-0 bg-ember/60 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={panelRef}
          className={`absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-ivory pb-[calc(var(--cta-height)+2.5rem)] pt-[76px] transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        >
          <div className="container-wide">
            <nav aria-label="モバイルメニュー">
              <ul className="border-t border-line">
                {NAV.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="u-en text-[0.82rem] text-ink">{item.label}</span>
                      <span className="text-[0.72rem] tracking-[0.15em] text-ink-soft">
                        {item.labelJa}
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line">
                  <Link href="/faq" onClick={close} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="u-en text-[0.82rem] text-ink">FAQ</span>
                    <span className="text-[0.72rem] tracking-[0.15em] text-ink-soft">よくある質問</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-8 space-y-3">
              <a
                href={LINKS.reserve}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
                {...track("reservation_click", "mobile-menu")}
              >
                空席を確認・予約する
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
                {...track("instagram_click", "mobile-menu")}
              >
                <InstagramIcon className="h-4 w-4" />
                Instagramを見る
              </a>
            </div>

            <dl className="mt-9 space-y-4 border-t border-line pt-7 text-[0.85rem] leading-relaxed">
              <div className="flex gap-3">
                <dt className="mt-0.5 text-brand">
                  <ClockIcon />
                  <span className="sr-only">営業時間</span>
                </dt>
                <dd>
                  {SHOP.hours}
                  <span className="mt-0.5 block text-[0.75rem] text-ink-soft">
                    フードL.O. {SHOP.lastOrder.food}／ドリンクL.O. {SHOP.lastOrder.drink}
                  </span>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="mt-0.5 text-brand">
                  <PinIcon />
                  <span className="sr-only">住所</span>
                </dt>
                <dd>
                  {SHOP.addressFull}
                  <span className="mt-0.5 block text-[0.75rem] text-ink-soft">
                    {ACCESS[0].station}
                    {ACCESS[0].detail}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
