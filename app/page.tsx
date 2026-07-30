import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Features from "@/components/sections/Features";
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
import { faqJsonLd } from "@/lib/jsonld";
import { FAQS } from "@/data/content";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      <Hero />
      <Concept />
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
