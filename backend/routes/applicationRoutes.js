const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const { body, validationResult } = require("express-validator");

// Validation rules
const applicationValidationRules = [
  body("name")
    .notEmpty().withMessage("Full name is required")
    .trim()
    .isLength({ max: 100 }).withMessage("Name cannot exceed 100 characters"),
  
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address")
    .normalizeEmail(),
    
  body("phone")
    .notEmpty().withMessage("Phone number is required")
    .matches(/^[0-9]{10,15}$/).withMessage("Phone number must be 10-15 digits"),
    
  body("grade")
    .notEmpty().withMessage("Current class is required")
    .isIn(["11th", "12th", "Dropper", "Repeater"]).withMessage("Invalid class selection"),
    
  body("city")
    .notEmpty().withMessage("City is required")
    .trim()
    .isLength({ max: 50 }).withMessage("City name cannot exceed 50 characters"),
    
  body("reference")
    .optional()
    .isIn(["Friend/Family", "Social Media", "Newspaper", "Website", "Other", ""])
];

// Submit application
router.post("/applications", applicationValidationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      errors: errors.array() 
    });
  }

  try {
    const { name, email, phone, grade, city, reference } = req.body;
    
    // Check if application already exists
    const existingApp = await Application.findOne({ $or: [{ email }, { phone }] });
    if (existingApp) {
      return res.status(400).json({
        success: false,
        message: "An application with this email or phone already exists"
      });
    }

    const newApplication = new Application({
      name,
      email,
      phone,
      grade,
      city,
      reference: reference || ""
    });

    await newApplication.save();

    // Here you could add email notification logic
    // await sendApplicationEmail(newApplication);

    res.status(201).json({
      success: true,
      message: "Application submitted successfully! We'll contact you soon.",
      data: newApplication
    });
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
      error: error.message
    });
  }
});

// Get all applications (for admin)
router.get("/applicationdata", async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } }
      ];
    }

    const applications = await Application.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Application.countDocuments(query);

    res.json({
      success: true,
      data: applications,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalApplications: count
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message
    });
  }
});

// Update application status (for admin)
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!["Pending", "Contacted", "Registered", "Rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value"
      });
    }

    const application = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }

    res.json({
      success: true,
      message: "Application status updated",
      data: application
    });
  } catch (error) {
    console.error("Error updating application:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update application",
      error: error.message
    });
  }
});

module.exports = router;