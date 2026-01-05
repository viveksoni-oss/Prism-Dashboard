import React, { useState, useMemo } from "react";
import {
  MapPin,
  Mail,
  Building2,
  Search,
  Globe2,
  ChevronRight,
  Users,
  Navigation,
} from "lucide-react";

// --- Updated Data Structure ---
const tocicCenters = [
  // North Zone
  {
    id: "n1",
    name: "SIIC - IIT Kanpur",
    institution: "Indian Institute of Technology Kanpur",
    zone: "North",
    city: "Kanpur",
    state: "Uttar Pradesh",
    contacts: [
      {
        name: "Prof. Deepu Philip",
        designation: "Professor In-charge, SIIC",
      },
      {
        name: "Mrs. Anushree Gupta",
        designation: "Program Manager, SIIC",
      },
    ],
    email: "anushreeg@iitkfirst.com",
    website: "https://siicincubator.com",
  },
  {
    id: "n2",
    name: "CSIR-CSIO",
    institution: "Central Scientific Instruments Organisation",
    zone: "North",
    city: "Chandigarh",
    state: "Chandigarh",
    contacts: [
      {
        name: "Mr. Narinder Singh Jassal",
        designation: "Sr. Principal Scientist",
      },
    ],
    email: "nsjassal@csio.res.in",
    website: "https://www.csio.res.in",
  },
  {
    id: "n3",
    name: "CTAE Udaipur",
    institution: "College of Technology and Engineering",
    zone: "North",
    city: "Udaipur",
    state: "Rajasthan",
    contacts: [
      {
        name: "Dr. Naveen Jain",
        designation: "Professor",
      },
    ],
    email: "tocic.ctae@gmail.com",
    website: "https://www.ctae.ac.in",
  },

  // South Zone
  {
    id: "s1",
    name: "CSIR-NAL",
    institution: "National Aerospace Laboratories",
    zone: "South",
    city: "Bengaluru",
    state: "Karnataka",
    contacts: [
      {
        name: "Shri T. Karthikeyan",
        designation: "Senior Scientist",
      },
    ],
    email: "t_karthikeyan@nal.res.in",
    website: "https://www.nal.res.in",
  },
  {
    id: "s2",
    name: "SPMVV Tirupati",
    institution: "Sri Padmavati Mahila Visvavidyalayam",
    zone: "South",
    city: "Tirupati",
    state: "Andhra Pradesh",
    contacts: [
      {
        name: "Dr. D. Sujatha",
        designation: "TOCIC Coordinator",
      },
      {
        name: "Prof. P. Jyosthna",
        designation: "TOCIC Coordinator",
      },
    ],
    email: "tuc.spmvv@gmail.com",
    website: "https://www.spmvv.ac.in",
  },
  {
    id: "s3",
    name: "University of Madras",
    institution: "University of Madras",
    zone: "South",
    city: "Chennai",
    state: "Tamil Nadu",
    contacts: [
      {
        name: "Dr. R. Manikandan",
        designation: "Assistant Professor, Dept. of Zoology",
      },
    ],
    email: "prism_unom@yahoo.com",
    website: "https://www.unom.ac.in",
  },

  // East Zone
  {
    id: "e1",
    name: "CSIR-CGCRI",
    institution: "Central Glass & Ceramic Research Institute",
    zone: "East",
    city: "Kolkata",
    state: "West Bengal",
    contacts: [
      {
        name: "Dr. Ambarish Sanyal",
        designation: "Principal Scientist",
      },
    ],
    email: "ambarish.cgcri@csir.res.in",
    website: "https://www.cgcri.res.in",
  },
  {
    id: "e2",
    name: "CSIR-CMERI",
    institution: "Central Mechanical Engineering Research Institute",
    zone: "East",
    city: "Durgapur",
    state: "West Bengal",
    contacts: [
      {
        name: "Shri Soumya Sen Sharma",
        designation: "Scientist-G",
      },
      {
        name: "Dr. Sarita Ghosh",
        designation: "Senior Scientist",
      },
    ],
    email: "tuc_cmeri@cmeri.res.in",
    website: "https://www.cmeri.res.in",
  },
  {
    id: "e3",
    name: "IIT Kharagpur",
    institution: "Indian Institute of Technology Kharagpur",
    zone: "East",
    city: "Kharagpur",
    state: "West Bengal",
    contacts: [
      {
        name: "Prof. Basab Chakraborty",
        designation: "Managing Director, STEP",
      },
    ],
    email: "mdstep@iitkgp.ac.in",
    website: "https://respark.iitkgp.ac.in",
  },

  // West Zone
  {
    id: "w1",
    name: "GSBTM",
    institution: "Gujarat State Biotechnology Mission",
    zone: "West",
    city: "Gandhinagar",
    state: "Gujarat",
    contacts: [
      {
        name: "Dr. Snehal Bagtharia",
        designation: "Joint Director-BD",
      },
      {
        name: "Mr. Hadmat Gadhavi",
        designation: "Manager",
      },
    ],
    email: "gsbtmtocic@gmail.com",
    website: "https://btm.gujarat.gov.in",
  },

  // North East Zone
  {
    id: "ne1",
    name: "IIT Guwahati (TIC)",
    institution: "IITG Technology Incubation Centre",
    zone: "North East",
    city: "Guwahati",
    state: "Assam",
    contacts: [
      {
        name: "Dr. Sukhomay Pal",
        designation: "Professor, Dept. of Mechanical Engineering",
      },
    ],
    email: "spal@iitg.ac.in",
    website: "https://iitgtic.com",
  },
  {
    id: "ne2",
    name: "CSIR-NEIST",
    institution: "North East Institute of Science and Technology",
    zone: "North East",
    city: "Jorhat",
    state: "Assam",
    contacts: [
      {
        name: "Dr. Dipankar Neog",
        designation: "Senior Principal Scientist (Scientist-F)",
      },
    ],
    email: "dipankarneog.neist@csir.res.in",
    website: "https://neist.res.in",
  },
];

// --- Sub-components ---
const ZoneBadge = ({ zone }) => {
  const colors = {
    North: "bg-blue-100 text-blue-700 border-blue-200",
    South: "bg-emerald-100 text-emerald-700 border-emerald-200",
    East: "bg-amber-100 text-amber-700 border-amber-200",
    West: "bg-orange-100 text-orange-700 border-orange-200",
    "North East": "bg-purple-100 text-purple-700 border-purple-200",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide font-bold border ${
        colors[zone] || "bg-gray-100"
      }`}
    >
      {zone} Zone
    </span>
  );
};

export default function TocicInfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZone, setSelectedZone] = useState("All");
  const [activeCenterId, setActiveCenterId] = useState(tocicCenters[0].id);

  // Filter Logic
  const filteredCenters = useMemo(() => {
    return tocicCenters.filter((center) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        center.name.toLowerCase().includes(term) ||
        center.city.toLowerCase().includes(term);
      const matchesZone =
        selectedZone === "All" || center.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [searchTerm, selectedZone]);

  const activeCenter =
    tocicCenters.find((c) => c.id === activeCenterId) || filteredCenters[0];

  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto h-[85vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* === Top Bar (Header) === */}
        <div className="bg-white border-b border-slate-200 px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <h1 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              TOCIC Network Directory
            </h1>
            <p className="text-xs text-slate-500">PRISM Centers across India</p>
          </div>

          {/* Quick Zone Filter in Header */}
          <div className="flex gap-1.5">
            {["All", "North", "South", "East", "West", "North East"].map(
              (zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                    selectedZone === zone
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {zone}
                </button>
              )
            )}
          </div>
        </div>

        {/* === Content Area (Split View) === */}
        <div className="flex flex-1 overflow-hidden">
          {/* --- LEFT: Sidebar List (Inside Container) --- */}
          <aside className="w-full md:w-72 lg:w-80 border-r border-slate-200 bg-slate-50 flex flex-col z-10">
            {/* Search Input */}
            <div className="p-3 border-b border-slate-200 bg-white">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5" />
                <input
                  type="text"
                  placeholder="Find center..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-1.5 space-y-0.5">
              {filteredCenters.map((center) => (
                <button
                  key={center.id}
                  onClick={() => setActiveCenterId(center.id)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all duration-200 group relative ${
                    activeCenterId === center.id
                      ? "bg-white border-blue-400 shadow-sm z-10"
                      : "bg-transparent border-transparent hover:bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex justify-between items-start mb-0.5">
                    <span
                      className={`text-xs font-bold truncate pr-2 ${
                        activeCenterId === center.id
                          ? "text-blue-700"
                          : "text-slate-700"
                      }`}
                    >
                      {center.name}
                    </span>
                    {activeCenterId === center.id && (
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 truncate">
                    <MapPin className="w-2.5 h-2.5" />
                    {center.city}
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* --- RIGHT: Detail View (Inside Container) --- */}
          <main className="flex-1 overflow-y-auto bg-white relative">
            {/* Subtle Pattern Background */}
            <div
              className="absolute inset-0 z-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#cbd5e1 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {activeCenter ? (
              <div className="relative z-10 p-5 max-w-3xl mx-auto animate-in fade-in duration-300">
                {/* Title Block */}
                <div className="mb-5">
                  <ZoneBadge zone={activeCenter.zone} />
                  <h2 className="text-xl font-black text-slate-900 mt-2.5 mb-1.5">
                    {activeCenter.name}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium">
                    {activeCenter.institution}
                  </p>
                </div>

                {/* Info Cards Grid */}
                <div className="grid gap-4">
                  {/* Contact Card - Multiple Contacts */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <Users className="w-3.5 h-3.5" /> Point of Contact
                    </h3>

                    <div className="space-y-3">
                      {activeCenter.contacts.map((contact, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-3 ${
                            index !== 0 ? "pt-3 border-t border-slate-100" : ""
                          }`}
                        >
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
                            {contact.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900 text-sm">
                              {contact.name}
                            </p>
                            <p className="text-slate-500 text-xs">
                              {contact.designation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <a
                        href={`mailto:${activeCenter.email}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs">{activeCenter.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <Navigation className="w-3.5 h-3.5" /> Location
                    </h3>
                    <div className="flex gap-2.5">
                      <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-slate-800 text-sm font-medium leading-relaxed">
                        {activeCenter.city}, {activeCenter.state}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 flex gap-3">
                  <a
                    href={activeCenter.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Globe2 className="w-4 h-4" />
                    Visit Official Website
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                Select a center
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
