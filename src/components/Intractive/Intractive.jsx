import React from "react";
import { useState } from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";

const Intractive = () => {
  const [loggedInUser] = useState(true);
  return <>{loggedInUser ? <Login /> : <Home />}</>;
};

export default Intractive;
