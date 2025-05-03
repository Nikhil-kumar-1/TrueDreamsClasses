// models/Visit.js
const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  date: {
    type: String, // Store date as a string (e.g., "2023-10-15")
    required: true,
    unique: true, // Ensure only one entry per day
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Visit", visitSchema);

