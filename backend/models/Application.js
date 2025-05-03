const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address"
      ]
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [
        /^[0-9]{10,15}$/,
        "Please provide a valid phone number (10-15 digits)"
      ]
    },
    grade: {
      type: String,
      required: [true, "Current class is required"],
      enum: ["11th", "12th", "Dropper", "Repeater"]
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      maxlength: [50, "City name cannot exceed 50 characters"]
    },
    reference: {
      type: String,
      enum: ["Friend/Family", "Social Media", "Newspaper", "Website", "Other", ""],
      default: ""
    },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Registered", "Rejected"],
      default: "Pending"
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Add indexes for better query performance
applicationSchema.index({ email: 1 });
applicationSchema.index({ phone: 1 });
applicationSchema.index({ status: 1 });
applicationSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Application", applicationSchema);