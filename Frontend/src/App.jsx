import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route, Routes, Outlet } from "react-router-dom"; // Added Outlet
import Login from "./Pages/LogIn/Login";
import { Toaster } from "react-hot-toast";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import SidebarComponents from "./components/SidebarComponents";
import { AuthProvider } from "@/Context/AuthContext.jsx";
import TocicDetails from "./Pages/Tocic-center";
import ApplicationsPage from "./Pages/Applications/ApplicationsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PrismVideoPage from "./Pages/MediaPage/YtPage";
import Layout from "./Pages/Home/Layout";
import PrismApplyPage from "./Pages/Home/HowToApply";
import TocicInfo from "./Pages/TocicInfo/TocicInfo";
import { useScrollToTop } from "./hooks/useScrollToTop";
import CreativeIndia from "./Pages/CreativeIndia/CreativeIndia";
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
  const scrolltop = useScrollToTop();
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* Note: SidebarProvider is now inside DashboardLayout */}
        {scrolltop}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/media" element={<PrismVideoPage />} />
            <Route path="/tocic-info" element={<TocicInfo />} />
            <Route path="/how-to-apply" element={<PrismApplyPage />} />

            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/creativeIndia" element={<CreativeIndia/>} />
          </Route>

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
