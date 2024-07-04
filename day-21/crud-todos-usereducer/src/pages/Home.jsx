import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [inputTodo, setInputTodo] = useState("");
  const initialState = { todos: [] };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TODO_POST":
        return { ...state, todos: [...state.todos, action.payload] };
      case "GET_TODO":
        return { ...state, todos: action.payload };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Create
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/todos", { todo: inputTodo })
      .then((res) => {
        dispatch({ type: "TODO_POST", payload: res.data });
        setInputTodo(""); // Clear the input field after submitting
      })
      .catch((error) => {
        console.error("Error posting todo:", error);
      });
  };

  // Fetch data
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_TODO", payload: res.data });
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  //   delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
      dispatch({ type: "DELETE_TODO", payload: id });
    });
  };

  return (
    <div>
      <h2>Todo app with useReducer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {state.todos.map((item, index) => (
          <div key={index}>
            <h3>{item.todo}</h3>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
