import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({setSearchQuery}) => {
  return (
    <div className="relative mt-5">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <FiSearch />
      </span>
      <input
        className="mx-auto flex p-2 pl-12 bg-gray-50 rounded-md text-sm"
        onChange={el => setSearchQuery(el.target.value)}
        type="text"
      />
    </div>
  );
};

export default SearchInput;
