"use client";

import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";

interface Tutor {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

export default function TutorsSection() {
  const tutors: Tutor[] = [
    {
      name: "Chukwuchebem David",
      role: "Chief Technology Officer & Software Developer",
      image: "/assets/images/david.png",
      linkedin: "https://www.linkedin.com/in/david-chukwuchebem-13912734a/",
      instagram: "https://www.instagram.com/david.chukwuchebem/",
      twitter: "https://x.com/@dextrus001/",
    },
    {
      name: "Ahanotu David",
      role: "Brand Strategy Designer & Brand Specialist",
      image: "/assets/images/a david.png",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      twitter: "https://x.com",
    },
    {
      name: "Akalugwu Desmond",
      role: "Product Designer & UX Specialist",
      image: "/assets/images/desmond.png",
      linkedin: "https://www.linkedin.com/in/akalugwu-desmond-678074373",
      instagram: "https://www.instagram.com/desmoiswired",
      twitter: "https://x.com/@desmoiswired",
    },
  ];

  return (
    <div className="w-full py-16 border-t border-gray-100 mb-12 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-2">
          Core Team
        </p>
        <h2 className="text-3xl font-bold mb-2 text-[#FF6A00]">
          Meet our Core Team
        </h2>
        <p className="text-sm text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
          Celebrating the talented minds behind our technology, branding, and design experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {tutors.map((tutor) => (
            <div key={tutor.name} className="col-span-1">
              <div className="rounded-2xl border border-gray-100 p-4 shadow-sm bg-white transition-all hover:shadow-md duration-200 flex flex-col text-left max-w-[320px] mx-auto h-full">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full rounded-xl mb-3 h-[280px] object-cover"
                />
                <h4 className="text-base font-bold text-[#1E3A8A] mb-0.5">{tutor.name}</h4>
                <p className="text-xs text-gray-600 font-semibold mb-3 leading-relaxed">
                  {tutor.role}
                </p>
                <div className="flex gap-4 items-center mt-auto">
                  <a
                    href={tutor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors duration-200"
                    aria-label={`${tutor.name} LinkedIn`}
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a
                    href={tutor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors duration-200"
                    aria-label={`${tutor.name} Instagram`}
                  >
                    <FaInstagram size={22} />
                  </a>
                  <a
                    href={tutor.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors duration-200"
                    aria-label={`${tutor.name} Twitter`}
                  >
                    <FaTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
