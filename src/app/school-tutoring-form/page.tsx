"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useLocationData } from "@/hooks/useLocationData";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";

export default function SchoolTutoringForm() {
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
          Application for School Tutoring
        </h1>
        <p className="text-base text-gray-500">Please complete this form to request a tutor for your school.</p>
        
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          action="https://formspree.io/f/mdarjpwl"
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

          <FormInput
            label="Name of school/organization"
            name="Name of school/organization"
            placeholder="School or organization name"
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

          <FormSelect label="Class type" name="Class type" required>
            <option value="">Class type</option>
            <option value="Physical">Physical</option>
            <option value="Online">Online</option>
          </FormSelect>

          <FormSelect
            label="Number of students to be tutored"
            name="Number of students to be tutored"
            required
          >
            <option value="">Number of students</option>
            <option value="0-10">0-10</option>
            <option value="10-50">10-50</option>
            <option value="50-100">50-100</option>
            <option value="100-500">100-500</option>
            <option value="500 above">500 above</option>
          </FormSelect>

          <FormSelect
            label="Tutor Gender Preference"
            name="Tutor Gender Preference"
            required
          >
            <option value="">Tutor Gender Preference</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No preference">No preference</option>
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
