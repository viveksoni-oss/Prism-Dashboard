import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Website/Home";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn";
import { Toaster } from "react-hot-toast";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import SidebarComponents from "./components/SidebarComponents";
import { AuthProvider, useAuth } from "./components/login/AuthContext.jsx";
import ProtectedRoute from "./components/login/ProtectedRoute.jsx";
import TocicDetails from "./Pages/Tocic-center";

function AppContent() {
  const { isLoggedIn } = useAuth(); // 👈 IMPORTANT

  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          {/* Sidebar + content side by side */}
          <div className="flex min-h-screen w-full bg-background">
            {/* LEFT: sidebar */}
            <ProtectedRoute>
              <SidebarComponents />
            </ProtectedRoute>

            {/* RIGHT: navbar + routes, inset by sidebar */}
            <SidebarInset className="flex flex-1 flex-col">
              <NavBar />

              <main className="flex-1 w-full">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
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
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
