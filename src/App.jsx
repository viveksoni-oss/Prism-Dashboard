import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Website/Home";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "./components/ui/sidebar";
import SidebarComponents from "./components/SidebarComponents";
import { AuthProvider, useAuth } from "./components/login/AuthContext.jsx";
import ProtectedRoute from "./components/login/ProtectedRoute.jsx";
import TocicDetails from "./Pages/Tocic-center";

function AppContent() {
  const { isLoggedIn } = useAuth(); // 👈 IMPORTANT

  return (
    <SidebarProvider>
      {/* Show Sidebar ONLY when logged in */}
      {isLoggedIn && <SidebarComponents />}

      <main className="w-full">
        <NavBar />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
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
    </SidebarProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppContent />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
