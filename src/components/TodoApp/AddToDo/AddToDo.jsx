import React, { useState } from "react";

const AddToDo = (props) => {
  const [name, setName] = useState("");
  const handleDataChange = (e) => {
    setName(e.target.value);
  };
  const onSubmitData = (e) => {
    e.preventDefault();
    props.liftingData(name);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
  };
  return (
    <div className="data-adding">
      <h1>Please generate user name</h1>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleDataChange}
          value={name}
          required
        />
        <button type="submit">Add</button>
      </form>

      <div className="text-center">
        <button>scroll down </button>
      </div>
    </div>
  );
};

export default AddToDo;
