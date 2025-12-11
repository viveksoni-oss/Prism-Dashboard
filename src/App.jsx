import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./components/login/AuthContext.jsx";
import ProtectedRoute from "./components/login/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protect Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Protect Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
