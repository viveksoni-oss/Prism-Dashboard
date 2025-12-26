import React from "react";
import { Sparkles } from "lucide-react"; // Default icon
import { cn } from "@/lib/utils";

function SectionHeading({
  heading,
  headingSuffix,
  badge = "Section", // Default badge text
  icon: Icon = Sparkles, // Default icon component
  description, // Optional subtitle/description
  className,
}) {
  return (
    <div className={cn("text-center mb-12 space-y-4 px-4", className)}>
      {/* 1. Pill Badge */}
      <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-2 backdrop-blur-sm">
        {Icon && (
          <Icon className="w-3.5 h-3.5 mr-2 text-blue-500 fill-current" />
        )}
        {badge}
      </div>

      {/* 2. Main Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        {heading} <span className="text-blue-600">{headingSuffix}</span>
      </h2>

      {/* 3. Optional Description */}
      {description && (
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
