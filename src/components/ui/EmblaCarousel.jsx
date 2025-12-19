import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel({ images = [] }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div ref={emblaRef} className="overflow-hidden w-full h-full">
      <div className="flex h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] h-full relative"
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
