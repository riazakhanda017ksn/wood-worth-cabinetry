import React from "react";
import FAQDeatails from "../FAQDeatails/FAQDeatails";

const FAQContainer = ({ posts, deleteItem }) => {
  return (
    <div className="FAQContainer">
      {posts &&
        posts.map((post) => (
          <FAQDeatails post={post} key={post.id} deleteItem={deleteItem} />
        ))}
    </div>
  );
};

export default FAQContainer;
