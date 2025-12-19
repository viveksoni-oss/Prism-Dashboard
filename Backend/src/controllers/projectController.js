import { PrismaClient } from "../generated/prisma/client.ts";
const prisma = new PrismaClient();

// ----------------------------------------------------
// 1. PUBLIC: Get Approved Projects (For Maps/Charts)
// ----------------------------------------------------
export const getPublicProjects = async (req, res) => {
  try {
    const { domain, status, search, minFund, maxFund } = req.query;

    let whereClause = {};

    // 1. Domain Filter
    if (domain && domain !== "all") {
      whereClause.domain = domain;
    }

    // 2. Status Filter
    if (status && status !== "all") {
      whereClause.status = status;
    } else {
      // Default behavior: If no status specified, showing all is usually safer for an Admin dashboard.
      // If this is a purely public view, you might restrict this to: whereClause.status = "APPROVED";
    }

    // 3. Search Filter (Title or Innovator)
    if (search) {
      whereClause.OR = [
        { projectTitle: { contains: search, mode: "insensitive" } },
        { innovatorName: { contains: search, mode: "insensitive" } },
      ];
    }

    // 4. Funding Range Filter
    if (minFund || maxFund) {
      whereClause.fundsSanctioned = {};
      if (minFund) whereClause.fundsSanctioned.gte = parseFloat(minFund);
      if (maxFund) whereClause.fundsSanctioned.lte = parseFloat(maxFund);
    }

    const projects = await prisma.project.findMany({
      where: whereClause,
      include: { tocic: true },
      orderBy: { createdAt: "desc" },
    });

    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// ----------------------------------------------------
// 2. TOCIC ADMIN: Create New Project
// ----------------------------------------------------
export const createProject = async (req, res) => {
  try {
    // req.user is populated by verifyToken middleware
    const { tocicId, role } = req.user;

    // Security Check: Only TOCIC admins can create for their OWN center
    if (role === "TOCIC_ADMIN" && req.body.tocicId !== tocicId) {
      return res
        .status(403)
        .json({ error: "You can only add projects to your own center" });
    }

    const newProject = await prisma.project.create({
      data: {
        ...req.body,
        status: "PENDING_APPROVAL", // Always starts as Pending
        tocicId: req.body.tocicId,
      },
    });

    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ----------------------------------------------------
// 3. DSIR ADMIN: Approve/Reject Project
// ----------------------------------------------------
export const updateProjectStatus = async (req, res) => {
  try {
    const { id } = req.params; // Project ID
    const { status } = req.body; // "APPROVED" or "REJECTED"

    if (!["APPROVED", "REJECTED"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const updatedProject = await prisma.project.update({
      where: { id },
      data: { status },
    });

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// ----------------------------------------------------
// 4. SHARED: Get My Projects (For Admin Dashboards)
// ----------------------------------------------------
export const getDashboardProjects = async (req, res) => {
  try {
    const { role, tocicId } = req.user;

    let query = {};

    // DSIR Admin sees ALL projects (Pending, Drafts, Approved)
    if (role === "DSIR_ADMIN" || role === "SUPER_ADMIN") {
      query = {};
    }
    // TOCIC Admin sees ONLY their center's projects
    else if (role === "TOCIC_ADMIN") {
      query = { tocicId: tocicId };
    }

    const projects = await prisma.project.findMany({
      where: query,
      include: { tocic: true },
      orderBy: { updatedAt: "desc" },
    });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
};
//----------------------------------------------------
// 5. PUBLIC: Get Dashboard Stats (New Endpoint)
// ----------------------------------------------------
export const getProjectStats = async (req, res) => {
  try {
    // Run queries in parallel for performance
    const [totalCount, pendingCount, fundAggregate] = await Promise.all([
      prisma.project.count(), // Total Projects
      prisma.project.count({
        where: {
          OR: [{ status: "PENDING_APPROVAL" }, { status: "UNDER_REVIEW" }],
        },
      }),
      prisma.project.aggregate({
        _sum: { fundingAmount: true },
      }),
    ]);

    res.json({
      totalApplications: totalCount,
      pendingReview: pendingCount,
      totalFunds: fundAggregate._sum.fundingAmount || 0,
    });
  } catch (err) {
    console.error("Stats Error:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};
