import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// --- Data Mapped to Specific Images in /public/success_stories/ ---
const stories = [
  {
    title: "Fire Fighter Drone",
    name: "Quazi Tarique A Ally",
    designation: "IIT Kharagpur",
    story: "Reduces fire response time in high-rise buildings.",
    // Matches file: Bebeto Ally.jpg
    image: "/success_stories/Bebeto Ally.jpg",
  },
  {
    title: "Malnutrition Detection",
    name: "Dr. Komal Shah",
    designation: "GSBTM Gujarat",
    story:
      "CASAM – Malnutrition Detection Solution via community health workers.",
    // Matches file: Dr. Komal Shah Prototype.png
    image: "/success_stories/Dr. Komal Shah Prototype.png",
  },
  {
    title: "EV Motor Innovation",
    name: "Sumeet Gattewar",
    designation: "IIT Kharagpur",
    story:
      "Switched Reluctance Motor boosts EV efficiency and supports self-reliant manufacturing.",
    // Matches file: Sumeet Gattewar prototype.png
    image: "/success_stories/Sumeet Gattewar prototype.png",
  },
  {
    title: "Smart Energy Monitor",
    name: "Ms. Devalina Das",
    designation: "CSIR-CGCRI",
    story:
      "Automatic Energy Monitoring Device that monitors appliance-wise energy usage via SMS.",
    // Matches file: Devlina Das prototype.png
    image: "/success_stories/Devlina Das prototype.png",
  },
  {
    title: "Livestock Health Device",
    name: "Dr. Debeshi Dutta",
    designation: "CSIR-CGCRI",
    story:
      "Wearable device for Estrous & FMD detection in cattle for early disease detection.",
    // Matches file: Dr. Debeshi Dutta Biswas prototype (1).png
    image: "/success_stories/Dr. Debeshi Dutta Biswas prototype (1).png",
  },
];

export default function SuccessStoryCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

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
    <section className="relative w-full py-20 pt-5 bg-slate-50/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          className="relative group/carousel"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* SLIDER TRACK */}
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="grid w-full flex-shrink-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {stories
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500"
                      >
                        {/* 1. FULL BACKGROUND IMAGE */}
                        <div className="absolute inset-0 z-0 bg-slate-800">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            onError={(e) => {
                              e.target.style.display = "none"; // Hide broken images if path is wrong
                            }}
                          />

                          {/* Gradient Overlays for Readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent opacity-60" />
                        </div>

                        {/* 2. CONTENT OVERLAY */}
                        <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                          {/* Top Badge (Designation) */}
                          <div className="absolute top-6 left-6">
                            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10 shadow-sm">
                              {item.designation}
                            </span>
                          </div>

                          {/* Text Content */}
                          <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                            {/* Project Title */}
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                              {item.title}
                            </h3>

                            {/* Innovator Name */}
                            <p className="text-blue-300 font-medium mb-4 text-sm uppercase tracking-wider">
                              {item.name}
                            </p>

                            {/* Separator Line */}
                            <div className="h-0.5 w-12 bg-blue-500 mb-4 transition-all duration-300 group-hover:w-20" />

                            {/* Description */}
                            <p className="text-slate-200 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                              {item.story}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ))}
            </motion.div>
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
