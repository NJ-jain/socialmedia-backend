const User = require('../models/userModel'); // Replace 'userModel' with the actual path to your user model
const jwt = require('jsonwebtoken');

// Login method
exports.login = async (req, res) => {
    // Your login logic here, using the User model to find the user in the database
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = await User.findOne({ email });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(200).json({ message: "Logged in successfully", user, token });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

// Register method
exports.register = async (req, res) => {
    // Your registration logic here, using the User model to create a new user in the database
    try {
        const { name, email, password } = req.body;
        // Create a new user
        const newUser = new User({ name, email, password });
        // Save the user to the database
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(201).json({ message: "Registered successfully", newUser, token });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
};