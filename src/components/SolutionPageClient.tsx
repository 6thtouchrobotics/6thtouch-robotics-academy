"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface Stat {
  target: number;
  label: string;
}

interface ClientStory {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface SolutionData {
  title: string;
  description: string;
  formUrl: string;
  heroImage: string;
  stats: Stat[];
}

interface SolutionPageClientProps {
  data: SolutionData;
  clients: ClientStory[];
}

const INITIAL_VISIBLE = 3;

export default function SolutionPageClient({ data, clients }: SolutionPageClientProps) {
  const [val0, setVal0] = useState(0);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const duration = 1000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const target0 = data.stats[0]?.target || 0;
    const target1 = data.stats[1]?.target || 0;
    const target2 = data.stats[2]?.target || 0;

    const interval = setInterval(() => {
      step++;
      setVal0(Math.floor((target0 / steps) * step));
      setVal1(Math.floor((target1 / steps) * step));
      setVal2(Math.floor((target2 / steps) * step));

      if (step >= steps) {
        clearInterval(interval);
        setVal0(target0);
        setVal1(target1);
        setVal2(target2);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [data]);

  const visibleClients = showAll ? clients : clients.slice(0, INITIAL_VISIBLE);

  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full py-16 mt-20 bg-gray-50/50 font-sans text-left">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="col-span-1">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FF6A00] leading-tight">{data.title}</h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">{data.description}</p>
              <Link
                href={data.formUrl}
                className="inline-flex items-center justify-center bg-[#1E3A8A] text-white py-3 px-6 rounded-xl hover:bg-[#152d6b] font-semibold text-sm transition-all duration-200 no-underline cursor-pointer"
              >
                Get started
                <FaArrowUpRightFromSquare className="ml-2 text-xs" />
              </Link>
            </div>
            <div className="col-span-1">
              <img
                src={data.heroImage}
                alt={`${data.title} Hero`}
                className="w-full rounded-2xl shadow-md object-cover max-h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="w-full bg-[#1E3A8A] text-white py-16 relative overflow-hidden font-sans">
        {/* Watermark grid matching the style of the footer grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/assets/images/logo.svg')",
            backgroundSize: "36px 36px",
            backgroundRepeat: "repeat",
            opacity: 0.04,
            filter: "grayscale(100%) brightness(300%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="col-span-1">
              <h4 className="text-4xl font-extrabold text-[#FFCA00] mb-2">{val0}+</h4>
              <p className="text-sm md:text-base text-blue-155 font-medium">{data.stats[0]?.label}</p>
            </div>
            <div className="col-span-1">
              <h4 className="text-4xl font-extrabold text-[#FFCA00] mb-2">{val1}+</h4>
              <p className="text-sm md:text-base text-blue-155 font-medium">{data.stats[1]?.label}</p>
            </div>
            <div className="col-span-1">
              <h4 className="text-4xl font-extrabold text-[#FFCA00] mb-2">{val2}+</h4>
              <p className="text-sm md:text-base text-blue-155 font-medium">{data.stats[2]?.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Clients ── */}
      <section className="w-full py-16 mb-12 font-sans text-left">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-xs uppercase text-gray-500 font-semibold mb-1.5 tracking-wider">
              Success Stories
            </p>
            <h2 className="text-3xl font-bold mb-2 text-[#FF6A00]">Our Clients</h2>
            <p className="text-sm text-gray-500 max-w-[480px] leading-relaxed">
              Meet some of the learners whose lives have been transformed through
              our personalised home tutoring programme.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleClients.map((client) => (
              <div className="col-span-1" key={client.id}>
                <div className="rounded-2xl border border-gray-100 p-6 h-full shadow-sm bg-white transition-all hover:shadow-md duration-200">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full rounded-xl mb-4 h-[220px] object-cover"
                  />
                  <h3 className="text-lg font-bold mb-2 text-[#1E3A8A]">{client.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-0">{client.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See more / See less toggle */}
          {clients.length > INITIAL_VISIBLE && (
            <div className="text-center mt-12">
              <button
                className="inline-flex items-center gap-1.5 py-2.5 px-7 rounded-full border-2 border-[#FF6A00] bg-transparent text-[#FF6A00] font-semibold text-sm cursor-pointer transition-all duration-200 hover:bg-[#FF6A00] hover:text-white hover:shadow-[0_4px_16px_rgba(255,106,0,0.28)] focus:outline-none"
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll ? (
                  <>See less <FaChevronUp className="ml-1 text-[11px]" /></>
                ) : (
                  <>See all {clients.length} clients <FaChevronDown className="ml-1 text-[11px]" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
