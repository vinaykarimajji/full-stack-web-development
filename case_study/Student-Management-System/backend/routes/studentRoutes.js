
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// POST: Add a new student
router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();

        res.status(201).json({
            message: "Student added successfully",
            student: savedStudent
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to add student",
            error: error.message
        });
    }
});

// GET: Retrieve all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json({
            count: students.length,
            students: students
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve students",
            error: error.message
        });
    }
});

// PUT: Update student
router.put("/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            student: updatedStudent
        });
   } catch (error) {
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern || {})[0];

    return res.status(409).json({
      message:
        field === "rollNumber"
          ? "This roll number already exists. Please use a different one."
          : field === "email"
          ? "This email address is already registered."
          : "Duplicate value detected. Please use a different value.",
    });
  }

  res.status(400).json({
    message: "Failed to update student",
    error: error.message,
  });
}
});

// DELETE: Delete student
router.delete("/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete student",
            error: error.message
        });
    }
});

module.exports = router;
