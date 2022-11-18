import React from "react";
import { useState } from "react";
import { UserContext } from "../UseContext/UseContext";
import Component2 from "./Component2";

const Component1 = () => {
  const [users] = useState({
    name: "riaz ahmed akhanda",
    website: "riazahmedakhanda.web.app",
  });
  const text = `here is the riaz's details`;
  return (
    <UserContext.Provider value={{ users, text }}>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
