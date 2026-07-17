"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaMagnifyingGlass, 
  FaArrowRight, 
  FaXmark 
} from "react-icons/fa6";
import eventsData from "@/data/eventsData.json";

interface EventItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  role: string;
  date: string;
  location: string;
  image: string;
  achievements?: string[];
  highlights?: string[];
}

export default function EventsClient() {
  const [events] = useState<EventItem[]>(eventsData);
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>(eventsData);
  
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>(" ");

  // Apply filters
  useEffect(() => {
    let result = events;

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter(e => e.category === selectedCategory);
    }

    // Filter by Role
    if (selectedRole !== "All") {
      result = result.filter(e => e.role === selectedRole);
    }

    // Filter by Search Query
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      result = result.filter(
        e => 
          e.title.toLowerCase().includes(query) ||
          e.description.toLowerCase().includes(query) ||
          e.location.toLowerCase().includes(query) ||
          (e.highlights && e.highlights.some(h => h.toLowerCase().includes(query))) ||
          (e.achievements && e.achievements.some(a => a.toLowerCase().includes(query)))
      );
    }

    setFilteredEvents(result);
  }, [selectedCategory, selectedRole, searchQuery, events]);

  const categories = ["All", "Competitions", "Workshops & Training", "Bootcamps"];

  return (
    <div className="w-full mt-20 py-12 font-sans bg-[#F4F6F9]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Introduction */}
        <div className="text-left mb-10">
          <p className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-2">
            Our Journey in Action
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#FF6A00] leading-tight mb-3">
            Robotics Exhibitions, Tournaments &amp; Trainings
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
            Explore the robotics tournaments, national competitions, educational bootcamps, 
            and institutional trainings anchored or participated in by 6thtouch Robotics Academy.
          </p>
        </div>

        {events.length > 6 && (
          /* Filtering Controls */
          <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm mb-8">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-1.5 order-2 lg:order-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#1E3A8A] text-white shadow-sm"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Role Select and Search */}
              <div className="flex flex-col sm:flex-row gap-3 order-1 lg:order-2 shrink-0">
                {/* Search Box */}
                <div className="relative flex-1 sm:w-64">
                  <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery === " " ? "" : searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#FF6A00] transition-colors"
                  />
                  {searchQuery.trim() && (
                    <button
                      onClick={() => setSearchQuery(" ")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 border-none bg-transparent cursor-pointer"
                    >
                      <FaXmark size={12} />
                    </button>
                  )}
                </div>

                {/* Role Dropdown */}
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-3.5 py-2 border border-gray-200 rounded-lg text-xs font-medium bg-white focus:outline-none focus:border-[#FF6A00] cursor-pointer"
                >
                  <option value="All">All Roles</option>
                  <option value="Anchored">Anchored by Us</option>
                  <option value="Participated">Participated</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="col-span-1">
                <div className="rounded-2xl border border-gray-100 p-6 h-full shadow-sm bg-white transition-all hover:shadow-md duration-200 flex flex-col text-left">
                  <img
                    src="/assets/images/6thtouch_events.jpeg"
                    alt={event.title}
                    className="w-full rounded-xl mb-4 h-[220px] object-cover"
                  />
                  <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">{event.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{event.description}</p>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6A00] hover:text-[#e05d00] no-underline transition-colors mt-auto"
                  >
                    Learn more <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl py-16 px-6 text-center border border-gray-100 shadow-sm max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center mx-auto mb-4">
              <FaMagnifyingGlass size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">No matching events found</h3>
            <p className="text-xs text-gray-500 mb-6">
              We couldn't find any events matching your search or filters. Try adjusting your selections.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedRole("All");
                setSearchQuery(" ");
              }}
              className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold rounded-xl shadow-sm transition-colors border-none cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Join / Collaborate CTA Section */}
        <div className="mt-20 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#FF6A00]/5 rounded-l-full hidden lg:block" />
          <div className="p-8 md:p-12 lg:p-16 text-left relative z-10 max-w-3xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF6A00] mb-2.5 block">
              Let's Partner Up
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A] tracking-tight leading-tight mb-4">
              Want 6thtouch Robotics at your school, center, or next competition?
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
              We setup state-of-the-art STEM laboratories, consult for schools, organize robotics 
              tournaments, and train youth teams across Nigeria. Partner with us to elevate technology 
              and engineering excellence in your community.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05d00] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg no-underline cursor-pointer"
              >
                Contact Event Team
                <FaArrowRight size={12} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold px-6 py-3 rounded-xl transition-all no-underline cursor-pointer"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
