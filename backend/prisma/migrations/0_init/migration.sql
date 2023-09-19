-- CreateTable
CREATE TABLE `chatGroups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NULL,
    `name` VARCHAR(50) NULL,

    INDEX `course_id`(`course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NULL,
    `description` TEXT NULL,
    `teacher_id` INTEGER NULL,
    `date` DATE NULL,
    `seat_count` INTEGER NULL,

    INDEX `teacher_id`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enrollments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NULL,
    `course_id` INTEGER NULL,
    `enrollment_date` DATETIME(0) NULL,

    INDEX `course_id`(`course_id`),
    INDEX `student_id`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messageReadStatus` (
    `message_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `isRead` BOOLEAN NULL DEFAULT false,
    `readTimestamp` DATETIME(0) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`message_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatGroup_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `content` TEXT NULL,
    `timestamp` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `chatGroup_id`(`chatGroup_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificationReadStatus` (
    `notification_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `isRead` BOOLEAN NULL DEFAULT false,
    `readTimestamp` DATETIME(0) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`notification_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NULL,
    `type` ENUM('Annulation', 'Décalage', 'Autre') NULL,
    `timestamp` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NULL,
    `progress` TEXT NULL,
    `lastActivity` DATETIME(0) NULL,
    `curriculum` VARCHAR(100) NULL,
    `points` INTEGER NULL,

    INDEX `userID`(`userID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teachers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NULL,
    `qualifications` TEXT NULL,
    `bio` TEXT NULL,
    `expertiseField` VARCHAR(100) NULL,
    `hourlyRate` DECIMAL(10, 2) NULL,
    `averageRating` DECIMAL(3, 2) NULL,

    INDEX `userID`(`userID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NULL,
    `lastname` VARCHAR(50) NULL,
    `email` VARCHAR(50) NULL,
    `avatar` VARCHAR(50) NULL,
    `password` VARCHAR(50) NULL,
    `role` ENUM('Admin', 'Teacher', 'Student') NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `lastLogin` DATETIME(0) NULL,
    `status` ENUM('Active', 'Inactive', 'Banned') NULL,
    `preferredLanguage` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chatGroups` ADD CONSTRAINT `chatGroups_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `enrollments` ADD CONSTRAINT `enrollments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `enrollments` ADD CONSTRAINT `enrollments_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `messageReadStatus` ADD CONSTRAINT `messageReadStatus_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `messages`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `messageReadStatus` ADD CONSTRAINT `messageReadStatus_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`chatGroup_id`) REFERENCES `chatGroups`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notificationReadStatus` ADD CONSTRAINT `notificationReadStatus_ibfk_1` FOREIGN KEY (`notification_id`) REFERENCES `notifications`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notificationReadStatus` ADD CONSTRAINT `notificationReadStatus_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `teachers` ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

