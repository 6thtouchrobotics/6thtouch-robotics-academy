import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | 6thtouch Robotics Academy",
  description: "Get in touch with 6thtouch Robotics Academy. Contact us via phone, email, or visit our Lagos office for inquiries about home tutoring, training, or school setups.",
  keywords: "contact 6thtouch, email 6thtouch, robotics academy location, phone number 6thtouch, Lagos robotics",
};

export default function Contact() {
  return <ContactClient />;
}
