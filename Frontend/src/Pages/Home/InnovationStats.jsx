import React from "react";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { StatsCard } from "@/components/StatsCard";
import { statsConfig, graphData, metaData } from "./stats-data";

export default function InnovationStats() {
  return (
    <div className="relative bg-white/50">
      <SparkleParticles className={"absolute inset-0 z-0 opacity-40"} />

      <section className="relative z-10 py-6 px-6">
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Innovation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Impact
              </span>
            </h2>
          </div>

          {/* Grid: Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statsConfig.map((stat, index) => {
              const key = stat.lookupKey || stat.title;
              const currentGraphData = graphData[key] || [];
              const currentMeta = metaData[key] || {
                grandTotal: 0,
                before2020: 0,
                total2020_25: 0,
              };

              return (
                <StatsCard
                  key={index}
                  stat={stat}
                  graphData={currentGraphData}
                  metaData={currentMeta}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
