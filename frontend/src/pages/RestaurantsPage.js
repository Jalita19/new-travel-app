import React from 'react';
import '../styles/RestaurantsPage.css';

const RestaurantsPage = () => {
  const restaurantsByState = {
    California: [
      { id: 1, name: 'The French Laundry', info: 'Three Michelin-starred restaurant in Yountville.' },
      { id: 2, name: 'Bestia', info: 'Renowned Italian restaurant in Los Angeles.' },
      { id: 3, name: 'Zuni Café', info: 'Famous for its roast chicken and brick oven pizzas.' },
      { id: 4, name: 'In-N-Out Burger', info: 'Iconic fast-food chain known for its burgers and fries.' },
      { id: 5, name: 'Sushi Nakazawa', info: 'High-end sushi restaurant in San Diego.' },
    ],
    NYC : [
      { id: 6, name: 'Eleven Madison Park', info: 'Fine dining with a focus on seasonal ingredients.' },
      { id: 7, name: 'Katz’s Delicatessen', info: 'Iconic deli famous for its pastrami sandwiches.' },
      { id: 8, name: 'Peter Luger Steak House', info: 'Historic steakhouse known for its quality cuts.' },
      { id: 9, name: 'Momofuku Noodle Bar', info: 'Famous for its ramen and innovative dishes.' },
      { id: 10, name: 'Carbone', info: 'Italian-American restaurant in Greenwich Village.' },
    ],
    Florida: [
      { id: 11, name: 'The Columbia Restaurant', info: 'Oldest restaurant in Florida, known for its Spanish cuisine.' },
      { id: 12, name: 'Yardbird Southern Table & Bar', info: 'Famous for its fried chicken and Southern comfort food.' },
      { id: 13, name: 'Bouchon Bistro', info: 'French restaurant by Thomas Keller in Naples.' },
      { id: 14, name: 'Café Tu Tu Tango', info: 'Artistic eatery with a creative menu in Orlando.' },
    ],
    Nevada: [
      { id: 15, name: 'Joël Robuchon', info: 'Michelin-starred French restaurant in Las Vegas.' },
      { id: 16, name: 'Bazaar Meat', info: 'Steakhouse featuring a variety of meats in a vibrant atmosphere.' },
      { id: 17, name: 'Estiatorio Milos', info: 'Seafood restaurant known for fresh ingredients in Las Vegas.' },
    ],
    Texas: [
      { id: 18, name: 'Franklin Barbecue', info: 'Famous barbecue joint in Austin known for its brisket.' },
      { id: 19, name: 'Uchi', info: 'Award-winning sushi restaurant in Houston.' },
      { id: 20, name: 'Pappadeaux’s', info: 'Popular seafood chain offering a variety of dishes.' },
    ],
    Illinois: [
      { id: 21, name: 'Alinea', info: 'Innovative fine dining experience in Chicago.' },
      { id: 22, name: 'Lou Malnati’s Pizzeria', info: 'Famous for its deep-dish pizza.' },
      { id: 23, name: 'Girl & The Goat', info: 'Popular restaurant known for its shared plates and innovative dishes.' },
    ],
    Massachusetts: [
      { id: 24, name: 'Oleana', info: 'Mediterranean-inspired restaurant in Cambridge.' },
      { id: 25, name: 'Legal Sea Foods', info: 'Renowned for its fresh seafood.' },
      { id: 26, name: 'No. 9 Park', info: 'French and Italian cuisine in a cozy setting.' },
    ],
    Pennsylvania: [
      { id: 27, name: 'Zahav', info: 'Modern Israeli cuisine in Philadelphia.' },
      { id: 28, name: 'Butcher and Singer', info: 'Classic steakhouse with a vintage vibe.' },
    ],
    Oregon: [
      { id: 29, name: 'Le Pigeon', info: 'French-inspired cuisine with a creative twist.' },
      { id: 30, name: 'Pok Pok', info: 'Renowned for its Thai street food.' },
    ],
    Washington: [
      { id: 31, name: 'Cafe 14', info: 'Classic American restaurant with a focus on seasonal ingredients.' },
      { id: 32, name: 'Sushi King', info: 'Japanese cuisine known for its sushi and seasonal flavors.' },
    ],
    Arizona: [
      { id: 33, name: 'Taco Bell', info: 'Mexican-inspired fast food chain known for its taco treats.' },   
    ],
    // Add states and restaurants as needed
  };

  return (
    <div className="restaurants-page">
      <h1>Popular Restaurants in the United States</h1>
      {Object.entries(restaurantsByState).map(([state, restaurants]) => (
        <div key={state}>
          <h2>{state}</h2>
          {restaurants.map(restaurant => (
            <div key={restaurant.id} className="card">
              <div className="card-title">{restaurant.name}</div>
              <div className="card-info">{restaurant.info}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantsPage;
