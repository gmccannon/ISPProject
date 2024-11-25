'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
}


const SearchBox = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
        className="p-2 border border-gray-300 rounded-lg"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </div>
  );
};

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/news_today');  // Ensure this URL matches the API route
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="p-5 text-4xl text-bold justify-center flex">News Today</h1>

      <div className="flex justify-center">
        <SearchBox onSearch={(query) => {
          // Implement the search functionality here
          console.log('Search query:', query);
        }} />
      </div>

      <div className="min-h-screen flex flex-col items-center">
        {articles.map((article, index) => (
          <div key={index} className="w-1/2 p-5 border border-gray-300 rounded-lg m-5">
            <h2 className="text-2xl text-bold">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
