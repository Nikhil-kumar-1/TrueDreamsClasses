const Appointment = require("../models/Appointment");

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    const newAppointment = new Appointment({
      name,
      email,
      phone,
      date,
      message,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Failed to book appointment" });
  }
};

// Fetch all Consultation
exports.getAllConsultation = async (req, res) => {
  try {
    const Consultation = await Appointment.find().sort({ date: -1 }); // Sort by date in descending order
    res.status(200).json(Consultation);
  } catch (error) {
    console.error("Error fetching Consultation:", error);
    res.status(500).json({ message: "Failed to fetch Consultation" });
  }
};
