import React, { useEffect, useState } from "react";
import AvatarComponent from "./AvatarComponent";
import { ModeToggle } from "./ThemeButton";
import { SidebarTrigger } from "./ui/sidebar";
import ProtectedRoute from "./login/ProtectedRoute";
import { Button } from "./ui/button";

function NavBar() {
  const [dashboardType, setDashboardType] = useState("DSIR");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedType = window.localStorage.getItem("type");
    if (storedType === "DSIR" || storedType === "TOCIC") {
      setDashboardType(storedType);
    }
  }, []);

  const handleSwitch = (type) => {
    setDashboardType(type);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("type", type);
    }
  };

  return (
    <nav className="sticky top-0 z-30 p-4 border-b shadow-md mb-2 flex items-center bg-white dark:bg-background justify-between">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <Button
          variant="ghost"
          size="sm"
          className="font-semibold text-base hidden sm:inline-flex"
        >
          Dashboard
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {/* DSIR / TOCIC switch */}
        <div className="hidden sm:flex items-center gap-1"></div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            // quick action
          }}
        >
          + New
        </Button>
        <ModeToggle />
        <AvatarComponent />
      </div>
    </nav>
  );
}

export default NavBar;
