import React from "react";
import { useState } from "react";
import Home from "../Home/Home";

const FormAction = () => {
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const valueHandler = (event) => {
    return setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    return localStorage.setItem("userInfo", JSON.stringify(user));
  };

  const loadPage = () => {
    setTimeout(() => {
      return setSuccess(true);
    }, 1000);
  };

  //   const validate = (event) => {
  //     validate(event);
  //     {
  //       let pass = event.target.value;
  //       let reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";
  //       let test = reg.test(pass);
  //       if (test) {
  //         alert("pass");
  //       } else {
  //         alert("fail");
  //       }
  //     }
  //   };

  return (
    <>
      {success === true ? (
        <Home />
      ) : (
        <div className="form">
          <form action="" onSubmit={submitHandler}>
            <h1>create an account</h1>
            <input
              type="text"
              name="name"
              onChange={valueHandler}
              placeholder="name"
              value={name}
              required
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={valueHandler}
              value={email}
              required
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={valueHandler}
              required
            />{" "}
            <br />
            <button type="submit" onClick={loadPage}>
              create account
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FormAction;
