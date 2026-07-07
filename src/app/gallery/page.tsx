"use client";

import { useState } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ITEMS_PER_PAGE = 12;

const allImages = [
  "/assets/images/gallery_image_4.jpg",
  "/assets/images/gallery_image_3.jpg",
  "/assets/images/gallery_image_2.jpg",
  "/assets/images/gallery_image_1.jpg",
  "/assets/images/gallery_image_8.jpg",
  "/assets/images/gallery_image_9.JPG",
  "/assets/images/gallery_image_10.jpg",
  "/assets/images/gallery_image_11.jpg",
  "/assets/images/gallery_image_7.JPG",
  "/assets/images/gallery_image_5.jpg",
  "/assets/images/gallery_image_6.JPG",
];

const RAINBOW_COLORS = [
  "#FF0000", // red
  "#FF7700", // orange
  "#FFDD00", // yellow
  "#00BB44", // green
  "#0066FF", // blue
  "#4B0082", // indigo
  "#9400D3", // violet
];

// Assign each image a random rainbow color once (stable across renders)
const imageBorderColors = allImages.map(
  () => RAINBOW_COLORS[Math.floor(Math.random() * RAINBOW_COLORS.length)]
);

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const totalPages = Math.ceil(allImages.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageImages = allImages.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    if (typeof document !== "undefined") {
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.style.paddingRight = "16px";
    }
  };

  const closeModal = () => {
    setModalImage(null);
    if (typeof document !== "undefined") {
      document.documentElement.style.overflowY = "";
      document.documentElement.style.paddingRight = "";
    }
  };

  return (
    <>
      <section className="container-fluid py-5 mt-5">
        <div className="container">
          <div className="text-start mb-4">
            <h1 className="h2 fw-bold mb-2" style={{ color: "#FF6A00" }}>Browse Gallery</h1>
            <p className="text-sm text-muted mb-0">
              Explore highlights from our robotics, STEM, and learning experiences.
            </p>
          </div>

          {/* Grid */}
          <div className="row mt-2">
            {pageImages.map((imgSrc, idx) => {
              return (
                <div className="col-12 col-sm-6 col-lg-3 mt-3" key={startIdx + idx}>
                  <div
                    className="rounded-3 overflow-hidden gallery-card"
                    onClick={() => openModal(imgSrc)}
                    style={{
                      cursor: "pointer",
                      border: `1px solid ${imageBorderColors[startIdx + idx]}66`,
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Gallery item ${startIdx + idx + 1}`}
                      className="gallery-image img-fluid w-100"
                      style={{ height: "260px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result count */}
          <p className="text-muted small mt-4 mb-0">
            Showing {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, allImages.length)} of{" "}
            {allImages.length} photos
          </p>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="container mt-4">
            <nav aria-label="Gallery pagination" className="d-flex justify-content-center">
              <div className="d-flex align-items-center gap-2">
                {/* Prev */}
                <button
                  className="gallery-page-btn"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  style={{
                    backgroundColor: currentPage === 1 ? "#f3f4f6" : "#1E3A8A",
                    color: currentPage === 1 ? "#9ca3af" : "#ffffff",
                  }}
                >
                  <FaChevronLeft size={12} />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className="gallery-page-btn"
                    onClick={() => goToPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    style={{
                      backgroundColor: currentPage === page ? "#FFCA00" : "#f3f4f6",
                      color: currentPage === page ? "#111827" : "#374151",
                      fontWeight: currentPage === page ? 700 : 500,
                      boxShadow:
                        currentPage === page
                          ? "0 2px 8px rgba(255,202,0,0.40)"
                          : "none",
                    }}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  className="gallery-page-btn"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  style={{
                    backgroundColor: currentPage === totalPages ? "#f3f4f6" : "#1E3A8A",
                    color: currentPage === totalPages ? "#9ca3af" : "#ffffff",
                  }}
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </section>

      {/* Modal */}
      {modalImage && (
        <section
          className="container-fluid gallery-modal active"
          onClick={closeModal}
        >
          <div className="close">
            <button className="close-btn" onClick={closeModal} aria-label="Close modal">
              <FaXmark />
            </button>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Gallery preview" className="img-fluid modal-image" />
          </div>
        </section>
      )}

      <style>{`
        .gallery-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .gallery-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
        }
        .gallery-page-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          height: 38px;
          padding: 0 10px;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.15s ease;
        }
        .gallery-page-btn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .gallery-page-btn:not(:disabled):hover {
          transform: translateY(-1px);
          filter: brightness(0.93);
        }
      `}</style>
    </>
  );
}
