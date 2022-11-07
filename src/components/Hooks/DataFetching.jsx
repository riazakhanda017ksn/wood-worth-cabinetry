import React from "react";
import { useState } from "react";
import Images from "../Images/Images";
import useFetch from "./useFetch";
const DataFetching = () => {
  const [search, setSearch] = useState({
    name: "",
  });
  const { name } = search;
  const handleSearch = (e) => {
    setSearch((src) => {
      return { ...src, [e.target.name]: e.target.value };
    });
  };
  const { error, loading, images } = useFetch(
    `https://api.unsplash.com/search/photos?query=${name}||cats&client_id=beIIH6_NzOjiDhNPBB8AWiDAXYwhRZayHJFlhLFSRZM`
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <br /> <br />
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="name"
          placeholder="Search IMage by name"
          onChange={handleSearch}
          value={name}
        />
      </form>
      <br /> <br />
      {error && (
        <div className="loading">
          <h1>{error}</h1>
        </div>
      )}
      {loading && (
        <div className="loading">
          <h1>Please wait........</h1>
        </div>
      )}
      {images && (
        <div className="flex">
          {images?.results?.map((img) => (
            <Images img={img} key={img.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default DataFetching;
