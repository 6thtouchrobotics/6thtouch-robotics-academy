"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaMagnifyingGlass, 
  FaLocationDot, 
  FaCalendarDays, 
  FaTrophy, 
  FaCircleCheck, 
  FaXmark,
  FaArrowRight,
  FaAward,
  FaPeopleGroup,
  FaBuildingColumns
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

export default function EventsPage() {
  const [events] = useState<EventItem[]>(eventsData);
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>(eventsData);
  
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>(" ");
  
  // Modal details
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

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

  // Modal open lock scroll
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (activeEvent) {
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.style.paddingRight = "16px";
      } else {
        document.documentElement.style.overflowY = "";
        document.documentElement.style.paddingRight = "";
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.overflowY = "";
        document.documentElement.style.paddingRight = "";
      }
    };
  }, [activeEvent]);

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveEvent(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = ["All", "Competitions", "Workshops & Training", "Bootcamps"];

  return (
    <>
      {/* Dynamic SEO Title (rendered via browser/client wrapper if metadata is omitted or handled by layout, but Next.js lets you export static metadata in layouts or server-side pages. For client components, layout titles cover it, but we can set document.title if we want, though standard SEO metadata is in layout.) */}
      
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


          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="col-span-1">
                  <div className="rounded-2xl border border-gray-100 p-6 h-full shadow-sm bg-white transition-all hover:shadow-md duration-200 flex flex-col">
                    <img
                      src="/assets/images/6thtouch_events.jpeg"
                      alt={event.title}
                      className="w-full rounded-xl mb-4 h-[220px] object-cover"
                    />
                    <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">{event.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{event.description}</p>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6A00] hover:text-[#e05d00] no-underline transition-colors"
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
            {/* Background design accents */}
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

      {/* Detail Modal overlay */}
      {activeEvent && (
        <div
          onClick={() => setActiveEvent(null)}
          className="fixed inset-0 w-full h-full bg-black/80 z-[99999] flex items-center justify-center p-4 md:p-6"
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[850px] max-h-[90vh] bg-white rounded-3xl overflow-y-auto shadow-2xl relative flex flex-col md:flex-row text-left border border-gray-100 animate-modal-entry"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 bg-white/95 text-gray-800 border-none w-9 h-9 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-50 hover:bg-white"
              aria-label="Close details"
            >
              <FaXmark size={18} />
            </button>

            {/* Left Column: Image & Quick Details */}
            <div className="w-full md:w-[42%] shrink-0 relative bg-gray-100 min-h-[250px] md:min-h-full">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col justify-end p-6 text-white">
                <span className={`text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded bg-[#FF6A00] self-start mb-2.5 text-white ${
                  activeEvent.role === "Anchored" ? "bg-[#FF6A00]" : "bg-[#1E3A8A]"
                }`}>
                  {activeEvent.role === "Anchored" ? "Anchored by Us" : "Participated"}
                </span>
                
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">
                  {activeEvent.title}
                </h3>

                <div className="flex flex-col gap-1.5 text-xs opacity-90 font-medium">
                  <div className="flex items-center gap-2">
                    <FaCalendarDays className="text-[#FFCA00] text-xs shrink-0" />
                    <span>{activeEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-[#FFCA00] text-xs shrink-0" />
                    <span className="line-clamp-1">{activeEvent.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Long Description, Achievements & Highlights */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF6A00] mb-2.5 block">
                {activeEvent.category}
              </span>
              
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-4">
                {activeEvent.title}
              </h2>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                {activeEvent.longDescription}
              </p>

              {/* Achievements details */}
              {activeEvent.achievements && activeEvent.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <FaTrophy className="text-[#FFCA00]" />
                    Awards &amp; Recognition
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeEvent.achievements.map((ach, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-[#FFCA00]/10 text-[#a06f00] border border-[#FFCA00]/25 px-3 py-1 rounded-lg"
                      >
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights Checklist */}
              {activeEvent.highlights && activeEvent.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <FaCircleCheck className="text-green-500" />
                    Key Event Highlights
                  </h4>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2">
                    {activeEvent.highlights.map((high, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-500 leading-normal align-top">
                        <FaCircleCheck className="text-green-500 text-[10px] shrink-0 mt-0.5" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Registration Action Button */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <Link
                  href="/register"
                  onClick={() => setActiveEvent(null)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6A00] hover:bg-[#e05d00] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg no-underline cursor-pointer"
                >
                  Register &amp; Make Payment
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
