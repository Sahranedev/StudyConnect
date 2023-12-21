const express = require("express");

const router = express.Router();

const enrollmentControllers = require("../controllers/enrollmentsControllers");

router.get("/api/enrollments", enrollmentControllers.getEnrollements);
router.get("/api/enrollments/:id", enrollmentControllers.getEnrollmentById);

router.post("/api/enrollments", enrollmentControllers.takeEnrollements);
router.post("/api/enrollments", enrollmentControllers.takeEnrollements);

router.delete(
  "/api/enrollments/:id",
  enrollmentControllers.deleteEnrollmentById
);

module.exports = router;
