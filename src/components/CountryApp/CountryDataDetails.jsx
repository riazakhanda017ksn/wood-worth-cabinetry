import React from "react";

const CountryDataDetails = ({ item, deleteCountry }) => {
  const { flags, name, population, status } = item;
  const handleDeleteCountry = (name) => {
    return deleteCountry(name);
  };
  return (
    <div className="item-box">
      <div
        style={{
          background: `url(${flags.png})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50vh",
          objectFit: "cover",
        }}
      ></div>
      <br />
      <h4>Country Name: {name.common}</h4>
      <h4>Country Population: {population}</h4>
      <h4>Status: {status}</h4> <br />
      <button onClick={() => handleDeleteCountry(name.common)}>delete</button>
    </div>
  );
};

export default CountryDataDetails;
