const express = require('express');

const router = express.Router();
const { hashPassword } = require('../services/auth');

const teachersControllers = require('../controllers/teachersControllers');

router.get('/api/teachers/:id', teachersControllers.readTeacherById);
router.get('/api/teachers', teachersControllers.readAllTeachers);

router.post(
  '/api/users/teachers',
  hashPassword,
  teachersControllers.createTeachertUser,
);
router.put('/api/teachers/:id', teachersControllers.edit);
router.delete('/api/teachers/:id', teachersControllers.destroy);

module.exports = router;
