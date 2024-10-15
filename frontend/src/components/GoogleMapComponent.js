import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PopupCard from './PopupCard'; // Import the PopupCard component
import data from '../data/data'; // Import your data

const containerStyle = {
  width: '100%',
  height: '800px', // Increased height for a larger map
};

const center = {
  lat: 39.8283, // Center of the contiguous U.S.
  lng: -98.5795,
};

const GoogleMapComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item

  const handleMarkerClick = (item) => {
    setSelectedItem(item); // Set the selected item to show in the popup
  };

  const handleClosePopup = () => {
    setSelectedItem(null); // Close the popup
  };

  // Combine locations from all categories
  const locations = [
    ...data.restaurants.California,
    ...data.hotels.California,
    ...data.attractions.California,
    // Add more states as needed
  ];

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4} // Adjust zoom level for the entire U.S.
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => handleMarkerClick(location)} // Handle marker click
            // Optional: customize the marker icon if desired
            icon={{
              url: "path/to/custom-icon.png", // Path to a custom icon if needed
              scaledSize: new window.google.maps.Size(30, 30) // Adjust size as needed
            }}
          />
        ))}
      </GoogleMap>
      {selectedItem && (
        <PopupCard 
          item={selectedItem} 
          onClose={handleClosePopup} 
        />
      )} {/* Show popup */}
    </LoadScript>
  );
};

export default GoogleMapComponent;
