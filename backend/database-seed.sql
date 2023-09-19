INSERT INTO user (firstname, lastname, email, avatar, password, role, createdAt, lastLogin, status, preferredLanguage) VALUES
("Sonia", "Smati", "soniasmati@prof.com", "/images/avatar1.png", "password", "Teacher", NOW(), NOW(), "Active", "fr"),
("Majid", "Bennedine", "majidB@prof.com", "/images/avatar2.png", "password", "Teacher", NOW(), NOW(), "Active", "fr"),
("Toto", "Brown", "toto@student.com", "/images/avatar3.png", "password", "Student", NOW(), NOW(), "Active", "fr"),
("Alice", "Williams", "alice.williams@example.com", "/images/avatar4.png", "password", "Student", NOW(), NOW(), "Active", "en");

INSERT INTO teachers (userID, qualifications, bio, expertiseField, hourlyRate, averageRating) VALUES
(1, "PhD in Computer Science", "Expert in web development", "Web Development", 50.00, 4.5),
(2, "Masters in Physics", "Specialized in Mechanics", "Physics", 45.00, 4.0);

INSERT INTO students (userID, progress, lastActivity, curriculum, points) VALUES
(3, "Completed 5 courses", NOW(), "Beginner Javascript", 150),
(4, "Completed 2 courses", NOW(), "Intermediate React", 50);

INSERT INTO courses (name, description, teacher_id, date, seat_count) VALUES
("Javascript for Beginners", "Introduction to Javascript", 1, '2023-10-01 14:00:00', 30),
("Advanced Physics", "Special Relativity and Quantum Mechanics", 2, '2023-11-15 09:30:00', 25);

INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES
(1, 1, '2023-09-15'),
(2, 2, '2023-09-20');
INSERT INTO chatGroups (course_id, name) VALUES
(1, 'JS Beginners Chat'),
(2, 'Advanced Physics Chat');

INSERT INTO messages (chatGroup_id, user_id, content) VALUES
(1, 1, 'Welcome to JS for Beginners'),
(2, 2, 'Welcome to Advanced Physics');

INSERT INTO messageReadStatus (message_id, user_id, isRead) VALUES
(1, 3, TRUE),
(2, 4, FALSE);

INSERT INTO notifications (content, type) VALUES
('JS for Beginners has been cancelled', 'Annulation'),
('Advanced Physics has been rescheduled', 'Décalage');

INSERT INTO notificationReadStatus (notification_id, user_id, isRead) VALUES
(1, 3, FALSE),
(2, 4, FALSE);
