import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { careerRoles, getCareerRole } from "@/data/careerRoles";

type CareerDetailPageProps = {
  params: Promise<{ role: string }>;
};

export function generateStaticParams() {
  return careerRoles.map(({ id }) => ({ role: id }));
}

export async function generateMetadata({ params }: CareerDetailPageProps) {
  const { role: roleId } = await params;
  const role = getCareerRole(roleId);

  return {
    title: role ? `${role.title} | Careers | 6thtouch Robotics Academy` : "Career not found",
  };
}

function RoleList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[1.1rem] font-bold text-[#F36300]">{title}</h2>
      <ul className="space-y-3 text-[15px] leading-7 text-[#4c5867]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#ff6a00]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { role: roleId } = await params;
  const role = getCareerRole(roleId);

  if (!role) notFound();

  return (
    <div className="min-h-screen bg-[#f4f1eb] px-6 pb-20 pt-[110px] text-[#1c2435]">
      <div className="mx-auto max-w-[1120px]">
        <Link
          href="/careers"
          className="mb-8 inline-flex items-center gap-2 text-[12px] font-medium text-[#1f3a5f] transition-colors hover:text-[#ff6a00]"
        >
          <FaArrowLeft aria-hidden="true" className="text-[11px]" />
          Back to Careers
        </Link>

        <header className="mt-9 text-center">
          <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-0.05em] text-[#1f3258]">
            {role.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[14px] font-medium text-[#4d5d74]">
            <span>{role.department}</span>
            <span aria-hidden="true" className="text-[#ff6a00]">•</span>
            <span>{role.location}</span>
            <span aria-hidden="true" className="text-[#ff6a00]">•</span>
            <span>{role.employmentType}</span>
          </p>
        </header>

        <div className="mt-9 flex justify-center">
          <Link
            href={`/careers/apply?role=${role.id}`}
            className="rounded-[12px] bg-[#1c3a6d] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(28,58,109,0.18)] transition-colors hover:bg-[#132b52]"
          >
            Apply for this Role
          </Link>
        </div>

        <div className="mx-auto mt-14 max-w-[760px] text-[#1e2d40]">
          <section className="mb-10">
            <h2 className="mb-4 text-[1.1rem] font-bold text-[#F36300]">About the Role</h2>
            <div className="space-y-4 text-[15px] leading-7 text-[#4c5867]">
              {role.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <RoleList title="Key Responsibilities" items={role.responsibilities} />
          <RoleList title="What We’re Looking For" items={role.requirements} />
          <RoleList title="Nice to Haves" items={role.niceToHave} />
          <RoleList title="What We Offer" items={role.whatWeOffer} />

          <div className="mt-8 flex justify-center">
            <Link
              href={`/careers/apply?role=${role.id}`}
              className="rounded-[12px] bg-[#1c3a6d] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(28,58,109,0.18)] transition-colors hover:bg-[#132b52]"
            >
              Apply for this Role
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
