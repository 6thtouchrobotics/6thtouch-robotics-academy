"use client";

export default function PartnersSection() {
  const partners = [
    { name: "Methodist", logo: "/assets/images/methodist.jpeg" },
    { name: "Ipakodo", logo: "/assets/images/ipakodo.jpeg" },
    { name: "Methodist Girls", logo: "/assets/images/methodist_girls.jpeg" },
    { name: "NTIC", logo: "/assets/images/ntic.jpg" },
  ];

  return (
    <section className="pt-8 pb-16 bg-white font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-4">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-[#FF6A00] mb-2">Our Partners</h2>
          <p className="text-gray-500 text-sm max-w-lg">
            Trusted by schools, educators, and innovation programs across the region.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {partners.map((partner) => (
              <div key={partner.name} className="col-span-1">
                <div
                  className="h-full rounded-2xl p-4 md:p-6 flex items-center justify-center bg-white border border-gray-100 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-gray-200 transition-all duration-200 min-h-[120px]"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-[70px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
