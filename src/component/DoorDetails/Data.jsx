import React, { useState } from "react";

const Data = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="faqs">
        <div
          className="faq"
          onClick={() => {
            setToggle(!toggle);
          }}
          style={{ cursor: "pointer" }}
        >
          <h4>{item.name}</h4>
          <span
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{ cursor: "pointer" }}
          >
            {toggle ? "-" : "+"}
          </span>
        </div>
        {toggle && (
          <div className="faqs-details">
            <li className={item.list.length === 0 ? "d-none " : "d-block"}>
              {" "}
              - {item.list}
            </li>
            <li className={item.otherlist === 0 ? "d-none " : "d-block"}>
              {" "}
              - {item.otherlist}
            </li>
            <li
              className={item.otherlistTwo.length === 0 ? "d-none " : "d-block"}
            >
              {" "}
              - {item.otherlistTwo}
            </li>
            <li className={item.other2.length === 0 ? "d-none " : "d-block"}>
              {" "}
              - {item.other2}
            </li>
            <li className={item.other3.length === 0 ? "d-none " : "d-block"}>
              {" "}
              - {item.other3}
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Data;
