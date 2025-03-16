import { useState } from "react";

export default function HostelDetails({ hostel }) {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center">{hostel.name}</h1>
                <p className="text-gray-400 text-center text-lg mt-2">{hostel.location}</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span className="text-gray-300">Capacity</span>
                        <p className="text-2xl font-semibold">{hostel.capacity}</p>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span className="text-gray-300">Empty Seats</span>
                        <p className="text-2xl font-semibold">{hostel.empty_seats}</p>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span className="text-gray-300">Fees</span>
                        <p className="text-2xl font-semibold">₹{hostel.fees}</p>
                    </div>

                    {hostel.phone && (
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <span className="text-gray-300">Contact</span>
                            <p className="text-2xl font-semibold">{hostel.phone}</p>
                        </div>
                    )}
                </div>

                <div className="mt-10 flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
