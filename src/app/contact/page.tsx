import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import FormInput from "@/components/FormInput";

export const metadata: Metadata = {
  title: "Contact Us | 6thtouch Robotics Academy",
  description: "Get in touch with 6thtouch Robotics Academy. Contact us via phone, email, or visit our Lagos office for inquiries about home tutoring, training, or school setups.",
  keywords: "contact 6thtouch, email 6thtouch, robotics academy location, phone number 6thtouch, Lagos robotics",
};

export default function Contact() {
  return (
    <section className="w-full py-16 mt-20 mb-12 font-sans text-left">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-[#FF6A00]">
          Have any questions? <span className="text-[#1E3A8A]">Message us</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500">
          Leave your message here, our team will reply to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <form
              action="https://formspree.io/f/xeqynrev"
              method="post"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <FormInput
                label="Full name"
                name="Full name"
                placeholder="Full name"
                className="md:col-span-2"
                required
              />
              <FormInput
                label="Enter email"
                name="Email"
                type="email"
                required
              />
              <FormInput
                label="Phone number"
                name="Phone Number"
                type="tel"
                required
              />
              <FormInput
                label="Message"
                name="Message"
                isTextArea={true}
                className="md:col-span-2"
                required
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#1E3A8A] text-white py-3 px-6 rounded-xl hover:bg-[#152d6b] flex items-center justify-center gap-2 font-semibold text-sm transition-colors duration-200 cursor-pointer"
                >
                  Send Message <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 flex items-stretch">
            <div
              className="rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6 w-full relative overflow-hidden bg-[#f8f8f3] border border-gray-100"
            >
              {/* Logo repeating pattern background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: "url('/assets/images/logo.svg')",
                  backgroundSize: "48px 48px",
                  backgroundRepeat: "repeat",
                  opacity: 0.07,
                  filter: "grayscale(100%) sepia(10%) brightness(0%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 flex flex-col gap-6" style={{ zIndex: 1 }}>
                
                {/* Office Address */}
                <div className="flex gap-4 items-start">
                  <div className="text-[#1E3A8A] shrink-0 mt-0.5">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">Office Address</h5>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-0">
                      6 Richard Hyacinth, Lasu Road, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4 items-start">
                  <div className="text-[#1E3A8A] shrink-0 mt-0.5">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">Working Hours</h5>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-0">
                      Mon to Fri: 09:00 AM to 06:00 PM
                    </p>
                  </div>
                </div>

                {/* Direct Reach */}
                <div className="flex gap-4 items-start">
                  <div className="text-[#1E3A8A] shrink-0 mt-0.5">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">Call Us</h5>
                    <a href="tel:+2348038007686" className="text-xs md:text-sm text-gray-500 hover:text-[#FF6A00] transition-colors duration-150 block no-underline">
                      +234 803 800 7686
                    </a>
                  </div>
                </div>

                {/* Email Reach */}
                <div className="flex gap-4 items-start">
                  <div className="text-[#1E3A8A] shrink-0 mt-0.5">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">Email Us</h5>
                    <a href="mailto:6thtouchrobotics@gmail.com" className="text-xs md:text-sm text-gray-500 hover:text-[#FF6A00] transition-colors duration-150 block no-underline">
                      6thtouchrobotics@gmail.com
                    </a>
                  </div>
                </div>

                <hr className="border-gray-200 my-2" />

                {/* Social Channels */}
                <div>
                  <h6 className="text-sm font-bold text-gray-900 mb-3">Follow Our Academy</h6>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/6thtouch_robotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-sm hover:shadow-md border border-gray-200 hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] hover:scale-110 transition-all duration-200 no-underline"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1LFHCLoAio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-sm hover:shadow-md border border-gray-200 hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] hover:scale-110 transition-all duration-200 no-underline"
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@6thtouchrobotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-sm hover:shadow-md border border-gray-200 hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] hover:scale-110 transition-all duration-200 no-underline"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}