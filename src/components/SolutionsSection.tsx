"use client";

import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGraduationCap } from "react-icons/fa6";

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

export default function SolutionsSection() {
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

  return (
    <section className="bg-[#F4F6F9] pt-16 pb-12 w-full font-sans" id="solutionSection">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-4">
        {/* Title Block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF6A00] mb-3">Our Solutions</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            How education is being transformed with{" "}
            <span className="text-[#1E3A8A] font-semibold">6thtouch Robotics Academy</span>
          </p>
        </div>

        {/* Sticky Cards Deck */}
        <div className="solution-stack">
          {solutions.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                className="solution-card grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden items-center bg-white border border-gray-100"
                key={item.id}
                style={{
                  top: `${100 + index * 30}px`,
                  zIndex: index + 1,
                }}
              >
                {/* Text Side */}
                <div className={`col-span-1 md:col-span-7 p-6 lg:p-12 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <div className="mb-2.5 text-xs">
                    <span className="text-gray-400 font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">{item.title}</h3>

                  <p className="text-gray-500 mb-6 text-sm lg:text-[15.2px] leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <Link
                    href={item.link}
                    className="read-more-link font-semibold no-underline inline-flex items-center gap-1.5 text-[#FF6A00]"
                  >
                    <span className="read-more-text">Read more</span>
                    <span className="read-more-icon inline-flex">
                      <FaArrowUpRightFromSquare size={14} />
                    </span>
                  </Link>
                </div>

                {/* Image Side */}
                <div className={`col-span-1 md:col-span-5 relative h-[320px] w-full ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="w-full h-full overflow-hidden" style={{ backgroundColor: "#f5f5f5" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Ribbon Badge Indicator */}
                  <div
                    className="absolute top-0 bottom-0 flex flex-col items-center text-gray-800 py-4"
                    style={{
                      width: "40px",
                      right: isEven ? 0 : "auto",
                      left: isEven ? "auto" : 0,
                      backgroundColor: "rgba(0, 0, 0, 0.08)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <FaGraduationCap className="mb-2 text-[14px]" />
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
  );
}
