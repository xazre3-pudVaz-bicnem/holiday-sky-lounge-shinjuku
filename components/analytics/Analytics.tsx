"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 の読み込みと、予約・Instagram・電話・地図クリックの計測。
 *
 * - 測定IDは NEXT_PUBLIC_GA_ID から取得する。未設定なら何も読み込まない（架空IDは入れない）。
 * - クリック計測は document に1つだけリスナーを張る委譲方式。
 *   各リンクは data-track 属性を持つだけなので、サーバーコンポーネントのままでよい。
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!target) return;

      const event = target.dataset.track;
      if (!event) return;

      window.gtag?.("event", event, {
        page_path: window.location.pathname,
        cta_position: target.dataset.trackPosition ?? "unknown",
        ...(target.dataset.trackCourse ? { course_name: target.dataset.trackCourse } : {}),
        device_type: window.matchMedia("(max-width: 1023px)").matches ? "mobile" : "desktop",
        link_url: target.getAttribute("href") ?? "",
      });
    };

    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
