'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
}

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
