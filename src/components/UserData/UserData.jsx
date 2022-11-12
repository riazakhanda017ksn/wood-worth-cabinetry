/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const UserData = ({ data, handleDelete }) => {
  const { name, email, address, website } = data;
  const handleDeleteItem = () => {
    return handleDelete(email);
  };
  return (
    <div className="itemBox">
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>city of {address.city}</h3>
      <h3>
        <a href={`https://${website}`}>{website}</a>
      </h3>
      <h3>
        <button className="btn" onClick={() => handleDeleteItem(email)}>
          delete
        </button>
      </h3>
    </div>
  );
};

export default UserData;
