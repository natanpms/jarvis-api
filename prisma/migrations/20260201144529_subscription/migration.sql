/*
  Warnings:

  - Added the required column `type` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('ENTRETENIMENTO', 'FITNESS', 'ESTUDOS', 'PESSOAL');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "type" "SubscriptionType" NOT NULL;
