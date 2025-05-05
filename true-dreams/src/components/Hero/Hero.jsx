import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const HeroSection = () => {
  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = "service_eycz99e";
  const EMAILJS_TEMPLATE_ID = "template_f249iaj";
  const EMAILJS_PUBLIC_KEY = "dzPgZ_vHjBpGK4GHA"; // This should be your public key, not user ID

  useEffect(() => {
    // No need to initialize with init() - the newer versions handle this automatically
    // Just make sure you've included the EmailJS script in your index.html or installed via npm

    const icons = document.querySelectorAll(".edu-icon");
    const interval = setInterval(() => {
      icons.forEach((icon) => {
        const randomDelay = Math.random() * 3;
        icon.style.animation = `blink 1.5s ease ${randomDelay}s infinite`;
        icon.style.WebkitAnimation = `blink 1.5s ease ${randomDelay}s infinite`;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Education icons data
  const educationIcons = [
    "book",
    "pencil",
    "graduation-cap",
    "calculator",
    "trophy",
    "file-alt",
    "book-open",
    "flask",
    "atom",
    "chart-bar",
  ];

  const getFallingIconProps = () => ({
    initialY: -50 - Math.random() * 100,
    finalY: window.innerHeight + 50,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 7,
    size: `${0.5 + Math.random() * 2}rem`,
    left: `${Math.random() * 100}%`,
    opacity: 0.7 + Math.random() * 0.3,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  });

  const getIconSvg = (iconName) => {
    const icons = {
      book: (
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
      ),
      pencil: (
        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" />
      ),
      "graduation-cap": (
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      ),
      calculator: (
        <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4H7m0 6v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-8 4v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-8 4v2h2v-2H7m4 0v2h2v-2h-2m4 0v2h2v-2h-2z" />
      ),
      trophy: (
        <path d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.1c-2.2.2-3 1.3-3 2.6v.3h8v-.3c0-1.3-.8-2.4-3-2.6V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2h-4M6 11H4V4h2v7m14 0h-2V4h2v7z" />
      ),
      "file-alt": (
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 7V3.5L18.5 9H13m-3 4h8v2h-8v-2m0 4h5v2h-5v-2z" />
      ),
      "book-open": (
        <path d="M21 4.6v14.8c-.7-.6-1.6-1-2.7-1-1.5 0-2.9.6-4 1.6-1.1-1-2.5-1.6-4-1.6-1.1 0-2 .4-2.7 1V4.6C7.9 4 9 3 10.3 3c1.5 0 3 .6 4 1.6 1.1-1 2.5-1.6 4-1.6 1.3 0 2.4 1 2.7 1.6M15 19.9c1.1-.9 2.5-1.5 4-1.5 1 0 1.9.3 2.5.8V8.3c-.6-.5-1.5-.8-2.5-.8-1.5 0-2.9.6-4 1.5v11m-8-11.4c-1.1-.9-2.5-1.5-4-1.5-1 0-1.9.3-2.5.8v11.3c.6-.5 1.5-.8 2.5-.8 1.5 0 2.9.6 4 1.5V8.5z" />
      ),
      flask: (
        <path d="M19 14.9c0 .1 0 .2-.1.3l-2.5 4.3c-.3.5-.9.8-1.5.8H9.1c-.6 0-1.2-.3-1.5-.8L5.1 15.2c0-.1-.1-.2-.1-.3v-2.6c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v2.6M17.5 9.5h-11c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5m-4-5h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z" />
      ),
      atom: (
        <path d="M12 2c1.96 0 3.81.57 5.36 1.54A7.982 7.982 0 0 0 12 10c-2.29 0-4.36-.98-5.81-2.54C6.66 8.45 6 10.18 6 12c0 2.22 1.21 4.15 3 5.19-.79.38-1.63.65-2.5.81-.46-1.04-.7-2.16-.7-3.3 0-2.15.78-4.11 2.06-5.61-.31.49-.56 1.01-.76 1.56.96 1.03 2.34 1.7 3.9 1.7 1.07 0 2.07-.29 2.93-.79.37.6.8 1.16 1.29 1.67A7.89 7.89 0 0 1 12 20c-1.96 0-3.81-.57-5.36-1.54A7.982 7.982 0 0 0 12 14c2.29 0 4.36.98 5.81 2.54C17.34 15.55 18 13.82 18 12c0-2.22-1.21-4.15-3-5.19.79-.38 1.63-.65 2.5-.81.46 1.04.7 2.16.7 3.3 0 2.15-.78 4.11-2.06 5.61.31-.49.56-1.01.76-1.56-.96-1.03-2.34-1.7-3.9-1.7-1.07 0-2.07.29-2.93.79-.37-.6-.8-1.16-1.29-1.67A7.89 7.89 0 0 1 12 4c1.96 0 3.81.57 5.36 1.54A7.982 7.982 0 0 0 12 12c-2.29 0-4.36-.98-5.81-2.54C6.66 8.45 6 10.18 6 12c0 2.22 1.21 4.15 3 5.19-.79.38-1.63.65-2.5.81-.46-1.04-.7-2.16-.7-3.3 0-4.41 3.59-8 8-8z" />
      ),
      "chart-bar": (
        <path d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7z" />
      )
    };

    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        {icons[iconName] || icons["graduation-cap"]}
      </svg>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"), // Changed to match common EmailJS template variables
      from_email: formData.get("email"), // Changed to match common EmailJS template variables
      phone: formData.get("phone"),
      course: formData.get("course"),
      to_name: "TrueDreams Admin" // Adding recipient name if your template uses it
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        data,
        EMAILJS_PUBLIC_KEY
      );
      
      if (response.status === 200) {
        alert("Consultation booked successfully! We'll contact you soon.");
        e.target.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send your request. Please try again later or contact us directly.");
    }
  };

  return (
    <section className="relative bg-blue-600 pt-16 pb-10 overflow-hidden min-h-screen">
      {/* Background with animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-700 opacity-90"></div>

        {/* Floating dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              WebkitAnimation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Falling education icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {educationIcons.map((icon, index) => {
          const {
            initialY,
            finalY,
            delay,
            duration,
            size,
            left,
            opacity,
            color,
          } = getFallingIconProps();
          return (
            <motion.div
              key={index}
              className="absolute edu-icon"
              style={{
                left: left,
                fontSize: size,
                color: color,
                opacity: opacity,
                zIndex: 1,
                y: initialY,
              }}
              animate={{
                y: finalY,
                rotate: [0, Math.random() > 0.5 ? 180 : -180],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
            >
              {getIconSvg(icon)}
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 bg-white/10 p-8 rounded-xl shadow-2xl border border-white/20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-white">TrueDreams</span> - Your Gateway to
              Medical Success
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-lg font-medium"
            >
              Join India's most trusted NEET coaching institute with proven
              results. Our expert faculty and personalized approach will help
              you achieve your MBBS dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/courses" className="flex-1">
                <button className="w-full bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Explore Courses</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
              <Link to="/apply" className="flex-1">
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 border border-white/30 rounded-lg shadow transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                  </svg>
                  <span>Apply Now</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item + 20}.jpg`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white/50 shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm mt-1 font-medium">
                  Trusted by <span className="font-bold">1000+ students</span>{" "}
                  for NEET preparation
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-2xl border border-white/20 relative z-10"
          >
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Free Consultation
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Start Your Medical Journey
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white text-gray-800 placeholder-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white text-gray-800 placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white text-gray-800 placeholder-gray-500"
                  placeholder="Enter your phone"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interested Course
                </label>
                <select
                  id="course"
                  name="course"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white text-gray-800"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Subject-wise-course">Subject-wise Course</option>
                  <option value="Advance Course 11th pass">Advance Course (11th pass)</option>
                  <option value="Foundation Course 10th pass">Foundation Course (10th pass)</option>
                  <option value="Target Course 12th pass">Target Course (12th pass)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Free Consultation
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Your information will not be shared.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;