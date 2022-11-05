import React from "react";
import { useState } from "react";

const FaqForm = (props) => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });
  const { name, description } = data;
  const handleDataChange = (e) => {
    setData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.postLiftingPassData(data);
    localStorage.setItem("userData", JSON.stringify(data));
    return setData({
      name: "",
      description: "",
    });
  };
  return (
    <>
      <div className="data-adding">
        <h1>Share your story here</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Story Name"
            value={name}
            required
            onChange={handleDataChange}
          />{" "}
          <br />
          <textarea
            name="description"
            required
            placeholder="write your story"
            cols="30"
            rows="10"
            value={description}
            onChange={handleDataChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FaqForm;
