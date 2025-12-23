import React from "react";
import EmblaCarousel from "../../components/ui/EmblaCarousel";
import SectionHeading from "@/components/SectionHeading";

/* ---------- DATA (JSON) ---------- */
const newsData = [
  { id: 1, text: "PRISM scheme applications are now open" },
  { id: 2, text: "New incubation center inaugurated" },
  { id: 3, text: "Government releases innovation report 2025" },
  { id: 4, text: "MSME grant deadlines extended" },
];

const eventsData = [
  { id: 1, text: "Innovation Hackathon – Jan 20" },
  { id: 2, text: "Startup Pitch Day – Feb 5" },
  { id: 3, text: "MSME Workshop – Feb 18" },
  { id: 4, text: "Mentorship Bootcamp – Mar 2" },
];

/* ---------- REUSABLE COMPONENT ---------- */
function VerticalMarquee({ title, data }) {
  return (
    <div className="relative flex-1 rounded-xl border border-slate-300/70 bg-white p-4 overflow-hidden">
      <h3 className="text-slate-700 font-semibold mb-3">{title}</h3>

      <div className="absolute inset-x-0 top-10 bottom-0 overflow-hidden">
        <div className="space-y-3 animate-marqueeUp hover:[animation-play-state:paused] px-1">
          {data.map((item) => (
            <p
              key={item.id}
              className="text-sm text-slate-700 border-b border-slate-700 pb-2"
            >
              • {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function GalleryAndNews() {
  const images = [
    "https://picsum.photos/1200/600?1",
    "https://picsum.photos/1200/600?2",
    "https://picsum.photos/1200/600?3",
  ];

  return (
    <section className="w-full px-4 py-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading
          heading={"News and"}
          headingSuffix={"Events"}
        ></SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: IMAGE GALLERY */}
          <div
            className="
              lg:col-span-2
              relative
              w-full
              h-[240px]
              sm:h-[300px]
              lg:h-[420px]
              rounded-xl
              overflow-hidden
              border border-slate-300/70
              bg-white
            "
          >
            <EmblaCarousel images={images} />
          </div>

          {/* RIGHT: NEWS + EVENTS */}

          <div className="flex flex-col gap-6">
            <VerticalMarquee title="News" data={newsData} />
            <VerticalMarquee title="Events" data={eventsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
