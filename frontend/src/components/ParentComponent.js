// src/components/ParentComponent.js
import React, { useState } from 'react';
import PopupCard from './PopupCard'; // Ensure correct import path
import '../styles/ParentComponent.css'; // Import the CSS file for styling

const ParentComponent = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  // Example data for the item to display in the popup
  const sampleItem = {
    name: "Sample Location",
    info: "A beautiful destination for travelers.",
    image: "https://example.com/sample-image.jpg", // Replace with a real image link
    details: "More information about this place, including tips and attractions."
  };

  return (
    <div className="parent-container">
      <h1>Explore Destinations</h1>
      <button className="open-popup-btn" onClick={() => setPopupOpen(true)}>
        Show Popup
      </button>
      
      {popupOpen && (
        <PopupCard
          item={sampleItem}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default ParentComponent;
