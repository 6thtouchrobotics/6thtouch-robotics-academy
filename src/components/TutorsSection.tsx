"use client";

import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";

interface Tutor {
  name: string;
  image: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

export default function TutorsSection() {
  const tutors: Tutor[] = [
    {
      name: "Chukwuchebem David",
      image: "/assets/images/david.png",
      linkedin: "https://www.linkedin.com/in/david-chukwuchebem-13912734a/",
      instagram: "https://www.instagram.com/david.chukwuchebem/",
      twitter: "https://x.com/@dextrus001/",
    },
    {
      name: "Ahanotu David",
      image: "/assets/images/a david.png",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      twitter: "https://x.com",
    },
    {
      name: "Akalugwu Desmond",
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
          Educators
        </p>
        <h2 className="text-3xl font-bold mb-2 text-[#FF6A00]">
          Here's some of our qualified tutors
        </h2>
        <p className="text-sm text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
          Celebrating the milestones, programs, and achievements that continue to shape our impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {tutors.map((tutor) => (
            <div key={tutor.name} className="col-span-1">
              <div
                className="relative overflow-hidden w-full h-[320px] rounded-2xl border border-gray-200 shadow-sm bg-center bg-no-repeat bg-cover group mx-auto max-w-[320px]"
                style={{ backgroundImage: `url("${tutor.image}")` }}
              >
                {/* Hover Reveal Details */}
                <div className="absolute inset-0 p-8 bg-black/85 text-white flex flex-col items-center justify-center gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h5 className="font-semibold text-center text-lg text-white">
                    {tutor.name}
                  </h5>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={tutor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[#FF6A00] hover:scale-115 transition-all duration-200"
                      aria-label={`${tutor.name} LinkedIn`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={tutor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[#FF6A00] hover:scale-115 transition-all duration-200"
                      aria-label={`${tutor.name} Instagram`}
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href={tutor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[#FF6A00] hover:scale-115 transition-all duration-200"
                      aria-label={`${tutor.name} Twitter`}
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
