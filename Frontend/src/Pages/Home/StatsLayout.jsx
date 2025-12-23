import React from "react";
import {
  Lightbulb,
  Users,
  Briefcase,
  Banknote,
  ScrollText,
  FlaskConical,
  TrendingUp,
  X,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
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

// --- DATA ---
// Full dataset (2019–2025)
const fullData = {
  "Workshops Conducted": [
    { year: "2019", value: 364 },
    { year: "2020", value: 55 },
    { year: "2021", value: 60 },
    { year: "2022", value: 72 },
    { year: "2023", value: 59 },
    { year: "2024", value: 70 },
    { year: "2025", value: 316 },
  ],
  "Outreach Activities": [
    { year: "2019", value: 180 },
    { year: "2020", value: 60 },
    { year: "2021", value: 136 },
    { year: "2022", value: 150 },
    { year: "2023", value: 162 },
    { year: "2024", value: 88 },
    { year: "2025", value: 596 },
  ],
  "Proposals Scouted": [
    { year: "2019", value: 515 },
    { year: "2020", value: 210 },
    { year: "2021", value: 242 },
    { year: "2022", value: 275 },
    { year: "2023", value: 412 },
    { year: "2024", value: 370 },
    { year: "2025", value: 1509 },
  ],
  "Innovators Supported": [
    { year: "2019", value: 147 },
    { year: "2020", value: 22 },
    { year: "2021", value: 15 },
    { year: "2022", value: 27 },
    { year: "2023", value: 14 },
    { year: "2024", value: 32 },
    { year: "2025", value: 110 },
  ],
  "Patents Filed": [
    { year: "2019", value: 42 },
    { year: "2020", value: 10 },
    { year: "2021", value: 14 },
    { year: "2022", value: 17 },
    { year: "2023", value: 15 },
    { year: "2024", value: 14 },
    { year: "2025", value: 70 },
  ],
  "Start-ups Catalysed": [
    { year: "2019", value: 40 },
    { year: "2020", value: 6 },
    { year: "2021", value: 5 },
    { year: "2022", value: 7 },
    { year: "2023", value: 5 },
    { year: "2024", value: 8 },
    { year: "2025", value: 31 },
  ],
};

// Colors for bars
const BAR_COLORS = [
  "#3b82f6", // blue-500
  "#10b981", // emerald-500
  "#f59e0b", // amber-500
  "#ef4444", // red-500
  "#8b5cf6", // violet-500
  "#06b6d4", // cyan-500
];

// Stats info
const stats = [
  {
    icon: Lightbulb,
    title: "Workshops Conducted",
    value: "680+",
    desc: "Innovation & entrepreneurship workshops conducted.",
    detail:
      "More than 680 workshops conducted to build awareness, capacity, and skills in innovation, entrepreneurship, and technology commercialization.",
    color: "from-amber-200 to-yellow-400",
  },
  {
    icon: Users,
    title: "Outreach Activities",
    value: "776+",
    desc: "Outreach and engagement activities.",
    detail:
      "Over 776 outreach activities carried out to reach students, innovators, startups, and ecosystem stakeholders across regions.",
    color: "from-blue-200 to-indigo-400",
  },
  {
    icon: Briefcase,
    title: "Proposals Scouted",
    value: "2024+",
    desc: "Innovation proposals identified.",
    detail:
      "More than 2024 innovation proposals scouted through calls, events, and outreach initiatives under the program.",
    color: "from-emerald-200 to-green-400",
  },
  {
    icon: FlaskConical,
    title: "Innovators Supported",
    value: "257+",
    desc: "Individual innovators supported.",
    detail:
      "Over 257 innovators supported with mentoring, funding access, infrastructure, or incubation support.",
    color: "from-cyan-200 to-sky-400",
  },
  {
    icon: ScrollText,
    title: "IPR Generated ",
    value: "112",
    desc: "Intellectual property filings.",
    detail:
      "112 patents filed as a direct or indirect outcome of supported innovations and technology development efforts.",
    color: "from-purple-200 to-violet-400",
  },
  {
    icon: Banknote,
    title: "Start-ups Catalysed",
    value: "71",
    desc: "New startups enabled.",
    detail:
      "71 startups catalysed through incubation, acceleration, mentoring, and ecosystem support under the innovation program.",
    color: "from-orange-200 to-red-400",
  },
];

const chartConfig = {
  value: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
};

export default function InnovationStats() {
  return (
    <div className="relative bg-gray-50 ">
      <SparkleParticles className={"absolute inset-0 z-0"} />
      <div className="">
        <section className="backdrop-blur-2xl pt-5 pb-10 px-4 ">
          <div className="mx-auto max-w-[1400px]">
            {/* Header */}
            <div className="mb-4 flex flex-col items-center justify-center text-center">
              <h2 className="text-[26px] font-bold tracking-tight text-foreground">
                Innovation Impact
              </h2>
            </div>

            {/* Grid: Stats Cards */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 max-w-7xl mx-auto lg:grid-cols-3 lg:grid-rows-2">
              {stats.map((stat, index) => {
                // Filter data: 2020 onwards
                const chartData = (fullData[stat.title] || []).filter(
                  (d) => parseInt(d.year) >= 2020
                );

                return (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="group relative h-full w-full text-left"
                      >
                        {/* Hover glow */}
                        <div
                          className={`pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${stat.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}
                        />
                        <div className="h-full rounded-xl border border-border bg-blue-50 shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                          <CardHeader className="space-y-0 p-4 pb-2 text-center">
                            <div className="mb-2 flex items-center justify-center">
                              <div
                                className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-tl ${stat.color} p-2.5 shadow-sm`}
                              >
                                <stat.icon className="size-8 text-slate-900/80" />
                              </div>
                            </div>
                            <div className="text-4xl font-semibold text-foreground">
                              {stat.value}
                            </div>
                            <CardTitle className="mt-1 text-lg font-medium text-muted-foreground">
                              {stat.title}
                            </CardTitle>
                          </CardHeader>
                        </div>
                      </button>
                    </DialogTrigger>

                    {/* Big Popup Content */}
                    <DialogContent className="min-w-[85vw] w-full h-[80vh] p-0 overflow-hidden flex flex-col">
                      <div className="p-6 pb-0 flex justify-between items-start">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">
                            {stat.title}
                          </DialogTitle>
                          <DialogDescription className="text-base mt-1.5">
                            {stat.detail}
                          </DialogDescription>
                        </DialogHeader>
                        {/* Close button is usually auto-added by DialogContent, but ensuring layout balance */}
                      </div>

                      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-6 min-h-0">
                        {/* LEFT: Main Bar Chart (2020-Present) */}
                        <Card className="flex flex-col shadow-none border bg-card/50">
                          <CardHeader>
                            <CardTitle>Year-wise Growth</CardTitle>
                            <CardDescription>2020 – Present</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1 min-h-0">
                            <ChartContainer
                              config={chartConfig}
                              className="w-full h-full"
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={chartData}
                                  margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                  }}
                                >
                                  <CartesianGrid
                                    vertical={false}
                                    strokeDasharray="3 3"
                                  />
                                  <XAxis
                                    dataKey="year"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                  />
                                  <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={10}
                                  />
                                  <ChartTooltip
                                    cursor={{ fill: "rgba(0,0,0,0.05)" }}
                                    content={
                                      <ChartTooltipContent indicator="dashed" />
                                    }
                                  />
                                  <Bar
                                    dataKey="value"
                                    radius={[4, 4, 0, 0]}
                                    isAnimationActive={true}
                                    animationDuration={1500}
                                    animationEasing="ease-out"
                                  >
                                    {chartData.map((entry, idx) => (
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
                          <CardFooter className="flex-col items-start gap-2 text-sm border-t bg-muted/20 p-4">
                            <div className="flex gap-2 font-medium leading-none">
                              Trending up by 5.2% this year{" "}
                              <TrendingUp className="h-4 w-4 text-emerald-500" />
                            </div>
                            <div className="leading-none text-muted-foreground">
                              Showing total for the last 5 years
                            </div>
                          </CardFooter>
                        </Card>

                        {/* RIGHT: Summary & Pie Chart */}
                        <div className="flex flex-col gap-4">
                          {/* Summary Box */}
                          <Card className="bg-primary/5 border-primary/10 shadow-none">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium text-muted-foreground">
                                Cumulative Total (All Time)
                              </CardTitle>
                              <div className="text-4xl font-bold text-primary">
                                {stat.value}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-muted-foreground">
                                Includes legacy data from 2019 which is not
                                shown in the yearly chart.
                              </p>
                            </CardContent>
                          </Card>

                          {/* Pie Chart */}
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
    </div>
  );
}
