"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import FormInput from "@/components/FormInput";

const WHATSAPP_NUMBER = "2348038007686";

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "General inquiry").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hello 6thTouch Robotics Academy,",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Inquiry: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    try {
      const response = await fetch("https://formspree.io/f/xeqynrev", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Your message could not be recorded. Please try again.");
      }

      form.reset();
      window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="w-full py-16 mt-20 mb-12 font-sans text-left">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#FF6A00]">Contact 6thTouch</p>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-[#1E3A8A]">
            Let&apos;s start a conversation about your <span className="text-[#FF6A00]">learning goals.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            Ask about our robotics classes, tutoring, school partnerships, or teacher training. Complete the form and continue the conversation directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8">
            <div className="mb-7">
              <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
              <p className="mt-1 text-sm text-gray-500">Fields marked with an asterisk are required.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Full name"
                name="fullName"
                placeholder="e.g. Ada Okafor"
                className="md:col-span-2"
                autoComplete="name"
                required
              />
              <FormInput
                label="Email address"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <FormInput
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="e.g. 0801 234 5678"
                autoComplete="tel"
                required
              />
              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  What are you interested in? <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
                >
                  <option value="" disabled>Select an option</option>
                  <option>Robotics and coding classes</option>
                  <option>Home tutoring</option>
                  <option>School tutoring partnership</option>
                  <option>Teacher training</option>
                  <option>Career or recruitment inquiry</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <FormInput
                label="Message"
                name="message"
                isTextArea
                placeholder="Tell us how we can help..."
                className="md:col-span-2"
                required
              />

              {status === "error" && (
                <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#1E3A8A] text-white py-3.5 px-6 rounded-xl hover:bg-[#152d6b] disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2 font-semibold text-sm transition-colors duration-200 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>Preparing WhatsApp <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /></>
                  ) : (
                    <>Send and continue on WhatsApp <Send size={16} /></>
                  )}
                </button>
                <p className="mt-3 text-center text-xs text-gray-500">
                  Your details will be sent securely, then opened in WhatsApp.
                </p>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6 w-full bg-[#f8f8f3] border border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-[#1E3A8A]">Contact details</h2>
                <p className="mt-1 text-sm text-gray-500">Choose the channel that works best for you.</p>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-[#FF6A00] shrink-0" size={22} />
                <div><h3 className="text-sm font-bold text-gray-900 mb-1">Visit our academy</h3><p className="text-sm text-gray-600 leading-relaxed">6 Richard Hyacinth, Lasu Road, Lagos, Nigeria.</p></div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-[#FF6A00] shrink-0" size={22} />
                <div><h3 className="text-sm font-bold text-gray-900 mb-1">Working hours</h3><p className="text-sm text-gray-600">Monday to Friday, 9:00 AM to 6:00 PM</p></div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-[#FF6A00] shrink-0" size={22} />
                <div><h3 className="text-sm font-bold text-gray-900 mb-1">Call us</h3><a href="tel:+2348038007686" className="text-sm text-gray-600 hover:text-[#FF6A00] no-underline">+234 803 800 7686</a></div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="text-[#FF6A00] shrink-0" size={22} />
                <div><h3 className="text-sm font-bold text-gray-900 mb-1">Email us</h3><a href="mailto:6thtouchrobotics@gmail.com" className="text-sm text-gray-600 hover:text-[#FF6A00] no-underline break-all">6thtouchrobotics@gmail.com</a></div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-white px-4 py-3 text-sm font-bold text-[#128C7E] no-underline transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={18} /> Chat with us on WhatsApp
              </a>

              <hr className="border-gray-200" />
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Follow 6thTouch</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/6thtouch_robotics" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-sm border border-gray-200 hover:bg-[#FF6A00] hover:text-white transition-all no-underline"><FaInstagram size={20} /></a>
                  <a href="https://www.facebook.com/share/1LFHCLoAio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-sm border border-gray-200 hover:bg-[#FF6A00] hover:text-white transition-all no-underline"><FaFacebook size={20} /></a>
                  <a href="https://www.youtube.com/@6thtouchrobotics" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#FF6A00] shadow-sm border border-gray-200 hover:bg-[#FF6A00] hover:text-white transition-all no-underline"><FaYoutube size={20} /></a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
