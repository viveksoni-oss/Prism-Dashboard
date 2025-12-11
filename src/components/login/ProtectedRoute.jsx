// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  const logged = typeof isLoggedIn === "boolean"
    ? isLoggedIn
    : localStorage.getItem("isLoggedIn") === "true";

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
