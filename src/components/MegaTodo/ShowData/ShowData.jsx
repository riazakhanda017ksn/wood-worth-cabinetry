import React from "react";

const ShowData = (props) => {
  const { username, description } = props.item.data;
  const { id } = props.item;
  const handleDelete = (id) => {
    props.liftingFunction(id);
  };
  return (
    <div className="Show_data">
      <h1>{username}</h1>
      <h1>{description}</h1>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

export default ShowData;
