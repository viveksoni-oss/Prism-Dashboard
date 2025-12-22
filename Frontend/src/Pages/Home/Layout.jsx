import React from "react";
import { LogIn, ExternalLink, MoveUpRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Prism Innovation",
      href: "https://www.dsir.gov.in/promoting-innovations-individuals-start-ups-and-msmes-prism",
    },
    {
      label: "Tocic Outreach",
      route: "/tocic",
    },
    {
      label: "Media",
      route: "/YtPage",
    },
  ];

  return (
    <div className="ml-2">
      {/* HEADER */}
      <section className="header">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-evenly gap-4 items-center">
              <img
                src="/logos/emblem-dark.png"
                className="h-12 object-contain"
              />
              <img src="/logos/G.20.png" className="h-12 object-contain" />
              <img src="/logos/azadi.jpg" className="h-12 object-contain" />
              <img
                src="/logos/swach-bharat.png"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </nav>
      </section>

      {/* NAVBAR */}
      <section className="navbar">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto py-3 flex justify-between items-center flex-wrap gap-4">
            {/* LEFT LINKS */}
            <div className="flex gap-4">
              {navItems.map((item) =>
                item.route ? (
                  // INTERNAL LINK
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={() => navigate(item.route)}
                    className="group relative text-slate-700 hover:text-sky-600"
                  >
                    <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-600 after:transition-all group-hover:after:w-full">
                      {item.label}
                    </span>
                  </Button>
                ) : (
                  // EXTERNAL LINK
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-slate-700 hover:text-sky-600 flex items-center gap-1 px-4 py-2"
                  >
                    <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-600 after:transition-all group-hover:after:w-full">
                      {item.label}
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                )
              )}
            </div>

            {/* LOGIN */}
            <Button
              onClick={() => navigate("/login")}
              variant="ghost"
              className="text-red-500 hover:text-sky-600 flex items-center gap-2"
            >
              Log in <LogIn className="h-4" />
            </Button>
          </div>
        </nav>
      </section>

      {/* PAGE CONTENT */}
      <Outlet />

      <Footer />
    </div>
  );
}
