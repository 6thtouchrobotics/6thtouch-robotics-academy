"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { careerRoles } from "@/data/careerRoles";

export default function CareerRoleBrowser() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  const filteredRoles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return careerRoles.filter((role) => (
      (!normalizedQuery || role.title.toLowerCase().includes(normalizedQuery)) &&
      (!department || role.department === department) &&
      (!location || role.location === location)
    ));
  }, [department, location, query]);

  return (
    <>
      <form
        className="mt-10 flex flex-col gap-3 rounded-[18px] border border-[#d8d0c7] bg-[#f8f7f4] p-3 shadow-[0_2px_10px_rgba(31,50,88,0.04)] md:flex-row md:items-center md:justify-between"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          aria-label="Search role"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Role"
          className="min-w-0 flex-1 rounded-[12px] border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#36455c] outline-none placeholder:text-[#7a8392]"
        />
        <select
          aria-label="Select department"
          className="min-w-0 flex-1 appearance-none rounded-[12px] border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#36455c] outline-none"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="">Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="Education">Education</option>
        </select>
        <select
          aria-label="Select location"
          className="min-w-0 flex-1 appearance-none rounded-[12px] border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#36455c] outline-none"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          <option value="">Select Location</option>
          <option value="Lagos, Nigeria">Lagos, Nigeria</option>
          <option value="Remote, Nigeria">Remote, Nigeria</option>
        </select>
        <button
          className="rounded-[12px] bg-[#1c3a6d] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(28,58,109,0.18)] transition-colors hover:bg-[#132b52] md:min-w-[120px]"
          type="submit"
        >
          Search
        </button>
      </form>

      <section className="mt-12" aria-labelledby="available-roles">
        <div className="mb-4 flex items-center gap-3">
          <h2 id="available-roles" className="text-[1.05rem] font-bold text-[#1f3258] sm:text-[1.2rem]">
            Available Roles
          </h2>
          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-[#d9d0c3] bg-[#f7f4ef] px-2 text-[0.75rem] font-semibold text-[#1f3258]">
            {filteredRoles.length}
          </span>
        </div>

        <div className="rounded-[18px] border border-[#d8d0c7] bg-[#f8f7f4] p-1 shadow-[0_2px_10px_rgba(31,50,88,0.03)]">
          {filteredRoles.length ? filteredRoles.map((role) => (
            <Link
              key={role.id}
              href={`/careers/${role.id}`}
              className="flex w-full items-center justify-between gap-4 border-b border-[#eae3dc] px-4 py-4 text-left transition-colors last:border-b-0 hover:bg-white/80"
            >
              <span className="min-w-0 flex-1 text-[13px] font-medium text-[#1f3258]">
                {role.title}
              </span>
              <span className="flex min-w-0 flex-1 justify-center text-center text-[13px] text-[#4d5d74]">
                {role.department}
              </span>
              <span className="flex min-w-0 flex-1 items-center justify-end gap-2 text-[13px] text-[#4d5d74]">
                <span>{role.location}</span>
                <FaChevronRight aria-hidden="true" className="text-[10px] text-[#ff6a00]" />
              </span>
            </Link>
          )) : (
            <p className="px-4 py-6 text-center text-sm text-[#4d5d74]">
              No roles match those filters. Try changing your search.
            </p>
          )}
        </div>

        <p className="mt-5 text-center text-[12px] text-[#5f6f82]">
          Didn&apos;t find your exact role? Send us an open application and join our talent network.{" "}
          <Link href="/contact" className="font-semibold text-[#ff6a00]">Apply Here</Link>
        </p>
      </section>
    </>
  );
}
