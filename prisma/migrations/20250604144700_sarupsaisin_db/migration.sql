-- AlterTable
ALTER TABLE `user` ADD COLUMN `dateOfBirth` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `userPurchaedLevel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `jlptLevel` ENUM('JLPTN5', 'JLPTN4', 'JLPTN3', 'JLPTN2', 'JLPTN1') NOT NULL,
    `purchaseDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jpltLevel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` ENUM('JLPTN5', 'JLPTN4', 'JLPTN3', 'JLPTN2', 'JLPTN1') NOT NULL,
    `freeTestId` INTEGER NULL,

    UNIQUE INDEX `jpltLevel_level_key`(`level`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jpltTest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jlptLevelId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jlptTestId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `choice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionId` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `explanation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionId` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `explanation_questionId_key`(`questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userPurchaedLevel` ADD CONSTRAINT `userPurchaedLevel_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jpltTest` ADD CONSTRAINT `jpltTest_jlptLevelId_fkey` FOREIGN KEY (`jlptLevelId`) REFERENCES `jpltLevel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_jlptTestId_fkey` FOREIGN KEY (`jlptTestId`) REFERENCES `jpltTest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `choice` ADD CONSTRAINT `choice_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `explanation` ADD CONSTRAINT `explanation_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
