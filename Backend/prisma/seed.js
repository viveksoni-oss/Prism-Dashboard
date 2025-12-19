// prisma/seed.js
import { faker } from "@faker-js/faker";
import { PrismaClient } from "../src/generated/prisma/client.ts";
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();
const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  DSIR_ADMIN: "DSIR_ADMIN",
  TOCIC_ADMIN: "TOCIC_ADMIN",
  GUEST: "GUEST",
};

const DOMAINS = [
  "GREEN_TECHNOLOGY",
  "HEALTHCARE",
  "AGRITECH",
  "CLEAN_ENERGY",
  "SMART_MATERIALS",
];

async function main() {
  // Clean existing data for a fresh seed
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();
  await prisma.tOCIC.deleteMany();

  // 1) Create ~10 TOCIC centers
  const centers = [];
  for (let i = 0; i < 10; i++) {
    const center = await prisma.tOCIC.create({
      data: {
        name: `TOCIC ${faker.location.city()} IIT`,
        state: faker.location.state(),
        city: faker.location.city(),
        headName: faker.person.fullName(),
        contactEmail: faker.internet.email(),
      },
    });
    centers.push(center);
  }

  // 2) Create Users
  // 1 Super Admin, 2 DSIR Admins, 10 TOCIC Admins, some Guests
  await prisma.user.create({
    data: {
      email: "superadmin@dsir.gov.in",
      password: "password123",
      role: ROLES.SUPER_ADMIN,
    },
  });

  for (let i = 0; i < 2; i++) {
    await prisma.user.create({
      data: {
        email: `dsir_admin${i + 1}@dsir.gov.in`,
        password: "password123",
        role: ROLES.DSIR_ADMIN,
      },
    });
  }

  // TOCIC Admins, one per center
  for (const center of centers) {
    await prisma.user.create({
      data: {
        email: `admin.${center.city
          .toLowerCase()
          .replace(/\s+/g, "")}@tocic.in`,
        password: "password123",
        role: ROLES.TOCIC_ADMIN,
        tocicId: center.id,
      },
    });
  }

  // Some Guests
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: "password123",
        role: ROLES.GUEST,
      },
    });
  }

  // 3) Create ~100 Projects spread across centers
  const statuses = ["DRAFT", "PENDING_APPROVAL", "APPROVED", "REJECTED"];

  let totalProjects = 0;
  for (const center of centers) {
    const projectsPerCenter = 10; // 10 * 10 centers = 100 projects
    for (let i = 0; i < projectsPerCenter; i++) {
      const status = faker.helpers.arrayElement(statuses);
      const fundsSanctioned = faker.number.float({
        min: 100000,
        max: 2000000,
        precision: 1000,
      });
      const fundsUtilized = faker.number.float({
        min: 0,
        max: fundsSanctioned,
        precision: 1000,
      });

      await prisma.project.create({
        data: {
          title: `${faker.commerce.productName()} Innovation`,
          domain: faker.helpers.arrayElement(DOMAINS),
          status,
          fundsSanctioned,
          fundsUtilized,
          innovatorName: faker.person.fullName(),
          tocicId: center.id,
        },
      });

      totalProjects++;
    }
  }

  console.log(
    `Seeded ${centers.length} centers, users, and ${totalProjects} projects.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
