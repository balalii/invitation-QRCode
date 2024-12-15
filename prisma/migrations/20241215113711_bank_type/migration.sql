/*
  Warnings:

  - You are about to alter the column `nominal` on the `Donation` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Bank" ALTER COLUMN "accountNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "nominal" SET DATA TYPE INTEGER;
