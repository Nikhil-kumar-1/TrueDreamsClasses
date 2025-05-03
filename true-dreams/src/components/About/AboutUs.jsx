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
    <div className="bg-white">
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
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Shaping Future Doctors with Excellence
          </h1>
          <p className="text-lg">
            Transforming NEET aspirants into tomorrow's healthcare leaders
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            About True Dreams Classes
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-700 mb-4">
              At True Dreams Classes, we are committed to nurturing aspiring
              medical students and guiding them toward success in government
              medical college entrance exams.
            </p>
            <p className="text-gray-700">
              Founded by a team of experienced doctors and educators, our
              institute is dedicated to providing top-quality education,
              personalized mentorship, and a structured learning environment
              that fosters academic excellence.
            </p>
          </div>

          <div className="bg-blue-700 rounded-lg p-6 text-white shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full mr-4 p-3">
                <img src="3.png" className="w-16 h-16" alt="Director" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Director - Dr. Gaurav Sinha
                </h3>
                <p className="text-blue-200">MBBS(Honours), MD(IGIMS, Patna)</p>
              </div>
            </div>
            <p className="mb-4">
              6 years of teaching experience in government medical colleges,
              specializing in innovative teaching methodologies and student
              mentorship.
            </p>
            <div className="bg-blue-600 p-3 rounded-lg">
              <p className="italic">
                "Our vision is to create not just doctors, but compassionate
                healers who will transform healthcare in India."
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-blue-700 rounded-lg p-8 text-white mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <FaHeartbeat className="text-xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="mb-6">
              Our mission is to create future doctors by equipping students with
              best possible strategy and targeted knowledge to crack medical
              entrance exams. We believe in a student-centric approach, ensuring
              each student receives the stress tackling support required to
              achieve their dreams.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
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
                <div key={i} className="bg-blue-600 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-blue-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "1000+", label: "Students Trained" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Top Rankers" },
            ].map((stat, i) => (
              <div key={i} className="p-3">
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Medical Journey?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Join hundreds of successful medical students who started their
            journey with True Dreams Classes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
            >
              Book Free Counseling Session
            </Link>
            <button className="border-2 border-blue-600 text-blue-600 font-bold py-2 px-6 rounded-full">
              Call Us: +91 9204100109
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;