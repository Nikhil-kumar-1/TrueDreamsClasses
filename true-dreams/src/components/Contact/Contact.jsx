import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { backendUrl } from "../../config/config";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form data after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
        alert("Message Sent Successfully!"); // Replaced toast with alert
      } else {
        alert("Something went wrong!"); // Replaced toast with alert
      }
    } catch (error) {
      alert("Something went wrong!"); // Replaced toast with alert
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Contact Us | True Dreams</title>
        <meta
          name="description"
          content="Get in touch with True Dreams. Contact us via call, WhatsApp, or visit our location. We are here to help you with your educational journey."
        />
        <meta
          name="keywords"
          content="Contact, True Dreams, Education, Admission, Support"
        />
        <meta name="author" content="True Dreams" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        <meta property="og:title" content="Contact Us | True Dreams" />
        <meta
          property="og:description"
          content="Reach out to True Dreams for any inquiries related to courses, admissions, and support."
        />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta name="twitter:title" content="Contact Us | True Dreams" />
        <meta
          name="twitter:description"
          content="Reach out to True Dreams for any inquiries related to courses, admissions, and support."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />
      </Helmet>

      {/* Hero Section */}
      <section className=" bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            We're here to assist you with your educational journey. Reach out to
            us anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-600 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Call/WhatsApp
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="text-blue-600 mr-2" />
                <a
                  href="tel:+9192014100108"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  +91-92014100108
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-green-600 mr-2 text-xl" />
                <a
                  href="https://wa.me/919204100109"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  +91-9204100109
                </a>
              </li>
            </ul>
            <a
              href="tel:+9192014100108"
              className="mt-4 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Call Now
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-purple-600 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Our Location
              </h3>
            </div>
            <div className="flex items-start mb-4">
              <FaMapMarkerAlt className="text-purple-600 mt-1 mr-2" />
              <p className="text-gray-600">
                501, RN Tower, Near Asha Furniture, Service Lane, Jaipal More,
                Bailey Road, Patna 801503
              </p>
            </div>
            <a
              href="https://goo.gl/maps/xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              View on Map
            </a>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <FaClock className="text-indigo-600 text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Working Hours
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Morning:</span>
                <span className="font-medium">7:30 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Evening:</span>
                <span className="font-medium">4:00 PM - 8:00 PM</span>
              </li>
            </ul>
            <a
              href="mailto:info@truedreamsclasses.com"
              className="mt-4 inline-block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-800 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <p className="mb-6">
                Have questions about our courses or admission process? We'll
                respond within 24 hours.
              </p>
              <div className="flex items-center mb-3">
                <FaEnvelope className="mr-2 text-xl" />
                <span>truedreamsclasses@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-xl" />
                <span>+91-9204100108</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div>
                <div className="mb-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
                    >
                      <FaPaperPlane className="mr-2" /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="TrueDreams Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.954721470629!2d85.057102!3d25.610559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57000128084f%3A0x114cc0e9c5f09acf!2sRN%20tower!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="hover:filter-none transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
