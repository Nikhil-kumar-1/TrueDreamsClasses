import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaChalkboardTeacher, FaRegCalendarAlt, FaPercentage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Courses = () => {
  const courses = [
    {
      title: "Foundation Course",
      price: "70,000",
      discount: "15% minimum",
      icon: <FaChalkboardTeacher className="text-3xl" />,
      description: "A specialized program for NEET aspirants who've completed 12th. Includes in-depth subject coverage, extensive test series, and expert guidance for top performance.",
      features: [
        "Complete NEET syllabus coverage",
        "100+ mock tests",
        "Doubt clearing sessions",
        "Personalized mentorship"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Advance Course",
      price: "75,000",
      discount: "15% minimum",
      icon: <FaRegCalendarAlt className="text-3xl" />,
      description: "Structured program for 11th pass students, building strong conceptual foundation. Includes detailed explanations, doubt sessions, and regular assessments.",
      features: [
        "Concept building modules",
        "Weekly assessments",
        "NCERT + advanced content",
        "Performance analytics"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Target Course",
      price: "80,000",
      discount: "15% minimum",
      icon: <FaPercentage className="text-3xl" />,
      description: "Early preparation for 10th pass students. Strengthens fundamentals, improves problem-solving, and lays groundwork for medical entrance exams.",
      features: [
        "Foundation building",
        "Basic to advanced concepts",
        "Regular practice tests",
        "Study plan customization"
      ],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
       <Helmet>
        <title>NEET Courses | True Dreams Classes</title>
        <meta name="description" content="Best NEET preparation courses designed by certified doctors. Enroll now for foundation, advance, and target batches with flexible schedules." />
        <meta name="keywords" content="NEET coaching, medical entrance, True Dreams Classes, foundation course, advance course, target course, flexible batches" />
        <link rel="canonical" href="https://yourwebsite.com/courses" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your <span className="text-yellow-300">Medical Dream</span> Starts Here
            </h1>
            <p className="text-xl mb-8">
              Comprehensive NEET preparation programs designed by doctors who cracked medical entrance exams
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={"/apply"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full flex items-center gap-2"
              >
                Get Free Demo Classes <FaArrowRight />
              </Link>
              <Link to={"/contact"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${course.color} text-white p-6`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <div className="bg-white/20 p-3 rounded-full">
                    {course.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold">₹{course.price}</span>
                    <span className="block text-blue-100">After {course.discount} scholarship</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={"/"}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer w-full py-3 px-6 rounded-lg bg-gradient-to-r ${course.color} text-white font-semibold`}
                >
                  Enroll Now
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flexible Scheduling */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white mb-16"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Flexible Scheduling</h3>
              <p className="mb-4">
                We understand the importance of time management for students. Our flexible class schedules allow 
                students to learn at their own pace without compromising on other academic responsibilities.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Morning Batches</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Evening Batches</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Weekend Classes</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Recorded Lectures</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-3">Batch Timings</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Morning:</span>
                    <span className="font-medium">7AM - 9AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Afternoon:</span>
                    <span className="font-medium">2PM - 4PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Evening:</span>
                    <span className="font-medium">5PM - 7PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Take the First Step Towards Your <span className="text-blue-600">Medical Dream!</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join True Dreams Classes today and get expert guidance from certified doctors who have successfully cracked medical entrance exams. Limited seats available!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "🎯", text: "4 Demo Classes Free" },
              { icon: "💰", text: "100% Refund Guarantee" },
              { icon: "🏆", text: "Scholarship Test Available" },
              { icon: "🧠", text: "Career Counseling" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2"
            >
              Get Free Consultation <FaArrowRight />
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full"
            >
              Call Us: +91 9876543210
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Courses;