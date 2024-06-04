import React, { useState } from "react";

const PhotoSelection = ({ onSelect }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleSelect = (photo) => {
    setSelectedPhotos((prevSelected) =>
      prevSelected.includes(photo)
        ? prevSelected.filter((p) => p !== photo)
        : [...prevSelected, photo]
    );
  };

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
    }));
    setUploadedPhotos((prevUploaded) => [...prevUploaded, ...newPhotos]);
  };

  const handleSubmit = () => {
    onSelect(selectedPhotos);
  };

  return (
    <div className="bg- p-6 shadow rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Select Usable Photos</h2>
      <div className="grid grid-cols-3 gap-4">
        {uploadedPhotos.map((photo) => (
          <div key={photo.id} className="relative">
            <img
              src={photo.url}
              alt="Event"
              className="w-full h-48 object-cover rounded"
            />
            <button
              onClick={() => handleSelect(photo)}
              className={`absolute top-2 right-2 p-2 rounded ${
                selectedPhotos.includes(photo) ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {selectedPhotos.includes(photo) ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        className="mt-4"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default PhotoSelection;
