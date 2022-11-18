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

// import React from "react";
// import { useState } from "react";
// import Container from "./components/MegaTodo/Container/Container";
// import DataAdd from "./components/MegaTodo/DataAdd/DataAdd";
// import { v4 as uuidv4 } from "uuid";
// const App = () => {
//   const [data, setData] = useState([]);
//   const liftingFunction = (data) => {
//     setData((oldData) => {
//       return [...oldData, { id: uuidv4(), data }];
//     });
//   };
//   const handleDataRemove = (id) => {
//     setData((data) => {
//       return data.filter((item) => item.id !== id);
//     });
//   };
//   return (
//     <div className="todo_app">
//       <DataAdd liftingFunction={liftingFunction} />
//       <Container data={data} handleDataRemove={handleDataRemove} />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import Container from "./components/MegaTodo/Container/Container";
// import DataAdd from "./components/MegaTodo/DataAdd/DataAdd";
// import { v4 as uuidv4 } from "uuid";
// const App = () => {
//   const [users, setUsers] = useState([]);
//   const liftingData = (data) => {
//     setUsers((previousUserData) => {
//       return [...previousUserData, { id: uuidv4(), data }];
//     });
//   };
//   const handleRemoveData = (id) => {
//     setUsers((userId) => {
//       return userId.filter((user) => user.id !== id);
//     });
//   };
//   return (
//     <>
//       <DataAdd liftingData={liftingData} />
//       <Container users={users} handleRemoveData={handleRemoveData} />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import FAQContainer from "./components/FAQAPP/FAQContainer/FAQContainer";
// import FaqForm from "./components/FAQAPP/FAQFORM/faqForm";
// import { v4 as uuidv4 } from "uuid";
// const data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
// ];

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const postLiftingPassData = (newData) => {
//     setPosts((oldPost) => {
//       return [...oldPost, { id: uuidv4(), newData }];
//     });
//   };

//   const deleteItem = (id) => {
//     setPosts((previousItem) => {
//       return previousItem.filter((item) => item.id !== id);
//     });
//   };

//   return (
//     <>
//       <FaqForm postLiftingPassData={postLiftingPassData} />
//       <FAQContainer posts={posts} deleteItem={deleteItem} />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import DataFetching from "./components/Hooks/DataFetching";

// const App = () => {
//   return (
//     <>
//       <DataFetching />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import CountryData from "./components/CountryApp/DataShow/CountryData";
// import Search from "./components/CountryApp/DataShow/Search";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [filteredCountry, setFilteredCountry] = useState(data);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const DataFetching = async (url) => {
//     try {
//       setLoading(true);
//       const fetchData = await fetch(url);
//       const response = await fetchData.json();
//       setData(response);
//       setFilteredCountry(response);
//       setLoading(false);
//       setError(null);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       DataFetching("https://restcountries.com/v3.1/all");
//     }, 2000);
//   }, []);

//   const deleteCountry = (name) => {
//     const deleteCountry = filteredCountry.filter((filterItem) => {
//       return filterItem.name.common !== name;
//     });
//     setFilteredCountry(deleteCountry);
//   };
//   const handleSearch = (search) => {
//     const item = search?.toLowerCase();
//     const filterItem = data.filter((value) => {
//       const namesItem = value.name.common.toLowerCase();
//       return namesItem.startsWith(item);
//     });
//     setFilteredCountry(filterItem);
//   };
//   return (
//     <div className="data_fetching text-center">
//       <br />
//       <br />
//       <br />

//       <h1>country app</h1>
//       <Search handleSearch={handleSearch} />
//       {error && (
//         <div className="loading">
//           <h1>{error.message}</h1>
//         </div>
//       )}
//       {loading && (
//         <div className="loading">
//           <h1>please wait </h1>
//         </div>
//       )}

//       <>
//         <CountryData data={filteredCountry} deleteCountry={deleteCountry} />
//       </>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import UseReducer from "./components/UseReducer/UseReducer";
// // import DataFetchCountry from "./components/DataFetchCountry/DataFetchCountry";

// const App = () => {
//   return (
//     <>
//       {/* <DataFetchCountry /> */}
//       <UseReducer />
//     </>
//   );
// };

// export default App;

import React from "react";
import Component1 from "./components/Context/Component/Component1";

const App = () => {
  return (
    <div className="api-management">
      <Component1 />
    </div>
  );
};

export default App;
