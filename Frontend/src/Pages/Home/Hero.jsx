// Hero.tsx
import React from "react";
import TextType from "@/components/TextType";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { Badge } from "@/components/ui/badge";

const Hero7 = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <SparkleParticles enableParallax="true" particleColor="#0ea5e9" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Ribbon / pill */}
        <div className="mb-4 flex justify-center">
          <Badge className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-medium text-primary shadow-sm">
            PRISM is open all year long · Applications accepted anytime
          </Badge>
        </div>

        <p className="text-xs text-muted-foreground">
          Ministry of Science and Technology, Government of India
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Department of Scientific and Industrial Research (DSIR)
        </p>

        <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-foreground lg:text-7xl">
          PRISM
        </h1>

        <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
          <TextType
            text={["Promoting Innovations in Individuals, Start-ups and MSMEs"]}
            typingSpeed={60}
            pauseDuration={5000}
            showCursor
            cursorCharacter="|"
          />
        </p>

        {/* <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          PRISM is a government initiative that empowers individual innovators,
          start-ups, and MSMEs by supporting cutting-edge indigenous technology.
        </p> */}
      </div>
    </section>
  );
};

export default Hero7;
