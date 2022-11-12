import React, { useEffect } from "react";
import { useState } from "react";

const SearchUser = ({ handleSearchItem }) => {
  const [searchItem, setSearch] = useState({
    search: "",
  });
  const { search } = searchItem;

  const handleSearch = (e) => {
    return setSearch({ ...searchItem, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return handleSearchItem(searchItem);
  }, [searchItem]);

  return (
    <>
      <div className="SearchItem">
        <input
          type="search"
          name="search"
          placeholder="Search country"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchUser;
