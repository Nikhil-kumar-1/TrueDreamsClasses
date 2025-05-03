import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaUserShield } from "react-icons/fa";

const PrivacyPolicy = () => {
  const policies = [
    {
      icon: <FaLock className="text-2xl" />,
      title: "Information We Collect",
      content: "We collect personal information you provide when registering for our courses, including name, contact details, and academic information. We also automatically collect usage data through cookies."
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "How We Use Information",
      content: "Your information is used to provide and improve our services, process payments, communicate with you, and personalize your learning experience. We never sell your data to third parties."
    },
    {
      icon: <FaUserShield className="text-2xl" />,
      title: "Data Protection",
      content: "We implement industry-standard security measures including encryption and secure servers. Only authorized personnel have access to your information for legitimate educational purposes."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-purple-700 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-yellow-300">Policy</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trust is important to us. Learn how we protect and manage your personal information.
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
            At True Dreams Classes, we are committed to protecting your privacy. This policy explains how we collect, use, 
            and safeguard your personal information when you use our services.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-4">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600">{policy.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Policies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Detailed Privacy Policy</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">1. Information Collection</h3>
              <p className="text-gray-700">
                We collect information when you register, enroll in courses, make payments, or interact with our platform. 
                This includes personal details, academic records, and payment information.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">2. Data Usage</h3>
              <p className="text-gray-700">
                Your data helps us provide services, improve our courses, communicate important updates, and ensure 
                platform security. We analyze usage patterns to enhance learning experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">3. Data Sharing</h3>
              <p className="text-gray-700">
                We only share information with trusted third parties essential for service provision (payment processors, 
                cloud services). We never sell data to marketers or advertisers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">4. Your Rights</h3>
              <p className="text-gray-700">
                You can access, correct, or request deletion of your personal data. Contact our Data Protection Officer 
                at privacy@truedreams.com for any privacy-related concerns.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500"
        >
          <p>Last Updated: April 9, 2025</p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;