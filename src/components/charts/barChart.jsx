import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

export function ChartBarMultiple() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Visitors by device</CardTitle>
        <CardDescription>January – June 2024</CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        <ChartContainer config={chartConfig} className="w-full h-64 md:h-72">
          <BarChart
            data={chartData}
            margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
            barCategoryGap={20}
            accessibilityLayer
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={32}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              name={chartConfig.desktop.label}
              fill={chartConfig.desktop.color}
              radius={4}
            />
            <Bar
              dataKey="mobile"
              name={chartConfig.mobile.label}
              fill={chartConfig.mobile.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-1 text-xs md:text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
          <TrendingUp className="h-4 w-4 text-emerald-400" />
        </div>
        <p className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months.
        </p>
      </CardFooter>
    </Card>
  );
}
