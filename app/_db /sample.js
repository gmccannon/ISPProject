const mongoose = require('mongoose');
const axios = require('axios');
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

const News = mongoose.model('News', newsSchema);

async function test() {
  try {
    // Check environment variables
    if (!process.env.NEWS_API_KEY || !process.env.MONGODB_URI) {
      throw new Error('Missing NEWS_API_KEY or MONGODB_URI in .env file');
    }

    console.log('Environment variables loaded successfully.');

    // Test MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully.');

    // Fetch data from News API
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        country: 'us',
      },
    });

    if (response.data && response.data.articles) {
      console.log(`Fetched ${response.data.articles.length} articles from NewsAPI.`);
    } else {
      console.log('No articles found from NewsAPI.');
    }

    // Save one article to MongoDB
    const article = response.data.articles[0];
    const savedArticle = await News.create({
      title: article.title,
      description: article.description,
      content: article.content,
      url: article.url,
      source: article.source.name,
      publishedAt: new Date(article.publishedAt),
    });

    console.log('Sample article saved to MongoDB:', savedArticle);

    // Close the database connection
    await mongoose.disconnect();
    console.log('Database connection closed.');

  } catch (err) {
    console.error('Error during test:', err);
  }
}

test();
