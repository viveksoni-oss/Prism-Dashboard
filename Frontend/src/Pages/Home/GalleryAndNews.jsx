import React from "react";
import EmblaCarousel from "../../components/ui/EmblaCarousel";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, CalendarDays, Sparkles } from "lucide-react";

/* ---------- DATA ---------- */
// Added 'isNew' property to highlight latest items
const eventsData = [
  {
    id: 1,
    text: "Creative India 2025 launch under PRISM Scheme on DSIR Foundation Day",
    date: "2 Jan 2026",
    isNew: true, // Highlights this item
  },
  {
    id: 2,
    text: "Unveiling of PRISM Network Platform & TOCIC Innovator Pulse Connect",
    date: "2 Jan 2026",
    isNew: false,
  },
];

const newsData = [
  {
    id: 1,
    text: "Offgrid Energy Labs Raises USD 15 Million to Scale Clean Energy Solutions",
    link: "https://www.offgridenergylabs.com/news/offgrid-energy-labs-raises-usd15million",
    isNew: true, // Highlights this item
  },
  {
    id: 2,
    text: "GVFL-Backed QrL Bioscience Advances Biotech Innovation in India",
    link: "https://www.linkedin.com/posts/gvfl_gvfl-qrlbioscience-biotech-activity-7359511474731397120-4q57",
    isNew: false,
  },
  {
    id: 3,
    text: "Dextroware Devices Champions Inclusion Through Assistive Technology",
    link: "https://www.linkedin.com/posts/dextrowaredevices_newbeginnings-inclusion-assistivetechnology-activity-7320748059129192449-FbRK",
    isNew: false,
  },
  {
    id: 4,
    text: "AeroRotors Showcases Indigenous Aircraft R&D at Global Forum",
    link: "https://www.linkedin.com/posts/aerorotors-aircrafts-research-development-p-limited_aerorotors-aerorotorsindia-wbfes-activity-7233066909359853568-IyLJ",
    isNew: false,
  },
  {
    id: 5,
    text: "Life & Limb AI Team Selected for Commonwealth Startup Fellowship",
    link: "https://www.linkedin.com/posts/lifeandlimbai_rachinyadav-annugoswami-commonwealthstartupfellowship-activity-7377796358541344768-L5P4",
    isNew: false,
  },
];

/* ---------- REUSABLE COMPONENT: SCROLLABLE LIST ---------- */
function VerticalScrollList({ title, data, type = "news" }) {
  return (
    <div className="relative flex flex-col h-[200px] lg:h-full rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden group">
      {/* Header */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between z-10 relative shrink-0">
        <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
          {type === "event" ? (
            <CalendarDays className="w-4 h-4 text-blue-600" />
          ) : (
            <ExternalLink className="w-4 h-4 text-blue-600" />
          )}
          {title}
        </h3>
        <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Live Updates
        </span>
      </div>

      {/* Scrolling Content - Replaced Marquee with simple scroll */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent p-0">
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="px-4 py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors relative"
            >
              {/* NEW BADGE */}
              {item.isNew && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 border border-red-200 uppercase tracking-wider animate-pulse">
                    New
                  </span>
                </div>
              )}

              {type === "news" ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/item pr-6" // Added padding right for badge space
                >
                  <p className="text-sm text-slate-700 font-medium leading-snug group-hover/item:text-blue-700 transition-colors">
                    {item.text}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
                    <span>Read more</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              ) : (
                <div className="pr-6">
                  <p className="text-sm text-slate-700 font-medium leading-snug">
                    {item.text}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700 border border-amber-100">
                    <CalendarDays className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function GalleryAndNews() {
  // Updated images from /one.jpg to /eight.png
  const images = [
    "/one.png",
    "/two.png",
    "/three.png",
    "/four.jpg",
    "/five.jpg",
    "/six.png",
    "/seven.png",
  ];

  return (
    <section className="w-full px-4 py-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading={"Gallery &"} headingSuffix={"Updates"} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* LEFT: IMAGE GALLERY (2/3 Width) */}
          {/* Added bg-white to show the "white space" requested */}
          <div className="lg:col-span-2 relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* 
               IMPORTANT: Ensure your EmblaCarousel component renders images 
               with `object-fit: contain` (e.g., className="object-contain h-full w-full")
               so the white background shows around them as requested.
            */}
            <EmblaCarousel images={images} />

            {/* Optional Overlay Text for Gallery */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pointer-events-none z-10">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Innovators in Action
              </h3>
              <p className="text-white/80 text-sm max-w-xl mt-1">
                Glimpses of recent workshops, product launches, and success
                stories from the PRISM network.
              </p>
            </div>
          </div>

          {/* RIGHT: NEWS + EVENTS (1/3 Width) */}
          <div className="flex flex-col gap-4 h-[500px]">
            {/* Top Half: Events */}
            <div className="flex-1 overflow-hidden">
              <VerticalScrollList
                title="Upcoming Events"
                data={eventsData}
                type="event"
              />
            </div>

            {/* Bottom Half: News */}
            <div className="flex-1 overflow-hidden">
              <VerticalScrollList
                title="Latest News"
                data={newsData}
                type="news"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
