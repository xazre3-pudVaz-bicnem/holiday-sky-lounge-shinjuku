"use client";

import { useState } from "react";
import { LINKS, SHOP } from "@/lib/site";
import { PinIcon } from "./Icons";

/**
 * 表示速度を落とさないよう、クリック後にiframeを読み込む地図。
 * 初期表示ではiframeを一切生成しない。
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-tint lg:aspect-auto lg:h-full lg:min-h-[520px]">
      {loaded ? (
        <iframe
          title={`${SHOP.name}の地図（${SHOP.addressFull}）`}
          src={LINKS.gmapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[repeating-linear-gradient(45deg,#f2f7f3_0px,#f2f7f3_14px,#eaf1eb_14px,#eaf1eb_28px)] px-6 text-center transition-colors hover:bg-brand-soft"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:scale-105">
            <PinIcon className="h-6 w-6" />
          </span>
          <span className="text-[0.92rem] font-medium text-ink">地図を表示する</span>
          <span className="max-w-xs text-[0.78rem] leading-[1.9] text-ink-soft">
            {SHOP.addressFull}
            <br />
            東新宿駅A1出口から徒歩2分
          </span>
          <span aria-hidden="true" className="u-en text-[0.62rem] text-brand">TAP TO LOAD GOOGLE MAP</span>
        </button>
      )}
    </div>
  );
}
