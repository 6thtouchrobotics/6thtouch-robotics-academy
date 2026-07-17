import HeroCarousel from "@/components/HeroCarousel";
import SolutionsSection from "@/components/SolutionsSection";
import AwardsSection from "@/components/AwardsSection";
import PartnersSection from "@/components/PartnersSection";

export const metadata = {
  title: "6thtouch Robotics Academy | STEM, Coding & Robotics in Nigeria",
  description:
    "Empower your child with hands-on coding, robotics, and STEM education. We offer personalized home tutoring, school programs, and intensive developer training.",
  keywords:
    "6thtouch Robotics Academy, Coding and Robotics, Home tutoring, 6thtouch STEM, STEM education Nigeria, robotics school Lagos",
};

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