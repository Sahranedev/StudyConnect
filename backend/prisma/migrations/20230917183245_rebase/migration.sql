-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_ibfk_1`;

-- DropForeignKey
ALTER TABLE `teachers` DROP FOREIGN KEY `teachers_ibfk_1`;

-- AlterTable
ALTER TABLE `user` MODIFY `firstname` VARCHAR(255) NULL,
    MODIFY `lastname` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `teachers` ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
