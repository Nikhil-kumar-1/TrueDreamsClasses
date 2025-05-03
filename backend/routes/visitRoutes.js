// routes/visitRoutes.js
const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");

// Log a visit
router.post("/log-visit", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    let visit = await Visit.findOne({ date: today });

    if (visit) {
      visit.count += 1; // Increment the count if the date exists
    } else {
      visit = new Visit({ date: today, count: 1 }); // Create a new entry for the day
    }

    await visit.save();
    res.status(200).json({ message: "Visit logged successfully" });
  } catch (error) {
    console.error("Error logging visit:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get daily visit data
router.get("/daily-visits", async (req, res) => {
  try {
    const visits = await Visit.find().sort({ date: 1 }); // Sort by date ascending
    res.status(200).json(visits);
  } catch (error) {
    console.error("Error fetching daily visits:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;