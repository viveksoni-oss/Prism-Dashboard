import React from "react";
import { motion } from "framer-motion";
import { SparkleParticles } from "@/components/ui/sparkle-particles";

const PrismHero = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-[40vh] flex flex-col justify-center items-center ">
      {/* 1. Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* <SparkleParticles
          enableParallax={true}
          particleColor="#2563eb" // Blue-600
          density={45}
          speed={0.5}
        />*/}
      </div> 

      {/* Subtle Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />

      {/* 2. Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl py-10"
      >
        {/* Status Pill (Glassmorphic) */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-200/60 bg-white/60 backdrop-blur-sm text-emerald-700 text-[11px] md:text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Applications Open Year-Round
          </div>
        </motion.div>

        {/* DSIR Label */}
        <motion.h2
          variants={itemVariants}
          className="text-sm md:text-base font-bold text-slate-600 mb-1 uppercase tracking-[0.2em]"
        >
          Department of Scientific and Industrial Research
        </motion.h2>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="relative">
          <h1 className="mx-auto text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-600 pb-2 drop-shadow-sm">
            PRISM
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed"
        >
          Promoting Innovations inIndividuals, Start-ups, MSMEs{" "}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PrismHero;
