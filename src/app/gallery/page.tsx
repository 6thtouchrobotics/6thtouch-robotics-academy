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
      <section className="w-full py-16 mt-20 mb-12 font-sans text-left">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-left mb-6">
            <h1 className="text-3xl font-bold mb-2 text-[#FF6A00]">Browse Gallery</h1>
            <p className="text-sm text-gray-500 mb-0">
              Explore highlights from our robotics, STEM, and learning experiences.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {pageImages.map((imgSrc, idx) => {
              return (
                <div key={startIdx + idx} className="col-span-1">
                  <div
                    className="rounded-2xl overflow-hidden gallery-card bg-white"
                    onClick={() => openModal(imgSrc)}
                    style={{
                      cursor: "pointer",
                      border: `1px solid ${imageBorderColors[startIdx + idx]}66`,
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Gallery item ${startIdx + idx + 1}`}
                      className="gallery-image w-full h-[260px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result count */}
          <p className="text-gray-500 text-xs mt-6 mb-0">
            Showing {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, allImages.length)} of{" "}
            {allImages.length} photos
          </p>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <nav aria-label="Gallery pagination" className="flex justify-center">
                <div className="flex items-center gap-2">
                  {/* Prev */}
                  <button
                    className="inline-flex items-center justify-center min-w-[38px] h-[38px] px-2.5 border-none rounded-lg text-sm transition-all duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 enabled:hover:-translate-y-0.5 enabled:hover:brightness-95"
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
                      className="inline-flex items-center justify-center min-w-[38px] h-[38px] px-2.5 border-none rounded-lg text-sm transition-all duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 enabled:hover:-translate-y-0.5 enabled:hover:brightness-95"
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
                    className="inline-flex items-center justify-center min-w-[38px] h-[38px] px-2.5 border-none rounded-lg text-sm transition-all duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 enabled:hover:-translate-y-0.5 enabled:hover:brightness-95"
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
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <section
          className="fixed inset-0 w-full h-full bg-black/80 z-[9999] flex flex-col items-center justify-center"
          onClick={closeModal}
        >
          <div className="absolute top-6 right-6 z-[10000]">
            <button
              className="bg-transparent border-none text-white text-3xl cursor-pointer hover:scale-110 transition-transform duration-150"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaXmark />
            </button>
          </div>
          <div
            className="max-w-[90%] max-h-[85%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Gallery preview"
              className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </section>
      )}
    </>
  );
}
