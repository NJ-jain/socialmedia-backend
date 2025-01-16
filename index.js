const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config(); 

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const myRoute = require('./route/myRoute.js');
const authRoute = require('./route/authRoute.js');

// Use routes
app.use('/api', myRoute);
app.use('/auth', authRoute);
const connectDB = require('./db/dbConfig.js');

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});