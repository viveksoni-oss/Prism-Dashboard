import React from "react";
import {
  Lightbulb,
  Target,
  Rocket,
  Award,
  Users,
  Briefcase, // For Jobs
  Banknote, // For Funds
  ScrollText, // For Patents
  FlaskConical, // For Labs/Research
} from "lucide-react";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SpotlightCard from "../../components/SpotlightCard"; // Assuming this path is correct

export default function InnovationStats() {
  const stats = [
    {
      icon: Lightbulb,
      title: "Total Startups",
      value: "120+",
      desc: "Incubated & Accelerated",
      color: "from-amber-200 to-yellow-400",
    },
    {
      icon: Banknote,
      title: "Funds Raised",
      value: "₹50 Cr",
      desc: "Seed & External Funding",
      color: "from-emerald-200 to-green-400",
    },
    {
      icon: ScrollText,
      title: "Patents Filed",
      value: "45",
      desc: "IPRs Generated",
      color: "from-purple-200 to-violet-400",
    },
    {
      icon: Users,
      title: "Mentors",
      value: "80+",
      desc: "Industry Experts",
      color: "from-blue-200 to-indigo-400",
    },
    {
      icon: Briefcase,
      title: "Jobs Created",
      value: "1,500+",
      desc: "Direct Employment",
      color: "from-orange-200 to-red-400",
    },
    {
      icon: FlaskConical,
      title: "Labs Support",
      value: "12",
      desc: "R&D Facilities Access",
      color: "from-cyan-200 to-sky-400",
    },
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-[1400px] mx-auto ">
        {/* Header (Optional) */}
        <div className="mb-8 flex justify-center items-center  flex-col">
          <h2 className="text-2xl  font-bold tracking-tight text-slate-900">
            Innovation Impact
          </h2>
          <p className="text-slate-500">Key metrics and ecosystem growth</p>
        </div>

        {/* Grid: 2 cols mobile, 3 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="group relative h-full">
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />

              
                <CardHeader className="p-4 pb-2 space-y-0">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`
                        p-2.5
                        rounded-lg
                        bg-linear-to-tl ${stat.color}
                        shadow-sm
                        
                      `}
                    >
                      <stat.icon className="h-5 w-5 text-slate-900/80" />
                    </div>
                  </div>

                  {/* Big Number Value */}
                  <div className="text-2xl font-bold text-slate-800">
                    {stat.value}
                  </div>

                  {/* Title */}
                  <CardTitle className="text-sm font-medium text-slate-600 mt-1">
                    {stat.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-slate-500 leading-tight">
                    {stat.desc}
                  </p>
                </CardContent>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
