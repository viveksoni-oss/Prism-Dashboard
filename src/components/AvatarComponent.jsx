import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { LogOut, User } from "lucide-react";
import { Link , useNavigate } from "react-router-dom";
import { useAuth } from "@/components/login/AuthContext"; 



import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function AvatarComponent() {
  const { logout } = useAuth();
const navigate = useNavigate();

const handleLogout = () => {
  logout();             // removes localStorage + updates context
  navigate("/login");   // redirect
};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleLogout}>
          <LogOut /> Log Out
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarComponent;
