import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventOrganizerDashboard from "./components/EventOrganizerDashboard";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventOrganizerDashboard />} />
        <Route path="/dashboard" element={<EventOrganizerDashboard />} />
        {/* Add other routes here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
