import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScholarshipPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(120);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
  });

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown and seats simulation
  useEffect(() => {
    if (!isVisible) return;

    const seatInterval = setInterval(() => {
      setSeatsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 5000);

    const timeInterval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes } = prev;
        
        if (minutes > 0) minutes--;
        else {
          minutes = 59;
          if (hours > 0) hours--;
          else {
            hours = 23;
            if (days > 0) days--;
          }
        }

        return { days, hours, minutes };
      });
    }, 60000);

    return () => {
      clearInterval(seatInterval);
      clearInterval(timeInterval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden animate-fadeIn">
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-yellow-300 text-2xl z-20"
        >
          &times;
        </button>

        {/* Animated confetti */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
            🚀 Exclusive Scholarship Offer!
          </h2>

          <div className="mb-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-semibold mb-2">
              🎯 <span className="underline">Limited-Time:</span>{" "}
              <span className="text-yellow-300 font-bold">
                Up to 75% Off!
              </span>
            </p>
            <p className="mb-3 text-sm md:text-base">
              Score high in our Scholarship Test for massive discounts!
            </p>

            <p className="flex items-center gap-2 text-sm md:text-base">
              💥 <span className="font-bold">Extra 15% Off for Everyone!</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {/* Top 10 */}
            <div className="bg-gradient-to-b from-yellow-600 to-yellow-700 p-2 rounded-lg text-center">
              <div className="text-3xl mb-1">🏆</div>
              <h3 className="text-sm font-bold">Top 10</h3>
              <p className="text-xl font-bold">25% Off</p>
            </div>

            {/* Next 20 */}
            <div className="bg-gradient-to-b from-gray-400 to-gray-600 p-2 rounded-lg text-center">
              <div className="text-3xl mb-1">🥈</div>
              <h3 className="text-sm font-bold">Next 20</h3>
              <p className="text-xl font-bold">15% Off</p>
            </div>

            {/* All Students */}
            <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 rounded-lg text-center">
              <div className="text-3xl mb-1">🎁</div>
              <h3 className="text-sm font-bold">All Students</h3>
              <p className="text-xl font-bold">15% Off</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4">
            <div className="bg-red-600/90 px-3 py-1 rounded-full text-sm">
              <p>🔥 Only {seatsLeft} seats left!</p>
            </div>
            <div className="bg-black/30 px-3 py-1 rounded-full text-sm">
              <p>⏳ Ends in {timeLeft.days}d {timeLeft.hours}h</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to={"/apply"} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full text-sm md:text-base shadow-lg flex-1 flex items-center justify-center gap-2">
              Apply Now <span className="animate-bounce">🚀</span>
            </Link>
            {/* <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-6 rounded-full text-sm md:text-base shadow-lg flex-1 flex items-center justify-center gap-2">
              Take Test <span>📝</span>
            </button> */}
          </div>
        </div>

        {/* Add this to your global CSS */}
        <style jsx>{`
          @keyframes confetti {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-confetti {
            animation: confetti linear forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ScholarshipPopup;