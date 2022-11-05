import React, { useState } from "react";

const FAQDeatails = ({ post, deleteItem }) => {
  const [show, setShow] = useState(false);
  const { name, description } = post.newData;
  const { id } = post;
  const handleDelete = (id) => {
    return deleteItem(id);
  };

  return (
    <>
      <div className="faq-child">
        <div className="show-or-hide">
          <h2>{`${name}'s Stories`}</h2>
          <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
        </div>
        {show ? <p>{description}</p> : ""}
        <div className="delete">
          <button onClick={() => handleDelete(id)}>delete</button>
        </div>
      </div>
    </>
  );
};

export default FAQDeatails;
