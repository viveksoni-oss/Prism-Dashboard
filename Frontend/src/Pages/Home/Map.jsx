import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { MapPin, Navigation } from "lucide-react";
import SectionHeading from "./../../components/SectionHeading"; // Assuming path
import { cn } from "@/lib/utils";

// 1. TopoJSON URL (Ensure this file exists in your public folder)
const INDIA_TOPO_JSON = "/india.json";

// 2. Data Grouped by Zones
const zoneData = {
  "North Zone": [
    {
      name: "Indian Institute of Technology (IIT) Kanpur",
      city: "Kanpur",
      state: "Uttar Pradesh",
      coordinates: [80.3319, 26.5113],
      url: "https://siicincubator.com",
    },
    {
      name: "CSIR–Central Scientific Instruments Organisation (CSIO)",
      city: "Chandigarh",
      state: "Chandigarh",
      coordinates: [76.7794, 30.7333],
      url: "https://www.csio.res.in",
    },
    {
      name: "College of Technology and Engineering (CTAE)",
      city: "Udaipur",
      state: "Rajasthan",
      coordinates: [73.7125, 24.5854],
      url: "https://www.ctae.ac.in",
    },
  ],
  "South Zone": [
    {
      name: "Sri Padmavati Mahila Visvavidyalayam (SPMVV)",
      city: "Tirupati",
      state: "Andhra Pradesh",
      coordinates: [79.4192, 13.6288],
      url: "https://www.spmvv.ac.in",
    },
    {
      name: "CSIR–National Aerospace Laboratories (NAL)",
      city: "Bengaluru",
      state: "Karnataka",
      coordinates: [77.5946, 12.9716],
      url: "https://www.tocic-nal.org",
    },
    {
      name: "University of Madras",
      city: "Chennai",
      state: "Tamil Nadu",
      coordinates: [80.2707, 13.0827],
      url: "https://www.unom.ac.in",
    },
  ],
  "East Zone": [
    {
      name: "CSIR–CGCRI",
      city: "Kolkata",
      state: "West Bengal",
      coordinates: [88.3639, 22.5726],
      url: "https://www.cgcri.res.in",
    },
    {
      name: "CSIR–CMERI",
      city: "Durgapur",
      state: "West Bengal",
      coordinates: [87.3119, 23.5204],
      url: "#",
    },
    {
      name: "Indian Institute of Technology (IIT) Kharagpur",
      city: "Kharagpur",
      state: "West Bengal",
      coordinates: [87.3105, 22.346],
      url: "https://respark.iitkgp.ac.in",
    },
  ],
  "West Zone": [
    {
      name: "Gujarat State Biotechnology Mission (GSBTM)",
      city: "Gandhinagar",
      state: "Gujarat",
      coordinates: [72.6369, 23.2156],
      url: "https://btm.gujarat.gov.in",
    },
  ],
  "North East Zone": [
    {
      name: "CSIR–NEIST",
      city: "Jorhat",
      state: "Assam",
      coordinates: [94.2167, 26.7509],
      url: "https://neist.res.in",
    },
    {
      name: "Indian Institute of Technology (IIT) Guwahati",
      city: "Guwahati",
      state: "Assam",
      coordinates: [91.6916, 26.1878],
      url: "https://www.iitg.ac.in",
    },
  ],
};

// Flatten markers for map rendering
const allMarkers = Object.values(zoneData).flat();

export default function IndiaSimpleMap() {
  const [hoveredZone, setHoveredZone] = useState(null);

  // Create a Set of active states for O(1) lookup
  const activeStates = useMemo(() => {
    return new Set(allMarkers.map((m) => m.state));
  }, []);

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <SectionHeading
          heading="TOCIC Network"
          headingSuffix="Coverage"
          badge="Nationwide Presence"
          icon={MapPin}
          description="A robust network of Technology Oriented Centres spanning across India to support innovation at every step."
        />

        <div className="flex flex-col-reverse lg:flex-row gap-8 mt-10">
          {/* LEFT: Zone-wise Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm h-[600px] overflow-y-auto custom-scrollbar">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-red-500" />
                Regional Centers
              </h3>

              <div className="space-y-8">
                {Object.entries(zoneData).map(([zone, centers]) => (
                  <div
                    key={zone}
                    className="space-y-3"
                    onMouseEnter={() => setHoveredZone(zone)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-1">
                      {zone}
                    </h4>
                    <ul className="space-y-3">
                      {centers.map((center, idx) => (
                        <li key={idx} className="group">
                          <a
                            href={center.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg bg-white border border-slate-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all"
                          >
                            <div className="font-semibold text-sm text-slate-800 group-hover:text-red-600 transition-colors">
                              {center.name}
                            </div>
                            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500">
                              <MapPin className="w-3 h-3" />
                              {center.city}, {center.state}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="w-full lg:w-2/3 h-[600px] rounded-2xl border border-slate-200 bg-blue-50/30 relative overflow-hidden flex items-center justify-center shadow-inner">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 1100,
                center: [82, 23],
              }}
              className="w-full h-full"
            >
              <ZoomableGroup zoom={1} maxZoom={3}>
                {/* Render Geography */}
                <Geographies geography={INDIA_TOPO_JSON}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const stateName =
                        geo.properties.NAME_1 || geo.properties.name;
                      const isActive = activeStates.has(stateName);

                      // Check if state belongs to currently hovered zone
                      let isHoveredZoneState = false;
                      if (hoveredZone) {
                        const zoneStates = zoneData[hoveredZone].map(
                          (c) => c.state
                        );
                        if (zoneStates.includes(stateName))
                          isHoveredZoneState = true;
                      }

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          data-tooltip-id="map-tooltip"
                          data-tooltip-content={stateName}
                          style={{
                            default: {
                              // Active States = Light Red, Others = Slate Gray
                              fill: isActive ? "#fee2e2" : "#f1f5f9",
                              stroke: isActive ? "#fca5a5" : "#cbd5e1",
                              strokeWidth: isActive ? 1 : 0.5,
                              outline: "none",
                              transition: "all 0.3s",
                            },
                            hover: {
                              fill: isActive ? "#fecaca" : "#e2e8f0",
                              stroke: "#ef4444",
                              strokeWidth: 1,
                              outline: "none",
                              cursor: "pointer",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Render Markers */}
                {allMarkers.map(({ name, city, coordinates, url }) => (
                  <Marker
                    key={name}
                    coordinates={coordinates}
                    data-tooltip-id="map-tooltip"
                    data-tooltip-content={`${city}`}
                    onClick={() => window.open(url, "_blank")}
                    className="cursor-pointer group"
                  >
                    {/* Pulsating Effect */}
                    <circle
                      r={8}
                      fill="#ef4444"
                      fillOpacity={0.3}
                      className="animate-ping"
                    />
                    {/* Pin Head */}
                    <circle
                      r={3.5}
                      fill="#dc2626"
                      stroke="#fff"
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:scale-150"
                    />
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Tooltip */}
            <Tooltip
              id="map-tooltip"
              style={{
                backgroundColor: "#1e293b",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "500",
                padding: "8px 12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            />

            {/* Legend Overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-red-100 border border-red-300"></span>
                <span className="text-slate-600 font-medium">Active State</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span className="text-slate-600 font-medium">PRISM Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

