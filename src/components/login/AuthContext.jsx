import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // read localStorage synchronously at initialization
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") ? true : false;
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || null;
  });

  const login = (userEmail) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", userEmail);
    if (userEmail === "vivek@dsir.com") {
      localStorage.setItem("type", "DSIR");
    }
    if (userEmail === "krishlay@tocic.com") {
      localStorage.setItem("type", "TOCIC");
    }
    setIsLoggedIn(true);
    setEmail(userEmail);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("type");
    setIsLoggedIn(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
