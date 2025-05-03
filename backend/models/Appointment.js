const mongoose = require("mongoose");

const Consultationchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now,
    },
    course: {
      type: String,
      required: [true, "Course selection is required"],
      enum: [
        "Subject-wise-course",
        "Advance Course 11th pass",
        "Foundation Course 10th pass",
        "Target Course 12th pass",
      ],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// Add index for better query performance
Consultationchema.index({ email: 1, date: 1 });

// Export the model
module.exports = mongoose.model("Appointment", Consultationchema);
