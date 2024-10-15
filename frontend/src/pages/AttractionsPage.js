import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import PopupCard from '../components/PopupCard';
import '../styles/AttractionsPage.css';

const containerStyle = {
  width: '100%',
  height: '800px', // Increased height for a larger map
};

const center = {
  lat: 39.8283, // Center of the USA
  lng: -98.5795,
};

// Define attractions with their lat/lng
const attractionsByState = {
  California: [
    { id: 1, name: 'Disneyland', info: 'World-famous theme park located in Anaheim.', lat: 33.8121, lng: -117.9190 },
    { id: 2, name: 'Golden Gate Bridge', info: 'Iconic suspension bridge in San Francisco.', lat: 37.8199, lng: -122.4783 },
    { id: 3, name: 'Yosemite National Park', info: 'Famous for its stunning granite cliffs and waterfalls.', lat: 37.8651, lng: -119.5383 },
    { id: 4, name: 'Hollywood Sign', info: 'Famous landmark overlooking Los Angeles.', lat: 34.1341, lng: -118.3215 },
  ],
  NYC: [
    { id: 5, name: 'Statue of Liberty', info: 'Iconic symbol of freedom located in New York Harbor.', lat: 40.6892, lng: -74.0445 },
    { id: 6, name: 'Central Park', info: 'Large urban park in Manhattan, great for walking and picnics.', lat: 40.7851, lng: -73.9683 },
    { id: 7, name: 'Empire State Building', info: 'Famous skyscraper with stunning views of NYC.', lat: 40.748817, lng: -73.985428 },
    { id: 8, name: 'Niagara Falls', info: 'Stunning waterfalls located on the border of New York and Canada.', lat: 43.0962, lng: -79.0377 },
  ],
  Florida: [
    { id: 9, name: 'Walt Disney World', info: 'Massive entertainment complex in Orlando.', lat: 28.3852, lng: -81.5639 },
    { id: 10, name: 'Everglades National Park', info: 'Unique ecosystem and home to diverse wildlife.', lat: 25.2866, lng: -80.8987 },
    { id: 11, name: 'Universal Studios', info: 'Famous theme park and film studio in Orlando.', lat: 28.4811, lng: -81.4677 },
  ],
  // Continue adding other states and their attractions
};

const AttractionsPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAxO5TRs0s9oP-DOFoO5wxTTShOWQd7ZPc', // Replace with your Google Maps API key
  });

  const [selectedAttraction, setSelectedAttraction] = useState(attractionsByState.California[0]); // Default to the first attraction

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="attractions-page">
      <h1>Popular Attractions in the United States</h1>
      <div className="map-and-card-container">
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
          >
            {Object.entries(attractionsByState).map(([state, attractions]) =>
              attractions.map((attraction) => (
                <Marker // Use Marker component
                  key={attraction.id}
                  position={{ lat: attraction.lat, lng: attraction.lng }}
                  onClick={() => setSelectedAttraction(attraction)}
                  icon={{
                    url: "path/to/custom-icon.png", // Path to a custom icon if needed
                    scaledSize: new window.google.maps.Size(30, 30) // Adjust size as needed
                  }}
                />
              ))
            )}
          </GoogleMap>
        </div>
        <div className="card-container">
          {selectedAttraction && <PopupCard item={selectedAttraction} onClose={() => setSelectedAttraction(null)} />}
        </div>
      </div>
    </div>
  );
};

export default AttractionsPage;
