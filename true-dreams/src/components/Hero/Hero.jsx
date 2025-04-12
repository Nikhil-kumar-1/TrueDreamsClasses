import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".edu-icon");
    const interval = setInterval(() => {
      icons.forEach((icon) => {
        const randomDelay = Math.random() * 3;
        icon.style.animation = `blink 1.5s ease ${randomDelay}s infinite`;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const educationIcons = [
    "📚", "✏️", "🎓", "🧮", "🏆", "📝", "📖", "🔬", "🧪", "📊",
    "🧠", "👩‍🎓", "👨‍🎓", "🏫", "📓", "📌", "✒️", "📐", "🧲", "🔭"
  ];

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
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 pt-16 pb-10 overflow-hidden min-h-screen">
      {/* Background with animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-10000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-5000/80 via-purple-900/80 to-blue-900/80"></div>
        
        {/* Animated floating dots */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Falling education icons */}
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
                y: initialY,
                textShadow: '0 0 8px rgba(255,255,255,0.5)'
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
          <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                TrueDreams
              </span> - Your Gateway to Medical Success
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-lg font-medium"
            >
              Join India's most trusted NEET coaching institute with proven results. 
              Our expert faculty and personalized approach will help you achieve your MBBS dreams.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={"/courses"}>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Explore Courses</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
              <Link to={"/apply"}>
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 border border-white/30 rounded-lg shadow transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
              className="mt-10 flex items-center"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white/50 shadow-sm"
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
                <p className="text-white/90 text-sm mt-1 font-medium">
                  Trusted by <span className="font-bold">1000+ students</span> for NEET preparation
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-800/80 to-purple-800/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/20 relative z-10"
          >
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Free Consultation
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Start Your Medical Journey
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition bg-white/10 text-white placeholder-white/70"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition bg-white/10 text-white placeholder-white/70"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition bg-white/10 text-white placeholder-white/70"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-white/90 mb-1">
                  Interested Course
                </label>
                <select
                  id="course"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition bg-white/10 text-white"
                >
                  <option value="">Select a course</option>
                  <option value="neet">NEET UG Coaching</option>
                  <option value="neetpg">NEET PG Coaching</option>
                  <option value="foundation">Foundation Course</option>
                  <option value="crash">Crash Course</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                Get Free Consultation
              </button>
            </form>
            <p className="text-xs text-white/70 mt-4 text-center">
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
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;