import { motion } from "framer-motion";
import { useState } from "react";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    city: "",
    reference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center text-white relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Join True Dreams NEET Program
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Start your journey to become a doctor with India's top NEET coaching
          </p>
        </motion.div>
        {/* Hero Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1504507926084-34cf0b939964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvYWNoaW5nfGVufDB8fDB8fHww"
          alt="NEET Coaching Hero"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
      </div>

      {/* Application Form - Full Width */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-blue-600 max-w-4xl mx-auto w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
            Apply for NEET 2025 Batch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-blue-700 mb-2 font-medium">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-700 mb-2 font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-blue-700 mb-2 font-medium">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-700 mb-2 font-medium">
                    Current Class*
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Class</option>
                    <option value="11th">11th Standard</option>
                    <option value="12th">12th Standard</option>
                    <option value="Dropper">Dropper</option>
                    <option value="Repeater">Repeater</option>
                  </select>
                </div>
                <div>
                  <label className="block text-blue-700 mb-2 font-medium">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              <div>
                <label className="block text-blue-700 mb-2 font-medium">
                  How did you hear about us?
                </label>
                <select
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Option</option>
                  <option value="Friend/Family">Friend/Family</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Newspaper">Newspaper</option>
                  <option value="Website">Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md"
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyNow;