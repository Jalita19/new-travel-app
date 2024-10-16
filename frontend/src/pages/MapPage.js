import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import '../styles/MapPage.css';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = {
  lat: 39.8283,
  lng: -98.5795,
};

// Define data for hotels, restaurants, and attractions
const placesByState = {
  California: {
    hotels: [
      { id: 1, name: 'The Ritz-Carlton, Los Angeles', info: 'Luxury hotel in downtown LA.', lat: 34.0522, lng: -118.2437 },
      { id: 2, name: 'Hotel Nikko San Francisco', info: 'Elegant hotel with a Japanese influence.', lat: 37.7749, lng: -122.4194 },
    ],
    restaurants: [
      { id: 1, name: 'In-N-Out Burger', info: 'Popular fast food chain known for burgers.', lat: 34.0522, lng: -118.2437 },
      { id: 2, name: 'Chez Panisse', info: 'Famous restaurant known for California cuisine.', lat: 37.8716, lng: -122.2727 },
    ],
    attractions: [
      { id: 1, name: 'Disneyland', info: 'World-famous theme park located in Anaheim.', lat: 33.8121, lng: -117.9190 },
      { id: 2, name: 'Golden Gate Bridge', info: 'Iconic suspension bridge in San Francisco.', lat: 37.8199, lng: -122.4783 },
    ],
  },
  NYC: {
    hotels: [
      { id: 1, name: 'The St. Regis New York', info: 'Luxurious hotel known for its exceptional service.', lat: 40.7616, lng: -73.9741 },
    ],
    restaurants: [
      { id: 1, name: 'Katz\'s Delicatessen', info: 'Famous deli known for pastrami sandwiches.', lat: 40.7223, lng: -73.9876 },
    ],
    attractions: [
      { id: 1, name: 'Statue of Liberty', info: 'Iconic symbol of freedom located in New York Harbor.', lat: 40.6892, lng: -74.0445 },
      { id: 2, name: 'Central Park', info: 'Large urban park in Manhattan.', lat: 40.7851, lng: -73.9683 },
    ],
  },
  // Add more states and categories (hotels, restaurants, attractions)
};

const MapPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAxO5TRs0s9oP-DOFoO5wxTTShOWQd7ZPc', // Replace with your Google Maps API key
  });

  const [selectedPlace, setSelectedPlace] = useState(null); // Holds the place selected for InfoWindow
  const [mapCenter, setMapCenter] = useState(defaultCenter); // Manage map center state

  if (!isLoaded) return <div>Loading...</div>;

  // Define different icons for hotels, restaurants, and attractions
  const hotelIcon = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  const restaurantIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
  const attractionIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';

  return (
    <div className="map-page">
      <h1 className="page-title">Explore Hotels, Restaurants, and Attractions in the United States</h1>
      <div className="map-and-list-container">
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={selectedPlace ? 10 : 4}
          >
            {/* Loop through all states, then categories, and display markers */}
            {Object.entries(placesByState).map(([state, { hotels, restaurants, attractions }]) => (
              <React.Fragment key={state}>
                {hotels.map((hotel) => (
                  <Marker
                    key={`hotel-${hotel.id}`}
                    position={{ lat: hotel.lat, lng: hotel.lng }}
                    onClick={() => {
                      setSelectedPlace({ ...hotel, category: 'Hotel' });
                      setMapCenter({ lat: hotel.lat, lng: hotel.lng });
                    }}
                    icon={{
                      url: hotelIcon,
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                ))}
                {restaurants.map((restaurant) => (
                  <Marker
                    key={`restaurant-${restaurant.id}`}
                    position={{ lat: restaurant.lat, lng: restaurant.lng }}
                    onClick={() => {
                      setSelectedPlace({ ...restaurant, category: 'Restaurant' });
                      setMapCenter({ lat: restaurant.lat, lng: restaurant.lng });
                    }}
                    icon={{
                      url: restaurantIcon,
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                ))}
                {attractions.map((attraction) => (
                  <Marker
                    key={`attraction-${attraction.id}`}
                    position={{ lat: attraction.lat, lng: attraction.lng }}
                    onClick={() => {
                      setSelectedPlace({ ...attraction, category: 'Attraction' });
                      setMapCenter({ lat: attraction.lat, lng: attraction.lng });
                    }}
                    icon={{
                      url: attractionIcon,
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                ))}
              </React.Fragment>
            ))}

            {/* InfoWindow logic to display details of selected place */}
            {selectedPlace && (
              <InfoWindow
                position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div className="info-window">
                  <h2>{selectedPlace.name}</h2>
                  <p>{selectedPlace.category}: {selectedPlace.info}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>

        {/* List of hotels, restaurants, and attractions by state */}
        <div className="place-list">
          <h2 className="list-title">Explore by State</h2>
          {Object.entries(placesByState).map(([state, { hotels, restaurants, attractions }]) => (
            <div key={state} className="state-section">
              <h3>{state}</h3>

              {/* List Hotels */}
              <h4>Hotels</h4>
              <ul>
                {hotels.map((hotel) => (
                  <li
                    key={`hotel-${hotel.id}`}
                    className={`place-item ${selectedPlace && selectedPlace.id === hotel.id && selectedPlace.category === 'Hotel' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedPlace({ ...hotel, category: 'Hotel' });
                      setMapCenter({ lat: hotel.lat, lng: hotel.lng });
                    }}
                  >
                    {hotel.name} - {hotel.info}
                  </li>
                ))}
              </ul>

              {/* List Restaurants */}
              <h4>Restaurants</h4>
              <ul>
                {restaurants.map((restaurant) => (
                  <li
                    key={`restaurant-${restaurant.id}`}
                    className={`place-item ${selectedPlace && selectedPlace.id === restaurant.id && selectedPlace.category === 'Restaurant' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedPlace({ ...restaurant, category: 'Restaurant' });
                      setMapCenter({ lat: restaurant.lat, lng: restaurant.lng });
                    }}
                  >
                    {restaurant.name} - {restaurant.info}
                  </li>
                ))}
              </ul>

              {/* List Attractions */}
              <h4>Attractions</h4>
              <ul>
                {attractions.map((attraction) => (
                  <li
                    key={`attraction-${attraction.id}`}
                    className={`place-item ${selectedPlace && selectedPlace.id === attraction.id && selectedPlace.category === 'Attraction' ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedPlace({ ...attraction, category: 'Attraction' });
                      setMapCenter({ lat: attraction.lat, lng: attraction.lng });
                    }}
                  >
                    {attraction.name} - {attraction.info}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
