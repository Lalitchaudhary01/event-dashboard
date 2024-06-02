import React, { useState } from "react";
import SubscriptionDetails from "./SubscriptionDetails";
import EventForm from "./EventForm";
import CameramanAssignment from "./CameramanAssignment";
import QRCodeGenerator from "./QRCodeGenerator";
import PhotoSelection from "./PhotoSelection";

const EventOrganizerDashboard = () => {
  const [subscription, setSubscription] = useState({
    storageLimit: 100,
    duration: 12,
  });

  const [cameramen] = useState([
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
  ]);

  const [photos] = useState([
    { id: "1", url: "https://via.placeholder.com/150" },
    { id: "2", url: "https://via.placeholder.com/150" },
    { id: "3", url: "https://via.placeholder.com/150" },
  ]);

  const handleCreateEvent = (event) => {
    console.log("Event Created:", event);
  };

  const handleAssignCameraman = (eventId, cameramanId) => {
    console.log(`Cameraman ${cameramanId} assigned to event ${eventId}`);
  };

  const handleSelectPhotos = (selectedPhotos) => {
    console.log("Selected Photos:", selectedPhotos);
  };

  return (
    <div className="p-4">
      <SubscriptionDetails subscription={subscription} />
      <EventForm onCreate={handleCreateEvent} />
      <CameramanAssignment
        cameramen={cameramen}
        onAssign={handleAssignCameraman}
      />
      <QRCodeGenerator eventLink="http://example.com/event" />
      <PhotoSelection photos={photos} onSelect={handleSelectPhotos} />
    </div>
  );
};

export default EventOrganizerDashboard;
