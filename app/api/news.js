const mongoose = require('mongoose');
require('dotenv').config();

// Define Mongoose Schema
const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  url: String,
  source: String,
  publishedAt: Date,
});

const News = mongoose.model('News', newsSchema, 'allnews'); // Specify the collection name

async function getAllArticles() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'test', // Specify the database name
    });
    console.log('Connected to MongoDB successfully.');

    // Get all articles from the 'allnews' collection
    const articles = await News.find({});
    console.log('Fetched articles:', articles);

    // Close the database connection
    await mongoose.disconnect();
    console.log('Database connection closed.');
  } catch (err) {
    console.error('Error fetching articles:', err);
  }
}

getAllArticles();