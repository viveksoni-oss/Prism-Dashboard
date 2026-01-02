import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import PrismHero from "./Hero";
import GalleryAndNews from "./GalleryAndNews";
import SuccessStoryCarousel from "./SuccessStory";
import Map from "./Map";
import { GradientBackground } from "@/components/gradient-background";
import InnovationStats from "./InnovationStats";
import InaugurationAnimation from "./../../components/InaugurationAnimation";
import { SparkleParticles } from "@/components/ui/sparkle-particles";

function Home() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showInauguration, setShowInauguration] = useState(false);

  // Refs for intersection observer
  const sparkleRef = useRef(null);
  const mapRef = useRef(null);

  // Check if sections are in view [web:74][web:77]
  const sparkleInView = useInView(sparkleRef, { once: true, amount: 0.3 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.2 });

  useEffect(() => {
    // Check for inauguration flag in URL
    const isInauguration =
      searchParams.get("launch") === "true" ||
      searchParams.get("inauguration") === "true";

    if (isInauguration) {
      setShowInauguration(true);
    }
  }, [searchParams]);

  const handleInaugurationComplete = () => {
    setShowInauguration(false);
    // Remove query parameter after animation
    searchParams.delete("launch");
    searchParams.delete("inauguration");
    setSearchParams(searchParams);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showInauguration && (
          <InaugurationAnimation onComplete={handleInaugurationComplete} />
        )}
      </AnimatePresence>

      <div className="relative container mx-auto text-foreground">
        <GradientBackground />

        {/* Wrap ALL content in relative z-10 to ensure it appears above backgrounds */}
        <div className="relative z-10">
          {/* Sparkle Particles - Behind only these two sections with lazy load */}
          <div className="relative" ref={sparkleRef}>
            {/* Sparkles background - Only renders when in view */}
            {sparkleInView && (
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <SparkleParticles
                  maxParticleSize={2.5}
                  customDirection="bottom"
                  particleColor="#2563eb"
                  speed={1}
                />
              </div>
            )}

            {/* Content with higher z-index */}
            <div className="relative z-10">
              <PrismHero />
              <InnovationStats />
            </div>
          </div>

          <SuccessStoryCarousel />
          <GalleryAndNews />

          {/* Map - Only renders when in view */}
          <div ref={mapRef}>
            {mapInView ? (
              <Map />
            ) : (
              // Placeholder to maintain layout height
              <div className="min-h-[400px] flex items-center justify-center text-slate-400">
                <div className="animate-pulse">Loading map...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
