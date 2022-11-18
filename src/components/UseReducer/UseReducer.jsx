import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const UseReducer = () => {
  const userItem = [
    { name: "kelvin clain", id: "383883883838" },
    { name: "clain", id: "2372383282828" },
  ];
  // const [users, setUsers] = useState(userItem);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const [modalText, setModalText] = useState("");
  const reducer = (state, action) => {
    const currentUser = [...state.users, action.payload];
    if (action.type === "ADD") {
      return {
        ...state,
        users: currentUser,
        isOpenModal: true,
        modalText: `user has been added`,
      };
    }
    if (action.type === "REMOVED") {
      const filteredUsers = [...state.users].filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
        isOpenModal: true,
        modalText: "user has been added",
      };
    }
    return state;
  };
  // const [userState, dispatch] = useReducer(reducer, {
  //   users: userItem,
  //   isOpenModal: false,
  //   modalText: "",
  // });

  const [usersState, dispatch] = useReducer(reducer, {
    users: userItem,
    isOpenModal: false,
    modalText: "",
  });

  const [input, setInput] = useState("");
  // const [input, setInput] = useState("");
  const submitData = (e) => {
    e.preventDefault();
    const userData = { id: new Date().getTime().toString(), name: input };
    dispatch({ type: "ADD", payload: userData });
    setInput("");
  };

  const Modal = ({ modalText }) => {
    return <h3>{modalText}</h3>;
  };
  const removedData = (id) => {
    return dispatch({ type: "REMOVED", payload: id });
  };
  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      {usersState?.isOpenModal && <Modal modalText={usersState?.modalText} />}
      <form onSubmit={submitData}>
        <input
          type="text"
          required
          name="name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="write and add"
        />
        <div className="text-center">
          <input type="submit" value="submit" />
        </div>
      </form>

      {usersState?.users?.map((users) => {
        return (
          <h3 key={users.id}>
            {users.name}
            <br />
            <br />
            <span
              style={{ border: "1px solid black", cursor: "pointer" }}
              onClick={() => removedData(users.id)}
            >
              REMOVED
            </span>
            <br /> <br />
          </h3>
        );
      })}
    </div>
  );
};

export default UseReducer;
