// import React from "react";
// import { useState } from "react";
// import AddToDo from "./components/TodoApp/AddToDo/AddToDo";
// import Todo from "./components/TodoApp/Todo/Todo";

// const toDoData = ["mr rayan", "mr charlie", "mr alex", "mr nafi"];
// function App() {
//   const [todoData, setTodoData] = useState(toDoData);
//   const handleData = (data) => {
//     setTodoData([...todoData, data]);
//   };
//   return (
//     <>
//       <AddToDo liftingData={handleData} />
//       <Todo todoData={todoData} />
//     </>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import Container from "./components/MegaTodo/Container/Container";
import DataAdd from "./components/MegaTodo/DataAdd/DataAdd";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [data, setData] = useState([]);
  const liftingFunction = (data) => {
    setData((oldData) => {
      return [...oldData, { id: uuidv4(), data }];
    });
  };
  const handleDataRemove = (id) => {
    setData((data) => {
      return data.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="todo_app">
      <DataAdd liftingFunction={liftingFunction} />
      <Container data={data} handleDataRemove={handleDataRemove} />
    </div>
  );
};

export default App;
