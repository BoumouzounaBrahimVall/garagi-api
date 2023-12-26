/*
  Warnings:

  - You are about to drop the column `Kilometrage` on the `Vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Consultation` ADD COLUMN `killometrageConsulte` DOUBLE NULL;

-- AlterTable
ALTER TABLE `Vehicle` DROP COLUMN `Kilometrage`,
    ADD COLUMN `KilometrageActuel` DOUBLE NULL;
