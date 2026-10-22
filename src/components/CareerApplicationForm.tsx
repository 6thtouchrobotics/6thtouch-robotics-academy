import FormInput from "@/components/FormInput";

type CareerApplicationFormProps = {
  roleTitle: string;
};

export default function CareerApplicationForm({ roleTitle }: CareerApplicationFormProps) {
  const message = `Good afternoon, sir. I would like to apply for the ${roleTitle} position and would appreciate the opportunity to learn more about the role and the next steps.`;
  const whatsappRedirect = new URL("https://wa.me/2348038007686");
  whatsappRedirect.searchParams.set("text", message);

  return (
    <section
      id="application-form"
      className="scroll-mt-24 rounded-[22px] border border-[#ddd2c4] bg-[#fcfbf8] p-6 shadow-[0_12px_30px_rgba(31,50,88,0.04)] sm:p-8"
      aria-labelledby="application-heading"
    >
      <h2 id="application-heading" className="text-[1.6rem] font-bold tracking-[-0.04em] text-[#1f3258]">
        Apply for this role
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#4d5d74]">
        Share a few details with us. After submitting your application, you&apos;ll be taken to WhatsApp to continue the conversation.
      </p>

      <form
        action="https://formspree.io/f/xeqynrev"
        method="post"
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <input type="hidden" name="Role" value={roleTitle} />
        <input type="hidden" name="_subject" value={`Career application: ${roleTitle}`} />
        <input type="hidden" name="_next" value={whatsappRedirect.toString()} />

        <FormInput label="Full name" name="Full name" placeholder="Your full name" required />
        <FormInput label="Email address" name="Email" type="email" placeholder="you@example.com" required />
        <FormInput label="Phone number" name="Phone number" type="tel" placeholder="+234 ..." required />
        <FormInput
          label="Relevant experience"
          name="Relevant experience"
          placeholder="Briefly tell us about your relevant experience"
          isTextArea
          className="sm:col-span-2"
          required
        />

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-[12px] bg-[#1c3a6d] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(28,58,109,0.18)] transition-colors hover:bg-[#132b52]"
          >
            Submit application
          </button>
        </div>
      </form>
    </section>
  );
}
