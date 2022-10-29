import React from "react";
import DataLiftingFromChild from "./components/DataLiftingFromChild/DataLiftingFromChild";

function App() {
  const info = {
    name: "RIaz Ahmed Akhanda",
    email: "riazakhanda@gmail.com",
    password: "563636ksn",
  };
  const dataLifting = (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);
  };
  return (
    <>
      <DataLiftingFromChild info={info} lifting={dataLifting} />
    </>
  );
}

export default App;
