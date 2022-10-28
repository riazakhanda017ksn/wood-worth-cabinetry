import React from "react";
import { useState } from "react";

const EventManagement = () => {
  const [postState, setPostState] = useState("");
  const handlePost = (e) => {
    setPostState({
      postState: e.target.value,
    });
  };

  const myForm = (e) => {
    e.preventDefault();
    const myPost = postState.postState;
    localStorage.setItem("userPost", JSON.stringify(myPost));
  };
  const deletePost = () => {
    localStorage.clear();
    setTimeout(() => {
      return window.location.reload();
    }, 1000);
  };
  const getPost = localStorage.getItem("userPost");
  const reload = () => {
    setTimeout(() => {
      return window.location.reload();
    }, 1000);
  };

  return (
    <div className="main-div">
      <div className="width need">
        <h1>write your story</h1>
        <br />
        <form onSubmit={myForm}>
          <textarea
            cols="10"
            rows="5"
            placeholder="write your story"
            onChange={handlePost}
          ></textarea>
          <button type="submit" onClick={reload}>
            post story
          </button>
        </form>

        <br />
        <br />
        <p>{postState ? postState?.postState : JSON.parse(getPost)}</p>
        <div>
          {" "}
          <br />
          {getPost && <button onClick={deletePost}>delete post</button>}
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
