import React, { useReducer, useState } from "react";
import axios from "axios";

const Home = () => {
  const [inputTodo, setInputTodo] = useState("");

  const initialState = { todo: [] };
  const reducer = (state, action) => {
    switch (action) {
      case "TODO_POST":
        return { ...state, state: { ...state } };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // create
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(" http://localhost:8080/todos", {
        inputTodo,
      })
      .then((res) => {
        console.log(inputTodo);
        dispatch({ type: "TODO_POST", payload: res });
      });
  };


  return (
    <div>
      <h2>Todo with UseReducer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => {
            setInputTodo(e.target.value);
          }}
          placeholder="Enter todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Home;
