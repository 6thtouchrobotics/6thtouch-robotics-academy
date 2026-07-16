"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full py-16 mt-auto relative overflow-hidden font-sans border-t border-gray-100"
      style={{ backgroundColor: "#f8f8f3" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/assets/images/logo.svg')",
          backgroundSize: "48px 48px",
          backgroundRepeat: "repeat",
          opacity: 0.07,
          filter: "grayscale(100%) sepia(10%) brightness(0%)",
          pointerEvents: "none",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Intro */}
          <div className="md:col-span-6 mb-4 md:mb-0">
            <Link className="font-bold block" href="/">
              <img
                src="/assets/images/wordmark.svg"
                alt="6thtouch STEM Logo"
                width="180"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md leading-relaxed">
              6thtouch Robotics Academy empowers learners of all ages through
              personalised STEM education — from home tutoring and teacher
              training to coding, robotics, and school programmes across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h5 className="mb-4 text-xs font-bold tracking-wider text-gray-800 uppercase">
              Quick Links
            </h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5">
                <Link href="/home-tutoring" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  Home Tutors
                </Link>
              </li>
              <li className="mb-2.5">
                <Link href="/teacher-tutoring" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  Teaching Tutoring
                </Link>
              </li>
              <li className="mb-2.5">
                <Link href="/coding-robotics-tutor" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  Coding and Robotics
                </Link>
              </li>
              <li className="mb-2.5">
                <Link href="/school-tutoring" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  School Tutoring
                </Link>
              </li>
              <li className="my-3">
                <hr className="border-gray-200" />
              </li>
              <li className="mb-2.5">
                <Link href="/tutors-registration-form" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm font-medium">
                  Sign in as a Tutor
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="md:col-span-2">
            <h5 className="mb-4 text-xs font-bold tracking-wider text-gray-800 uppercase">
              Other Links
            </h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5">
                <Link href="/" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  Home
                </Link>
              </li>
              <li className="mb-2.5">
                <Link href="/contact" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  Contact us
                </Link>
              </li>
              <li className="mb-2.5">
                <Link href="/about" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  About us
                </Link>
              </li>
              <li className="mb-2.5">
                <Link href="/gallery" className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-2">
            <h5 className="mb-4 text-xs font-bold tracking-wider text-gray-800 uppercase">
              Social Media
            </h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2.5">
                <a
                  href="https://www.instagram.com/6thtouch_robotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2.5">
                <a
                  href="https://www.facebook.com/share/1LFHCLoAio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2.5">
                <a
                  href="https://www.youtube.com/@6thtouchrobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF6A00] transition-colors duration-150 no-underline text-sm"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
