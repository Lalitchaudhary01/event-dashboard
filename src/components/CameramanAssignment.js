import React, { useState } from "react";

const CameramanAssignment = ({ cameramen, onAssign }) => {
  const [selectedCameraman, setSelectedCameraman] = useState("");
  const [eventId, setEventId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(eventId, selectedCameraman);
    setSelectedCameraman("");
    setEventId("");
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Assign Cameraman</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Event ID</label>
          <input
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Select Cameraman</label>
          <select
            value={selectedCameraman}
            onChange={(e) => setSelectedCameraman(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            {cameramen.map((cameraman) => (
              <option key={cameraman.id} value={cameraman.id}>
                {cameraman.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Assign Cameraman
        </button>
      </form>
    </div>
  );
};

export default CameramanAssignment;
