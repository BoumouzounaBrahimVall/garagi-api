/*
  Warnings:

  - You are about to drop the column `price` on the `Service` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Compte` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Station` DROP FOREIGN KEY `Station_locationId_fkey`;

-- AlterTable
ALTER TABLE `Compte` ADD COLUMN `phoneNumber` VARCHAR(191) NULL,
    MODIFY `isActive` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Consultation` ADD COLUMN `price` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `repairerFullName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Manager` MODIFY `stationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `ProblemDiscovered` MODIFY `title` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'ENDED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `Service` DROP COLUMN `price`,
    MODIFY `title` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Station` MODIFY `locationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Vehicle` MODIFY `Kilometrage` DOUBLE NULL,
    MODIFY `model` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Compte_email_key` ON `Compte`(`email`);

-- AddForeignKey
ALTER TABLE `Station` ADD CONSTRAINT `Station_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
