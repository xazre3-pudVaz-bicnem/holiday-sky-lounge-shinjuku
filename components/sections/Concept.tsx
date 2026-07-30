import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";

export default function Concept() {
  return (
    <section id="concept" className="paper relative overflow-hidden py-24 lg:py-36">
      <div className="container-wide">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* 写真：左に大きく、少しはみ出させる */}
          <div className="lg:col-span-7">
            <Reveal variant="clip" className="relative">
              <div className="reveal-zoom relative aspect-[4/3] overflow-hidden lg:aspect-[3/2]">
                <Image
                  src="/images/concept-sunset-palm-sign.jpg"
                  alt="夕暮れの新宿の空の下、ヤシの木とHOLIDAYのサインが並ぶ屋上ビアガーデンのテラス席"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-5 flex items-center gap-4">
                <span aria-hidden="true" className="rule-sun h-px w-16 shrink-0" />
                <p className="text-[0.75rem] tracking-[0.14em] text-ink-soft">
                  日が落ちるころ、屋上の照明がひとつずつ灯りはじめます。
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <SectionHeading
              en="Concept"
              lead={
                <>
                  <p>
                    エレベーターの扉が開くと、そこはビルの屋上。頭上をさえぎるものがない約300席のテラスに、ヤシの木とガーランドライトが並びます。眼下には東新宿から新宿方面へ続くビル群と、行き交う車のライト。
                  </p>
                  <p className="mt-5">
                    食材の買い出しも、炭の準備も、後片付けもいりません。席にはグリルがセットされ、焼くだけの状態で肉と海鮮が運ばれてきます。網の上で脂がはぜる音を聞きながら、よく冷えたビールでまず一杯。
                  </p>
                  <p className="mt-5">
                    営業は11:30から23:45まで。青空の下で始める昼のBBQも、夜風に吹かれながらの遅い乾杯も、同じ場所で成立します。友人と、恋人と、家族と、同僚と。新宿にいながら、少しだけ遠くへ来たような時間を。
                  </p>
                </>
              }
            >
              新宿にいながら、
              <br />
              南国リゾートのような
              <br className="hidden sm:block" />
              ひとときを。
            </SectionHeading>

            <Reveal delay={230}>
              <Link
                href="/concept"
                className="mt-10 inline-flex items-center gap-3 border-b border-brand/40 pb-1 text-[0.82rem] font-semibold tracking-[0.1em] text-brand transition-colors hover:border-brand"
              >
                コンセプトを詳しく見る
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
