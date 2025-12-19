import React from "react";
import TextType from "@/components/TextType";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
const Hero7 = () => {
  return (
    <section className="relative o  verflow-hidden py-28">

      {/* Background particles */}
     <div className="absolute inset-0 z-20 pointer-events-none">
  <SparkleParticles
  
/>
</div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="mx-auto max-w-5xl text-6xl font-semibold tracking-tight lg:text-8xl">
          <span className="">
            {/* <ShinyText text="PRISM" speed={5} /> */}
            PRISM
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 lg:text-xl">
          <TextType
            text={["Promoting Innovations in Individuals, Start-ups and MSMEs"]}
            typingSpeed={60}
            pauseDuration={5000}
            showCursor
            cursorCharacter="|"
          />
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-700">
          PRISM is a government initiative that empowers individual innovators,
          start-ups, and MSMEs by supporting cutting-edge indigenous technology.
        </p>
      </div>
    </section>
  );
};


export default Hero7;
