
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Atlas connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student Management System Backend is Running!"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Backend server is working correctly"
    });
});

// Student API routes
app.use("/api/students", studentRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
