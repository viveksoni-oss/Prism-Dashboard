// Hero.tsx
import React from "react";
import TextType from "@/components/TextType";
import { SparkleParticles } from "@/components/ui/sparkle-particles";

// Inline marquee component for the ribbon
const Marquee = ({ children, speed = "20s" }) => {
  return (
    <div className="relative overflow-hidden border border-primary/20 bg-primary/10 py-2 rounded-full">
      <div
        className="whitespace-nowrap will-change-transform"
        style={{
          display: "inline-block",
          animation: `marquee ${speed} linear infinite`,
        }}
      >
        <span className="mx-8 text-xs font-medium text-primary">
          {children}
        </span>
        <span className="mx-8 text-xs font-medium text-primary">
          {children}
        </span>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

const Hero7 = () => {
  return (
    <section className="relative overflow-hidden bg-background pb-5 ">
      {/* Background particles */}
      <div className="pointer-events-none absolute inset-0 z-0 ">
        <SparkleParticles enableParallax="true" particleColor="#0ea5e9" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Marquee ribbon */}
        <div className="mb-4 flex justify-center">
          <div className="w-full max-w-2xl"></div>
        </div>

        <p className="mt-1 text-2xl capitalize font-medium text-muted-foreground ">
          Department of Scientific and Industrial Research (DSIR)
        </p>

        <h1 className="mx-auto mt-6 max-w-5xl text-primary text-5xl font-semibold tracking-tight  lg:text-7xl">
          PRISM
        </h1>

        <p className="mt-4 text-lg text-muted-foreground italic lg:text-xl">
          <TextType
            text={["Promoting Innovations in Individuals, Start-ups and MSMEs"]}
            typingSpeed={60}
            pauseDuration={500000000}
            showCursor
            cursorCharacter="|"
          />
        </p>
      </div>
    </section>
  );
};

export default Hero7;
