import Image from "next/image";

type Props = {
  en: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
};

/** 下層ページ共通のヒーロー。トップとは高さ・トーンを変えてリズムを作る。 */
export default function PageHero({ en, title, lead, image, alt }: Props) {
  return (
    <section className="relative overflow-hidden bg-ember">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,14,0.72)_0%,rgba(8,22,14,0.42)_45%,rgba(8,22,14,0.78)_100%)]"
        />
      </div>

      <div className="container-wide relative flex min-h-[62svh] flex-col justify-end pb-16 pt-36 lg:min-h-[68svh] lg:pb-20 lg:pt-44">
        <p className="u-eyebrow flex items-center gap-3 text-sun">
          <span aria-hidden="true" className="h-px w-8 bg-sun/60" />
          {en}
        </p>
        <h1 className="text-shadow-hero mt-5 max-w-3xl text-[1.7rem] leading-[1.55] text-white sm:text-[2.2rem] lg:text-[2.7rem]">
          {title}
        </h1>
        <p className="text-shadow-hero mt-6 max-w-2xl text-[0.9rem] leading-[2.05] text-white/80">
          {lead}
        </p>
      </div>
    </section>
  );
}
