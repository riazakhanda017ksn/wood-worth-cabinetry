// import React, { useState } from "react";

// const DataAdd = (props, id) => {
//   const [name, setName] = useState({
//     username: "",
//     description: "",
//   });

//   const { username, description } = name;

//   const handleAddData = (e) => {
//     setName((name) => {
//       return { ...name, [e.target.name]: e.target.value };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.liftingFunction(name);
//     setName({
//       username: "",
//       description: "",
//     });
//   };
//   return (
//     <div className="add_data">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           name="username"
//           placeholder="username"
//           onChange={handleAddData}
//         />{" "}
//         <br />
//         <textarea
//           cols="30"
//           rows="6 "
//           name="description"
//           value={description}
//           onChange={handleAddData}
//         ></textarea>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };

// export default DataAdd;

import React from "react";
import { useState } from "react";

const DataAdd = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    description: "",
  });
  const { username, description } = userInfo;

  const handleInputDataOnchange = (e) => {
    setUserInfo((user) => {
      return { ...user, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.liftingData(userInfo);
    setUserInfo({
      username: "",
      description: "",
    });
  };

  return (
    <div className="DataAdd">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Share your story here</h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleInputDataOnchange}
            value={username}
          />{" "}
          <br />
          <textarea
            name="description"
            id=""
            cols="12"
            rows="10"
            placeholder="description"
            onChange={handleInputDataOnchange}
            value={description}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DataAdd;
