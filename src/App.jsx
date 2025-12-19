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
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* Note: SidebarProvider is now inside DashboardLayout */}

        <Routes>
          {/* --- PUBLIC ROUTES (No Sidebar/Navbar) --- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* --- PROTECTED ROUTES (With Sidebar/Navbar) --- */}
          <Route element={<DashboardLayout />}>
            {/* 1. Generic Protected Route (Any logged in user) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/tocic-center" element={<TocicDetails />} />
            </Route>

            {/* 2. Example: DSIR Admin Only (If you need role specific pages later) */}
            {/* 
            <Route element={<ProtectedRoute allowedRoles={['DSIR_ADMIN']} />}>
               <Route path="/admin-settings" element={<AdminSettings />} />
            </Route> 
            */}
          </Route>
        </Routes>

        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
