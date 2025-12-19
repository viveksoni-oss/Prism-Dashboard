import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Check for existing session on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 2. Login Function
  const login = async (email, password) => {
    try {
      const response = await api.post("/api/auth/login", { email, password });

      const { token, user } = response.data;

      // Save to storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update state
      setUser(user);
      return { success: true };
    } catch (error) {
      console.error("Login failed", error);
      return {
        success: false,
        message: error.response?.data?.error || "Login failed",
      };
    }
  };

  // 3. Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    // Optional: Redirect to login handled by ProtectedRoute
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom Hook for easy access
export const useAuth = () => useContext(AuthContext);
