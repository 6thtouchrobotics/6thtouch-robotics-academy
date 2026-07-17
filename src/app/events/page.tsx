import { Metadata } from "next";
import EventsClient from "@/components/EventsClient";

export const metadata: Metadata = {
  title: "Robotics Events & Tournaments | 6thtouch Robotics Academy",
  description: "Explore the robotics exhibitions, national tournaments, educational bootcamps, and institutional trainings anchored or participated in by 6thtouch Robotics Academy.",
  keywords: "6thtouch events, WRO Nigeria, robotics competition Lagos, STEM bootcamps, school robotics tournaments",
};

export default function EventsPage() {
  return <EventsClient />;
}
