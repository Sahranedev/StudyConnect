const express = require("express");

const router = express.Router();

const enrollmentControllers = require("../controllers/enrollmentsControllers");

router.get("/api/enrollments", enrollmentControllers.getEnrollements);
router.post("/api/enrollments", enrollmentControllers.takeEnrollements);

module.exports = router;
