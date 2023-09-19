const express = require('express');

const router = express.Router();

const courseControllers = require('./controllers/courseControllers');
const enrollmentControllers = require('./controllers/enrollmentsControllers');

c;
// Gestion des cours ///

router.get('/api/courses', courseControllers.browse);
router.get('/api/courses/:id', courseControllers.read);
router.post('/api/courses', courseControllers.add);
router.put('/api/courses/:id', courseControllers.edit);
router.delete('/api/courses/:id', courseControllers.destroy);

// Gestion des inscriptions ///

router.get('/api/enrollments', enrollmentControllers.browse);
router.get('/api/enrollments/:id', enrollmentControllers.read);
router.post('/api/enrollments', enrollmentControllers.add);
router.put('/api/enrollments/:id', enrollmentControllers.edit);
router.delete('/api/enrollments/:id', enrollmentControllers.destroy);

module.exports = router;
