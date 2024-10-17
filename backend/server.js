// const express = require('express');
// const cors = require('cors'); // Allow cross-origin requests

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Sample locations data
// const locations = [
//   { id: "1", name: "Eiffel Tower", type: "attraction", coordinates: { lat: 48.8584, lng: 2.2945 }, info: "Iconic landmark in Paris." },
//   { id: "2", name: "Sushi Restaurant", type: "restaurant", coordinates: { lat: 35.6762, lng: 139.6503 }, info: "Famous sushi place in Tokyo." },
//   { id: "3", name: "Grand Canyon", type: "attraction", coordinates: { lat: 36.1069, lng: -112.1129 }, info: "Natural geological wonder." },
//   { id: "4", name: "Sydney Opera House", type: "attraction", coordinates: { lat: -33.8568, lng: 151.2153 }, info: "Famous performing arts center." },
//   { id: "5", name: "Hotel California", type: "hotel", coordinates: { lat: 34.0522, lng: -118.2437 }, info: "Luxury hotel in Los Angeles." },
//   { id: "1", name: "Statue of Liberty", type: "attraction", coordinates: { lat: 40.6892, lng: -74.0445 }, info: "Iconic symbol of freedom in New York City." },
//   { id: "2", name: "Grand Canyon", type: "attraction", coordinates: { lat: 36.1069, lng: -112.1129 }, info: "Natural geological wonder located in Arizona." },
//   { id: "3", name: "Yellowstone National Park", type: "attraction", coordinates: { lat: 44.4280, lng: -110.5885 }, info: "The first national park in the U.S., known for its geothermal features." },
//   { id: "4", name: "Walt Disney World", type: "attraction", coordinates: { lat: 28.3852, lng: -81.5639 }, info: "Famous theme park located in Orlando, Florida." },
//   { id: "5", name: "Golden Gate Bridge", type: "attraction", coordinates: { lat: 37.8199, lng: -122.4783 }, info: "Iconic suspension bridge in San Francisco, California." },
//   { id: "6", name: "Hollywood Sign", type: "attraction", coordinates: { lat: 34.1341, lng: -118.3215 }, info: "Famous landmark representing the film industry in Los Angeles, California." },
//   { id: "7", name: "The White House", type: "attraction", coordinates: { lat: 38.8977, lng: -77.0365 }, info: "Official residence and workplace of the President of the United States." },
//   { id: "8", name: "Niagara Falls", type: "attraction", coordinates: { lat: 43.0962, lng: -79.0377 }, info: "Famous waterfalls located on the border of New York and Canada." },
//   { id: "9", name: "Mount Rushmore", type: "attraction", coordinates: { lat: 43.8791, lng: -103.4591 }, info: "Iconic sculpture featuring four U.S. presidents in South Dakota." },
//   { id: "10", name: "Las Vegas Strip", type: "attraction", coordinates: { lat: 36.1147, lng: -115.1728 }, info: "Famous resort city known for its entertainment and nightlife." }
// ];
//   // Add more locations as needed

// app.use(cors()); // Use CORS to allow requests from the frontend

// // API endpoint to get locations
// app.get('/api/locations', (req, res) => {
//   res.json(locations);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// MongoDB connection using Mongoose
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the new-travel-app backend!');
});

// Include your post routes (to handle blog posts)
const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
