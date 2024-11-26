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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="p-5">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for news..."
        className="p-2 border border-gray-300 rounded-lg text-black"
      />
    </div>
  );
};

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/news');
        setArticles(response.data);
        setFilteredArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="min-h-screen">
      <h1 className="p-5 text-4xl text-bold justify-center flex">News</h1>

      <div className="flex justify-center">
        <SearchBox onSearch={handleSearch} />
      </div>

      <div className="min-h-screen flex flex-col items-center">
        {filteredArticles.map((article, index) => (
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