import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

function BlueInaugurationAnimation({ onComplete }) {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  // CONTROL VARIABLES
  const CURTAIN_OPEN_DELAY = 3000; // Time before curtains open (in milliseconds)
  const CURTAIN_SPEED = 3.5; // Seconds for curtain to fully open
  const CONFETTI_DURATION = 8000;
  const AUTO_CLOSE_DELAY = 10000;

  // Calculate initial countdown from CURTAIN_OPEN_DELAY
  const INITIAL_COUNTDOWN = Math.floor(CURTAIN_OPEN_DELAY / 1000);
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Auto-open curtains after delay
    const openTimer = setTimeout(() => {
      setCurtainOpen(true);
      setShowConfetti(true);
    }, CURTAIN_OPEN_DELAY);

    // Stop confetti
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, CURTAIN_OPEN_DELAY + CONFETTI_DURATION);

    // Complete animation/Unmount component
    const completeTimer = setTimeout(() => {
      onComplete();
    }, CURTAIN_OPEN_DELAY + AUTO_CLOSE_DELAY);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(openTimer);
      clearTimeout(confettiTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, CURTAIN_OPEN_DELAY]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
            colors={["#3B82F6", "#60A5FA", "#FFFFFF", "#1E40AF", "#DBEAFE"]}
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
            <div className="relative pt-20 pb-8 px-12 md:px-20 bg-gradient-to-b from-blue-900 to-blue-950 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-x-4 border-b-4 border-sky-600/50">
              {/* Silver Chain visuals */}
              <div className="absolute -top-10 left-10 w-2 h-40 bg-gradient-to-b from-slate-300 to-slate-500 rounded-full" />
              <div className="absolute -top-10 right-10 w-2 h-40 bg-gradient-to-b from-slate-300 to-slate-500 rounded-full" />

              {/* Inner Frame */}
              <div className="absolute inset-2 border-2 border-sky-500/30 rounded-b-2xl pointer-events-none" />

              {/* Glowing Text */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-[0.15em] md:tracking-[0.2em] text-center leading-tight">
                <span className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] animate-pulse">
                  Creative India 2025
                </span>
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------------------
          CENTER MESSAGE BOX (With Countdown)
         ---------------------------------------------------------- */}
      <AnimatePresence>
        {!curtainOpen && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10001] w-full max-w-3xl px-4"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Box Background */}
            <div className="relative backdrop-blur-xl bg-black/85 border border-blue-500/40 px-8 py-12 md:px-12 md:py-14 rounded-2xl shadow-2xl overflow-hidden">
              {/* Box Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

              <div className="text-center space-y-5 relative z-10">
                

                <div className="space-y-2 py-4">
                  <p className="text-blue-300/90 text-sm sm:text-base md:text-lg font-semibold leading-relaxed px-4">
                    Showcasing 50 innovations nurtured under DSIR PRISM scheme
                  </p>
                  <p className="text-slate-300/80 text-sm md:text-base">by</p>
                  <p className="text-white font-bold text-lg md:text-xl">
                    Hon'ble Minister
                  </p>
                </div>

                {/* Countdown Display */}
                <div className="flex flex-col items-center justify-center gap-4 pt-6">
                  <motion.div
                    key={countdown}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative"
                  >
                    <div className="text-7xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]">
                      {countdown}
                    </div>
                    {/* Pulsing ring around number */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                  <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest font-medium">
                    Opening curtains in...
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------------------------------------------------
          CURTAINS (BLUE THEME)
         ---------------------------------------------------------- */}
      <AnimatePresence>
        <div className="absolute inset-0 flex pointer-events-none">
          {/* LEFT CURTAIN */}
          <motion.div
            className="relative w-1/2 h-full bg-[#1e3a8a] shadow-[10px_0_50px_rgba(0,0,0,0.8)] z-[10000] overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: curtainOpen ? "-100%" : 0 }}
            transition={{ duration: CURTAIN_SPEED, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.3)_24px,rgba(0,0,0,0.3)_40px)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Silver Trim */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-300 via-slate-400 to-slate-500 shadow-xl border-l border-slate-600" />
          </motion.div>

          {/* RIGHT CURTAIN */}
          <motion.div
            className="relative w-1/2 h-full bg-[#1e3a8a] shadow-[-10px_0_50px_rgba(0,0,0,0.8)] z-[10000] overflow-hidden"
            initial={{ x: 0 }}
            animate={{ x: curtainOpen ? "100%" : 0 }}
            transition={{ duration: CURTAIN_SPEED, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(0,0,0,0.3)_24px,rgba(0,0,0,0.3)_40px)]" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

            {/* Silver Trim */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-xl border-r border-slate-600" />
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Decorative Valance (Top frill) */}
      {!curtainOpen && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-16 z-[10003] bg-gradient-to-b from-[#1e40af] to-[#1e3a8a] shadow-lg flex items-end justify-center"
          exit={{ y: -100, opacity: 0, transition: { duration: 1 } }}
        >
          <div className="w-full h-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default BlueInaugurationAnimation;
