const express = require("express");

const router = express.Router();

const classRoomController = require("../controllers/classroomControllers");

router.post("/api/classroom", classRoomController.createClassroom);
router.get("/api/classroom", classRoomController.getAllClassroom);
router.get("/api/classroom/:id", classRoomController.getClassroomById);
router.put("/api/classroom/:id", classRoomController.updateClassroom);
router.delete("/api/classroom/:id", classRoomController.deleteClassroom);

router.post(
  "/api/classroom/add-student/:id",
  classRoomController.addStudentToClassroom
);
router.get(
  "/api/students-of-classroom/:id",
  classRoomController.getClassroomStudents
);

module.exports = router;
