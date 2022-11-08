import React from "react";
import CountryDataDetails from "../CountryDataDetails";
const CountryData = ({ data, deleteCountry }) => {
  return (
    <div className="parent">
      {data.map((item) => (
        <CountryDataDetails
          item={item}
          deleteCountry={deleteCountry}
          key={item?.name?.common}
        />
      ))}
    </div>
  );
};

export default CountryData;
