import { PrismaClient } from "../generated/prisma/client.ts";
const prisma = new PrismaClient();

// ----------------------------------------------------
// Get All Centers (Public - for Map/Directory)
// ----------------------------------------------------
export const getAllCenters = async (req, res) => {
  try {
    const centers = await prisma.tOCIC.findMany({
      include: {
        _count: {
          select: { projects: true }, // Count total projects per center
        },
      },
      orderBy: { name: "asc" },
    });
    res.json(centers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch centers" });
  }
};

// ----------------------------------------------------
// Get Single Center by ID (with all projects)
// ----------------------------------------------------
export const getCenterById = async (req, res) => {
  try {
    const { id } = req.params;

    const center = await prisma.tOCIC.findUnique({
      where: { id },
      include: {
        projects: {
          where: { status: "APPROVED" }, // Only show approved projects publicly
        },
        users: {
          select: { id: true, email: true, role: true }, // Don't expose passwords
        },
      },
    });

    if (!center) {
      return res.status(404).json({ error: "Center not found" });
    }

    res.json(center);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch center details" });
  }
};

// ----------------------------------------------------
// Get Center Statistics (For Admin Dashboard)
// ----------------------------------------------------
export const getCenterStats = async (req, res) => {
  try {
    const stats = await prisma.tOCIC.findMany({
      select: {
        id: true,
        name: true,
        state: true,
        city: true,
        _count: {
          select: {
            projects: true,
            users: true,
          },
        },
        projects: {
          select: {
            fundsSanctioned: true,
            fundsUtilized: true,
          },
        },
      },
    });

    // Calculate fund totals per center
    const enrichedStats = stats.map((center) => ({
      id: center.id,
      name: center.name,
      state: center.state,
      city: center.city,
      totalProjects: center._count.projects,
      totalUsers: center._count.users,
      totalFundsSanctioned: center.projects.reduce(
        (sum, p) => sum + p.fundsSanctioned,
        0
      ),
      totalFundsUtilized: center.projects.reduce(
        (sum, p) => sum + p.fundsUtilized,
        0
      ),
    }));

    res.json(enrichedStats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
};
