import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function SectionHeading({ heading, headingSuffix, className }) {
  return (
    <div className={cn("text-center mb-6 space-y-3 px-4", className)}>
      {/* 1. Pill Badge (Only renders if 'badge' is provided) */}

      {/* 2. Main Title (Smaller & Gradient) */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        {heading} {headingSuffix}
      </h2>
    </div>
  );
}

export default SectionHeading;
