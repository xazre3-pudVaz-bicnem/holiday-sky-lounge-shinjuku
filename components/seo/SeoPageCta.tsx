import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { ACCESS, LINKS, SHOP } from "@/lib/site-config";
import { track } from "@/lib/analytics";

/**
 * 下層ページ用の予約CTA。position を渡して、どの位置のCTAが押されたか計測できるようにする。
 */
export default function SeoPageCta({
  heading,
  lead,
  position,
  image = "/images/terrace-night-cityscape.jpg",
}: {
  heading: string;
  lead: string;
  position: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ember py-24 text-white lg:py-32">
      <div aria-hidden="true" className="absolute inset-0">
        <Image src={image} alt="" fill loading="lazy" quality={65} sizes="100vw" className="object-cover" />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,14,0.84),rgba(8,22,14,0.92))]" />
      </div>

      <div className="container-wide relative text-center">
        <Reveal>
          <p className="u-eyebrow flex items-center justify-center gap-3 text-sun">
            <span aria-hidden="true" className="h-px w-8 bg-sun/60" />
            Reservation
            <span aria-hidden="true" className="h-px w-8 bg-sun/60" />
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-6 text-[1.55rem] leading-[1.6] text-white sm:text-[2rem] lg:text-[2.4rem]">{heading}</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-2xl text-[0.9rem] leading-[2.05] text-white/75">{lead}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white px-10 text-brand-deep hover:bg-sun hover:text-ember"
              {...track("reservation_click", position)}
            >
              空席を確認・予約する
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={`tel:${SHOP.telShop.replace(/-/g, "")}`}
              className="btn btn-ghost-light"
              {...track("phone_click", position)}
            >
              <PhoneIcon className="h-4 w-4" />
              {SHOP.telShop}
            </a>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <dl className="mx-auto mt-12 grid max-w-3xl gap-6 border-t border-white/15 pt-9 text-left sm:grid-cols-3">
            <div className="flex gap-3">
              <dt className="mt-0.5 text-sun">
                <ClockIcon />
                <span className="sr-only">営業時間</span>
              </dt>
              <dd className="text-[0.82rem] leading-[1.9] text-white/75">
                {SHOP.hours}
                <span className="mt-0.5 block text-[0.72rem] text-white/65">
                  フードL.O. {SHOP.lastOrder.food}／ドリンクL.O. {SHOP.lastOrder.drink}
                </span>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="mt-0.5 text-sun">
                <PinIcon />
                <span className="sr-only">住所</span>
              </dt>
              <dd className="text-[0.82rem] leading-[1.9] text-white/75">
                {SHOP.addressFull}
                <span className="mt-0.5 block text-[0.72rem] text-white/65">
                  {ACCESS[0].station}
                  {ACCESS[0].detail}
                </span>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="mt-0.5 text-sun">
                <PhoneIcon />
                <span className="sr-only">予約専用電話</span>
              </dt>
              <dd className="text-[0.82rem] leading-[1.9] text-white/75">
                {SHOP.telReserve}
                <span className="mt-0.5 block text-[0.72rem] text-white/65">予約専用</span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
