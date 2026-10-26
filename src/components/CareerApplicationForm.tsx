import FormInput from "@/components/FormInput";

type CareerApplicationFormProps = {
  roleTitle: string;
};

export default function CareerApplicationForm({ roleTitle }: CareerApplicationFormProps) {
  return (
    <section className="w-full py-16 mt-20 mb-12 font-sans text-left">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2 text-[#FF6A00] leading-tight">
          Career Application
        </h1>
        <p className="text-base text-gray-500">
          Apply for the {roleTitle} position by completing the form below.
        </p>
        <form
          action="https://formspree.io/f/xjyyvzgr"
          method="post"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <input type="hidden" name="Job Title" value={roleTitle} />
          <input type="hidden" name="_subject" value={`Career application: ${roleTitle}`} />

          <FormInput label="Full name" name="Full name" placeholder="Your full name" required />
          <FormInput label="Email address" name="Email" type="email" placeholder="you@example.com" required />
          <FormInput label="Phone number" name="Phone number" type="tel" placeholder="+234 ..." required />
          <FormInput
            label="Relevant experience"
            name="Relevant experience"
            placeholder="Briefly tell us about your relevant experience"
            isTextArea
            className="md:col-span-2"
            required
          />

          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-[#1E3A8A] text-white py-3 px-6 rounded-xl hover:bg-[#152d6b] flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              Submit application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
