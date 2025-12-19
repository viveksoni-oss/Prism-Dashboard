import React from "react";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Award,
  CheckCircle,
  LogIn, // Added Icon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpotlightCard from "../../components/SpotlightCard";

export default function Cards() {
  return (
    <section className="py-1 px-1 bg-white ">
      <div className="max-w-6xl mx-auto mb-10" >
        
        {/* <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            // Content goes here
          </SpotlightCard> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    {
      icon: Lightbulb,
      title: "Total Innovators",
      desc: "Validate your concept and secure initial seed funding",
      color: "from-sky-300 to-cyan-300",
    },
    {
      icon: Target,
      title: "Funds Sanctioned",
      desc: "Build and refine your prototype with expert guidance",
      color: "from-cyan-300 to-blue-300",
    },
    {
      icon: Rocket,
      title: "Commercialization",
      desc: "Scale to market with investor and partner support",
      color: "from-blue-300 to-indigo-300",
    },
    {
      icon: Award,
      title: "Growth",
      desc: "Access networks and expand globally",
      color: "from-indigo-300 to-violet-300",
    },
  ].map((stage) => (
    <div key={stage.title} className="group relative">
      
      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-xl bg-sky-200/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

      <SpotlightCard
        spotlightColor="blue"
        className="
          relative
          h-full
          rounded-xl
          bg-white/80
          backdrop-blur
          border border-slate-200/70
          hover:border-sky-500
          shadow-md
          hover:shadow-lg
          transition-all duration-300
        "
        style={{ backgroundColor: "#c2b9b9d6" }}
      >
        <CardHeader>
          <div
            className={`
              inline-flex
              p-3
              rounded-xl
              bg-gradient-to-br ${stage.color}
              shadow-sm
              mb-4
            `}
          >
            <stage.icon className="w-6 h-6 text-slate-900/80" />
          </div>

          <CardTitle className="text-lg font-semibold text-slate-800">
            {stage.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-slate-600 leading-relaxed">
            {stage.desc}
          </p>
        </CardContent>
      </SpotlightCard>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
