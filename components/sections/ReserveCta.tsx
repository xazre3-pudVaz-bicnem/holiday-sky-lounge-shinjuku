import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { ACCESS, LINKS, SHOP } from "@/lib/site";

export default function ReserveCta() {
  return (
    <section className="relative overflow-hidden bg-ember py-28 text-white lg:py-40">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/terrace-night-cityscape.jpg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,14,0.82),rgba(8,22,14,0.9))]" />
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
          <h2 className="mt-6 text-[1.75rem] leading-[1.6] text-white sm:text-[2.2rem] lg:text-[2.7rem]">
            今夜の屋上に、
            <br className="sm:hidden" />
            席を取っておきませんか。
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-xl text-[0.9rem] leading-[2.05] text-white/75">
            ご予約は食べログの予約ページから。日時・人数・コースを選ぶだけで完了します。当日の空き状況もこちらでご確認いただけます。
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white px-10 text-brand-deep hover:bg-sun hover:text-ember"
            >
              空席を確認・予約する
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={`tel:${SHOP.telReserve.replace(/-/g, "")}`} className="btn btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {SHOP.telReserve}
            </a>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <dl className="mx-auto mt-14 grid max-w-3xl gap-6 border-t border-white/15 pt-10 text-left sm:grid-cols-3">
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
                <span className="sr-only">電話番号</span>
              </dt>
              <dd className="text-[0.82rem] leading-[1.9] text-white/75">
                {SHOP.telShop}
                <span className="mt-0.5 block text-[0.72rem] text-white/65">店舗直通</span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
