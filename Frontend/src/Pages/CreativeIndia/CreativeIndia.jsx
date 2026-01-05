import React, { useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { Document, Page as PdfPage, pdfjs } from "react-pdf";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
} from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { GradientBackground } from "@/components/gradient-background";
import BlueInaugurationAnimation from "@/components/BlueInaugurationAnimation";

// Worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FlipPage = React.forwardRef(function FlipPage({ children }, ref) {
  return (
    <div
      ref={ref}
      className="h-full w-full bg-white shadow-lg overflow-hidden border border-slate-200 flex items-center justify-center"
    >
      {children}
    </div>
  );
});

export default function CreativeIndia() {
  const bookRef = useRef(null);
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showInauguration, setShowInauguration] = useState(false);
  const [loadedPages, setLoadedPages] = useState(new Set([1, 2, 3]));
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 700, height: 495 });

  const file = useMemo(() => "/Creative India_DSIR.pdf", []);

  const ASPECT_RATIO = 700 / 495; // ~1.414 (A4 ratio)
  const CONTAINER_ANIMATION_TIME = 400;
  const FLIP_TIME = 1000;

  // Calculate responsive dimensions
  useEffect(() => {
    const calculateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let pageWidth, pageHeight;

      if (width >= 1536) {
        // 2xl screens - full size
        pageWidth = 700;
        pageHeight = 495;
      } else if (width >= 1280) {
        // xl screens
        pageWidth = 600;
        pageHeight = Math.round(600 / ASPECT_RATIO);
      } else if (width >= 1024) {
        // lg screens
        pageWidth = 500;
        pageHeight = Math.round(500 / ASPECT_RATIO);
      } else if (width >= 768) {
        // md screens (tablets)
        pageWidth = Math.min(width - 100, 450);
        pageHeight = Math.round(Math.min(width - 100, 450) / ASPECT_RATIO);
      } else {
        // sm screens (mobile)
        pageWidth = Math.min(width - 60, 350);
        pageHeight = Math.round(Math.min(width - 60, 350) / ASPECT_RATIO);
      }

      setDimensions({ width: pageWidth, height: pageHeight });
    };

    calculateDimensions();

    const handleResize = () => {
      calculateDimensions();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const PAGE_WIDTH = dimensions.width;
  const PAGE_HEIGHT = dimensions.height;

  // Auto-scroll 105px on mount
  useEffect(() => {
    window.scrollTo({
      top: 105,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const isInauguration =
      searchParams.get("launch") === "true" ||
      searchParams.get("inauguration") === "true";

    if (isInauguration) {
      setShowInauguration(true);
    }
  }, [searchParams]);

  // Prevent scroll when clicking on flipbook
  useEffect(() => {
    const preventScrollOnClick = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        const target = e.target;
        if (target.tagName !== "A" && target.tagName !== "BUTTON") {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("mousedown", preventScrollOnClick);

    return () => {
      document.removeEventListener("mousedown", preventScrollOnClick);
    };
  }, []);

  const handleInaugurationComplete = () => {
    setShowInauguration(false);
    searchParams.delete("launch");
    searchParams.delete("inauguration");
    setSearchParams(searchParams);
  };

  const flipPrev = () => {
    if (isAnimating) return;
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const flipNext = () => {
    if (isAnimating) return;

    if (currentPage === 1) {
      setIsAnimating(true);
      setIsBookOpen(true);

      setTimeout(() => {
        bookRef.current?.pageFlip()?.flipNext();
        setTimeout(() => {
          setIsAnimating(false);
        }, FLIP_TIME);
      }, CONTAINER_ANIMATION_TIME);
    } else {
      bookRef.current?.pageFlip()?.flipNext();
    }
  };

  const handleFlip = (e) => {
    const newPage = e.data + 1;
    setCurrentPage(newPage);

    if (newPage === 1) {
      setIsBookOpen(false);
    } else if (newPage > 1 && !isBookOpen) {
      setIsBookOpen(true);
    }

    const pagesToLoad = new Set(loadedPages);
    for (let i = newPage; i <= Math.min(newPage + 4, numPages); i++) {
      pagesToLoad.add(i);
    }
    setLoadedPages(pagesToLoad);
  };

  const shouldRenderPage = (pageNum) => {
    return loadedPages.has(pageNum);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showInauguration && (
          <BlueInaugurationAnimation onComplete={handleInaugurationComplete} />
        )}
      </AnimatePresence>

      <div className="relative">
        <GradientBackground />
        <div className="min-h-screen bg-slate-50 py-6 sm:py-12">
          <div className="mx-auto relative z-10 px-4">
            {/* Heading with decorative line */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-8 text-center"
            >
              <h1 className="text-3xl sm:text-4xl  font-extrabold text-slate-900 tracking-tight">
                Creative India 2025
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mx-auto mt-3 sm:mt-4 h-1 -mb-3 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
              />
            </motion.div>

            <div className="flex flex-col items-center relative">
              {/* Fixed Left Navigation Button - Visible only on 2xl+ screens */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={flipPrev}
                disabled={currentPage === 1 || isAnimating}
                className="hidden 2xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 items-center justify-center h-20 w-20 rounded-full bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-2xl border-2 border-slate-200 hover:border-blue-400 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
                title="Previous Page"
              >
                <ChevronLeft className="h-10 w-10" />
              </motion.button>

              {/* Fixed Right Navigation Button - Visible only on 2xl+ screens */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={flipNext}
                disabled={currentPage >= numPages || isAnimating}
                className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 items-center justify-center h-20 w-20 rounded-full bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-2xl border-2 border-slate-200 hover:border-blue-400 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
                title="Next Page"
              >
                <ChevronRight className="h-10 w-10" />
              </motion.button>

              {/* Flipbook Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.5 }}
                className="w-full flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden"
                style={{ minHeight: PAGE_HEIGHT + 40 }}
              >
                {/* Flipbook with scale effect */}
                <motion.div
                  ref={containerRef}
                  animate={{
                    x: isBookOpen ? 0 : -PAGE_WIDTH / 2,
                  }}
                  transition={{
                    duration: CONTAINER_ANIMATION_TIME / 1000,
                    ease: "easeInOut",
                  }}
                  className="touch-none select-none"
                >
                  <Document
                    file={file}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={
                      <div
                        className="flex items-center justify-center bg-white rounded-xl shadow-2xl"
                        style={{
                          width: PAGE_WIDTH,
                          height: PAGE_HEIGHT,
                        }}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-3 border-blue-600 border-t-transparent"></div>
                          <div className="text-sm sm:text-base font-medium text-slate-500">
                            Loading Creative India Brochure...
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <HTMLFlipBook
                      ref={bookRef}
                      width={PAGE_WIDTH}
                      height={PAGE_HEIGHT}
                      size="fixed"
                      showCover={true}
                      mobileScrollSupport={false}
                      className=" "
                      drawShadow={true}
                      flippingTime={FLIP_TIME}
                      usePortrait={false}
                      onFlip={handleFlip}
                      startPage={0}
                      autoSize={false}
                      clickEventForward={true}
                    >
                      {new Array(numPages).fill(0).map((_, idx) => (
                        <FlipPage key={`page-${idx + 1}`}>
                          {shouldRenderPage(idx + 1) ? (
                            <div className="h-full w-full relative overflow-hidden border border-amber-700/50 ">
                              <PdfPage
                                pageNumber={idx + 1}
                                height={PAGE_HEIGHT}
                                width={PAGE_WIDTH}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                loading={
                                  <div className="flex h-full items-center justify-center">
                                    <div className="h-5 w-5 sm:h-6 sm:w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
                                  </div>
                                }
                              />
                            </div>
                          ) : (
                            <div className="flex h-full items-center justify-center bg-slate-50">
                              <p className="text-slate-400 text-xs sm:text-sm">
                                Loading page...
                              </p>
                            </div>
                          )}
                        </FlipPage>
                      ))}
                    </HTMLFlipBook>
                  </Document>
                </motion.div>
              </motion.div>

              {/* Control bar - Navigation visible below 2xl screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full px-4"
              >
                {/* Navigation - Visible on screens below 2xl */}
                <div className="flex 2xl:hidden items-center gap-2 sm:gap-3 bg-white p-1.5 rounded-full shadow-md border border-slate-200">
                  <button
                    onClick={flipPrev}
                    disabled={currentPage === 1 || isAnimating}
                    className="group flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Previous Page"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-x-0.5" />
                  </button>

                  <span className="px-3 sm:px-5 text-xs sm:text-sm font-bold text-slate-700 min-w-[90px] sm:min-w-[120px] text-center">
                    {numPages
                      ? `Page ${currentPage} / ${numPages}`
                      : "Loading..."}
                  </span>

                  <button
                    onClick={flipNext}
                    disabled={currentPage >= numPages || isAnimating}
                    className="group flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Next Page"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                {/* Page counter - Visible only on 2xl+ screens */}
                <div className="hidden 2xl:flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
                  <span className="text-sm font-bold text-slate-700">
                    {numPages
                      ? `Page ${currentPage} / ${numPages}`
                      : "Loading..."}
                  </span>
                </div>

                {/* Download buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={file}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700 shadow-md border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">Open PDF</span>
                    <span className="xs:hidden">Open</span>
                  </a>
                  <a
                    href={file}
                    download="Creative_India_DSIR.pdf"
                    className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    Download
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
