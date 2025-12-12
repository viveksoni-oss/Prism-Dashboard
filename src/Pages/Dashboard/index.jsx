"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppPieChart from "@/components/charts/pieChart";
import { ChartBarMultiple } from "@/components/charts/barChart";
import AppAreaChart from "@/components/charts/areaChart";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", active: true },
  { label: "Programs" },
  { label: "Startups" },
  { label: "Reports" },
  { label: "Settings" },
];

function DashboardPage() {
  const [dashboardType, setDashboardType] = useState("DSIR"); // "DSIR" | "TOCIC"

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedType = window.localStorage.getItem("type"); // DSIR / TOCIC
    if (storedType === "DSIR" || storedType === "TOCIC") {
      setDashboardType(storedType);
    }
  }, []);

  const handleSwitch = (type) => {
    setDashboardType(type);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("type", type);
    }
  };

  const heading =
    dashboardType === "DSIR"
      ? "DSIR Program Analytics"
      : "TOCIC Center Overview";

  const subHeading =
    dashboardType === "DSIR"
      ? "Current financial year performance and proposal pipeline."
      : "Incubation performance, startup activity, and pipeline overview.";

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-50">
      {/* Sidebar */}

      {/* Main area */}
      <main className="flex-1 flex flex-col">
        {/* Top header */}

        {/* Content */}
        <section className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Page heading + filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {heading}
              </h1>
              <p className="text-xs md:text-sm text-slate-400 mt-1">
                {subHeading}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-slate-950 border border-slate-800 text-xs rounded-md px-2 py-1">
                <option>Last 30 days</option>
                <option>This FY</option>
                <option>Last FY</option>
              </select>
              <select className="bg-slate-950 border border-slate-800 text-xs rounded-md px-2 py-1">
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

/* ----------------- DSIR DASHBOARD ----------------- */

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
    {
      title: "Cohort‑3 review panel",
      date: "18 Dec",
      type: "Pitch",
    },
    {
      title: "Disbursement committee",
      date: "22 Dec",
      type: "Finance",
    },
    {
      title: "IP review for short‑listed",
      date: "28 Dec",
      type: "Legal",
    },
  ];

  return (
    <>
      {/* KPI cards */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {summary.map((item) => (
          <Card
            key={item.label}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          >
            <CardHeader className="pb-2">
              <CardDescription>{item.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl md:text-3xl font-semibold">
                  {item.value}
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  FY 24‑25
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">{item.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <Card className="col-span-12 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Projects by Stage</CardTitle>
            <CardDescription>
              Idea, Prototype, Commercialization, Scale‑up.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AppPieChart />
          </CardContent>
        </Card>
        <div className="col-span-8">
          <ChartBarMultiple />
        </div>
      </div>

      {/* Area chart full width */}
      <Card className="mt-2 col-span-4 ">
        <CardHeader>
          <CardTitle className="text-base">Disbursement Timeline</CardTitle>
          <CardDescription>
            Quarterly grant disbursement trend (dummy).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AppAreaChart />
        </CardContent>
      </Card>

      {/* Table + activity */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mt-2">
        <Card className="col-span-12 xl:col-span-8">
          <CardHeader>
            <CardTitle className="text-base">Recent Proposals</CardTitle>
            <CardDescription>Latest submissions (dummy data).</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2 text-left font-normal">Startup</th>
                  <th className="py-2 text-left font-normal">Stage</th>
                  <th className="py-2 text-left font-normal">Sector</th>
                  <th className="py-2 text-left font-normal">Status</th>
                  <th className="py-2 text-left font-normal">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {recentProposals.map((row) => (
                  <tr
                    key={row.startup}
                    className="hover:bg-slate-900/60 cursor-pointer"
                  >
                    <td className="py-2 pr-2">{row.startup}</td>
                    <td className="py-2 pr-2 text-slate-300">{row.stage}</td>
                    <td className="py-2 pr-2 text-slate-300">{row.sector}</td>
                    <td className="py-2 pr-2">
                      <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 text-slate-400">{row.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Upcoming Reviews</CardTitle>
            <CardDescription>Next key committee activities.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingReviews.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950/80 px-3 py-2"
              >
                <div>
                  <p className="text-xs font-medium">{item.title}</p>
                  <p className="text-[11px] text-slate-400">
                    {item.type} · {item.date}
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400">
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

/* ----------------- TOCIC DASHBOARD ----------------- */

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
      {/* KPI cards */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {summary.map((item) => (
          <Card
            key={item.label}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          >
            <CardHeader className="pb-2">
              <CardDescription>{item.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl md:text-3xl font-semibold">
                  {item.value}
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  Live
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">{item.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <Card className="col-span-12 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Domain Mix</CardTitle>
            <CardDescription>
              Healthtech, Agritech, Deeptech, etc.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <AppPieChart />
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-8">
          <CardHeader>
            <CardTitle className="text-base">Cohort Funding Raised</CardTitle>
            <CardDescription>Dummy cohort‑wise bar chart.</CardDescription>
          </CardHeader>
          <CardContent className="h-72">
            <ChartBarMultiple />
          </CardContent>
        </Card>
      </div>

      {/* Area chart */}
      <Card className="mt-2">
        <CardHeader>
          <CardTitle className="text-base">Application Pipeline</CardTitle>
          <CardDescription>
            Monthly applications vs onboarded startups.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <AppAreaChart />
        </CardContent>
      </Card>

      {/* Table + events */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mt-2">
        <Card className="col-span-12 xl:col-span-8">
          <CardHeader>
            <CardTitle className="text-base">Active Startups</CardTitle>
            <CardDescription>
              Snapshot of a few active incubatees.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2 text-left font-normal">Startup</th>
                  <th className="py-2 text-left font-normal">Domain</th>
                  <th className="py-2 text-left font-normal">City</th>
                  <th className="py-2 text-left font-normal">Stage</th>
                  <th className="py-2 text-left font-normal">
                    Last touchpoint
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {activeStartups.map((row) => (
                  <tr
                    key={row.name}
                    className="hover:bg-slate-900/60 cursor-pointer"
                  >
                    <td className="py-2 pr-2">{row.name}</td>
                    <td className="py-2 pr-2 text-slate-300">{row.domain}</td>
                    <td className="py-2 pr-2 text-slate-300">{row.city}</td>
                    <td className="py-2 pr-2 text-slate-300">{row.stage}</td>
                    <td className="py-2 text-slate-400">{row.lastTouch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Upcoming Events</CardTitle>
            <CardDescription>
              Important dates for the incubation centre.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950/80 px-3 py-2"
              >
                <div>
                  <p className="text-xs font-medium">{item.title}</p>
                  <p className="text-[11px] text-slate-400">
                    {item.type} · {item.date}
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400">
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
