-- DropForeignKey
ALTER TABLE `jpltTest` DROP FOREIGN KEY `jpltTest_jlptLevelId_fkey`;

-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `question_jlptTestId_fkey`;

-- AddForeignKey
ALTER TABLE `jpltTest` ADD CONSTRAINT `jpltTest_jlptLevelId_fkey` FOREIGN KEY (`jlptLevelId`) REFERENCES `jpltLevel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_jlptTestId_fkey` FOREIGN KEY (`jlptTestId`) REFERENCES `jpltTest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
