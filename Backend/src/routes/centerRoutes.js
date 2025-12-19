import express from "express";
import {
  getAllCenters,
  getCenterById,
  getCenterStats,
} from "./../controllers/centerControllers.js";
import { verifyToken, requireRole } from "../middleware/authMiddleware.js";

import { ROLES } from "./../utils/roles.js";

const router = express.Router();

// Public Routes (No authentication required)
router.get("/", getAllCenters); // List all centers
router.get("/:id", getCenterById); // Get single center details

// Protected Routes (Admin-only statistics)
router.get(
  "/stats/all",
  verifyToken,
  requireRole([ROLES.DSIR_ADMIN, ROLES.SUPER_ADMIN]),
  getCenterStats
);

export default router;
