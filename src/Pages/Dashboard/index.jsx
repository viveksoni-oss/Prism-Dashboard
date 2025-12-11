import AppPieChart from "@/components/charts/pieChart";
import React from "react";

import SpotlightCard from "./../../components/SpotlightCard";

function Dashboard() {
  return (
    <div className="text-2xl">
      hello
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        // Content goes here
      </SpotlightCard>
      <AppPieChart></AppPieChart>
    </div>
  );
}

export default Dashboard;
