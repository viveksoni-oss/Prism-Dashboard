import React from "react";
import { LogIn, ArrowUpRight, Menu, Home, HomeIcon } from "lucide-react"; // Added Home icon
import { Button } from "@/components/ui/button";
import { Outlet, useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import Footer from "./Footer";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const navItems = [
    {
      label: "About PRISM",
      href: "https://www.dsir.gov.in/promoting-innovations-individuals-start-ups-and-msmes-prism",
    },
    {
      label: "TOCIC Outreach",
      route: "/tocic",
    },
    {
      label: "Media",
      route: "/YtPage",
    },
    {
      label: "Creative India",
      route: "/YtPage",
    },
    {
      label: "How to Apply",
      route: "/YtPage",
    },
    {
      label: "Home",
      route: "/",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* =========================================
          TOP HEADER (Logos & Branding)
          ========================================= */}
      <header className="border-b bg-white/50 py-4 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* LEFT: Government Emblem */}
            <div className="flex justify-between gap-10 items-center ">
              <a
                href="https://www.india.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/logos/emblem-dark.png"
                  alt="Satyamev Jayate"
                  className="h-16 w-auto object-contain transition-transform hover:scale-105 md:h-20"
                />
              </a>
              <a
                href="https://www.g20.in/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <img
                  src="/logos/G.20.png"
                  alt="G20 India"
                  className="h-12 w-auto object-contain transition-all duration-200 group-hover:brightness-110 md:h-14"
                />
              </a>
            </div>

            {/* CENTER: PRISM & Ministry Text */}
            <div className="text-center">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground md:text-lg">
                Ministry of Science and Technology
              </h3>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-4xl">
                PRISM Pluse Connect
              </h1>
            </div>

            {/* RIGHT: Campaign Logos */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="https://amritmahotsav.nic.in/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <img
                  src="/logos/azadi.jpg"
                  alt="Azadi Ka Amrit Mahotsav"
                  className="h-12 w-auto object-contain transition-all duration-200 group-hover:brightness-110 md:h-14"
                />
              </a>
              <a
                href="https://swachhbharatmission.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <img
                  src="/logos/swach-bharat.png"
                  alt="Swachh Bharat"
                  className="h-12 w-auto object-contain transition-all duration-200 group-hover:brightness-110 md:h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          STICKY NAVBAR
          ========================================= */}
      <nav className="sticky top-0 z-50 w-full border-b backdrop-blur-xl bg-blue-100">
        <div className="container  flex h-12 items-center justify-between px-4 md:px-6">
          {/* LEFT SIDE: Mobile Menu + Home Icon */}
          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* HOME ICON - Only visible if NOT on homepage */}

          {/* CENTER: Desktop Navigation Links */}
          <div className="hidden md:flex items-center ">
            {navItems.map((item) =>
              item.route ? (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => navigate(item.route)}
                  className="relative text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-primary group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </Button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1  rounded-md px-4 py-2 h-[2px] text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )
            )}
          </div>

          {/* RIGHT: Login Button */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/login")}
              size="sm"
              className="group font-bold gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Log in
              <LogIn className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </nav>

      {/* =========================================
          MAIN CONTENT
          ========================================= */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
