import React from "react";
import {

  LogIn, // Added Icon
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/GradientText";
import FloatingLines from "@/components/FloatingLines";
import { useNavigate } from "react-router-dom";
import Hero7 from "./Hero";
import Cards from "./Cards";
import GalleryAndNews from "./GalleryAndNews";
import SuccessStoryCarousel from "./SuccessStory";
import Map from "./Map";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="ml-2 ">
      <section className="header justify-items-center">
        <nav className=" border-b ">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 items-center ">
                <img
                  src="logos/emblem-dark.png"
                  alt="Logo 1"
                  className="h-12 object-contain "
                />
                <img
                  src="/logos/G.20.png"
                  alt="Logo 2"
                  className="h-12 object-contain grayscale "
                />
                <img
                  src="/logos/azadi.jpg"
                  alt="Logo 3"
                  className="h-12 object-contain "
                />
                <img
                  src="/logos/swach-bharat.png"
                  alt="Logo 4"
                  className="h-12 object-contain "
                />
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="navbar">
        <nav className=" border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Left Links */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Reusable Nav Button */}
                {["Prism Innovation", "Tocic Centers", "Others"].map((item) => (
                  <Button
                    key={item}
                    onClick={() => navigate("/login")}
                    variant="ghost"
                    className="
                      group
                      flex items-center gap-1
                      text-slate-700
                      hover:text-sky-600
                      font-medium
                      transition-all duration-300
                      hover:bg-white!
                    "
                  >
                    <span
                      className="
                        relative
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0
                        after:bg-sky-600
                        after:transition-all after:duration-300
                        group-hover:after:w-full
                      "
                    >
                      {item}
                    </span>
                    <ExternalLink className="h-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                ))}
              </div>

              {/* Right Login */}
              <div className="flex justify-start md:justify-end">
                <Button
                  onClick={() => navigate("/login")}
                  variant="ghost"
                  className="
              group
              flex items-center gap-2
              text-red-500
              hover:text-sky-600
              font-medium
              transition-all duration-300"
                >
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-600 after:transition-all after:duration-300 group-hover:after:w-full">
                    Log in
                  </span>
                  <LogIn className="h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <Hero7 />
      <Cards />
      <GalleryAndNews />
      <SuccessStoryCarousel />
      <Map />
    </div>
  );
}
export default Home;
