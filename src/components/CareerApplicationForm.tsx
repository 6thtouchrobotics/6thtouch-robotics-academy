"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import FormInput from "@/components/FormInput";

const WHATSAPP_NUMBER = "2348038007686";

type CareerApplicationFormProps = {
  roleTitle: string;
};

export default function CareerApplicationForm({ roleTitle }: CareerApplicationFormProps) {
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
    const fullName = String(formData.get("Full name") || "").trim();
    const email = String(formData.get("Email") || "").trim();
    const phone = String(formData.get("Phone number") || "").trim();
    const educationLevel = String(formData.get("Education level") || "").trim();

    try {
      const response = await fetch("https://formspree.io/f/xjyyvzgr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Your application could not be submitted. Please try again.");
      }

      const message = [
        "Hello 6thTouch Robotics Academy,",
        "",
        `I have submitted my application for the ${roleTitle} role. I would like to receive more information about the role and the next steps in the hiring process.`,
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Education level: ${educationLevel}`,
      ].join("\n");

      form.reset();
      window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="w-full pt-6 pb-12 font-sans text-left">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2 text-[#FF6A00] leading-tight">
          Career Application
        </h1>
        <p className="text-base text-gray-500">
          Apply for the {roleTitle} position by completing the form below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
          <input type="hidden" name="Job Title" value={roleTitle} />
          <input type="hidden" name="_subject" value={`Career application: ${roleTitle}`} />

          <FormInput label="Full name" name="Full name" placeholder="Your full name" required />
          <FormInput label="Email address" name="Email" type="email" placeholder="you@example.com" required />
          <FormInput label="Phone number" name="Phone number" type="tel" placeholder="+234 ..." required />
          <div>
            <label htmlFor="Education level" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Education level <span className="text-red-500">*</span>
            </label>
            <select
              id="Education level"
              name="Education level"
              required
              defaultValue=""
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
            >
              <option value="" disabled>Select education level</option>
              <option value="Secondary school graduate">Secondary school graduate</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Professional certification">Professional certification</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <FormInput
            label="Relevant experience"
            name="Relevant experience"
            placeholder="Briefly tell us about your relevant experience"
            isTextArea
            className="md:col-span-2"
            required
          />

          <p className="md:col-span-2 -mt-3 text-sm leading-relaxed text-gray-500">
            After submitting this form, you will be redirected to WhatsApp to complete your application.
          </p>

          {status === "error" && (
            <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#1E3A8A] text-white py-3 px-6 rounded-xl hover:bg-[#152d6b] disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              {status === "sending" ? (
                <>Submitting application <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /></>
              ) : (
                <>Submit and continue on WhatsApp <Send size={16} /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
