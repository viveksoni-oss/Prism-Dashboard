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

// 1. TopoJSON URL
const INDIA_TOPO_JSON = "/india.json";

// 2. Zone-based color palette (Accessible & Distinct)
const ZONE_COLORS = {
  "North Zone": "#3B82F6", // Blue
  "South Zone": "#F59E0B", // Amber
  "East Zone": "#10B981", // Emerald
  "West Zone": "#8B5CF6", // Purple
  "North East Zone": "#EF4444", // Red
};

const COLORS = {
  mapStroke: "#ffffff",
  mapHover: "#FCD34D",
  markerFill: "#DC2626",
  markerPulse: "#FCA5A5",
  markerStroke: "#ffffff",
  uiHighlightBg: "#eff6ff",
  uiIcon: "#334155",
};

const zoneData = {
  "North Zone": [
    {
      name: "Indian Institute of Technology (IIT) Kanpur",
      city: "Kanpur",
      state: "Uttar Pradesh",
      coordinates: [80.3319, 26.5113],
      url: "https://siicincubator.com",
      contact: "+91-512-259-7346",
      email: "siic@iitk.ac.in",
    },
    {
      name: "CSIR–Central Scientific Instruments Organisation (CSIO)",
      city: "Chandigarh",
      state: "Chandigarh",
      coordinates: [76.7794, 30.7333],
      url: "https://www.csio.res.in",
      contact: "+91-172-265-7811",
      email: "csio@csio.res.in",
    },
    {
      name: "College of Technology and Engineering (CTAE)",
      city: "Udaipur",
      state: "Rajasthan",
      coordinates: [73.7125, 24.5854],
      url: "https://www.ctae.ac.in",
      contact: "+91-294-247-1004",
      email: "ctae@mpuat.ac.in",
    },
  ],
  "South Zone": [
    {
      name: "Sri Padmavati Mahila Visvavidyalayam (SPMVV)",
      city: "Tirupati",
      state: "Andhra Pradesh",
      coordinates: [79.4192, 13.6288],
      url: "https://www.spmvv.ac.in",
      contact: "+91-877-228-6170",
      email: "info@spmvv.ac.in",
    },
    {
      name: "CSIR–National Aerospace Laboratories (NAL)",
      city: "Bengaluru",
      state: "Karnataka",
      coordinates: [77.5946, 12.9716],
      url: "https://www.tocic-nal.org",
      contact: "+91-80-2508-6235",
      email: "tocic@nal.res.in",
    },
    {
      name: "University of Madras",
      city: "Chennai",
      state: "Tamil Nadu",
      coordinates: [80.2707, 13.0827],
      url: "https://www.unom.ac.in",
      contact: "+91-44-2539-5919",
      email: "registrar@unom.ac.in",
    },
  ],
  "East Zone": [
    {
      name: "CSIR–CGCRI",
      city: "Kolkata",
      state: "West Bengal",
      coordinates: [88.3639, 22.5726],
      url: "https://www.cgcri.res.in",
      contact: "+91-33-2473-3469",
      email: "cgcri@cgcri.res.in",
    },
    {
      name: "CSIR–CMERI",
      city: "Durgapur",
      state: "West Bengal",
      coordinates: [87.3119, 23.5204],
      url: "#",
      contact: "+91-343-254-8200",
      email: "cmeri@cmeri.res.in",
    },
    {
      name: "Indian Institute of Technology (IIT) Kharagpur",
      city: "Kharagpur",
      state: "West Bengal",
      coordinates: [87.3105, 22.346],
      url: "https://respark.iitkgp.ac.in",
      contact: "+91-322-228-3560",
      email: "respark@iitkgp.ac.in",
    },
  ],
  "West Zone": [
    {
      name: "Gujarat State Biotechnology Mission (GSBTM)",
      city: "Gandhinagar",
      state: "Gujarat",
      coordinates: [72.6369, 23.2156],
      url: "https://btm.gujarat.gov.in",
      contact: "+91-79-2324-8477",
      email: "gsbtm@gujarat.gov.in",
    },
  ],
  "North East Zone": [
    {
      name: "CSIR–NEIST",
      city: "Jorhat",
      state: "Assam",
      coordinates: [94.2167, 26.7509],
      url: "https://neist.res.in",
      contact: "+91-376-237-0121",
      email: "neist@neist.res.in",
    },
    {
      name: "Indian Institute of Technology (IIT) Guwahati",
      city: "Guwahati",
      state: "Assam",
      coordinates: [91.6916, 26.1878],
      url: "https://www.iitg.ac.in",
      contact: "+91-361-258-2000",
      email: "info@iitg.ac.in",
    },
  ],
};

const allMarkers = Object.entries(zoneData).flatMap(([zone, centers]) =>
  centers.map((center) => ({ ...center, zone }))
);

// Map states to zones for coloring
const stateToZone = {
  // North Zone
  "Uttar Pradesh": "North Zone",
  Chandigarh: "North Zone",
  Rajasthan: "North Zone",
  Punjab: "North Zone",
  Haryana: "North Zone",
  "Himachal Pradesh": "North Zone",
  Uttarakhand: "North Zone",
  Delhi: "North Zone",
  "Jammu and Kashmir": "North Zone",
  Ladakh: "North Zone",

  // South Zone
  "Andhra Pradesh": "South Zone",
  Karnataka: "South Zone",
  "Tamil Nadu": "South Zone",
  Kerala: "South Zone",
  Telangana: "South Zone",
  Puducherry: "South Zone",
  Lakshadweep: "South Zone",
  "Andaman and Nicobar Islands": "South Zone",

  // East Zone
  "West Bengal": "East Zone",
  Odisha: "East Zone",
  Bihar: "East Zone",
  Jharkhand: "East Zone",

  // West Zone
  Gujarat: "West Zone",
  Maharashtra: "West Zone",
  Goa: "West Zone",
  "Madhya Pradesh": "West Zone",
  Chhattisgarh: "West Zone",
  "Dadra and Nagar Haveli and Daman and Diu": "West Zone",

  // North East Zone
  Assam: "North East Zone",
  "Arunachal Pradesh": "North East Zone",
  Manipur: "North East Zone",
  Meghalaya: "North East Zone",
  Mizoram: "North East Zone",
  Nagaland: "North East Zone",
  Tripura: "North East Zone",
  Sikkim: "North East Zone",
};

export default function IndiaSimpleMap() {
  const [hoveredZone, setHoveredZone] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);

  return (
    <section className="relative w-full py-16">
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
                        backgroundColor: `${ZONE_COLORS[zone]}15`,
                        borderColor: ZONE_COLORS[zone],
                        color: ZONE_COLORS[zone],
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: ZONE_COLORS[zone] }}
                        />
                        {zone}
                      </span>
                    </h4>
                    <ul className="space-y-3 pl-2">
                      {centers.map((center, idx) => (
                        <li key={idx} className="group">
                          <a
                            href={center.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
                            style={{
                              borderLeftWidth: "3px",
                              borderLeftColor:
                                hoveredZone === zone
                                  ? ZONE_COLORS[zone]
                                  : "transparent",
                            }}
                          >
                            <div
                              className="font-semibold text-sm text-slate-800 transition-colors"
                              style={{
                                color:
                                  hoveredZone === zone
                                    ? ZONE_COLORS[zone]
                                    : undefined,
                              }}
                            >
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
          <div className="w-full lg:w-2/3 h-[600px] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden flex items-center justify-center shadow-inner">
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

                    const zone = stateToZone[stateName];
                    const zoneColor = zone ? ZONE_COLORS[zone] : "#CBD5E1";

                    const isHoveredZone = hoveredZone && zone === hoveredZone;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isHoveredZone
                              ? `${zoneColor}DD`
                              : `${zoneColor}99`,
                            stroke: COLORS.mapStroke,
                            strokeWidth: zone ? 1 : 0.5,
                            outline: "none",
                            transition: "all 0.3s ease",
                            opacity: isHoveredZone ? 1 : 0.85,
                          },
                          hover: {
                            fill: isHoveredZone
                              ? `${zoneColor}DD`
                              : `${zoneColor}99`,
                            stroke: COLORS.mapStroke,
                            strokeWidth: zone ? 1 : 0.5,
                            outline: "none",
                            cursor: "default",
                          },
                          pressed: {
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {allMarkers.map((center) => {
                const isHovered = hoveredMarker === center.name;

                return (
                  <Marker
                    key={center.name}
                    coordinates={center.coordinates}
                    data-tooltip-id="center-tooltip"
                    data-tooltip-html={`
                      <div class="text-left">
                        <div class="font-bold text-sm mb-2 border-b border-slate-600 pb-1">${
                          center.name
                        }</div>
                        <div class="space-y-1 text-xs">
                          <div class="flex items-start gap-1.5">
                            <span class="opacity-70">📍</span>
                            <span>${center.city}, ${center.state}</span>
                          </div>
                          ${
                            center.contact
                              ? `
                          <div class="flex items-center gap-1.5">
                            <span class="opacity-70">📞</span>
                            <span>${center.contact}</span>
                          </div>`
                              : ""
                          }
                          ${
                            center.email
                              ? `
                          <div class="flex items-center gap-1.5">
                            <span class="opacity-70">✉️</span>
                            <span class="text-blue-300">${center.email}</span>
                          </div>`
                              : ""
                          }
                          <div class="mt-2 pt-1 border-t border-slate-600">
                            <span class="inline-block px-2 py-0.5 rounded text-xs font-medium" 
                              style="background-color: ${
                                ZONE_COLORS[center.zone]
                              }30; color: ${ZONE_COLORS[center.zone]}">
                              ${center.zone}
                            </span>
                          </div>
                        </div>
                      </div>
                    `}
                    onClick={() => window.open(center.url, "_blank")}
                    onMouseEnter={() => setHoveredMarker(center.name)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    className="cursor-pointer group"
                  >
                    {!isHovered && (
                      <circle
                        r={10}
                        fill={COLORS.markerPulse}
                        fillOpacity={0.9}
                        className="animate-ping"
                      />
                    )}
                    <circle
                      r={isHovered ? 8 : 6}
                      fill={ZONE_COLORS[center.zone]}
                      stroke={COLORS.markerStroke}
                      strokeWidth={2}
                      className="transition-all duration-300 drop-shadow-lg"
                      style={{
                        filter: isHovered
                          ? "drop-shadow(0 0 8px rgba(0,0,0,0.3))"
                          : undefined,
                      }}
                    />
                  </Marker>
                );
              })}
            </ComposableMap>

            <Tooltip
              id="center-tooltip"
              style={{
                backgroundColor: "#0f172a",
                color: "#f8fafc",
                borderRadius: "10px",
                fontSize: "12px",
                padding: "12px",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                maxWidth: "320px",
                zIndex: 1001,
              }}
            />

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-lg text-xs space-y-3">
              <h4 className="font-bold text-slate-700 text-sm mb-2">
                Zone Coverage
              </h4>
              {Object.entries(ZONE_COLORS).map(([zone, color]) => (
                <div
                  key={zone}
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={() => setHoveredZone(zone)}
                  onMouseLeave={() => setHoveredZone(null)}
                >
                  <span
                    className="w-4 h-4 rounded-sm shadow-sm border border-white"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-slate-700 font-medium text-xs">
                    {zone.replace(" Zone", "")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
