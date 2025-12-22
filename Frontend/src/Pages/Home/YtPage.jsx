import React, { useState } from "react";

const centers = [
  "All",
  "Delhi Center",
  "Mumbai Center",
  "Bengaluru Center",
  "Hyderabad Center",
  "Chennai Center",
  "Kolkata Center",
  "Pune Center",
  "Jaipur Center",
  "Ahmedabad Center",
  "Indore Center",
  "Lucknow Center",
  "Patna Center",
  "Bhopal Center",
  "Noida Center",
  "Gurgaon Center",
  "Faridabad Center",
];

const videos = [
  {
    id: 1,
    title: "PRISM Innovation Talk",
    center: "Delhi Center",
    thumbnail: "https://picsum.photos/400/220?1",
    views: "12K views",
  },
  {
    id: 2,
    title: "Startup Success Story",
    center: "Mumbai Center",
    thumbnail: "https://picsum.photos/400/220?2",
    views: "8.5K views",
  },
  {
    id: 3,
    title: "MSME Transformation",
    center: "Bengaluru Center",
    thumbnail: "https://picsum.photos/400/220?3",
    views: "15K views",
  },
  {
    id: 4,
    title: "Research to Market",
    center: "Delhi Center",
    thumbnail: "https://picsum.photos/400/220?4",
    views: "6K views",
  },
  {
    id: 5,
    title: "Innovation Workshop",
    center: "Hyderabad Center",
    thumbnail: "https://picsum.photos/400/220?5",
    views: "9K views",
  },
];

export default function PrismVideoPage() {
  const [activeCenter, setActiveCenter] = useState("All");

  const filteredVideos =
    activeCenter === "All"
      ? videos
      : videos.filter((v) => v.center === activeCenter);

  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-12 xl:px-10">
      {/* MAX WIDTH CONTAINER */}
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        

        {/* CENTER TABS */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto xl:flex-wrap scrollbar-hide">
            {centers.map((center) => {
              const isActive = activeCenter === center;
              return (
                <button
                  key={center}
                  onClick={() => setActiveCenter(center)}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-sm transition-all
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                >
                  {center}
                </button>
              );
            })}
          </div>
        </div>

        {/* VIDEO GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group overflow-hidden rounded-xl bg-card border border-border
                         transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* THUMBNAIL */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                  {video.views}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {video.center}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
