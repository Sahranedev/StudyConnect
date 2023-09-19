const express = require("express");

const router = express.Router();
const { hashPassword } = require("../services/auth");

const studentsControllers = require("../controllers/studentsControllers");

router.get("/api/students", studentsControllers.readAllStudents);
router.post(
  "/api/users/students",
  hashPassword,
  studentsControllers.createStudentUser
);
router.put("/api/students/:id", studentsControllers.edit);
router.delete("/api/students/:id", studentsControllers.destroy);

module.exports = router;
