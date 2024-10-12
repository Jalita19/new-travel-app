// src/components/MapComponent.js
import React, { useState } from 'react'; // Import useState for state management
import GoogleMapComponent from './GoogleMapComponent'; // Import your Google Map component
import PopupCard from './PopupCard'; // Import the PopupCard component
import '../styles/MapComponent.css'; // Import styles

const MapComponent = () => {
  const data = {
    restaurants: {
      California: [
        { id: 1, name: 'The French Laundry', lat: 38.4042, lng: -122.3652, info: 'Three Michelin-starred restaurant in Yountville.' },
        { id: 2, name: 'Bestia', lat: 34.0403, lng: -118.2501, info: 'Renowned Italian restaurant in Los Angeles.' },
      ],
      // Add more states and their restaurants...
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
    <div>
      <GoogleMapComponent 
        locations={Object.entries(data.restaurants).flatMap(([state, items]) => items)} 
        onMarkerClick={handleMarkerClick} // Pass the handler to GoogleMapComponent
      />
      {selectedItem && (
        <PopupCard item={selectedItem} onClose={handleClosePopup} /> // Display PopupCard if an item is selected
      )}
    </div>
  );
};

export default MapComponent;
