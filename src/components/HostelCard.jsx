import React from 'react'

export default function HostelCard({ hostel }) {
    return (
      <div className="min-w-72 max-w-md mx-auto p-4 bg-gray-900 shadow-lg rounded-2xl border border-gray-700 text-white">
        <h2 className="text-2xl font-semibold text-center">{hostel.name}</h2>
        <p className="text-gray-400 text-center">{hostel.location}</p>
  
        <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
            <span className="text-gray-300">Empty Seats</span>
            <span className="font-bold text-lg">{hostel.empty_seats}</span>
          </div>
          <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
            <span className="text-gray-300">Fees</span>
            <span className="font-bold text-lg">₹{hostel.fees}</span>
          </div>
        </div>
  
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    );
  }
  