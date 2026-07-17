import { notFound } from "next/navigation";
import { Metadata } from "next";
import SolutionPageClient from "@/components/SolutionPageClient";
import solutionsData from "@/data/solutionsData.json";

interface PageProps {
  params: Promise<{
    solution: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(solutionsData.solutions).map((slug) => ({
    solution: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { solution } = await params;
  const pageData = solutionsData.solutions[solution as keyof typeof solutionsData.solutions];
  if (!pageData) {
    return { title: "Not Found | 6thtouch Robotics Academy" };
  }
  return {
    title: `${pageData.title} | 6thtouch Robotics Academy`,
    description: pageData.description,
    keywords: `${pageData.title}, 6thtouch solutions, robotics tutoring, STEM ${solution}, robotics training Nigeria`,
  };
}

export default async function Page({ params }: PageProps) {
  const { solution } = await params;
  const pageData = solutionsData.solutions[solution as keyof typeof solutionsData.solutions];

  if (!pageData) {
    notFound();
  }

  return <SolutionPageClient data={pageData} clients={solutionsData.clients} />;
}
