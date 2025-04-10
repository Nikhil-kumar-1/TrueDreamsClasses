import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Expert Faculty",
      description: "Learn from highly qualified faculty, including AIIMS and government medical college alumni."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Personalized Target Guidance",
      description: "Tailored study plans and mentorship for each student."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Comprehensive Study Material",
      description: "Well-researched and updated syllabus coverage."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "Regular Counseling & Motivation",
      description: "Focus on mental well-being and stress management."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Scholarships & Financial Aid",
      description: "Helping deserving students achieve their goals."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Complete Career Support",
      description: "Get career counseling, stress management sessions, and motivation from experts to keep you on track for success."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 }
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3 }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 relative overflow-hidden">
       {/* Helmet SEO Tags */}
       <Helmet>
        <title>Why Choose Us | True Dreams Classes</title>
        <meta name="description" content="Discover why True Dreams Classes is the best choice for NEET coaching. Learn from experts, get personalized guidance, and achieve your dream medical career." />
        <meta name="keywords" content="True Dreams Classes, NEET Coaching, Best NEET Institute, Medical Entrance Preparation, Expert Faculty, Career Guidance" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.truedreamsclasses.com/why-choose-us" />
      </Helmet>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pattern-dots pattern-blue-500 pattern-bg-transparent pattern-size-6 pattern-opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">True Dreams Classes</span>?
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto"
          >
            We provide everything you need to crack NEET and secure your medical seat
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 hover:border-transparent relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-blue-600 mr-4 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 flex-grow group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300 flex justify-end">
                  <motion.svg 
                    whileHover={{ x: 5 }}
                    className="w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors duration-300"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10 pattern-dots pattern-white pattern-bg-transparent pattern-size-6 pattern-opacity-20"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h3 
              whileHover={{ scale: 1.01 }}
              className="text-2xl font-bold mb-4"
            >
              Ready to start your medical journey?
            </motion.h3>
            <motion.p 
              whileHover={{ scale: 1.01 }}
              className="text-lg mb-6"
            >
              Join India's most trusted NEET coaching institute with proven results
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={buttonHover}>
  <Link
    to="/apply"
    className="cursor-pointer bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block"
  >
    Apply Now
  </Link>
</motion.div>
<motion.div whileHover={buttonHover}>
  <Link
    to="/contact"
    className="cursor-pointer bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block"
  >
    Contact Us
  </Link>
</motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;