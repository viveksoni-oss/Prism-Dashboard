import React from "react";
import {
  LogIn,
  ArrowUpRight,
  Menu,
  LayoutDashboard,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "@/context/AuthContext";

// --- Components defined outside to prevent re-renders ---

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white/80 py-3 backdrop-blur-md dark:bg-slate-950/80 sticky top-0 z-40 md:static">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile: Flex Column | Desktop: 3-Column Grid for True Centering */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:items-center">
          
          {/* LEFT: Government Emblem */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.dsir.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/logos/emblem-dark.png"
                alt="Satyamev Jayate"
                className="h-16 w-auto object-contain md:h-20"
              />
            </a>
          </div>

          {/* CENTER: PRISM Title (Truly Centered) */}
          <div
            className="text-center cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              PRISM Pulse Connect
            </h1>
          </div>

          {/* RIGHT: Campaign Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:justify-end">
            {[
              { src: "/logos/G.20.png", alt: "G20 India", href: "https://www.g20.in/" },
              { src: "/logos/azadi.jpg", alt: "Azadi Ka Amrit Mahotsav", href: "https://amritmahotsav.nic.in/" },
              { src: "/logos/swach-bharat.png", alt: "Swachh Bharat", href: "https://swachhbharatmission.gov.in/" },
            ].map((logo, idx) => (
              <a
                key={idx}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="group relative"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain transition-all duration-200 group-hover:brightness-110 group-hover:-translate-y-0.5 md:h-12"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const NavBar = ({ user, dashboardInfo, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", route: "/" },
    ...(user && dashboardInfo
      ? [{ label: dashboardInfo.label, route: dashboardInfo.route, icon: LayoutDashboard }]
      : []),
    { label: "About PRISM", href: "https://www.dsir.gov.in/promoting-innovations-individuals-start-ups-and-msmes-prism" },
    { label: "TOCIC Outreach", route: "/tocic" },
    { label: "Media", route: "/YtPage" },
    { label: "How to Apply", route: "/apply" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-800 bg-blue-950 shadow-xl backdrop-blur-xl">
      <div className="mx-auto container flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-blue-100 hover:bg-blue-900/50">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.route === location.pathname;
            
            return item.route ? (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => navigate(item.route)}
                className={`relative h-10 px-4 text-sm font-medium transition-all duration-200
                  ${isActive ? "text-white bg-blue-900/40" : "text-blue-200 hover:text-white hover:bg-blue-900/30"}
                `}
              >
                <span className="flex items-center gap-2">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </span>
                {/* Active Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                )}
              </Button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:bg-blue-900/30 hover:text-white"
              >
                {item.label}
                <ArrowUpRight className="h-3 w-3 opacity-70" />
              </a>
            );
          })}
        </div>

        {/* User / Auth Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 rounded-full p-0 hover:bg-blue-900/50">
                  <Avatar className="h-9 w-9 border-2 border-blue-400/50 transition-colors hover:border-blue-400">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-blue-800 text-blue-100 font-bold">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name || "User"}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {dashboardInfo && (
                  <DropdownMenuItem onClick={() => navigate(dashboardInfo.route)}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>{dashboardInfo.label}</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 focus:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              size="sm"
              className="gap-2 bg-white text-blue-950 hover:bg-blue-50 font-bold shadow-md hover:shadow-lg transition-all"
            >
              Log in
              <LogIn className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

// --- Main Layout Component ---

export default function Layout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Dashboard Route Logic
  const getDashboardRoute = (role) => {
    switch (role) {
      case "ADMIN":
        return { label: "DSIR Dashboard", route: "/dashboard/dsir" };
      case "TOCIC_MANAGER":
        return { label: "TOCIC Dashboard", route: "/dashboard/tocic" };
      default:
        return { label: "My Dashboard", route: "/dashboard" };
    }
  };

  const dashboardInfo = user ? getDashboardRoute(user.role) : null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      <NavBar 
        user={user} 
        dashboardInfo={dashboardInfo} 
        handleLogout={handleLogout} 
      />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
