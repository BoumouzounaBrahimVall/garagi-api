-- DropForeignKey
ALTER TABLE `Station` DROP FOREIGN KEY `Station_managerId_fkey`;

-- AlterTable
ALTER TABLE `Station` ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT 'Garagi Station',
    MODIFY `managerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Vehicle` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `marque` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Station` ADD CONSTRAINT `Station_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `Manager`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
