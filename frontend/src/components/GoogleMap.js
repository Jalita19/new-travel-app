import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = ({ locations }) => {
  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
  };

  const center = { lat: 19.4326, lng: -99.1332 }; // Center coordinates for Mexico City

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
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

export default GoogleMapComponent;