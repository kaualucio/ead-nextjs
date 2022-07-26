/*
  Warnings:

  - A unique constraint covering the columns `[trainingId]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Class` MODIFY `topicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Educator` MODIFY `trainingId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Topic` MODIFY `trainingId` VARCHAR(191) NULL,
    MODIFY `educatorId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Topic_trainingId_key` ON `Topic`(`trainingId`);
