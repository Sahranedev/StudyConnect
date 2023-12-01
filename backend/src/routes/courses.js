const express = require("express");

const router = express.Router();

const coursesControllers = require("../controllers/courseControllers");

router.get("/api/courses", coursesControllers.getAllCourses);
router.get("/api/courses/:id", coursesControllers.getCourseById);
router.get("/api/courses/teachers/:id", coursesControllers.getCoursesByTeacher);
router.get("/api/courses/students/:id", coursesControllers.getCoursesByStudent);
router.post("/api/courses", coursesControllers.createCourses);
router.put("/api/courses/:id", coursesControllers.updateCourse);

router.delete("/api/courses/:id", coursesControllers.deleteCourseById);

module.exports = router;
