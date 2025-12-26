// src/data/stats-data.js
import {
  GraduationCap,
  Megaphone,
  ScanSearch,
  BrainCircuit,
  FileCheck,
  Rocket,
} from "lucide-react";

export const BAR_COLORS = [
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#8b5cf6", // Violet
  "#06b6d4", // Cyan
];

export const graphData = {
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

export const metaData = {
  "Workshops Conducted": { before2020: 82, total2020_25: 598, grandTotal: 680 },
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
  "Patents Filed": { before2020: 42, total2020_25: 70, grandTotal: 112 },
  "Start-ups Catalysed": { before2020: 40, total2020_25: 31, grandTotal: 71 },
};

export const statsConfig = [
  {
    icon: GraduationCap,
    title: "Workshops Conducted",
    suffix: "+",
    desc: "Innovation & entrepreneurship workshops.",
    detail: "Workshops conducted to build awareness and skills in innovation.",
    gradient: "from-orange-600 via-orange-700 to-orange-900", // DARKER
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/20",
  },
  {
    icon: Megaphone,
    title: "Outreach Activities",
    suffix: "+",
    desc: "Outreach and engagement activities.",
    detail:
      "Activities carried out to reach students and ecosystem stakeholders.",
    gradient: "from-indigo-600 via-indigo-700 to-indigo-950", // DARKER
    iconColor: "text-indigo-300",
    iconBg: "bg-indigo-400/20",
  },
  {
    icon: ScanSearch,
    title: "Proposals Scouted",
    suffix: "+",
    desc: "Innovation proposals identified.",
    detail: "Innovation proposals scouted through calls and events.",
    gradient: "from-emerald-600 via-emerald-700 to-emerald-900", // DARKER
    iconColor: "text-emerald-300",
    iconBg: "bg-emerald-400/20",
  },
  {
    icon: BrainCircuit,
    title: "Innovators Supported",
    suffix: "+",
    desc: "Individual innovators supported.",
    detail: "Innovators supported with mentoring, funding, or infrastructure.",
    gradient: "from-cyan-600 via-cyan-700 to-cyan-900", // DARKER
    iconColor: "text-cyan-300",
    iconBg: "bg-cyan-400/20",
  },
  {
    icon: FileCheck,
    title: "IPR Generated",
    lookupKey: "Patents Filed",
    suffix: "",
    desc: "Intellectual property filings.",
    detail: "Patents filed as an outcome of supported innovations.",
    gradient: "from-purple-600 via-purple-700 to-purple-950", // DARKER
    iconColor: "text-purple-300",
    iconBg: "bg-purple-400/20",
  },
  {
    icon: Rocket,
    title: "Start-ups Catalysed",
    suffix: "",
    desc: "New startups enabled.",
    detail: "Startups catalysed through incubation and ecosystem support.",
    gradient: "from-rose-600 via-rose-700 to-rose-900", // DARKER
    iconColor: "text-rose-300",
    iconBg: "bg-rose-400/20",
  },
];
