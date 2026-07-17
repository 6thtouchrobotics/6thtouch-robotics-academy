"use client";

import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function CEOSection() {
  return (
    <div className="w-full py-16 border-t border-gray-100 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* CEO Photo */}
          <div className="md:col-span-4">
            <img
              src="/assets/images/andrew.jpeg"
              alt="Aisagbonhi .C. Andrew 6thtouch Robotics CEO"
              className="w-full rounded-2xl shadow-md object-cover max-h-[360px]"
            />
          </div>

          {/* CEO Biography */}
          <div className="md:col-span-8 text-left">
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-2">
              Leadership
            </p>
            <h2 className="text-3xl font-bold mb-1 text-[#FF6A00]">
              Aisagbonhi .C. Andrew
            </h2>
            <p className="text-sm font-semibold text-[#1E3A8A] mb-4">
              CEO & Founder, 6thtouch Robotics Academy
            </p>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Andrew is a certified teacher and a professional STEM and robotics educator and coach. He has trained over 1,500 teachers in STEM and robotics and has earned certifications from global and local partners including Edupoint Robocode, World Robotic Olympiad, Archlight Foundation, First Lego League, and the Lagos State Ministry of Education.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/andrew-aisagbonhi-687521145/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#FF6A00] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/6thtouch__photgraphy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#FF6A00] transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/share/194omEZeiT/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#FF6A00] transition-colors duration-200"
                aria-label="Facebook Profile"
              >
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
