import { useState } from "react";

export default function FoodPage() {
  const [stdCount, setStdCount] = useState(25); // Example count

  const clearCount = () => {
    setStdCount(0);
    console.log("Food count cleared"); // Replace with API call to reset count
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Dinner Confirmation</h1>
      <p className="text-gray-400 mb-6">Number of students confirmed for dinner tonight:</p>

      <div className="text-6xl font-bold text-blue-400 mb-6">{stdCount}</div>

      <p className="text-gray-300 text-lg mb-6 italic">
        "Good food, good mood! Let's make tonight’s dinner memorable. 🍽️"
      </p>

      <button
        onClick={clearCount}
        className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Clear Count
      </button>
    </div>
  );
}
