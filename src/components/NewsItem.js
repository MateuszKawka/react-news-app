import React from "react";
import moment from "moment"
export const NewsItem = ({ newsData }) => {
  return (
    <article className="flex flex-row rounded-xl bg-white shadow-xl">
      <img
        className="w-2/5 h-32 object-cover rounded-l-xl"
        src={newsData.urlToImage}
        alt="lala"
      />
      <div className="px-3 w-3/5 flex flex-col justify-between py-1">
        <a
          href={newsData.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold text-sm text-right ${
            newsData.content ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {newsData.title}
        </a>
        <p className="line-clamp-3 text-xs text-right">{newsData.content}</p>
        <p className="text-xs line-clamp-2 text-right text-gray-500">{moment(newsData.publishedAt).fromNow()}</p>
      </div>
    </article>
  );
};

export default NewsItem;
