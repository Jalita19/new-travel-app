import React from 'react';
import '../styles/AttractionsPage.css';
import '../styles/PopupCard.css';
const AttractionsPage = () => {
  const attractionsByState = {
    California: [
      { id: 1, name: 'Disneyland', info: 'World-famous theme park located in Anaheim.' },
      { id: 2, name: 'Golden Gate Bridge', info: 'Iconic suspension bridge in San Francisco.' },
      { id: 3, name: 'Yosemite National Park', info: 'Famous for its stunning granite cliffs and waterfalls.' },
      { id: 4, name: 'Hollywood Sign', info: 'Famous landmark overlooking Los Angeles.' },
    ],
    NYC: [
      { id: 5, name: 'Statue of Liberty', info: 'Iconic symbol of freedom located in New York Harbor.' },
      { id: 6, name: 'Central Park', info: 'Large urban park in Manhattan, great for walking and picnics.' },
      { id: 7, name: 'Empire State Building', info: 'Famous skyscraper with stunning views of NYC.' },
      { id: 8, name: 'Niagara Falls', info: 'Stunning waterfalls located on the border of New York and Canada.' },
    ],
    Florida: [
      { id: 9, name: 'Walt Disney World', info: 'Massive entertainment complex in Orlando.' },
      { id: 10, name: 'Everglades National Park', info: 'Unique ecosystem and home to diverse wildlife.' },
      { id: 11, name: 'Universal Studios', info: 'Famous theme park and film studio in Orlando.' },
    ],
    Nevada: [
      { id: 12, name: 'Las Vegas Strip', info: 'Famous for its vibrant nightlife and casinos.' },
      { id: 13, name: 'Red Rock Canyon', info: 'Beautiful natural area great for hiking and rock climbing.' },
    ],
    Texas: [
      { id: 14, name: 'The Alamo', info: 'Historic site in San Antonio known for the Battle of the Alamo.' },
      { id: 15, name: 'Space Center Houston', info: 'Museum and educational center featuring NASA’s mission control.' },
    ],
    'New Jersey': [
      { id: 16, name: 'Newark Liberty Bell', info: 'Famous landmark in Newark, New Jersey.' },
    ],
    Arizona: [
      { id: 17, name: 'Grand Canyon', info: 'Massive canyon carved by the Colorado River.' },
    ],
    Washington: [
      { id: 18, name: 'Space Needle', info: 'Iconic observation tower in Seattle.' },
    ],
    Illinois: [
      { id: 19, name: 'Willis Tower', info: 'Formerly known as Sears Tower, famous skyscraper in Chicago.' },
      { id: 20, name: 'Navy Pier', info: 'Popular tourist destination with entertainment and dining options.' },
    ],
    Massachusetts: [
      { id: 21, name: 'Fenway Park', info: 'Historic baseball park in Boston.' },
      { id: 22, name: 'Freedom Trail', info: 'Walking trail through historic sites in Boston.' },
    ],
    'Pennsylvania': [
      { id: 23, name: 'Lincoln Memorial', info: 'Famous landmark in Pittsburgh.' },
    ],  
    Georgia: [
      { id: 24, name: 'Columbus Circle', info: 'Famous landmark in Atlanta.' },
    ],
    Ohio: [
      { id: 25, name: 'Columbus Circle', info: 'Famous landmark in Columbus, Ohio.' },
    ],
    'Rhode Island': [
      { id: 26, name: 'Rhode Island', info: 'Famous landmark in Providence, Rhode Island.' },
    ],
    'South Carolina': [
      { id: 27, name: 'University of South Carolina', info: 'Famous landmark in Columbia, South Carolina.' },
    ],
    Oregon: [
      { id: 28, name: 'Mt. Hood', info: 'Famous landmark in Eugene, Oregon.' },
    ],
    Alaska: [
      { id: 30, name: 'Anchorage', info: 'Famous landmark in Anchorage, Alaska.' },
    ],
    Hawaii: [
      { id: 35, name: 'Hawaii Volcanoes', info: 'Famous landmark in Honolulu, Hawaii.' },
    ],
    Michigan: [
      { id: 37, name: 'Grand Canyon', info: 'Famous landmark in Lansing, Michigan.' },
      ]
    // Add more states and attractions as needed
  };

  return (
    <div className="attractions-page">
      <h1>Popular Attractions in the United States</h1>
      {Object.entries(attractionsByState).map(([state, attractions]) => (
        <div key={state}>
          <h2>{state}</h2>
          {attractions.map(attraction => (
            <div key={attraction.id} className="card">
              <div className="card-title">{attraction.name}</div>
              <div className="card-info">{attraction.info}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AttractionsPage;