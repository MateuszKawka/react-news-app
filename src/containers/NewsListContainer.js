import React from "react";
import NewsItem from "../components/NewsItem";
const NewsListContainer = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 pt-0 gap-10 mt-10 container mx-auto">
      {news.map((item) => (
        <NewsItem newsData={item} key={item.title} />
      ))}
    </div>
  );
};

export default NewsListContainer;
