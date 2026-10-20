import CareerRoleBrowser from "@/components/CareerRoleBrowser";

const steps = [
  { number: "1", label: "Application & Portfolio" },
  { number: "2", label: "Initial Conversation" },
  { number: "3", label: "Practical Tech-Back" },
  { number: "4", label: "Offer & Onboarding" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#1c2435]">
      <div className="mx-auto max-w-[1120px] px-6 pb-20 pt-[100px]">
        <header className="mx-auto max-w-[840px] text-center">
          <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.06em] text-[#1f3258]">
            Join the 6thTouch Team
          </h1>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[#4d5d74]">
            We are building a world-class STEM education ecosystem. Explore our open positions across instruction, curriculum development, and technical mentorship.
          </p>
        </header>

        <CareerRoleBrowser />

        <section className="mt-20" aria-labelledby="how-we-hire">
          <div className="text-center">
            <h2 id="how-we-hire" className="text-[clamp(2rem,3vw,3rem)] font-bold tracking-[-0.04em] text-[#1f3258]">
              How We Hire
            </h2>
            <p className="mt-3 text-[15px] text-[#4d5d74]">
              A simple, transparent 4-step journey from application to joining the team.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[250px_1fr] lg:items-start">
            <ol className="space-y-4">
              {steps.map((step) => (
                <li key={step.number} className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${step.number === "1" ? "bg-[#1c3a6d] text-white" : "bg-[#edf1f7] text-[#32415d]"}`}>
                    {step.number}
                  </span>
                  <span className="text-left">
                    <span className="block text-[12px] font-medium text-[#6f7e93]">Step {step.number}</span>
                    <span className="block text-[15px] font-semibold text-[#1f3258]">{step.label}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="rounded-[22px] border border-[#ddd2c4] bg-[#fcfbf8] p-6 shadow-[0_12px_30px_rgba(31,50,88,0.04)]">
              <div className="mb-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ff6a00]">
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[#ff6a00]" />
                Step 1
              </div>
              <h3 className="text-[1.8rem] font-bold leading-none tracking-[-0.04em] text-[#1f3258]">
                Application &amp; Portfolio
              </h3>
              <div className="mt-6 rounded-[18px] border border-[#e4ddd4] bg-[#f6f0e5] p-6">
                <div className="mb-5 text-[12px] font-medium text-[#706d67]">Submit your application</div>
                <div className="rounded-[14px] bg-white p-5 text-[14px] leading-6 text-[#4d5d74] shadow-[0_8px_18px_rgba(17,24,39,0.04)]">
                  Submit your resume, portfolio links, GitHub, or past teaching projects.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
