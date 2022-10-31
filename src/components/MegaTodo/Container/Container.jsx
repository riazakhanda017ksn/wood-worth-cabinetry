import React from "react";
import ShowData from "../ShowData/ShowData";
const Container = (props) => {
  const { handleDataRemove } = props;

  return (
    <div className="container">
      {props?.data?.map((item) => (
        <ShowData
          key={item.id}
          item={item}
          liftingFunction={handleDataRemove}
        />
      ))}
    </div>
  );
};

export default Container;
