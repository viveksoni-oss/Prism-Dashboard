import React, { useEffect } from "react";
import {
  GraduationCap,
  Megaphone,
  ScanSearch,
  BrainCircuit,
  FileCheck,
  Rocket,
  TrendingUp,
  ArrowUpRight,
  History,
  Sigma,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SparkleParticles } from "@/components/ui/sparkle-particles";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// --- DATA ---

const graphData = {
  "Workshops Conducted": [
    { year: "20-21", value: 90 },
    { year: "21-22", value: 98 },
    { year: "22-23", value: 130 },
    { year: "23-24", value: 138 },
    { year: "24-25", value: 142 },
  ],
  "Outreach Activities": [
    { year: "20-21", value: 50 },
    { year: "21-22", value: 55 },
    { year: "22-23", value: 67 },
    { year: "23-24", value: 68 },
    { year: "24-25", value: 76 },
  ],
  "Proposals Scouted": [
    { year: "20-21", value: 210 },
    { year: "21-22", value: 242 },
    { year: "22-23", value: 275 },
    { year: "23-24", value: 412 },
    { year: "24-25", value: 370 },
  ],
  "Innovators Supported": [
    { year: "20-21", value: 22 },
    { year: "21-22", value: 15 },
    { year: "22-23", value: 27 },
    { year: "23-24", value: 14 },
    { year: "24-25", value: 32 },
  ],
  "Patents Filed": [
    { year: "20-21", value: 10 },
    { year: "21-22", value: 14 },
    { year: "22-23", value: 17 },
    { year: "23-24", value: 15 },
    { year: "24-25", value: 14 },
  ],
  "Start-ups Catalysed": [
    { year: "20-21", value: 6 },
    { year: "21-22", value: 5 },
    { year: "22-23", value: 7 },
    { year: "23-24", value: 5 },
    { year: "24-25", value: 8 },
  ],
};

const metaData = {
  "Workshops Conducted": {
    before2020: 82,
    total2020_25: 598,
    grandTotal: 680,
  },
  "Outreach Activities": {
    before2020: 100,
    total2020_25: 316,
    grandTotal: 416,
  },
  "Proposals Scouted": {
    before2020: 515,
    total2020_25: 1509,
    grandTotal: 2024,
  },
  "Innovators Supported": {
    before2020: 147,
    total2020_25: 110,
    grandTotal: 257,
  },
  "Patents Filed": {
    before2020: 42,
    total2020_25: 70,
    grandTotal: 112,
  },
  "Start-ups Catalysed": {
    before2020: 40,
    total2020_25: 31,
    grandTotal: 71,
  },
};

const BAR_COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

// Stats Configuration - Updated Icons
const stats = [
  {
    icon: GraduationCap, // Education/Workshops
    title: "Workshops Conducted",
    suffix: "+",
    desc: "Innovation & entrepreneurship workshops.",
    detail: "Workshops conducted to build awareness and skills in innovation.",
    gradient:
      "bg-gradient-to-br from-amber-50 to-orange-100 border-orange-200/60",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    icon: Megaphone, // Outreach
    title: "Outreach Activities",
    suffix: "+",
    desc: "Outreach and engagement activities.",
    detail:
      "Activities carried out to reach students and ecosystem stakeholders.",
    gradient:
      "bg-gradient-to-br from-blue-50 to-indigo-100 border-indigo-200/60",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    icon: ScanSearch, // Scouting
    title: "Proposals Scouted",
    suffix: "+",
    desc: "Innovation proposals identified.",
    detail: "Innovation proposals scouted through calls and events.",
    gradient:
      "bg-gradient-to-br from-emerald-50 to-green-100 border-green-200/60",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: BrainCircuit, // Innovators
    title: "Innovators Supported",
    suffix: "+",
    desc: "Individual innovators supported.",
    detail: "Innovators supported with mentoring, funding, or infrastructure.",
    gradient: "bg-gradient-to-br from-cyan-50 to-sky-100 border-sky-200/60",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
  },
  {
    icon: FileCheck, // Patents/IPR
    title: "IPR Generated",
    lookupKey: "Patents Filed",
    suffix: "",
    desc: "Intellectual property filings.",
    detail: "Patents filed as an outcome of supported innovations.",
    gradient:
      "bg-gradient-to-br from-violet-50 to-purple-100 border-purple-200/60",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
  },
  {
    icon: Rocket, // Startups
    title: "Start-ups Catalysed",
    suffix: "",
    desc: "New startups enabled.",
    detail: "Startups catalysed through incubation and ecosystem support.",
    gradient: "bg-gradient-to-br from-rose-50 to-red-100 border-red-200/60",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
];

const chartConfig = {
  value: {
    label: "Count",
    color: "hsl(var(--primary))",
  },
};

// --- COUNTER COMPONENT ---
function Counter({ value, suffix = "" }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <span className="flex items-center">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function InnovationStats() {
  return (
    <div className="relative min-h-screen bg-white/50">
      <SparkleParticles className={"absolute inset-0 z-0 opacity-40"} />

      <section className="relative z-10 py-16 px-6">
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-12 text-center space-y-4">
            <div className="inline-flex items-center justify-center p-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-2">
              <TrendingUp className="w-4 h-4 mr-2 text-slate-500" />
              Impact Report
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Innovation <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Driving growth through workshops, outreach, and startup support.
            </p>
          </div>

          {/* Grid: Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const key = stat.lookupKey || stat.title;
              const currentGraphData = graphData[key] || [];
              const currentMeta = metaData[key] || {
                grandTotal: 0,
                before2020: 0,
                total2020_25: 0,
              };

              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "group relative flex flex-col items-center justify-center text-center w-full p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl",
                        stat.gradient
                      )}
                    >
                      {/* Centered Icon */}
                      <div className={cn("p-4 rounded-full mb-4", stat.iconBg)}>
                        <stat.icon className={cn("w-8 h-8", stat.iconColor)} />
                      </div>

                      {/* Centered Stats (No Description) */}
                      <div className="space-y-1">
                        <div className="text-4xl font-bold text-slate-900 tracking-tight flex justify-center">
                          <Counter
                            value={currentMeta.grandTotal}
                            suffix={stat.suffix}
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700">
                          {stat.title}
                        </h3>
                      </div>

                      {/* Hover Arrow Indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-slate-400" />
                      </div>
                    </motion.button>
                  </DialogTrigger>

                  {/* Compact Dialog Content */}
                  <DialogContent className="min-w-6xl max-w-[90vw] h-auto max-h-[85vh] overflow-hidden bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl rounded-2xl flex flex-col p-0">
                    {/* Compact Header */}
                    <DialogHeader className="px-6 py-4 border-b border-slate-100 flex-shrink-0 flex flex-row items-center gap-4 bg-white/50">
                      <div className={cn("p-2 rounded-lg", stat.iconBg)}>
                        <stat.icon className={cn("w-6 h-6", stat.iconColor)} />
                      </div>
                      <div className="text-left">
                        <DialogTitle className="text-xl font-bold text-slate-900">
                          {stat.title}
                        </DialogTitle>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {stat.detail}
                        </p>
                      </div>
                    </DialogHeader>

                    {/* Body Content */}
                    <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* LEFT: Compact Graph */}
                        <Card className="lg:col-span-2 shadow-sm border-slate-200 bg-white flex flex-col h-[320px]">
                          <CardHeader className="py-3 px-4 border-b border-slate-50">
                            <CardTitle className="text-sm font-semibold text-slate-700">
                              Recent Cycle Growth (2020-25)
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex-1 p-2">
                            <ChartContainer
                              config={chartConfig}
                              className="w-full h-full"
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={currentGraphData}
                                  margin={{
                                    top: 10,
                                    right: 10,
                                    left: -20,
                                    bottom: 0,
                                  }}
                                >
                                  <CartesianGrid
                                    vertical={false}
                                    strokeDasharray="3 3"
                                    stroke="#e2e8f0"
                                  />
                                  <XAxis
                                    dataKey="year"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tick={{ fill: "#64748b", fontSize: 10 }}
                                  />
                                  <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fill: "#64748b", fontSize: 10 }}
                                  />
                                  <ChartTooltip
                                    content={
                                      <ChartTooltipContent
                                        indicator="line"
                                        className="bg-white shadow-md border-slate-100 rounded-md text-xs"
                                      />
                                    }
                                  />
                                  <Bar
                                    dataKey="value"
                                    radius={[4, 4, 0, 0]}
                                    animationDuration={1000}
                                  >
                                    {currentGraphData.map((entry, idx) => (
                                      <Cell
                                        key={`cell-${idx}`}
                                        fill={
                                          BAR_COLORS[idx % BAR_COLORS.length]
                                        }
                                      />
                                    ))}
                                  </Bar>
                                </BarChart>
                              </ResponsiveContainer>
                            </ChartContainer>
                          </CardContent>
                        </Card>

                        {/* RIGHT: Compact Stats Cards */}
                        <div className="flex flex-col gap-3 h-[320px]">
                          {/* Card 1 */}
                          <Card className="bg-white border-slate-200 shadow-sm flex-1 flex flex-col justify-center px-4 py-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                <History className="w-3 h-3" /> Before 2020
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-slate-700">
                              {currentMeta.before2020.toLocaleString()}
                            </div>
                          </Card>

                          {/* Card 2 */}
                          <Card className="bg-blue-50/50 border-blue-100 shadow-sm flex-1 flex flex-col justify-center px-4 py-2 border-l-4 border-l-blue-500">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> 2020-2025
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-blue-900">
                              {currentMeta.total2020_25.toLocaleString()}
                            </div>
                          </Card>

                          {/* Card 3 */}
                          <Card className="bg-slate-900 text-white shadow-md border-none flex-1 flex flex-col justify-center px-4 py-2">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                <Sigma className="w-3 h-3" /> Total
                              </span>
                            </div>
                            <div className="text-3xl font-bold text-white">
                              <Counter
                                value={currentMeta.grandTotal}
                                suffix={stat.suffix}
                              />
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
