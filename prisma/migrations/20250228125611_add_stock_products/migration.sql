/*
  Warnings:

  - Added the required column `customerPhone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "customerPhone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrderProduct" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "stock" DOUBLE PRECISION NOT NULL DEFAULT 0;
