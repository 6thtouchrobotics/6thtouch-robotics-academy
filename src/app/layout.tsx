import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UpArrow from "@/components/UpArrow";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1E3A8A",
};

export const metadata = {
  title: "Home | 6thtouch Robotics Academy",
  description:
    "6thtouch Robotics Academy: 6thtouch Robotics Academy is an organization that helps youth learn and be more creative.",
  keywords:
    "6thtouch Robotics Academy, Coding and Robotics, Home tutoring, 6thtouch STEM, STEM",
  authors: [{ name: "PADev3 Technologies" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ colorScheme: "light", background: "#F4F6F9" }}>
      <head>
        <link rel="icon" href="/assets/images/6thtouch_logo.png" />
        <link
          rel="shortcut icon"
          href="/assets/images/6thtouch_logo.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/assets/images/6thtouch_logo.png" />
      </head>
      <body className="bg-[#F4F6F9] text-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <UpArrow />
      </body>
    </html>

  );
}
