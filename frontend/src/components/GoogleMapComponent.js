// src/components/GoogleMapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PopupCard from './PopupCard'; // Import the PopupCard component
import data from '../data/data'; // Import your data

// Define icon URLs
const iconUrls = {
    restaurant: 'http://example.com/restaurant-icon.png', // Replace with actual URLs
    hotel: 'http://example.com/hotel-icon.png',
    attraction: 'http://example.com/attraction-icon.png',
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
    ];

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
                        icon={iconUrls[location.type]} // Use appropriate icon based on type
                        onClick={() => handleMarkerClick(location)} // Handle marker click
                    />
                ))}
            </GoogleMap>
            {selectedItem && <PopupCard item={selectedItem} onClose={handleClosePopup} />} {/* Show popup */}
        </LoadScript>
    );
};

export default GoogleMapComponent;
