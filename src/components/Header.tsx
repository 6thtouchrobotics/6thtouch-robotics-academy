"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaXmark, FaHouse, FaChalkboard, FaCode, FaSchool, FaUser, FaChevronDown } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Open immediately — clear any pending close (Desktop)
  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsDropdownOpen(true);
    }
  };

  // Start a grace-period close (Desktop)
  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
    }
  };

  // Keeping the menu open while cursor is inside it (Desktop)
  const handleMenuMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  // Close after leaving the menu itself (Desktop)
  const handleMenuMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 992) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const solutionPaths = [
    "/home-tutoring",
    "/teacher-tutoring",
    "/coding-robotics-tutor",
    "/school-tutoring",
    "/tutors-registration-form",
  ];
  const isSolutionsActive = solutionPaths.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeNavbar = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `relative flex items-center text-gray-900 text-[13.6px] font-medium py-3 px-4 no-underline rounded-lg transition-all duration-200 hover:text-[#FF6A00] hover:bg-[#fffaf7] lg:py-2 lg:px-4 lg:rounded-full lg:hover:bg-gray-50 lg:hover:text-[#FF6A00] ${
      isActive
        ? "!text-[#FF6A00] font-semibold bg-[#fffaf7] lg:bg-transparent lg:!text-gray-900 lg:font-semibold"
        : ""
    }`;
  };

  const getDropdownItemClass = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center gap-3 py-2.5 px-4 text-gray-900 text-[13.6px] font-medium no-underline rounded-lg transition-all duration-200 mt-[2px] hover:text-[#FF6A00] hover:bg-[#fffaf7] lg:py-2.5 lg:px-3.5 lg:hover:bg-gray-50 lg:hover:text-[#FF6A00] ${
      isActive ? "!text-[#FF6A00] bg-[#fffaf7] lg:bg-[rgba(255,106,0,0.06)] lg:!text-[#c95200]" : ""
    }`;
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] z-[1030] w-full font-sans"
      aria-label="Main navigation"
    >
      {/* Scroll Indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          backgroundColor: "#FF6A00",
          transition: "width 0.1s linear",
          zIndex: 10000,
          borderRadius: "0 2px 2px 0",
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between box-border">
        {/* Brand Logo */}
        <Link className="flex items-center transition-transform duration-200 hover:scale-[1.03]" href="/" onClick={closeNavbar}>
          <img src="/assets/images/logo.svg" alt="6thtouch STEM Logo" width="42" height="42" />
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="lg:hidden flex items-center justify-center bg-[#fffaf7] border border-[#ffebd9] text-[#FF6A00] text-xl p-2.5 rounded-lg cursor-pointer transition-all duration-200 z-[10001] hover:bg-[#ffebd9] hover:border-[#ffd8be] hover:text-[#e05e00]"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleNavbar}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Backdrop for mobile drawer overlay */}
        {isOpen && <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[999]" onClick={closeNavbar} />}

        {/* Navigation Content Menu */}
        <div
          className={`fixed top-0 bottom-0 w-[280px] h-screen bg-white pt-22 px-6 pb-8 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-[right] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-[1000] overflow-y-auto box-border lg:static lg:w-auto lg:h-auto lg:p-0 lg:shadow-none lg:bg-transparent lg:overflow-visible ${
            isOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
            <li className="relative lg:block">
              <Link className={getNavLinkClass("/")} href="/" onClick={closeNavbar}>
                Home
                {pathname === "/" && (
                  <span className="hidden lg:block absolute bottom-1 left-1/2 -translate-x-1/2 w-1.25 h-1.25 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                )}
              </Link>
            </li>
            <li className="relative lg:block">
              <Link className={getNavLinkClass("/about")} href="/about" onClick={closeNavbar}>
                About Us
                {pathname === "/about" && (
                  <span className="hidden lg:block absolute bottom-1 left-1/2 -translate-x-1/2 w-1.25 h-1.25 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                )}
              </Link>
            </li>

            {/* Dropdown Navigation Item */}
            <li
              className="relative lg:block solutions-dropdown after:absolute after:top-full after:left-[-10px] after:right-[-10px] after:h-[14px] after:bg-transparent after:content-['']"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className={`relative flex items-center text-gray-900 text-[13.6px] font-medium py-3 px-4 no-underline rounded-lg transition-all duration-200 hover:text-[#FF6A00] hover:bg-[#fffaf7] lg:py-2 lg:px-4 lg:rounded-full lg:hover:bg-gray-50 lg:hover:text-[#FF6A00] justify-between w-full lg:gap-1.5 ${
                  isSolutionsActive
                    ? "!text-[#FF6A00] font-semibold bg-[#fffaf7] lg:bg-transparent lg:!text-gray-900 lg:font-semibold"
                    : ""
                }`}
                href="#"
                role="button"
                aria-expanded={isDropdownOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Solutions
                <FaChevronDown
                  className={`text-[12px] transition-transform duration-250 opacity-80 ${isDropdownOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
                {isSolutionsActive && (
                  <span className="hidden lg:block absolute bottom-1 left-1/2 -translate-x-1/2 w-1.25 h-1.25 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                )}
              </a>

              {/* Nested Dropdown Links */}
              <ul
                className={`list-none p-0 pl-3 m-0 lg:absolute lg:top-[calc(100%+10px)] lg:left-1/2 lg:-translate-x-1/2 lg:w-[230px] lg:bg-white lg:border lg:border-gray-200 lg:rounded-xl lg:p-1.5 lg:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_-4px_rgba(0,0,0,0.04)] lg:z-50 ${
                  isDropdownOpen ? "block lg:animate-menu-entry" : "hidden"
                }`}
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
              >
                <li>
                  <Link
                    className={getDropdownItemClass("/home-tutoring")}
                    href="/home-tutoring"
                    onClick={closeNavbar}
                  >
                    <FaHouse className="text-gray-400 text-base" /> Home Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    className={getDropdownItemClass("/teacher-tutoring")}
                    href="/teacher-tutoring"
                    onClick={closeNavbar}
                  >
                    <FaChalkboard className="text-gray-400 text-base" /> Teaching Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    className={getDropdownItemClass("/coding-robotics-tutor")}
                    href="/coding-robotics-tutor"
                    onClick={closeNavbar}
                  >
                    <FaCode className="text-gray-400 text-base" /> Coding &amp; Robotics
                  </Link>
                </li>
                <li>
                  <Link
                    className={getDropdownItemClass("/school-tutoring")}
                    href="/school-tutoring"
                    onClick={closeNavbar}
                  >
                    <FaSchool className="text-gray-400 text-base" /> School Tutoring
                  </Link>
                </li>
                <li className="h-[1px] bg-gray-100 my-2" />
                <li>
                  <Link
                    className={getDropdownItemClass("/tutors-registration-form")}
                    href="/tutors-registration-form"
                    onClick={closeNavbar}
                  >
                    <FaUser className="text-gray-400 text-base" /> Become a Tutor
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative lg:block">
              <Link className={getNavLinkClass("/gallery")} href="/gallery" onClick={closeNavbar}>
                Gallery
                {pathname === "/gallery" && (
                  <span className="hidden lg:block absolute bottom-1 left-1/2 -translate-x-1/2 w-1.25 h-1.25 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                )}
              </Link>
            </li>
            <li className="relative lg:block">
              <Link className={getNavLinkClass("/events")} href="/events" onClick={closeNavbar}>
                Events
                {pathname === "/events" && (
                  <span className="hidden lg:block absolute bottom-1 left-1/2 -translate-x-1/2 w-1.25 h-1.25 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                )}
              </Link>
            </li>
            <li className="relative lg:block">
              <Link className={getNavLinkClass("/contact")} href="/contact" onClick={closeNavbar}>
                Contact Us
                {pathname === "/contact" && (
                  <span className="hidden lg:block absolute bottom-1 left-1/2 -translate-x-1/2 w-1.25 h-1.25 rounded-full bg-[#FF6A00]" aria-hidden="true" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}