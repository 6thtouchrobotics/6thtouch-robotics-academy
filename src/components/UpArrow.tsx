"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function UpArrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 right-0 mr-4 mb-4"
      id="upArrowBtn"
      style={{ zIndex: 1000 }}
    >
      <button
        type="button"
        className="w-12 h-12 flex justify-center items-center rounded-full bg-[#1E3A8A] text-white shadow-lg hover:bg-[#152d6b] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E3A8A]"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
