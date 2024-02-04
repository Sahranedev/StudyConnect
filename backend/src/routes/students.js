const express = require("express");

const router = express.Router();
const { hashPassword } = require("../services/auth");

const studentsControllers = require("../controllers/studentsControllers");

router.get("/api/students", studentsControllers.readAllStudents);
router.get("/api/students/:id", studentsControllers.readStudentById);
router.post(
  "/api/students",
  hashPassword,
  studentsControllers.createStudentUser
);
router.put("/api/students/:id", studentsControllers.updateStudentUser);
router.delete("/api/students", studentsControllers.deleteAllStudents);
router.delete("/api/students/:id", studentsControllers.deleteStudentById);

module.exports = router;
