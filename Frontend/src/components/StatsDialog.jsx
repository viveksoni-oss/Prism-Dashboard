import React from "react";
import { History, TrendingUp } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
  Tooltip,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { BAR_COLORS } from "./../Pages/Home/stats-data";
import { Counter } from "./StatsCard";

const chartConfig = {
  value: { label: "Count", color: "hsl(var(--primary))" },
};

export default function StatsDialog({ stat, graphData, metaData }) {
  return (
    <DialogContent className="max-w-[95vw] w-full lg:max-w-6xl h-[90vh] overflow-hidden bg-white border-slate-300 shadow-2xl rounded-2xl flex flex-col p-0">
      {/* Header */}
      <DialogHeader className="px-6 py-4 border-b-2 border-slate-200 flex-shrink-0 flex flex-row items-center gap-4 bg-gradient-to-r from-slate-50 to-white">
        <div className={cn("p-3 rounded-xl shadow-sm", stat.iconBg)}>
          <stat.icon className={cn("w-7 h-7", stat.iconColor)} />
        </div>
        <div className="text-left flex-1">
          <DialogTitle className="text-2xl font-black text-slate-900">
            {stat.title}
          </DialogTitle>
          <p className="text-sm text-slate-600 mt-0.5">{stat.detail}</p>
        </div>
        {/* Total removed from header right side as requested, or kept minimal */}
      </DialogHeader>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
          {/* --- Graph Section (3 Cols) --- */}
          <Card className="lg:col-span-3 shadow-md border-2 border-slate-200 bg-white flex flex-col min-h-[450px]">
            <CardHeader className="py-4 px-6 border-b-2 border-slate-100 bg-slate-50/50">
              <CardTitle className="text-base font-bold text-slate-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Year-wise Growth Trend (2020-2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <ChartContainer
                config={chartConfig}
                className="w-full h-full min-h-[350px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={graphData}
                    margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="3 3"
                      stroke="#cbd5e1"
                    />
                    <XAxis
                      dataKey="year"
                      tickLine={false}
                      axisLine={{ stroke: "#94a3b8" }}
                      tickMargin={12}
                      tick={{ fill: "#475569", fontSize: 13, fontWeight: 600 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={{ stroke: "#94a3b8" }}
                      tickMargin={8}
                      tick={{ fill: "#475569", fontSize: 12, fontWeight: 500 }}
                    />
                    <Tooltip
                      cursor={{ fill: "#f1f5f9" }}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white shadow-xl border-2 border-slate-200 rounded-lg px-4 py-2 z-50">
                              <p className="text-xs font-bold text-slate-500 uppercase">
                                {payload[0].payload.year}
                              </p>
                              <p className="text-xl font-black text-slate-900 mt-1">
                                {payload[0].value.toLocaleString()}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="value"
                      radius={[8, 8, 0, 0]}
                      isAnimationActive={false} // DISABLED ANIMATION
                    >
                      <LabelList
                        dataKey="value"
                        position="top"
                        offset={10}
                        className="fill-slate-700 text-xs font-bold"
                        formatter={(value) => value.toLocaleString()}
                      />
                      {graphData.map((_, idx) => (
                        <Cell
                          key={`cell-${idx}`}
                          fill={BAR_COLORS[idx % BAR_COLORS.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* --- Detail Cards Section (2 Cols) --- */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-h-[450px]">
            {/* 1. Legacy Data Card */}
            <StatDetailCard
              icon={History}
              label="Legacy Data"
              sublabel="Before 2020"
              value={metaData.before2020}
              colorClass="text-slate-800"
              bgClass="bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 h-1/2" // Make them split height
              iconColor="text-slate-600"
            />

            {/* 2. Recent Growth Card */}
            <StatDetailCard
              icon={TrendingUp}
              label="Recent Growth"
              sublabel="2020-2025 Cycle"
              value={metaData.total2020_25}
              colorClass="text-blue-900"
              bgClass="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-lg shadow-blue-100/50 h-1/2" // Make them split height
              iconColor="text-blue-700"
            />

            {/* REMOVED THE 3rd "Grand Total" CARD */}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

// Reusable Detail Card
function StatDetailCard({
  icon: Icon,
  label,
  sublabel,
  value,
  colorClass,
  bgClass,
  iconColor,
}) {
  return (
    <Card
      className={cn(
        "shadow-md flex flex-col justify-between px-6 py-6",
        bgClass
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-wider flex items-center gap-1.5",
              iconColor
            )}
          >
            <Icon className="w-4 h-4" /> {label}
          </span>
          <p className="text-[10px] text-slate-500 mt-1 font-medium">
            {sublabel}
          </p>
        </div>
      </div>
      <div className={cn("text-5xl font-black mt-4", colorClass)}>
        <Counter value={value} />
      </div>
    </Card>
  );
}
