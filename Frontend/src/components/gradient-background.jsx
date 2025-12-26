import React from "react";
import { cn } from "@/lib/utils";

export function GradientBackground({ className }) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 h-full w-full bg-slate-50 overflow-hidden ",
        className
      )}
    >
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-blue-50/80 to-transparent pointer-events-none" />

      {/* Top Right Blue Orb */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* Middle Left Emerald Orb */}
      <div className="absolute top-40 -left-20 w-[300px] h-[300px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* Optional: Bottom Right Violet Accent (adds a bit more depth) */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
    </div>
  );
}
