const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController.js');

// Define the route
router.get('/', myController.getAll);
router.get('/data', myController.getData);

module.exports = router;