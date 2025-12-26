import React, { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import StatsDialog from "./StatsDialog";

// --- Internal Counter Component (Slower/More Noticeable) ---
export function Counter({ value, suffix = "" }) {
  // Increased damping and stiffness for a longer, smoother count
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
  return (
    <Dialog>
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
              "absolute inset-0 bg-gradient-to-br opacity-100", // Full Opacity
              stat.gradient // Should be vibrant classes like 'from-blue-600 to-blue-800'
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

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 z-20">
            <div className="bg-white p-1.5 rounded-full shadow-lg">
              <ArrowUpRight className="w-4 h-4 text-slate-900" />
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl" />
        </motion.button>
      </DialogTrigger>

      <StatsDialog stat={stat} graphData={graphData} metaData={metaData} />
    </Dialog>
  );
}
