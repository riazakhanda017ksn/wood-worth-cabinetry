import React from "react";

const DataLiftingFromChild = (props) => {
  console.log(props);
  const { name, email, password } = props.info;
  const data = {
    name: "RIaz Ahmed Akhanda",
    email: "riazakhanda@gmail.com",
    password: "563636ksn",
  };
  props.lifting(data);
  return (
    <div className="user-introduce">
      <h1>
        Your information Here and those all data come from
        <br /> parents components
      </h1>
      <h3>name - {name}</h3>
      <h3>email - {email}</h3>
      <h3>password - {password} </h3>
    </div>
  );
};

export default DataLiftingFromChild;
