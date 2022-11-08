import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const handleOnChange = (event) => {
    return setSearch(event.target.value);
  };
  useEffect(() => {
    return handleSearch(search);
  }, [search]);
  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="Search country"
        value={search}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
