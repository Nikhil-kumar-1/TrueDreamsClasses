import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
import { Helmet } from "react-helmet";
const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
     {/* Helmet for SEO */}
     <Helmet>
        <title>Contact Us | True Dreams</title>
        <meta name="description" content="Get in touch with True Dreams. Contact us via call, WhatsApp, or visit our location. We are here to help you with your educational journey." />
        <meta name="keywords" content="Contact, True Dreams, Education, Admission, Support" />
        <meta name="author" content="True Dreams" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact Us | True Dreams" />
        <meta property="og:description" content="Reach out to True Dreams for any inquiries related to courses, admissions, and support." />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" /> {/* optional thumbnail */}
        {/* Twitter */}
        <meta name="twitter:title" content="Contact Us | True Dreams" />
        <meta name="twitter:description" content="Reach out to True Dreams for any inquiries related to courses, admissions, and support." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" /> {/* optional thumbnail */}
      </Helmet>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                We're Ready to Help You
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us anytime - our team is always available to assist you with your educational journey.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-white/20 mr-4">
                  <FaPhone className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Call/WhatsApp</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaPhone className="text-blue-500 mr-3" />
                  <a href="tel:+9192014100108" className="text-gray-700 hover:text-blue-600 transition">
                    +91-92014100108
                  </a>
                </li>
                <li className="flex items-center">
                  <FaWhatsapp className="text-green-500 mr-3 text-xl" />
                  <a href="https://wa.me/919204100109" className="text-gray-700 hover:text-green-600 transition">
                    +91-9204100109
                  </a>
                </li>
              </ul>
              <motion.a
                href="tel:+9192014100108"
                whileHover={buttonHover}
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md w-full"
              >
                <FaPhone className="mr-2" /> Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-white/20 mr-4">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Our Location</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-purple-500 mt-1 mr-3" />
                <p className="text-gray-700">
                  501, RN Tower, Near Asha Furniture, Service Lane, Jaipal More, Bailey Road, Patna 801503
                </p>
              </div>
              <motion.a
                href="https://goo.gl/maps/xyz" // Replace with actual Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={buttonHover}
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-md w-full"
              >
                <FaMapMarkerAlt className="mr-2" /> View on Map
              </motion.a>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 text-white">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-white/20 mr-4">
                  <FaClock className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Working Hours</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
              </ul>
              <motion.a
                href="mailto:info@truedreams.com" // Replace with actual email
                whileHover={buttonHover}
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg shadow-md w-full"
              >
                <FaEnvelope className="mr-2" /> Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
              <p className="mb-8">
                Have questions about our courses or admission process? Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-3 text-xl" />
                <span>info@truedreams.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-xl" />
                <span>+91-92014100108</span>
              </div>
            </div>
            
            <div className="md:w-1/2 p-10">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={buttonHover}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" /> Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
          <iframe
            title="TrueDreams Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.954721470629!2d85.057102!3d25.610559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57000128084f%3A0x114cc0e9c5f09acf!2sRN%20tower!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="filter grayscale(20%) hover:grayscale(0%) transition-all duration-500"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;