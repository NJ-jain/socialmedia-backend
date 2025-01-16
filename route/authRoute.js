const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

// ... existing code ...

// Define the login and registration routes with middleware
router.post('/login', authMiddleware, authController.login);
router.post('/register', authMiddleware, authController.register);

// ... existing code ...

module.exports = router;