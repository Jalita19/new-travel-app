// src/components/GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define icon URLs
const iconUrls = {
  restaurant: 'http://example.com/restaurant-icon.png', // Replace with actual URLs
  hotel: 'http://example.com/hotel-icon.png',
  attraction: 'http://example.com/attraction-icon.png',
};

const GoogleMapComponent = ({ locations }) => {
  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
  };

  const center = { lat: 39.8283, lng: -98.5795 }; // Center coordinates for the contiguous U.S.

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={4} // Adjust zoom level for the entire U.S.
      >
        {locations.map(location => (
          <Marker 
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            icon={iconUrls['restaurant']} // Use the restaurant icon
            onClick={() => onMarkerClick(location)} // Pass the clicked location back to the handler
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;