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
import Footer from "./Footer";
import PrismVideoPage from "./YtPage";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-background  mx-auto text-foreground">
      <Hero7 />

      {/* Rest of home content */}
      <div className="-mt-10 space-y-12">
        <Cards />
        <GalleryAndNews />
        <SuccessStoryCarousel />
        <Map />
      </div>
    </div>
  );
}
export default Home;
