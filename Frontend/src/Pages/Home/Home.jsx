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
import InnovationStats from "./StatsLayout";
import GalleryAndNews from "./GalleryAndNews";
import SuccessStoryCarousel from "./SuccessStory";
import Map from "./Map";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="  mx-auto text-foreground">
      <div className="space-y-12">
        <InnovationStats />

        <GalleryAndNews />
        <SuccessStoryCarousel />
        <Map />
      </div>
    </div>
  );
}
export default Home;
