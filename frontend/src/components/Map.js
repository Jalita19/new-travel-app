import React from 'react';
import { GoogleMap as GMap, Marker as GMarker, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '100vh', // Full height of the viewport
  width: '100%',   // Full width
};

const GoogleMap = ({ center, zoom, children }) => {
  return (
    <GMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={zoom}
    >
      {children}
    </GMap>
  );
};

const Marker = (props) => {
  return <GMarker {...props} />;
};

// Export both GoogleMap and Marker
export { GoogleMap, Marker, LoadScript };