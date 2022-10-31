import React, { useState } from "react";

const DataAdd = (props, id) => {
  const [name, setName] = useState({
    username: "",
    description: "",
  });

  const { username, description } = name;

  const handleAddData = (e) => {
    setName((name) => {
      return { ...name, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.liftingFunction(name);
    setName({
      username: "",
      description: "",
    });
  };
  return (
    <div className="add_data">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handleAddData}
        />{" "}
        <br />
        <textarea
          cols="30"
          rows="6 "
          name="description"
          value={description}
          onChange={handleAddData}
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default DataAdd;
