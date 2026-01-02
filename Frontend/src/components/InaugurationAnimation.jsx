import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

function InaugurationAnimation({ onComplete }) {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  // CONTROL VARIABLES
  const CURTAIN_SPEED = 3.5; // Seconds for curtain to fully open
  const CONFETTI_DURATION = 8000;
  const AUTO_CLOSE_DELAY = 10000;

  const handleLaunchClick = () => {
    setCurtainOpen(true);
    setShowConfetti(true);

    // Stop confetti
    setTimeout(() => {
      setShowConfetti(false);
    }, CONFETTI_DURATION);

    // Complete animation/Unmount component
    setTimeout(() => {
      onComplete();
    }, AUTO_CLOSE_DELAY);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // REMOVED "bg-slate-900" so the underlying page is visible
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 z-[10001] pointer-events-none">
          <Confetti
            width={width}
            height={height}
            recycle={true}
            numberOfPieces={400}
            colors={["#FFD700", "#FF0000", "#FFFFFF", "#B8860B"]}
            gravity={0.25}
          />
        </div>
      )}

      {/* ----------------------------------------------------------
          WELCOME BOARD (Hanging from top) 
         ---------------------------------------------------------- */}
      <AnimatePresence>
        {!curtainOpen && (
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-[10002]"
            initial={{ y: -300 }}
            animate={{ y: -20 }}
            exit={{ y: -300, transition: { duration: 1, ease: "backIn" } }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.5,
            }}
          >
            {/* The Board Styling */}
            <div className="relative pt-20 pb-8 px-16 bg-gradient-to-b from-red-900 to-red-950 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-x-4 border-b-4 border-yellow-600/50">
              {/* Gold Chain visuals */}
              <div className="absolute -top-10 left-10 w-2 h-40 bg-gradient-to-b from-yellow-700 to-yellow-500 rounded-full" />
              <div className="absolute -top-10 right-10 w-2 h-40 bg-gradient-to-b from-yellow-700 to-yellow-500 rounded-full" />

              {/* Inner Frame */}
              <div className="absolute inset-2 border-2 border-yellow-500/30 rounded-b-2xl pointer-events-none" />

              {/* Glowing Text */}
              <h1 className="text-6xl md:text-8xl font-black tracking-[0.2em] text-center">
                <span className="bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] animate-pulse">
                  WELCOME
                </span>
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------------------
          CENTER LAUNCH BOX 
         ---------------------------------------------------------- */}
      <AnimatePresence>
        {!curtainOpen && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10001] w-full max-w-2xl px-4"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Box Background - Darker glass to contrast against Home Page */}
            <div className="relative backdrop-blur-xl bg-black/80 border border-yellow-500/30 p-10 rounded-2xl shadow-2xl overflow-hidden group">
              {/* Box Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />

              <div className="text-center space-y-8 relative z-10">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif">
                    Inauguration of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-green-400 font-sans">
                      PRISM Pulse Connect
                    </span>
                  </h2>
                </div>
                <p className="text-yellow-400/80 uppercase tracking-widest text-md font-semibold">
                  prismpulse.org
                </p>
                <motion.button
                  onClick={handleLaunchClick}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-200 bg-gradient-to-br from-red-600 to-red-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-3">
                    Launch Network Platform
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------------------
          CURTAINS 
         ---------------------------------------------------------- */}
      <AnimatePresence>
        <div className="absolute inset-0 flex pointer-events-none">
          {/* LEFT CURTAIN */}
          <motion.div
            className="relative w-1/2 h-full bg-[#690000] shadow-[10px_0_50px_rgba(0,0,0,0.8)] z-[10000] overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: curtainOpen ? "-100%" : 0 }}
            transition={{ duration: CURTAIN_SPEED, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.3)_24px,rgba(0,0,0,0.3)_40px)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Gold Trim */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#C5A059] via-[#F1C40F] to-[#B8860B] shadow-xl border-l border-[#8B4513]" />
          </motion.div>

          {/* RIGHT CURTAIN */}
          <motion.div
            className="relative w-1/2 h-full bg-[#690000] shadow-[-10px_0_50px_rgba(0,0,0,0.8)] z-[10000] overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: curtainOpen ? "100%" : 0 }}
            transition={{ duration: CURTAIN_SPEED, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.3)_24px,rgba(0,0,0,0.3)_40px)]" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

            {/* Gold Trim */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#C5A059] via-[#F1C40F] to-[#B8860B] shadow-xl border-r border-[#8B4513]" />
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Decorative Valance (Top frill) */}
      {!curtainOpen && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-16 z-[10003] bg-gradient-to-b from-[#4a0000] to-[#690000] shadow-lg flex items-end justify-center"
          exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
        >
          <div className="w-full h-2 bg-gradient-to-r from-[#B8860B] via-[#F1C40F] to-[#B8860B]" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default InaugurationAnimation;
