"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useLocationData } from "@/hooks/useLocationData";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";

export default function CodingRoboticsTutorForm() {
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
          Application for <br />
          Coding &amp; Robotics in Schools
        </h1>
        <p className="text-base text-gray-500">Please complete this form to request a tutor.</p>
        
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          action="https://formspree.io/f/mrewdoyp"
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

          <FormSelect
            label="Population of students"
            name="Population of students"
            required
          >
            <option value="">Population of students</option>
            <option value="0-100">0-100</option>
            <option value="100-200">100-200</option>
            <option value="200-300">200-300</option>
            <option value="300-400">300-400</option>
            <option value="500 above">500 above</option>
          </FormSelect>

          <FormSelect
            label="Type of service"
            name="Type of service"
            required
          >
            <option value="">Select type of tutoring service</option>
            <option value="Coding only">Coding only</option>
            <option value="Coding & Robotics">Coding &amp; Robotics</option>
          </FormSelect>

          <FormInput
            label="Address"
            name="Address"
            placeholder="Address"
            className="md:col-span-2"
            required
          />

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
              Submit request
              <FaArrowUpRightFromSquare className="text-xs" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
