import { useState } from "react";
import HostelCard from "./HostelCard"; // Import your HostelCard component

const hostelsData = [
  { id: 1, name: "Sunrise Hostel", location: "Bangalore", empty_seats: 5, fees: 8000 },
  { id: 2, name: "Moonlight Hostel", location: "Mumbai", empty_seats: 2, fees: 7500 },
  { id: 3, name: "Elite Stay", location: "Delhi", empty_seats: 10, fees: 9000 },
  { id: 4, name: "Harmony Hostel", location: "Pune", empty_seats: 3, fees: 7000 },
];

export default function HostelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const [hostels, setHostels] = useState(hostelsData);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredHostels = hostels.filter((hostel) =>
    hostel[filter].toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🏨 Available Hostels</h1>

      {/* Centered Search & Filter */}
      <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder={`Search by ${filter}...`}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring focus:ring-blue-500"
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring focus:ring-blue-500"
        >
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="fees">Fees</option>
        </select>
      </div>

      {/* Responsive Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-36">
        {filteredHostels.length > 0 ? (
          filteredHostels.map((hostel) => <HostelCard key={hostel.id} hostel={hostel} />)
        ) : (
          <p className="text-center col-span-full text-gray-400">No hostels found.</p>
        )}
      </div>
    </div>
  );
}
