import { motion } from "framer-motion";
import { FaBook, FaGraduationCap, FaMoneyBillWave, FaUserCheck } from "react-icons/fa";

const TermsOfService = () => {
  const terms = [
    {
      icon: <FaBook className="text-2xl" />,
      title: "Enrollment Terms",
      content: "By enrolling in our courses, you agree to attend classes regularly, complete assignments, and follow our code of conduct."
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Payment Policy",
      content: "Fees must be paid as per the selected payment plan. We offer refunds within 15 days if you're unsatisfied with our services."
    },
    {
      icon: <FaUserCheck className="text-2xl" />,
      title: "Student Conduct",
      content: "We maintain a respectful learning environment. Any misconduct may result in suspension or termination without refund."
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Academic Integrity",
      content: "Plagiarism or cheating in assessments is strictly prohibited and will result in immediate disciplinary action."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="text-yellow-300">Service</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              The rules and guidelines that govern your use of True Dreams Classes services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-lg text-gray-700 mb-8">
            These Terms of Service ("Terms") govern your access to and use of True Dreams Classes' website, 
            services, and applications. By accessing our services, you agree to these Terms.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-purple-600 mb-4">
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                <p className="text-gray-600">{term.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Complete Terms of Service</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">1. Eligibility</h3>
              <p className="text-gray-700">
                Our services are available to individuals who are at least 13 years old. By using our services, 
                you represent that you meet these requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">2. Account Responsibility</h3>
              <p className="text-gray-700">
                You are responsible for maintaining the confidentiality of your account credentials and for all 
                activities that occur under your account.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">3. Course Materials</h3>
              <p className="text-gray-700">
                All course materials provided are for personal use only. Redistribution or commercial use without 
                express written permission is prohibited.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">4. Refund Policy</h3>
              <p className="text-gray-700">
                Refund requests must be made within 15 days of enrollment. After attending more than 4 classes, 
                only partial refunds may be granted.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">5. Modifications</h3>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Continued use after changes constitutes 
                acceptance of the new Terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Acceptance Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
          <p className="text-gray-700 mb-6">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            I Accept These Terms
          </motion.button>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500"
        >
          <p>Last Updated: April 9, 2025</p>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsOfService;