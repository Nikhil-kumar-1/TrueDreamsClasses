// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Protected Admin Dashboard Route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

module.exports = router;