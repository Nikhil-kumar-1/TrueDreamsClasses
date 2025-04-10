import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      {/* 🛡️ SEO Helmet */}
      <Helmet>
        <title>About TrueDreams Classes | Shaping Future Doctors</title>
        <meta
          name="description"
          content="True Dreams Classes helps aspiring medical students achieve success with personalized mentorship and a competitive exam-focused curriculum."
        />
        
        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="About TrueDreams Classes | Shaping Future Doctors" />
        <meta
          property="og:description"
          content="True Dreams Classes nurtures future doctors with experienced faculty, stress management support, and exam-focused education."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TrueDreams Classes | Shaping Future Doctors" />
        <meta
          name="twitter:description"
          content="Join True Dreams Classes for top-quality medical entrance coaching with experienced mentors."
        />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </Helmet>

      {/* ✨ Rest of your section */}
      <section className="relative bg-gradient-to-b from-white to-gray-100 py-20 overflow-hidden">
        {/* Decorative Top */}
        <div className="absolute top-0 left-0 w-full h-24 -translate-y-full overflow-hidden">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              className="text-gray-50"
            ></path>
          </svg>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Students learning"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20"></div>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                    <FaAward className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">6+</h4>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                [ About TrueDreams ]
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shaping Future Doctors with{" "}
                <span className="text-blue-600">Excellence</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                At True Dreams Classes, we are committed to nurturing aspiring
                medical students and guiding them toward success in government
                medical college entrance exams. Founded by a team of experienced
                doctors and educators, our institute is dedicated to providing
                top-quality education, personalized mentorship, and a structured
                learning environment that fosters academic excellence.
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {[
                  {
                    icon: <FaCheckCircle className="text-green-500" />,
                    text: "Personalized learning plans",
                  },
                  {
                    icon: <FaCheckCircle className="text-green-500" />,
                    text: "Experienced faculty with 5+ years",
                  },
                  {
                    icon: <FaCheckCircle className="text-green-500" />,
                    text: "Regular counseling for stress management and motivation",
                  },
                  {
                    icon: <FaCheckCircle className="text-green-500" />,
                    text: "Competitive exam focused curriculum",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Read More Button */}
              <Link
                to={"/courses"}
                className="cursor-pointer px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:rounded-2xl transition-all duration-300"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 translate-y-full overflow-hidden">
          <svg
            className="absolute top-0 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              className="text-gray-50"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
