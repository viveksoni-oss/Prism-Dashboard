import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn";
import { Toaster } from "react-hot-toast";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import SidebarComponents from "./components/SidebarComponents";
import { AuthProvider } from "./components/login/AuthContext.jsx";
import ProtectedRoute from "./components/login/ProtectedRoute.jsx";
import TocicDetails from "./Pages/Tocic-center";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <ProtectedRoute>
            <SidebarComponents></SidebarComponents>
          </ProtectedRoute>
          <main className="w-full">
            <NavBar></NavBar>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              ></Route>

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

          <Toaster></Toaster>
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
