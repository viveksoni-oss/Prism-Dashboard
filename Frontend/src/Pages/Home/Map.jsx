import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { MapPin, Navigation } from "lucide-react";
import SectionHeading from "./../../components/SectionHeading";
// Ensure this path matches your project structure, or remove if not needed

// 1. TopoJSON URL
const INDIA_TOPO_JSON = "/india.json";

// 2. Updated Color Definition (Light/Blue Theme)
const COLORS = {
  // Map Colors2563eb
  mapBase: "#2563eb", // Blue-100: Light blue base (replaces dark slate)
  mapActive: "#fbbf24", // Blue-600: Deep blue for active states
  mapHover: "#baccf5",
  // Amber-400: High-vis yellow for interaction
  mapStroke: "#ffffff", // White: Clean borders for light theme
  mapStrokeActive: "#ffffff",

  // Markers
  markerFill: "#ef4444", // Red-500: Standard alert color for pins
  markerPulse: "#fca5a5", // Red-300: Soft pulse
  markerStroke: "#ffffff", // White

  // Sidebar / UI Highlights
  uiHighlightBg: "#eff6ff", // Blue-50: Very light blue background for active items
  uiHighlightBorder: "#2563eb", // Blue-600: Border matches map active color
  uiTextHighlight: "#1d4ed8", // Blue-700: Requested text color
  uiIcon: "#334155", // Slate-700: Standard icon color
};

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

const allMarkers = Object.values(zoneData).flat();

export default function IndiaSimpleMap() {
  const [hoveredZone, setHoveredZone] = useState(null);

  const activeStates = useMemo(() => {
    return new Set(allMarkers.map((m) => m.state));
  }, []);

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
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
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-[600px] overflow-y-auto custom-scrollbar">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Navigation
                  className="w-5 h-5"
                  style={{ color: COLORS.uiIcon }}
                />
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
                    <h4
                      className="text-md font-bold uppercase tracking-wider pl-3 py-2 rounded-r-md border-l-4 transition-colors duration-200"
                      style={{
                        backgroundColor: COLORS.uiHighlightBg,
                        borderColor: COLORS.uiHighlightBorder,
                        color: COLORS.uiTextHighlight, // Applied requested Blue-700 text color
                      }}
                    >
                      {zone}
                    </h4>
                    <ul className="space-y-3 pl-2">
                      {centers.map((center, idx) => (
                        <li key={idx} className="group">
                          <a
                            href={center.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group-hover:border-blue-200"
                          >
                            <div className="font-semibold text-sm text-slate-800 group-hover:text-blue-700 transition-colors">
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

          {/* RIGHT: Map Container */}
          <div className="w-full lg:w-2/3 h-160 rounded-2xl border border-slate-200 bg-slate-50 relative overflow-hidden flex items-center justify-center shadow-inner">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 1000, center: [82, 23] }}
              className="w-full h-full"
            >
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName =
                      geo.properties.st_nm ||
                      geo.properties.NAME_1 ||
                      geo.properties.name;

                    const isActive = activeStates.has(stateName);

                    let isHoveredZoneState = false;
                    if (hoveredZone) {
                      const zoneStates = zoneData[hoveredZone].map(
                        (c) => c.state
                      );
                      if (zoneStates.includes(stateName))
                        isHoveredZoneState = true;
                    }

                    // Apply Colors
                    const baseFill = isActive
                      ? COLORS.mapActive
                      : COLORS.mapBase;

                    const hoverFill = COLORS.mapHover;

                    const strokeColor = isActive
                      ? COLORS.mapStrokeActive
                      : COLORS.mapStroke;

                    const finalFill = isHoveredZoneState
                      ? COLORS.mapHover
                      : baseFill;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        data-tooltip-id="map-tooltip"
                        data-tooltip-content={stateName}
                        style={{
                          default: {
                            fill: finalFill,
                            stroke: strokeColor,
                            strokeWidth: isActive ? 1 : 0.5,
                            outline: "none",
                            transition: "all 0.3s ease",
                          },
                          hover: {
                            fill: hoverFill,
                            stroke: "#fff",
                            strokeWidth: 1,
                            outline: "none",
                            cursor: "default",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {allMarkers.map(({ name, city, coordinates, url }) => (
                <Marker
                  key={name}
                  coordinates={coordinates}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={`${city}`}
                  onClick={() => window.open(url, "_blank")}
                  className="cursor-pointer group"
                >
                  <circle
                    r={8}
                    fill={COLORS.markerPulse}
                    fillOpacity={0.6}
                    className="animate-ping"
                  />
                  <circle
                    r={3.5}
                    fill={COLORS.markerFill}
                    stroke={COLORS.markerStroke}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-150"
                  />
                </Marker>
              ))}
            </ComposableMap>

            <Tooltip
              id="map-tooltip"
              style={{
                backgroundColor: "#1e293b",
                color: "#f8fafc",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "500",
                padding: "8px 12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            />

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-lg text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shadow-sm"
                  style={{ backgroundColor: COLORS.markerFill }}
                ></span>
                <span className="text-slate-700 font-medium">
                  TOCIC Outreach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
