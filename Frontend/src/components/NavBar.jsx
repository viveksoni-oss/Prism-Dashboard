import React from "react";
import AvatarComponent from "./AvatarComponent";
import { ModeToggle } from "./ThemeButton";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useAuth } from "@/Context/AuthContext"; // Import your Auth Context

function NavBar() {
  // 1. Get the user from context
  const { user } = useAuth();

  // 2. Derive the dashboard title safely
  // Assuming user object looks like: { name: "...", role: "DSIR", ... }
  // Fallback to "General" if user or role is missing
  const dashboardTitle = user?.role ? `${user.role} Dashboard` : "Dashboard";

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between border-b bg-background/95 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* LEFT SECTION: Trigger + Title */}
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="hidden h-6 w-px bg-border sm:block" />

        {/* Dynamic Title based on User Role */}
        <h1 className="text-lg font-semibold tracking-tight">
          {dashboardTitle}
        </h1>
      </div>

      {/* RIGHT SECTION: Actions */}
      <div className="flex items-center gap-3">
        {/* Only show 'New' button if user has permission? (Optional enhancement) */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-1 h-8"
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only">New</span>
        </Button>

        <ModeToggle />
        <AvatarComponent />
      </div>
    </nav>
  );
}

export default NavBar;
