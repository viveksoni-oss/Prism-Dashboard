import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function SectionHeading({
  heading,
  headingSuffix,
  badge, // Optional badge text
  icon: Icon = Sparkles, // Default icon component
  description, // Optional subtitle/description
  className,
}) {
  return (
    <div className={cn("text-center mb-6 space-y-3 px-4", className)}>
      {/* 1. Pill Badge (Only renders if 'badge' is provided) */}
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
          <Icon className="w-3.5 h-3.5" />
          {badge}
        </div>
      )}

      {/* 2. Main Title (Smaller & Gradient) */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        {heading}{" "}
        <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
          {headingSuffix}
        </span>
      </h2>

      {/* 3. Optional Description (Tighter spacing) */}
      {description && (
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
