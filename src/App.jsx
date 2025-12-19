import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/index";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes, Outlet } from "react-router-dom"; // Added Outlet
import Login from "./Pages/LogIn";
import { Toaster } from "react-hot-toast";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import SidebarComponents from "./components/SidebarComponents";
import { AuthProvider } from "@/Context/AuthContext.jsx";
import TocicDetails from "./Pages/Tocic-center";
import ApplicationsPage from "./Pages/Applications/ApplicationsPage";
import ProtectedRoute from "./components/ProtectedRoute";

// --- LAYOUT COMPONENT ---
// This wrapper ensures Sidebar and Navbar only show for dashboard pages
const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <SidebarComponents />
        <SidebarInset className="flex flex-1 flex-col">
          <NavBar />
          <main className="flex-1 w-full p-4">
            {" "}
            {/* Added padding for consistency */}
            <Outlet />{" "}
            {/* Renders the child route (Dashboard, Applications, etc.) */}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

function App() {
  // Get current location
  const location = useLocation();

  // Define which paths should HIDE the sidebar/header
  // Currently checking if path is exactly "/"
  const isLandingPage = location.pathname === "/";

  // Optional: If you also want to hide it on login, use this instead:
  // const isFullScreen = location.pathname === "/" || location.pathname === "/login";

  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          {/* Sidebar + content side by side */}
          <div className="flex min-h-screen w-full bg-background">
            {/* LEFT: sidebar - Only render if NOT on landing page */}
            {!isLandingPage && <SidebarComponents />}

            {/* RIGHT: navbar + routes, inset by sidebar */}
            <SidebarInset className="flex flex-1 flex-col">
              {/* Navbar - Only render if NOT on landing page */}
              {!isLandingPage && <NavBar />}

              <main className="flex-1 w-full">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/tocic-center"
                    element={
                      <ProtectedRoute>
                        <TocicDetails />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
            </SidebarInset>
          </div>

        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
