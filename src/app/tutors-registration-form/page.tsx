"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useLocationData } from "@/hooks/useLocationData";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";

export default function TutorsRegistrationForm() {
  const {
    countriesData,
    cities,
    selectedCountry,
    loading,
    handleCountryChange,
  } = useLocationData();

  return (
    <section className="w-full py-16 mt-20 mb-12 font-sans text-left">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-bold mb-2 text-[#FF6A00] leading-tight">
          Tutors Registration Form
        </h1>
        <p className="text-base text-gray-500">Please complete this form to register as a tutor.</p>
        
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          action="https://formspree.io/f/maqgklpp"
          method="post"
        >
          <FormInput
            label="First name"
            name="First name"
            placeholder="First name"
            required
          />
          
          <FormInput
            label="Last name"
            name="Last name"
            placeholder="Last name"
            required
          />
          
          <FormInput
            label="Email"
            name="Email"
            type="email"
            placeholder="Email"
            required
          />
          
          <FormInput
            label="Phone Number (Whatsapp)"
            name="Phone Number"
            type="tel"
            placeholder="Phone Number"
            required
          />

          <FormSelect
            label="Country"
            name="Country"
            value={selectedCountry}
            onChange={handleCountryChange}
            disabled={loading}
            required
          >
            <option value="">Country</option>
            {countriesData.map((c, idx) => (
              <option key={idx} value={c.country}>
                {c.country}
              </option>
            ))}
          </FormSelect>

          <FormSelect
            label="City"
            name="City"
            disabled={loading || !selectedCountry}
            required
          >
            <option value="">City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </FormSelect>

          <FormInput
            label="Address"
            name="Address"
            placeholder="Address"
            className="md:col-span-2"
            required
          />

          <FormSelect label="Gender" name="Gender" required>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </FormSelect>

          <FormSelect
            label="Educational Qualifications"
            name="Educational Qualifications"
            required
          >
            <option value="">What's your Educational Qualification?</option>
            <option value="Bsc/Hnd/Ond">Bsc/Hnd/Ond</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Still in school">Still in school</option>
            <option value="No qualification at all">No qualification at all</option>
          </FormSelect>

          <FormSelect label="Tutor Type" name="Tutor Type" required>
            <option value="">What type of Tutor are you?</option>
            <option value="Subject tutor">Subject tutor</option>
            <option value="Coding/Robotics tutor">Coding/Robotics tutor</option>
          </FormSelect>

          <FormSelect
            label="Online Tutoring Experience"
            name="Already have tutoring experience"
            required
          >
            <option value="">Do you have online tutoring experience?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </FormSelect>

          <FormInput
            label="Important information"
            name="Important information"
            placeholder="Important information"
            isTextArea={true}
            className="md:col-span-2"
            required
          />

          <div className="md:col-span-2 mt-2">
            <button
              className="w-full bg-[#1E3A8A] text-white py-3 px-6 rounded-xl hover:bg-[#152d6b] flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 cursor-pointer"
              type="submit"
            >
              Submit registration
              <FaArrowUpRightFromSquare className="text-xs" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
