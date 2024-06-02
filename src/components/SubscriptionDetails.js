import React from "react";

const SubscriptionDetails = ({ subscription }) => (
  <div className="bg-white p-6 shadow rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">
      Current Subscription
    </h2>
    <p className="text-lg text-gray-600 mb-2">
      <strong>Storage Limit:</strong> {subscription.storageLimit} GB
    </p>
    <p className="text-lg text-gray-600">
      <strong>Duration:</strong> {subscription.duration} months
    </p>
  </div>
);

export default SubscriptionDetails;
