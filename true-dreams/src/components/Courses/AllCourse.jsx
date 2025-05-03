import {
  FaArrowRight,
  FaCheck,
  FaChalkboardTeacher,
  FaRegCalendarAlt,
  FaPercentage,
  FaUserMd,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Courses = () => {
  const courses = [
    {
      title: "Foundation Course",
      originalPrice: "70000",
      discountedPrice: "59500",
      discount: "15% OFF",
      icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
      description:
        "Designed specifically for 10th pass students who are beginning their NEET preparation journey. Builds strong fundamentals in Physics, Chemistry, and Biology with special focus on NCERT concepts and basic problem-solving techniques.",
      features: [
        "Weekly 1:1 counseling sessions",
        "Complete NEET syllabus coverage over 2 years",
        "100+ mock tests with detailed analysis",
        "Special focus on NCERT concepts",
        "Basic to intermediate level problem solving",
        "Ideal for students starting after 10th grade"
      ],
    },
    {
      title: "Advance Course",
      originalPrice: "75000",
      discountedPrice: "63750",
      discount: "15% OFF",
      icon: <FaRegCalendarAlt className="text-3xl text-purple-600" />,
      description:
        "Comprehensive program for 11th pass students continuing to 12th grade. Bridges school curriculum with NEET preparation through concept building modules and regular assessments.",
      features: [
        "Weekly 1:1 counseling sessions",
        "100+ mock tests with detailed analysis",
        "Concept building modules for 11th & 12th",
        "Weekly assessments with performance tracking",
        "NCERT + advanced content coverage",
        "School-NEET parallel preparation strategy"
      ],
    },
    {
      title: "Target Course",
      originalPrice: "80000",
      discountedPrice: "68000",
      discount: "15% OFF",
      icon: <FaPercentage className="text-3xl text-green-600" />,
      description:
        "Intensive one-year program for 12th pass students taking a drop year for NEET preparation. Focuses on advanced concepts, high-yield topics, and extensive test series to maximize scores in limited time.",
      features: [
        "Weekly 1:1 counseling sessions",
        "Crash course covering entire syllabus in 1 year",
        "Advanced problem solving techniques",
        "200+ mock tests with All India ranking",
        "Special doubt clearing sessions",
        "Designed specifically for droppers"
      ],
    },
    {
      title: "Subject-wise Courses",
      originalPrice: "41176",
      discountedPrice: "35000",
      discount: "15% OFF",
      icon: <FaUserMd className="text-3xl text-sky-600" />,
      description:
        "Flexible options including one-on-one counseling sessions and subject-specific courses (Physics, Chemistry, or Biology separately). Perfect for students needing focused improvement in specific areas.",
      features: [
        "Weekly 1:1 counseling sessions",
        "Option to take single subjects (₹35,000 per subject)",
        "Personalized study plans",
        "Career guidance and strategy sessions",
        "Flexible scheduling as per student needs"
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>NEET Courses | True Dreams Classes</title>
        <meta
          name="description"
          content="Best NEET preparation courses designed by certified doctors. Enroll now for foundation, advance, and target batches with flexible schedules."
        />
        <meta
          name="keywords"
          content="NEET coaching, medical entrance, True Dreams Classes, foundation course, advance course, target course, flexible batches"
        />
        <link rel="canonical" href="https://yourwebsite.com/courses" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Your Medical Dream Starts Here
            </h1>
            <p className="text-lg mb-8">
              Comprehensive NEET preparation programs designed by doctors who
              cracked medical entrance exams
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/apply"
                className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2"
              >
                Get Free Demo Classes <FaArrowRight />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All our courses come with a special <span className="font-semibold text-blue-600">15% discount</span> on the
            original price. Limited time offer for early enrollments!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-50 p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  {course.icon}
                </div>
                <div className="mt-4">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{course.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{course.originalPrice}
                    </span>
                    <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {course.discount}
                    </span>
                  </div>
                  <span className="block text-xs mt-1 text-gray-500">
                    After scholarship discount
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/apply">
                  <button className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Flexible Scheduling */}
        <div className="bg-blue-600 rounded-lg p-6 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold mb-4">Flexible Scheduling</h3>
              <p className="mb-4">
                We understand the importance of time management for students.
                Our flexible class schedules allow students to learn at their
                own pace without compromising on other academic
                responsibilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Morning Batches
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Evening Batches
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Weekend Classes
                </span>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Batch Timings</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Morning:</span>
                    <span className="font-medium">7:30AM - 12:00PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Evening:</span>
                    <span className="font-medium">4:00PM - 8:00PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Take the First Step Towards Your Medical Dream!
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Join True Dreams Classes today and get expert guidance from
            certified doctors who have successfully cracked medical entrance
            exams. Limited seats available!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: "🎯",
                text: "1 Month Paid Demo – 100% Refund If Not Satisfied!",
              },
              {
                icon: "🏆",
                text: "Scholarship Test Available (Up to 50% Off)",
              },
              {
                icon: "🧠",
                text: "Personalized Career Counseling + Stress Management",
              },
              {
                icon: "👨‍⚕️",
                text: "1-on-1 Mentorship Sessions",
              },
              {
                icon: "📊",
                text: "Individualized Performance Analytics",
              },
              {
                icon: "💯",
                text: "100% Confidential Counseling Sessions",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2"
            >
              Get Free Consultation <FaArrowRight />
            </Link>
            <a href="tel:+919204100108" className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full">
              Call Us: +91 9204100108
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;