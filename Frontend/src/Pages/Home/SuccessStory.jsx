import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    name: "Dr. Binta Shrivastava",
    designation: "SPMVV – TOCIC",
    story:
      "Validation of a single diagnostic device for detection of the three most prevalent mosquito-borne diseases, including malaria and chikungunya, enabling faster and more reliable diagnosis.",
    image: "/success_stories/project1.jpg",
  },
  {
    name: "Mr. Kaushik",
    designation: "University of Madras – TOCIC",
    story:
      "Development of a point-of-care biosensor for early and accurate diagnosis of chronic kidney disease, making diagnostics more accessible and affordable.",
    image: "/success_stories/project2.jpg",
  },
  {
    name: "Mr. Uddip Kashyap",
    designation: "IIT Guwahati – TOCIC",
    story:
      "A smart nest management system designed to support small-scale businesses in rural areas by improving operational efficiency and resource management.",
    image: "/success_stories/project3.jpg",
  },
  {
    name: "Dr. Chander Prakash",
    designation: "CSIR – CSIO, Chandigarh",
    story:
      "Design and development of a novel hybrid ball burnishing assisted 3-axis wire arc additive manufacturing machine for advanced industrial applications.",
    image: "/success_stories/project5.jpg",
  },
  {
    name: "Dr. Jayendra Diwan",
    designation: "GSBTM – Gujarat",
    story:
      "Making of transfemoral and transtibial mechanical prosthetic leg for improving mobility and quality of life.",
    image: "/success_stories/project5.jpg",
  },
  {
    name: "Mr. David Roshan Cyril",
    designation: "University of Madras",
    story:
      "A Novel Acupuncture Treatment Planning and navigation support device for accurate positioning and needling for Acupuncture practitioners.",
    image: "/success_stories/project5.jpg",
  },
];

export default function SuccessStoryCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const isMobile = window.innerWidth < 768;
  const ITEMS_PER_SLIDE = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(stories.length / ITEMS_PER_SLIDE);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [totalSlides]);

  return (
    <section className="relative w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-14 text-center text-4xl font-semibold text-black">
          Innovation Success Stories
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* SLIDER */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full flex-shrink-0 grid-cols-1 gap-8 px-4 md:grid-cols-2"
              >
                {stories
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((item, i) => (
                    <div
                      key={i}
                      className="h-[320px] rounded-[2rem] border border-slate-200
                                 bg-blue-50 p-6 shadow-xl"
                    >
                      <div className="flex h-full gap-6">
                        {/* IMAGE */}
                        <div className="h-[240px] w-[250px] overflow-hidden rounded-xl border shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-col flex-1 h-full">
                          {/* SCROLLABLE TEXT */}
                          <div className="flex-1 overflow-y-auto pr-2">
                            <p className="text-base leading-relaxed text-black ">
                              {item.story}
                            </p>
                          </div>

                          <div className="pt-4 text-right">
                            <p className="font-semibold text-black">
                              {item.name}
                            </p>
                            <p className="italic text-black/70 mt-1">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full 
                       bg-black/10 p-2 hover:bg-black/20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % totalSlides)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full 
                       bg-black/10 p-2 hover:bg-black/20"
          >
            <ChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-black" : "w-2 bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
