import { Helmet } from "react-helmet";
import { FaCheckCircle, FaAward } from "react-icons/fa";
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

      {/* Main Content */}
      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Students learning"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                    <FaAward className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">6+</h4>
                    <p className="text-gray-600 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                About TrueDreams
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shaping Future Doctors with{" "}
                <span className="text-blue-600">Excellence</span>
              </h3>
              <p className="text-gray-600 mb-8">
                At True Dreams Classes, we are committed to nurturing aspiring
                medical students and guiding them toward success in government
                medical college entrance exams. Founded by a team of experienced
                doctors and educators, our institute is dedicated to providing
                top-quality education, personalized mentorship, and a structured
                learning environment that fosters academic excellence.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {[
                  "Personalized learning plans",
                  "Experienced faculty with 5+ years",
                  "Regular counseling for stress management and motivation",
                  "Competitive exam focused curriculum",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Read More Button */}
              <Link
                to="/courses"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;