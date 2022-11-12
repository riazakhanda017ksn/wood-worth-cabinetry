import React, { useEffect, useState } from "react";

const useFetchItem = (urlItem) => {
  const [countryData, setCountryData] = useState([]);
  const [filteredUser, setFilteredUser] = useState(countryData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDataFunction = async (url) => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const response = await data.json();
      setCountryData(response);
      setFilteredUser(response);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = (email) => {
    return setFilteredUser((userEmail) =>
      userEmail.filter((emailItem) => emailItem.email !== email)
    );
  };
  const handleSearchItem = (searchItem) => {
    const { search } = searchItem;
    const name = search.toLowerCase();
    const filterSingleItem = countryData.filter((username) => {
      const names = username.name.toLowerCase();
      return names.startsWith(name);
    });
    setFilteredUser(filterSingleItem);
  };
  useEffect(() => {
    setTimeout(() => {
      handleDataFunction(urlItem);
    }, 9000);
  }, [urlItem]);
  return { filteredUser, error, loading, handleSearchItem, handleDelete };
};

export default useFetchItem;
