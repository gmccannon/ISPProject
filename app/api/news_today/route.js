import mongoose from 'mongoose';

// Define the schema
const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  url: String,
  source: String,
  publishedAt: Date,
});

// Define the model
const News = mongoose.model('News', newsSchema);

// API route handler for GET request
export async function GET() {
  try {
    // Log connection status
    console.log('Checking MongoDB connection...');
    if (!mongoose.connections[0].readyState) {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB');
    } else {
      console.log('MongoDB is already connected');
    }

    // Fetch all articles
    const articles = await News.find({}).sort({ publishedAt: -1 });

    if (!articles.length) {
      console.log('No articles found in MongoDB');
      return new Response(JSON.stringify({ message: 'No articles found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return the articles as a JSON response
    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch articles' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
