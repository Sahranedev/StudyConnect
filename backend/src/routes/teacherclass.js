const express = require("express");

const router = express.Router();

const teacherclassControllers = require("../controllers/teacherclassControllers");

router.post(
  "/api/classroom/add-teacher",
  teacherclassControllers.addTeacherToClassroom
);

module.exports = router;
