import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_PATH } from "../common/consts";
import LastestNews from "../components/LastestNews";
import NewsListContainer from "../containers/NewsListContainer";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const CategoryView = () => {
  const { category } = useParams();
  const [headlines, setHeadlines] = useState([]);
  const [newestNews, setNewestNews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getHeadlinesNews = async () => {
    setIsLoading(true);
    await fetch(`${CATEGORY_PATH}${category}`)
      .then((response) => response.json())
      .then((data) => {
        const { articles } = data;
        setNewestNews(articles.shift());
        setHeadlines(articles);
      })
      .then(() => setIsLoading(false));
  };

  // eslint-disable-next-line
  useEffect(() => {
    getHeadlinesNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="absolute z-20 text-white flex items-center font-semibold p-2">
        <Link to="/">
          <FiChevronLeft className="text-xl" />
        </Link>
        <p>{category}</p>
      </div>
      <LastestNews news={newestNews} />
      <NewsListContainer news={headlines} />
    </div>
  );
};

export default CategoryView;
