import express from "express";
import {
  getPublicProjects,
  createProject,
  updateProjectStatus,
  getDashboardProjects,
  getProjectStats,
} from "../controllers/projectController.js";
import { verifyToken, requireRole } from "../middleware/authMiddleware.js";
import { ROLES } from "../utils/roles.js";

const router = express.Router();

// Public Route (No Login Required)
router.get("/public", getPublicProjects);

// Protected Routes (Login Required)
router.use(verifyToken);

// Get Projects for Dashboard (Logic handles DSIR vs TOCIC view)
router.get("/", getDashboardProjects);
router.get("/stats", getProjectStats);
// Create Project (TOCIC Admins & DSIR Admins)
router.post(
  "/",
  requireRole([ROLES.TOCIC_ADMIN, ROLES.DSIR_ADMIN]),
  createProject
);

// Approve/Reject (DSIR Admin ONLY)
router.patch(
  "/:id/status",
  requireRole([ROLES.DSIR_ADMIN, ROLES.SUPER_ADMIN]),
  updateProjectStatus
);

export default router;
