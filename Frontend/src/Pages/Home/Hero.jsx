// Hero.tsx
import React from "react";
import TextType from "@/components/TextType";
import { SparkleParticles } from "@/components/ui/sparkle-particles";

const Hero7 = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <SparkleParticles />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Ministry of Science and Technology, Government of India
        </p>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
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

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          PRISM is a government initiative that empowers individual innovators,
          start-ups, and MSMEs by supporting cutting-edge indigenous technology.
        </p>
      </div>
    </section>
  );
};

export default Hero7;
