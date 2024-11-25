"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';

function getStock(symbol: string) {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_DAILY',
            symbol: 'TSLA',
            apikey: 'YOUR_API_KEY',
          },
        });
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return stockData;
}

export default function Stocks() {
  const stockData = getStock('AAPL');

  return (
    <div className="min-h-screen">
      <h1 className="p-5 text-4xl text-bold justify-center flex">Stock Information</h1>
      <div className="min-h-screen flex flex-col items-center">
        {stockData ? (
          <div className="w-1/2 p-5 border border-gray-300 rounded-lg m-5">
            <h2 className="text-2xl text-bold">AAPL Stock Data</h2>
            <pre>{JSON.stringify(stockData, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}