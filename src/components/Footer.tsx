"use client";

import Link from "next/link";
import { Camera, Globe2, MessageCircleMore, Send } from "lucide-react";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer
      className="container-fluid py-5 mt-auto position-relative overflow-hidden"
      style={{ backgroundColor: "#f8f8f3" }}
    >
      <div
        aria-hidden="true"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/assets/images/logo.svg')",
          backgroundSize: "48px 48px",
          backgroundRepeat: "repeat",
          opacity: 0.07,
          filter: "grayscale(100%) sepia(10%) brightness(0%)",
          pointerEvents: "none",
        }}
      />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <Link className="fw-bold ms-3" href="/">
              <img
                src="/assets/images/wordmark.svg"
                alt="6thtouch STEM Logo"
                width="180"
              />
            </Link>
            <p className="mt-3 text-sm" style={{ lineHeight: "1.7", opacity: 0.85 }}>
              6thtouch Robotics Academy empowers learners of all ages through
              personalised STEM education — from home tutoring and teacher
              training to coding, robotics, and school programmes across Nigeria.
            </p>
          </div>
          <div className="col-md-2">
            <h5 className="mb-4 text-sm">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/home-tutoring" className="link-dark text-decoration-none text-sm">
                  Home Tutors
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/teacher-tutoring" className="link-dark text-decoration-none text-sm">
                  Teaching Tutoring
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/coding-robotics-tutor" className="link-dark text-decoration-none text-sm">
                  Coding and Robotics
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/school-tutoring" className="link-dark text-decoration-none text-sm">
                  School Tutoring
                </Link>
              </li>
              <hr />
              <li className="mb-2">
                <Link href="/tutors-registration-form" className="link-dark text-decoration-none text-sm">
                  Sign in as a Tutor
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-4 text-sm">Other Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="link-dark text-decoration-none text-sm">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="link-dark text-decoration-none text-sm">
                  Contact us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="link-dark text-decoration-none text-sm">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="link-dark text-decoration-none text-sm">
                  Gallery
                </Link>
              </li>
              {/* <li className="mb-2">
                <a href="#" className="link-dark text-decoration-none text-sm">
                  Terms of use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="link-dark text-decoration-none text-sm">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-4 text-sm">Social Media</h5>
            <ul className="list-unstyled">
              {/* <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/andrew-aisagbonhi-687521145/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none text-sm"
                >
                  LinkedIn
                </a>
              </li> */}
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/6thtouch_robotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none text-sm"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/share/1LFHCLoAio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none text-sm"
                >
                  Facebook
                </a>
              </li>
              {/* <li className="mb-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none text-sm"
                >
                  Twitter
                </a>
              </li> */}
              <li className="mb-2">
                <a
                  href="https://www.youtube.com/@6thtouchrobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none text-sm"
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
