import express from "express";
import cors from "cors";
// Node.js native helper
import authRoutes from "./src/routes/authRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import centerRoutes from "./src/routes/centerRoutes.js";
import { PrismaClient } from "./src/generated/prisma/client.ts";
// use `prisma` in your application to read and write data in your DB
import dotenv from "dotenv";
import { ROLES } from "./src/utils/roles.js";
import { requireRole, verifyToken } from "./src/middleware/authMiddleware.js";
dotenv.config();
// console.log(process.env.DATABASE_URL);
const prisma = new PrismaClient();
// 2. Setup Express
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // Login is public
app.use("/api/projects", projectRoutes);
app.use("/api/centers", centerRoutes);

// 2. Protected Route Example (Only DSIR Admins can see this)
app.get(
  "/api/admin/dashboard",
  verifyToken,
  requireRole([ROLES.DSIR_ADMIN]),
  (req, res) => {
    res.json({ message: "Welcome DSIR Admin. Here is the secret data." });
  }
);

// A. Health Check
app.get("/", (req, res) => {
  res.send("DSIR PRISM Backend (Prisma  + SQLite) is Ready!");
});

// B. Public Projects (Approved Only)
app.get("/api/projects/public", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: { status: "APPROVED" },
      include: { tocic: true },
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Db Error" });
  }
});

// C. Seeder (Create a Fake Center & Project)
// app.post("/api/seed", async (req, res) => {
//   try {
//     // 1. Create Center
//     const center = await prisma.tOCIC.create({
//       data: {
//         name: "IIT Bombay TOCIC",
//         state: "Maharashtra",
//         city: "Mumbai",
//         headName: "Prof. K. Patil",
//         contactEmail: "prism@iitb.ac.in",
//       },
//     });

//     // 2. Create a Project for that center
//     const project = await prisma.project.create({
//       data: {
//         title: "Solar Powered Water Purifier",
//         innovatorName: "Vivek Soni",
//         fundsSanctioned: 2000,
//         fundsUtilized: 1000,
//         domain: "GREEN_TECH",
//         status: "APPROVED",
//         tocicId: center.id,
//       },
//     });
//     const user = await prisma.user.create({
//       data: {
//         email: "iitB@gmail.com",
//         password: "password",
//         role: "TOCIC",
//         tocicId: center.id,
//       },
//     });

//     res.json({ message: "Seeded!", center, project, user });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
