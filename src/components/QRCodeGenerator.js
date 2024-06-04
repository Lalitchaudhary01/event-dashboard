import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ eventLink }) => {
  const [link, setLink] = useState(eventLink || "");

  return (
    <div className="bg-[#E6F0FA] p-6 shadow rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Generate QR Code
      </h2>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter event link"
      />
      {link && (
        <div className="flex justify-center p-4 bg-gray-100 rounded-lg">
          <QRCode value={link} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
