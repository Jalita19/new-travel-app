import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Import from the correct library
import axios from 'axios';

const libraries = ['places'];
const mapContainerStyle = {
  height: '100vh', // Full height for the map
  width: '100%',
};
const center = {
  lat: 19.4326, // Mexico City coordinates
  lng: -99.1332,
};

const MapPage = () => {
  const [locations, setLocations] = useState([]);

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
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={libraries}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {locations.map(location => (
          <Marker 
            key={location._id}
            position={{ lat: location.coordinates.lat, lng: location.coordinates.lng }} 
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapPage;