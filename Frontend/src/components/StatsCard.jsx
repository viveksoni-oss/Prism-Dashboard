import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import StatsDialog from "./StatsDialog";

// --- Internal Counter Component ---
export function Counter({ value, suffix = "" }) {
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <span className="flex items-center">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// --- Main Stats Card ---
export function StatsCard({ stat, graphData, metaData }) {
  const [animationKey, setAnimationKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Increment key whenever dialog opens
  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) {
      setAnimationKey((prev) => prev + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.03, y: -6 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "group relative flex flex-col items-center justify-center text-center w-full p-8 rounded-2xl border-0 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
          )}
        >
          {/* Background Gradient Layer */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-100",
              stat.gradient
            )}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Icon */}
            <div className="p-4 rounded-2xl mb-4 bg-white/20 backdrop-blur-md shadow-lg ring-1 ring-white/30">
              <stat.icon className="w-9 h-9 text-white drop-shadow-lg" />
            </div>

            {/* Stats Text */}
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tight flex justify-center drop-shadow-lg">
                <Counter value={metaData.grandTotal} suffix={stat.suffix} />
              </div>
              <h3 className="text-base font-bold text-white leading-tight px-2 uppercase tracking-wide drop-shadow-md">
                {stat.title}
              </h3>
            </div>
          </div>

          {/* Permanent Arrow - Always visible with hover animation */}
          <div className="absolute top-4 right-4 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 z-20">
            <div className="bg-white/90 p-1.5 rounded-full shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all">
              <ArrowUpRight className="w-4 h-4 text-slate-900" />
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl" />
        </motion.button>
      </DialogTrigger>

      <StatsDialog
        stat={stat}
        graphData={graphData}
        metaData={metaData}
        animationKey={animationKey}
      />
    </Dialog>
  );
}
