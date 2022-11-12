import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetchItem from "../CustomHook/useFetchItem";
import SearchUser from "../SearchUser/SearchUser";
import UserData from "../UserData/UserData";

const DataFetchCountry = () => {
  const { filteredUser, error, loading, handleSearchItem, handleDelete } =
    useFetchItem("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <SearchUser handleSearchItem={handleSearchItem} />
      <>
        {error && (
          <div className="loading">
            <h1>{error.message}</h1>
          </div>
        )}
      </>
      <>
        {loading && (
          <div className="loading">
            <h1>please wait ......</h1>
          </div>
        )}
      </>
      <>
        {filteredUser && (
          <div className="parent">
            {filteredUser?.map((data) => (
              <UserData
                key={data.id}
                data={data}
                handleDelete={handleDelete}
                handleSearchItem={handleSearchItem}
              />
            ))}
          </div>
        )}
      </>
    </>
  );
};

export default DataFetchCountry;
