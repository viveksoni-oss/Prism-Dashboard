import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_change_me";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expect "Bearer <token>"
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Attach user info to the request
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

// Curried function to check specific roles
export const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient Permissions" });
    }
    next();
  };
};
