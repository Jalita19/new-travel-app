import React from 'react';
import '../styles/HotelsPage.css';


const HotelsPage = () => {
  const hotelsByState = {
    California: [
      { id: 1, name: 'The Ritz-Carlton, Los Angeles', info: 'Luxury hotel located in downtown LA.' },
      { id: 2, name: 'Hotel Nikko San Francisco', info: 'Elegant hotel with a Japanese influence.' },
      { id: 3, name: 'Fairmont San Francisco', info: 'Historic hotel with stunning views of the Bay.' },
    ],
    NYC : [
      { id: 4, name: 'The St. Regis New York', info: 'Luxurious hotel known for its exceptional service.' },
      { id: 5, name: 'The Standard, High Line', info: 'Trendy hotel with views of the Hudson River.' },
      { id: 6, name: 'Four Seasons Hotel New York Downtown', info: 'Upscale hotel in the heart of downtown.' },
    ],
    Florida: [
      { id: 7, name: 'The Breakers Palm Beach', info: 'Oceanfront luxury resort with a historic feel.' },
      { id: 8, name: 'Walt Disney World Swan and Dolphin', info: 'Family-friendly resort near Disney parks.' },
      { id: 9, name: 'Biltmore Hotel', info: 'Historic hotel with a beautiful golf course.' },
    ],
    Nevada: [
      { id: 10, name: 'The Venetian Resort', info: 'Luxury resort featuring a canal with gondola rides.' },
      { id: 11, name: 'Bellagio Hotel and Casino', info: 'Famous for its fountain show and luxury amenities.' },
    ],
    Texas: [
      { id: 12, name: 'The Fairmont Austin', info: 'Luxury hotel with modern amenities and views of Lady Bird Lake.' },
      { id: 13, name: 'The Ritz-Carlton, Dallas', info: 'Elegant hotel known for its fine dining and spa.' },
    ],
    Illinois: [
      { id: 14, name: 'The Peninsula Chicago', info: 'Luxury hotel with spacious rooms and excellent service.' },
      { id: 15, name: 'LondonHouse Chicago', info: 'Rooftop bar with stunning views of the city.' },
    ],
    Massachusetts: [
      { id: 16, name: 'The Liberty, a Luxury Collection Hotel', info: 'Historic hotel set in a former jail.' },
      { id: 17, name: 'Four Seasons Hotel Boston', info: 'Upscale hotel with views of Boston Common.' },
    ],
    Colorado: [
      { id: 18, name: 'The Brown Palace Hotel and Spa', info: 'Historic hotel in Denver with luxurious accommodations.' },
      { id: 19, name: 'Vail Marriott Mountain Resort', info: 'Resort located near Vail Mountain ski area.' },
    ],
    Washington: [
      { id: 20, name: 'The Westin Seattle', info: 'Luxury hotel with modern amenities and views of Seattle.' },
      { id: 21, name: 'Holiday Inn Seattle', info: 'Elegant hotel with a spa and spa treatments.' },    
    ],
    'New Jersey': [
      { id: 22, name: 'The Cape May', info: 'Historic hotel with stunning views of Cape May.' },
      { id: 23, name: 'Hilton Garden Inn New York', info: 'Upscale hotel with modern amenities and views of Manhattan.' },
    ],
    Pennsylvania: [
      { id: 24, name: 'The Mirage', info: 'Luxury hotel with a spa and spa treatments.' },
      { id: 25, name: 'The Mirage', info: 'Luxury hotel with a spa and spa treatments.' },
    ],  
    Georgia: [
      { id: 26, name: 'The Mirage', info: 'Luxury hotel with a spa and spa treatments.' },
      { id: 27, name: 'The Mirage', info: 'Luxury hotel with a spa and spa treatments.' },
    ],  
    Arizona: [
      { id: 28, name: 'The Mirage', info: 'Luxury hotel with a spa and spa treatments.' },
      { id: 29, name: 'The Mirage', info: 'Luxury hotel with a spa and spa treatments.' },          
    ]    
    // Add more states and hotels as needed
  };

  return (
    <div className="hotels-page">
      <h1>Popular Hotels in the United States</h1>
      {Object.entries(hotelsByState).map(([state, hotels]) => (
        <div key={state}>
          <h2>{state}</h2>
          {hotels.map(hotel => (
            <div key={hotel.id} className="card">
              <div className="card-title">{hotel.name}</div>
              <div className="card-info">{hotel.info}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HotelsPage;