import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faYoutube, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: faFacebookF,
      url: "https://facebook.com/truedreamsclasses",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://instagram.com/truedreamsclasses",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/truedreamsclasses",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://youtube.com/truedreamsclasses",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      url: "https://linkedin.com/company/truedreamsclasses",
    },
  ];

  return (
    <footer className="bg-blue-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-1">
            <Link to="/">
              <h3 className="text-2xl font-bold mb-4 text-white">
                TrueDreams
              </h3>
            </Link>
            <p className="text-blue-100 mb-4">
              At True Dreams Classes, we are committed to nurturing aspiring
              medical students and guiding them toward success in government
              medical college entrance exams.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-600"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { path: "/", name: "Home" },
                { path: "/courses", name: "Courses" },
                { path: "/about", name: "About" },
                { path: "/contact", name: "Contact" },
                { path: "/apply", name: "Apply Now" },
                { path: "/login", name: "Login" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-blue-100 hover:text-white flex items-center"
                  >
                    <span className="mr-2">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Courses
            </h4>
            <ul className="space-y-2">
              {[
                { path: "/courses", name: "Foundation Course" },
                { path: "/courses", name: "Advance Course" },
                { path: "/courses", name: "Target Course" },
                { path: "/courses", name: "Subject-Wise Course" },
              ].map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-blue-100 hover:text-white flex items-center"
                  >
                    <span className="mr-2">•</span> {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: "location",
                  text: "501, RN Tower, Near Asha Furniture, Service Lane, Jaipal More, Bailey Road, Patna 801503",
                },
                {
                  icon: "phone",
                  text: "+91 9204100108",
                  link: "tel:+91 9204100108",
                },
                {
                  icon: "phone",
                  text: "+91 9204100109",
                  link: "tel:+91 9204100109",
                },
                {
                  icon: "email",
                  text: "truedreamsclasses@gmail.com",
                  link: "mailto:truedreamsclasses@gmail.com",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-start">
                  <span className="text-blue-200 mr-2">
                    {item.icon === "location" && "📍"}
                    {item.icon === "phone" && "📞"}
                    {item.icon === "email" && "✉️"}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-blue-100 hover:text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-blue-100">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Our Location
            </h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="TrueDreams Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14391.320680960052!2d85.057102!3d25.610559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57000128084f%3A0x114cc0e9c5f09acf!2sRN%20tower!5e0!3m2!1sen!2sin!4v1744189131736!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} TrueDreams Educational Services. All
              rights reserved.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Empowering future doctors since 2015
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Link
                to="/privacy-policy"
                className="text-blue-200 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-blue-200 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap.xml"
                className="text-blue-200 hover:text-white text-sm"
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
                  className="px-3 py-1 text-sm text-gray-800 border border-gray-300 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;