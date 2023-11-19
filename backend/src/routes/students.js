const express = require("express");

const router = express.Router();
const { hashPassword } = require("../services/auth");

const studentsControllers = require("../controllers/studentsControllers");

router.get("/api/students", studentsControllers.readAllStudents);
router.get("/api/students/:id", studentsControllers.readStudentById);
router.post(
  "/api/users/students",
  hashPassword,
  studentsControllers.createStudentUser
);
router.put("/api/user/students/:id", studentsControllers.updateStudentUser);

module.exports = router;
