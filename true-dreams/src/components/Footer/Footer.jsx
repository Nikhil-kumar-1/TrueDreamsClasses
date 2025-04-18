import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const socialMedia = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://facebook.com/truedreamsclasses' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com/truedreamsclasses' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/truedreamsclasses' },
    { name: 'YouTube', icon: 'fa-youtube', url: 'https://youtube.com/truedreamsclasses' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://linkedin.com/company/truedreamsclasses' }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <motion.div 
            {...fadeInUp}
            className="md:col-span-1 hover:transform hover:scale-105 transition duration-300"
          >
            <Link to="/">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                TrueDreams
              </h3>
            </Link>
            <p className="text-gray-300 hover:text-white transition-colors duration-300 mb-4">
              At True Dreams Classes, we are committed to nurturing aspiring medical students and guiding them toward success in government medical college entrance exams.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {socialMedia.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-8 h-8 rounded-full text-black hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <i className={`fab ${social.icon} text-sm`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/", name: "Home" },
                { path: "/courses", name: "Courses" },
                { path: "/about", name: "About" },
                { path: "/contact", name: "Contact" },
                { path: "/apply", name: "Apply Now" }
              ].map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Courses</h4>
            <ul className="space-y-2">
              {[
                { path: "/courses", name: "NEET UG Coaching" },
                { path: "/courses", name: "NEET PG Coaching" },
                { path: "/courses", name: "Foundation Course" },
                { path: "/courses", name: "Crash Course" }
              ].map((course) => (
                <motion.li 
                  key={course.name}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={course.path} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">•</span> {course.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: "location", text: "123 Education Street, Patna, Bihar 800001" },
                { icon: "phone", text: "+91 98765 43210", link: "tel:+919876543210" },
                { icon: "phone", text: "+91 98765 43211", link: "tel:+919876543211" },
                { icon: "email", text: "info@truedreamsclasses.com", link: "mailto:info@truedreamsclasses.com" }
              ].map((item) => (
                <motion.li 
                  key={item.text}
                  className="flex items-start group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-400 mr-2 group-hover:text-blue-300 transition-colors duration-300">
                    {item.icon === "location" && "📍"}
                    {item.icon === "phone" && "📞"}
                    {item.icon === "email" && "✉️"}
                  </span>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.5 }}
            className="hover:transform hover:scale-105 transition duration-300"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Our Location</h4>
            <div className="rounded-lg overflow-hidden shadow-lg shadow-blue-500/20">
              <iframe
                title="TrueDreams Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14391.320680960052!2d85.057102!3d25.610559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57000128084f%3A0x114cc0e9c5f09acf!2sRN%20tower!5e0!3m2!1sen!2sin!4v1744189131736!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:opacity-90 transition-opacity duration-300"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-blue-800/30 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              © {new Date().getFullYear()} TrueDreams Educational Services. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Empowering future doctors since 2015
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                to="/sitemap.xml" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-2 md:mt-0">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-1 text-sm text-black-800 border-1  border-black-800 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 text-sm rounded-r transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;