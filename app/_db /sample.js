// This is a sample use of the db module
import mongoose from 'mongoose';
import Article from './database';

// I'm not sure if this link works.
mongoose.connect("mongodb+srv://mongo:mongo@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

// Create a new blog post object
const entry = new Article({
    title: 'Awesome Post!',
    content: 'This is the best post ever',
});

// Insert the article in our MongoDB database
await entry.save();
