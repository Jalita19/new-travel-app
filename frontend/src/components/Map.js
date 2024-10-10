import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const Map = () => {
  const [locations, setLocations] = useState([]);
  
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 19.4326, // Default latitude (Mexico City)
    lng: -99.1332  // Default longitude
  };

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
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        {locations.map(location => (
          <Marker
            key={location._id}
            position={{
              lat: location.coordinates.lat,
              lng: location.coordinates.lng
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;