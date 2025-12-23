import React from "react";
import {
  Lightbulb,
  Users,
  Briefcase,
  Banknote,
  ScrollText,
  FlaskConical,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import AppPieChart from "@/components/charts/pieChart";
import { Tooltip } from "recharts"; // if needed in AppPieChart

// Chart config for ChartContainer
const chartConfig = {
  value: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
};

// Year-wise data for each metric (2019–2025)
const workshopsData = [
  { year: "2019", value: 364 },
  { year: "2020", value: 55 },
  { year: "2021", value: 60 },
  { year: "2022", value: 72 },
  { year: "2023", value: 59 },
  { year: "2024", value: 70 },
  { year: "2025", value: 316 },
];

const outreachData = [
  { year: "2019", value: 180 },
  { year: "2020", value: 60 },
  { year: "2021", value: 136 },
  { year: "2022", value: 150 },
  { year: "2023", value: 162 },
  { year: "2024", value: 88 },
  { year: "2025", value: 596 },
];

const proposalsData = [
  { year: "2019", value: 515 },
  { year: "2020", value: 210 },
  { year: "2021", value: 242 },
  { year: "2022", value: 275 },
  { year: "2023", value: 412 },
  { year: "2024", value: 370 },
  { year: "2025", value: 1509 },
];

const innovatorsData = [
  { year: "2019", value: 147 },
  { year: "2020", value: 22 },
  { year: "2021", value: 15 },
  { year: "2022", value: 27 },
  { year: "2023", value: 14 },
  { year: "2024", value: 32 },
  { year: "2025", value: 110 },
];

const patentsData = [
  { year: "2019", value: 42 },
  { year: "2020", value: 10 },
  { year: "2021", value: 14 },
  { year: "2022", value: 17 },
  { year: "2023", value: 15 },
  { year: "2024", value: 14 },
  { year: "2025", value: 70 },
];

const startupsData = [
  { year: "2019", value: 40 },
  { year: "2020", value: 6 },
  { year: "2021", value: 5 },
  { year: "2022", value: 7 },
  { year: "2023", value: 5 },
  { year: "2024", value: 8 },
  { year: "2025", value: 31 },
];

// Map stat title -> series
const statSeriesMap = {
  "Workshops Conducted": workshopsData,
  "Outreach Activities": outreachData,
  "Proposals Scouted": proposalsData,
  "Innovators Supported": innovatorsData,
  "Patents Filed": patentsData,
  "Start-ups Catalysed": startupsData,
};

// Stats cards
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
    title: "Patents Filed",
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

export default function InnovationStats() {
  return (
    <section className="backdrop-blur-2xl py-10 px-4">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Innovation Impact
          </h2>
          <p className="text-sm text-muted-foreground">
            Key metrics showcasing PRISM ecosystem growth
          </p>
        </div>

        {/* Grid: 2 rows × 3 cols on desktop */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 max-w-7xl mx-auto lg:grid-cols-3 lg:grid-rows-2">
          {stats.map((stat, index) => (
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

                  <div className="h-full rounded-xl border border-border bg-background/90 shadow-sm transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                    <CardHeader className="space-y-0 p-4 pb-2 text-center">
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className={`
                            inline-flex items-center justify-center
                            rounded-lg bg-gradient-to-tl ${stat.color}
                            p-2.5 shadow-sm
                          `}
                        >
                          <stat.icon className="h-5 w-5 text-slate-900/80" />
                        </div>
                      </div>

                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>

                      <CardTitle className="mt-1 text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-4 pt-0 text-center">
                      <p className="text-xs leading-tight text-muted-foreground">
                        {stat.desc}
                      </p>
                    </CardContent>
                  </div>
                </button>
              </DialogTrigger>

              {/* Big popup with charts */}
              <DialogContent className="max-w-[80vw] max-h-[80vh] w-full p-6 overflow-hidden">
                <DialogHeader>
                  <DialogTitle>{stat.title}</DialogTitle>
                  <DialogDescription>{stat.detail}</DialogDescription>
                </DialogHeader>

                <div className="mt-4 grid gap-6 md:grid-cols-[2fr,1.2fr] h-[60vh]">
                  {/* Left: animated bar chart */}
                  <div className="rounded-lg border border-border bg-card p-4 flex flex-col">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">
                      Year-wise progress (2019–2025)
                    </p>
                    <ChartContainer config={chartConfig} className="flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={statSeriesMap[stat.title]}
                          margin={{ top: 8, right: 16, bottom: 8, left: 0 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                          />
                          <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                          />
                          <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={4}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar
                            dataKey="value"
                            radius={[4, 4, 0, 0]}
                            fill="var(--color-chart-1)"
                            isAnimationActive="auto" // default: animated in browser [web:39]
                            animationDuration={1200}
                            animationEasing="ease-out"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>

                  {/* Right: total + pie chart */}
                  <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Cumulative total
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.desc}
                      </p>
                    </div>

                    <div className="flex-1">
                      {/* AppPieChart should internally use ResponsiveContainer + animation props [web:64] */}
                      <AppPieChart
                        data={statSeriesMap[stat.title]}
                        dataKey="value"
                        nameKey="year"
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
