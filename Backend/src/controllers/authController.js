import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma/client.ts";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key_change_me";
console.log(JWT_SECRET);
// POST /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // 1. Find User
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    // 2. Check Password (In real app, compare hash. For seeded data, we might check plain text initially)
    // const isValid = await bcrypt.compare(password, user.password);
    const isValid = password === user.password; // ⚠️ Replace with bcrypt.compare for production!

    if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

    // 3. Generate Token
    const token = jwt.sign(
      { id: user.id, role: user.role, tocicId: user.tocicId },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    // 4. Send back info (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    res.json({ token, user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
