import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    // Blinking animation for education icons
    const icons = document.querySelectorAll(".edu-icon");
    const interval = setInterval(() => {
      icons.forEach((icon) => {
        const randomDelay = Math.random() * 3;
        icon.style.animation = `blink 1.5s ease ${randomDelay}s infinite`;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Array of education-related emojis for floating icons
  const educationIcons = [
    "📚", "✏️", "🎓", "🧮", "🏆", "📝", "📖", "🔬", "🧪", "📊",
    "🧠", "👩‍🎓", "👨‍🎓", "🏫", "📓", "📌", "✒️", "📐", "🧲", "🔭"
  ];

  // Function to generate random properties for falling icons
  const getFallingIconProps = () => ({
    initialY: -50 - Math.random() * 100,
    finalY: window.innerHeight + 50,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 7,
    size: `${0.5 + Math.random() * 2}rem`,
    left: `${Math.random() * 100}%`,
    opacity: 0.7 + Math.random() * 0.3,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });

  return (
    <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 pt-16 pb-10 overflow-hidden min-h-screen">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-90">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-pink-500/30 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </div>

      {/* Animated falling education icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {educationIcons.map((icon, index) => {
          const { initialY, finalY, delay, duration, size, left, opacity, color } = getFallingIconProps();
          
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
                y: initialY
              }}
              animate={{
                y: finalY,
                rotate: [0, Math.random() > 0.5 ? 180 : -180]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
              }}
            >
              {icon}
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Potential</span> With TrueDreams
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8 max-w-lg"
            >
              Dreaming of becoming a doctor? Join India’s premier coaching institute, trusted for its success.
With expert faculty and a personalized approach, we help future doctors achieve their academic dreams.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={"/courses"}>
              <button cursorpointer className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span  className="cursor-pointer">Explore Courses</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              </Link>
              <Link to={"/apply"}>
              <button  className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-300 rounded-lg shadow transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                </svg>
                <span className="cursor-pointer" >Apply Now</span>
              </button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex items-center"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div className="ml-4">
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
                <p className="text-gray-700 text-sm mt-1">
                Empowering <span className="font-semibold">students to start their </span> learning journey.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-2xl border border-white/20 relative z-10"
          >
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Free Consultation
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Start Your Success Journey
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white/80"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white/80"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white/80"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Course
                </label>
                <select
                  id="course"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white/80"
                >
                  <option value="">Select a course</option>
                  <option value="jee">JEE Preparation</option>
                  <option value="neet">NEET Preparation</option>
                  <option value="foundation">School Foundation</option>
                  <option value="olympiad">Olympiad Coaching</option>
                </select>
              </div>
              <button
                type="submit"
                className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
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

      

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;