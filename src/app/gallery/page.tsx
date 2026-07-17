import { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Media Gallery | 6thtouch Robotics Academy",
  description: "Browse pictures and highlights from 6thtouch Robotics Academy training programs, school competitions, and hands-on coding sessions.",
  keywords: "6thtouch gallery, robotics competition photos, coding student gallery, STEM learning photos Lagos",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
