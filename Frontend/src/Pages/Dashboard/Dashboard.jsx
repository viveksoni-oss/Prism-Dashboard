import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import AppPieChart from "@/components/charts/pieChart";
import { ChartBarMultiple } from "@/components/charts/barChart";
import AppAreaChart from "@/components/charts/areaChart";

function DashboardPage() {
  const [dashboardType, setDashboardType] = useState("DSIR");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedType = window.localStorage.getItem("type");
    if (storedType === "DSIR" || storedType === "TOCIC") {
      setDashboardType(storedType);
    }
  }, []);

  const heading =
    dashboardType === "DSIR"
      ? "DSIR Program Analytics"
      : "TOCIC Center Overview";

  const subHeading =
    dashboardType === "DSIR"
      ? "Current financial year performance and proposal pipeline."
      : "Incubation performance, startup activity, and pipeline overview.";

  return (
    // Changed: bg-slate-950 -> bg-slate-50 dark:bg-slate-950
    // Changed: text-slate-50 -> text-slate-900 dark:text-slate-50
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <main className="flex-1 flex flex-col">
        <section className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Page heading + filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {heading}
              </h1>
              {/* Changed: text-slate-400 -> text-slate-500 dark:text-slate-400 */}
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {subHeading}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Select inputs updated for light/dark visibility */}
              <select className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-slate-400">
                <option>Last 30 days</option>
                <option>This FY</option>
                <option>Last FY</option>
              </select>
              <select className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-slate-400">
                <option>All sectors</option>
                <option>Healthtech</option>
                <option>Agritech</option>
                <option>Deeptech</option>
                <option>Cleantech</option>
              </select>
            </div>
          </div>

          {dashboardType === "DSIR" ? <DsirDashboard /> : <TocicDashboard />}
        </section>
      </main>
    </div>
  );
}

/* -------- DSIR DASHBOARD -------- */

function DsirDashboard() {
  const summary = [
    { label: "Total Proposals", value: 128, sub: "This financial year" },
    { label: "Approved Projects", value: 42, sub: "Across all tracks" },
    { label: "Total Grant (₹ Cr.)", value: 7.5, sub: "Sanctioned amount" },
    { label: "Avg. Approval Time", value: "63 days", sub: "Idea to sanction" },
  ];

  const recentProposals = [
    {
      startup: "AgriSense Labs",
      stage: "Prototype",
      sector: "Agritech",
      status: "Under review",
      updated: "2 days ago",
    },
    {
      startup: "NeuroCare Health",
      stage: "Commercialization",
      sector: "Healthtech",
      status: "Approved",
      updated: "5 days ago",
    },
    {
      startup: "CleanGrid Energy",
      stage: "Idea",
      sector: "Cleantech",
      status: "Screening",
      updated: "1 day ago",
    },
  ];

  const upcomingReviews = [
    { title: "Cohort‑3 review panel", date: "18 Dec", type: "Pitch" },
    { title: "Disbursement committee", date: "22 Dec", type: "Finance" },
    { title: "IP review for short‑listed", date: "28 Dec", type: "Legal" },
  ];

  return (
    <>
      {/* KPI cards */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {summary.map((item) => (
          <Card
            key={item.label}
            // Added bg-white for light mode elevation
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
          >
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-500 dark:text-slate-400">
                {item.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                  {item.value}
                </span>
                {/* Updated badge colors for better contrast in light mode */}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400 font-medium">
                  FY 24‑25
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                {item.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <Card className="col-span-12 lg:col-span-3 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Projects by Stage
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Idea, Prototype, Commercialization.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <AppPieChart />
          </CardContent>
        </Card>

        <div className="col-span-6">
          <ChartBarMultiple />
        </div>

        <Card className="col-span-12 lg:col-span-3 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Disbursement Trend
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Compact FY overview.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-40">
            <AppAreaChart />
          </CardContent>
        </Card>
      </div>

      {/* Table + activity */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mt-2">
        <Card className="col-span-12 xl:col-span-8 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Recent Proposals
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Latest submissions (dummy data).
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                  <th className="py-2 text-left font-normal">Startup</th>
                  <th className="py-2 text-left font-normal">Stage</th>
                  <th className="py-2 text-left font-normal">Sector</th>
                  <th className="py-2 text-left font-normal">Status</th>
                  <th className="py-2 text-left font-normal">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-900">
                {recentProposals.map((row) => (
                  <tr
                    key={row.startup}
                    className="hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer transition-colors"
                  >
                    <td className="py-2 pr-2 font-medium text-slate-900 dark:text-slate-50">
                      {row.startup}
                    </td>
                    <td className="py-2 pr-2 text-slate-600 dark:text-slate-300">
                      {row.stage}
                    </td>
                    <td className="py-2 pr-2 text-slate-600 dark:text-slate-300">
                      {row.sector}
                    </td>
                    <td className="py-2 pr-2">
                      <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-600 dark:text-slate-300">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 text-slate-500 dark:text-slate-400">
                      {row.updated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-4 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Upcoming Reviews
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Next key committee activities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingReviews.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/80 px-3 py-2"
              >
                <div>
                  <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.type} · {item.date}
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 font-medium">
                  Upcoming
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

/* -------- TOCIC DASHBOARD -------- */

function TocicDashboard() {
  const summary = [
    { label: "Active Startups", value: 36, sub: "Currently incubated" },
    { label: "Total Mentors", value: 22, sub: "Across all domains" },
    { label: "Jobs Created", value: 145, sub: "Reported by startups" },
    { label: "Occupancy Rate", value: "87%", sub: "Seats utilised" },
  ];

  const activeStartups = [
    {
      name: "FarmSense AI",
      domain: "Agritech",
      city: "Kanpur",
      stage: "Seed",
      lastTouch: "3 days ago",
    },
    {
      name: "MedPulse Analytics",
      domain: "Healthtech",
      city: "Delhi",
      stage: "Pre‑Series A",
      lastTouch: "1 week ago",
    },
    {
      name: "GridOpti Energy",
      domain: "Cleantech",
      city: "Noida",
      stage: "PoC",
      lastTouch: "5 days ago",
    },
  ];

  const upcomingEvents = [
    { title: "Investor Connect Day", date: "20 Dec", type: "Investor" },
    { title: "Mentor Clinic – IP", date: "24 Dec", type: "Mentoring" },
    { title: "Cohort‑4 Demo Day", date: "30 Dec", type: "Demo day" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {summary.map((item) => (
          <Card
            key={item.label}
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
          >
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-500 dark:text-slate-400">
                {item.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                  {item.value}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400 font-medium">
                  Live
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                {item.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <Card className="col-span-12 lg:col-span-3 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Domain Mix
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Healthtech, Agritech, Deeptech, etc.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <AppPieChart />
          </CardContent>
        </Card>
        <div className="col-span-6">
          <ChartBarMultiple />
        </div>

        <Card className="col-span-12 lg:col-span-3 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Application Pipeline
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Compact trend view.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-40">
            <AppAreaChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 mt-2">
        <Card className="col-span-12 xl:col-span-8 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Active Startups
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Snapshot of a few active incubatees.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                  <th className="py-2 text-left font-normal">Startup</th>
                  <th className="py-2 text-left font-normal">Domain</th>
                  <th className="py-2 text-left font-normal">City</th>
                  <th className="py-2 text-left font-normal">Stage</th>
                  <th className="py-2 text-left font-normal">
                    Last touchpoint
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-900">
                {activeStartups.map((row) => (
                  <tr
                    key={row.name}
                    className="hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer transition-colors"
                  >
                    <td className="py-2 pr-2 font-medium text-slate-900 dark:text-slate-50">
                      {row.name}
                    </td>
                    <td className="py-2 pr-2 text-slate-600 dark:text-slate-300">
                      {row.domain}
                    </td>
                    <td className="py-2 pr-2 text-slate-600 dark:text-slate-300">
                      {row.city}
                    </td>
                    <td className="py-2 pr-2 text-slate-600 dark:text-slate-300">
                      {row.stage}
                    </td>
                    <td className="py-2 text-slate-500 dark:text-slate-400">
                      {row.lastTouch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-4 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base text-slate-900 dark:text-slate-50">
              Upcoming Events
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Important dates for the incubation centre.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/80 px-3 py-2"
              >
                <div>
                  <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.type} · {item.date}
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 font-medium">
                  Scheduled
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default DashboardPage;
