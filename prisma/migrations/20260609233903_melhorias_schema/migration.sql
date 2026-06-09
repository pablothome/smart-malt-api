/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Fornecedor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Cliente" ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_cnpj_key" ON "public"."Fornecedor"("cnpj");

-- CreateIndex
CREATE INDEX "Movimentacao_produtoId_idx" ON "public"."Movimentacao"("produtoId");

-- CreateIndex
CREATE INDEX "Venda_clienteId_idx" ON "public"."Venda"("clienteId");
