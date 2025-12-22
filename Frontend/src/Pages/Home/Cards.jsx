// StatsSection.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const stats = [
  {
    id: "total-projects",
    label: "Total Projects",
    value: "1,250",
    description:
      "Total number of PRISM-supported projects across all TOCIC centers.",
  },
  {
    id: "total-funds",
    label: "Funds Sanctioned",
    value: "₹ 185 Cr",
    description:
      "Cumulative funds sanctioned under PRISM Phase I & II schemes.",
  },
  {
    id: "startups-supported",
    label: "Start-ups Supported",
    value: "430+",
    description:
      "Start-ups receiving mentoring or financial support through PRISM.",
  },
  {
    id: "innovators",
    label: "Individual Innovators",
    value: "780+",
    description:
      "Individual innovators who have received PRISM support for PoC or scaling.",
  },
  {
    id: "tocic-centers",
    label: "TOCIC Centers",
    value: "12",
    description:
      "TePP Outreach cum Cluster Innovation Centers implementing PRISM at state/cluster level.",
  },
  {
    id: "states-covered",
    label: "States & UTs Covered",
    value: "15+",
    description:
      "Geographical spread of PRISM-supported activities across India.",
  },
];

export function StatsSection() {
  return (
    <section className="bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            PRISM at a glance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {stats.map((stat) => (
            <Dialog key={stat.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer border-border bg-background/80 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <CardHeader className="space-y-1 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-semibold text-foreground">
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{stat.label}</DialogTitle>
                  <DialogDescription>{stat.description}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
