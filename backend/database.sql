-- Suppression des tables existantes si elles existent
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS user;
SET foreign_key_checks = 1;


-- Création de la table user
CREATE TABLE user (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  role ENUM('professor', 'student') NOT NULL  
);

-- Insertion de données dans la table user
-- Les professeurs
INSERT INTO user (firstname, lastname, city,  password, email, role) VALUES 
  ("Sonia", "Smati", "Paris", "password", "sonia@pf.com", "professor"),
  ("Majid", "Bennedine", "Alger", "password", "pierre@pf.com", "professor"),
  ("Thomas", "Aldaitz", "Lyon", "password", "thomas@pf.com", "professor");

-- Les étudiants
INSERT INTO user (firstname, lastname, city,  password, email, role) VALUES 
  ("Sahrane", "Guassemi", "Lyon", "password", "sahrane@cp.com", "student"),
  ("Javier", "Lopez", "Paris", "password", "javier@cp.com", "student");

-- Création de la table course
CREATE TABLE course (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  language varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  user_id int(11) NOT NULL,  -- Changement de professor_id en user_id
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE  -- Référence à user au lieu de professor
);

-- Insertion de données dans la table course

INSERT INTO course (name, language, description, user_id) VALUES ("Web Development", "Javascript", "Learn how to build a website", 2), ("Web Development", "PHP", "Learn how to build a website", 1), ("Web Development", "Python", "Learn how to build a website", 3), ("Web Development", "Ruby", "Learn how to build a website", 4), ("Web Development", "Java", "Learn how to build a website", 1), ("Web Development", "C#", "Learn how to build a website", 2), ("Web Development", "C++", "Learn how to build a website", 3), ("Web Development", "C", "Learn how to build a website", 4), ("Web Development", "Swift", "Learn how to build a website", 1), ("Web Development", "Kotlin", "Learn how to build a website", 2), ("Web Development", "Go", "Learn how to build a website", 3), ("Web Development", "Rust", "Learn how to build a website", 4), ("Web Development", "Scala", "Learn how to build a website", 1), ("Web Development", "Haskell", "Learn how to build a website", 2), ("Web Development", "Elixir", "Learn how to build a website", 3), ("Web Development", "Clojure", "Learn how to build a website", 4), ("Web Development", "Erlang", "Learn how to build a website", 1), ("Web Development", "Dart", "Learn how to build a website", 2), ("Web Development", "R", "Learn how to build a website", 3), ("Web Development", "Perl", "Learn how to build a website", 4), ("Web Development", "Lua", "Learn how to build a website", 1), ("Web Development", "Julia", "Learn how to build a website", 2), ("Web Development", "F#", "Learn how to build a website", 3), ("Web Development", "Objective-C", "Learn how to build a website", 4), ("Web Development", "Groovy", "Learn how to build a website", 1), ("Web Development", "Racket", "Learn how to build a website", 2), ("Web Development", "Assembly", "Learn how to build a website", 3), ("Web Development", "Visual Basic", "Learn how to build a website", 4), ("Web Development", "Matlab", "Learn how to build a website", 1), ("Web Development", "Fortran", "Learn how to build a website", 2)

