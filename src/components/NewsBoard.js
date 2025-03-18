import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        console.log("API Key:", process.env.REACT_APP_NEWS_API_KEY);

        console.log("Fetching URL:", url); // Debugging the URL
        const response = await fetch(url);

        console.log("Response Status:", response.status); // Debugging the status
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Articles:", data.articles); // Debugging the fetched articles
        setArticles(data.articles || []); // Ensure that articles is an array
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setArticles([]); // Set to empty array on error
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default NewsBoard;
