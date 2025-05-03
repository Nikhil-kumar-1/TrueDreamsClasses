import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const AboutAndCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Target Course for 12th Pass-Outs",
      description: "Intensive coaching for NEET aspirants who have completed 12th.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "#",
      price: 80000,
      discountPercentage: 15,
    },
    {
      id: 2,
      title: "Advanced Course for 11th Pass-Outs",
      description: "A structured program to build strong medical foundation.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "#",
      price: 75000,
      discountPercentage: 15,
    },
    {
      id: 3,
      title: "Foundation Course for 10th Pass-Outs",
      description: "Early preparation strategy for medical entrance exams.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "#",
      price: 70000,
      discountPercentage: 15,
    }
  ];

  // Calculate discounted price
  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>NEET Preparation Courses | Target, Advanced, Foundation</title>
        <meta name="description" content="Explore our comprehensive NEET preparation courses for 10th, 11th, and 12th pass-outs. Scholarships available. Start your medical journey today!" />
      </Helmet>

      {/* Courses Section */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Comprehensive NEET preparation programs for all levels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => {
            const discountedPrice = calculateDiscountedPrice(course.price, course.discountPercentage);

            return (
              <motion.div 
                key={course.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={course.image} 
                    alt={course.title}
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    0{course.id}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{discountedPrice.toLocaleString()} 
                    </span>
                    <div className="text-sm text-gray-500 mt-1">
                      <span className="line-through mr-2">₹{course.price.toLocaleString()}</span>
                      ({course.discountPercentage}% off)
                    </div>
                  </div>
                  <Link to="/courses">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/courses">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #3b82f6, #6366f1)",
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
            >
              View All Courses
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutAndCourses;
