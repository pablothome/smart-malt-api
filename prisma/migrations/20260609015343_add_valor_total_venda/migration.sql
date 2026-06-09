/*
  Warnings:

  - Made the column `valorTotal` on table `Venda` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Venda" ALTER COLUMN "valorTotal" SET NOT NULL;
