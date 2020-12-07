import React, { useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import NewsListContainer from "../containers/NewsListContainer";
import CategoryPicker from "../components/CategoryPicker";
import Spinner from "../components/Spinner"
import { HEADLINES_PATH } from "../common/consts";

const HomeView = () => {
  const [headlines, setHeadlines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getHeadlinesNews = async () => {
    setIsLoading(true);
    await fetch(`${HEADLINES_PATH}&q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setHeadlines(data.articles))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    getHeadlinesNews();
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className="overflow-y-scroll h-full">
      <div className="py-4 bg-white">
        <div className="flex items-center justify-center w-screen container">
          <SearchInput setSearchQuery={setSearchQuery} />
        </div>
        <div className="container"><CategoryPicker /></div>
        
        
      </div>
      
      {isLoading ? <Spinner /> : <NewsListContainer news={headlines} />}
    </div>
  );
};

export default HomeView;
