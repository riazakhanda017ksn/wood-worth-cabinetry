import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    if (counter <= 4) {
      return setCounter(counter + 1);
    }
  };
  const handleDecrement = () => {
    if (counter >= 1) {
      return setCounter(counter - 1);
    }
  };
  return (
    <div className="width need">
      <h1>lets buy your own ticket</h1>
      <br />
      <br />
      <div className="button-div">
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={counter} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
      <br />
      <br />
      <h2>
        {counter
          ? `Your Total ticket amount is - ${counter * 150} `
          : "Initial ticket booking price - 150"}
      </h2>
    </div>
  );
};

export default Counter;
