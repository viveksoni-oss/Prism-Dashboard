// src/components/IndiaSimpleMap.tsx
import { useEffect, useRef, useState } from "react";

export default function IndiaSimpleMap() {
  const mapRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Small delay to avoid blocking initial render; can swap with IntersectionObserver
    const t = setTimeout(() => {
      if (window.simplemaps_countrymap && !hasLoaded) {
        window.simplemaps_countrymap.load();
        setHasLoaded(true);
      }
    }, 300); // 300–500ms works well

    return () => clearTimeout(t);
  }, [hasLoaded]);

  return (
    <section className="w-full rounded-2xl border  p-6 text-slate-900 mb-10">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            TOCIC Network Across India
          </h2>
          <p className="mt-1 text-xs text-slate-800 max-w-xl">
            Explore the TePP Outreach cum Cluster Innovation Centres (TOCICs)
            that enable DSIR–PRISM innovators with incubation, mentoring, and
            lab access.
          </p>
        </div>
        <p className="mt-2 text-[11px] text-slate-400 md:text-right">
          Hover over markers on the map to view city, host institute, and quick
          links.
        </p>
      </div>

      <div className="flex w-full flex-col gap-6 md:flex-row">
        {/* Left: TOCIC centres list */}
        <div className="w-full rounded-xl border border-slate-800 bg-blue-900/70 p-4 text-xs md:w-1/3">
          <h3 className="text-sm font-semibold text-slate-50">
            Highlighted TOCIC Centres
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">
            Sample centres from the national DSIR–PRISM TOCIC network.
          </p>
          <ul className="mt-3 text-lg space-y-2 text-slate-200">
            <li>SIIC, IIT Kanpur – Uttar Pradesh</li>
            <li>CSIR–CSIO – Chandigarh</li>
            <li>CSIR–CGCRI – Kolkata, West Bengal</li>
            <li>CSIR–NEIST – Jorhat, Assam</li>
            <li>CTAE – Udaipur, Rajasthan</li>
            <li>SPMVV – Tirupati, Andhra Pradesh</li>
            <li>IIT Guwahati – Assam</li>
            <li>University of Madras – Chennai, Tamil Nadu</li>
          </ul>
        </div>

        {/* Right: Map */}
        <div className="w-full md:w-2/3">
          <div
            id="map"
            ref={mapRef}
            className="h-[600px] w-full overflow-hidden rounded-xl border border-slate-800 bg-primary-foreground"
          />
          <p className="mt-2 text-[11px] text-slate-500">
            Marker positions are indicative and not drawn to exact geographic
            scale.
          </p>
        </div>
      </div>
    </section>
  );
}
