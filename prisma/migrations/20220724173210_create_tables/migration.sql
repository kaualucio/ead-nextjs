-- CreateTable
CREATE TABLE `Training` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `totalTime` INTEGER NOT NULL,
    `totalResources` INTEGER NOT NULL,
    `certified` BOOLEAN NOT NULL,

    UNIQUE INDEX `Training_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Educator` (
    `id` VARCHAR(191) NOT NULL,
    `trainingId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `urlImage` VARCHAR(191) NOT NULL,
    `about` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Educator_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Topic` (
    `id` VARCHAR(191) NOT NULL,
    `trainingId` VARCHAR(191) NOT NULL,
    `educatorId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `totalVideos` INTEGER NOT NULL,
    `totalTime` INTEGER NOT NULL,
    `resources` JSON NOT NULL,

    UNIQUE INDEX `Topic_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` VARCHAR(191) NOT NULL,
    `topicId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `urlVideo` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `watched` BOOLEAN NOT NULL,
    `resources` JSON NOT NULL,

    UNIQUE INDEX `Class_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
