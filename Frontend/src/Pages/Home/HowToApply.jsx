import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  FileText,
  Send,
  Download,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Configuration ---
const STEPS = [
  {
    id: 1,
    title: "Identify a Nearby Outreach Centre",
    subtitle: "Find your local TOCIC",
    description:
      "Select a TePP Outreach cum Cluster Innovation Centres (TOCIC) closest to your location from the official TOCIC list.",
    icon: MapPin,
    actionLabel: "View TOCIC List",
    actionLink: "/tocic-info", // Replace with actual TOCIC list URL if available
    color: "blue",
  },
  {
    id: 2,
    title: "Fill the PRISM Application",
    subtitle: "Download & Complete",
    description:
      "Visit the official DSIR website to download the PRISM Guidelines and Application Forms. Ensure all details are filled accurately to avoid rejection.",
    icon: FileText,
    actionLabel: "Download Forms",
    actionLink:
      "https://www.dsir.gov.in/promoting-innovations-individuals-start-ups-and-msmes-prism",
    color: "emerald",
  },
  {
    id: 3,
    title: "Submit & Follow Up",
    subtitle: "Final Submission",
    description:
      "Submit your completed proposal directly to your chosen TOCIC. Maintain regular contact with the center for status updates, evaluation feedback, and next steps.",
    icon: Send,
    actionLabel: null,
    color: "violet",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

export default function PrismApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-900 selection:bg-blue-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-[-100px] w-[300px] h-[300px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Apply to the PRISM Scheme
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these three simple steps to secure support for your
            innovation through the Department of Scientific and Industrial
            Research.
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative space-y-8"
        >
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative pl-0 md:pl-24 group"
            >
              {/* Step Number Bubble (Desktop) */}
              <div
                className={cn(
                  "hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl items-center justify-center text-xl font-bold border-4 border-slate-50 shadow-lg z-10 transition-transform duration-300 group-hover:scale-110",
                  step.color === "blue" && "bg-blue-500 text-white",
                  step.color === "emerald" && "bg-emerald-500 text-white",
                  step.color === "violet" && "bg-violet-500 text-white"
                )}
              >
                {step.id}
              </div>

              {/* Card */}
              <Card className="border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-sm group-hover:-translate-y-1">
                <div
                  className={cn(
                    "absolute top-0 left-0 w-1 h-full",
                    step.color === "blue" && "bg-blue-500",
                    step.color === "emerald" && "bg-emerald-500",
                    step.color === "violet" && "bg-violet-500"
                  )}
                />
                <CardContent className="p-6 md:p-8">
                  {/* Mobile Step Indicator */}
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <span
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white",
                        step.color === "blue" && "bg-blue-500",
                        step.color === "emerald" && "bg-emerald-500",
                        step.color === "violet" && "bg-violet-500"
                      )}
                    >
                      {step.id}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Step {step.id}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon Area */}
                    <div className="flex-shrink-0">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-full flex items-center justify-center",
                          step.color === "blue" && "bg-blue-100 text-blue-600",
                          step.color === "emerald" &&
                            "bg-emerald-100 text-emerald-600",
                          step.color === "violet" &&
                            "bg-violet-100 text-violet-600"
                        )}
                      >
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500">
                          {step.subtitle}
                        </p>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Action Button */}
                      {step.actionLabel && (
                        <div className="pt-2">
                          <Button
                            asChild
                            variant={index === 1 ? "default" : "outline"}
                            className={cn(
                              "group/btn",
                              index === 1 &&
                                "bg-emerald-600 hover:bg-emerald-700"
                            )}
                          >
                            <a
                              href={step.actionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {index === 1 ? (
                                <Download className="w-4 h-4 mr-2" />
                              ) : (
                                <ExternalLink className="w-4 h-4 mr-2" />
                              )}
                              {step.actionLabel}
                              <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Success / Conclusion Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 max-w-lg mx-auto">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">
              Pro Tip: Keep a copy of all submitted documents for your own
              records.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
