/*
  Warnings:

  - You are about to drop the column `watched` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `lastTrainingSeen` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Class` DROP COLUMN `watched`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `lastTrainingSeen`;

-- CreateTable
CREATE TABLE `VideoWatched` (
    `id` VARCHAR(191) NOT NULL,
    `topicId` VARCHAR(191) NULL,
    `trainingId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `VideoWatched_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
