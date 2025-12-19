import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

// allowedRoles can be an array like ['DSIR_ADMIN', 'TOCIC_ADMIN']
export default function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();

  // 1. Not Logged In? -> Go to Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Role Mismatch? -> Go to Unauthorized (or Home)
  // If allowedRoles is provided, check if user has permission
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // Or a dedicated /unauthorized page
  }

  // 3. Authorized -> Render the child routes
  return <Outlet />;
}
