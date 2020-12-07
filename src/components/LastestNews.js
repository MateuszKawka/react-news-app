import React from "react";
const LastestNews = ({ news }) => {
  return (
    <div className="w-full h-60 relative ">
      <div className="w-full h-full opacity-70 bg-gradient-to-t from-black via-transparent to-black z-10 absolute"></div>
      <img src={news.urlToImage} className="w-full h-full object-cover" alt="lala"/>
      <div className="absolute z-20 bottom-0 px-4 pb-4 text-white">
        <h2 className="font-semibold line-clamp-2">{news.title}</h2>
        <p className="text-sm">20-12-20 by {news.author}</p>
      </div>
    </div>
  );
};

export default LastestNews;
