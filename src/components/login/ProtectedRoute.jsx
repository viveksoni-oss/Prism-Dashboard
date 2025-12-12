// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
