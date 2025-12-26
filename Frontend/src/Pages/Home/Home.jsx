import React from "react";

import { useNavigate } from "react-router-dom";
import PrismHero from "./Hero";
import GalleryAndNews from "./GalleryAndNews";
import SuccessStoryCarousel from "./SuccessStory";
import Map from "./Map";
import { GradientBackground } from "@/components/gradient-background";
import InnovationStats from "./InnovationStats";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="  mx-auto text-foreground">
      <GradientBackground />
      <PrismHero></PrismHero>
      <div className="space-y-12">
        <InnovationStats></InnovationStats>
        <SuccessStoryCarousel />
        <GalleryAndNews />
        <Map />
      </div>
    </div>
  );
}
export default Home;
