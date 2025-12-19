/*
  Warnings:

  - You are about to drop the column `latitude` on the `TOCIC` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `TOCIC` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TOCIC" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "headName" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL
);
INSERT INTO "new_TOCIC" ("city", "contactEmail", "headName", "id", "name", "state") SELECT "city", "contactEmail", "headName", "id", "name", "state" FROM "TOCIC";
DROP TABLE "TOCIC";
ALTER TABLE "new_TOCIC" RENAME TO "TOCIC";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
