import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_PATH } from "../common/consts";
import LastestNews from "../components/LastestNews";
import NewsListContainer from "../containers/NewsListContainer";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const CategoryView = () => {
  const { category } = useParams();
  const [headlines, setHeadlines] = useState([]);
  const [newestNews, setNewestNews] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    console.log(isLoading);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="overflow-y-scroll h-full">
      <div className="absolute z-20 text-white flex items-center p-2">
        <Link to="/">
          <FiChevronLeft className="text-xl" />
        </Link>
        <p>{category}</p>
      </div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <LastestNews news={newestNews} />
            <NewsListContainer news={headlines} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
