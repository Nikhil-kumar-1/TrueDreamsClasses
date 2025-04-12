import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaUserMd,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaAward,
  FaHeartbeat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Us | True Dreams Classes</title>
        <meta
          name="description"
          content="Learn about True Dreams Classes - Shaping future doctors through innovative education, expert mentorship, and a proven track record of success."
        />
        <meta
          name="keywords"
          content="True Dreams Classes, NEET coaching, medical entrance preparation, best NEET institute"
        />
        <meta name="author" content="True Dreams Classes" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-300">Shaping Future Doctors</span>{" "}
              with Excellence
            </h1>
            <p className="text-xl mb-8">
              Transforming NEET aspirants into tomorrow's healthcare leaders
              through innovative education
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="overflow-x-hidden py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">True Dreams Classes</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-14 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                At True Dreams Classes, we are committed to nurturing aspiring
                medical students and guiding them toward success in government
                medical college entrance exams.
              </p>
              <p className="text-lg text-gray-700">
                Founded by a team of experienced doctors and educators, our
                institute is dedicated to providing top-quality education,
                personalized mentorship, and a structured learning environment
                that fosters academic excellence.
              </p>
            </div>
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl opacity-60"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-white/20 rounded-full mr-4">
                <img src="3.png" className="text-3xl w-20 h-20" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Director - Dr. Gaurav Sinha
                </h3>
                <p className="text-blue-100">MBBS(Honours), MD(IGIMS, Patna)</p>
              </div>
            </div>
            <p className="mb-6">
              6 years of teaching experience in government medical colleges,
              specializing in innovative teaching methodologies and student
              mentorship.
            </p>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <p className="italic">
                "Our vision is to create not just doctors, but compassionate
                healers who will transform healthcare in India."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <FaHeartbeat className="text-3xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg mb-8">
              Our mission is to create future doctors by equipping students with
              best possible strategy and targeted knowledge to crack medical
              entrance exams. We believe in a student-centric approach, ensuring
              each student receives the stress tackling support required to
              achieve their dreams.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaGraduationCap />,
                  title: "Proven Methodology",
                  text: "Structured curriculum designed by medical professionals",
                },
                {
                  icon: <FaChalkboardTeacher />,
                  title: "Personalized Mentorship",
                  text: "1:1 guidance from experienced faculty",
                },
                {
                  icon: <FaAward />,
                  title: "Result-Oriented",
                  text: "Consistent track record of top rankers",
                },
                {
                  icon: <FaUserMd />,
                  title: "Doctor Educators",
                  text: "Learn from doctors who cracked NEET",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                  </div>
                  <p className="text-blue-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "1000+", label: "Students Trained" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Top Rankers" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl font-bold text-blue-600 mb-2"
                >
                  {stat.number}
                </motion.p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Begin Your{" "}
            <span className="text-blue-600">Medical Journey</span>?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of successful medical students who started their
            journey with True Dreams Classes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full"
            >
              Book Free Counseling Session
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

export default AboutUs;
