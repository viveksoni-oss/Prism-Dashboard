import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// --- Data ---
const stories = [
  {
    title: "Any-Time Medicine Dispenser",
    name: "Dr. Sumit Singh Phukela",
    designation: "CSIR-CSIO, Chandigarh",
    story:
      "Automated medicine dispensing machine enabling round-the-clock access to essential medicines and inventory control.",
    image: "/successImage/Sumit_Phukela_Medicine_Dispenser.jpg",
  },
  {
    title: "Smart Health Vest",
    name: "Mr. Amit Kumar",
    designation: "CSIR-CSIO, Chandigarh",
    story:
      "Wearable smart vest designed for monitoring physiological parameters to enhance health tracking and early diagnosis.",
    image: "/successImage/Amit_Kumar_Smart_Vest.jpg",
  },
  {
    title: "CD Space Mapping Drone",
    name: "Mr. Nikhil Upadhye",
    designation: "IIT Kanpur",
    story:
      "DGCA type-certified PPK-enabled aerial mapping drone for high-precision survey and mapping applications.",
    image: "/successImage/Nikhil_Upadhye_Drone.jpg",
  },
  {
    title: "Smart Assistive Device",
    name: "Mr. Kumar Kalika",
    designation: "IIT Kanpur",
    story:
      "Assistive device aimed at supporting differently-abled individuals through smart sensing and feedback mechanisms.",
    image: "/successImage/Kumar_Kalika_Assistive_Device.jpg",
  },
  {
    title: "Braille Math Slate",
    name: "Mr. Anupam Kumar Garg",
    designation: "IIT Kanpur",
    story:
      "Tactile Braille-based slate enabling visually impaired students to learn mathematics through hands-on interaction.",
    image: "/successImage/Anupam_Garg_Braille_Slate.jpg",
  },
  {
    title: "Tunable Photo Reactor",
    name: "Dr. Sanjeev Kumar Bhardwaj",
    designation: "CSIR-CSIO, Chandigarh",
    story:
      "Indigenous photo-reactor designed for multi-colour tunable light irradiation, enabling controlled photo-chemical reactions.",
    image: "/successImage/Sanjeev_Bhardwaj_Photo_Reactor.jpg",
  },
];

export default function SuccessStoryCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Responsive Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(stories.length / itemsPerSlide);

  // Autoplay Logic
  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [totalSlides]);

  return (
    <section className="relative w-full py-16 ">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* --- HEADING --- */}

        <SectionHeading heading="Success Stories"> </SectionHeading>
        {/* --- CAROUSEL CONTAINER --- */}
        <div
          className="relative group/carousel"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* SLIDER TRACK - FIXED OVERFLOW & PADDING */}
          <div className="overflow-hidden px-1 py-4">
            {" "}
            {/* Added padding to show shadows without cut-off */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex w-full flex-shrink-0 gap-6 px-1" // Gap handles spacing between cards
                >
                  {stories
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((item, i) => (
                      <div
                        key={i}
                        // Dynamic Width based on itemsPerSlide to fix layout
                        className={`group relative h-[500px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200
                          ${itemsPerSlide === 1 ? "w-full" : ""}
                          ${itemsPerSlide === 2 ? "w-[calc(50%-12px)]" : ""}
                          ${itemsPerSlide === 3 ? "w-[calc(33.333%-16px)]" : ""}
                        `}
                      >
                        {/* IMAGE SECTION (Top 55%) */}
                        <div className="relative h-[55%] w-full overflow-hidden bg-slate-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />

                          {/* Subtle gradient at bottom of image */}
                          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

                          {/* Designation Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 backdrop-blur-sm shadow-md border border-slate-200">
                              <Award className="w-3 h-3 text-blue-600" />
                              {item.designation}
                            </span>
                          </div>
                        </div>

                        {/* CONTENT SECTION (Bottom 45%) */}
                        <div className="relative h-[45%] flex flex-col justify-between p-6 bg-white">
                          <div>
                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors line-clamp-1">
                              {item.title}
                            </h3>

                            {/* Innovator Name */}
                            <p className="text-blue-600 font-semibold mb-3 text-sm">
                              {item.name}
                            </p>

                            {/* Separator Line */}
                            <div className="h-0.5 w-12 bg-blue-500 mb-3 transition-all duration-300 group-hover:w-20" />

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                              {item.story}
                            </p>
                          </div>

                          {/* Bottom Accent */}
                          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                              Success Story
                            </span>
                            <div className="flex gap-1">
                              <div className="h-1 w-8 bg-blue-500 rounded-full" />
                              <div className="h-1 w-4 bg-blue-300 rounded-full" />
                              <div className="h-1 w-2 bg-blue-200 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS (Floating) */}
          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
            }
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl text-slate-800 hover:text-blue-600 hover:scale-110 transition-all z-20 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % totalSlides)}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-xl text-slate-800 hover:text-blue-600 hover:scale-110 transition-all z-20 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* DOTS */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-blue-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
