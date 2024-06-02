import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ eventLink }) => {
  const [link, setLink] = useState(eventLink || "");

  return (
    <div className="bg-white p-6 shadow rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Generate QR Code</h2>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      {link && <QRCode value={link} />}
    </div>
  );
};

export default QRCodeGenerator;
