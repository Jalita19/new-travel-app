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
      { id: 3, name: 'Fairmont San Francisco', info: 'Historic luxury hotel with stunning views.', lat: 37.7923, lng: -122.4192 },
      { id: 4, name: 'The Langham, Pasadena', info: 'Luxurious hotel with a spa and fine dining.', lat: 34.1478, lng: -118.1445 },
    ],
    restaurants: [
      { id: 1, name: 'In-N-Out Burger', info: 'Popular fast food chain known for burgers.', lat: 34.0522, lng: -118.2437 },
      { id: 2, name: 'Chez Panisse', info: 'Famous restaurant known for California cuisine.', lat: 37.8716, lng: -122.2727 },
      { id: 3, name: 'Nobu Malibu', info: 'Renowned for its sushi and ocean views.', lat: 34.0259, lng: -118.7798 },
      { id: 4, name: 'The French Laundry', info: 'Three Michelin-star restaurant in Yountville.', lat: 38.4042, lng: -122.3642 },
    ],
    attractions: [
      { id: 1, name: 'Disneyland', info: 'World-famous theme park located in Anaheim.', lat: 33.8121, lng: -117.9190 },
      { id: 2, name: 'Golden Gate Bridge', info: 'Iconic suspension bridge in San Francisco.', lat: 37.8199, lng: -122.4783 },
      { id: 3, name: 'Yosemite National Park', info: 'Stunning national park known for its granite cliffs.', lat: 37.8651, lng: -119.5383 },
      { id: 4, name: 'Sequoia and Kings Canyon National Parks', info: 'Famous for giant sequoia trees and stunning landscapes.', lat: 36.4864, lng: -118.5658 },
    ],
  },
  NYC: {
    hotels: [
      { id: 1, name: 'The St. Regis New York', info: 'Luxurious hotel known for its exceptional service.', lat: 40.7616, lng: -73.9741 },
      { id: 2, name: 'The Standard, High Line', info: 'Chic hotel with views of the Hudson River.', lat: 40.7396, lng: -74.0060 },
      { id: 3, name: 'Four Seasons Hotel New York Downtown', info: 'Luxury hotel with contemporary design.', lat: 40.7127, lng: -74.0085 },
    ],
    restaurants: [
      { id: 1, name: 'Katz\'s Delicatessen', info: 'Famous deli known for pastrami sandwiches.', lat: 40.7223, lng: -73.9876 },
      { id: 2, name: 'Le Bernardin', info: 'Fine dining seafood restaurant with three Michelin stars.', lat: 40.7615, lng: -73.9819 },
      { id: 3, name: 'Per Se', info: 'Upscale restaurant with stunning views of Central Park.', lat: 40.7681, lng: -73.9833 },
    ],
    attractions: [
      { id: 1, name: 'Statue of Liberty', info: 'Iconic symbol of freedom located in New York Harbor.', lat: 40.6892, lng: -74.0445 },
      { id: 2, name: 'Central Park', info: 'Large urban park in Manhattan.', lat: 40.7851, lng: -73.9683 },
      { id: 3, name: 'Times Square', info: 'Famous commercial and entertainment hub in Midtown Manhattan.', lat: 40.7580, lng: -73.9855 },
      { id: 4, name: 'Metropolitan Museum of Art', info: 'World-renowned art museum located on the Upper East Side.', lat: 40.7794, lng: -73.9632 },
    ],
  },
  Texas: {
    hotels: [
      { id: 1, name: 'The Joule', info: 'Luxurious hotel in the heart of Dallas.', lat: 32.7878, lng: -96.7993 },
      { id: 2, name: 'Hotel Valencia Riverwalk', info: 'Elegant hotel located on the San Antonio Riverwalk.', lat: 29.4253, lng: -98.4876 },
      { id: 3, name: 'Thompson Austin', info: 'Modern hotel with rooftop bar in downtown Austin.', lat: 30.2637, lng: -97.7468 },
    ],
    restaurants: [
      { id: 1, name: 'Franklin Barbecue', info: 'Famous barbecue joint known for brisket.', lat: 30.2695, lng: -97.7454 },
      { id: 2, name: 'Mamma Ninfa\'s', info: 'Iconic Tex-Mex restaurant in Houston.', lat: 29.7546, lng: -95.3733 },
      { id: 3, name: 'Uchi', info: 'Upscale sushi restaurant in Austin.', lat: 30.2658, lng: -97.7480 },
    ],
    attractions: [
      { id: 1, name: 'The Alamo', info: 'Historic site in San Antonio.', lat: 29.4255, lng: -98.4865 },
      { id: 2, name: 'Space Center Houston', info: 'Official visitor center of NASA Johnson Space Center.', lat: 29.5522, lng: -95.0977 },
      { id: 3, name: 'Six Flags Fiesta Texas', info: 'Amusement park in San Antonio.', lat: 29.5777, lng: -98.6077 },
    ],
  },
  Florida: {
    hotels: [
      { id: 1, name: 'The Breakers Palm Beach', info: 'Luxury beachfront resort in Palm Beach.', lat: 26.7133, lng: -80.0365 },
      { id: 2, name: 'Walt Disney World Swan and Dolphin', info: 'Resort located within the Walt Disney World resort.', lat: 28.3736, lng: -81.5504 },
      { id: 3, name: 'Eau Palm Beach Resort & Spa', info: 'Luxury oceanfront resort in Manalapan.', lat: 26.6032, lng: -80.0584 },
    ],
    restaurants: [
      { id: 1, name: 'Joe’s Stone Crab', info: 'Famous seafood restaurant in Miami Beach.', lat: 25.7729, lng: -80.1340 },
      { id: 2, name: 'The Capital Grille', info: 'Upscale steakhouse with locations across Florida.', lat: 27.9659, lng: -82.4775 },
      { id: 3, name: 'Yardbird Southern Table & Bar', info: 'Southern-style restaurant in Miami.', lat: 25.7956, lng: -80.1918 },
    ],
    attractions: [
      { id: 1, name: 'Walt Disney World', info: 'World-renowned amusement park in Orlando.', lat: 28.4171, lng: -81.5812 },
      { id: 2, name: 'Universal Studios Florida', info: 'Famous theme park and resort in Orlando.', lat: 28.4735, lng: -81.4679 },
      { id: 3, name: 'Everglades National Park', info: 'Unique national park known for its wetlands.', lat: 25.2866, lng: -80.8987 },
      { id: 4, name: 'Key West', info: 'Famous island known for its beaches and nightlife.', lat: 24.5551, lng: -81.7823 },
    ],
  },
  Illinois: {
    hotels: [
      { id: 1, name: 'The Peninsula Chicago', info: 'Luxurious hotel with stunning views of Lake Michigan.', lat: 41.9028, lng: -87.6278 },
      { id: 2, name: 'The Langham, Chicago', info: 'Upscale hotel known for its elegant design.', lat: 41.8882, lng: -87.6205 },
      { id: 3, name: 'Kimpton Gray Hotel', info: 'Modern hotel located in Chicago’s Loop.', lat: 41.8826, lng: -87.6324 },
    ],
    restaurants: [
      { id: 1, name: 'Giordano’s', info: 'Famous for its Chicago-style deep-dish pizza.', lat: 41.8818, lng: -87.6293 },
      { id: 2, name: 'Alinea', info: 'Renowned Michelin-starred restaurant.', lat: 41.9135, lng: -87.6495 },
      { id: 3, name: 'Lou Malnati’s', info: 'Another popular spot for deep-dish pizza.', lat: 41.9170, lng: -87.6485 },
    ],
    attractions: [
      { id: 1, name: 'Millennium Park', info: 'Public park featuring iconic sculptures and art.', lat: 41.8826, lng: -87.6233 },
      { id: 2, name: 'Willis Tower Skydeck', info: 'Observation deck offering stunning views of Chicago.', lat: 41.8789, lng: -87.6359 },
      { id: 3, name: 'Field Museum', info: 'Natural history museum with extensive exhibits.', lat: 41.8672, lng: -87.6164 },
    ],
  },
  Colorado: {
    hotels: [
      { id: 1, name: 'The Brown Palace Hotel and Spa', info: 'Historic luxury hotel in Denver.', lat: 39.7403, lng: -104.9946 },
      { id: 2, name: 'St. Julien Hotel & Spa', info: 'Upscale hotel located in Boulder.', lat: 40.0149, lng: -105.2705 },
      { id: 3, name: 'The Ritz-Carlton, Bachelor Gulch', info: 'Luxury ski resort in Beaver Creek.', lat: 39.6040, lng: -106.3746 },
    ],
    restaurants: [
      { id: 1, name: 'Fraiche', info: 'Modern American restaurant with stunning views.', lat: 40.0145, lng: -105.2797 },
      { id: 2, name: 'The Capital Grille', info: 'Upscale steakhouse with locations in Denver.', lat: 39.7437, lng: -104.9917 },
      { id: 3, name: 'Root Down', info: 'Farm-to-table restaurant in Denver.', lat: 39.7471, lng: -105.0140 },
    ],
    attractions: [
      { id: 1, name: 'Rocky Mountain National Park', info: 'Stunning national park with hiking trails and wildlife.', lat: 40.3428, lng: -105.6836 },
      { id: 2, name: 'Garden of the Gods', info: 'Beautiful park featuring unique rock formations.', lat: 38.8714, lng: -104.8811 },
      { id: 3, name: 'Red Rocks Amphitheatre', info: 'Famous outdoor music venue and park.', lat: 39.6653, lng: -105.2047 },
    ],
  },
  Nevada: {
    hotels: [
      { id: 1, name: 'The Venetian Resort', info: 'Luxurious resort with an Italian theme.', lat: 36.1162, lng: -115.1710 },
      { id: 2, name: 'Bellagio Hotel and Casino', info: 'Famous for its fountain show and luxury accommodations.', lat: 36.1126, lng: -115.1760 },
    ],
    restaurants: [
      { id: 1, name: 'Gordon Ramsay Hell Kitchen', info: 'Celebrity chef restaurant known for its signature dishes.', lat: 36.1061, lng: -115.1736 },
      { id: 2, name: 'Bouchon Bistro', info: 'French bistro by Thomas Keller located in The Venetian.', lat: 36.1162, lng: -115.1710 },
    ],
    attractions: [
      { id: 1, name: 'Las Vegas Strip', info: 'Famous stretch of resorts, casinos, and entertainment.', lat: 36.1147, lng: -115.1728 },
      { id: 2, name: 'Red Rock Canyon National Conservation Area', info: 'Beautiful desert landscape with hiking trails.', lat: 36.1951, lng: -115.4147 },
    ],
  },
  Arizona: {
    hotels: [
      { id: 1, name: 'The Phoenician', info: 'Luxury resort located in Scottsdale.', lat: 33.5012, lng: -111.9763 },
      { id: 2, name: 'Royal Palms Resort and Spa', info: 'Elegant resort with Mediterranean-style accommodations.', lat: 33.4890, lng: -112.0145 },
    ],
    restaurants: [
      { id: 1, name: 'Kai', info: 'Fine dining restaurant featuring Native American cuisine.', lat: 33.2461, lng: -111.9771 },
      { id: 2, name: 'Pizzeria Bianco', info: 'Famous for its artisanal pizzas in Phoenix.', lat: 33.4454, lng: -112.0740 },
    ],
    attractions: [
      { id: 1, name: 'Grand Canyon National Park', info: 'Iconic national park known for its immense canyon.', lat: 36.1069, lng: -112.1129 },
      { id: 2, name: 'Sedona Red Rock Country', info: 'Famous for its stunning red rock formations and scenery.', lat: 34.8697, lng: -111.7609 },
    ],
  },
  Massachusetts: {
    hotels: [
      { id: 1, name: 'The Liberty, a Luxury Collection Hotel', info: 'Historic hotel in Boston.', lat: 42.3662, lng: -71.0725 },
      { id: 2, name: 'The Lenox Hotel', info: 'Upscale hotel located in the Back Bay area.', lat: 42.3495, lng: -71.0780 },
    ],
    restaurants: [
      { id: 1, name: 'Legal Sea Foods', info: 'Famous seafood restaurant with locations in Boston.', lat: 42.3584, lng: -71.0597 },
      { id: 2, name: 'No. 9 Park', info: 'French and Italian restaurant in Beacon Hill.', lat: 42.3604, lng: -71.0660 },
    ],
    attractions: [
      { id: 1, name: 'Fenway Park', info: 'Historic baseball park in Boston.', lat: 42.3467, lng: -71.0972 },
      { id: 2, name: 'The Freedom Trail', info: 'Walking trail through historic Boston sites.', lat: 42.3584, lng: -71.0597 },
    ],
  },
  Washington: {
    hotels: [
      { id: 1, name: 'The Edgewater', info: 'Luxury hotel on the waterfront in Seattle.', lat: 47.6129, lng: -122.3633 },
      { id: 2, name: 'Four Seasons Hotel Seattle', info: 'Upscale hotel with beautiful views of Elliott Bay.', lat: 47.6102, lng: -122.3420 },
    ],
    restaurants: [
      { id: 1, name: 'Canlis', info: 'Fine dining restaurant with stunning views of Lake Union.', lat: 47.6502, lng: -122.3555 },
      { id: 2, name: 'Pike Place Chowder', info: 'Famous for its award-winning clam chowder.', lat: 47.6094, lng: -122.3425 },
    ],
    attractions: [
      { id: 1, name: 'Pike Place Market', info: 'Famous public market overlooking the Elliott Bay waterfront.', lat: 47.6097, lng: -122.3424 },
      { id: 2, name: 'Mount Rainier National Park', info: 'Stunning national park known for its towering peak.', lat: 46.8523, lng: -121.7603 },
    ],
  },
  Oregon: {
    hotels: [
      { id: 1, name: 'The Nines', info: 'Luxury hotel located in downtown Portland.', lat: 45.5201, lng: -122.6762 },
      { id: 2, name: 'The Allison Inn & Spa', info: 'Upscale hotel in the heart of wine country.', lat: 45.2684, lng: -123.0832 },
    ],
    restaurants: [
      { id: 1, name: 'Le Pigeon', info: 'Renowned French-inspired restaurant in Portland.', lat: 45.5253, lng: -122.6762 },
      { id: 2, name: 'Pok Pok', info: 'Famous Thai restaurant in Portland.', lat: 45.5270, lng: -122.6269 },
    ],
    attractions: [
      { id: 1, name: 'Columbia River Gorge', info: 'Scenic area known for its waterfalls and hiking trails.', lat: 45.5960, lng: -121.9834 },
      { id: 2, name: 'Crater Lake National Park', info: 'Stunning national park with a deep blue lake.', lat: 42.9446, lng: -122.1090 },
    ],
  },
  Hawaii: {
    hotels: [
      { id: 1, name: 'The Ritz-Carlton, Kapalua', info: 'Luxurious resort on Maui.', lat: 20.9997, lng: -156.6354 },
      { id: 2, name: 'Halekulani', info: 'Upscale hotel located on Waikiki Beach.', lat: 21.2770, lng: -157.8317 },
    ],
    restaurants: [
      { id: 1, name: 'Mama’s Fish House', info: 'Famous seafood restaurant on Maui.', lat: 20.9300, lng: -156.6597 },
      { id: 2, name: 'Roy’s Hawaii Kai', info: 'Fusion restaurant by celebrity chef Roy Yamaguchi.', lat: 21.3552, lng: -157.7563 },
    ],
    attractions: [
      { id: 1, name: 'Haleakalā National Park', info: 'National park known for its stunning sunrise views.', lat: 20.7094, lng: -156.2530 },
      { id: 2, name: 'Waimea Bay', info: 'Beautiful beach known for its big waves.', lat: 21.5900, lng: -158.0555 },
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
