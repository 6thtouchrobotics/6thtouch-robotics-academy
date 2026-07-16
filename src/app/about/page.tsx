import CEOSection from "@/components/CEOSection";
import TutorsSection from "@/components/TutorsSection";

export const metadata = {
  title: "About | 6thtouch Robotics Academy",
};

export default function About() {
  return (
    <>
      {/* Intro Section */}
      <div className="w-full mt-20 py-12 font-sans">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-left">
              <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-2">
                About 6thtouch
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FF6A00] leading-tight">
                We inspire young minds through robotics, STEM, and hands-on learning.
              </h1>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                At <span className="font-bold text-[#1E3A8A]">6thtouch Robotics Academy</span>, we excite, inspire, and motivate young people and teachers about the fun, importance, and impact of robotics technology in today’s world, including STEM education.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We create friendly, engaging spaces where learners can explore, experiment, and express themselves through practical robotics experiences that build creativity, teamwork, and problem-solving skills.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/assets/images/about-hero.jpeg"
                alt="Students learning robotics"
                className="w-full rounded-2xl shadow-md object-cover max-h-[360px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Purpose / Mission & Vision Section */}
      <div className="w-full py-16 border-t border-gray-100 bg-[#F4F6F9]/30 font-sans">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-2">
              Our Purpose
            </p>
            <h2 className="text-3xl font-bold text-[#FF6A00]">What drives us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Mission Card */}
            <div className="rounded-2xl border border-gray-100 p-6 h-full bg-white shadow-sm transition-all hover:shadow-md duration-200">
              <img
                src="/assets/images/gallery_image_4.jpg"
                alt="Mission illustration"
                className="w-full rounded-xl mb-4 h-[220px] object-cover"
              />
              <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">Our Mission</h3>
              <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                Our mission is to ignite, inspire, and empower learners and teachers by showing the fun, importance, and influence of robotics technology in today’s world. We aim to make STEM learning practical, creative, and exciting.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-2xl border border-gray-100 p-6 h-full bg-white shadow-sm transition-all hover:shadow-md duration-200">
              <img
                src="/assets/images/gallery_image_3.jpg"
                alt="Vision illustration"
                className="w-full rounded-xl mb-4 h-[220px] object-cover"
              />
              <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">Our Vision</h3>
              <p className="text-sm text-gray-600 mb-0 leading-relaxed">
                Our vision is to transform learning by connecting science theory with practice, encouraging young people to develop creative thinking and pursue future opportunities in STEM and technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <CEOSection />

      {/* Tutors Section */}
      <TutorsSection />
    </>
  );
}
