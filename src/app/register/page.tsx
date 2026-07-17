import { Metadata } from "next";
import RegisterClient from "@/components/RegisterClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://6thtouchrobotics.com"),
  title: "Register for Intensive Program | 6thtouch Robotics Academy",
  description: "Secure your spot at the 6thtouch Robotics 2-week Intensive Training Program in Lagos. Master coding, software development, Arduino, and LEGO robotics.",
  keywords: "robotics training Lagos, register coding course, 6thtouch registration, learn robotics 2 weeks",
  openGraph: {
    title: "Register for Intensive Program | 6thtouch Robotics Academy",
    description: "Secure your spot at the 6thtouch Robotics 2-week Intensive Training Program in Lagos. Master coding, software development, Arduino, and LEGO robotics.",
    url: "https://6thtouchrobotics.com/register",
    siteName: "6thtouch Robotics Academy",
    images: [
      {
        url: "/assets/images/6thtouch_events.jpeg",
        width: 1200,
        height: 630,
        alt: "6thtouch Robotics Academy Intensive Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register for Intensive Program | 6thtouch Robotics Academy",
    description: "Secure your spot at the 6thtouch Robotics 2-week Intensive Training Program in Lagos. Master coding, software development, Arduino, and LEGO robotics.",
    images: ["/assets/images/6thtouch_events.jpeg"],
  },
};

export default function RegisterPage() {
  return <RegisterClient />;
}