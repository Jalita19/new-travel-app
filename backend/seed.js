const mongoose = require('mongoose');
const Post = require('./models/Post'); // Replace with your actual Post model path
require('dotenv').config();  // To load environment variables

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB for seeding');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Sample data to seed the database
const seedData = [
  { title: 'First Post', content: 'This is the content of the first post.', author: 'Admin' },
  { title: 'Second Post', content: 'Content for the second post.', author: 'User1' },
];

// Function to seed the data
const seedDatabase = async () => {
  try {
    await Post.deleteMany({});  // Clear the existing collection
    await Post.insertMany(seedData);  // Insert seed data
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
