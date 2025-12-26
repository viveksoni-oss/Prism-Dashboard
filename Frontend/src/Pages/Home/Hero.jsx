import React from "react";
import { motion } from "framer-motion";
import { SparkleParticles } from "@/components/ui/sparkle-particles";

const Hero7 = () => {
  return (
    <section className="relative overflow-hidden min-h-[35vh] flex flex-col justify-center items-center bg-slate-50 border-b border-slate-100">
      {/* 1. Background Effects */}
      <div className="absolute inset-0 z-0 opacity-30">
        <SparkleParticles
          enableParallax="true"
          particleColor="#3b82f6"
          density={40}
        />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />

      {/* 2. Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-8 pb-4">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          Applications open throughout the year.
          </div>
        </motion.div>

        {/* DSIR Label (Now Bolder) */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-extrabold text-slate-800 mb-2 uppercase tracking-wide"
        >
          Department of Scientific and Industrial Research
        </motion.h2>

        {/* Main Title (Simple Color) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto text-6xl md:text-8xl font-black tracking-tighter text-blue-600 mb-4"
        >
          PRISM
        </motion.h1>

        {/* Description (Light weight) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto"
        >
          Promoting Innovations in Individuals, Start-ups, and MSMEs
        </motion.p>
      </div>
    </section>
  );
};

export default Hero7;
