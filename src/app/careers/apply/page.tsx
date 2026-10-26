import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import { getCareerRole } from "@/data/careerRoles";

type CareerApplicationPageProps = {
  searchParams: Promise<{ role?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: CareerApplicationPageProps) {
  const { role: roleId } = await searchParams;
  const role = typeof roleId === "string" ? getCareerRole(roleId) : undefined;

  return {
    title: role
      ? `Apply: ${role.title} | Careers | 6thtouch Robotics Academy`
      : "Career Application | 6thtouch Robotics Academy",
  };
}

export default async function CareerApplicationPage({ searchParams }: CareerApplicationPageProps) {
  const { role: roleId } = await searchParams;

  if (typeof roleId !== "string") notFound();

  const role = getCareerRole(roleId);
  if (!role) notFound();

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#1c2435]">
      <div className="mx-auto max-w-[1120px] px-6 pb-20 pt-[100px]">
        <Link
          href={`/careers/${role.id}`}
          className="inline-flex items-center gap-2 text-[12px] font-medium text-[#1f3a5f] transition-colors hover:text-[#ff6a00]"
        >
          <FaArrowLeft aria-hidden="true" className="text-[11px]" />
          Back to {role.title}
        </Link>

        <CareerApplicationForm roleTitle={role.title} />
      </div>
    </div>
  );
}
