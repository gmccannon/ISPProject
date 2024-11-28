import mongoose from 'mongoose';
import axios from 'axios';
import 'dotenv/config';

// Define Mongoose Schema
const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  url: String,
  source: String,
  publishedAt: Date,
});

// Define TypeScript types
interface Article {
  title?: string;
  description?: string;
  content?: string;
  url?: string;
  source?: {
    name?: string;
  };
  publishedAt?: string;
}

const News = mongoose.model('AllNews', newsSchema);

async function test() {
  try {
    // Check environment variables
    if (!process.env.NEWS_API_KEY || !process.env.MONGODB_URI) {
      throw new Error('Missing NEWS_API_KEY or MONGODB_URI in .env file');
    }

    console.log('Environment variables loaded successfully.');

    // Test MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully.');

    // Fetch data from News API
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        from: '2024-10-25',
        domains: 'techcrunch.com',
      },
    });

    if (response.data && response.data.articles) {
      console.log(`Fetched ${response.data.articles.length} articles from NewsAPI.`);

      // Save all articles to MongoDB
      const savedArticles = await News.insertMany(
        response.data.articles.map((article: Article) => ({
          title: article.title || 'Untitled',
          description: article.description || 'No description',
          content: article.content || 'No content',
          url: article.url || 'No URL',
          source: article.source && article.source.name ? article.source.name : 'Unknown Source',
          publishedAt: article.publishedAt ? new Date(article.publishedAt) : null,
        }))
      );

      console.log('All articles saved to MongoDB:', savedArticles);
    } else {
      console.log('No articles found from NewsAPI.');
    }

    // Close the database connection
    await mongoose.disconnect();
    console.log('Database connection closed.');

  } catch (err) {
    console.error('Error during test:', err);
  }
}

test();