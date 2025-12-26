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
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "@/context/AuthContext"; // Ensure correct path to your AuthProvider

export default function Layout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Using real Auth Context

  // Dashboard Route Logic based on user.role from backend
  const getDashboardRoute = (role) => {
    switch (role) {
      case "ADMIN": // Assuming 'ADMIN' maps to DSIR based on your logic
        return { label: "DSIR Dashboard", route: "/dashboard/dsir" };
      case "TOCIC_MANAGER":
        return { label: "TOCIC Dashboard", route: "/dashboard/tocic" };
      default:
        return { label: "My Dashboard", route: "/dashboard/applicant" };
    }
  };

  const dashboardInfo = user ? getDashboardRoute(user.role) : null;

  const navItems = [
    { label: "Home", route: "/" },
    // Show Dashboard link only if logged in
    ...(user && dashboardInfo
      ? [
          {
            label: dashboardInfo.label,
            route: dashboardInfo.route,
            icon: LayoutDashboard,
          },
        ]
      : []),
    {
      label: "About PRISM",
      href: "https://www.dsir.gov.in/promoting-innovations-individuals-start-ups-and-msmes-prism",
    },
    { label: "TOCIC Outreach", route: "/tocic" },
    { label: "Media", route: "/YtPage" },
    { label: "How to Apply", route: "/apply" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const Header = () => {
    return (
      <header className="border-b bg-white/50 py-3 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* LEFT: Government Emblem Only */}
            <div className="flex shrink-0">
              <a
                href="https://www.dsir.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/logos/emblem-dark.png"
                  alt="Satyamev Jayate"
                  className="h-16 w-auto object-contain transition-transform hover:scale-105 md:h-20"
                />
              </a>
            </div>

            {/* CENTER: PRISM & Ministry Text */}
            <div
              className="text-center flex-1 mx-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
                Ministry of Science and Technology
              </h3>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl bg-linear-to-r from-blue-950 to-blue-700 bg-clip-text">
                PRISM Pulse Connect
              </h1>
            </div>

            {/* RIGHT: 3 Campaign Logos (G20, Azadi, Swachh Bharat) */}
            <div className="flex shrink-0 flex-wrap justify-center items-center gap-4 md:gap-5">
              <a
                href="https://www.g20.in/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <img
                  src="/logos/G.20.png"
                  alt="G20 India"
                  className="h-10 w-auto object-contain transition-all duration-200 group-hover:brightness-110 md:h-12"
                />
              </a>
              <a
                href="https://amritmahotsav.nic.in/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <img
                  src="/logos/azadi.jpg"
                  alt="Azadi Ka Amrit Mahotsav"
                  className="h-10 w-auto object-contain transition-all duration-200 group-hover:brightness-110 md:h-12"
                />
              </a>
              <a
                href="https://swachhbharatmission.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <img
                  src="/logos/swach-bharat.png"
                  alt="Swachh Bharat"
                  className="h-10 w-auto object-contain transition-all duration-200 group-hover:brightness-110 md:h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  const NavBar = () => {
    return (
      <nav className="sticky top-0 z-50 w-full border-b border-blue-800 bg-blue-950 shadow-lg backdrop-blur-xl">
        <div className="mx-auto container flex h-14 items-center justify-between px-4 md:px-6">
          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-blue-100 hover:bg-blue-900 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* CENTER: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.route ? (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => navigate(item.route)}
                  className={`relative text-sm font-medium transition-all duration-200
                    text-blue-100 hover:text-white hover:bg-blue-900/50 group`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.label}
                  </span>
                  {/* Underline Animation */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-900/50 hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              )
            )}
          </div>

          {/* RIGHT: Auth Section (Profile or Login) */}
          <div className="flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full hover:bg-blue-900 focus-visible:ring-0"
                  >
                    <Avatar className="h-9 w-9 border-2 border-blue-400">
                      {/* Optional: Use user.avatar if available */}
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-blue-800 text-blue-100 font-bold">
                        {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name || "User"}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {/* Dashboard Link in Menu */}
                  {dashboardInfo && (
                    <DropdownMenuItem
                      onClick={() => navigate(dashboardInfo.route)}
                    >
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
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600 focus:bg-red-50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                size="sm"
                className="gap-2 bg-white text-blue-950 hover:bg-blue-50 font-bold transition-all shadow-md hover:shadow-lg"
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
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* =========================================
          TOP HEADER (Logos & Branding)
          ========================================= */}
      <Header></Header>
      {/* =========================================
          STICKY NAVBAR (Deep Blue Theme)
          ========================================= */}
      <NavBar></NavBar>
      {/* =========================================
          MAIN CONTENT
          ========================================= */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
