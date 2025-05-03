import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      {/* Big 404 Heading */}
      <motion.h1
        className="text-8xl font-extrabold text-blue-700 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        404
      </motion.h1>

      {/* Sub Heading */}
      <motion.h2
        className="mt-4 text-2xl md:text-3xl font-bold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-2 text-center text-gray-600 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        The page you are looking for might have been removed or is temporarily unavailable.
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Floating emoji */}
      <motion.div
        className="absolute bottom-10 right-10 text-5xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🧭
      </motion.div>
    </div>
  );
}
