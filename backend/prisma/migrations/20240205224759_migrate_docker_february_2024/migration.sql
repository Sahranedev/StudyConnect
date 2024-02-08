/*
  Warnings:

  - You are about to drop the column `userID` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `teachers` table. All the data in the column will be lost.
  - You are about to drop the `chatGroups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `messageReadStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificationReadStatus` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teacher_id` on table `courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_id` on table `enrollments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `course_id` on table `enrollments` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `user_id` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Made the column `firstname` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `chatGroups` DROP FOREIGN KEY `chatGroups_ibfk_1`;

-- DropForeignKey
ALTER TABLE `courses` DROP FOREIGN KEY `courses_ibfk_1`;

-- DropForeignKey
ALTER TABLE `enrollments` DROP FOREIGN KEY `enrollments_ibfk_1`;

-- DropForeignKey
ALTER TABLE `enrollments` DROP FOREIGN KEY `enrollments_ibfk_2`;

-- DropForeignKey
ALTER TABLE `messageReadStatus` DROP FOREIGN KEY `messageReadStatus_ibfk_1`;

-- DropForeignKey
ALTER TABLE `messageReadStatus` DROP FOREIGN KEY `messageReadStatus_ibfk_2`;

-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_ibfk_1`;

-- DropForeignKey
ALTER TABLE `notificationReadStatus` DROP FOREIGN KEY `notificationReadStatus_ibfk_1`;

-- DropForeignKey
ALTER TABLE `notificationReadStatus` DROP FOREIGN KEY `notificationReadStatus_ibfk_2`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_ibfk_1`;

-- DropForeignKey
ALTER TABLE `teachers` DROP FOREIGN KEY `teachers_ibfk_1`;

-- AlterTable
ALTER TABLE `courses` ADD COLUMN `classroom_id` INTEGER NULL,
    ADD COLUMN `end_time` TIME NULL,
    ADD COLUMN `start_time` TIME NULL,
    MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `teacher_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `enrollments` MODIFY `student_id` INTEGER NOT NULL,
    MODIFY `course_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `students` DROP COLUMN `userID`,
    ADD COLUMN `classroom_id` INTEGER NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `teachers` DROP COLUMN `userID`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `firstname` VARCHAR(255) NOT NULL,
    MODIFY `lastname` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(50) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `role` ENUM('Admin', 'Teacher', 'Student') NOT NULL,
    MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- DropTable
DROP TABLE `chatGroups`;

-- DropTable
DROP TABLE `messageReadStatus`;

-- DropTable
DROP TABLE `notificationReadStatus`;

-- CreateTable
CREATE TABLE `classroom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeacherClass` (
    `teacher_id` INTEGER NOT NULL,
    `classroom_id` INTEGER NOT NULL,

    PRIMARY KEY (`teacher_id`, `classroom_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `user_id` ON `students`(`user_id`);

-- CreateIndex
CREATE INDEX `user_id` ON `teachers`(`user_id`);

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_classroom_id_fkey` FOREIGN KEY (`classroom_id`) REFERENCES `classroom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enrollments` ADD CONSTRAINT `enrollments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `enrollments` ADD CONSTRAINT `enrollments_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_classroom_id_fkey` FOREIGN KEY (`classroom_id`) REFERENCES `classroom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `teachers` ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TeacherClass` ADD CONSTRAINT `TeacherClass_classroom_id_fkey` FOREIGN KEY (`classroom_id`) REFERENCES `classroom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeacherClass` ADD CONSTRAINT `TeacherClass_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
