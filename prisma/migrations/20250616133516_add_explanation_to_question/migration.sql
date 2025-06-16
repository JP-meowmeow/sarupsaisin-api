/*
  Warnings:

  - You are about to alter the column `type` on the `question` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(5))`.
  - Added the required column `number` to the `question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `choice` DROP FOREIGN KEY `choice_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `explanation` DROP FOREIGN KEY `explanation_questionId_fkey`;

-- AlterTable
ALTER TABLE `explanation` MODIFY `text` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `jpltLevel` ADD COLUMN `definition` LONGTEXT NULL,
    ADD COLUMN `description` LONGTEXT NULL,
    ADD COLUMN `jlptThumbnail` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `question` ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `passageId` INTEGER NULL,
    MODIFY `type` ENUM('VOCAB', 'GRAMMAR', 'READING', 'LISTENING') NOT NULL,
    MODIFY `content` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `passage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `jlptTestId` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_passageId_fkey` FOREIGN KEY (`passageId`) REFERENCES `passage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `passage` ADD CONSTRAINT `passage_jlptTestId_fkey` FOREIGN KEY (`jlptTestId`) REFERENCES `jpltTest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `choice` ADD CONSTRAINT `choice_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `explanation` ADD CONSTRAINT `explanation_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
