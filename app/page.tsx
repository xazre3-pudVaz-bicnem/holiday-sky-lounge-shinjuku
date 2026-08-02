import Hero from "@/components/sections/Hero";
import BeerGardenSummary from "@/components/sections/BeerGardenSummary";
import Concept from "@/components/sections/Concept";
import Features from "@/components/sections/Features";
import PurposeNav from "@/components/sections/PurposeNav";
import Courses from "@/components/sections/Courses";
import FoodDrink from "@/components/sections/FoodDrink";
import Space from "@/components/sections/Space";
import Scene from "@/components/sections/Scene";
import Gallery from "@/components/sections/Gallery";
import FirstTime from "@/components/sections/FirstTime";
import Faq from "@/components/sections/Faq";
import Access from "@/components/sections/Access";
import ReserveCta from "@/components/sections/ReserveCta";
import InstagramSection from "@/components/sections/InstagramSection";
import SearchIntent from "@/components/sections/SearchIntent";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { lastModifiedOf } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { FAQS } from "@/data/content";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/",
            name: `新宿のビアガーデン・屋上手ぶらBBQ｜${siteConfig.name}`,
            description: siteConfig.description,
            lastModified: lastModifiedOf("/"),
            image: "/images/hero-rooftop-beergarden-night.jpg",
          }),
          faqJsonLd(FAQS, "/"),
        ]}
      />
      <Hero />
      <BeerGardenSummary />
      <Concept />
      <PurposeNav />
      <Features />
      <Courses />
      <FoodDrink />
      <Space />
      <Scene />
      <Gallery />
      <SearchIntent />
      <FirstTime />
      <Faq />
      <Access />
      <ReserveCta />
      <InstagramSection />
    </>
  );
}
