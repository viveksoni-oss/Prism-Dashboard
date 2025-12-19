import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    name: "Rahul Sharma",
    designation: "Founder, TechNova",
    story:
      "With PRISM's mentorship and funding, we transformed our idea into a scalable product that now serves thousands of users across India.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Anita Verma",
    designation: "CEO, InnovateX",
    story:
      "The ecosystem support helped us bridge the gap between research and real-world deployment, accelerating our growth journey.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Suresh Patel",
    designation: "Director, MSME Solutions",
    story:
      "Digital transformation through PRISM enabled us to modernize operations and expand into new markets confidently.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Neha Gupta",
    designation: "Co-founder, SmartLabs",
    story:
      "From idea validation to go-to-market, the guidance we received played a crucial role in our success.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Amit Singh",
    designation: "CTO, FutureWorks",
    story:
      "PRISM’s innovation support helped us adopt cutting-edge technologies and build future-ready solutions.",
    image: "https://via.placeholder.com/120",
  },
  {
    name: "Pooja Nair",
    designation: "Founder, ScaleUp Hub",
    story:
      "The collaborative environment and expert mentoring accelerated our journey from prototype to production.",
    image: "https://via.placeholder.com/120",
  },
];

const ITEMS_PER_SLIDE = 3;

export default function SuccessStoryCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const totalSlides = Math.ceil(stories.length / ITEMS_PER_SLIDE);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [totalSlides]);

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="relative w-full py-15 ">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-semibold text-white">
          Success Stories
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Slider */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full flex-shrink-0 grid-cols-1 gap-6 px-4 md:grid-cols-3"
              >
                {stories
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((item, i) => (
                    <div
                      key={i}
                      className="rounded-3xl border border-white/20 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white shadow-xl"
                    >
                      <div className="flex items-center gap-6">
                        {/* Left Circle Image */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-full border border-white/30 object-cover"
                        />

                        {/* Title + Designation */}
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.name}
                          </h3>
                          <p className="text-sm text-white/70">
                            {item.designation}
                          </p>
                        </div>
                      </div>

                      {/* Story */}
                      <p className="mt-6 text-sm leading-relaxed text-white/80">
                        {item.story}
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-white w-4" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
