const express = require("express");

const router = express.Router();

const enrollmentControllers = require("../controllers/enrollmentsControllers");

router.get("/api/enrollments", enrollmentControllers.getEnrollements);
router.get("/api/enrollments", enrollmentControllers.getEnrollmentById);

router.post("/api/enrollments", enrollmentControllers.takeEnrollements);
router.post("/api/enrollments", enrollmentControllers.takeEnrollements);

module.exports = router;
