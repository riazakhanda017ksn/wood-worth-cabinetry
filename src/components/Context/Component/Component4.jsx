/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useContext } from "react";
import { UserContext } from "../UseContext/UseContext";

const Component4 = () => {
  const user = useContext(UserContext);
  const { users, text } = user;
  return (
    <div>
      <h1>{text}</h1> <br />
      <h3>{users.name}</h3>
      <h3>
        <a
          href={`http://${users.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {users.website}
        </a>
      </h3>
    </div>
  );
};

export default Component4;
