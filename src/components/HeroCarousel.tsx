"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Slide {
  title: string;
  highlight: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      title: "Empowering Next-Gen Innovators Through Robotics and Coding",
      highlight: "Next-Gen Innovators",
      description:
        "We provide comprehensive STEM education, advanced robotics kits, and practical tech training programs designed to prepare students and schools in Nigeria for the future.",
      image: "/assets/images/gallery_image_2.jpg",
      primaryCtaText: "Explore STEM Programs",
      primaryCtaLink: "/stem-education",
      secondaryCtaText: "Shop Robotics Kits",
      secondaryCtaLink: "/shop",
    },
    {
      title: "Smart Engineering Systems Built for Tomorrow",
      highlight: "Smart Engineering Systems",
      description:
        "From custom hardware prototyping to automated industrial solutions, we design and build intelligent systems that streamline workflows and solve complex operational problems.",
      image: "/assets/images/gallery_image_3.jpg",
      primaryCtaText: "Our Engineering Services",
      primaryCtaLink: "/services",
      secondaryCtaText: "Request a Consultation",
      secondaryCtaLink: "/contact",
    },
    {
      title: "Master Embedded Systems & Artificial Intelligence",
      highlight: "Artificial Intelligence",
      description:
        "Join intensive, hands-on bootcamps led by industry experts. Learn microcontroller programming, IoT architectures, and machine learning models from the ground up.",
      image: "/assets/images/gallery_image_1.jpg",
      primaryCtaText: "View Upcoming Courses",
      primaryCtaLink: "/academy",
      secondaryCtaText: "Download Brochure",
      secondaryCtaLink: "/about",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex justify-center items-center my-4 w-full font-sans">
      <section className="relative overflow-hidden w-full h-[60vh] md:h-[80vh] lg:h-[85vh]">
        {/* Slide Wrapper */}
        <div
          className="flex h-full"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
            transition: "transform 0.7s cubic-bezier(0.77, 0, 0.18, 1)",
            willChange: "transform",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full shrink-0 h-full relative"
              style={{
                width: `${100 / slides.length}%`,
                backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.45), rgba(10, 15, 30, 0.55)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Static Left-Aligned Bottom Text Overlay (Only First Slide's Text) */}
        <div className="absolute inset-0 w-full h-full flex items-end z-10 pointer-events-none pb-14 md:pb-20">
          <div className="w-full max-w-[1200px] mx-auto px-6 text-white text-left">
            <div className="w-full md:w-2/3 lg:w-1/2 pointer-events-auto">
              <h1
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight leading-tight"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
              >
                {(() => {
                  const firstSlide = slides[0];
                  const parts = firstSlide.title.split(firstSlide.highlight);
                  return parts.length === 2 ? (
                    <>
                      {parts[0]}
                      <span className="text-[#FF6A00]">{firstSlide.highlight}</span>
                      {parts[1]}
                    </>
                  ) : (
                    firstSlide.title
                  );
                })()}
              </h1>

              <p
                className="mb-0 opacity-90 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-lg"
                style={{ textShadow: "0 1px 5px rgba(0,0,0,0.4)" }}
              >
                {slides[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 -translate-y-1/2 text-white border-0 flex items-center justify-center m-4 rounded-full w-[50px] h-[50px] z-20 cursor-pointer transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          className="absolute top-1/2 right-0 -translate-y-1/2 text-white border-0 flex items-center justify-center m-4 rounded-full w-[50px] h-[50px] z-20 cursor-pointer transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="border-0 p-0"
              style={{
                width: currentSlide === index ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: currentSlide === index ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
