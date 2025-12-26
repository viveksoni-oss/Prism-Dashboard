import React from "react";
import { motion } from "framer-motion";
import { Play, Eye, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Background Component (Inlined for easy copy-paste) ---
function GradientBackground({ className }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 h-full w-full bg-slate-50 overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute top-40 -left-20 w-[300px] h-[300px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
    </div>
  );
}

// --- Data: Updated with YOUR links ---
const videos = [
  {
    id: 1,
    title: "Success Stories: PRISM Beneficiaries",
    videoId: "b5dycsTXcCQ",
    views: "15K views",
    date: "2 months ago",
  },
  {
    id: 2,
    title: "Innovation Showcase: Medical Tech",
    videoId: "DlBS5p2gQCQ",
    views: "8.5K views",
    date: "3 weeks ago",
  },
  {
    id: 3,
    title: "From Idea to Prototype: The Journey",
    videoId: "L7JPDHEj-Vs",
    views: "12K views",
    date: "1 month ago",
  },
  {
    id: 4,
    title: "Empowering Rural Innovators",
    videoId: "9_PGheJllng",
    views: "6K views",
    date: "5 days ago",
  },
  {
    id: 5,
    title: "Sustainable Energy Solutions",
    videoId: "56tIC-YUhvg",
    views: "9K views",
    date: "1 year ago",
  },
  {
    id: 6,
    title: "Advanced Manufacturing Startups",
    videoId: "FNeV9mmkTEY",
    views: "4.2K views",
    date: "6 months ago",
  },
  {
    id: 7,
    title: "AI & Robotics in Indian Ecosystem",
    videoId: "9dBzz5RjZA4",
    views: "22K views",
    date: "2 weeks ago",
  },
  {
    id: 8,
    title: "Scaling Up: MSME Strategies",
    videoId: "mekrDGtYgzk",
    views: "3.1K views",
    date: "4 months ago",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

export default function PrismVideoPage() {
  return (
    <div className="min-h-screen relative font-sans text-slate-900">
      {/* 1. Background Layer */}
      <GradientBackground />

      <section className="px-6 relative z-20 py-20 xl:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/60 border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-4 backdrop-blur-md">
              <Play className="w-3 h-3 mr-2 text-blue-500 fill-current" />
              Video Showcase
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Innovation <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore success stories, workshops, and transformative ideas from
              the PRISM ecosystem.
            </p>
          </motion.div>

          {/* Video Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 "
          >
            {videos.map((video) => (
              <motion.div key={video.id} variants={cardVariants}>
                <Card className="group overflow-hidden border-slate-200/60 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Video Wrapper */}
                  <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>

                    {/* Overlay (Optional: nice touch to dim video until played, remove if you want direct play) */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg leading-snug text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                      {video.title}
                    </h3>

                    <div className="mt-auto flex items-center justify-between text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{video.views}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
