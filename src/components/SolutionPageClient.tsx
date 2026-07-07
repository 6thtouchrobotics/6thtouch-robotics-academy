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
      <section className="container-fluid home-tutoring py-5 mt-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 mt-2">
              <h1 className="h2 fw-bold mb-2" style={{ color: "#FF6A00" }}>{data.title}</h1>
              <p className="lead">{data.description}</p>
              <Link href={data.formUrl} className="btn btn-primary">
                Get started
                <FaArrowUpRightFromSquare className="ms-2" />
              </Link>
            </div>
            <div className="col-md-6 mt-2">
              <img
                src={data.heroImage}
                alt={`${data.title} Hero`}
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="container-fluid bg-[#1E3A8A] text-white py-5 position-relative overflow-hidden">
        {/* Watermark grid matching the style of the footer grid */}
        <div
          aria-hidden="true"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/assets/images/logo.svg')",
            backgroundSize: "36px 36px",
            backgroundRepeat: "repeat",
            opacity: 0.04,
            filter: "grayscale(100%) brightness(300%)",
            pointerEvents: "none",
          }}
        />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row text-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <h4>{val0}+</h4>
              <p className="lead text-md">{data.stats[0]?.label}</p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h4>{val1}+</h4>
              <p className="lead text-md">{data.stats[1]?.label}</p>
            </div>
            <div className="col-md-4">
              <h4>{val2}+</h4>
              <p className="lead text-md">{data.stats[2]?.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Clients ── */}
      <section className="container-fluid py-5">
        <div className="container">
          {/* Heading */}
          <div className="mb-5">
            <p className="small text-uppercase text-muted fw-semibold mb-1" style={{ letterSpacing: "0.08em" }}>
              Success Stories
            </p>
            <h2 className="h3 fw-bold mb-2" style={{ color: "#FF6A00" }}>Our Clients</h2>
            <p className="text-muted" style={{ maxWidth: 480 }}>
              Meet some of the learners whose lives have been transformed through
              our personalised home tutoring programme.
            </p>
          </div>

          {/* Cards grid */}
          <div className="row g-4">
            {visibleClients.map((client) => (
              <div className="col-12 col-sm-6 col-lg-4" key={client.id}>
                <div className="rounded-4 border border-light-subtle p-4 h-100 shadow-sm bg-white">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="img-fluid rounded-3 mb-3"
                    style={{ height: "220px", width: "100%", objectFit: "cover" }}
                  />
                  <h3 className="h5 fw-bold mb-2" style={{ color: "#1E3A8A" }}>{client.name}</h3>
                  <p className="small text-muted mb-0">{client.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See more / See less toggle */}
          {clients.length > INITIAL_VISIBLE && (
            <div className="text-center mt-5">
              <button
                className="btn-see-more"
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll ? (
                  <>See less <FaChevronUp className="ms-1" size={12} /></>
                ) : (
                  <>See all {clients.length} clients <FaChevronDown className="ms-1" size={12} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        /* ── See more button ── */
        .btn-see-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 28px;
          border-radius: 999px;
          border: 2px solid #FF6A00;
          background: transparent;
          color: #FF6A00;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
        }
        .btn-see-more:hover {
          background: #FF6A00;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(255,106,0,0.28);
        }
      `}</style>
    </>
  );
}
