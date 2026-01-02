import React, { useState, useEffect } from "react";
import { History, TrendingUp, Award } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  PieChart,
  Pie,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { BAR_COLORS } from "../data/stats-data";
import { Counter } from "./StatsCard";

const chartConfig = {
  value: { label: "Count", color: "hsl(var(--primary))" },
};

// Custom Label for Pie Chart to show percentage
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const RADIAN = Math.PI / 180;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-sm font-bold drop-shadow-lg"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function StatsDialog({
  stat,
  graphData,
  metaData,
  animationKey,
}) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(false);
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [animationKey]);

  const total2020_25 = metaData.total2020_25 || 0;
  const before2020 = metaData.before2020 || 0;
  const grandTotal = total2020_25 + before2020;

  const donutData = [
    { name: "2015-2020", value: before2020 },
    { name: "2020-2025", value: total2020_25 },
  ];

  return (
    <DialogContent className="max-w-[98vw] w-full lg:max-w-[92vw] xl:max-w-[88vw] h-[94vh] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 border-slate-300 shadow-2xl rounded-3xl flex flex-col p-0">
      {/* Enhanced Header */}
      <DialogHeader className="px-8 py-4 pr-15 border-b-2 border-slate-200 shrink-0 flex flex-row items-center gap-4 bg-gradient-to-r from-white via-slate-50 to-white shadow-sm">
        <div
          className={cn(
            "p-3 rounded-2xl shadow-lg ring-2 ring-white",
            stat.iconBg
          )}
        >
          <stat.icon className={cn("w-7 h-7", stat.iconColor)} />
        </div>
        <div className="text-left flex-1">
          <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight">
            {stat.title}
          </DialogTitle>
          <p className="text-sm text-slate-600 font-medium mt-0.5">
            {stat.detail}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 px-5 py-2.5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 shadow-md">
          <Award className="w-6 h-6 text-blue-600" />
          <div className="text-right">
            <div className="text-xs text-blue-700 font-bold uppercase tracking-wide">
              Grand Total
            </div>
            <div className="text-2xl font-black text-blue-900 tracking-wider">
              <Counter value={grandTotal} />
            </div>
          </div>
        </div>
      </DialogHeader>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Left Column - Bar Chart */}
          <div className="lg:col-span-2 shadow-xl border-2 border-slate-200 bg-white flex flex-col overflow-hidden h-full rounded-2xl">
            {/* Header */}
            <div className="py-4 px-6 border-b-2 border-slate-100 bg-gradient-to-r from-blue-50 via-blue-50/50 to-slate-50 shrink-0">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Year-wise Growth Analysis (2020-2025)
              </h3>
            </div>
            {/* Content */}
            <div className="flex-1 p-6 overflow-hidden">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  {shouldRender ? (
                    <BarChart
                      key={`bar-${animationKey}`}
                      data={graphData}
                      margin={{ top: 25, right: 20, left: 0, bottom: 20 }}
                    >
                      <defs>
                        {BAR_COLORS.map((color, idx) => (
                          <linearGradient
                            key={`gradient-${idx}`}
                            id={`colorGradient${idx}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor={color}
                              stopOpacity={1}
                            />
                            <stop
                              offset="100%"
                              stopColor={color}
                              stopOpacity={0.7}
                            />
                          </linearGradient>
                        ))}
                      </defs>
                      <CartesianGrid
                        vertical={false}
                        strokeDasharray="3 3"
                        stroke="#e2e8f0"
                        strokeWidth={1.5}
                      />
                      <XAxis
                        dataKey="year"
                        tickLine={false}
                        axisLine={{ stroke: "#94a3b8", strokeWidth: 2 }}
                        tickMargin={12}
                        tick={{
                          fill: "#475569",
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={{ stroke: "#94a3b8", strokeWidth: 2 }}
                        tickMargin={8}
                        tick={{
                          fill: "#475569",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      />
                      <Tooltip
                        cursor={{ fill: "#f1f5f9", opacity: 0.5 }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl border-2 border-slate-700 rounded-xl px-5 py-3">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                  {payload[0].payload.year}
                                </p>
                                <p className="text-2xl font-black text-white mt-2 tracking-wider">
                                  {payload[0].value.toLocaleString()}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {stat.title}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar
                        dataKey="value"
                        radius={[10, 10, 0, 0]}
                        maxBarSize={90}
                        isAnimationActive={true}
                        animationDuration={1000}
                        animationBegin={0}
                        animationEasing="ease-out"
                      >
                        <LabelList
                          dataKey="value"
                          position="top"
                          offset={10}
                          className="text-md fill-black font-semibold drop-shadow-sm"
                          formatter={(value) => value.toLocaleString()}
                        />
                        {graphData.map((_, idx) => (
                          <Cell
                            key={`cell-${idx}`}
                            fill={`url(#colorGradient${
                              idx % BAR_COLORS.length
                            })`}
                            strokeWidth={0.1}
                            stroke="black"
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-3">
                      <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                        <TrendingUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-slate-600 font-semibold text-sm">
                        Loading analytics...
                      </span>
                    </div>
                  )}
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>

          {/* Right Column - Donut & Stats */}
          <div className="lg:col-span-1 flex flex-col gap-6 h-full overflow-y-auto lg:overflow-hidden">
            {/* Donut Chart - Fixed Height */}
            <div className="shadow-xl border-2 overflow-hidden border-slate-200 bg-white flex flex-col rounded-2xl h-[400px]">
              {/* Header */}
              <div className="py-2 px-5 border-b-2 border-slate-100 bg-gradient-to-r from-purple-50 via-purple-50/50 to-slate-50 shrink-0">
                <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
                  <History className="w-4 h-4 text-purple-600" />
                  Distribution
                </h3>
              </div>
              {/* Content - Zero padding Y */}
              <div className="flex-1 flex flex-col items-center justify-center overflow-hidden py-0 px-4">
                {shouldRender ? (
                  <>
                    <div className="w-full h-full flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart key={`pie-${animationKey}`}>
                          <defs>
                            <linearGradient
                              id="legacyGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#64748b"
                                stopOpacity={1}
                              />
                              <stop
                                offset="100%"
                                stopColor="#475569"
                                stopOpacity={0.8}
                              />
                            </linearGradient>
                            <linearGradient
                              id="recentGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#3b82f6"
                                stopOpacity={1}
                              />
                              <stop
                                offset="100%"
                                stopColor="#2563eb"
                                stopOpacity={0.8}
                              />
                            </linearGradient>
                          </defs>
                          <Pie
                            data={donutData}
                            cx="50%"
                            cy="50%"
                            innerRadius="40%"
                            outerRadius="75%"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                            animationBegin={0}
                            animationDuration={1000}
                            animationEasing="ease-out"
                            stroke="white"
                            strokeWidth={2}
                            labelLine={false}
                            label={renderCustomizedLabel}
                          >
                            <Cell fill="url(#legacyGradient)" />
                            <Cell fill="url(#recentGradient)" />
                          </Pie>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const percentage = (
                                  (payload[0].value / grandTotal) *
                                  100
                                ).toFixed(1);
                                return (
                                  <div className="bg-white shadow-xl border-2 border-slate-200 rounded-lg px-4 py-2">
                                    <p className="text-xs font-bold text-slate-500 uppercase">
                                      {payload[0].name}
                                    </p>
                                    <p className="text-xl font-black text-slate-900 mt-1 tracking-wider">
                                      {payload[0].value.toLocaleString()}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                      {percentage}%
                                    </p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <text
                            x="50%"
                            y="45%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-slate-900 font-black text-xl tracking-wider"
                          >
                            {grandTotal.toLocaleString()}
                          </text>
                          <text
                            x="50%"
                            y="54%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-slate-500 font-semibold text-[10px]"
                          >
                            Total Entries
                          </text>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Color Legend */}
                    <div className="w-full flex items-center justify-center gap-6 pb-3 pt-1">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-gradient-to-b from-slate-500 to-slate-600 border border-slate-300"></div>
                        <span className="text-xs font-semibold text-slate-700">
                          2015-2020
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-300"></div>
                        <span className="text-xs font-semibold text-slate-700">
                          2020-2025
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="animate-pulse flex flex-col items-center gap-2">
                      <div className="rounded-full bg-slate-200 h-32 w-32"></div>
                      <div className="h-2 bg-slate-200 rounded w-24"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Cards Grid - Fixed Height */}
            <div className="grid grid-cols-2 gap-4 h-[140px]">
              <StatDetailCard
                icon={History}
                label="2015-2020"
                value={before2020}
                colorClass="text-slate-800"
                bgClass="bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 shadow-lg"
                iconColor="text-slate-600"
              />
              <StatDetailCard
                icon={TrendingUp}
                label="2020-2025"
                value={total2020_25}
                colorClass="text-blue-900"
                bgClass="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg"
                iconColor="text-blue-700"
              />
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

function StatDetailCard({
  icon: Icon,
  label,
  value,
  colorClass,
  bgClass,
  iconColor,
}) {
  return (
    <div
      className={cn(
        "shadow-md flex flex-col justify-between px-4 py-3 transition-all duration-300 rounded-xl h-full",
        bgClass
      )}
    >
      <div className="flex items-start justify-between mb-1">
        <span
          className={cn(
            "text-[16px] font-black uppercase tracking-wider flex items-center gap-1.5",
            iconColor
          )}
        >
          <Icon className="w-4 h-4" /> FY {label}
        </span>
      </div>
      <div className={cn("text-2xl font-black tracking-wider", colorClass)}>
        {typeof value === "number" ? <Counter value={value} /> : value}
      </div>
    </div>
  );
}
