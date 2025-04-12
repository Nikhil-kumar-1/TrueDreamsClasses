import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  let user = null;
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        <div className="flex justify-between h-20 items-center">
          {/* Logo and main nav items */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span
                className="text-white text-3xl font-bold hover:scale-105 transition-transform"
                data-aos="fade-right"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                <span className="flex items-center">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg> */}
                  <img
                    src="True-removebg-preview.png"
                    alt="TrueDreams Logo"
                    className="h-16 w-auto hover:scale-105 transition-transform"
                    data-aos="fade-right"
                  />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
                    TrueDreamsClasses
                  </span>
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-40">
              <div className="flex space-x-15">
                <Link
                  to="/"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9.75L12 4l9 5.75M4.5 10.5v7.25c0 .414.336.75.75.75h4a.75.75 0 00.75-.75v-4.25a.75.75 0 01.75-.75h2a.75.75 0 01.75.75v4.25c0 .414.336.75.75.75h4c.414 0 .75-.336.75-.75V10.5"
                    />
                  </svg>
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  About
                </Link>
                <Link
                  to="/courses"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Courses
                </Link>

                <Link
                  to="/blog"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10l1.5 1.5a6.5 6.5 0 009 0L15 10m-6 4h.01m5 0h.01M21 15v-2a3 3 0 00-3-3h-1a3 3 0 00-3 3v2m-6 0v-2a3 3 0 00-3-3H3a3 3 0 00-3 3v2m9 4h6"
                    />
                  </svg>
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg border-b-4 border-white">
          <Link
                  to="/"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9.75L12 4l9 5.75M4.5 10.5v7.25c0 .414.336.75.75.75h4a.75.75 0 00.75-.75v-4.25a.75.75 0 01.75-.75h2a.75.75 0 01.75.75v4.25c0 .414.336.75.75.75h4c.414 0 .75-.336.75-.75V10.5"
                    />
                  </svg>
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  About
                </Link>
                <Link
                  to="/courses"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Courses
                </Link>

                <Link
                  to="/blog"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium flex items-center transition-all"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10l1.5 1.5a6.5 6.5 0 009 0L15 10m-6 4h.01m5 0h.01M21 15v-2a3 3 0 00-3-3h-1a3 3 0 00-3 3v2m-6 0v-2a3 3 0 00-3-3H3a3 3 0 00-3 3v2m9 4h6"
                    />
                  </svg>
                  Contact
                </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
