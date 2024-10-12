// src/data/data.js
const data = {
    restaurants: {
      California: [
        {
          id: 1,
          name: 'The French Laundry',
          info: 'Three Michelin-starred restaurant in Yountville.',
          details: 'A detailed description of The French Laundry...',
          image: 'https://example.com/french-laundry.jpg', // Add image URL
          lat: 38.4042,  // Latitude
          lng: -122.3645 // Longitude
        },
        {
          id: 2,
          name: 'Bestia',
          info: 'Renowned Italian restaurant in Los Angeles.',
          details: 'A detailed description of Bestia...',
          image: 'https://example.com/bestia.jpg',
          lat: 34.0403,
          lng: -118.2501,
        },
        // Add more restaurants...
      ],
      // Add more states...
    },
    hotels: {
      California: [
        {
          id: 3,
          name: 'Hotel California',
          info: 'A lovely hotel in California.',
          details: 'A detailed description of Hotel California...',
          image: 'https://example.com/hotel-california.jpg',
          lat: 34.0094,
          lng: -118.4976,
        },
        {
          id: 4,
          name: 'The Ritz-Carlton',
          info: 'Luxury hotel in San Francisco.',
          details: 'A detailed description of The Ritz-Carlton...',
          image: 'https://example.com/ritz-carlton.jpg',
          lat: 37.7915,
          lng: -122.4106,
        },
        // Add more hotels...
      ],
    },
    attractions: {
      California: [
        {
          id: 5,
          name: 'Yosemite National Park',
          info: 'A beautiful national park in California.',
          details: 'A detailed description of Yosemite National Park...',
          image: 'https://example.com/yosemite.jpg',
          lat: 37.8651,
          lng: -119.5383,
        },
        {
          id: 6,
          name: 'Golden Gate Bridge',
          info: 'Iconic suspension bridge in San Francisco.',
          details: 'A detailed description of the Golden Gate Bridge...',
          image: 'https://example.com/golden-gate.jpg',
          lat: 37.8199,
          lng: -122.4783,
        },
        // Add more attractions...
      ],
    },
  };
  
  export default data;