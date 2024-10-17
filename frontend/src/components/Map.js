import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = ({ userPlaces }) => {
  const mapStyles = {        
    height: "400px",
    width: "100%"};
    
  const defaultCenter = {
    lat: -3.745, lng: -38.523
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        {userPlaces.hotels.map((place, index) => (
          <Marker key={index} position={defaultCenter} label={place.name} />
        ))}
        {userPlaces.restaurants.map((place, index) => (
          <Marker key={index} position={defaultCenter} label={place.name} />
        ))}
        {userPlaces.attractions.map((place, index) => (
          <Marker key={index} position={defaultCenter} label={place.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
