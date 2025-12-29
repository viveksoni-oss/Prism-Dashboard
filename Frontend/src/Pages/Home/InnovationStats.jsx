import React from "react";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { StatsCard } from "@/components/StatsCard";
import { statsConfig, graphData, metaData } from "./stats-data";
import SectionHeading from "@/components/SectionHeading";

export default function InnovationStats() {
  return (
    <div className="relative bg-white/50">
      {/* <SparkleParticles className={"absolute inset-0 z-0 opacity-40"} /> */}

      <section className="relative z-10 py-6 px-6">
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}

          <SectionHeading heading="Innovation Impacts"> </SectionHeading>

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
