SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS teachers, students, courses, enrollments, user, chatGroups, messages, messageReadStatus, notifications, notificationReadStatus;


CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50),
    avatar VARCHAR(50),
    password VARCHAR(50),
    role ENUM('Admin', 'Teacher', 'Student'),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastLogin DATETIME,
    status ENUM('Active', 'Inactive', 'Banned'),
    preferredLanguage VARCHAR(10)
);

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    qualifications TEXT,
    bio TEXT,
    expertiseField VARCHAR(100),
    hourlyRate DECIMAL(10, 2),
    averageRating DECIMAL(3, 2),
    FOREIGN KEY (userID) REFERENCES user(id)
);

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    progress TEXT,
    lastActivity DATETIME,
    curriculum VARCHAR(100),
    points INT,
    FOREIGN KEY (userID) REFERENCES user(id)
);


CREATE TABLE courses (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50),
   description TEXT,
   teacher_id INT,
   date DATE,
   seat_count INT,
   FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

CREATE TABLE enrollments (
   id INT AUTO_INCREMENT PRIMARY KEY,
   student_id INT,
   course_id INT,
   enrollment_date DATETIME,
   FOREIGN KEY (student_id) REFERENCES students(id),
   FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE chatGroups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    name VARCHAR(50),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chatGroup_id INT,
    user_id INT,
    content TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (chatGroup_id) REFERENCES chatGroups(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE messageReadStatus (
    message_id INT,
    user_id INT,
    isRead BOOLEAN DEFAULT FALSE,
    readTimestamp DATETIME,
    PRIMARY KEY (message_id, user_id),
    FOREIGN KEY (message_id) REFERENCES messages(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT,
    type ENUM('Annulation', 'Décalage', 'Autre'),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notificationReadStatus (
    notification_id INT,
    user_id INT,
    isRead BOOLEAN DEFAULT FALSE,
    readTimestamp DATETIME,
    PRIMARY KEY (notification_id, user_id),
    FOREIGN KEY (notification_id) REFERENCES notifications(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);




SET FOREIGN_KEY_CHECKS=1;
