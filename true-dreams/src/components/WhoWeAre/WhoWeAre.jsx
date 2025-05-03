import { FaStethoscope, FaUserGraduate, FaBookOpen, FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image Placeholder */}
          <div className="bg-white p-2 rounded-xl shadow-lg border border-blue-100">
  <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-80 rounded-lg flex items-center justify-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1505778276668-26b3ff7af103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29hY2hpbmd8ZW58MHx8MHx8fDA%3D" 
      alt="TrueDreams Classes Campus"
      className="object-cover w-full h-full rounded-lg"
    />
  </div>
</div>


          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-800">
              The Right Path for NEET Preparation
            </h3>
            
            <p className="text-gray-700">
              TrueDreams Classes is a premium medical coaching institute run by doctors. We provide complete NEET preparation for 11th, 12th, and repeater students.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: <FaStethoscope className="text-blue-500 text-2xl" />, 
                  title: "Doctor Faculty", 
                  text: "Learn from MBBS-qualified teachers" 
                },
                { 
                  icon: <FaBookOpen className="text-blue-500 text-2xl" />, 
                  title: "Smart Study", 
                  text: "NCERT + Advanced concepts" 
                },
                { 
                  icon: <FaUserGraduate className="text-blue-500 text-2xl" />, 
                  title: "Doubt Solving", 
                  text: "24/7 doubt clearance support" 
                },
                { 
                  icon: <FaClipboardCheck className="text-blue-500 text-2xl" />, 
                  title: "Test Series", 
                  text: "100+ full length practice tests" 
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-50 p-2 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-700">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
<Link to={"/apply"}>
            <div className="pt-4 ">
              <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full inline-flex items-center gap-2">
                <FaStethoscope /> Join Free Demo Class
              </button>
            </div>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "10+", label: "Senior Doctor Faculty" },
            { number: "500+", label: "NEET Selections" },
            { number: "1000+", label: "Successful Students" },
            { number: "98%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all">
              <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Who;