import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MapEmbed from "@/components/ui/MapEmbed";
import { ArrowIcon, PinIcon } from "@/components/ui/Icons";
import { ACCESS, LINKS, SHOP } from "@/lib/site";

export default function Access() {
  return (
    <section id="access" className="bg-white py-24 lg:py-36">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              en="Access"
              lead="東新宿・西武新宿・新大久保・新宿東口。4つの駅から歩ける、K-SQUAREの屋上です。"
            >
              東新宿駅から徒歩2分の
              <br className="hidden sm:block" />
              好アクセス
            </SectionHeading>

            <Reveal delay={180}>
              <dl className="mt-12 border-t border-line text-[0.88rem]">
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <dt className="u-en text-[0.7rem] text-brand">ADDRESS</dt>
                  <dd>
                    〒{SHOP.postalCode}
                    <br />
                    {SHOP.addressFull}
                    <span className="mt-1 block text-[0.78rem] text-ink-soft">
                      ※ 建物の最上階までエレベーターで上がり、通路の先が屋上の入口です。
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <dt className="u-en text-[0.7rem] text-brand">TRAIN</dt>
                  <dd>
                    <ul className="space-y-1.5">
                      {ACCESS.map((a) => (
                        <li key={a.station} className="flex items-baseline gap-2">
                          <span className="text-ink">{a.station}</span>
                          <span className="text-[0.8rem] text-ink-soft">{a.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <dt className="u-en text-[0.7rem] text-brand">OPEN</dt>
                  <dd>
                    {SHOP.hours}
                    <span className="mt-1 block text-[0.78rem] text-ink-soft">
                      フードL.O. {SHOP.lastOrder.food}／ドリンクL.O. {SHOP.lastOrder.drink}
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <dt className="u-en text-[0.7rem] text-brand">TEL</dt>
                  <dd>
                    <a
                      href={`tel:${SHOP.telReserve.replace(/-/g, "")}`}
                      className="inline-block py-1 underline underline-offset-4 hover:text-brand"
                    >
                      {SHOP.telReserve}
                    </a>
                    <span className="text-[0.78rem] text-ink-soft">（予約専用）</span>
                    <br />
                    <a
                      href={`tel:${SHOP.telShop.replace(/-/g, "")}`}
                      className="inline-block py-1 underline underline-offset-4 hover:text-brand"
                    >
                      {SHOP.telShop}
                    </a>
                    <span className="text-[0.78rem] text-ink-soft">（店舗直通）</span>
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <dt className="u-en text-[0.7rem] text-brand">SEATS</dt>
                  <dd>
                    {SHOP.seats}（{SHOP.seatsDetail}）
                  </dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <dt className="u-en text-[0.7rem] text-brand">PARKING</dt>
                  <dd className="text-ink-soft">{SHOP.parking}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={LINKS.reserve}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  空席を確認・予約する
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href={LINKS.gmap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <PinIcon className="h-4 w-4" />
                  Googleマップで開く
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="clip">
              <MapEmbed />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
