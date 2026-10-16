/*
  Warnings:

  - A unique constraint covering the columns `[phNum]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phNum` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phNum" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProviderProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "area" TEXT,
    "description" TEXT,
    "experience" INTEGER,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProviderProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceSubcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "ServiceSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProviderService" (
    "id" SERIAL NOT NULL,
    "providerId" INTEGER NOT NULL,
    "subCategoryId" INTEGER NOT NULL,
    "minPrice" INTEGER NOT NULL,
    "maxPrice" INTEGER NOT NULL,

    CONSTRAINT "ProviderService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "providerServiceId" INTEGER NOT NULL,
    "description" TEXT,
    "actualPrice" DECIMAL(65,30),
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "providerId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProviderProfile_userId_key" ON "ProviderProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_name_key" ON "ServiceCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSubcategory_name_categoryId_key" ON "ServiceSubcategory"("name", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderService_providerId_subCategoryId_key" ON "ProviderService"("providerId", "subCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_bookingId_key" ON "Review"("bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "User_phNum_key" ON "User"("phNum");

-- AddForeignKey
ALTER TABLE "ProviderProfile" ADD CONSTRAINT "ProviderProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSubcategory" ADD CONSTRAINT "ServiceSubcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderService" ADD CONSTRAINT "ProviderService_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "ProviderProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderService" ADD CONSTRAINT "ProviderService_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "ServiceSubcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_providerServiceId_fkey" FOREIGN KEY ("providerServiceId") REFERENCES "ProviderService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "ProviderProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
