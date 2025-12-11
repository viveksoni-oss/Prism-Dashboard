import AppPieChart from "@/components/charts/pieChart";
import React from "react";

import SpotlightCard from "./../../components/SpotlightCard";
import { ChartBarMultiple } from "@/components/charts/barChart";

function Dashboard() {
  return (
    <div className="text-2xl p-10">
      <div className=" grid grid-cols-12 gap-10">
        {Array.from({ length: 4 }, () => (
          <SpotlightCard
            className="custom-spotlight-card col-span-4"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <AppPieChart></AppPieChart>
          </SpotlightCard>
        ))}
        <SpotlightCard
          className="custom-spotlight-card col-span-8"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <ChartBarMultiple></ChartBarMultiple>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Dashboard;
