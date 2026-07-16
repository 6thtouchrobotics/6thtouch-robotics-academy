"use client";

export default function AwardsSection() {
  const awards = [
    {
      title: "Lagos State District Robotics Training",
      text: "Trained all the Robotics Schools in Districts 2 and 5 of the Lagos State Educational Districts.",
    },
    {
      title: "WRO RoboSport — 1st Position (2026)",
      text: "Achieved 1st Position in the World Robot Olympiad (WRO) RoboSport category, representing Lagos State.",
    },
    {
      title: "WRO RoboMission Senior — 1st Position (2026)",
      text: "Claimed 1st Position in the WRO RoboMission Senior Category, representing Lagos State at the World Robot Olympiad.",
    },
    {
      title: "FIRST LEGO League (2024)",
      text: "Competed in the FIRST LEGO League 2024 held in Ekiti, showcasing excellence in robotics design and teamwork.",
    },
    {
      title: "Avishkaar League Robotics Competition — 3rd Position",
      text: "Secured 3rd Position at the Avishkaar League Robotics Competition, demonstrating outstanding engineering and problem-solving skills.",
    },
  ];

  return (
    <section className="pt-12 pb-16 bg-white font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Awards Content */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl font-bold text-[#FF6A00] mb-3">Awards & Recognition</h2>
            <p className="text-gray-500 text-sm max-w-lg">
              Celebrating the milestones, programs, and achievements that continue to shape our impact.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="rounded-2xl p-5 border border-gray-100 bg-[#F4F6F9]/50 shadow-sm transition-all duration-200 hover:shadow-md hover:bg-white hover:border-[#1E3A8A]/10"
                >
                  <h3 className="text-base font-bold text-[#1E3A8A] mb-1.5">{award.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-0">{award.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md">
              <img
                src="/assets/images/gallery_image_4.jpg"
                alt="Award showcase"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
