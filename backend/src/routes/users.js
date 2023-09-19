const express = require('express');

const router = express.Router();

const { verifyPassword } = require('../services/auth');
const userControllers = require('../controllers/userControllers');
const authControllers = require('../controllers/authControllers');

/// AUTH ///

router.post(
  '/api/login',
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
);

router.get('/api/users', userControllers.getAllUsersFromPrisma);
router.get('/api/users/:id', userControllers.getOneUserById);
router.delete('/api/users/:id', userControllers.deleteUserById);

module.exports = router;
