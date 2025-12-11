import React from "react";
import AvatarComponent from "./AvatarComponent";
import { ModeToggle } from "./ThemeButton";
import { SidebarTrigger } from "./ui/sidebar";
// import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="sticky z-30 top-0 p-4 border-b shadow-md mb-2 flex items-center justify-between">
      <div>
        <SidebarTrigger />
      </div>

      <div className="flex items-center gap-4">
        {/* <Link href="/"> DashBoard</Link> */}
        <ModeToggle></ModeToggle>
        <AvatarComponent></AvatarComponent>
      </div>
    </nav>
  );
}

export default NavBar;
