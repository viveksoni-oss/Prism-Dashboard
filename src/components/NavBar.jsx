import React from "react";
import AvatarComponent from "./AvatarComponent";
import { ModeToggle } from "./ThemeButton";
// import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="p-4  flex items-center justify-between">
      <div>collapaseButton</div>

      <div className="flex items-center gap-4">
        {/* <Link href="/"> DashBoard</Link> */}
        <ModeToggle></ModeToggle>
        <AvatarComponent></AvatarComponent>
      </div>
    </nav>
  );
}

export default NavBar;
