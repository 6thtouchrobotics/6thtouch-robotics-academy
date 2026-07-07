"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaGraduationCap, FaArrowUpRightFromSquare } from "react-icons/fa6";

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

interface Solution {
  id: string;
  title: string;
  tag: string;
  badge: string;
  color: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  link: string;
}

export default function Home() {
  // Carousel Data
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

  // Solutions Data
  const solutions: Solution[] = [
    {
      id: "parents-students",
      title: "Parents & Students",
      tag: "STEAM, Home Track",
      badge: "Grades 1-5",
      color: "#1E3A8A",
      image: "/assets/images/gallery_image_2.jpg",
      shortDesc:
        "Personalized, practice-focused home tutoring paths scheduled comfortably around your household's routine.",
      longDesc:
        "Our Home Tutoring program delivers customized STEM blueprints directly to your doorstep. Instructors prioritize experiential robotics workflows matching individual paces. By adjusting timelines closely around household routines, we turn environments into safe logic sandboxes for continuous academic growth and development.",
      link: "/home-tutoring",
    },
    {
      id: "teachers-coaches",
      title: "Teachers & Coaches",
      tag: "STEAM, Training",
      badge: "Coaches",
      color: "#CB7280",
      image: "/assets/images/gallery_image_3.jpg",
      shortDesc:
        "Professional STEM training to build confident, certified instructors capable of running competition tracks.",
      longDesc:
        "Empower educators with modern pedagogical toolkits. This curriculum covers micro-controller setup, visual syntax platforms, and lab layout assembly rules. Coaches graduate completely ready to launch engineering clubs and lead students through advanced robotics competition tracks successfully.",
      link: "/teacher-tutoring",
    },
    {
      id: "coding-robotics",
      title: "Coding & Robotics",
      tag: "Coding, Robotics",
      badge: "Grades 6-8",
      color: "#FFCA00",
      image: "/assets/images/gallery_image_1.jpg",
      shortDesc:
        "Interactive logic sandboxes introducing young tech explorers to real-world modern programming languages.",
      longDesc:
        "Bridging game logic concepts with structural software principles. Students master foundational syntaxes (such as Python and C++) while immediately observing physical reactions via microcontrollers and mechanical actuators. This practical sandbox layout builds spatial debugging logic and complex loop optimizations.",
      link: "/coding-robotics-tutor",
    },
    {
      id: "schools-academies",
      title: "Schools & Academies",
      tag: "Institutional Labs",
      badge: "Campuses",
      color: "#000000",
      image: "/assets/images/gallery_image_2.jpg",
      shortDesc:
        "Seamless campus integration including lab setups, specialized equipment supply, and club management.",
      longDesc:
        "Transform traditional learning models through tailored campus alignment strategies. We evaluate available spatial layouts, procure targeted electronic component ecosystems, and assemble functional engineering workstations. The package includes instructor updates, club management, and resource asset monitoring pipelines.",
      link: "/school-tutoring",
    },
  ];

  const partners = [
    { name: "Spik3", logo: "/assets/images/methodist.jpeg" },
    { name: "6thtouch", logo: "/assets/images/ipakodo.jpeg" },
    { name: "Wordmark", logo: "/assets/images/methodist_girls.jpeg" },
    { name: "Word Mark", logo: "/assets/images/ntic.jpg" },
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
    <>
      <style>{`
        .logo-ticker-track {
          display: flex;
          width: max-content;
          animation: infiniteScroll 25s linear infinite;
        }
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-ticker-track:hover {
          animation-play-state: paused;
        }

        /* Sticky stacking cards — same pattern as the Slyperbuild feature section:
           each card uses sticky positioning with its own fixed top offset and a
           rising z-index, so each new card slides in and settles on top of
           the last one as you scroll. No vh math, no negative margins. */
        .solution-stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 20vh;
        }
        .solution-card {
          position: sticky;
          background: #fff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
        }
        .read-more-text {
          position: relative;
        }
        .read-more-text::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1.5px;
          bottom: -1px;
          left: 0;
          background-color: #FF6A00;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .read-more-link:hover .read-more-text::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .read-more-icon {
          transition: transform 0.25s ease;
        }
        .read-more-link:hover .read-more-icon {
          transform: translate(2px, -2px);
        }
      `}</style>

      {/* Carousel Hero Section */}
      <div className="d-flex justify-content-center align-items-center my-4 w-100">
        <section
          className="position-relative overflow-hidden w-100"
          style={{ height: "85vh" }}
        >
          <div
            style={{
              display: "flex",
              width: `${slides.length * 100}%`,
              height: "100%",
              transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
              transition: "transform 0.7s cubic-bezier(0.77, 0, 0.18, 1)",
              willChange: "transform",
            }}
          >
            {slides.map((slide, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: `${100 / slides.length}%`,
                    flexShrink: 0,
                    height: "100%",
                    backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.4), rgba(10, 15, 30, 0.5)), url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                />
              );
            })}
          </div>

          {/* Static Left-Aligned Bottom Text Overlay (Only First Slide's Text) */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end"
            style={{ zIndex: 2, pointerEvents: "none", paddingBottom: "3.5rem" }}
          >
            <div
              className="container px-4 text-white text-start"
              style={{ maxWidth: "1200px" }}
            >
              <div className="col-lg-6 col-md-8" style={{ pointerEvents: "auto" }}>
                <h1
                  className="h3 fw-semibold mb-2 tracking-tight"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                    lineHeight: "1.25",
                  }}
                >
                  {(() => {
                    const firstSlide = slides[0];
                    const parts = firstSlide.title.split(firstSlide.highlight);
                    return parts.length === 2 ? (
                      <>
                        {parts[0]}
                        <span style={{ color: "#FF6A00" }}>{firstSlide.highlight}</span>
                        {parts[1]}
                      </>
                    ) : (
                      firstSlide.title
                    );
                  })()}
                </h1>

                <p
                  className="mb-0 opacity-90 fs-6 fw-light"
                  style={{
                    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                    lineHeight: "1.5",
                  }}
                >
                  {slides[0].description}
                </p>
              </div>
            </div>
          </div>

          <button
            className="position-absolute top-50 start-0 translate-middle-y btn text-white border-0 d-flex align-items-center justify-content-center m-4 rounded-circle"
            style={{
              zIndex: 10,
              width: "50px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              transition: "all 0.3s ease",
            }}
            onClick={prevSlide}
            aria-label="Previous Slide"
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >
            <FaChevronLeft className="fs-5" />
          </button>

          <button
            className="position-absolute top-50 end-0 translate-middle-y btn text-white border-0 d-flex align-items-center justify-content-center m-4 rounded-circle"
            style={{
              zIndex: 10,
              width: "50px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              transition: "all 0.3s ease",
            }}
            onClick={nextSlide}
            aria-label="Next Slide"
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >
            <FaChevronRight className="fs-5" />
          </button>

          <div
            className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2"
            style={{ zIndex: 10 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="border-0"
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

      {/* Solutions Section — sticky card stack, same mechanism as the
          Slyperbuild feature section: position: sticky + rising top offset
          + rising z-index per card. */}
      <section className="bg-light pt-5 pb-4 w-100" id="solutionSection">
        <div className="container-fluid py-3 mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="text-center mb-5">
            <h2 className="fs-3 fw-bold text-[#FF6A00] mb-2">Our Solutions</h2>
            <p className="text-muted small mx-auto col-md-6">
              How education is being transformed with{" "}
              <span className="text-primary fw-medium">6thtouch Robotics Academy</span>
            </p>
          </div>

          <div className="solution-stack">
            {solutions.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  className="solution-card row g-0 rounded-4 overflow-hidden align-items-center"
                  key={item.id}
                  style={{
                    top: `${100 + index * 30}px`,
                    zIndex: index + 1,
                    flexDirection: isEven ? "row" : "row-reverse",
                  }}
                >
                  {/* Text Side */}
                  <div className="col-md-7 p-4 p-lg-5">
                    <div className="mb-2" style={{ fontSize: "0.75rem" }}>
                      <span className="text-muted fw-semibold text-uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="h3 fw-bold text-[#1E3A8A] mb-3">{item.title}</h3>

                    <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                      {item.shortDesc}
                    </p>

                    <Link
                      href={item.link}
                      className="read-more-link fw-medium text-decoration-none d-inline-flex align-items-center gap-1"
                      style={{ color: "#FF6A00" }}
                    >
                      <span className="read-more-text">Read more</span>
                      <span className="read-more-icon d-inline-flex">
                        <FaArrowUpRightFromSquare size={16} />
                      </span>
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div className="col-md-5 position-relative" style={{ height: "320px" }}>
                    <div
                      className="w-100 h-100 overflow-hidden rounded-3 border border-light-subtle shadow-sm"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>

                    <div
                      className="position-absolute top-0 bottom-0 d-flex flex-column align-items-center text-dark py-3"
                      style={{
                        width: "40px",
                        right: isEven ? 0 : "auto",
                        left: isEven ? "auto" : 0,
                        backgroundColor: "rgba(0, 0, 0, 0.08)",
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <FaGraduationCap className="mb-2" style={{ fontSize: "0.9rem" }} />
                      <span
                        style={{
                          writingMode: "vertical-rl",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-3 pb-4 bg-white">
        <div className="container py-4" style={{ maxWidth: "1200px" }}>
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="text-start">
                <h2 className="fs-3 fw-bold text-[#FF6A00] mb-2">Awards & Recognition</h2>
                <p className="text-muted small mx-auto mx-lg-0 col-lg-10">
                  Celebrating the milestones, programs, and achievements that continue to shape our impact.
                </p>

                <div className="mt-4 d-flex flex-column gap-3">
                  {[
                    {
                      title: "Lagos State District Robotics Training",
                      text: "Trained all the Robotics Schools in Districts 2 and 5 of the Lagos State Educational Districts.",
                    },
                    {
                      title: "WRO RoboSport — 1st Position (2026)",
                      text: "Achieved 1st Position in the World Robot Olympiad (WRO) RoboSport category, representing Lagos State.",
                    },
                    {
                      title: "WRO RoboMission Senior — 1st Position (2026)",
                      text: "Claimed 1st Position in the WRO RoboMission Senior Category, representing Lagos State at the World Robot Olympiad.",
                    },
                    {
                      title: "FIRST LEGO League (2024)",
                      text: "Competed in the FIRST LEGO League 2024 held in Ekiti, showcasing excellence in robotics design and teamwork.",
                    },
                    {
                      title: "Avishkaar League Robotics Competition — 3rd Position",
                      text: "Secured 3rd Position at the Avishkaar League Robotics Competition, demonstrating outstanding engineering and problem-solving skills.",
                    },
                  ].map((award) => (
                    <div
                      key={award.title}
                      className="rounded-4 p-4"
                    // style={{ boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)" }}
                    >
                      <h3 className="h6 fw-bold text-[#1E3A8A] mb-2">{award.title}</h3>
                      <p className="text-muted small mb-0">{award.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="overflow-hidden rounded-4 border border-light-subtle shadow-sm">
                <img
                  src="/assets/images/gallery_image_4.jpg"
                  alt="Award showcase"
                  className="w-100"
                  style={{ height: "360px", objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-5 bg-white">
        <div className="container py-4" style={{ maxWidth: "1200px" }}>
          <div className="text-start">
            <h2 className="fs-3 fw-bold text-[#FF6A00] mb-2">Our Partners</h2>
            <p className="text-muted small mx-auto mx-lg-0 col-lg-10">
              Trusted by schools, educators, and innovation programs across the region.
            </p>

            <div className="row g-3 mt-3">
              {partners.map((partner) => (
                <div key={partner.name} className="col-6 col-md-3">
                  <div
                    className="h-100 rounded-4 p-3 p-md-4 d-flex align-items-center justify-content-center"
                    style={{ minHeight: "120px", boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)" }}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      style={{ maxWidth: "100%", maxHeight: "70px", objectFit: "contain" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}