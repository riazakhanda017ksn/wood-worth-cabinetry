import React from "react";
import { useState } from "react";
import AddToDo from "./components/TodoApp/AddToDo/AddToDo";
import Todo from "./components/TodoApp/Todo/Todo";

const toDoData = ["mr rayan", "mr charlie", "mr alex", "mr nafi"];
function App() {
  const [todoData, setTodoData] = useState(toDoData);
  const handleData = (data) => {
    setTodoData([...todoData, data]);
  };
  return (
    <>
      <AddToDo liftingData={handleData} />
      <Todo todoData={todoData} />
    </>
  );
}

export default App;
