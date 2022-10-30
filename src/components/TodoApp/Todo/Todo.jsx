import React from "react";
import TodoDataPassing from "../TodaDataPassing/TodaDataPassing";

const Todo = ({ todoData }) => {
  return (
    <div className="data-adding">
      <h1>Please generate user name</h1>
      {todoData.map((todo, index) => (
        <TodoDataPassing todo={todo} key={index} />
      ))}
    </div>
  );
};

export default Todo;
