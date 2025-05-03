const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// Create new appointment
router.post("/Consultation", async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Create new appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      course,
      message: message || `Interested in: ${course}`,
    });

    // Save to database
    await appointment.save();

    // Successful response
    res.status(201).json({
      success: true,
      message: "Appointment booked successfully!",
      data: appointment,
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: errors,
      });
    }

    // Handle other errors
    console.error("Error creating appointment:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all Consultation
router.get("/Consultation", async (req, res) => {
  try {
    const Consultation = await Appointment.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: Consultation.length,
      data: Consultation,
    });
  } catch (error) {
    console.error("Error fetching Consultation:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Consultation",
      error: error.message,
    });
  }
});

// Delete an appointment
router.delete("/Consultation/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
