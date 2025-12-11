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

function App() {
  return (
  
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <SidebarComponents></SidebarComponents>
        <main className="w-full">
          <NavBar ></NavBar>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="dashboard">
              <Route path="*" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>

        <Toaster></Toaster>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
