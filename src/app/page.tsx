"use client";

import HeroCarousel from "@/components/HeroCarousel";
import SolutionsSection from "@/components/SolutionsSection";
import AwardsSection from "@/components/AwardsSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <SolutionsSection />
      <AwardsSection />
      <PartnersSection />
    </>
  );
}