const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// ... existing code ...

// Define the login and registration routes with middleware
router.post('/login', authController.login);
router.post('/register', authController.register);

// ... existing code ...

module.exports = router;