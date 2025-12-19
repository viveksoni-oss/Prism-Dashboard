import React, { useEffect, useState } from "react";
import axios from "axios";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Search, RefreshCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- CONSTANTS ---
const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const CURRENT_TOCIC = {
  id: "TOC-001",
  name: "IIT Kanpur TOCIC",
  head: "Dr. Anjali Sharma",
};

// Dropdown Options Configuration
const DOMAIN_OPTIONS = [
  { value: "all", label: "All Domains" },
  { value: "CLEAN_ENERGY", label: "Clean Energy" },
  { value: "Agriculture", label: "Agriculture" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Waste Management", label: "Waste Management" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All Statuses", color: "text-foreground" },
  { value: "APPROVED", label: "Approved", color: "text-green-600" },
  { value: "PENDING_APPROVAL", label: "Pending", color: "text-yellow-600" },
  { value: "REJECTED", label: "Rejected", color: "text-red-600" },
];

export default function ApplicationsPage() {
  // Data States
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    totalApplications: 0,
    pendingReview: 0,
    totalFunds: 0,
  });

  const [loadingData, setLoadingData] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  // Filter States
  const [filters, setFilters] = useState({
    domain: "all",
    status: "all",
    search: "",
    minFund: "",
    maxFund: "",
  });

  // Debounce Logic
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(filters.search), 500);
    return () => clearTimeout(handler);
  }, [filters.search]);

  // --- API CALLS ---

  // 1. Fetch Stats (Runs once on mount)
  const fetchStats = async () => {
    setLoadingStats(true);
    try {
      const response = await axios.get(`${API_URL}/api/projects/stats`);
      setStats(response.data);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoadingStats(false);
    }
  };

  // 2. Fetch Projects (Runs on filter change)
  const fetchProjects = async () => {
    setLoadingData(true);
    try {
      // Axios handles query params cleanly via the 'params' object
      const params = {};
      if (filters.domain !== "all") params.domain = filters.domain;
      if (filters.status !== "all") params.status = filters.status;
      if (debouncedSearch) params.search = debouncedSearch;
      if (filters.minFund) params.minFund = filters.minFund;
      if (filters.maxFund) params.maxFund = filters.maxFund;

      const response = await axios.get(`${API_URL}/api/projects/public`, {
        params,
      });
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoadingData(false);
    }
  };

  // Initial Load
  useEffect(() => {
    fetchStats();
  }, []);

  // Filter Effect
  useEffect(() => {
    fetchProjects();
  }, [
    filters.domain,
    filters.status,
    filters.minFund,
    filters.maxFund,
    debouncedSearch,
  ]);

  // Handlers
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      domain: "all",
      status: "all",
      search: "",
      minFund: "",
      maxFund: "",
    });
  };

  return (
    <div className="container mx-auto px-10 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Applications Dashboard
        </h1>
        <p className="text-muted-foreground">
          Managing applications for{" "}
          <span className="font-semibold text-primary">
            {CURRENT_TOCIC.name}
          </span>
        </p>
      </div>

      {/* KPI Cards (Data from Stats API) */}
      <div className="grid gap-4 md:grid-cols-3">
        <KPICard
          title="Total Applications"
          value={stats.totalApplications}
          loading={loadingStats}
        />
        <KPICard
          title="Pending Review"
          value={stats.pendingReview}
          loading={loadingStats}
        />
        <KPICard
          title="Total Funds Requested"
          value={`₹ ${(stats.totalFunds / 100000).toFixed(1)} Lakhs`}
          loading={loadingStats}
        />
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <CardTitle>Submitted Projects</CardTitle>
              <CardDescription>
                Advanced filtering and real-time data.
              </CardDescription>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <RefreshCcw className="mr-2 h-4 w-4" /> Reset
              </Button>
            </div>
          </div>

          {/* --- FILTER BAR --- */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 pt-4 border-t">
            {/* 1. Search Text */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search title or innovator..."
                className="pl-8"
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
              />
            </div>

            {/* 2. Domain Filter (Mapped) */}
            <Select
              value={filters.domain}
              onValueChange={(val) => handleFilterChange("domain", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Domain" />
              </SelectTrigger>
              <SelectContent>
                {DOMAIN_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 3. Status Filter (Mapped & Colored) */}
            <Select
              value={filters.status}
              onValueChange={(val) => handleFilterChange("status", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    <span className={`font-medium ${opt.color}`}>
                      {opt.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 4. Min Funding Filter */}
            <Input
              type="number"
              placeholder="Min ₹"
              value={filters.minFund}
              onChange={(e) => handleFilterChange("minFund", e.target.value)}
            />
          </div>
        </CardHeader>

        <CardContent>
          {loadingData ? (
            <div className="flex h-24 items-center justify-center text-muted-foreground">
              Loading data...
            </div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Simple Sub-component for KPIs
function KPICard({ title, value, loading }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-8 w-24 animate-pulse rounded bg-muted" />
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
      </CardContent>
    </Card>
  );
}
