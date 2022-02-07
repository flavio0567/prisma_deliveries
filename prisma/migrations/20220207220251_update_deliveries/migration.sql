/*
  Warnings:

  - You are about to drop the column `password` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `deliveryman` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `deliveryman` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[deliveryman_username]` on the table `deliveryman` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_password` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_username` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryman_password` to the `deliveryman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryman_username` to the `deliveryman` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "deliveryman_username_key";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "password",
ADD COLUMN     "client_password" TEXT NOT NULL,
ADD COLUMN     "client_username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "deliveryman" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "deliveryman_password" TEXT NOT NULL,
ADD COLUMN     "deliveryman_username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_deliveryman_username_key" ON "deliveryman"("deliveryman_username");
