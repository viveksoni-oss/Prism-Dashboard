// src/components/IndiaSimpleMap.tsx
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/ui/separator";

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
    <>
      <section className="w-full rounded-2xl  max-w-7xl mx-auto p-6 text-slate-900 mb-10">
        <SectionHeading
          heading={"TOCIC Network Across "}
          headingSuffix={"India"}
        ></SectionHeading>
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight"></h2>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:flex-row">
          {/* Left: TOCIC centres list */}
          <div className="w-full rounded-xl border border-slate-800  bg-blue-100 p-4 text-xs md:w-1/2">
            <h3 className="text-xl font-bold text-slate-800">
              Highlighted <span className="text-primary underline">TOCIC Centres</span>
            </h3>

            <ul className="mt-3 text-lg space-y-2 text-slate-800 list-disc ml-6">
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
          <div className="w-full md:w-1/2">
            <div
              id="map"
              ref={mapRef}
              className="h-[500px] w-full overflow-hidden rounded-xl border border-slate-800 bg-primary-foreground"
            />
          </div>
        </div>
      </section>
    </>
  );
}
