import React, { useState, useMemo } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Building2,
  Search,
  Globe2,
  ChevronRight,
  User,
  Navigation,
} from "lucide-react";

// --- Data ---
const tocicCenters = [
  // North Zone
  {
    id: "n1",
    name: "SIIC - IIT Kanpur",
    institution: "Indian Institute of Technology Kanpur",
    zone: "North",
    city: "Kanpur",
    state: "Uttar Pradesh",
    contactPerson: "Dr. Amitabha Bandyopadhyay / Prof. Deepu Philip",
    phone: "+91-512-259-7979",
    email: "siic@iitk.ac.in",
    address:
      "Room No. S-2, Bio-incubator, SIIC, IIT Kanpur, Kalyanpur, Kanpur-208016",
    website: "https://siicincubator.com",
  },
  {
    id: "n2",
    name: "CSIR-CSIO",
    institution: "Central Scientific Instruments Organisation",
    zone: "North",
    city: "Chandigarh",
    state: "Chandigarh",
    contactPerson: "Mr. Narinder Singh Jassal",
    phone: "+91-172-2672389",
    email: "nsjassal@csio.res.in",
    address: "Sector 30-C, Chandigarh - 160 030",
    website: "https://www.csio.res.in",
  },
  {
    id: "n3",
    name: "CTAE Udaipur",
    institution: "College of Technology and Engineering",
    zone: "North",
    city: "Udaipur",
    state: "Rajasthan",
    contactPerson: "Dr. Sunil Joshi (Dean)",
    phone: "0294-2470837",
    email: "deanctae@mpuat.ac.in",
    address: "University Campus, MPUAT, Udaipur - 313001, Rajasthan",
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
    contactPerson: "Dr. Parthasarathi Naidu V",
    phone: "+91-80-25273351",
    email: "vpsnaidu@nal.res.in",
    address: "Old Airport Road, Kodihalli, Bengaluru - 560017",
    website: "https://www.nal.res.in",
  },
  {
    id: "s2",
    name: "SPMVV Tirupati",
    institution: "Sri Padmavati Mahila Visvavidyalayam",
    zone: "South",
    city: "Tirupati",
    state: "Andhra Pradesh",
    contactPerson: "Prof. S. Jyothi (TOCIC Coordinator)",
    phone: "+91-877-2284588",
    email: "tocicspmvv@gmail.com",
    address:
      "Padmavati Nagar, Near West Railway Station, Tirupati, Andhra Pradesh 517502",
    website: "https://www.spmvv.ac.in",
  },
  {
    id: "s3",
    name: "University of Madras",
    institution: "University of Madras",
    zone: "South",
    city: "Chennai",
    state: "Tamil Nadu",
    contactPerson: "Registrar / Innovation Cell",
    phone: "044-25399422",
    email: "registrar@unom.ac.in",
    address: "Chepauk, Chennai, Tamil Nadu 600005",
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
    contactPerson: "Dr. Mrinal Pal (Nodal Officer)",
    phone: "+91-33-2473-3496",
    email: "palm@cgcri.res.in",
    address: "196, Raja S.C. Mullick Road, Kolkata – 700 032",
    website: "https://www.cgcri.res.in",
  },
  {
    id: "e2",
    name: "CSIR-CMERI",
    institution: "Central Mechanical Engineering Research Institute",
    zone: "East",
    city: "Durgapur",
    state: "West Bengal",
    contactPerson: "TOCIC Cell / Head BDG",
    phone: "0343-6510232",
    email: "tuc_cmeri@cmeri.res.in",
    address: "Room # BA 125, Main Building, CSIR-CMERI, Durgapur 713209",
    website: "https://www.cmeri.res.in",
  },
  {
    id: "e3",
    name: "IIT Kharagpur",
    institution: "Indian Institute of Technology Kharagpur",
    zone: "East",
    city: "Kharagpur",
    state: "West Bengal",
    contactPerson: "Sponsored Research & Industrial Consultancy (SRIC)",
    phone: "+91-3222-282033",
    email: "dean_sric@iitkgp.ac.in",
    address: "SRIC Office, IIT Kharagpur, Kharagpur, West Bengal - 721302",
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
    contactPerson: "Mission Director",
    phone: "+91-79-232-52197",
    email: "info-btm@gujarat.gov.in",
    address:
      "Block 11, 9th Floor, Udyog Bhavan, Sector 11, Gandhinagar - 382010",
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
    contactPerson: "TIC Coordinator",
    phone: "+91-361-2583191",
    email: "tic@iitg.ac.in",
    address: "Technology Complex, IIT Guwahati, Guwahati-781039, Assam",
    website: "https://iitgtic.com",
  },
  {
    id: "ne2",
    name: "CSIR-NEIST",
    institution: "North East Institute of Science and Technology",
    zone: "North East",
    city: "Jorhat",
    state: "Assam",
    contactPerson: "Director / RPBD Division",
    phone: "+91-376-2370009",
    email: "director@neist.res.in",
    address: "CSIR-NEIST, Jorhat-785006, Assam",
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
      className={`px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wide font-bold border ${
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
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto h-[85vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* === Top Bar (Header) === */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" />
              TOCIC Network Directory
            </h1>
            <p className="text-sm text-slate-500">PRISM Centers across India</p>
          </div>

          {/* Quick Zone Filter in Header */}
          <div className="flex gap-2">
            {["All", "North", "South", "East", "West"].map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  selectedZone === zone
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* === Content Area (Split View) === */}
        <div className="flex flex-1 overflow-hidden">
          {/* --- LEFT: Sidebar List (Inside Container) --- */}
          <aside className="w-full md:w-80 lg:w-96 border-r border-slate-200 bg-slate-50 flex flex-col z-10">
            {/* Search Input */}
            <div className="p-4 border-b border-slate-200 bg-white">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Find center..."
                  className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {filteredCenters.map((center) => (
                <button
                  key={center.id}
                  onClick={() => setActiveCenterId(center.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-200 group relative ${
                    activeCenterId === center.id
                      ? "bg-white border-blue-400 shadow-sm z-10"
                      : "bg-transparent border-transparent hover:bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex justify-between items-start mb-0.5">
                    <span
                      className={`text-sm font-bold truncate pr-2 ${
                        activeCenterId === center.id
                          ? "text-blue-700"
                          : "text-slate-700"
                      }`}
                    >
                      {center.name}
                    </span>
                    {activeCenterId === center.id && (
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate">
                    <MapPin className="w-3 h-3" />
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
                backgroundSize: "24px 24px",
              }}
            ></div>

            {activeCenter ? (
              <div className="relative z-10 p-8 max-w-3xl mx-auto animate-in fade-in duration-300">
                {/* Title Block */}
                <div className="mb-8">
                  <ZoneBadge zone={activeCenter.zone} />
                  <h2 className="text-3xl font-black text-slate-900 mt-4 mb-2">
                    {activeCenter.name}
                  </h2>
                  <p className="text-xl text-slate-600 font-medium">
                    {activeCenter.institution}
                  </p>
                </div>

                {/* Info Cards Grid */}
                <div className="grid gap-6">
                  {/* Contact Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4" /> Point of Contact
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                        {activeCenter.contactPerson.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {activeCenter.contactPerson}
                        </p>
                        <p className="text-slate-500 text-sm">
                          Coordinator / Nodal Officer
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 pt-4 border-t border-slate-100">
                      <a
                        href={`tel:${activeCenter.phone}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-mono">
                          {activeCenter.phone}
                        </span>
                      </a>
                      <a
                        href={`mailto:${activeCenter.email}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-slate-400" />
                        <span className="text-sm">{activeCenter.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-4">
                      <Navigation className="w-4 h-4" /> Address
                    </h3>
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                      <p className="text-slate-800 leading-relaxed">
                        {activeCenter.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 flex gap-4">
                  <a
                    href={activeCenter.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
                  >
                    Visit Official Website
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400">
                Select a center
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
