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

// Check if the model is already compiled to prevent recompilation errors
const News = mongoose.models.News || mongoose.model('News', newsSchema);

// Create a function to connect to MongoDB
async function connectToMongoDB() {
  if (mongoose.connection.readyState === 0) {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } else {
    console.log('MongoDB is already connected');
  }
}

// API route handler for GET request
export async function GET() {
  try {
    await connectToMongoDB();

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
