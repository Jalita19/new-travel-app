// src/components/MapComponent.js
import React, { useState } from 'react'; // Import useState for state management
import GoogleMapComponent from './GoogleMapComponent'; // Import your Google Map component
import PopupCard from './PopupCard'; // Import the PopupCard component
import '../styles/MapComponent.css'; // Import styles

const MapComponent = () => {
  const data = {
    attractions: {
      California: [
        {
          id: 5,
          name: 'Yosemite National Park',
          info: 'A beautiful national park in California.',
          details: 'A detailed description of Yosemite National Park...',
          image: 'https://example.com/yosemite.jpg', // Add image URL
          lat: 37.8651,
          lng: -119.5383,
        },
        {
          id: 6,
          name: 'Golden Gate Bridge',
          info: 'Iconic suspension bridge in San Francisco.',
          details: 'A detailed description of the Golden Gate Bridge...',
          image: 'https://example.com/golden-gate.jpg',
          lat: 37.8199,
          lng: -122.4783,
        },
        // Add more attractions...
      ],
      // Add more states...
    },
  };

  const [selectedItem, setSelectedItem] = useState(null); // State to manage selected item

  const handleMarkerClick = (item) => {
    setSelectedItem(item); // Update the selected item state
  };

  const handleClosePopup = () => {
    setSelectedItem(null); // Clear the selected item
  };

  return (
    <div className="map-container">
      <GoogleMapComponent 
        locations={Object.entries(data.attractions).flatMap(([state, items]) => items)} 
        onMarkerClick={handleMarkerClick} // Pass the handler to GoogleMapComponent
      />
      {selectedItem && (
        <PopupCard item={selectedItem} onClose={handleClosePopup} /> // Display PopupCard if an item is selected
      )}
    </div>
  );
};

export default MapComponent;
