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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="go-up-arrow position-fixed bottom-0 end-0 me-3 mb-3"
      id="upArrowBtn"
      style={{ zIndex: 1000 }}
    >
     <button 
  type="button"
  className="btn btn-primary w-12 h-12 flex justify-center items-center rounded-[50%] shadow-lg hover:bg-primary-600 transition-colors duration-300" 
  onClick={scrollToTop}
>
  <ArrowUp size={18} />
</button>
    </div>
  );
}
