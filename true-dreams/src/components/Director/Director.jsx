import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaGraduationCap, FaUserMd } from "react-icons/fa";

const DirectorSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-8 overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 -translate-y-full overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="currentColor" className="text-white" />
        </svg>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Centered header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Leadership
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="text-blue-600">Director</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Card layout */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden  mx-auto">
          <div className="grid md:grid-cols-3">
            {/* Image section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-1 relative"
            >
              <div className="h-full w-full bg-gray-100">
                <img
                  src="2.png"
                  alt="Dr. Gaurav Sinha"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white">Dr. Gaurav Sinha</h3>
                <p className="text-blue-200">Director & Chief Mentor</p>
              </div>
            </motion.div>

            {/* Content section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 md:p-10"
            >
              {/* Qualifications */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Qualifications</h4>
                </div>
                <ul className="space-y-2 pl-14">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>MBBS (Honours)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>MD (IGIMS, Patna)</span>
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-3">
                    <FaUserMd className="text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Experience</h4>
                </div>
                <p className="text-gray-600 pl-14">
                  6+ years of teaching experience in government medical colleges, with expertise in 
                  innovative teaching methodologies and personalized student mentorship programs.
                </p>
              </div>

              {/* Philosophy */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Educational Philosophy</h4>
                <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                  "True education goes beyond textbooks - it's about igniting curiosity, building character, 
                  and teaching students how to learn. At TrueDreams, we create an environment where 
                  knowledge transforms into wisdom."
                </blockquote>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap items-center gap-4 pl-2">
                <span className="text-sm font-medium text-gray-500">Connect:</span>
                <a href="#" className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="p-2 rounded-full bg-blue-50 text-blue-400 hover:bg-blue-100 transition">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                  <FaEnvelope className="text-xl" />
                </a>
                <a href="#" className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition">
                  <FaPhone className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative curve */}
      <div className="absolute bottom-0 left-0 w-full h-32 translate-y-full overflow-hidden">
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="currentColor" className="text-white" />
        </svg>
      </div>
    </section>
  );
};

export default DirectorSection;