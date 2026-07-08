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

  return (
    <nav ref={navRef} className="custom-navbar" aria-label="Main navigation">
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

      <div className="nav-container">
        {/* Brand Logo */}
        <Link className="nav-brand" href="/" onClick={closeNavbar}>
          <img src="/assets/images/logo.svg" alt="6thtouch STEM Logo" width="42" height="42" />
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="nav-toggle-btn"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleNavbar}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Backdrop for mobile drawer overlay */}
        {isOpen && <div className="drawer-backdrop" onClick={closeNavbar} />}

        {/* Navigation Content Menu */}
        <div className={`nav-menu-wrapper ${isOpen ? "is-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
                onClick={closeNavbar}
              >
                Home
                {pathname === "/" && <span className="active-dot" aria-hidden="true" />}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
                onClick={closeNavbar}
              >
                About Us
                {pathname === "/about" && <span className="active-dot" aria-hidden="true" />}
              </Link>
            </li>

            {/* Dropdown Navigation Item */}
            <li
              className={`nav-item dropdown solutions-dropdown ${isDropdownOpen ? "show" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className={`nav-link solutions-toggle ${isSolutionsActive ? "active" : ""}`}
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
                  className={`solutions-chevron ${isDropdownOpen ? "flipped" : ""}`}
                  aria-hidden="true"
                />
                {isSolutionsActive && <span className="active-dot" aria-hidden="true" />}
              </a>

              {/* Nested Dropdown Links */}
              <ul
                className={`dropdown-menu solutions-menu ${isDropdownOpen ? "show" : ""}`}
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
              >
                <li>
                  <Link
                    className={`dropdown-item ${pathname === "/home-tutoring" ? "active" : ""}`}
                    href="/home-tutoring"
                    onClick={closeNavbar}
                  >
                    <FaHouse /> Home Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${pathname === "/teacher-tutoring" ? "active" : ""}`}
                    href="/teacher-tutoring"
                    onClick={closeNavbar}
                  >
                    <FaChalkboard /> Teaching Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${pathname === "/coding-robotics-tutor" ? "active" : ""}`}
                    href="/coding-robotics-tutor"
                    onClick={closeNavbar}
                  >
                    <FaCode /> Coding &amp; Robotics
                  </Link>
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${pathname === "/school-tutoring" ? "active" : ""}`}
                    href="/school-tutoring"
                    onClick={closeNavbar}
                  >
                    <FaSchool /> School Tutoring
                  </Link>
                </li>
                <li className="menu-divider" />
                <li>
                  <Link
                    className={`dropdown-item highlights ${pathname === "/tutors-registration-form" ? "active" : ""}`}
                    href="/tutors-registration-form"
                    onClick={closeNavbar}
                  >
                    <FaUser /> Become a Tutor
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}
                href="/gallery"
                onClick={closeNavbar}
              >
                Gallery
                {pathname === "/gallery" && <span className="active-dot" aria-hidden="true" />}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
                onClick={closeNavbar}
              >
                Contact Us
                {pathname === "/contact" && <span className="active-dot" aria-hidden="true" />}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* --- Base Layout Reset & Variables --- */
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: #ffffff !important; /* Force solid white background */
          border-bottom: 1px solid #f3f4f6;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.03);
          z-index: 1030;
        }

        .nav-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          transition: transform 0.2s ease;
        }
        .nav-brand:hover {
          transform: scale(1.03);
        }

        /* --- Toggle Mobile Button --- */
        .nav-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          color: #374151;
          font-size: 1.25rem;
          padding: 0.6rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10001;
        }
        .nav-toggle-btn:hover {
          background-color: #f3f4f6;
          color: #111827;
        }

        /* --- Navigation Items & Links --- */
        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        :global(.nav-link) {
          position: relative;
          display: flex;
          align-items: center;
          color: #111827 !important; /* Shade of black */
          font-size: 0.85rem !important; /* Reduced font size */
          font-weight: 500;
          padding: 0.75rem 1rem;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        :global(.nav-link:hover) {
          color: #FF6A00 !important;
          background-color: #fffaf7 !important;
        }
        :global(.nav-link.active) {
          color: #FF6A00 !important;
          font-weight: 600;
          background-color: #fffaf7 !important;
        }

        /* Hidden on mobile to avoid breaking vertical link alignments */
        .active-dot {
          display: none; 
        }

        /* --- Mobile Menu Drawer --- */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(17, 24, 39, 0.4);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 999;
        }

        .nav-menu-wrapper {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background-color: #ffffff;
          padding: 5.5rem 1.5rem 2rem 1.5rem;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
          transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
          overflow-y: auto;
          box-sizing: border-box;
        }
        .nav-menu-wrapper.is-open {
          right: 0;
        }

        /* --- Accordion Dropdown Mobile Navigation --- */
        .solutions-toggle {
          justify-content: space-between;
          width: 100%;
        }
        .solutions-chevron {
          font-size: 0.75rem;
          transition: transform 0.25s ease;
          opacity: 0.8;
        }
        .solutions-chevron.flipped {
          transform: rotate(180deg);
        }

        .solutions-menu {
          display: none;
          list-style: none;
          padding: 0.25rem 0 0 0.75rem;
          margin: 0;
        }
        .solutions-menu.show {
          display: block;
        }

        :global(.dropdown-item) {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.65rem 1rem;
          color: #111827 !important; /* Shade of black */
          font-size: 0.85rem !important; /* Match nav-link font size */
          font-weight: 500;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-top: 2px;
        }
        :global(.dropdown-item svg) {
          color: #9ca3af;
          font-size: 1rem;
        }
        :global(.dropdown-item:hover), :global(.dropdown-item.active) {
          color: #FF6A00 !important;
          background-color: #fffaf7 !important;
        }
        :global(.dropdown-item:hover svg), :global(.dropdown-item.active svg) {
          color: #FF6A00 !important;
        }

        .menu-divider {
          height: 1px;
          background-color: #f3f4f6;
          margin: 0.5rem 0;
        }

        /* --- Desktop Specific Styles Breakpoint --- */
        @media (min-width: 992px) {
          .nav-toggle-btn, .drawer-backdrop {
            display: none;
          }

          .nav-menu-wrapper {
            position: static;
            width: auto;
            height: auto;
            padding: 0;
            box-shadow: none;
            background: transparent;
            overflow: visible;
          }

          .nav-list {
            flex-direction: row;
            align-items: center;
            gap: 0.25rem;
          }

          :global(.nav-link) {
            padding: 0.5rem 1rem;
            border-radius: 20px;
          }
          :global(.nav-link:hover) {
            background-color: #f9fafb !important;
            color: #FF6A00 !important; /* Highlight color on hover */
          }
          :global(.nav-link.active) {
            background-color: transparent !important;
            color: #000000 !important; /* Active text color - solid black */
            font-weight: 600 !important; /* Bolder text for active page */
          }

          /* Bottom Dot Indicator Setup (Fixed and stabilized layout dimensions) */
          .active-dot {
            display: block;
            position: absolute;
            bottom: 4px; /* Positioned directly under active nav text */
            left: 50%;
            transform: translateX(-50%);
            width: 5px;
            height: 5px;
            min-width: 5px;
            min-height: 5px;
            border-radius: 50%;
            background-color: #FF6A00;
          }

          .solutions-toggle {
            gap: 6px;
          }

          /* Desktop Floating Dropdown Overlay Menu */
          .solutions-dropdown {
            position: relative;
          }
          
          /* Mouse Bridge */
          .solutions-dropdown::after {
            content: '';
            position: absolute;
            top: 100%;
            left: -10px;
            right: -10px;
            height: 14px;
            background: transparent;
          }

          .solutions-menu {
            display: none;
            position: absolute;
            top: calc(100% + 10px);
            left: 50%;
            transform: translateX(-50%);
            width: 230px;
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 6px;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.04);
          }

          .solutions-menu.show {
            display: block;
            animation: menuEntryEffect 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          :global(.dropdown-item) {
            padding: 0.6rem 0.85rem;
          }
          :global(.dropdown-item:hover) {
            background-color: #f9fafb !important;
            color: #FF6A00 !important;
          }
          :global(.dropdown-item.active) {
            background-color: rgba(255, 106, 0, 0.06) !important;
            color: #c95200 !important;
          }

          @keyframes menuEntryEffect {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-8px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0) scale(1);
            }
          }
        }
      `}</style>
    </nav>
  );
}