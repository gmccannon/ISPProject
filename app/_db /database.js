const mongoose = require('mongoose');
const { Schema } = mongoose;

// Article Schema
const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    }
});

// User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Favorites Schema
const favoritesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    }
});

// HasRead Schema
const hasReadSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    }
});

const Article = mongoose.model('Article', articleSchema);
const User = mongoose.model('User', userSchema);
const Favorite = mongoose.model('Favorite', favoritesSchema);
const HasRead = mongoose.model('HasRead', hasReadSchema);

module.exports = { Article, User, Favorite, HasRead };