import AppPieChart from "@/components/charts/pieChart";
import React from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { ChartBarMultiple } from "@/components/charts/barChart";
import AppAreaChart from "@/components/charts/areaChart";

function Dashboard() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-12 gap-6 auto-rows-min">
        {/* Top row: 3 cards (4 cols each) */}
        {Array.from({ length: 3 }).map((_, idx) => (
          <SpotlightCard
            key={idx}
            className="custom-spotlight-card col-span-12 md:col-span-4"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <AppPieChart />
          </SpotlightCard>
        ))}

        {/* Second row: 1 card on left */}
        <SpotlightCard
          className="custom-spotlight-card col-span-12 md:col-span-4"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <AppPieChart />
        </SpotlightCard>

        {/* Bar chart: right side, limited height */}
        <div className="col-span-12 md:col-span-8   row-span-1 flex flex-1 ">
          <SpotlightCard
            className="custom-spotlight-card "
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="h-full">
              <ChartBarMultiple />
            </div>
          </SpotlightCard>
        </div>
      </div>
      <SpotlightCard
        className="custom-spotlight-card mt-10"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="h-full">
          <AppAreaChart />
        </div>
      </SpotlightCard>
    </div>
  );
}

export default Dashboard;
