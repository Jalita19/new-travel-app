import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Import from the library
import axios from 'axios';

// Define icon URLs
const iconUrls = {
  restaurant: '<i class="fa-solid fa-utensils"></i>', // Replace with actual URLs
  hotel: 'http://example.com/hotel-icon.png',
  attraction: 'http://example.com/attraction-icon.png',
};

const MapPage = () => {
  const [locations, setLocations] = useState([]);

  const center = {
    lat: 39.8283, // Center of the contiguous United States
    lng: -98.5795,
  };

  const zoomLevel = 4; // Adjust zoom level for the entire U.S.

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap center={center} zoom={zoomLevel}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{
              lat: location.coordinates.lat,
              lng: location.coordinates.lng,
            }}
            icon={iconUrls[location.type]} // Use the icon based on type
            onClick={() => {
              alert(`${location.name}: ${location.info}`); // Show info when marker is clicked
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapPage;
