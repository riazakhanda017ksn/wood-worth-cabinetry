import React from "react";

const Home = () => {
  const userInformation = JSON.parse(localStorage.getItem("userInfo"));
  const { name, email, password } = userInformation;

  const deleteInfo = () => {
    setTimeout(() => {
      return localStorage.clear();
    }, 1000);
    window.location.reload();
  };

  return (
    <div className="user-introduce">
      <h1>Your information Here</h1>
      <h3>name - {name}</h3>
      <h3>email - {email}</h3>
      <h3>password - {password} </h3>
      <button onClick={deleteInfo}>delete your account</button>
    </div>
  );
};

export default Home;
