import React, { useMemo, useRef, useState } from "react";
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

// Worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FlipPage = React.forwardRef(function FlipPage({ children }, ref) {
  return (
    <div
      ref={ref}
      className="h-full w-full bg-white shadow-sm overflow-hidden border border-slate-100 flex items-center justify-center"
    >
      {children}
    </div>
  );
});

export default function CreativeIndia() {
  const bookRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const file = useMemo(() => "/Creative India_DSIR.pdf", []);

  // Larger size to use almost full width - each page ~500px, total ~1000px when open
  const PAGE_WIDTH = 600;
  const PAGE_HEIGHT =  410// A4 ratio = 707px

  const flipPrev = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const flipNext = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const handleFlip = (e) => {
    setCurrentPage(e.data + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-300 px-4">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-slate-900 tracking-tight">
          Creative India 2025
        </h1>

        <div className="flex flex-col items-center">
          {/* Controls Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 w-full">
            {/* Left Group: Navigation */}
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-full shadow-sm border border-slate-200">
              <button
                onClick={flipPrev}
                className="group flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                title="Previous Page"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <span className="px-4 text-sm font-bold text-slate-700 min-w-[100px] text-center">
                {numPages ? `${currentPage} / ${numPages}` : "Loading..."}
              </span>

              <button
                onClick={flipNext}
                className="group flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                title="Next Page"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Right Group: Actions */}
            <div className="flex items-center gap-3">
              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                Open PDF
              </a>
              <a
                href={file}
                download="Creative_India_DSIR.pdf"
                className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          </div>

          {/* Flipbook Container - removed fixed height, let it size naturally */}
          <div className="w-90 flex justify-center">
            <div className="rounded-2xl border border-slate-200 w-ful bg-white p-4 shadow-xl ">
              <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={
                  <div className="flex items-center justify-center" style={{ width: PAGE_WIDTH * 2, height: PAGE_HEIGHT }}>
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                      <div className="text-sm font-medium text-slate-500">
                        Loading Document...
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
                  mobileScrollSupport={true}
                  className="shadow-lg"
                  drawShadow={true}
                  flippingTime={800}
                  usePortrait={false}
                  onFlip={handleFlip}
                >
                  {new Array(numPages).fill(0).map((_, idx) => (
                    <FlipPage key={idx}>
                      <div className="h-full w-full">
                        <PdfPage
                          pageNumber={idx + 1}
                          width={PAGE_WIDTH}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </div>
                    </FlipPage>
                  ))}
                </HTMLFlipBook>
              </Document>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
