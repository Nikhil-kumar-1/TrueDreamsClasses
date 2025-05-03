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
    }, 15000);

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-blue-700 text-white p-6 rounded-lg max-w-md w-full relative">
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-yellow-300 text-xl"
        >
          &times;
        </button>

        <div className="text-center">
          <h2 className="text-xl font-bold mb-3 text-yellow-300">
            Exclusive Scholarship Opportunity!
          </h2>

          <div className="mb-4 p-3 bg-blue-800 rounded">
            <p className="font-semibold mb-2">
              Performance-Based Discounts: Get Up to 75% Off!
            </p>
            <p className="mb-2 text-sm">
              All students get 15% off, but top performers can unlock higher discounts up to 75%!
            </p>
            <p className="text-sm font-bold">
              Take our scholarship test to determine your discount level!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* Top 10 */}
            <div className="bg-yellow-600 p-2 rounded text-center">
              <h3 className="text-xs font-bold">Top 10 Students</h3>
              <p className="text-lg font-bold">75% Off</p>
            </div>

            {/* Next 20 */}
            <div className="bg-gray-600 p-2 rounded text-center">
              <h3 className="text-xs font-bold">Next 20 Students</h3>
              <p className="text-lg font-bold">50% Off</p>
            </div>

            {/* All Students */}
            <div className="bg-blue-600 p-2 rounded text-center">
              <h3 className="text-xs font-bold">All Participants</h3>
              <p className="text-lg font-bold">15% Off</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-red-700 px-2 py-1 rounded text-xs">
              Only {seatsLeft} seats remaining!
            </div>
            <div className="bg-blue-900 px-2 py-1 rounded text-xs">
              Offer ends in {timeLeft.days}d {timeLeft.hours}h
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link 
              to="/apply" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Apply Now
            </Link>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-sm">
              Take Scholarship Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPopup;