import React from "react";
import { FiSearch } from "react-icons/fi";
import { debounce } from "lodash";

const SearchInput = ({ setSearchQuery }) => {
  const search = debounce((searchQuery) => setSearchQuery(searchQuery), 500);

  return (
    <div className="relative mt-5">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <FiSearch />
      </span>
      <input
        className="mx-auto flex p-2 pl-12 bg-gray-200 rounded-md text-sm"
        onChange={(el) => search(el.target.value)}
        type="text"
      />
    </div>
  );
};

export default SearchInput;
